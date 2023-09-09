// @@ Well-Tempered Clavier p 1/6  by Bach
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
const fmtsmo565690 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo56569v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56569v0ar = [];
const smo56541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56541.setAttribute('id', 'smo56541');
smo56569v0ar.push(smo56541);
const smo56543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56543.setAttribute('id', 'smo56543');
smo56569v0ar.push(smo56543);
const smo56544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56544.setAttribute('id', 'smo56544');
smo56569v0ar.push(smo56544);
const smo56545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56545.setAttribute('id', 'smo56545');
smo56569v0ar.push(smo56545);
const smo56546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56546.setAttribute('id', 'smo56546');
smo56569v0ar.push(smo56546);
const smo56547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56547.setAttribute('id', 'smo56547');
smo56569v0ar.push(smo56547);
const smo56548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56548.setAttribute('id', 'smo56548');
smo56569v0ar.push(smo56548);
const smo56549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56549.setAttribute('id', 'smo56549');
smo56569v0ar.push(smo56549);
const smo56550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56550.setAttribute('id', 'smo56550');
smo56569v0ar.push(smo56550);
const smo56551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56551.setAttribute('id', 'smo56551');
smo56569v0ar.push(smo56551);
const smo56552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56552.setAttribute('id', 'smo56552');
smo56569v0ar.push(smo56552);
const smo56553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56553.setAttribute('id', 'smo56553');
smo56569v0ar.push(smo56553);
const smo56554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56554.setAttribute('id', 'smo56554');
smo56569v0ar.push(smo56554);
const smo56555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56555.setAttribute('id', 'smo56555');
smo56569v0ar.push(smo56555);
smo56569v0.addTickables(smo56569v0ar)
fmtsmo565690.joinVoices([smo56569v0]);
const fmtsmo620100 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo62010v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62010v0ar = [];
const smo61989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo61989.setAttribute('id', 'smo61989');
smo62010v0ar.push(smo61989);
const smo61990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo61990.setAttribute('id', 'smo61990');
smo61990.addModifier(new VF.Dot(), 0);
smo62010v0ar.push(smo61990);
const smo61991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo61991.setAttribute('id', 'smo61991');
smo62010v0ar.push(smo61991);
const smo61992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo61992.setAttribute('id', 'smo61992');
smo62010v0ar.push(smo61992);
const smo61993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo61993.setAttribute('id', 'smo61993');
smo61993.addModifier(new VF.Dot(), 0);
smo62010v0ar.push(smo61993);
const smo61994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo61994.setAttribute('id', 'smo61994');
smo62010v0ar.push(smo61994);
smo62010v0.addTickables(smo62010v0ar)
fmtsmo620100.joinVoices([smo62010v0]);
const smo62010v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62010v1ar = [];
const smo61995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo61995.setAttribute('id', 'smo61995');
smo61995.setStyle({ fillStyle: "#115511" });
smo62010v1ar.push(smo61995);
const smo61996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo61996.setAttribute('id', 'smo61996');
smo61996.setStyle({ fillStyle: "#115511" });
smo62010v1ar.push(smo61996);
smo62010v1.addTickables(smo62010v1ar)
fmtsmo620100.joinVoices([smo62010v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65926 = smo56543.getStemDirection();
smo56543.setStemDirection(dirsmo65926);
smo56544.setStemDirection(dirsmo65926);
const smo65926 = new VF.Beam([smo56543,smo56544]);
const dirsmo65927 = smo56545.getStemDirection();
smo56545.setStemDirection(dirsmo65927);
smo56546.setStemDirection(dirsmo65927);
smo56547.setStemDirection(dirsmo65927);
smo56548.setStemDirection(dirsmo65927);
const smo65927 = new VF.Beam([smo56545,smo56546,smo56547,smo56548]);
const dirsmo65928 = smo56550.getStemDirection();
smo56550.setStemDirection(dirsmo65928);
smo56551.setStemDirection(dirsmo65928);
const smo65928 = new VF.Beam([smo56550,smo56551]);
const dirsmo65929 = smo56552.getStemDirection();
smo56552.setStemDirection(dirsmo65929);
smo56553.setStemDirection(dirsmo65929);
smo56554.setStemDirection(dirsmo65929);
smo56555.setStemDirection(dirsmo65929);
const smo65929 = new VF.Beam([smo56552,smo56553,smo56554,smo56555]);
 
// formatting measures in staff group smo55345
fmtsmo565690.format([smo56569v0,smo62010v0,smo62010v1], 507);
const stavesmo56569 = new VF.Stave(90, 294, 589);
stavesmo56569.setAttribute('id', 'stavesmo56569');
stavesmo56569.setBegBarType(1);
stavesmo56569.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo56569.addClef('treble');
stavesmo56569.addTimeSignature('4/4');
stavesmo56569.setContext(context);
stavesmo56569.draw();
smo56569v0.draw(context, stavesmo56569);
smo65926.setContext(context);
smo65926.draw();
smo65927.setContext(context);
smo65927.draw();
smo65928.setContext(context);
smo65928.draw();
smo65929.setContext(context);
smo65929.draw();
const stavesmo62010 = new VF.Stave(90, 498, 589);
stavesmo62010.setAttribute('id', 'stavesmo62010');
stavesmo62010.setBegBarType(1);
stavesmo62010.addClef('treble');
stavesmo62010.addTimeSignature('4/4');
stavesmo62010.setContext(context);
stavesmo62010.draw();
smo62010v0.draw(context, stavesmo62010);
smo62010v1.draw(context, stavesmo62010);
const leftsmo55345stavesmo565691 = new VF.StaveConnector(stavesmo56569, stavesmo62010).setType(3);
leftsmo55345stavesmo565691.setContext(context).draw();
const fmtsmo565971 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo56597v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56597v0ar = [];
const smo56570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56570.setAttribute('id', 'smo56570');
smo56597v0ar.push(smo56570);
const smo56571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56571.setAttribute('id', 'smo56571');
smo56597v0ar.push(smo56571);
const smo56572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56572.setAttribute('id', 'smo56572');
smo56597v0ar.push(smo56572);
const smo56573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56573.setAttribute('id', 'smo56573');
smo56597v0ar.push(smo56573);
const smo56574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56574.setAttribute('id', 'smo56574');
smo56597v0ar.push(smo56574);
const smo56575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56575.setAttribute('id', 'smo56575');
smo56597v0ar.push(smo56575);
const smo56576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56576.setAttribute('id', 'smo56576');
smo56597v0ar.push(smo56576);
const smo56577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56577.setAttribute('id', 'smo56577');
smo56597v0ar.push(smo56577);
const smo56578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56578.setAttribute('id', 'smo56578');
smo56597v0ar.push(smo56578);
const smo56579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56579.setAttribute('id', 'smo56579');
smo56597v0ar.push(smo56579);
const smo56580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56580.setAttribute('id', 'smo56580');
smo56597v0ar.push(smo56580);
const smo56581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56581.setAttribute('id', 'smo56581');
smo56597v0ar.push(smo56581);
const smo56582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56582.setAttribute('id', 'smo56582');
smo56597v0ar.push(smo56582);
const smo56583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56583.setAttribute('id', 'smo56583');
smo56597v0ar.push(smo56583);
smo56597v0.addTickables(smo56597v0ar)
fmtsmo565971.joinVoices([smo56597v0]);
const fmtsmo620321 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo62032v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62032v0ar = [];
const smo62011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo62011.setAttribute('id', 'smo62011');
smo62032v0ar.push(smo62011);
const smo62012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo62012.setAttribute('id', 'smo62012');
smo62012.addModifier(new VF.Dot(), 0);
smo62032v0ar.push(smo62012);
const smo62013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo62013.setAttribute('id', 'smo62013');
smo62032v0ar.push(smo62013);
const smo62014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo62014.setAttribute('id', 'smo62014');
smo62032v0ar.push(smo62014);
const smo62015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo62015.setAttribute('id', 'smo62015');
smo62015.addModifier(new VF.Dot(), 0);
smo62032v0ar.push(smo62015);
const smo62016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo62016.setAttribute('id', 'smo62016');
smo62032v0ar.push(smo62016);
smo62032v0.addTickables(smo62032v0ar)
fmtsmo620321.joinVoices([smo62032v0]);
const smo62032v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62032v1ar = [];
const smo62017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62017.setAttribute('id', 'smo62017');
smo62017.setStyle({ fillStyle: "#115511" });
smo62032v1ar.push(smo62017);
const smo62018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62018.setAttribute('id', 'smo62018');
smo62018.setStyle({ fillStyle: "#115511" });
smo62032v1ar.push(smo62018);
smo62032v1.addTickables(smo62032v1ar)
fmtsmo620321.joinVoices([smo62032v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65934 = smo56571.getStemDirection();
smo56571.setStemDirection(dirsmo65934);
smo56572.setStemDirection(dirsmo65934);
const smo65934 = new VF.Beam([smo56571,smo56572]);
const dirsmo65935 = smo56573.getStemDirection();
smo56573.setStemDirection(dirsmo65935);
smo56574.setStemDirection(dirsmo65935);
smo56575.setStemDirection(dirsmo65935);
smo56576.setStemDirection(dirsmo65935);
const smo65935 = new VF.Beam([smo56573,smo56574,smo56575,smo56576]);
const dirsmo65936 = smo56578.getStemDirection();
smo56578.setStemDirection(dirsmo65936);
smo56579.setStemDirection(dirsmo65936);
const smo65936 = new VF.Beam([smo56578,smo56579]);
const dirsmo65937 = smo56580.getStemDirection();
smo56580.setStemDirection(dirsmo65937);
smo56581.setStemDirection(dirsmo65937);
smo56582.setStemDirection(dirsmo65937);
smo56583.setStemDirection(dirsmo65937);
const smo65937 = new VF.Beam([smo56580,smo56581,smo56582,smo56583]);
 
// formatting measures in staff group smo55345
fmtsmo565971.format([smo56597v0,smo62032v0,smo62032v1], 518);
const stavesmo56597 = new VF.Stave(679, 294, 566);
stavesmo56597.setAttribute('id', 'stavesmo56597');
stavesmo56597.setBegBarType(VF.Barline.type.NONE);
stavesmo56597.setContext(context);
stavesmo56597.draw();
smo56597v0.draw(context, stavesmo56597);
smo65934.setContext(context);
smo65934.draw();
smo65935.setContext(context);
smo65935.draw();
smo65936.setContext(context);
smo65936.draw();
smo65937.setContext(context);
smo65937.draw();
const stavesmo62032 = new VF.Stave(679, 498, 566);
stavesmo62032.setAttribute('id', 'stavesmo62032');
stavesmo62032.setBegBarType(VF.Barline.type.NONE);
stavesmo62032.addClef('bass');
stavesmo62032.setContext(context);
stavesmo62032.draw();
smo62032v0.draw(context, stavesmo62032);
smo62032v1.draw(context, stavesmo62032);
const fmtsmo566292 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo56629v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56629v0ar = [];
const smo56598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56598.setAttribute('id', 'smo56598');
smo56629v0ar.push(smo56598);
const smo56599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56599.setAttribute('id', 'smo56599');
smo56629v0ar.push(smo56599);
const smo56600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56600.setAttribute('id', 'smo56600');
smo56629v0ar.push(smo56600);
const smo56601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56601.setAttribute('id', 'smo56601');
smo56629v0ar.push(smo56601);
const smo56602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56602.setAttribute('id', 'smo56602');
smo56629v0ar.push(smo56602);
const smo56603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56603.setAttribute('id', 'smo56603');
smo56629v0ar.push(smo56603);
const smo56604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56604.setAttribute('id', 'smo56604');
smo56629v0ar.push(smo56604);
const smo56605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56605.setAttribute('id', 'smo56605');
smo56629v0ar.push(smo56605);
const smo56606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56606.setAttribute('id', 'smo56606');
smo56629v0ar.push(smo56606);
const smo56607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56607.setAttribute('id', 'smo56607');
smo56629v0ar.push(smo56607);
const smo56608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56608.setAttribute('id', 'smo56608');
smo56629v0ar.push(smo56608);
const smo56609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56609.setAttribute('id', 'smo56609');
smo56629v0ar.push(smo56609);
const smo56610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56610.setAttribute('id', 'smo56610');
smo56629v0ar.push(smo56610);
const smo56611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo56611.setAttribute('id', 'smo56611');
smo56629v0ar.push(smo56611);
smo56629v0.addTickables(smo56629v0ar)
fmtsmo566292.joinVoices([smo56629v0]);
const smo56629v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56629v1ar = [];
const smo56612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56612.setAttribute('id', 'smo56612');
smo56612.setStyle({ fillStyle: '#aaaaaa7f' });
smo56629v1ar.push(smo56612);
const smo56613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56613.setAttribute('id', 'smo56613');
smo56613.setStyle({ fillStyle: '#aaaaaa7f' });
smo56613.addModifier(new VF.Dot(), 0);
smo56613.addModifier(new VF.Dot(), 0);
smo56629v1ar.push(smo56613);
const smo56614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56614.setAttribute('id', 'smo56614');
smo56614.setStyle({ fillStyle: '#aaaaaa7f' });
smo56629v1ar.push(smo56614);
const smo56615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56615.setAttribute('id', 'smo56615');
smo56615.setStyle({ fillStyle: '#aaaaaa7f' });
smo56615.addModifier(new VF.Dot(), 0);
smo56615.addModifier(new VF.Dot(), 0);
smo56629v1ar.push(smo56615);
smo56629v1.addTickables(smo56629v1ar)
fmtsmo566292.joinVoices([smo56629v1]);
const fmtsmo620542 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo62054v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62054v0ar = [];
const smo62033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/6/r"]}'))
smo62033.setAttribute('id', 'smo62033');
smo62054v0ar.push(smo62033);
const smo62034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62034.setAttribute('id', 'smo62034');
smo62034.addModifier(new VF.Dot(), 0);
smo62054v0ar.push(smo62034);
const smo62035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62035.setAttribute('id', 'smo62035');
smo62054v0ar.push(smo62035);
const smo62036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo62036.setAttribute('id', 'smo62036');
smo62054v0ar.push(smo62036);
const smo62037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62037.setAttribute('id', 'smo62037');
smo62037.addModifier(new VF.Dot(), 0);
smo62054v0ar.push(smo62037);
const smo62038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62038.setAttribute('id', 'smo62038');
smo62054v0ar.push(smo62038);
smo62054v0.addTickables(smo62054v0ar)
fmtsmo620542.joinVoices([smo62054v0]);
const smo62054v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62054v1ar = [];
const smo62039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62039.setAttribute('id', 'smo62039');
smo62039.setStyle({ fillStyle: "#115511" });
smo62054v1ar.push(smo62039);
const smo62040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62040.setAttribute('id', 'smo62040');
smo62040.setStyle({ fillStyle: "#115511" });
smo62054v1ar.push(smo62040);
smo62054v1.addTickables(smo62054v1ar)
fmtsmo620542.joinVoices([smo62054v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65942 = smo56599.getStemDirection();
smo56599.setStemDirection(dirsmo65942);
smo56600.setStemDirection(dirsmo65942);
const smo65942 = new VF.Beam([smo56599,smo56600]);
const dirsmo65943 = smo56601.getStemDirection();
smo56601.setStemDirection(dirsmo65943);
smo56602.setStemDirection(dirsmo65943);
smo56603.setStemDirection(dirsmo65943);
smo56604.setStemDirection(dirsmo65943);
const smo65943 = new VF.Beam([smo56601,smo56602,smo56603,smo56604]);
const dirsmo65944 = smo56606.getStemDirection();
smo56606.setStemDirection(dirsmo65944);
smo56607.setStemDirection(dirsmo65944);
const smo65944 = new VF.Beam([smo56606,smo56607]);
const dirsmo65945 = smo56608.getStemDirection();
smo56608.setStemDirection(dirsmo65945);
smo56609.setStemDirection(dirsmo65945);
smo56610.setStemDirection(dirsmo65945);
smo56611.setStemDirection(dirsmo65945);
const smo65945 = new VF.Beam([smo56608,smo56609,smo56610,smo56611]);
 
// formatting measures in staff group smo55345
fmtsmo566292.format([smo56629v0,smo56629v1,smo62054v0,smo62054v1], 548);
const stavesmo56629 = new VF.Stave(1245, 294, 562);
stavesmo56629.setAttribute('id', 'stavesmo56629');
stavesmo56629.setBegBarType(VF.Barline.type.NONE);
stavesmo56629.setContext(context);
stavesmo56629.draw();
smo56629v0.draw(context, stavesmo56629);
smo56629v1.draw(context, stavesmo56629);
smo65942.setContext(context);
smo65942.draw();
smo65943.setContext(context);
smo65943.draw();
smo65944.setContext(context);
smo65944.draw();
smo65945.setContext(context);
smo65945.draw();
const stavesmo62054 = new VF.Stave(1245, 498, 562);
stavesmo62054.setAttribute('id', 'stavesmo62054');
stavesmo62054.setBegBarType(VF.Barline.type.NONE);
stavesmo62054.setContext(context);
stavesmo62054.draw();
smo62054v0.draw(context, stavesmo62054);
smo62054v1.draw(context, stavesmo62054);
const rightsmo55345stavesmo566291 = new VF.StaveConnector(stavesmo56629, stavesmo62054).setType(0);
rightsmo55345stavesmo566291.setContext(context).draw();
const fmtsmo566613 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo56661v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56661v0ar = [];
const smo56630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56630.setAttribute('id', 'smo56630');
smo56661v0ar.push(smo56630);
const smo56631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56631.setAttribute('id', 'smo56631');
smo56661v0ar.push(smo56631);
const smo56632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56632.setAttribute('id', 'smo56632');
smo56661v0ar.push(smo56632);
const smo56633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56633.setAttribute('id', 'smo56633');
smo56661v0ar.push(smo56633);
const smo56634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56634.setAttribute('id', 'smo56634');
smo56661v0ar.push(smo56634);
const smo56635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56635.setAttribute('id', 'smo56635');
smo56661v0ar.push(smo56635);
const smo56636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56636.setAttribute('id', 'smo56636');
smo56661v0ar.push(smo56636);
const smo56637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56637.setAttribute('id', 'smo56637');
smo56661v0ar.push(smo56637);
const smo56638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56638.setAttribute('id', 'smo56638');
smo56661v0ar.push(smo56638);
const smo56639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56639.setAttribute('id', 'smo56639');
smo56661v0ar.push(smo56639);
const smo56640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56640.setAttribute('id', 'smo56640');
smo56661v0ar.push(smo56640);
const smo56641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56641.setAttribute('id', 'smo56641');
smo56661v0ar.push(smo56641);
const smo56642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56642.setAttribute('id', 'smo56642');
smo56661v0ar.push(smo56642);
const smo56643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56643.setAttribute('id', 'smo56643');
smo56661v0ar.push(smo56643);
smo56661v0.addTickables(smo56661v0ar)
fmtsmo566613.joinVoices([smo56661v0]);
const smo56661v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56661v1ar = [];
const smo56644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56644.setAttribute('id', 'smo56644');
smo56644.setStyle({ fillStyle: '#aaaaaa7f' });
smo56661v1ar.push(smo56644);
const smo56645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56645.setAttribute('id', 'smo56645');
smo56645.setStyle({ fillStyle: '#aaaaaa7f' });
smo56645.addModifier(new VF.Dot(), 0);
smo56645.addModifier(new VF.Dot(), 0);
smo56661v1ar.push(smo56645);
const smo56646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56646.setAttribute('id', 'smo56646');
smo56646.setStyle({ fillStyle: '#aaaaaa7f' });
smo56661v1ar.push(smo56646);
const smo56647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56647.setAttribute('id', 'smo56647');
smo56647.setStyle({ fillStyle: '#aaaaaa7f' });
smo56647.addModifier(new VF.Dot(), 0);
smo56647.addModifier(new VF.Dot(), 0);
smo56661v1ar.push(smo56647);
smo56661v1.addTickables(smo56661v1ar)
fmtsmo566613.joinVoices([smo56661v1]);
const fmtsmo620763 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo62076v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62076v0ar = [];
const smo62055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62055.setAttribute('id', 'smo62055');
smo62076v0ar.push(smo62055);
const smo62056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62056.setAttribute('id', 'smo62056');
smo62056.addModifier(new VF.Dot(), 0);
smo62076v0ar.push(smo62056);
const smo62057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62057.setAttribute('id', 'smo62057');
smo62076v0ar.push(smo62057);
const smo62058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62058.setAttribute('id', 'smo62058');
smo62076v0ar.push(smo62058);
const smo62059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62059.setAttribute('id', 'smo62059');
smo62059.addModifier(new VF.Dot(), 0);
smo62076v0ar.push(smo62059);
const smo62060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62060.setAttribute('id', 'smo62060');
smo62076v0ar.push(smo62060);
smo62076v0.addTickables(smo62076v0ar)
fmtsmo620763.joinVoices([smo62076v0]);
const smo62076v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62076v1ar = [];
const smo62061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62061.setAttribute('id', 'smo62061');
smo62061.setStyle({ fillStyle: "#115511" });
smo62076v1ar.push(smo62061);
const smo62062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62062.setAttribute('id', 'smo62062');
smo62062.setStyle({ fillStyle: "#115511" });
smo62076v1ar.push(smo62062);
smo62076v1.addTickables(smo62076v1ar)
fmtsmo620763.joinVoices([smo62076v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65958 = smo56631.getStemDirection();
smo56631.setStemDirection(dirsmo65958);
smo56632.setStemDirection(dirsmo65958);
const smo65958 = new VF.Beam([smo56631,smo56632]);
const dirsmo65959 = smo56633.getStemDirection();
smo56633.setStemDirection(dirsmo65959);
smo56634.setStemDirection(dirsmo65959);
smo56635.setStemDirection(dirsmo65959);
smo56636.setStemDirection(dirsmo65959);
const smo65959 = new VF.Beam([smo56633,smo56634,smo56635,smo56636]);
const dirsmo65960 = smo56638.getStemDirection();
smo56638.setStemDirection(dirsmo65960);
smo56639.setStemDirection(dirsmo65960);
const smo65960 = new VF.Beam([smo56638,smo56639]);
const dirsmo65961 = smo56640.getStemDirection();
smo56640.setStemDirection(dirsmo65961);
smo56641.setStemDirection(dirsmo65961);
smo56642.setStemDirection(dirsmo65961);
smo56643.setStemDirection(dirsmo65961);
const smo65961 = new VF.Beam([smo56640,smo56641,smo56642,smo56643]);
 
// formatting measures in staff group smo55345
fmtsmo566613.format([smo56661v0,smo56661v1,smo62076v0,smo62076v1], 527);
const stavesmo56661 = new VF.Stave(90, 692, 585);
stavesmo56661.setAttribute('id', 'stavesmo56661');
stavesmo56661.setBegBarType(1);
stavesmo56661.addClef('treble');
stavesmo56661.setContext(context);
stavesmo56661.draw();
smo56661v0.draw(context, stavesmo56661);
smo56661v1.draw(context, stavesmo56661);
smo65958.setContext(context);
smo65958.draw();
smo65959.setContext(context);
smo65959.draw();
smo65960.setContext(context);
smo65960.draw();
smo65961.setContext(context);
smo65961.draw();
const stavesmo62076 = new VF.Stave(90, 766, 585);
stavesmo62076.setAttribute('id', 'stavesmo62076');
stavesmo62076.setBegBarType(1);
stavesmo62076.addClef('treble');
stavesmo62076.setContext(context);
stavesmo62076.draw();
smo62076v0.draw(context, stavesmo62076);
smo62076v1.draw(context, stavesmo62076);
const leftsmo55345stavesmo566611 = new VF.StaveConnector(stavesmo56661, stavesmo62076).setType(3);
leftsmo55345stavesmo566611.setContext(context).draw();
const fmtsmo566934 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo56693v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56693v0ar = [];
const smo56662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56662.setAttribute('id', 'smo56662');
smo56693v0ar.push(smo56662);
const smo56663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56663.setAttribute('id', 'smo56663');
smo56693v0ar.push(smo56663);
const smo56664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56664.setAttribute('id', 'smo56664');
smo56693v0ar.push(smo56664);
const smo56665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo56665.setAttribute('id', 'smo56665');
smo56693v0ar.push(smo56665);
const smo56666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56666.setAttribute('id', 'smo56666');
smo56693v0ar.push(smo56666);
const smo56667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56667.setAttribute('id', 'smo56667');
smo56693v0ar.push(smo56667);
const smo56668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo56668.setAttribute('id', 'smo56668');
smo56693v0ar.push(smo56668);
const smo56669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56669.setAttribute('id', 'smo56669');
smo56693v0ar.push(smo56669);
const smo56670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56670.setAttribute('id', 'smo56670');
smo56693v0ar.push(smo56670);
const smo56671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56671.setAttribute('id', 'smo56671');
smo56693v0ar.push(smo56671);
const smo56672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo56672.setAttribute('id', 'smo56672');
smo56693v0ar.push(smo56672);
const smo56673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56673.setAttribute('id', 'smo56673');
smo56693v0ar.push(smo56673);
const smo56674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo56674.setAttribute('id', 'smo56674');
smo56693v0ar.push(smo56674);
const smo56675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo56675.setAttribute('id', 'smo56675');
smo56693v0ar.push(smo56675);
smo56693v0.addTickables(smo56693v0ar)
fmtsmo566934.joinVoices([smo56693v0]);
const smo56693v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56693v1ar = [];
const smo56676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56676.setAttribute('id', 'smo56676');
smo56676.setStyle({ fillStyle: '#aaaaaa7f' });
smo56693v1ar.push(smo56676);
const smo56677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56677.setAttribute('id', 'smo56677');
smo56677.setStyle({ fillStyle: '#aaaaaa7f' });
smo56677.addModifier(new VF.Dot(), 0);
smo56677.addModifier(new VF.Dot(), 0);
smo56693v1ar.push(smo56677);
const smo56678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56678.setAttribute('id', 'smo56678');
smo56678.setStyle({ fillStyle: '#aaaaaa7f' });
smo56693v1ar.push(smo56678);
const smo56679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56679.setAttribute('id', 'smo56679');
smo56679.setStyle({ fillStyle: '#aaaaaa7f' });
smo56679.addModifier(new VF.Dot(), 0);
smo56679.addModifier(new VF.Dot(), 0);
smo56693v1ar.push(smo56679);
smo56693v1.addTickables(smo56693v1ar)
fmtsmo566934.joinVoices([smo56693v1]);
const fmtsmo620984 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo62098v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62098v0ar = [];
const smo62077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62077.setAttribute('id', 'smo62077');
smo62098v0ar.push(smo62077);
const smo62078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62078.setAttribute('id', 'smo62078');
smo62078.addModifier(new VF.Dot(), 0);
smo62098v0ar.push(smo62078);
const smo62079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62079.setAttribute('id', 'smo62079');
smo62098v0ar.push(smo62079);
const smo62080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62080.setAttribute('id', 'smo62080');
smo62098v0ar.push(smo62080);
const smo62081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62081.setAttribute('id', 'smo62081');
smo62081.addModifier(new VF.Dot(), 0);
smo62098v0ar.push(smo62081);
const smo62082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62082.setAttribute('id', 'smo62082');
smo62098v0ar.push(smo62082);
smo62098v0.addTickables(smo62098v0ar)
fmtsmo620984.joinVoices([smo62098v0]);
const smo62098v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62098v1ar = [];
const smo62083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62083.setAttribute('id', 'smo62083');
smo62083.setStyle({ fillStyle: "#115511" });
smo62098v1ar.push(smo62083);
const smo62084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62084.setAttribute('id', 'smo62084');
smo62084.setStyle({ fillStyle: "#115511" });
smo62098v1ar.push(smo62084);
smo62098v1.addTickables(smo62098v1ar)
fmtsmo620984.joinVoices([smo62098v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65966 = smo56663.getStemDirection();
smo56663.setStemDirection(dirsmo65966);
smo56664.setStemDirection(dirsmo65966);
const smo65966 = new VF.Beam([smo56663,smo56664]);
const dirsmo65967 = smo56665.getStemDirection();
smo56665.setStemDirection(dirsmo65967);
smo56666.setStemDirection(dirsmo65967);
smo56667.setStemDirection(dirsmo65967);
smo56668.setStemDirection(dirsmo65967);
const smo65967 = new VF.Beam([smo56665,smo56666,smo56667,smo56668]);
const dirsmo65968 = smo56670.getStemDirection();
smo56670.setStemDirection(dirsmo65968);
smo56671.setStemDirection(dirsmo65968);
const smo65968 = new VF.Beam([smo56670,smo56671]);
const dirsmo65969 = smo56672.getStemDirection();
smo56672.setStemDirection(dirsmo65969);
smo56673.setStemDirection(dirsmo65969);
smo56674.setStemDirection(dirsmo65969);
smo56675.setStemDirection(dirsmo65969);
const smo65969 = new VF.Beam([smo56672,smo56673,smo56674,smo56675]);
 
// formatting measures in staff group smo55345
fmtsmo566934.format([smo56693v0,smo56693v1,smo62098v0,smo62098v1], 527);
const stavesmo56693 = new VF.Stave(675, 692, 541);
stavesmo56693.setAttribute('id', 'stavesmo56693');
stavesmo56693.setBegBarType(VF.Barline.type.NONE);
stavesmo56693.setContext(context);
stavesmo56693.draw();
smo56693v0.draw(context, stavesmo56693);
smo56693v1.draw(context, stavesmo56693);
smo65966.setContext(context);
smo65966.draw();
smo65967.setContext(context);
smo65967.draw();
smo65968.setContext(context);
smo65968.draw();
smo65969.setContext(context);
smo65969.draw();
const stavesmo62098 = new VF.Stave(675, 766, 541);
stavesmo62098.setAttribute('id', 'stavesmo62098');
stavesmo62098.setBegBarType(VF.Barline.type.NONE);
stavesmo62098.setContext(context);
stavesmo62098.draw();
smo62098v0.draw(context, stavesmo62098);
smo62098v1.draw(context, stavesmo62098);
const fmtsmo567255 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo56725v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56725v0ar = [];
const smo56694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56694.setAttribute('id', 'smo56694');
smo56725v0ar.push(smo56694);
const smo56695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56695.setAttribute('id', 'smo56695');
const smo566950acc = new VF.Accidental('#');
smo56695.addModifier(smo566950acc, 0);
smo56725v0ar.push(smo56695);
const smo56696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56696.setAttribute('id', 'smo56696');
smo56725v0ar.push(smo56696);
const smo56697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56697.setAttribute('id', 'smo56697');
smo56725v0ar.push(smo56697);
const smo56698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56698.setAttribute('id', 'smo56698');
smo56725v0ar.push(smo56698);
const smo56699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56699.setAttribute('id', 'smo56699');
smo56725v0ar.push(smo56699);
const smo56700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56700.setAttribute('id', 'smo56700');
smo56725v0ar.push(smo56700);
const smo56701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56701.setAttribute('id', 'smo56701');
smo56725v0ar.push(smo56701);
const smo56702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56702.setAttribute('id', 'smo56702');
smo56725v0ar.push(smo56702);
const smo56703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56703.setAttribute('id', 'smo56703');
smo56725v0ar.push(smo56703);
const smo56704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56704.setAttribute('id', 'smo56704');
smo56725v0ar.push(smo56704);
const smo56705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56705.setAttribute('id', 'smo56705');
smo56725v0ar.push(smo56705);
const smo56706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56706.setAttribute('id', 'smo56706');
smo56725v0ar.push(smo56706);
const smo56707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56707.setAttribute('id', 'smo56707');
smo56725v0ar.push(smo56707);
smo56725v0.addTickables(smo56725v0ar)
fmtsmo567255.joinVoices([smo56725v0]);
const smo56725v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56725v1ar = [];
const smo56708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56708.setAttribute('id', 'smo56708');
smo56708.setStyle({ fillStyle: '#aaaaaa7f' });
smo56725v1ar.push(smo56708);
const smo56709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56709.setAttribute('id', 'smo56709');
smo56709.setStyle({ fillStyle: '#aaaaaa7f' });
smo56709.addModifier(new VF.Dot(), 0);
smo56709.addModifier(new VF.Dot(), 0);
smo56725v1ar.push(smo56709);
const smo56710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56710.setAttribute('id', 'smo56710');
smo56710.setStyle({ fillStyle: '#aaaaaa7f' });
smo56725v1ar.push(smo56710);
const smo56711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56711.setAttribute('id', 'smo56711');
smo56711.setStyle({ fillStyle: '#aaaaaa7f' });
smo56711.addModifier(new VF.Dot(), 0);
smo56711.addModifier(new VF.Dot(), 0);
smo56725v1ar.push(smo56711);
smo56725v1.addTickables(smo56725v1ar)
fmtsmo567255.joinVoices([smo56725v1]);
const fmtsmo621205 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo62120v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62120v0ar = [];
const smo62099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62099.setAttribute('id', 'smo62099');
smo62120v0ar.push(smo62099);
const smo62100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62100.setAttribute('id', 'smo62100');
smo62100.addModifier(new VF.Dot(), 0);
smo62120v0ar.push(smo62100);
const smo62101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62101.setAttribute('id', 'smo62101');
smo62120v0ar.push(smo62101);
const smo62102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62102.setAttribute('id', 'smo62102');
smo62120v0ar.push(smo62102);
const smo62103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62103.setAttribute('id', 'smo62103');
smo62103.addModifier(new VF.Dot(), 0);
smo62120v0ar.push(smo62103);
const smo62104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62104.setAttribute('id', 'smo62104');
smo62120v0ar.push(smo62104);
smo62120v0.addTickables(smo62120v0ar)
fmtsmo621205.joinVoices([smo62120v0]);
const smo62120v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62120v1ar = [];
const smo62105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62105.setAttribute('id', 'smo62105');
smo62105.setStyle({ fillStyle: "#115511" });
smo62120v1ar.push(smo62105);
const smo62106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62106.setAttribute('id', 'smo62106');
smo62106.setStyle({ fillStyle: "#115511" });
smo62120v1ar.push(smo62106);
smo62120v1.addTickables(smo62120v1ar)
fmtsmo621205.joinVoices([smo62120v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65974 = smo56695.getStemDirection();
smo56695.setStemDirection(dirsmo65974);
smo56696.setStemDirection(dirsmo65974);
const smo65974 = new VF.Beam([smo56695,smo56696]);
const dirsmo65975 = smo56697.getStemDirection();
smo56697.setStemDirection(dirsmo65975);
smo56698.setStemDirection(dirsmo65975);
smo56699.setStemDirection(dirsmo65975);
smo56700.setStemDirection(dirsmo65975);
const smo65975 = new VF.Beam([smo56697,smo56698,smo56699,smo56700]);
const dirsmo65976 = smo56702.getStemDirection();
smo56702.setStemDirection(dirsmo65976);
smo56703.setStemDirection(dirsmo65976);
const smo65976 = new VF.Beam([smo56702,smo56703]);
const dirsmo65977 = smo56704.getStemDirection();
smo56704.setStemDirection(dirsmo65977);
smo56705.setStemDirection(dirsmo65977);
smo56706.setStemDirection(dirsmo65977);
smo56707.setStemDirection(dirsmo65977);
const smo65977 = new VF.Beam([smo56704,smo56705,smo56706,smo56707]);
 
// formatting measures in staff group smo55345
fmtsmo567255.format([smo56725v0,smo56725v1,smo62120v0,smo62120v1], 577);
const stavesmo56725 = new VF.Stave(1216, 692, 591);
stavesmo56725.setAttribute('id', 'stavesmo56725');
stavesmo56725.setBegBarType(VF.Barline.type.NONE);
stavesmo56725.setContext(context);
stavesmo56725.draw();
smo56725v0.draw(context, stavesmo56725);
smo56725v1.draw(context, stavesmo56725);
smo65974.setContext(context);
smo65974.draw();
smo65975.setContext(context);
smo65975.draw();
smo65976.setContext(context);
smo65976.draw();
smo65977.setContext(context);
smo65977.draw();
const stavesmo62120 = new VF.Stave(1216, 766, 591);
stavesmo62120.setAttribute('id', 'stavesmo62120');
stavesmo62120.setBegBarType(VF.Barline.type.NONE);
stavesmo62120.setContext(context);
stavesmo62120.draw();
smo62120v0.draw(context, stavesmo62120);
smo62120v1.draw(context, stavesmo62120);
const rightsmo55345stavesmo567251 = new VF.StaveConnector(stavesmo56725, stavesmo62120).setType(0);
rightsmo55345stavesmo567251.setContext(context).draw();
const fmtsmo567576 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo56757v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56757v0ar = [];
const smo56726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56726.setAttribute('id', 'smo56726');
smo56757v0ar.push(smo56726);
const smo56727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56727.setAttribute('id', 'smo56727');
smo56757v0ar.push(smo56727);
const smo56728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56728.setAttribute('id', 'smo56728');
smo56757v0ar.push(smo56728);
const smo56729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo56729.setAttribute('id', 'smo56729');
smo56757v0ar.push(smo56729);
const smo56730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56730.setAttribute('id', 'smo56730');
smo56757v0ar.push(smo56730);
const smo56731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56731.setAttribute('id', 'smo56731');
smo56757v0ar.push(smo56731);
const smo56732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo56732.setAttribute('id', 'smo56732');
smo56757v0ar.push(smo56732);
const smo56733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56733.setAttribute('id', 'smo56733');
smo56757v0ar.push(smo56733);
const smo56734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56734.setAttribute('id', 'smo56734');
smo56757v0ar.push(smo56734);
const smo56735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56735.setAttribute('id', 'smo56735');
smo56757v0ar.push(smo56735);
const smo56736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo56736.setAttribute('id', 'smo56736');
smo56757v0ar.push(smo56736);
const smo56737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56737.setAttribute('id', 'smo56737');
smo56757v0ar.push(smo56737);
const smo56738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56738.setAttribute('id', 'smo56738');
smo56757v0ar.push(smo56738);
const smo56739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo56739.setAttribute('id', 'smo56739');
smo56757v0ar.push(smo56739);
smo56757v0.addTickables(smo56757v0ar)
fmtsmo567576.joinVoices([smo56757v0]);
const smo56757v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56757v1ar = [];
const smo56740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56740.setAttribute('id', 'smo56740');
smo56740.setStyle({ fillStyle: '#aaaaaa7f' });
smo56757v1ar.push(smo56740);
const smo56741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56741.setAttribute('id', 'smo56741');
smo56741.setStyle({ fillStyle: '#aaaaaa7f' });
smo56741.addModifier(new VF.Dot(), 0);
smo56741.addModifier(new VF.Dot(), 0);
smo56757v1ar.push(smo56741);
const smo56742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56742.setAttribute('id', 'smo56742');
smo56742.setStyle({ fillStyle: '#aaaaaa7f' });
smo56757v1ar.push(smo56742);
const smo56743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56743.setAttribute('id', 'smo56743');
smo56743.setStyle({ fillStyle: '#aaaaaa7f' });
smo56743.addModifier(new VF.Dot(), 0);
smo56743.addModifier(new VF.Dot(), 0);
smo56757v1ar.push(smo56743);
smo56757v1.addTickables(smo56757v1ar)
fmtsmo567576.joinVoices([smo56757v1]);
const fmtsmo621426 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo62142v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62142v0ar = [];
const smo62121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62121.setAttribute('id', 'smo62121');
smo62142v0ar.push(smo62121);
const smo62122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62122.setAttribute('id', 'smo62122');
smo62122.addModifier(new VF.Dot(), 0);
smo62142v0ar.push(smo62122);
const smo62123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62123.setAttribute('id', 'smo62123');
smo62142v0ar.push(smo62123);
const smo62124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62124.setAttribute('id', 'smo62124');
smo62142v0ar.push(smo62124);
const smo62125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62125.setAttribute('id', 'smo62125');
smo62125.addModifier(new VF.Dot(), 0);
smo62142v0ar.push(smo62125);
const smo62126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62126.setAttribute('id', 'smo62126');
smo62142v0ar.push(smo62126);
smo62142v0.addTickables(smo62142v0ar)
fmtsmo621426.joinVoices([smo62142v0]);
const smo62142v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62142v1ar = [];
const smo62127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62127.setAttribute('id', 'smo62127');
smo62127.setStyle({ fillStyle: "#115511" });
smo62142v1ar.push(smo62127);
const smo62128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62128.setAttribute('id', 'smo62128');
smo62128.setStyle({ fillStyle: "#115511" });
smo62142v1ar.push(smo62128);
smo62142v1.addTickables(smo62142v1ar)
fmtsmo621426.joinVoices([smo62142v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65990 = smo56727.getStemDirection();
smo56727.setStemDirection(dirsmo65990);
smo56728.setStemDirection(dirsmo65990);
const smo65990 = new VF.Beam([smo56727,smo56728]);
const dirsmo65991 = smo56729.getStemDirection();
smo56729.setStemDirection(dirsmo65991);
smo56730.setStemDirection(dirsmo65991);
smo56731.setStemDirection(dirsmo65991);
smo56732.setStemDirection(dirsmo65991);
const smo65991 = new VF.Beam([smo56729,smo56730,smo56731,smo56732]);
const dirsmo65992 = smo56734.getStemDirection();
smo56734.setStemDirection(dirsmo65992);
smo56735.setStemDirection(dirsmo65992);
const smo65992 = new VF.Beam([smo56734,smo56735]);
const dirsmo65993 = smo56736.getStemDirection();
smo56736.setStemDirection(dirsmo65993);
smo56737.setStemDirection(dirsmo65993);
smo56738.setStemDirection(dirsmo65993);
smo56739.setStemDirection(dirsmo65993);
const smo65993 = new VF.Beam([smo56736,smo56737,smo56738,smo56739]);
 
// formatting measures in staff group smo55345
fmtsmo567576.format([smo56757v0,smo56757v1,smo62142v0,smo62142v1], 544);
const stavesmo56757 = new VF.Stave(90, 955, 602);
stavesmo56757.setAttribute('id', 'stavesmo56757');
stavesmo56757.setBegBarType(1);
stavesmo56757.addClef('treble');
stavesmo56757.setContext(context);
stavesmo56757.draw();
smo56757v0.draw(context, stavesmo56757);
smo56757v1.draw(context, stavesmo56757);
smo65990.setContext(context);
smo65990.draw();
smo65991.setContext(context);
smo65991.draw();
smo65992.setContext(context);
smo65992.draw();
smo65993.setContext(context);
smo65993.draw();
const stavesmo62142 = new VF.Stave(90, 1032, 602);
stavesmo62142.setAttribute('id', 'stavesmo62142');
stavesmo62142.setBegBarType(1);
stavesmo62142.addClef('treble');
stavesmo62142.setContext(context);
stavesmo62142.draw();
smo62142v0.draw(context, stavesmo62142);
smo62142v1.draw(context, stavesmo62142);
const leftsmo55345stavesmo567571 = new VF.StaveConnector(stavesmo56757, stavesmo62142).setType(3);
leftsmo55345stavesmo567571.setContext(context).draw();
const fmtsmo567897 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo56789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56789v0ar = [];
const smo56758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56758.setAttribute('id', 'smo56758');
smo56789v0ar.push(smo56758);
const smo56759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56759.setAttribute('id', 'smo56759');
smo56789v0ar.push(smo56759);
const smo56760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56760.setAttribute('id', 'smo56760');
smo56789v0ar.push(smo56760);
const smo56761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56761.setAttribute('id', 'smo56761');
smo56789v0ar.push(smo56761);
const smo56762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56762.setAttribute('id', 'smo56762');
smo56789v0ar.push(smo56762);
const smo56763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56763.setAttribute('id', 'smo56763');
smo56789v0ar.push(smo56763);
const smo56764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56764.setAttribute('id', 'smo56764');
smo56789v0ar.push(smo56764);
const smo56765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56765.setAttribute('id', 'smo56765');
smo56789v0ar.push(smo56765);
const smo56766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56766.setAttribute('id', 'smo56766');
smo56789v0ar.push(smo56766);
const smo56767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56767.setAttribute('id', 'smo56767');
smo56789v0ar.push(smo56767);
const smo56768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56768.setAttribute('id', 'smo56768');
smo56789v0ar.push(smo56768);
const smo56769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56769.setAttribute('id', 'smo56769');
smo56789v0ar.push(smo56769);
const smo56770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56770.setAttribute('id', 'smo56770');
smo56789v0ar.push(smo56770);
const smo56771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56771.setAttribute('id', 'smo56771');
smo56789v0ar.push(smo56771);
smo56789v0.addTickables(smo56789v0ar)
fmtsmo567897.joinVoices([smo56789v0]);
const smo56789v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56789v1ar = [];
const smo56772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56772.setAttribute('id', 'smo56772');
smo56772.setStyle({ fillStyle: '#aaaaaa7f' });
smo56789v1ar.push(smo56772);
const smo56773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56773.setAttribute('id', 'smo56773');
smo56773.setStyle({ fillStyle: '#aaaaaa7f' });
smo56773.addModifier(new VF.Dot(), 0);
smo56773.addModifier(new VF.Dot(), 0);
smo56789v1ar.push(smo56773);
const smo56774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56774.setAttribute('id', 'smo56774');
smo56774.setStyle({ fillStyle: '#aaaaaa7f' });
smo56789v1ar.push(smo56774);
const smo56775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56775.setAttribute('id', 'smo56775');
smo56775.setStyle({ fillStyle: '#aaaaaa7f' });
smo56775.addModifier(new VF.Dot(), 0);
smo56775.addModifier(new VF.Dot(), 0);
smo56789v1ar.push(smo56775);
smo56789v1.addTickables(smo56789v1ar)
fmtsmo567897.joinVoices([smo56789v1]);
const fmtsmo621647 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo62164v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62164v0ar = [];
const smo62143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62143.setAttribute('id', 'smo62143');
smo62164v0ar.push(smo62143);
const smo62144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62144.setAttribute('id', 'smo62144');
smo62144.addModifier(new VF.Dot(), 0);
smo62164v0ar.push(smo62144);
const smo62145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62145.setAttribute('id', 'smo62145');
smo62164v0ar.push(smo62145);
const smo62146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62146.setAttribute('id', 'smo62146');
smo62164v0ar.push(smo62146);
const smo62147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62147.setAttribute('id', 'smo62147');
smo62147.addModifier(new VF.Dot(), 0);
smo62164v0ar.push(smo62147);
const smo62148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62148.setAttribute('id', 'smo62148');
smo62164v0ar.push(smo62148);
smo62164v0.addTickables(smo62164v0ar)
fmtsmo621647.joinVoices([smo62164v0]);
const smo62164v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62164v1ar = [];
const smo62149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62149.setAttribute('id', 'smo62149');
smo62149.setStyle({ fillStyle: "#115511" });
smo62164v1ar.push(smo62149);
const smo62150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62150.setAttribute('id', 'smo62150');
smo62150.setStyle({ fillStyle: "#115511" });
smo62164v1ar.push(smo62150);
smo62164v1.addTickables(smo62164v1ar)
fmtsmo621647.joinVoices([smo62164v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo65998 = smo56759.getStemDirection();
smo56759.setStemDirection(dirsmo65998);
smo56760.setStemDirection(dirsmo65998);
const smo65998 = new VF.Beam([smo56759,smo56760]);
const dirsmo65999 = smo56761.getStemDirection();
smo56761.setStemDirection(dirsmo65999);
smo56762.setStemDirection(dirsmo65999);
smo56763.setStemDirection(dirsmo65999);
smo56764.setStemDirection(dirsmo65999);
const smo65999 = new VF.Beam([smo56761,smo56762,smo56763,smo56764]);
const dirsmo66000 = smo56766.getStemDirection();
smo56766.setStemDirection(dirsmo66000);
smo56767.setStemDirection(dirsmo66000);
const smo66000 = new VF.Beam([smo56766,smo56767]);
const dirsmo66001 = smo56768.getStemDirection();
smo56768.setStemDirection(dirsmo66001);
smo56769.setStemDirection(dirsmo66001);
smo56770.setStemDirection(dirsmo66001);
smo56771.setStemDirection(dirsmo66001);
const smo66001 = new VF.Beam([smo56768,smo56769,smo56770,smo56771]);
 
// formatting measures in staff group smo55345
fmtsmo567897.format([smo56789v0,smo56789v1,smo62164v0,smo62164v1], 544);
const stavesmo56789 = new VF.Stave(692, 955, 558);
stavesmo56789.setAttribute('id', 'stavesmo56789');
stavesmo56789.setBegBarType(VF.Barline.type.NONE);
stavesmo56789.setContext(context);
stavesmo56789.draw();
smo56789v0.draw(context, stavesmo56789);
smo56789v1.draw(context, stavesmo56789);
smo65998.setContext(context);
smo65998.draw();
smo65999.setContext(context);
smo65999.draw();
smo66000.setContext(context);
smo66000.draw();
smo66001.setContext(context);
smo66001.draw();
const stavesmo62164 = new VF.Stave(692, 1032, 558);
stavesmo62164.setAttribute('id', 'stavesmo62164');
stavesmo62164.setBegBarType(VF.Barline.type.NONE);
stavesmo62164.setContext(context);
stavesmo62164.draw();
smo62164v0.draw(context, stavesmo62164);
smo62164v1.draw(context, stavesmo62164);
const fmtsmo568218 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo56821v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56821v0ar = [];
const smo56790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56790.setAttribute('id', 'smo56790');
smo56821v0ar.push(smo56790);
const smo56791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56791.setAttribute('id', 'smo56791');
smo56821v0ar.push(smo56791);
const smo56792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56792.setAttribute('id', 'smo56792');
smo56821v0ar.push(smo56792);
const smo56793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56793.setAttribute('id', 'smo56793');
smo56821v0ar.push(smo56793);
const smo56794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56794.setAttribute('id', 'smo56794');
smo56821v0ar.push(smo56794);
const smo56795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56795.setAttribute('id', 'smo56795');
smo56821v0ar.push(smo56795);
const smo56796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56796.setAttribute('id', 'smo56796');
smo56821v0ar.push(smo56796);
const smo56797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56797.setAttribute('id', 'smo56797');
smo56821v0ar.push(smo56797);
const smo56798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56798.setAttribute('id', 'smo56798');
smo56821v0ar.push(smo56798);
const smo56799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56799.setAttribute('id', 'smo56799');
smo56821v0ar.push(smo56799);
const smo56800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56800.setAttribute('id', 'smo56800');
smo56821v0ar.push(smo56800);
const smo56801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56801.setAttribute('id', 'smo56801');
smo56821v0ar.push(smo56801);
const smo56802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56802.setAttribute('id', 'smo56802');
smo56821v0ar.push(smo56802);
const smo56803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56803.setAttribute('id', 'smo56803');
smo56821v0ar.push(smo56803);
smo56821v0.addTickables(smo56821v0ar)
fmtsmo568218.joinVoices([smo56821v0]);
const smo56821v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56821v1ar = [];
const smo56804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56804.setAttribute('id', 'smo56804');
smo56804.setStyle({ fillStyle: '#aaaaaa7f' });
smo56821v1ar.push(smo56804);
const smo56805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56805.setAttribute('id', 'smo56805');
smo56805.setStyle({ fillStyle: '#aaaaaa7f' });
smo56805.addModifier(new VF.Dot(), 0);
smo56805.addModifier(new VF.Dot(), 0);
smo56821v1ar.push(smo56805);
const smo56806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56806.setAttribute('id', 'smo56806');
smo56806.setStyle({ fillStyle: '#aaaaaa7f' });
smo56821v1ar.push(smo56806);
const smo56807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56807.setAttribute('id', 'smo56807');
smo56807.setStyle({ fillStyle: '#aaaaaa7f' });
smo56807.addModifier(new VF.Dot(), 0);
smo56807.addModifier(new VF.Dot(), 0);
smo56821v1ar.push(smo56807);
smo56821v1.addTickables(smo56821v1ar)
fmtsmo568218.joinVoices([smo56821v1]);
const fmtsmo621868 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo62186v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62186v0ar = [];
const smo62165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62165.setAttribute('id', 'smo62165');
smo62186v0ar.push(smo62165);
const smo62166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62166.setAttribute('id', 'smo62166');
smo62166.addModifier(new VF.Dot(), 0);
smo62186v0ar.push(smo62166);
const smo62167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62167.setAttribute('id', 'smo62167');
smo62186v0ar.push(smo62167);
const smo62168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62168.setAttribute('id', 'smo62168');
smo62186v0ar.push(smo62168);
const smo62169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62169.setAttribute('id', 'smo62169');
smo62169.addModifier(new VF.Dot(), 0);
smo62186v0ar.push(smo62169);
const smo62170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62170.setAttribute('id', 'smo62170');
smo62186v0ar.push(smo62170);
smo62186v0.addTickables(smo62186v0ar)
fmtsmo621868.joinVoices([smo62186v0]);
const smo62186v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62186v1ar = [];
const smo62171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62171.setAttribute('id', 'smo62171');
smo62171.setStyle({ fillStyle: "#115511" });
smo62186v1ar.push(smo62171);
const smo62172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62172.setAttribute('id', 'smo62172');
smo62172.setStyle({ fillStyle: "#115511" });
smo62186v1ar.push(smo62172);
smo62186v1.addTickables(smo62186v1ar)
fmtsmo621868.joinVoices([smo62186v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66006 = smo56791.getStemDirection();
smo56791.setStemDirection(dirsmo66006);
smo56792.setStemDirection(dirsmo66006);
const smo66006 = new VF.Beam([smo56791,smo56792]);
const dirsmo66007 = smo56793.getStemDirection();
smo56793.setStemDirection(dirsmo66007);
smo56794.setStemDirection(dirsmo66007);
smo56795.setStemDirection(dirsmo66007);
smo56796.setStemDirection(dirsmo66007);
const smo66007 = new VF.Beam([smo56793,smo56794,smo56795,smo56796]);
const dirsmo66008 = smo56798.getStemDirection();
smo56798.setStemDirection(dirsmo66008);
smo56799.setStemDirection(dirsmo66008);
const smo66008 = new VF.Beam([smo56798,smo56799]);
const dirsmo66009 = smo56800.getStemDirection();
smo56800.setStemDirection(dirsmo66009);
smo56801.setStemDirection(dirsmo66009);
smo56802.setStemDirection(dirsmo66009);
smo56803.setStemDirection(dirsmo66009);
const smo66009 = new VF.Beam([smo56800,smo56801,smo56802,smo56803]);
 
// formatting measures in staff group smo55345
fmtsmo568218.format([smo56821v0,smo56821v1,smo62186v0,smo62186v1], 544);
const stavesmo56821 = new VF.Stave(1250, 955, 558);
stavesmo56821.setAttribute('id', 'stavesmo56821');
stavesmo56821.setBegBarType(VF.Barline.type.NONE);
stavesmo56821.setContext(context);
stavesmo56821.draw();
smo56821v0.draw(context, stavesmo56821);
smo56821v1.draw(context, stavesmo56821);
smo66006.setContext(context);
smo66006.draw();
smo66007.setContext(context);
smo66007.draw();
smo66008.setContext(context);
smo66008.draw();
smo66009.setContext(context);
smo66009.draw();
const stavesmo62186 = new VF.Stave(1250, 1032, 558);
stavesmo62186.setAttribute('id', 'stavesmo62186');
stavesmo62186.setBegBarType(VF.Barline.type.NONE);
stavesmo62186.setContext(context);
stavesmo62186.draw();
smo62186v0.draw(context, stavesmo62186);
smo62186v1.draw(context, stavesmo62186);
const rightsmo55345stavesmo568211 = new VF.StaveConnector(stavesmo56821, stavesmo62186).setType(0);
rightsmo55345stavesmo568211.setContext(context).draw();
const fmtsmo568539 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo56853v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56853v0ar = [];
const smo56822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56822.setAttribute('id', 'smo56822');
smo56853v0ar.push(smo56822);
const smo56823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56823.setAttribute('id', 'smo56823');
smo56853v0ar.push(smo56823);
const smo56824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56824.setAttribute('id', 'smo56824');
const smo568240acc = new VF.Accidental('#');
smo56824.addModifier(smo568240acc, 0);
smo56853v0ar.push(smo56824);
const smo56825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56825.setAttribute('id', 'smo56825');
smo56853v0ar.push(smo56825);
const smo56826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56826.setAttribute('id', 'smo56826');
smo56853v0ar.push(smo56826);
const smo56827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56827.setAttribute('id', 'smo56827');
smo56853v0ar.push(smo56827);
const smo56828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56828.setAttribute('id', 'smo56828');
smo56853v0ar.push(smo56828);
const smo56829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56829.setAttribute('id', 'smo56829');
smo56853v0ar.push(smo56829);
const smo56830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56830.setAttribute('id', 'smo56830');
smo56853v0ar.push(smo56830);
const smo56831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56831.setAttribute('id', 'smo56831');
smo56853v0ar.push(smo56831);
const smo56832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56832.setAttribute('id', 'smo56832');
smo56853v0ar.push(smo56832);
const smo56833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56833.setAttribute('id', 'smo56833');
smo56853v0ar.push(smo56833);
const smo56834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo56834.setAttribute('id', 'smo56834');
smo56853v0ar.push(smo56834);
const smo56835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56835.setAttribute('id', 'smo56835');
smo56853v0ar.push(smo56835);
smo56853v0.addTickables(smo56853v0ar)
fmtsmo568539.joinVoices([smo56853v0]);
const smo56853v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56853v1ar = [];
const smo56836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56836.setAttribute('id', 'smo56836');
smo56836.setStyle({ fillStyle: '#aaaaaa7f' });
smo56853v1ar.push(smo56836);
const smo56837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56837.setAttribute('id', 'smo56837');
smo56837.setStyle({ fillStyle: '#aaaaaa7f' });
smo56837.addModifier(new VF.Dot(), 0);
smo56837.addModifier(new VF.Dot(), 0);
smo56853v1ar.push(smo56837);
const smo56838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56838.setAttribute('id', 'smo56838');
smo56838.setStyle({ fillStyle: '#aaaaaa7f' });
smo56853v1ar.push(smo56838);
const smo56839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56839.setAttribute('id', 'smo56839');
smo56839.setStyle({ fillStyle: '#aaaaaa7f' });
smo56839.addModifier(new VF.Dot(), 0);
smo56839.addModifier(new VF.Dot(), 0);
smo56853v1ar.push(smo56839);
smo56853v1.addTickables(smo56853v1ar)
fmtsmo568539.joinVoices([smo56853v1]);
const fmtsmo622089 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo62208v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62208v0ar = [];
const smo62187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/6/r"]}'))
smo62187.setAttribute('id', 'smo62187');
smo62208v0ar.push(smo62187);
const smo62188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62188.setAttribute('id', 'smo62188');
smo62188.addModifier(new VF.Dot(), 0);
smo62208v0ar.push(smo62188);
const smo62189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62189.setAttribute('id', 'smo62189');
smo62208v0ar.push(smo62189);
const smo62190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62190.setAttribute('id', 'smo62190');
smo62208v0ar.push(smo62190);
const smo62191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62191.setAttribute('id', 'smo62191');
smo62191.addModifier(new VF.Dot(), 0);
smo62208v0ar.push(smo62191);
const smo62192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62192.setAttribute('id', 'smo62192');
smo62208v0ar.push(smo62192);
smo62208v0.addTickables(smo62208v0ar)
fmtsmo622089.joinVoices([smo62208v0]);
const smo62208v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62208v1ar = [];
const smo62193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62193.setAttribute('id', 'smo62193');
smo62193.setStyle({ fillStyle: "#115511" });
smo62208v1ar.push(smo62193);
const smo62194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62194.setAttribute('id', 'smo62194');
smo62194.setStyle({ fillStyle: "#115511" });
smo62208v1ar.push(smo62194);
smo62208v1.addTickables(smo62208v1ar)
fmtsmo622089.joinVoices([smo62208v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66022 = smo56823.getStemDirection();
smo56823.setStemDirection(dirsmo66022);
smo56824.setStemDirection(dirsmo66022);
const smo66022 = new VF.Beam([smo56823,smo56824]);
const dirsmo66023 = smo56825.getStemDirection();
smo56825.setStemDirection(dirsmo66023);
smo56826.setStemDirection(dirsmo66023);
smo56827.setStemDirection(dirsmo66023);
smo56828.setStemDirection(dirsmo66023);
const smo66023 = new VF.Beam([smo56825,smo56826,smo56827,smo56828]);
const dirsmo66024 = smo56830.getStemDirection();
smo56830.setStemDirection(dirsmo66024);
smo56831.setStemDirection(dirsmo66024);
const smo66024 = new VF.Beam([smo56830,smo56831]);
const dirsmo66025 = smo56832.getStemDirection();
smo56832.setStemDirection(dirsmo66025);
smo56833.setStemDirection(dirsmo66025);
smo56834.setStemDirection(dirsmo66025);
smo56835.setStemDirection(dirsmo66025);
const smo66025 = new VF.Beam([smo56832,smo56833,smo56834,smo56835]);
 
// formatting measures in staff group smo55345
fmtsmo568539.format([smo56853v0,smo56853v1,smo62208v0,smo62208v1], 561);
const stavesmo56853 = new VF.Stave(90, 1191, 619);
stavesmo56853.setAttribute('id', 'stavesmo56853');
stavesmo56853.setBegBarType(1);
stavesmo56853.addClef('treble');
stavesmo56853.setContext(context);
stavesmo56853.draw();
smo56853v0.draw(context, stavesmo56853);
smo56853v1.draw(context, stavesmo56853);
smo66022.setContext(context);
smo66022.draw();
smo66023.setContext(context);
smo66023.draw();
smo66024.setContext(context);
smo66024.draw();
smo66025.setContext(context);
smo66025.draw();
const stavesmo62208 = new VF.Stave(90, 1370, 619);
stavesmo62208.setAttribute('id', 'stavesmo62208');
stavesmo62208.setBegBarType(1);
stavesmo62208.addClef('bass');
stavesmo62208.setContext(context);
stavesmo62208.draw();
smo62208v0.draw(context, stavesmo62208);
smo62208v1.draw(context, stavesmo62208);
const leftsmo55345stavesmo568531 = new VF.StaveConnector(stavesmo56853, stavesmo62208).setType(3);
leftsmo55345stavesmo568531.setContext(context).draw();
const fmtsmo5688510 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo56885v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56885v0ar = [];
const smo56854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56854.setAttribute('id', 'smo56854');
smo56885v0ar.push(smo56854);
const smo56855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56855.setAttribute('id', 'smo56855');
smo56885v0ar.push(smo56855);
const smo56856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56856.setAttribute('id', 'smo56856');
smo56885v0ar.push(smo56856);
const smo56857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56857.setAttribute('id', 'smo56857');
smo56885v0ar.push(smo56857);
const smo56858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56858.setAttribute('id', 'smo56858');
smo56885v0ar.push(smo56858);
const smo56859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56859.setAttribute('id', 'smo56859');
smo56885v0ar.push(smo56859);
const smo56860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56860.setAttribute('id', 'smo56860');
smo56885v0ar.push(smo56860);
const smo56861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56861.setAttribute('id', 'smo56861');
smo56885v0ar.push(smo56861);
const smo56862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56862.setAttribute('id', 'smo56862');
smo56885v0ar.push(smo56862);
const smo56863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56863.setAttribute('id', 'smo56863');
smo56885v0ar.push(smo56863);
const smo56864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56864.setAttribute('id', 'smo56864');
smo56885v0ar.push(smo56864);
const smo56865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56865.setAttribute('id', 'smo56865');
smo56885v0ar.push(smo56865);
const smo56866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56866.setAttribute('id', 'smo56866');
smo56885v0ar.push(smo56866);
const smo56867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56867.setAttribute('id', 'smo56867');
smo56885v0ar.push(smo56867);
smo56885v0.addTickables(smo56885v0ar)
fmtsmo5688510.joinVoices([smo56885v0]);
const smo56885v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56885v1ar = [];
const smo56868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56868.setAttribute('id', 'smo56868');
smo56868.setStyle({ fillStyle: '#aaaaaa7f' });
smo56885v1ar.push(smo56868);
const smo56869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo56869.setAttribute('id', 'smo56869');
smo56869.setStyle({ fillStyle: '#aaaaaa7f' });
smo56869.addModifier(new VF.Dot(), 0);
smo56869.addModifier(new VF.Dot(), 0);
smo56885v1ar.push(smo56869);
const smo56870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56870.setAttribute('id', 'smo56870');
smo56870.setStyle({ fillStyle: '#aaaaaa7f' });
smo56885v1ar.push(smo56870);
const smo56871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56871.setAttribute('id', 'smo56871');
smo56871.setStyle({ fillStyle: '#aaaaaa7f' });
smo56871.addModifier(new VF.Dot(), 0);
smo56871.addModifier(new VF.Dot(), 0);
smo56885v1ar.push(smo56871);
smo56885v1.addTickables(smo56885v1ar)
fmtsmo5688510.joinVoices([smo56885v1]);
const fmtsmo6223010 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo62230v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62230v0ar = [];
const smo62209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62209.setAttribute('id', 'smo62209');
smo62230v0ar.push(smo62209);
const smo62210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62210.setAttribute('id', 'smo62210');
smo62210.addModifier(new VF.Dot(), 0);
smo62230v0ar.push(smo62210);
const smo62211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62211.setAttribute('id', 'smo62211');
smo62230v0ar.push(smo62211);
const smo62212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62212.setAttribute('id', 'smo62212');
smo62230v0ar.push(smo62212);
const smo62213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62213.setAttribute('id', 'smo62213');
smo62213.addModifier(new VF.Dot(), 0);
smo62230v0ar.push(smo62213);
const smo62214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62214.setAttribute('id', 'smo62214');
smo62230v0ar.push(smo62214);
smo62230v0.addTickables(smo62230v0ar)
fmtsmo6223010.joinVoices([smo62230v0]);
const smo62230v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62230v1ar = [];
const smo62215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62215.setAttribute('id', 'smo62215');
smo62215.setStyle({ fillStyle: "#115511" });
smo62230v1ar.push(smo62215);
const smo62216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62216.setAttribute('id', 'smo62216');
smo62216.setStyle({ fillStyle: "#115511" });
smo62230v1ar.push(smo62216);
smo62230v1.addTickables(smo62230v1ar)
fmtsmo6223010.joinVoices([smo62230v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66030 = smo56855.getStemDirection();
smo56855.setStemDirection(dirsmo66030);
smo56856.setStemDirection(dirsmo66030);
const smo66030 = new VF.Beam([smo56855,smo56856]);
const dirsmo66031 = smo56857.getStemDirection();
smo56857.setStemDirection(dirsmo66031);
smo56858.setStemDirection(dirsmo66031);
smo56859.setStemDirection(dirsmo66031);
smo56860.setStemDirection(dirsmo66031);
const smo66031 = new VF.Beam([smo56857,smo56858,smo56859,smo56860]);
const dirsmo66032 = smo56862.getStemDirection();
smo56862.setStemDirection(dirsmo66032);
smo56863.setStemDirection(dirsmo66032);
const smo66032 = new VF.Beam([smo56862,smo56863]);
const dirsmo66033 = smo56864.getStemDirection();
smo56864.setStemDirection(dirsmo66033);
smo56865.setStemDirection(dirsmo66033);
smo56866.setStemDirection(dirsmo66033);
smo56867.setStemDirection(dirsmo66033);
const smo66033 = new VF.Beam([smo56864,smo56865,smo56866,smo56867]);
 
// formatting measures in staff group smo55345
fmtsmo5688510.format([smo56885v0,smo56885v1,smo62230v0,smo62230v1], 510);
const stavesmo56885 = new VF.Stave(709, 1191, 524);
stavesmo56885.setAttribute('id', 'stavesmo56885');
stavesmo56885.setBegBarType(VF.Barline.type.NONE);
stavesmo56885.setContext(context);
stavesmo56885.draw();
smo56885v0.draw(context, stavesmo56885);
smo56885v1.draw(context, stavesmo56885);
smo66030.setContext(context);
smo66030.draw();
smo66031.setContext(context);
smo66031.draw();
smo66032.setContext(context);
smo66032.draw();
smo66033.setContext(context);
smo66033.draw();
const stavesmo62230 = new VF.Stave(709, 1370, 524);
stavesmo62230.setAttribute('id', 'stavesmo62230');
stavesmo62230.setBegBarType(VF.Barline.type.NONE);
stavesmo62230.setContext(context);
stavesmo62230.draw();
smo62230v0.draw(context, stavesmo62230);
smo62230v1.draw(context, stavesmo62230);
const fmtsmo5691711 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo56917v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56917v0ar = [];
const smo56886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56886.setAttribute('id', 'smo56886');
smo56917v0ar.push(smo56886);
const smo56887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56887.setAttribute('id', 'smo56887');
smo56917v0ar.push(smo56887);
const smo56888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56888.setAttribute('id', 'smo56888');
smo56917v0ar.push(smo56888);
const smo56889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo56889.setAttribute('id', 'smo56889');
const smo568890acc = new VF.Accidental('#');
smo56889.addModifier(smo568890acc, 0);
smo56917v0ar.push(smo56889);
const smo56890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56890.setAttribute('id', 'smo56890');
smo56917v0ar.push(smo56890);
const smo56891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56891.setAttribute('id', 'smo56891');
smo56917v0ar.push(smo56891);
const smo56892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo56892.setAttribute('id', 'smo56892');
smo56917v0ar.push(smo56892);
const smo56893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56893.setAttribute('id', 'smo56893');
smo56917v0ar.push(smo56893);
const smo56894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56894.setAttribute('id', 'smo56894');
smo56917v0ar.push(smo56894);
const smo56895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56895.setAttribute('id', 'smo56895');
smo56917v0ar.push(smo56895);
const smo56896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo56896.setAttribute('id', 'smo56896');
smo56917v0ar.push(smo56896);
const smo56897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo56897.setAttribute('id', 'smo56897');
smo56917v0ar.push(smo56897);
const smo56898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56898.setAttribute('id', 'smo56898');
smo56917v0ar.push(smo56898);
const smo56899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo56899.setAttribute('id', 'smo56899');
smo56917v0ar.push(smo56899);
smo56917v0.addTickables(smo56917v0ar)
fmtsmo5691711.joinVoices([smo56917v0]);
const smo56917v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56917v1ar = [];
const smo56900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56900.setAttribute('id', 'smo56900');
smo56900.setStyle({ fillStyle: '#aaaaaa7f' });
smo56917v1ar.push(smo56900);
const smo56901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56901.setAttribute('id', 'smo56901');
smo56901.setStyle({ fillStyle: '#aaaaaa7f' });
smo56901.addModifier(new VF.Dot(), 0);
smo56901.addModifier(new VF.Dot(), 0);
smo56917v1ar.push(smo56901);
const smo56902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56902.setAttribute('id', 'smo56902');
smo56902.setStyle({ fillStyle: '#aaaaaa7f' });
smo56917v1ar.push(smo56902);
const smo56903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56903.setAttribute('id', 'smo56903');
smo56903.setStyle({ fillStyle: '#aaaaaa7f' });
smo56903.addModifier(new VF.Dot(), 0);
smo56903.addModifier(new VF.Dot(), 0);
smo56917v1ar.push(smo56903);
smo56917v1.addTickables(smo56917v1ar)
fmtsmo5691711.joinVoices([smo56917v1]);
const fmtsmo6225211 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo62252v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62252v0ar = [];
const smo62231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62231.setAttribute('id', 'smo62231');
smo62252v0ar.push(smo62231);
const smo62232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo62232.setAttribute('id', 'smo62232');
const smo622320acc = new VF.Accidental('#');
smo62232.addModifier(smo622320acc, 0);
smo62232.addModifier(new VF.Dot(), 0);
smo62252v0ar.push(smo62232);
const smo62233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo62233.setAttribute('id', 'smo62233');
smo62252v0ar.push(smo62233);
const smo62234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62234.setAttribute('id', 'smo62234');
smo62252v0ar.push(smo62234);
const smo62235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo62235.setAttribute('id', 'smo62235');
smo62235.addModifier(new VF.Dot(), 0);
smo62252v0ar.push(smo62235);
const smo62236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo62236.setAttribute('id', 'smo62236');
smo62252v0ar.push(smo62236);
smo62252v0.addTickables(smo62252v0ar)
fmtsmo6225211.joinVoices([smo62252v0]);
const smo62252v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62252v1ar = [];
const smo62237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62237.setAttribute('id', 'smo62237');
smo62237.setStyle({ fillStyle: "#115511" });
smo62252v1ar.push(smo62237);
const smo62238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62238.setAttribute('id', 'smo62238');
smo62238.setStyle({ fillStyle: "#115511" });
smo62252v1ar.push(smo62238);
smo62252v1.addTickables(smo62252v1ar)
fmtsmo6225211.joinVoices([smo62252v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66038 = smo56887.getStemDirection();
smo56887.setStemDirection(dirsmo66038);
smo56888.setStemDirection(dirsmo66038);
const smo66038 = new VF.Beam([smo56887,smo56888]);
const dirsmo66039 = smo56889.getStemDirection();
smo56889.setStemDirection(dirsmo66039);
smo56890.setStemDirection(dirsmo66039);
smo56891.setStemDirection(dirsmo66039);
smo56892.setStemDirection(dirsmo66039);
const smo66039 = new VF.Beam([smo56889,smo56890,smo56891,smo56892]);
const dirsmo66040 = smo56894.getStemDirection();
smo56894.setStemDirection(dirsmo66040);
smo56895.setStemDirection(dirsmo66040);
const smo66040 = new VF.Beam([smo56894,smo56895]);
const dirsmo66041 = smo56896.getStemDirection();
smo56896.setStemDirection(dirsmo66041);
smo56897.setStemDirection(dirsmo66041);
smo56898.setStemDirection(dirsmo66041);
smo56899.setStemDirection(dirsmo66041);
const smo66041 = new VF.Beam([smo56896,smo56897,smo56898,smo56899]);
 
// formatting measures in staff group smo55345
fmtsmo5691711.format([smo56917v0,smo56917v1,smo62252v0,smo62252v1], 560);
const stavesmo56917 = new VF.Stave(1233, 1191, 574);
stavesmo56917.setAttribute('id', 'stavesmo56917');
stavesmo56917.setBegBarType(VF.Barline.type.NONE);
stavesmo56917.setContext(context);
stavesmo56917.draw();
smo56917v0.draw(context, stavesmo56917);
smo56917v1.draw(context, stavesmo56917);
smo66038.setContext(context);
smo66038.draw();
smo66039.setContext(context);
smo66039.draw();
smo66040.setContext(context);
smo66040.draw();
smo66041.setContext(context);
smo66041.draw();
const stavesmo62252 = new VF.Stave(1233, 1370, 574);
stavesmo62252.setAttribute('id', 'stavesmo62252');
stavesmo62252.setBegBarType(VF.Barline.type.NONE);
stavesmo62252.setContext(context);
stavesmo62252.draw();
smo62252v0.draw(context, stavesmo62252);
smo62252v1.draw(context, stavesmo62252);
const rightsmo55345stavesmo569171 = new VF.StaveConnector(stavesmo56917, stavesmo62252).setType(0);
rightsmo55345stavesmo569171.setContext(context).draw();
const fmtsmo5694912 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo56949v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56949v0ar = [];
const smo56918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56918.setAttribute('id', 'smo56918');
smo56949v0ar.push(smo56918);
const smo56919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56919.setAttribute('id', 'smo56919');
smo56949v0ar.push(smo56919);
const smo56920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56920.setAttribute('id', 'smo56920');
smo56949v0ar.push(smo56920);
const smo56921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56921.setAttribute('id', 'smo56921');
smo56949v0ar.push(smo56921);
const smo56922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56922.setAttribute('id', 'smo56922');
smo56949v0ar.push(smo56922);
const smo56923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56923.setAttribute('id', 'smo56923');
smo56949v0ar.push(smo56923);
const smo56924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56924.setAttribute('id', 'smo56924');
smo56949v0ar.push(smo56924);
const smo56925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56925.setAttribute('id', 'smo56925');
smo56949v0ar.push(smo56925);
const smo56926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56926.setAttribute('id', 'smo56926');
smo56949v0ar.push(smo56926);
const smo56927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56927.setAttribute('id', 'smo56927');
smo56949v0ar.push(smo56927);
const smo56928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56928.setAttribute('id', 'smo56928');
smo56949v0ar.push(smo56928);
const smo56929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56929.setAttribute('id', 'smo56929');
smo56949v0ar.push(smo56929);
const smo56930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo56930.setAttribute('id', 'smo56930');
smo56949v0ar.push(smo56930);
const smo56931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo56931.setAttribute('id', 'smo56931');
smo56949v0ar.push(smo56931);
smo56949v0.addTickables(smo56949v0ar)
fmtsmo5694912.joinVoices([smo56949v0]);
const smo56949v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56949v1ar = [];
const smo56932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56932.setAttribute('id', 'smo56932');
smo56932.setStyle({ fillStyle: '#aaaaaa7f' });
smo56949v1ar.push(smo56932);
const smo56933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56933.setAttribute('id', 'smo56933');
smo56933.setStyle({ fillStyle: '#aaaaaa7f' });
smo56933.addModifier(new VF.Dot(), 0);
smo56933.addModifier(new VF.Dot(), 0);
smo56949v1ar.push(smo56933);
const smo56934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56934.setAttribute('id', 'smo56934');
smo56934.setStyle({ fillStyle: '#aaaaaa7f' });
smo56949v1ar.push(smo56934);
const smo56935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56935.setAttribute('id', 'smo56935');
smo56935.setStyle({ fillStyle: '#aaaaaa7f' });
smo56935.addModifier(new VF.Dot(), 0);
smo56935.addModifier(new VF.Dot(), 0);
smo56949v1ar.push(smo56935);
smo56949v1.addTickables(smo56949v1ar)
fmtsmo5694912.joinVoices([smo56949v1]);
const fmtsmo6227412 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo62274v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62274v0ar = [];
const smo62253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62253.setAttribute('id', 'smo62253');
smo62274v0ar.push(smo62253);
const smo62254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62254.setAttribute('id', 'smo62254');
smo62254.addModifier(new VF.Dot(), 0);
smo62274v0ar.push(smo62254);
const smo62255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62255.setAttribute('id', 'smo62255');
smo62274v0ar.push(smo62255);
const smo62256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62256.setAttribute('id', 'smo62256');
smo62274v0ar.push(smo62256);
const smo62257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62257.setAttribute('id', 'smo62257');
smo62257.addModifier(new VF.Dot(), 0);
smo62274v0ar.push(smo62257);
const smo62258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62258.setAttribute('id', 'smo62258');
smo62274v0ar.push(smo62258);
smo62274v0.addTickables(smo62274v0ar)
fmtsmo6227412.joinVoices([smo62274v0]);
const smo62274v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62274v1ar = [];
const smo62259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62259.setAttribute('id', 'smo62259');
smo62259.setStyle({ fillStyle: "#115511" });
smo62274v1ar.push(smo62259);
const smo62260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62260.setAttribute('id', 'smo62260');
smo62260.setStyle({ fillStyle: "#115511" });
smo62274v1ar.push(smo62260);
smo62274v1.addTickables(smo62274v1ar)
fmtsmo6227412.joinVoices([smo62274v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66054 = smo56919.getStemDirection();
smo56919.setStemDirection(dirsmo66054);
smo56920.setStemDirection(dirsmo66054);
const smo66054 = new VF.Beam([smo56919,smo56920]);
const dirsmo66055 = smo56921.getStemDirection();
smo56921.setStemDirection(dirsmo66055);
smo56922.setStemDirection(dirsmo66055);
smo56923.setStemDirection(dirsmo66055);
smo56924.setStemDirection(dirsmo66055);
const smo66055 = new VF.Beam([smo56921,smo56922,smo56923,smo56924]);
const dirsmo66056 = smo56926.getStemDirection();
smo56926.setStemDirection(dirsmo66056);
smo56927.setStemDirection(dirsmo66056);
const smo66056 = new VF.Beam([smo56926,smo56927]);
const dirsmo66057 = smo56928.getStemDirection();
smo56928.setStemDirection(dirsmo66057);
smo56929.setStemDirection(dirsmo66057);
smo56930.setStemDirection(dirsmo66057);
smo56931.setStemDirection(dirsmo66057);
const smo66057 = new VF.Beam([smo56928,smo56929,smo56930,smo56931]);
 
// formatting measures in staff group smo55345
fmtsmo5694912.format([smo56949v0,smo56949v1,smo62274v0,smo62274v1], 536);
const stavesmo56949 = new VF.Stave(90, 1494, 594);
stavesmo56949.setAttribute('id', 'stavesmo56949');
stavesmo56949.setBegBarType(1);
stavesmo56949.addClef('treble');
stavesmo56949.setContext(context);
stavesmo56949.draw();
smo56949v0.draw(context, stavesmo56949);
smo56949v1.draw(context, stavesmo56949);
smo66054.setContext(context);
smo66054.draw();
smo66055.setContext(context);
smo66055.draw();
smo66056.setContext(context);
smo66056.draw();
smo66057.setContext(context);
smo66057.draw();
const stavesmo62274 = new VF.Stave(90, 1668, 594);
stavesmo62274.setAttribute('id', 'stavesmo62274');
stavesmo62274.setBegBarType(1);
stavesmo62274.addClef('bass');
stavesmo62274.setContext(context);
stavesmo62274.draw();
smo62274v0.draw(context, stavesmo62274);
smo62274v1.draw(context, stavesmo62274);
const leftsmo55345stavesmo569491 = new VF.StaveConnector(stavesmo56949, stavesmo62274).setType(3);
leftsmo55345stavesmo569491.setContext(context).draw();
const fmtsmo5698113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo56981v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56981v0ar = [];
const smo56950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56950.setAttribute('id', 'smo56950');
smo56981v0ar.push(smo56950);
const smo56951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56951.setAttribute('id', 'smo56951');
smo56981v0ar.push(smo56951);
const smo56952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo56952.setAttribute('id', 'smo56952');
smo56981v0ar.push(smo56952);
const smo56953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56953.setAttribute('id', 'smo56953');
smo56981v0ar.push(smo56953);
const smo56954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56954.setAttribute('id', 'smo56954');
smo56981v0ar.push(smo56954);
const smo56955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo56955.setAttribute('id', 'smo56955');
smo56981v0ar.push(smo56955);
const smo56956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56956.setAttribute('id', 'smo56956');
smo56981v0ar.push(smo56956);
const smo56957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56957.setAttribute('id', 'smo56957');
smo56981v0ar.push(smo56957);
const smo56958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56958.setAttribute('id', 'smo56958');
smo56981v0ar.push(smo56958);
const smo56959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo56959.setAttribute('id', 'smo56959');
smo56981v0ar.push(smo56959);
const smo56960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56960.setAttribute('id', 'smo56960');
smo56981v0ar.push(smo56960);
const smo56961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo56961.setAttribute('id', 'smo56961');
smo56981v0ar.push(smo56961);
const smo56962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo56962.setAttribute('id', 'smo56962');
smo56981v0ar.push(smo56962);
const smo56963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo56963.setAttribute('id', 'smo56963');
smo56981v0ar.push(smo56963);
smo56981v0.addTickables(smo56981v0ar)
fmtsmo5698113.joinVoices([smo56981v0]);
const smo56981v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo56981v1ar = [];
const smo56964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56964.setAttribute('id', 'smo56964');
smo56964.setStyle({ fillStyle: '#aaaaaa7f' });
smo56981v1ar.push(smo56964);
const smo56965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56965.setAttribute('id', 'smo56965');
smo56965.setStyle({ fillStyle: '#aaaaaa7f' });
smo56965.addModifier(new VF.Dot(), 0);
smo56965.addModifier(new VF.Dot(), 0);
smo56981v1ar.push(smo56965);
const smo56966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56966.setAttribute('id', 'smo56966');
smo56966.setStyle({ fillStyle: '#aaaaaa7f' });
smo56981v1ar.push(smo56966);
const smo56967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56967.setAttribute('id', 'smo56967');
smo56967.setStyle({ fillStyle: '#aaaaaa7f' });
smo56967.addModifier(new VF.Dot(), 0);
smo56967.addModifier(new VF.Dot(), 0);
smo56981v1ar.push(smo56967);
smo56981v1.addTickables(smo56981v1ar)
fmtsmo5698113.joinVoices([smo56981v1]);
const fmtsmo6229613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo62296v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62296v0ar = [];
const smo62275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62275.setAttribute('id', 'smo62275');
smo62296v0ar.push(smo62275);
const smo62276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo62276.setAttribute('id', 'smo62276');
const smo622760acc = new VF.Accidental('#');
smo62276.addModifier(smo622760acc, 0);
smo62276.addModifier(new VF.Dot(), 0);
smo62296v0ar.push(smo62276);
const smo62277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo62277.setAttribute('id', 'smo62277');
smo62296v0ar.push(smo62277);
const smo62278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62278.setAttribute('id', 'smo62278');
smo62296v0ar.push(smo62278);
const smo62279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo62279.setAttribute('id', 'smo62279');
smo62279.addModifier(new VF.Dot(), 0);
smo62296v0ar.push(smo62279);
const smo62280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo62280.setAttribute('id', 'smo62280');
smo62296v0ar.push(smo62280);
smo62296v0.addTickables(smo62296v0ar)
fmtsmo6229613.joinVoices([smo62296v0]);
const smo62296v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62296v1ar = [];
const smo62281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62281.setAttribute('id', 'smo62281');
smo62281.setStyle({ fillStyle: "#115511" });
smo62296v1ar.push(smo62281);
const smo62282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62282.setAttribute('id', 'smo62282');
smo62282.setStyle({ fillStyle: "#115511" });
smo62296v1ar.push(smo62282);
smo62296v1.addTickables(smo62296v1ar)
fmtsmo6229613.joinVoices([smo62296v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66062 = smo56951.getStemDirection();
smo56951.setStemDirection(dirsmo66062);
smo56952.setStemDirection(dirsmo66062);
const smo66062 = new VF.Beam([smo56951,smo56952]);
const dirsmo66063 = smo56953.getStemDirection();
smo56953.setStemDirection(dirsmo66063);
smo56954.setStemDirection(dirsmo66063);
smo56955.setStemDirection(dirsmo66063);
smo56956.setStemDirection(dirsmo66063);
const smo66063 = new VF.Beam([smo56953,smo56954,smo56955,smo56956]);
const dirsmo66064 = smo56958.getStemDirection();
smo56958.setStemDirection(dirsmo66064);
smo56959.setStemDirection(dirsmo66064);
const smo66064 = new VF.Beam([smo56958,smo56959]);
const dirsmo66065 = smo56960.getStemDirection();
smo56960.setStemDirection(dirsmo66065);
smo56961.setStemDirection(dirsmo66065);
smo56962.setStemDirection(dirsmo66065);
smo56963.setStemDirection(dirsmo66065);
const smo66065 = new VF.Beam([smo56960,smo56961,smo56962,smo56963]);
 
// formatting measures in staff group smo55345
fmtsmo5698113.format([smo56981v0,smo56981v1,smo62296v0,smo62296v1], 560);
const stavesmo56981 = new VF.Stave(684, 1494, 574);
stavesmo56981.setAttribute('id', 'stavesmo56981');
stavesmo56981.setBegBarType(VF.Barline.type.NONE);
stavesmo56981.setContext(context);
stavesmo56981.draw();
smo56981v0.draw(context, stavesmo56981);
smo56981v1.draw(context, stavesmo56981);
smo66062.setContext(context);
smo66062.draw();
smo66063.setContext(context);
smo66063.draw();
smo66064.setContext(context);
smo66064.draw();
smo66065.setContext(context);
smo66065.draw();
const stavesmo62296 = new VF.Stave(684, 1668, 574);
stavesmo62296.setAttribute('id', 'stavesmo62296');
stavesmo62296.setBegBarType(VF.Barline.type.NONE);
stavesmo62296.setContext(context);
stavesmo62296.draw();
smo62296v0.draw(context, stavesmo62296);
smo62296v1.draw(context, stavesmo62296);
const fmtsmo5701314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo57013v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57013v0ar = [];
const smo56982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56982.setAttribute('id', 'smo56982');
smo57013v0ar.push(smo56982);
const smo56983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo56983.setAttribute('id', 'smo56983');
smo57013v0ar.push(smo56983);
const smo56984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56984.setAttribute('id', 'smo56984');
smo57013v0ar.push(smo56984);
const smo56985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56985.setAttribute('id', 'smo56985');
smo57013v0ar.push(smo56985);
const smo56986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo56986.setAttribute('id', 'smo56986');
smo57013v0ar.push(smo56986);
const smo56987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56987.setAttribute('id', 'smo56987');
smo57013v0ar.push(smo56987);
const smo56988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56988.setAttribute('id', 'smo56988');
smo57013v0ar.push(smo56988);
const smo56989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56989.setAttribute('id', 'smo56989');
smo57013v0ar.push(smo56989);
const smo56990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo56990.setAttribute('id', 'smo56990');
smo57013v0ar.push(smo56990);
const smo56991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56991.setAttribute('id', 'smo56991');
smo57013v0ar.push(smo56991);
const smo56992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56992.setAttribute('id', 'smo56992');
smo57013v0ar.push(smo56992);
const smo56993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo56993.setAttribute('id', 'smo56993');
smo57013v0ar.push(smo56993);
const smo56994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo56994.setAttribute('id', 'smo56994');
smo57013v0ar.push(smo56994);
const smo56995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo56995.setAttribute('id', 'smo56995');
smo57013v0ar.push(smo56995);
smo57013v0.addTickables(smo57013v0ar)
fmtsmo5701314.joinVoices([smo57013v0]);
const smo57013v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57013v1ar = [];
const smo56996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56996.setAttribute('id', 'smo56996');
smo56996.setStyle({ fillStyle: '#aaaaaa7f' });
smo57013v1ar.push(smo56996);
const smo56997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56997.setAttribute('id', 'smo56997');
smo56997.setStyle({ fillStyle: '#aaaaaa7f' });
smo56997.addModifier(new VF.Dot(), 0);
smo56997.addModifier(new VF.Dot(), 0);
smo57013v1ar.push(smo56997);
const smo56998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56998.setAttribute('id', 'smo56998');
smo56998.setStyle({ fillStyle: '#aaaaaa7f' });
smo57013v1ar.push(smo56998);
const smo56999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo56999.setAttribute('id', 'smo56999');
smo56999.setStyle({ fillStyle: '#aaaaaa7f' });
smo56999.addModifier(new VF.Dot(), 0);
smo56999.addModifier(new VF.Dot(), 0);
smo57013v1ar.push(smo56999);
smo57013v1.addTickables(smo57013v1ar)
fmtsmo5701314.joinVoices([smo57013v1]);
const fmtsmo6231814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo62318v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62318v0ar = [];
const smo62297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62297.setAttribute('id', 'smo62297');
smo62318v0ar.push(smo62297);
const smo62298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62298.setAttribute('id', 'smo62298');
smo62298.addModifier(new VF.Dot(), 0);
smo62318v0ar.push(smo62298);
const smo62299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62299.setAttribute('id', 'smo62299');
smo62318v0ar.push(smo62299);
const smo62300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo62300.setAttribute('id', 'smo62300');
smo62318v0ar.push(smo62300);
const smo62301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62301.setAttribute('id', 'smo62301');
smo62301.addModifier(new VF.Dot(), 0);
smo62318v0ar.push(smo62301);
const smo62302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62302.setAttribute('id', 'smo62302');
smo62318v0ar.push(smo62302);
smo62318v0.addTickables(smo62318v0ar)
fmtsmo6231814.joinVoices([smo62318v0]);
const smo62318v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62318v1ar = [];
const smo62303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62303.setAttribute('id', 'smo62303');
smo62303.setStyle({ fillStyle: "#115511" });
smo62318v1ar.push(smo62303);
const smo62304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62304.setAttribute('id', 'smo62304');
smo62304.setStyle({ fillStyle: "#115511" });
smo62318v1ar.push(smo62304);
smo62318v1.addTickables(smo62318v1ar)
fmtsmo6231814.joinVoices([smo62318v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66070 = smo56983.getStemDirection();
smo56983.setStemDirection(dirsmo66070);
smo56984.setStemDirection(dirsmo66070);
const smo66070 = new VF.Beam([smo56983,smo56984]);
const dirsmo66071 = smo56985.getStemDirection();
smo56985.setStemDirection(dirsmo66071);
smo56986.setStemDirection(dirsmo66071);
smo56987.setStemDirection(dirsmo66071);
smo56988.setStemDirection(dirsmo66071);
const smo66071 = new VF.Beam([smo56985,smo56986,smo56987,smo56988]);
const dirsmo66072 = smo56990.getStemDirection();
smo56990.setStemDirection(dirsmo66072);
smo56991.setStemDirection(dirsmo66072);
const smo66072 = new VF.Beam([smo56990,smo56991]);
const dirsmo66073 = smo56992.getStemDirection();
smo56992.setStemDirection(dirsmo66073);
smo56993.setStemDirection(dirsmo66073);
smo56994.setStemDirection(dirsmo66073);
smo56995.setStemDirection(dirsmo66073);
const smo66073 = new VF.Beam([smo56992,smo56993,smo56994,smo56995]);
 
// formatting measures in staff group smo55345
fmtsmo5701314.format([smo57013v0,smo57013v1,smo62318v0,smo62318v1], 535);
const stavesmo57013 = new VF.Stave(1258, 1494, 549);
stavesmo57013.setAttribute('id', 'stavesmo57013');
stavesmo57013.setBegBarType(VF.Barline.type.NONE);
stavesmo57013.setContext(context);
stavesmo57013.draw();
smo57013v0.draw(context, stavesmo57013);
smo57013v1.draw(context, stavesmo57013);
smo66070.setContext(context);
smo66070.draw();
smo66071.setContext(context);
smo66071.draw();
smo66072.setContext(context);
smo66072.draw();
smo66073.setContext(context);
smo66073.draw();
const stavesmo62318 = new VF.Stave(1258, 1668, 549);
stavesmo62318.setAttribute('id', 'stavesmo62318');
stavesmo62318.setBegBarType(VF.Barline.type.NONE);
stavesmo62318.setContext(context);
stavesmo62318.draw();
smo62318v0.draw(context, stavesmo62318);
smo62318v1.draw(context, stavesmo62318);
const rightsmo55345stavesmo570131 = new VF.StaveConnector(stavesmo57013, stavesmo62318).setType(0);
rightsmo55345stavesmo570131.setContext(context).draw();
const fmtsmo5704515 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo57045v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57045v0ar = [];
const smo57014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57014.setAttribute('id', 'smo57014');
smo57045v0ar.push(smo57014);
const smo57015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57015.setAttribute('id', 'smo57015');
smo57045v0ar.push(smo57015);
const smo57016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57016.setAttribute('id', 'smo57016');
smo57045v0ar.push(smo57016);
const smo57017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57017.setAttribute('id', 'smo57017');
smo57045v0ar.push(smo57017);
const smo57018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57018.setAttribute('id', 'smo57018');
smo57045v0ar.push(smo57018);
const smo57019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57019.setAttribute('id', 'smo57019');
smo57045v0ar.push(smo57019);
const smo57020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57020.setAttribute('id', 'smo57020');
smo57045v0ar.push(smo57020);
const smo57021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57021.setAttribute('id', 'smo57021');
smo57045v0ar.push(smo57021);
const smo57022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57022.setAttribute('id', 'smo57022');
smo57045v0ar.push(smo57022);
const smo57023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57023.setAttribute('id', 'smo57023');
smo57045v0ar.push(smo57023);
const smo57024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57024.setAttribute('id', 'smo57024');
smo57045v0ar.push(smo57024);
const smo57025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57025.setAttribute('id', 'smo57025');
smo57045v0ar.push(smo57025);
const smo57026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57026.setAttribute('id', 'smo57026');
smo57045v0ar.push(smo57026);
const smo57027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57027.setAttribute('id', 'smo57027');
smo57045v0ar.push(smo57027);
smo57045v0.addTickables(smo57045v0ar)
fmtsmo5704515.joinVoices([smo57045v0]);
const smo57045v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57045v1ar = [];
const smo57028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57028.setAttribute('id', 'smo57028');
smo57028.setStyle({ fillStyle: '#aaaaaa7f' });
smo57045v1ar.push(smo57028);
const smo57029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57029.setAttribute('id', 'smo57029');
smo57029.setStyle({ fillStyle: '#aaaaaa7f' });
smo57029.addModifier(new VF.Dot(), 0);
smo57029.addModifier(new VF.Dot(), 0);
smo57045v1ar.push(smo57029);
const smo57030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57030.setAttribute('id', 'smo57030');
smo57030.setStyle({ fillStyle: '#aaaaaa7f' });
smo57045v1ar.push(smo57030);
const smo57031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57031.setAttribute('id', 'smo57031');
smo57031.setStyle({ fillStyle: '#aaaaaa7f' });
smo57031.addModifier(new VF.Dot(), 0);
smo57031.addModifier(new VF.Dot(), 0);
smo57045v1ar.push(smo57031);
smo57045v1.addTickables(smo57045v1ar)
fmtsmo5704515.joinVoices([smo57045v1]);
const fmtsmo6234015 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo62340v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62340v0ar = [];
const smo62319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62319.setAttribute('id', 'smo62319');
smo62340v0ar.push(smo62319);
const smo62320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62320.setAttribute('id', 'smo62320');
smo62320.addModifier(new VF.Dot(), 0);
smo62340v0ar.push(smo62320);
const smo62321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62321.setAttribute('id', 'smo62321');
smo62340v0ar.push(smo62321);
const smo62322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62322.setAttribute('id', 'smo62322');
smo62340v0ar.push(smo62322);
const smo62323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62323.setAttribute('id', 'smo62323');
smo62323.addModifier(new VF.Dot(), 0);
smo62340v0ar.push(smo62323);
const smo62324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62324.setAttribute('id', 'smo62324');
smo62340v0ar.push(smo62324);
smo62340v0.addTickables(smo62340v0ar)
fmtsmo6234015.joinVoices([smo62340v0]);
const smo62340v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62340v1ar = [];
const smo62325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62325.setAttribute('id', 'smo62325');
smo62325.setStyle({ fillStyle: "#115511" });
smo62340v1ar.push(smo62325);
const smo62326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62326.setAttribute('id', 'smo62326');
smo62326.setStyle({ fillStyle: "#115511" });
smo62340v1ar.push(smo62326);
smo62340v1.addTickables(smo62340v1ar)
fmtsmo6234015.joinVoices([smo62340v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66086 = smo57015.getStemDirection();
smo57015.setStemDirection(dirsmo66086);
smo57016.setStemDirection(dirsmo66086);
const smo66086 = new VF.Beam([smo57015,smo57016]);
const dirsmo66087 = smo57017.getStemDirection();
smo57017.setStemDirection(dirsmo66087);
smo57018.setStemDirection(dirsmo66087);
smo57019.setStemDirection(dirsmo66087);
smo57020.setStemDirection(dirsmo66087);
const smo66087 = new VF.Beam([smo57017,smo57018,smo57019,smo57020]);
const dirsmo66088 = smo57022.getStemDirection();
smo57022.setStemDirection(dirsmo66088);
smo57023.setStemDirection(dirsmo66088);
const smo66088 = new VF.Beam([smo57022,smo57023]);
const dirsmo66089 = smo57024.getStemDirection();
smo57024.setStemDirection(dirsmo66089);
smo57025.setStemDirection(dirsmo66089);
smo57026.setStemDirection(dirsmo66089);
smo57027.setStemDirection(dirsmo66089);
const smo66089 = new VF.Beam([smo57024,smo57025,smo57026,smo57027]);
 
// formatting measures in staff group smo55345
fmtsmo5704515.format([smo57045v0,smo57045v1,smo62340v0,smo62340v1], 544);
const stavesmo57045 = new VF.Stave(90, 1778, 602);
stavesmo57045.setAttribute('id', 'stavesmo57045');
stavesmo57045.setBegBarType(1);
stavesmo57045.addClef('treble');
stavesmo57045.setContext(context);
stavesmo57045.draw();
smo57045v0.draw(context, stavesmo57045);
smo57045v1.draw(context, stavesmo57045);
smo66086.setContext(context);
smo66086.draw();
smo66087.setContext(context);
smo66087.draw();
smo66088.setContext(context);
smo66088.draw();
smo66089.setContext(context);
smo66089.draw();
const stavesmo62340 = new VF.Stave(90, 1862, 602);
stavesmo62340.setAttribute('id', 'stavesmo62340');
stavesmo62340.setBegBarType(1);
stavesmo62340.addClef('treble');
stavesmo62340.setContext(context);
stavesmo62340.draw();
smo62340v0.draw(context, stavesmo62340);
smo62340v1.draw(context, stavesmo62340);
const leftsmo55345stavesmo570451 = new VF.StaveConnector(stavesmo57045, stavesmo62340).setType(3);
leftsmo55345stavesmo570451.setContext(context).draw();
const fmtsmo5707716 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo57077v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57077v0ar = [];
const smo57046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57046.setAttribute('id', 'smo57046');
smo57077v0ar.push(smo57046);
const smo57047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57047.setAttribute('id', 'smo57047');
smo57077v0ar.push(smo57047);
const smo57048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57048.setAttribute('id', 'smo57048');
smo57077v0ar.push(smo57048);
const smo57049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57049.setAttribute('id', 'smo57049');
smo57077v0ar.push(smo57049);
const smo57050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57050.setAttribute('id', 'smo57050');
smo57077v0ar.push(smo57050);
const smo57051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57051.setAttribute('id', 'smo57051');
smo57077v0ar.push(smo57051);
const smo57052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57052.setAttribute('id', 'smo57052');
smo57077v0ar.push(smo57052);
const smo57053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57053.setAttribute('id', 'smo57053');
smo57077v0ar.push(smo57053);
const smo57054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57054.setAttribute('id', 'smo57054');
smo57077v0ar.push(smo57054);
const smo57055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57055.setAttribute('id', 'smo57055');
smo57077v0ar.push(smo57055);
const smo57056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57056.setAttribute('id', 'smo57056');
smo57077v0ar.push(smo57056);
const smo57057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57057.setAttribute('id', 'smo57057');
smo57077v0ar.push(smo57057);
const smo57058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57058.setAttribute('id', 'smo57058');
smo57077v0ar.push(smo57058);
const smo57059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57059.setAttribute('id', 'smo57059');
smo57077v0ar.push(smo57059);
smo57077v0.addTickables(smo57077v0ar)
fmtsmo5707716.joinVoices([smo57077v0]);
const smo57077v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57077v1ar = [];
const smo57060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57060.setAttribute('id', 'smo57060');
smo57060.setStyle({ fillStyle: '#aaaaaa7f' });
smo57077v1ar.push(smo57060);
const smo57061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57061.setAttribute('id', 'smo57061');
smo57061.setStyle({ fillStyle: '#aaaaaa7f' });
smo57061.addModifier(new VF.Dot(), 0);
smo57061.addModifier(new VF.Dot(), 0);
smo57077v1ar.push(smo57061);
const smo57062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57062.setAttribute('id', 'smo57062');
smo57062.setStyle({ fillStyle: '#aaaaaa7f' });
smo57077v1ar.push(smo57062);
const smo57063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57063.setAttribute('id', 'smo57063');
smo57063.setStyle({ fillStyle: '#aaaaaa7f' });
smo57063.addModifier(new VF.Dot(), 0);
smo57063.addModifier(new VF.Dot(), 0);
smo57077v1ar.push(smo57063);
smo57077v1.addTickables(smo57077v1ar)
fmtsmo5707716.joinVoices([smo57077v1]);
const fmtsmo6236216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo62362v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62362v0ar = [];
const smo62341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62341.setAttribute('id', 'smo62341');
smo62362v0ar.push(smo62341);
const smo62342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62342.setAttribute('id', 'smo62342');
smo62342.addModifier(new VF.Dot(), 0);
smo62362v0ar.push(smo62342);
const smo62343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62343.setAttribute('id', 'smo62343');
smo62362v0ar.push(smo62343);
const smo62344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62344.setAttribute('id', 'smo62344');
smo62362v0ar.push(smo62344);
const smo62345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62345.setAttribute('id', 'smo62345');
smo62345.addModifier(new VF.Dot(), 0);
smo62362v0ar.push(smo62345);
const smo62346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62346.setAttribute('id', 'smo62346');
smo62362v0ar.push(smo62346);
smo62362v0.addTickables(smo62362v0ar)
fmtsmo6236216.joinVoices([smo62362v0]);
const smo62362v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62362v1ar = [];
const smo62347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62347.setAttribute('id', 'smo62347');
smo62347.setStyle({ fillStyle: "#115511" });
smo62362v1ar.push(smo62347);
const smo62348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62348.setAttribute('id', 'smo62348');
smo62348.setStyle({ fillStyle: "#115511" });
smo62362v1ar.push(smo62348);
smo62362v1.addTickables(smo62362v1ar)
fmtsmo6236216.joinVoices([smo62362v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66094 = smo57047.getStemDirection();
smo57047.setStemDirection(dirsmo66094);
smo57048.setStemDirection(dirsmo66094);
const smo66094 = new VF.Beam([smo57047,smo57048]);
const dirsmo66095 = smo57049.getStemDirection();
smo57049.setStemDirection(dirsmo66095);
smo57050.setStemDirection(dirsmo66095);
smo57051.setStemDirection(dirsmo66095);
smo57052.setStemDirection(dirsmo66095);
const smo66095 = new VF.Beam([smo57049,smo57050,smo57051,smo57052]);
const dirsmo66096 = smo57054.getStemDirection();
smo57054.setStemDirection(dirsmo66096);
smo57055.setStemDirection(dirsmo66096);
const smo66096 = new VF.Beam([smo57054,smo57055]);
const dirsmo66097 = smo57056.getStemDirection();
smo57056.setStemDirection(dirsmo66097);
smo57057.setStemDirection(dirsmo66097);
smo57058.setStemDirection(dirsmo66097);
smo57059.setStemDirection(dirsmo66097);
const smo66097 = new VF.Beam([smo57056,smo57057,smo57058,smo57059]);
 
// formatting measures in staff group smo55345
fmtsmo5707716.format([smo57077v0,smo57077v1,smo62362v0,smo62362v1], 544);
const stavesmo57077 = new VF.Stave(692, 1778, 558);
stavesmo57077.setAttribute('id', 'stavesmo57077');
stavesmo57077.setBegBarType(VF.Barline.type.NONE);
stavesmo57077.setContext(context);
stavesmo57077.draw();
smo57077v0.draw(context, stavesmo57077);
smo57077v1.draw(context, stavesmo57077);
smo66094.setContext(context);
smo66094.draw();
smo66095.setContext(context);
smo66095.draw();
smo66096.setContext(context);
smo66096.draw();
smo66097.setContext(context);
smo66097.draw();
const stavesmo62362 = new VF.Stave(692, 1862, 558);
stavesmo62362.setAttribute('id', 'stavesmo62362');
stavesmo62362.setBegBarType(VF.Barline.type.NONE);
stavesmo62362.setContext(context);
stavesmo62362.draw();
smo62362v0.draw(context, stavesmo62362);
smo62362v1.draw(context, stavesmo62362);
const fmtsmo5710917 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo57109v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57109v0ar = [];
const smo57078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57078.setAttribute('id', 'smo57078');
smo57109v0ar.push(smo57078);
const smo57079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57079.setAttribute('id', 'smo57079');
smo57109v0ar.push(smo57079);
const smo57080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stem_direction":1,"auto_stem":false,"keys":["bn/4/r"]}'))
smo57080.setAttribute('id', 'smo57080');
smo57109v0ar.push(smo57080);
const smo57081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57081.setAttribute('id', 'smo57081');
smo57109v0ar.push(smo57081);
const smo57082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57082.setAttribute('id', 'smo57082');
smo57109v0ar.push(smo57082);
const smo57083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57083.setAttribute('id', 'smo57083');
smo57109v0ar.push(smo57083);
const smo57084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57084.setAttribute('id', 'smo57084');
smo57109v0ar.push(smo57084);
const smo57085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57085.setAttribute('id', 'smo57085');
smo57109v0ar.push(smo57085);
const smo57086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57086.setAttribute('id', 'smo57086');
smo57109v0ar.push(smo57086);
const smo57087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57087.setAttribute('id', 'smo57087');
smo57109v0ar.push(smo57087);
const smo57088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57088.setAttribute('id', 'smo57088');
smo57109v0ar.push(smo57088);
const smo57089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57089.setAttribute('id', 'smo57089');
smo57109v0ar.push(smo57089);
const smo57090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo57090.setAttribute('id', 'smo57090');
smo57109v0ar.push(smo57090);
const smo57091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo57091.setAttribute('id', 'smo57091');
smo57109v0ar.push(smo57091);
smo57109v0.addTickables(smo57109v0ar)
fmtsmo5710917.joinVoices([smo57109v0]);
const smo57109v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57109v1ar = [];
const smo57092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57092.setAttribute('id', 'smo57092');
smo57092.setStyle({ fillStyle: '#aaaaaa7f' });
smo57109v1ar.push(smo57092);
const smo57093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57093.setAttribute('id', 'smo57093');
smo57093.setStyle({ fillStyle: '#aaaaaa7f' });
smo57093.addModifier(new VF.Dot(), 0);
smo57093.addModifier(new VF.Dot(), 0);
smo57109v1ar.push(smo57093);
const smo57094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57094.setAttribute('id', 'smo57094');
smo57094.setStyle({ fillStyle: '#aaaaaa7f' });
smo57109v1ar.push(smo57094);
const smo57095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57095.setAttribute('id', 'smo57095');
smo57095.setStyle({ fillStyle: '#aaaaaa7f' });
smo57095.addModifier(new VF.Dot(), 0);
smo57095.addModifier(new VF.Dot(), 0);
smo57109v1ar.push(smo57095);
smo57109v1.addTickables(smo57109v1ar)
fmtsmo5710917.joinVoices([smo57109v1]);
const fmtsmo6238417 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo62384v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62384v0ar = [];
const smo62363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62363.setAttribute('id', 'smo62363');
smo62384v0ar.push(smo62363);
const smo62364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62364.setAttribute('id', 'smo62364');
smo62364.addModifier(new VF.Dot(), 0);
smo62384v0ar.push(smo62364);
const smo62365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62365.setAttribute('id', 'smo62365');
smo62384v0ar.push(smo62365);
const smo62366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62366.setAttribute('id', 'smo62366');
smo62384v0ar.push(smo62366);
const smo62367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62367.setAttribute('id', 'smo62367');
smo62367.addModifier(new VF.Dot(), 0);
smo62384v0ar.push(smo62367);
const smo62368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo62368.setAttribute('id', 'smo62368');
smo62384v0ar.push(smo62368);
smo62384v0.addTickables(smo62384v0ar)
fmtsmo6238417.joinVoices([smo62384v0]);
const smo62384v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62384v1ar = [];
const smo62369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62369.setAttribute('id', 'smo62369');
smo62369.setStyle({ fillStyle: "#115511" });
smo62384v1ar.push(smo62369);
const smo62370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo62370.setAttribute('id', 'smo62370');
smo62370.setStyle({ fillStyle: "#115511" });
smo62384v1ar.push(smo62370);
smo62384v1.addTickables(smo62384v1ar)
fmtsmo6238417.joinVoices([smo62384v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66102 = smo57081.getStemDirection();
smo57081.setStemDirection(dirsmo66102);
smo57082.setStemDirection(dirsmo66102);
smo57083.setStemDirection(dirsmo66102);
smo57084.setStemDirection(dirsmo66102);
const smo66102 = new VF.Beam([smo57081,smo57082,smo57083,smo57084]);
const dirsmo66103 = smo57086.getStemDirection();
smo57086.setStemDirection(dirsmo66103);
smo57087.setStemDirection(dirsmo66103);
const smo66103 = new VF.Beam([smo57086,smo57087]);
const dirsmo66104 = smo57088.getStemDirection();
smo57088.setStemDirection(dirsmo66104);
smo57089.setStemDirection(dirsmo66104);
smo57090.setStemDirection(dirsmo66104);
smo57091.setStemDirection(dirsmo66104);
const smo66104 = new VF.Beam([smo57088,smo57089,smo57090,smo57091]);
 
// formatting measures in staff group smo55345
fmtsmo5710917.format([smo57109v0,smo57109v1,smo62384v0,smo62384v1], 544);
const stavesmo57109 = new VF.Stave(1250, 1778, 558);
stavesmo57109.setAttribute('id', 'stavesmo57109');
stavesmo57109.setBegBarType(VF.Barline.type.NONE);
stavesmo57109.setContext(context);
stavesmo57109.draw();
smo57109v0.draw(context, stavesmo57109);
smo57109v1.draw(context, stavesmo57109);
smo66102.setContext(context);
smo66102.draw();
smo66103.setContext(context);
smo66103.draw();
smo66104.setContext(context);
smo66104.draw();
const stavesmo62384 = new VF.Stave(1250, 1862, 558);
stavesmo62384.setAttribute('id', 'stavesmo62384');
stavesmo62384.setBegBarType(VF.Barline.type.NONE);
stavesmo62384.setContext(context);
stavesmo62384.draw();
smo62384v0.draw(context, stavesmo62384);
smo62384v1.draw(context, stavesmo62384);
const rightsmo55345stavesmo571091 = new VF.StaveConnector(stavesmo57109, stavesmo62384).setType(0);
rightsmo55345stavesmo571091.setContext(context).draw();
const fmtsmo5714118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo57141v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57141v0ar = [];
const smo57110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57110.setAttribute('id', 'smo57110');
smo57141v0ar.push(smo57110);
const smo57111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57111.setAttribute('id', 'smo57111');
smo57141v0ar.push(smo57111);
const smo57112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57112.setAttribute('id', 'smo57112');
smo57141v0ar.push(smo57112);
const smo57113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57113.setAttribute('id', 'smo57113');
smo57141v0ar.push(smo57113);
const smo57114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57114.setAttribute('id', 'smo57114');
smo57141v0ar.push(smo57114);
const smo57115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57115.setAttribute('id', 'smo57115');
smo57141v0ar.push(smo57115);
const smo57116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57116.setAttribute('id', 'smo57116');
smo57141v0ar.push(smo57116);
const smo57117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57117.setAttribute('id', 'smo57117');
smo57141v0ar.push(smo57117);
const smo57118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57118.setAttribute('id', 'smo57118');
smo57141v0ar.push(smo57118);
const smo57119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57119.setAttribute('id', 'smo57119');
smo57141v0ar.push(smo57119);
const smo57120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57120.setAttribute('id', 'smo57120');
smo57141v0ar.push(smo57120);
const smo57121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo57121.setAttribute('id', 'smo57121');
smo57141v0ar.push(smo57121);
const smo57122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57122.setAttribute('id', 'smo57122');
smo57141v0ar.push(smo57122);
const smo57123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57123.setAttribute('id', 'smo57123');
smo57141v0ar.push(smo57123);
smo57141v0.addTickables(smo57141v0ar)
fmtsmo5714118.joinVoices([smo57141v0]);
const smo57141v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57141v1ar = [];
const smo57124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57124.setAttribute('id', 'smo57124');
smo57124.setStyle({ fillStyle: '#aaaaaa7f' });
smo57141v1ar.push(smo57124);
const smo57125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57125.setAttribute('id', 'smo57125');
smo57125.setStyle({ fillStyle: '#aaaaaa7f' });
smo57125.addModifier(new VF.Dot(), 0);
smo57125.addModifier(new VF.Dot(), 0);
smo57141v1ar.push(smo57125);
const smo57126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57126.setAttribute('id', 'smo57126');
smo57126.setStyle({ fillStyle: '#aaaaaa7f' });
smo57141v1ar.push(smo57126);
const smo57127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57127.setAttribute('id', 'smo57127');
smo57127.setStyle({ fillStyle: '#aaaaaa7f' });
smo57127.addModifier(new VF.Dot(), 0);
smo57127.addModifier(new VF.Dot(), 0);
smo57141v1ar.push(smo57127);
smo57141v1.addTickables(smo57141v1ar)
fmtsmo5714118.joinVoices([smo57141v1]);
const fmtsmo6240618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo62406v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62406v0ar = [];
const smo62385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62385.setAttribute('id', 'smo62385');
smo62406v0ar.push(smo62385);
const smo62386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62386.setAttribute('id', 'smo62386');
smo62386.addModifier(new VF.Dot(), 0);
smo62406v0ar.push(smo62386);
const smo62387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62387.setAttribute('id', 'smo62387');
smo62406v0ar.push(smo62387);
const smo62388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62388.setAttribute('id', 'smo62388');
smo62406v0ar.push(smo62388);
const smo62389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62389.setAttribute('id', 'smo62389');
smo62389.addModifier(new VF.Dot(), 0);
smo62406v0ar.push(smo62389);
const smo62390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo62390.setAttribute('id', 'smo62390');
smo62406v0ar.push(smo62390);
smo62406v0.addTickables(smo62406v0ar)
fmtsmo6240618.joinVoices([smo62406v0]);
const smo62406v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62406v1ar = [];
const smo62391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62391.setAttribute('id', 'smo62391');
smo62391.setStyle({ fillStyle: "#115511" });
smo62406v1ar.push(smo62391);
const smo62392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62392.setAttribute('id', 'smo62392');
smo62392.setStyle({ fillStyle: "#115511" });
smo62406v1ar.push(smo62392);
smo62406v1.addTickables(smo62406v1ar)
fmtsmo6240618.joinVoices([smo62406v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66117 = smo57111.getStemDirection();
smo57111.setStemDirection(dirsmo66117);
smo57112.setStemDirection(dirsmo66117);
const smo66117 = new VF.Beam([smo57111,smo57112]);
const dirsmo66118 = smo57113.getStemDirection();
smo57113.setStemDirection(dirsmo66118);
smo57114.setStemDirection(dirsmo66118);
smo57115.setStemDirection(dirsmo66118);
smo57116.setStemDirection(dirsmo66118);
const smo66118 = new VF.Beam([smo57113,smo57114,smo57115,smo57116]);
const dirsmo66119 = smo57118.getStemDirection();
smo57118.setStemDirection(dirsmo66119);
smo57119.setStemDirection(dirsmo66119);
const smo66119 = new VF.Beam([smo57118,smo57119]);
const dirsmo66120 = smo57120.getStemDirection();
smo57120.setStemDirection(dirsmo66120);
smo57121.setStemDirection(dirsmo66120);
smo57122.setStemDirection(dirsmo66120);
smo57123.setStemDirection(dirsmo66120);
const smo66120 = new VF.Beam([smo57120,smo57121,smo57122,smo57123]);
 
// formatting measures in staff group smo55345
fmtsmo5714118.format([smo57141v0,smo57141v1,smo62406v0,smo62406v1], 529);
const stavesmo57141 = new VF.Stave(90, 2049, 587);
stavesmo57141.setAttribute('id', 'stavesmo57141');
stavesmo57141.setBegBarType(1);
stavesmo57141.addClef('treble');
stavesmo57141.setContext(context);
stavesmo57141.draw();
smo57141v0.draw(context, stavesmo57141);
smo57141v1.draw(context, stavesmo57141);
smo66117.setContext(context);
smo66117.draw();
smo66118.setContext(context);
smo66118.draw();
smo66119.setContext(context);
smo66119.draw();
smo66120.setContext(context);
smo66120.draw();
const stavesmo62406 = new VF.Stave(90, 2136, 587);
stavesmo62406.setAttribute('id', 'stavesmo62406');
stavesmo62406.setBegBarType(1);
stavesmo62406.addClef('treble');
stavesmo62406.setContext(context);
stavesmo62406.draw();
smo62406v0.draw(context, stavesmo62406);
smo62406v1.draw(context, stavesmo62406);
const leftsmo55345stavesmo571411 = new VF.StaveConnector(stavesmo57141, stavesmo62406).setType(3);
leftsmo55345stavesmo571411.setContext(context).draw();
const fmtsmo5717319 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo57173v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57173v0ar = [];
const smo57142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57142.setAttribute('id', 'smo57142');
smo57173v0ar.push(smo57142);
const smo57143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57143.setAttribute('id', 'smo57143');
const smo571430acc = new VF.Accidental('b');
smo57143.addModifier(smo571430acc, 0);
smo57173v0ar.push(smo57143);
const smo57144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57144.setAttribute('id', 'smo57144');
smo57173v0ar.push(smo57144);
const smo57145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57145.setAttribute('id', 'smo57145');
smo57173v0ar.push(smo57145);
const smo57146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57146.setAttribute('id', 'smo57146');
smo57173v0ar.push(smo57146);
const smo57147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57147.setAttribute('id', 'smo57147');
smo57173v0ar.push(smo57147);
const smo57148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57148.setAttribute('id', 'smo57148');
smo57173v0ar.push(smo57148);
const smo57149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57149.setAttribute('id', 'smo57149');
smo57173v0ar.push(smo57149);
const smo57150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57150.setAttribute('id', 'smo57150');
smo57173v0ar.push(smo57150);
const smo57151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57151.setAttribute('id', 'smo57151');
smo57173v0ar.push(smo57151);
const smo57152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57152.setAttribute('id', 'smo57152');
smo57173v0ar.push(smo57152);
const smo57153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo57153.setAttribute('id', 'smo57153');
smo57173v0ar.push(smo57153);
const smo57154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57154.setAttribute('id', 'smo57154');
smo57173v0ar.push(smo57154);
const smo57155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57155.setAttribute('id', 'smo57155');
smo57173v0ar.push(smo57155);
smo57173v0.addTickables(smo57173v0ar)
fmtsmo5717319.joinVoices([smo57173v0]);
const smo57173v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57173v1ar = [];
const smo57156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57156.setAttribute('id', 'smo57156');
smo57156.setStyle({ fillStyle: '#aaaaaa7f' });
smo57173v1ar.push(smo57156);
const smo57157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57157.setAttribute('id', 'smo57157');
smo57157.setStyle({ fillStyle: '#aaaaaa7f' });
smo57157.addModifier(new VF.Dot(), 0);
smo57157.addModifier(new VF.Dot(), 0);
smo57173v1ar.push(smo57157);
const smo57158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57158.setAttribute('id', 'smo57158');
smo57158.setStyle({ fillStyle: '#aaaaaa7f' });
smo57173v1ar.push(smo57158);
const smo57159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57159.setAttribute('id', 'smo57159');
smo57159.setStyle({ fillStyle: '#aaaaaa7f' });
smo57159.addModifier(new VF.Dot(), 0);
smo57159.addModifier(new VF.Dot(), 0);
smo57173v1ar.push(smo57159);
smo57173v1.addTickables(smo57173v1ar)
fmtsmo5717319.joinVoices([smo57173v1]);
const fmtsmo6242819 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo62428v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62428v0ar = [];
const smo62407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62407.setAttribute('id', 'smo62407');
smo62428v0ar.push(smo62407);
const smo62408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62408.setAttribute('id', 'smo62408');
smo62408.addModifier(new VF.Dot(), 0);
smo62428v0ar.push(smo62408);
const smo62409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62409.setAttribute('id', 'smo62409');
smo62428v0ar.push(smo62409);
const smo62410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62410.setAttribute('id', 'smo62410');
smo62428v0ar.push(smo62410);
const smo62411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62411.setAttribute('id', 'smo62411');
smo62411.addModifier(new VF.Dot(), 0);
smo62428v0ar.push(smo62411);
const smo62412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62412.setAttribute('id', 'smo62412');
smo62428v0ar.push(smo62412);
smo62428v0.addTickables(smo62428v0ar)
fmtsmo6242819.joinVoices([smo62428v0]);
const smo62428v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62428v1ar = [];
const smo62413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62413.setAttribute('id', 'smo62413');
smo62413.setStyle({ fillStyle: "#115511" });
smo62428v1ar.push(smo62413);
const smo62414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo62414.setAttribute('id', 'smo62414');
smo62414.setStyle({ fillStyle: "#115511" });
smo62428v1ar.push(smo62414);
smo62428v1.addTickables(smo62428v1ar)
fmtsmo6242819.joinVoices([smo62428v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66125 = smo57143.getStemDirection();
smo57143.setStemDirection(dirsmo66125);
smo57144.setStemDirection(dirsmo66125);
const smo66125 = new VF.Beam([smo57143,smo57144]);
const dirsmo66126 = smo57145.getStemDirection();
smo57145.setStemDirection(dirsmo66126);
smo57146.setStemDirection(dirsmo66126);
smo57147.setStemDirection(dirsmo66126);
smo57148.setStemDirection(dirsmo66126);
const smo66126 = new VF.Beam([smo57145,smo57146,smo57147,smo57148]);
const dirsmo66127 = smo57150.getStemDirection();
smo57150.setStemDirection(dirsmo66127);
smo57151.setStemDirection(dirsmo66127);
const smo66127 = new VF.Beam([smo57150,smo57151]);
const dirsmo66128 = smo57152.getStemDirection();
smo57152.setStemDirection(dirsmo66128);
smo57153.setStemDirection(dirsmo66128);
smo57154.setStemDirection(dirsmo66128);
smo57155.setStemDirection(dirsmo66128);
const smo66128 = new VF.Beam([smo57152,smo57153,smo57154,smo57155]);
 
// formatting measures in staff group smo55345
fmtsmo5717319.format([smo57173v0,smo57173v1,smo62428v0,smo62428v1], 575);
const stavesmo57173 = new VF.Stave(677, 2049, 589);
stavesmo57173.setAttribute('id', 'stavesmo57173');
stavesmo57173.setBegBarType(VF.Barline.type.NONE);
stavesmo57173.setContext(context);
stavesmo57173.draw();
smo57173v0.draw(context, stavesmo57173);
smo57173v1.draw(context, stavesmo57173);
smo66125.setContext(context);
smo66125.draw();
smo66126.setContext(context);
smo66126.draw();
smo66127.setContext(context);
smo66127.draw();
smo66128.setContext(context);
smo66128.draw();
const stavesmo62428 = new VF.Stave(677, 2136, 589);
stavesmo62428.setAttribute('id', 'stavesmo62428');
stavesmo62428.setBegBarType(VF.Barline.type.NONE);
stavesmo62428.setContext(context);
stavesmo62428.draw();
smo62428v0.draw(context, stavesmo62428);
smo62428v1.draw(context, stavesmo62428);
const fmtsmo5720520 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo57205v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57205v0ar = [];
const smo57174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57174.setAttribute('id', 'smo57174');
smo57205v0ar.push(smo57174);
const smo57175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57175.setAttribute('id', 'smo57175');
smo57205v0ar.push(smo57175);
const smo57176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57176.setAttribute('id', 'smo57176');
smo57205v0ar.push(smo57176);
const smo57177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57177.setAttribute('id', 'smo57177');
smo57205v0ar.push(smo57177);
const smo57178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57178.setAttribute('id', 'smo57178');
smo57205v0ar.push(smo57178);
const smo57179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57179.setAttribute('id', 'smo57179');
smo57205v0ar.push(smo57179);
const smo57180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57180.setAttribute('id', 'smo57180');
smo57205v0ar.push(smo57180);
const smo57181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57181.setAttribute('id', 'smo57181');
smo57205v0ar.push(smo57181);
const smo57182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57182.setAttribute('id', 'smo57182');
smo57205v0ar.push(smo57182);
const smo57183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57183.setAttribute('id', 'smo57183');
smo57205v0ar.push(smo57183);
const smo57184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57184.setAttribute('id', 'smo57184');
smo57205v0ar.push(smo57184);
const smo57185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo57185.setAttribute('id', 'smo57185');
smo57205v0ar.push(smo57185);
const smo57186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo57186.setAttribute('id', 'smo57186');
smo57205v0ar.push(smo57186);
const smo57187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo57187.setAttribute('id', 'smo57187');
smo57205v0ar.push(smo57187);
smo57205v0.addTickables(smo57205v0ar)
fmtsmo5720520.joinVoices([smo57205v0]);
const smo57205v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57205v1ar = [];
const smo57188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57188.setAttribute('id', 'smo57188');
smo57188.setStyle({ fillStyle: '#aaaaaa7f' });
smo57205v1ar.push(smo57188);
const smo57189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57189.setAttribute('id', 'smo57189');
smo57189.setStyle({ fillStyle: '#aaaaaa7f' });
smo57189.addModifier(new VF.Dot(), 0);
smo57189.addModifier(new VF.Dot(), 0);
smo57205v1ar.push(smo57189);
const smo57190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57190.setAttribute('id', 'smo57190');
smo57190.setStyle({ fillStyle: '#aaaaaa7f' });
smo57205v1ar.push(smo57190);
const smo57191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo57191.setAttribute('id', 'smo57191');
smo57191.setStyle({ fillStyle: '#aaaaaa7f' });
smo57191.addModifier(new VF.Dot(), 0);
smo57191.addModifier(new VF.Dot(), 0);
smo57205v1ar.push(smo57191);
smo57205v1.addTickables(smo57205v1ar)
fmtsmo5720520.joinVoices([smo57205v1]);
const fmtsmo6245020 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo62450v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62450v0ar = [];
const smo62429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62429.setAttribute('id', 'smo62429');
smo62450v0ar.push(smo62429);
const smo62430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62430.setAttribute('id', 'smo62430');
smo62430.addModifier(new VF.Dot(), 0);
smo62450v0ar.push(smo62430);
const smo62431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62431.setAttribute('id', 'smo62431');
smo62450v0ar.push(smo62431);
const smo62432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62432.setAttribute('id', 'smo62432');
smo62450v0ar.push(smo62432);
const smo62433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62433.setAttribute('id', 'smo62433');
smo62433.addModifier(new VF.Dot(), 0);
smo62450v0ar.push(smo62433);
const smo62434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo62434.setAttribute('id', 'smo62434');
smo62450v0ar.push(smo62434);
smo62450v0.addTickables(smo62450v0ar)
fmtsmo6245020.joinVoices([smo62450v0]);
const smo62450v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62450v1ar = [];
const smo62435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
smo62435.setAttribute('id', 'smo62435');
smo62435.setStyle({ fillStyle: "#115511" });
smo62450v1ar.push(smo62435);
const smo62436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
smo62436.setAttribute('id', 'smo62436');
smo62436.setStyle({ fillStyle: "#115511" });
smo62450v1ar.push(smo62436);
smo62450v1.addTickables(smo62450v1ar)
fmtsmo6245020.joinVoices([smo62450v1]);
// create beam groups and tuplets for format grp smo55345 before formatting
const dirsmo66133 = smo57175.getStemDirection();
smo57175.setStemDirection(dirsmo66133);
smo57176.setStemDirection(dirsmo66133);
const smo66133 = new VF.Beam([smo57175,smo57176]);
const dirsmo66134 = smo57177.getStemDirection();
smo57177.setStemDirection(dirsmo66134);
smo57178.setStemDirection(dirsmo66134);
smo57179.setStemDirection(dirsmo66134);
smo57180.setStemDirection(dirsmo66134);
const smo66134 = new VF.Beam([smo57177,smo57178,smo57179,smo57180]);
const dirsmo66135 = smo57182.getStemDirection();
smo57182.setStemDirection(dirsmo66135);
smo57183.setStemDirection(dirsmo66135);
const smo66135 = new VF.Beam([smo57182,smo57183]);
const dirsmo66136 = smo57184.getStemDirection();
smo57184.setStemDirection(dirsmo66136);
smo57185.setStemDirection(dirsmo66136);
smo57186.setStemDirection(dirsmo66136);
smo57187.setStemDirection(dirsmo66136);
const smo66136 = new VF.Beam([smo57184,smo57185,smo57186,smo57187]);
 
// formatting measures in staff group smo55345
fmtsmo5720520.format([smo57205v0,smo57205v1,smo62450v0,smo62450v1], 529);
const stavesmo57205 = new VF.Stave(1266, 2049, 543);
stavesmo57205.setAttribute('id', 'stavesmo57205');
stavesmo57205.setBegBarType(VF.Barline.type.NONE);
stavesmo57205.setContext(context);
stavesmo57205.draw();
smo57205v0.draw(context, stavesmo57205);
smo57205v1.draw(context, stavesmo57205);
smo66133.setContext(context);
smo66133.draw();
smo66134.setContext(context);
smo66134.draw();
smo66135.setContext(context);
smo66135.draw();
smo66136.setContext(context);
smo66136.draw();
const stavesmo62450 = new VF.Stave(1266, 2136, 543);
stavesmo62450.setAttribute('id', 'stavesmo62450');
stavesmo62450.setBegBarType(VF.Barline.type.NONE);
stavesmo62450.setContext(context);
stavesmo62450.draw();
smo62450v0.draw(context, stavesmo62450);
smo62450v1.draw(context, stavesmo62450);
const rightsmo55345stavesmo572051 = new VF.StaveConnector(stavesmo57205, stavesmo62450).setType(0);
rightsmo55345stavesmo572051.setContext(context).draw();
// modifier from 1-0-0-1 to 1-0-0-2
const smo68362 = new VF.StaveTie({ first_note: smo61990, last_note: smo61991, 
          firstNote: smo61990, lastNote: smo61991, first_indices: [0], last_indices: [0]});
smo68362.setContext(context).draw();
// modifier from 1-0-0-4 to 1-0-0-5
const smo68363 = new VF.StaveTie({ first_note: smo61993, last_note: smo61994, 
          firstNote: smo61993, lastNote: smo61994, first_indices: [0], last_indices: [0]});
smo68363.setContext(context).draw();
// modifier from 1-1-0-1 to 1-1-0-2
const smo68364 = new VF.StaveTie({ first_note: smo62012, last_note: smo62013, 
          firstNote: smo62012, lastNote: smo62013, first_indices: [0], last_indices: [0]});
smo68364.setContext(context).draw();
// modifier from 1-1-0-4 to 1-1-0-5
const smo68365 = new VF.StaveTie({ first_note: smo62015, last_note: smo62016, 
          firstNote: smo62015, lastNote: smo62016, first_indices: [0], last_indices: [0]});
smo68365.setContext(context).draw();
// modifier from 1-2-0-1 to 1-2-0-2
const smo68366 = new VF.StaveTie({ first_note: smo62034, last_note: smo62035, 
          firstNote: smo62034, lastNote: smo62035, first_indices: [0], last_indices: [0]});
smo68366.setContext(context).draw();
// modifier from 1-2-0-4 to 1-2-0-5
const smo68367 = new VF.StaveTie({ first_note: smo62037, last_note: smo62038, 
          firstNote: smo62037, lastNote: smo62038, first_indices: [0], last_indices: [0]});
smo68367.setContext(context).draw();
// modifier from 1-3-0-1 to 1-3-0-2
const smo68368 = new VF.StaveTie({ first_note: smo62056, last_note: smo62057, 
          firstNote: smo62056, lastNote: smo62057, first_indices: [0], last_indices: [0]});
smo68368.setContext(context).draw();
// modifier from 1-3-0-4 to 1-3-0-5
const smo68369 = new VF.StaveTie({ first_note: smo62059, last_note: smo62060, 
          firstNote: smo62059, lastNote: smo62060, first_indices: [0], last_indices: [0]});
smo68369.setContext(context).draw();
// modifier from 1-4-0-1 to 1-4-0-2
const smo68370 = new VF.StaveTie({ first_note: smo62078, last_note: smo62079, 
          firstNote: smo62078, lastNote: smo62079, first_indices: [0], last_indices: [0]});
smo68370.setContext(context).draw();
// modifier from 1-4-0-4 to 1-4-0-5
const smo68371 = new VF.StaveTie({ first_note: smo62081, last_note: smo62082, 
          firstNote: smo62081, lastNote: smo62082, first_indices: [0], last_indices: [0]});
smo68371.setContext(context).draw();
// modifier from 1-5-0-1 to 1-5-0-2
const smo68372 = new VF.StaveTie({ first_note: smo62100, last_note: smo62101, 
          firstNote: smo62100, lastNote: smo62101, first_indices: [0], last_indices: [0]});
smo68372.setContext(context).draw();
// modifier from 1-5-0-4 to 1-5-0-5
const smo68373 = new VF.StaveTie({ first_note: smo62103, last_note: smo62104, 
          firstNote: smo62103, lastNote: smo62104, first_indices: [0], last_indices: [0]});
smo68373.setContext(context).draw();
// modifier from 1-6-0-1 to 1-6-0-2
const smo68374 = new VF.StaveTie({ first_note: smo62122, last_note: smo62123, 
          firstNote: smo62122, lastNote: smo62123, first_indices: [0], last_indices: [0]});
smo68374.setContext(context).draw();
// modifier from 1-6-0-4 to 1-6-0-5
const smo68375 = new VF.StaveTie({ first_note: smo62125, last_note: smo62126, 
          firstNote: smo62125, lastNote: smo62126, first_indices: [0], last_indices: [0]});
smo68375.setContext(context).draw();
// modifier from 1-7-0-1 to 1-7-0-2
const smo68376 = new VF.StaveTie({ first_note: smo62144, last_note: smo62145, 
          firstNote: smo62144, lastNote: smo62145, first_indices: [0], last_indices: [0]});
smo68376.setContext(context).draw();
// modifier from 1-7-0-4 to 1-7-0-5
const smo68377 = new VF.StaveTie({ first_note: smo62147, last_note: smo62148, 
          firstNote: smo62147, lastNote: smo62148, first_indices: [0], last_indices: [0]});
smo68377.setContext(context).draw();
// modifier from 1-8-0-1 to 1-8-0-2
const smo68378 = new VF.StaveTie({ first_note: smo62166, last_note: smo62167, 
          firstNote: smo62166, lastNote: smo62167, first_indices: [0], last_indices: [0]});
smo68378.setContext(context).draw();
// modifier from 1-8-0-4 to 1-8-0-5
const smo68379 = new VF.StaveTie({ first_note: smo62169, last_note: smo62170, 
          firstNote: smo62169, lastNote: smo62170, first_indices: [0], last_indices: [0]});
smo68379.setContext(context).draw();
// modifier from 1-9-0-1 to 1-9-0-2
const smo68380 = new VF.StaveTie({ first_note: smo62188, last_note: smo62189, 
          firstNote: smo62188, lastNote: smo62189, first_indices: [0], last_indices: [0]});
smo68380.setContext(context).draw();
// modifier from 1-9-0-4 to 1-9-0-5
const smo68381 = new VF.StaveTie({ first_note: smo62191, last_note: smo62192, 
          firstNote: smo62191, lastNote: smo62192, first_indices: [0], last_indices: [0]});
smo68381.setContext(context).draw();
// modifier from 1-10-0-1 to 1-10-0-2
const smo68382 = new VF.StaveTie({ first_note: smo62210, last_note: smo62211, 
          firstNote: smo62210, lastNote: smo62211, first_indices: [0], last_indices: [0]});
smo68382.setContext(context).draw();
// modifier from 1-10-0-4 to 1-10-0-5
const smo68383 = new VF.StaveTie({ first_note: smo62213, last_note: smo62214, 
          firstNote: smo62213, lastNote: smo62214, first_indices: [0], last_indices: [0]});
smo68383.setContext(context).draw();
// modifier from 1-11-0-1 to 1-11-0-2
const smo68384 = new VF.StaveTie({ first_note: smo62232, last_note: smo62233, 
          firstNote: smo62232, lastNote: smo62233, first_indices: [0], last_indices: [0]});
smo68384.setContext(context).draw();
// modifier from 1-11-0-4 to 1-11-0-5
const smo68385 = new VF.StaveTie({ first_note: smo62235, last_note: smo62236, 
          firstNote: smo62235, lastNote: smo62236, first_indices: [0], last_indices: [0]});
smo68385.setContext(context).draw();
// modifier from 1-12-0-1 to 1-12-0-2
const smo68386 = new VF.StaveTie({ first_note: smo62254, last_note: smo62255, 
          firstNote: smo62254, lastNote: smo62255, first_indices: [0], last_indices: [0]});
smo68386.setContext(context).draw();
// modifier from 1-12-0-4 to 1-12-0-5
const smo68387 = new VF.StaveTie({ first_note: smo62257, last_note: smo62258, 
          firstNote: smo62257, lastNote: smo62258, first_indices: [0], last_indices: [0]});
smo68387.setContext(context).draw();
// modifier from 1-13-0-1 to 1-13-0-2
const smo68388 = new VF.StaveTie({ first_note: smo62276, last_note: smo62277, 
          firstNote: smo62276, lastNote: smo62277, first_indices: [0], last_indices: [0]});
smo68388.setContext(context).draw();
// modifier from 1-13-0-4 to 1-13-0-5
const smo68389 = new VF.StaveTie({ first_note: smo62279, last_note: smo62280, 
          firstNote: smo62279, lastNote: smo62280, first_indices: [0], last_indices: [0]});
smo68389.setContext(context).draw();
// modifier from 1-14-0-1 to 1-14-0-2
const smo68390 = new VF.StaveTie({ first_note: smo62298, last_note: smo62299, 
          firstNote: smo62298, lastNote: smo62299, first_indices: [0], last_indices: [0]});
smo68390.setContext(context).draw();
// modifier from 1-14-0-4 to 1-14-0-5
const smo68391 = new VF.StaveTie({ first_note: smo62301, last_note: smo62302, 
          firstNote: smo62301, lastNote: smo62302, first_indices: [0], last_indices: [0]});
smo68391.setContext(context).draw();
// modifier from 1-15-0-1 to 1-15-0-2
const smo68392 = new VF.StaveTie({ first_note: smo62320, last_note: smo62321, 
          firstNote: smo62320, lastNote: smo62321, first_indices: [0], last_indices: [0]});
smo68392.setContext(context).draw();
// modifier from 1-15-0-4 to 1-15-0-5
const smo68393 = new VF.StaveTie({ first_note: smo62323, last_note: smo62324, 
          firstNote: smo62323, lastNote: smo62324, first_indices: [0], last_indices: [0]});
smo68393.setContext(context).draw();
// modifier from 1-16-0-1 to 1-16-0-2
const smo68394 = new VF.StaveTie({ first_note: smo62342, last_note: smo62343, 
          firstNote: smo62342, lastNote: smo62343, first_indices: [0], last_indices: [0]});
smo68394.setContext(context).draw();
// modifier from 1-16-0-4 to 1-16-0-5
const smo68395 = new VF.StaveTie({ first_note: smo62345, last_note: smo62346, 
          firstNote: smo62345, lastNote: smo62346, first_indices: [0], last_indices: [0]});
smo68395.setContext(context).draw();
// modifier from 1-17-0-1 to 1-17-0-2
const smo68396 = new VF.StaveTie({ first_note: smo62364, last_note: smo62365, 
          firstNote: smo62364, lastNote: smo62365, first_indices: [0], last_indices: [0]});
smo68396.setContext(context).draw();
// modifier from 1-17-0-4 to 1-17-0-5
const smo68397 = new VF.StaveTie({ first_note: smo62367, last_note: smo62368, 
          firstNote: smo62367, lastNote: smo62368, first_indices: [0], last_indices: [0]});
smo68397.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-2
const smo68398 = new VF.StaveTie({ first_note: smo62386, last_note: smo62387, 
          firstNote: smo62386, lastNote: smo62387, first_indices: [0], last_indices: [0]});
smo68398.setContext(context).draw();
// modifier from 1-18-0-4 to 1-18-0-5
const smo68399 = new VF.StaveTie({ first_note: smo62389, last_note: smo62390, 
          firstNote: smo62389, lastNote: smo62390, first_indices: [0], last_indices: [0]});
smo68399.setContext(context).draw();
// modifier from 1-19-0-1 to 1-19-0-2
const smo68400 = new VF.StaveTie({ first_note: smo62408, last_note: smo62409, 
          firstNote: smo62408, lastNote: smo62409, first_indices: [0], last_indices: [0]});
smo68400.setContext(context).draw();
// modifier from 1-19-0-4 to 1-19-0-5
const smo68401 = new VF.StaveTie({ first_note: smo62411, last_note: smo62412, 
          firstNote: smo62411, lastNote: smo62412, first_indices: [0], last_indices: [0]});
smo68401.setContext(context).draw();
// modifier from 1-20-0-1 to 1-20-0-2
const smo68402 = new VF.StaveTie({ first_note: smo62430, last_note: smo62431, 
          firstNote: smo62430, lastNote: smo62431, first_indices: [0], last_indices: [0]});
smo68402.setContext(context).draw();
// modifier from 1-20-0-4 to 1-20-0-5
const smo68403 = new VF.StaveTie({ first_note: smo62433, last_note: smo62434, 
          firstNote: smo62433, lastNote: smo62434, first_indices: [0], last_indices: [0]});
smo68403.setContext(context).draw();
}
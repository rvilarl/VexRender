// @@ The Entertainer p 3/3  by Scott Joplin
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setFonts("Bravura","Gonville","Custom");
const fmtsmo10288760 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo102887v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102887v0ar = [];
const smo102866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102866.setAttribute('id', 'smo102866');
const smo1028660acc = new VF.Accidental('n');
smo102866.addModifier(smo1028660acc, 0);
smo102887v0ar.push(smo102866);
const smo102867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo102867.setAttribute('id', 'smo102867');
const smo1028670acc = new VF.Accidental('b');
smo102867.addModifier(smo1028670acc, 0);
smo102887v0ar.push(smo102867);
const smo102868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo102868.setAttribute('id', 'smo102868');
const smo1028680acc = new VF.Accidental('n');
smo102868.addModifier(smo1028680acc, 0);
smo102887v0ar.push(smo102868);
const smo102869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/6/n"]}'))
smo102869.setAttribute('id', 'smo102869');
const smo1028690acc = new VF.Accidental('n');
smo102869.addModifier(smo1028690acc, 0);
smo102887v0ar.push(smo102869);
const smo102870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/6/n"]}'))
smo102870.setAttribute('id', 'smo102870');
smo102887v0ar.push(smo102870);
const smo102871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo102871.setAttribute('id', 'smo102871');
smo102887v0ar.push(smo102871);
const smo102872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo102872.setAttribute('id', 'smo102872');
smo102887v0ar.push(smo102872);
const smo102873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo102873.setAttribute('id', 'smo102873');
smo102887v0ar.push(smo102873);
smo102887v0.addTickables(smo102887v0ar)
fmtsmo10288760.joinVoices([smo102887v0]);
const fmtsmo10563360 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo105633v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105633v0ar = [];
const smo105616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo105616.setAttribute('id', 'smo105616');
const smo1056160acc = new VF.Accidental('n');
smo105616.addModifier(smo1056160acc, 0);
smo105633v0ar.push(smo105616);
const smo105617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo105617.setAttribute('id', 'smo105617');
const smo1056170acc = new VF.Accidental('n');
smo105617.addModifier(smo1056170acc, 0);
const smo1056172acc = new VF.Accidental('n');
smo105617.addModifier(smo1056172acc, 2);
smo105633v0ar.push(smo105617);
const smo105618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n"]}'))
smo105618.setAttribute('id', 'smo105618');
const smo1056180acc = new VF.Accidental('b');
smo105618.addModifier(smo1056180acc, 0);
smo105633v0ar.push(smo105618);
const smo105619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo105619.setAttribute('id', 'smo105619');
smo105633v0ar.push(smo105619);
smo105633v0.addTickables(smo105633v0ar)
fmtsmo10563360.joinVoices([smo105633v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107083 = smo102866.getStemDirection();
smo102866.setStemDirection(dirsmo107083);
smo102867.setStemDirection(dirsmo107083);
smo102868.setStemDirection(dirsmo107083);
smo102869.setStemDirection(dirsmo107083);
const smo107083 = new VF.Beam([smo102866,smo102867,smo102868,smo102869]);
const dirsmo107084 = smo102870.getStemDirection();
smo102870.setStemDirection(dirsmo107084);
smo102871.setStemDirection(dirsmo107084);
smo102872.setStemDirection(dirsmo107084);
smo102873.setStemDirection(dirsmo107084);
const smo107084 = new VF.Beam([smo102870,smo102871,smo102872,smo102873]);
const dirsmo107086 = smo105616.getStemDirection();
smo105616.setStemDirection(dirsmo107086);
smo105617.setStemDirection(dirsmo107086);
const smo107086 = new VF.Beam([smo105616,smo105617]);
const dirsmo107087 = smo105618.getStemDirection();
smo105618.setStemDirection(dirsmo107087);
smo105619.setStemDirection(dirsmo107087);
const smo107087 = new VF.Beam([smo105618,smo105619]);
 
// formatting measures in staff group smo100894
fmtsmo10288760.format([smo102887v0,smo105633v0], 221);
const stavesmo102887 = new VF.Stave(73, 396, 295);
stavesmo102887.setAttribute('id', 'stavesmo102887');
stavesmo102887.setBegBarType(1);
stavesmo102887.addClef('treble');
const keysmo102887 = new VF.KeySignature('Bb');
keysmo102887.addToStave(stavesmo102887);
stavesmo102887.setContext(context);
stavesmo102887.draw();
smo102887v0.draw(context, stavesmo102887);
smo107083.setContext(context);
smo107083.draw();
smo107084.setContext(context);
smo107084.draw();
const stavesmo105633 = new VF.Stave(73, 556, 295);
stavesmo105633.setAttribute('id', 'stavesmo105633');
stavesmo105633.setBegBarType(1);
stavesmo105633.addClef('bass');
const keysmo105633 = new VF.KeySignature('Bb');
keysmo105633.addToStave(stavesmo105633);
stavesmo105633.setContext(context);
stavesmo105633.draw();
smo105633v0.draw(context, stavesmo105633);
smo107086.setContext(context);
smo107086.draw();
smo107087.setContext(context);
smo107087.draw();
const leftsmo100894stavesmo1028871 = new VF.StaveConnector(stavesmo102887, stavesmo105633).setType(3);
leftsmo100894stavesmo1028871.setContext(context).draw();
const fmtsmo10290361 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo102903v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102903v0ar = [];
const smo102888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102888.setAttribute('id', 'smo102888');
smo102903v0ar.push(smo102888);
const smo102889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo102889.setAttribute('id', 'smo102889');
smo102903v0ar.push(smo102889);
smo102903v0.addTickables(smo102903v0ar)
fmtsmo10290361.joinVoices([smo102903v0]);
const fmtsmo10565061 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo105650v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105650v0ar = [];
const smo105634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo105634.setAttribute('id', 'smo105634');
const smo1056342acc = new VF.Accidental('n');
smo105634.addModifier(smo1056342acc, 2);
smo105650v0ar.push(smo105634);
const smo105635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105635.setAttribute('id', 'smo105635');
smo105650v0ar.push(smo105635);
const smo105636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105636.setAttribute('id', 'smo105636');
smo105650v0ar.push(smo105636);
smo105650v0.addTickables(smo105650v0ar)
fmtsmo10565061.joinVoices([smo105650v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107092 = smo105635.getStemDirection();
smo105635.setStemDirection(dirsmo107092);
smo105636.setStemDirection(dirsmo107092);
const smo107092 = new VF.Beam([smo105635,smo105636]);
 
// formatting measures in staff group smo100894
fmtsmo10290361.format([smo102903v0,smo105650v0], 281);
const stavesmo102903 = new VF.Stave(368, 396, 295);
stavesmo102903.setAttribute('id', 'stavesmo102903');
stavesmo102903.setBegBarType(VF.Barline.type.NONE);
stavesmo102903.setContext(context);
stavesmo102903.draw();
smo102903v0.draw(context, stavesmo102903);
const stavesmo105650 = new VF.Stave(368, 556, 295);
stavesmo105650.setAttribute('id', 'stavesmo105650');
stavesmo105650.setBegBarType(VF.Barline.type.NONE);
stavesmo105650.setContext(context);
stavesmo105650.draw();
smo105650v0.draw(context, stavesmo105650);
smo107092.setContext(context);
smo107092.draw();
const fmtsmo10292262 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo102922v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102922v0ar = [];
const smo102904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo102904.setAttribute('id', 'smo102904');
smo102922v0ar.push(smo102904);
const smo102905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo102905.setAttribute('id', 'smo102905');
const smo1029050acc = new VF.Accidental('b');
smo102905.addModifier(smo1029050acc, 0);
smo102922v0ar.push(smo102905);
const smo102906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo102906.setAttribute('id', 'smo102906');
const smo1029061acc = new VF.Accidental('n');
smo102906.addModifier(smo1029061acc, 1);
smo102922v0ar.push(smo102906);
const smo102907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo102907.setAttribute('id', 'smo102907');
smo102922v0ar.push(smo102907);
const smo102908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo102908.setAttribute('id', 'smo102908');
smo102922v0ar.push(smo102908);
smo102922v0.addTickables(smo102922v0ar)
fmtsmo10292262.joinVoices([smo102922v0]);
const fmtsmo10566862 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo105668v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105668v0ar = [];
const smo105651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo105651.setAttribute('id', 'smo105651');
smo105668v0ar.push(smo105651);
const smo105652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105652.setAttribute('id', 'smo105652');
smo105668v0ar.push(smo105652);
const smo105653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105653.setAttribute('id', 'smo105653');
smo105668v0ar.push(smo105653);
const smo105654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105654.setAttribute('id', 'smo105654');
smo105668v0ar.push(smo105654);
smo105668v0.addTickables(smo105668v0ar)
fmtsmo10566862.joinVoices([smo105668v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107096 = smo102904.getStemDirection();
smo102904.setStemDirection(dirsmo107096);
smo102905.setStemDirection(dirsmo107096);
smo102906.setStemDirection(dirsmo107096);
const smo107096 = new VF.Beam([smo102904,smo102905,smo102906]);
const dirsmo107097 = smo102907.getStemDirection();
smo102907.setStemDirection(dirsmo107097);
smo102908.setStemDirection(dirsmo107097);
const smo107097 = new VF.Beam([smo102907,smo102908]);
const dirsmo107099 = smo105651.getStemDirection();
smo105651.setStemDirection(dirsmo107099);
smo105652.setStemDirection(dirsmo107099);
const smo107099 = new VF.Beam([smo105651,smo105652]);
const dirsmo107100 = smo105653.getStemDirection();
smo105653.setStemDirection(dirsmo107100);
smo105654.setStemDirection(dirsmo107100);
const smo107100 = new VF.Beam([smo105653,smo105654]);
 
// formatting measures in staff group smo100894
fmtsmo10292262.format([smo102922v0,smo105668v0], 281);
const stavesmo102922 = new VF.Stave(663, 396, 295);
stavesmo102922.setAttribute('id', 'stavesmo102922');
stavesmo102922.setBegBarType(VF.Barline.type.NONE);
stavesmo102922.setContext(context);
stavesmo102922.draw();
smo102922v0.draw(context, stavesmo102922);
smo107096.setContext(context);
smo107096.draw();
smo107097.setContext(context);
smo107097.draw();
const stavesmo105668 = new VF.Stave(663, 556, 295);
stavesmo105668.setAttribute('id', 'stavesmo105668');
stavesmo105668.setBegBarType(VF.Barline.type.NONE);
stavesmo105668.setContext(context);
stavesmo105668.draw();
smo105668v0.draw(context, stavesmo105668);
smo107099.setContext(context);
smo107099.draw();
smo107100.setContext(context);
smo107100.draw();
const fmtsmo10294363 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo102943v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102943v0ar = [];
const smo102923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo102923.setAttribute('id', 'smo102923');
smo102943v0ar.push(smo102923);
smo102943v0.addTickables(smo102943v0ar)
fmtsmo10294363.joinVoices([smo102943v0]);
const smo102943v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102943v1ar = [];
const smo102924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102924.setAttribute('id', 'smo102924');
smo102924.setStyle({ fillStyle: "#115511" });
smo102943v1ar.push(smo102924);
const smo102925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo102925.setAttribute('id', 'smo102925');
smo102925.setStyle({ fillStyle: "#115511" });
smo102943v1ar.push(smo102925);
const smo102926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102926.setAttribute('id', 'smo102926');
smo102926.setStyle({ fillStyle: "#115511" });
smo102943v1ar.push(smo102926);
const smo102927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo102927.setAttribute('id', 'smo102927');
smo102927.setStyle({ fillStyle: "#115511" });
smo102943v1ar.push(smo102927);
const smo102928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102928.setAttribute('id', 'smo102928');
smo102928.setStyle({ fillStyle: "#115511" });
smo102943v1ar.push(smo102928);
const smo102929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102929.setAttribute('id', 'smo102929');
smo102929.setStyle({ fillStyle: "#115511" });
smo102943v1ar.push(smo102929);
smo102943v1.addTickables(smo102943v1ar)
fmtsmo10294363.joinVoices([smo102943v1]);
const fmtsmo10568663 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo105686v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105686v0ar = [];
const smo105669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo105669.setAttribute('id', 'smo105669');
smo105686v0ar.push(smo105669);
const smo105670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo105670.setAttribute('id', 'smo105670');
smo105686v0ar.push(smo105670);
const smo105671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo105671.setAttribute('id', 'smo105671');
smo105686v0ar.push(smo105671);
const smo105672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo105672.setAttribute('id', 'smo105672');
smo105686v0ar.push(smo105672);
smo105686v0.addTickables(smo105686v0ar)
fmtsmo10568663.joinVoices([smo105686v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107104 = smo102925.getStemDirection();
smo102925.setStemDirection(dirsmo107104);
smo102926.setStemDirection(dirsmo107104);
const smo107104 = new VF.Beam([smo102925,smo102926]);
const dirsmo107105 = smo102927.getStemDirection();
smo102927.setStemDirection(dirsmo107105);
smo102928.setStemDirection(dirsmo107105);
smo102929.setStemDirection(dirsmo107105);
const smo107105 = new VF.Beam([smo102927,smo102928,smo102929]);
const dirsmo107107 = smo105669.getStemDirection();
smo105669.setStemDirection(dirsmo107107);
smo105670.setStemDirection(dirsmo107107);
const smo107107 = new VF.Beam([smo105669,smo105670]);
const dirsmo107108 = smo105671.getStemDirection();
smo105671.setStemDirection(dirsmo107108);
smo105672.setStemDirection(dirsmo107108);
const smo107108 = new VF.Beam([smo105671,smo105672]);
 
// formatting measures in staff group smo100894
fmtsmo10294363.format([smo102943v0,smo102943v1,smo105686v0], 281);
const stavesmo102943 = new VF.Stave(958, 396, 295);
stavesmo102943.setAttribute('id', 'stavesmo102943');
stavesmo102943.setBegBarType(VF.Barline.type.NONE);
stavesmo102943.setContext(context);
stavesmo102943.draw();
smo102943v0.draw(context, stavesmo102943);
smo102943v1.draw(context, stavesmo102943);
smo107104.setContext(context);
smo107104.draw();
smo107105.setContext(context);
smo107105.draw();
const stavesmo105686 = new VF.Stave(958, 556, 295);
stavesmo105686.setAttribute('id', 'stavesmo105686');
stavesmo105686.setBegBarType(VF.Barline.type.NONE);
stavesmo105686.setContext(context);
stavesmo105686.draw();
smo105686v0.draw(context, stavesmo105686);
smo107107.setContext(context);
smo107107.draw();
smo107108.setContext(context);
smo107108.draw();
const fmtsmo10296264 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo102962v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102962v0ar = [];
const smo102944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo102944.setAttribute('id', 'smo102944');
smo102962v0ar.push(smo102944);
const smo102945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102945.setAttribute('id', 'smo102945');
const smo1029450acc = new VF.Accidental('n');
smo102945.addModifier(smo1029450acc, 0);
smo102962v0ar.push(smo102945);
const smo102946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo102946.setAttribute('id', 'smo102946');
smo102962v0ar.push(smo102946);
const smo102947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo102947.setAttribute('id', 'smo102947');
smo102962v0ar.push(smo102947);
const smo102948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo102948.setAttribute('id', 'smo102948');
smo102962v0ar.push(smo102948);
smo102962v0.addTickables(smo102962v0ar)
fmtsmo10296264.joinVoices([smo102962v0]);
const fmtsmo10570464 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo105704v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105704v0ar = [];
const smo105687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo105687.setAttribute('id', 'smo105687');
smo105704v0ar.push(smo105687);
const smo105688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo105688.setAttribute('id', 'smo105688');
smo105704v0ar.push(smo105688);
const smo105689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo105689.setAttribute('id', 'smo105689');
smo105704v0ar.push(smo105689);
const smo105690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo105690.setAttribute('id', 'smo105690');
smo105704v0ar.push(smo105690);
smo105704v0.addTickables(smo105704v0ar)
fmtsmo10570464.joinVoices([smo105704v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107112 = smo102944.getStemDirection();
smo102944.setStemDirection(dirsmo107112);
smo102945.setStemDirection(dirsmo107112);
smo102946.setStemDirection(dirsmo107112);
const smo107112 = new VF.Beam([smo102944,smo102945,smo102946]);
const dirsmo107113 = smo102947.getStemDirection();
smo102947.setStemDirection(dirsmo107113);
smo102948.setStemDirection(dirsmo107113);
const smo107113 = new VF.Beam([smo102947,smo102948]);
const dirsmo107115 = smo105687.getStemDirection();
smo105687.setStemDirection(dirsmo107115);
smo105688.setStemDirection(dirsmo107115);
const smo107115 = new VF.Beam([smo105687,smo105688]);
const dirsmo107116 = smo105689.getStemDirection();
smo105689.setStemDirection(dirsmo107116);
smo105690.setStemDirection(dirsmo107116);
const smo107116 = new VF.Beam([smo105689,smo105690]);
 
// formatting measures in staff group smo100894
fmtsmo10296264.format([smo102962v0,smo105704v0], 281);
const stavesmo102962 = new VF.Stave(1253, 396, 295);
stavesmo102962.setAttribute('id', 'stavesmo102962');
stavesmo102962.setBegBarType(VF.Barline.type.NONE);
stavesmo102962.setContext(context);
stavesmo102962.draw();
smo102962v0.draw(context, stavesmo102962);
smo107112.setContext(context);
smo107112.draw();
smo107113.setContext(context);
smo107113.draw();
const stavesmo105704 = new VF.Stave(1253, 556, 295);
stavesmo105704.setAttribute('id', 'stavesmo105704');
stavesmo105704.setBegBarType(VF.Barline.type.NONE);
stavesmo105704.setContext(context);
stavesmo105704.draw();
smo105704v0.draw(context, stavesmo105704);
smo107115.setContext(context);
smo107115.draw();
smo107116.setContext(context);
smo107116.draw();
const fmtsmo10298565 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo102985v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102985v0ar = [];
const smo102963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo102963.setAttribute('id', 'smo102963');
smo102985v0ar.push(smo102963);
const smo102964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo102964.setAttribute('id', 'smo102964');
smo102964.addModifier(new VF.Dot(), 0);
smo102964.addModifier(new VF.Dot(), 1);
smo102964.addModifier(new VF.Dot(), 2);
smo102985v0ar.push(smo102964);
const smo102965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102965.setAttribute('id', 'smo102965');
smo102985v0ar.push(smo102965);
smo102985v0.addTickables(smo102985v0ar)
fmtsmo10298565.joinVoices([smo102985v0]);
const smo102985v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102985v1ar = [];
const smo102966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102966.setAttribute('id', 'smo102966');
smo102966.setStyle({ fillStyle: "#115511" });
smo102985v1ar.push(smo102966);
const smo102967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102967.setAttribute('id', 'smo102967');
smo102967.setStyle({ fillStyle: "#115511" });
smo102985v1ar.push(smo102967);
const smo102968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo102968.setAttribute('id', 'smo102968');
smo102968.setStyle({ fillStyle: "#115511" });
const smo1029680acc = new VF.Accidental('b');
smo102968.addModifier(smo1029680acc, 0);
smo102985v1ar.push(smo102968);
const smo102969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102969.setAttribute('id', 'smo102969');
smo102969.setStyle({ fillStyle: "#115511" });
const smo1029690acc = new VF.Accidental('n');
smo102969.addModifier(smo1029690acc, 0);
smo102985v1ar.push(smo102969);
const smo102970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102970.setAttribute('id', 'smo102970');
smo102970.setStyle({ fillStyle: "#115511" });
smo102985v1ar.push(smo102970);
const smo102971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo102971.setAttribute('id', 'smo102971');
smo102971.setStyle({ fillStyle: "#115511" });
smo102985v1ar.push(smo102971);
smo102985v1.addTickables(smo102985v1ar)
fmtsmo10298565.joinVoices([smo102985v1]);
const fmtsmo10572265 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo105722v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105722v0ar = [];
const smo105705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105705.setAttribute('id', 'smo105705');
smo105722v0ar.push(smo105705);
const smo105706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo105706.setAttribute('id', 'smo105706');
smo105722v0ar.push(smo105706);
const smo105707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105707.setAttribute('id', 'smo105707');
smo105722v0ar.push(smo105707);
const smo105708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo105708.setAttribute('id', 'smo105708');
smo105722v0ar.push(smo105708);
smo105722v0.addTickables(smo105722v0ar)
fmtsmo10572265.joinVoices([smo105722v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107120 = smo102964.getStemDirection();
smo102964.setStemDirection(dirsmo107120);
smo102965.setStemDirection(dirsmo107120);
const smo107120 = new VF.Beam([smo102964,smo102965]);
const dirsmo107121 = smo102967.getStemDirection();
smo102967.setStemDirection(dirsmo107121);
smo102968.setStemDirection(dirsmo107121);
const smo107121 = new VF.Beam([smo102967,smo102968]);
const dirsmo107122 = smo102969.getStemDirection();
smo102969.setStemDirection(dirsmo107122);
smo102970.setStemDirection(dirsmo107122);
smo102971.setStemDirection(dirsmo107122);
const smo107122 = new VF.Beam([smo102969,smo102970,smo102971]);
const dirsmo107124 = smo105705.getStemDirection();
smo105705.setStemDirection(dirsmo107124);
smo105706.setStemDirection(dirsmo107124);
const smo107124 = new VF.Beam([smo105705,smo105706]);
const dirsmo107125 = smo105707.getStemDirection();
smo105707.setStemDirection(dirsmo107125);
smo105708.setStemDirection(dirsmo107125);
const smo107125 = new VF.Beam([smo105707,smo105708]);
 
// formatting measures in staff group smo100894
fmtsmo10298565.format([smo102985v0,smo102985v1,smo105722v0], 281);
const stavesmo102985 = new VF.Stave(1548, 396, 295);
stavesmo102985.setAttribute('id', 'stavesmo102985');
stavesmo102985.setBegBarType(VF.Barline.type.NONE);
stavesmo102985.setContext(context);
stavesmo102985.draw();
smo102985v0.draw(context, stavesmo102985);
smo102985v1.draw(context, stavesmo102985);
smo107120.setContext(context);
smo107120.draw();
smo107121.setContext(context);
smo107121.draw();
smo107122.setContext(context);
smo107122.draw();
const stavesmo105722 = new VF.Stave(1548, 556, 295);
stavesmo105722.setAttribute('id', 'stavesmo105722');
stavesmo105722.setBegBarType(VF.Barline.type.NONE);
stavesmo105722.setContext(context);
stavesmo105722.draw();
smo105722v0.draw(context, stavesmo105722);
smo107124.setContext(context);
smo107124.draw();
smo107125.setContext(context);
smo107125.draw();
const rightsmo100894stavesmo1029851 = new VF.StaveConnector(stavesmo102985, stavesmo105722).setType(0);
rightsmo100894stavesmo1029851.setContext(context).draw();
const fmtsmo10300566 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo103005v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103005v0ar = [];
const smo102986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102986.setAttribute('id', 'smo102986');
smo103005v0ar.push(smo102986);
const smo102987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102987.setAttribute('id', 'smo102987');
smo103005v0ar.push(smo102987);
const smo102988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102988.setAttribute('id', 'smo102988');
smo103005v0ar.push(smo102988);
const smo102989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102989.setAttribute('id', 'smo102989');
smo103005v0ar.push(smo102989);
const smo102990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102990.setAttribute('id', 'smo102990');
smo103005v0ar.push(smo102990);
const smo102991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102991.setAttribute('id', 'smo102991');
smo103005v0ar.push(smo102991);
smo103005v0.addTickables(smo103005v0ar)
fmtsmo10300566.joinVoices([smo103005v0]);
const fmtsmo10574066 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo105740v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105740v0ar = [];
const smo105723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo105723.setAttribute('id', 'smo105723');
smo105740v0ar.push(smo105723);
const smo105724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo105724.setAttribute('id', 'smo105724');
smo105740v0ar.push(smo105724);
const smo105725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105725.setAttribute('id', 'smo105725');
smo105740v0ar.push(smo105725);
const smo105726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo105726.setAttribute('id', 'smo105726');
const smo1057260acc = new VF.Accidental('b');
smo105726.addModifier(smo1057260acc, 0);
const smo1057261acc = new VF.Accidental('b');
smo105726.addModifier(smo1057261acc, 1);
smo105740v0ar.push(smo105726);
smo105740v0.addTickables(smo105740v0ar)
fmtsmo10574066.joinVoices([smo105740v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107138 = smo102986.getStemDirection();
smo102986.setStemDirection(dirsmo107138);
smo102987.setStemDirection(dirsmo107138);
smo102988.setStemDirection(dirsmo107138);
const smo107138 = new VF.Beam([smo102986,smo102987,smo102988]);
const dirsmo107139 = smo102989.getStemDirection();
smo102989.setStemDirection(dirsmo107139);
smo102990.setStemDirection(dirsmo107139);
smo102991.setStemDirection(dirsmo107139);
const smo107139 = new VF.Beam([smo102989,smo102990,smo102991]);
const dirsmo107141 = smo105723.getStemDirection();
smo105723.setStemDirection(dirsmo107141);
smo105724.setStemDirection(dirsmo107141);
const smo107141 = new VF.Beam([smo105723,smo105724]);
const dirsmo107142 = smo105725.getStemDirection();
smo105725.setStemDirection(dirsmo107142);
smo105726.setStemDirection(dirsmo107142);
const smo107142 = new VF.Beam([smo105725,smo105726]);
 
// formatting measures in staff group smo100894
fmtsmo10300566.format([smo103005v0,smo105740v0], 221);
const stavesmo103005 = new VF.Stave(73, 763, 295);
stavesmo103005.setAttribute('id', 'stavesmo103005');
stavesmo103005.setBegBarType(1);
stavesmo103005.addClef('treble');
const keysmo103005 = new VF.KeySignature('Bb');
keysmo103005.addToStave(stavesmo103005);
stavesmo103005.setContext(context);
stavesmo103005.draw();
smo103005v0.draw(context, stavesmo103005);
smo107138.setContext(context);
smo107138.draw();
smo107139.setContext(context);
smo107139.draw();
const stavesmo105740 = new VF.Stave(73, 934, 295);
stavesmo105740.setAttribute('id', 'stavesmo105740');
stavesmo105740.setBegBarType(1);
stavesmo105740.addClef('bass');
const keysmo105740 = new VF.KeySignature('Bb');
keysmo105740.addToStave(stavesmo105740);
stavesmo105740.setContext(context);
stavesmo105740.draw();
smo105740v0.draw(context, stavesmo105740);
smo107141.setContext(context);
smo107141.draw();
smo107142.setContext(context);
smo107142.draw();
const leftsmo100894stavesmo1030051 = new VF.StaveConnector(stavesmo103005, stavesmo105740).setType(3);
leftsmo100894stavesmo1030051.setContext(context).draw();
const fmtsmo10302367 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo103023v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103023v0ar = [];
const smo103006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103006.setAttribute('id', 'smo103006');
smo103023v0ar.push(smo103006);
const smo103007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
smo103007.setAttribute('id', 'smo103007');
const smo1030070acc = new VF.Accidental('b');
smo103007.addModifier(smo1030070acc, 0);
const smo1030071acc = new VF.Accidental('n');
smo103007.addModifier(smo1030071acc, 1);
smo103007.addModifier(new VF.Dot(), 0);
smo103007.addModifier(new VF.Dot(), 1);
smo103007.addModifier(new VF.Dot(), 2);
smo103023v0ar.push(smo103007);
const smo103009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo103009.setAttribute('id', 'smo103009');
smo103023v0ar.push(smo103009);
smo103023v0.addTickables(smo103023v0ar)
fmtsmo10302367.joinVoices([smo103023v0]);
const fmtsmo10575967 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo105759v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105759v0ar = [];
const smo105741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo105741.setAttribute('id', 'smo105741');
smo105759v0ar.push(smo105741);
const smo105742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105742.setAttribute('id', 'smo105742');
smo105759v0ar.push(smo105742);
const smo105743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo105743.setAttribute('id', 'smo105743');
const smo1057430acc = new VF.Accidental('n');
smo105743.addModifier(smo1057430acc, 0);
const smo1057431acc = new VF.Accidental('n');
smo105743.addModifier(smo1057431acc, 1);
smo105759v0ar.push(smo105743);
const smo105744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo105744.setAttribute('id', 'smo105744');
smo105759v0ar.push(smo105744);
const smo105745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["db/2/n","db/3/n"]}'))
smo105745.setAttribute('id', 'smo105745');
const smo1057450acc = new VF.Accidental('b');
smo105745.addModifier(smo1057450acc, 0);
const smo1057451acc = new VF.Accidental('b');
smo105745.addModifier(smo1057451acc, 1);
smo105759v0ar.push(smo105745);
smo105759v0.addTickables(smo105759v0ar)
fmtsmo10575967.joinVoices([smo105759v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107146 = smo103007.getStemDirection();
smo103007.setStemDirection(dirsmo107146);
smo103009.setStemDirection(dirsmo107146);
const smo107146 = new VF.Beam([smo103007,smo103009]);
const dirsmo107148 = smo105741.getStemDirection();
smo105741.setStemDirection(dirsmo107148);
smo105742.setStemDirection(dirsmo107148);
smo105743.setStemDirection(dirsmo107148);
smo105744.setStemDirection(dirsmo107148);
const smo107148 = new VF.Beam([smo105741,smo105742,smo105743,smo105744]);
 
// formatting measures in staff group smo100894
fmtsmo10302367.format([smo103023v0,smo105759v0], 281);
const stavesmo103023 = new VF.Stave(368, 763, 295);
stavesmo103023.setAttribute('id', 'stavesmo103023');
stavesmo103023.setBegBarType(VF.Barline.type.NONE);
stavesmo103023.setContext(context);
stavesmo103023.draw();
smo103023v0.draw(context, stavesmo103023);
smo107146.setContext(context);
smo107146.draw();
const stavesmo105759 = new VF.Stave(368, 934, 295);
stavesmo105759.setAttribute('id', 'stavesmo105759');
stavesmo105759.setBegBarType(VF.Barline.type.NONE);
stavesmo105759.setContext(context);
stavesmo105759.draw();
smo105759v0.draw(context, stavesmo105759);
smo107148.setContext(context);
smo107148.draw();
const fmtsmo10304568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo103045v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103045v0ar = [];
const smo103024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo103024.setAttribute('id', 'smo103024');
smo103045v0ar.push(smo103024);
const smo103026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo103026.setAttribute('id', 'smo103026');
smo103045v0ar.push(smo103026);
const smo103027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo103027.setAttribute('id', 'smo103027');
smo103045v0ar.push(smo103027);
const smo103028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo103028.setAttribute('id', 'smo103028');
smo103045v0ar.push(smo103028);
const smo103029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103029.setAttribute('id', 'smo103029');
smo103045v0ar.push(smo103029);
const smo103030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo103030.setAttribute('id', 'smo103030');
smo103045v0ar.push(smo103030);
const smo103031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103031.setAttribute('id', 'smo103031');
const smo1030310acc = new VF.Accidental('n');
smo103031.addModifier(smo1030310acc, 0);
smo103045v0ar.push(smo103031);
smo103045v0.addTickables(smo103045v0ar)
fmtsmo10304568.joinVoices([smo103045v0]);
const fmtsmo10577768 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo105777v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105777v0ar = [];
const smo105760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo105760.setAttribute('id', 'smo105760');
smo105777v0ar.push(smo105760);
const smo105761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105761.setAttribute('id', 'smo105761');
smo105777v0ar.push(smo105761);
const smo105762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo105762.setAttribute('id', 'smo105762');
smo105777v0ar.push(smo105762);
const smo105763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo105763.setAttribute('id', 'smo105763');
smo105777v0ar.push(smo105763);
smo105777v0.addTickables(smo105777v0ar)
fmtsmo10577768.joinVoices([smo105777v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107152 = smo103024.getStemDirection();
smo103024.setStemDirection(dirsmo107152);
smo103026.setStemDirection(dirsmo107152);
smo103027.setStemDirection(dirsmo107152);
const smo107152 = new VF.Beam([smo103024,smo103026,smo103027]);
const dirsmo107153 = smo103028.getStemDirection();
smo103028.setStemDirection(dirsmo107153);
smo103029.setStemDirection(dirsmo107153);
smo103030.setStemDirection(dirsmo107153);
smo103031.setStemDirection(dirsmo107153);
const smo107153 = new VF.Beam([smo103028,smo103029,smo103030,smo103031]);
const dirsmo107155 = smo105760.getStemDirection();
smo105760.setStemDirection(dirsmo107155);
smo105761.setStemDirection(dirsmo107155);
const smo107155 = new VF.Beam([smo105760,smo105761]);
const dirsmo107156 = smo105762.getStemDirection();
smo105762.setStemDirection(dirsmo107156);
smo105763.setStemDirection(dirsmo107156);
const smo107156 = new VF.Beam([smo105762,smo105763]);
 
// formatting measures in staff group smo100894
fmtsmo10304568.format([smo103045v0,smo105777v0], 281);
const stavesmo103045 = new VF.Stave(663, 763, 295);
stavesmo103045.setAttribute('id', 'stavesmo103045');
stavesmo103045.setBegBarType(VF.Barline.type.NONE);
stavesmo103045.setContext(context);
stavesmo103045.draw();
smo103045v0.draw(context, stavesmo103045);
smo107152.setContext(context);
smo107152.draw();
smo107153.setContext(context);
smo107153.draw();
const stavesmo105777 = new VF.Stave(663, 934, 295);
stavesmo105777.setAttribute('id', 'stavesmo105777');
stavesmo105777.setBegBarType(VF.Barline.type.NONE);
stavesmo105777.setContext(context);
stavesmo105777.draw();
smo105777v0.draw(context, stavesmo105777);
smo107155.setContext(context);
smo107155.draw();
smo107156.setContext(context);
smo107156.draw();
const fmtsmo10306769 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo103067v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103067v0ar = [];
const smo103046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","fn/5/n"]}'))
smo103046.setAttribute('id', 'smo103046');
smo103067v0ar.push(smo103046);
const smo103047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo103047.setAttribute('id', 'smo103047');
const smo1030470acc = new VF.Accidental('n');
smo103047.addModifier(smo1030470acc, 0);
smo103067v0ar.push(smo103047);
const smo103048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103048.setAttribute('id', 'smo103048');
smo103067v0ar.push(smo103048);
const smo103049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103049.setAttribute('id', 'smo103049');
smo103067v0ar.push(smo103049);
const smo103050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103050.setAttribute('id', 'smo103050');
const smo1030500acc = new VF.Accidental('n');
smo103050.addModifier(smo1030500acc, 0);
smo103067v0ar.push(smo103050);
const smo103051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo103051.setAttribute('id', 'smo103051');
smo103067v0ar.push(smo103051);
const smo103052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo103052.setAttribute('id', 'smo103052');
smo103067v0ar.push(smo103052);
smo103067v0.addTickables(smo103067v0ar)
fmtsmo10306769.joinVoices([smo103067v0]);
const fmtsmo10579569 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo105795v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105795v0ar = [];
const smo105778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105778.setAttribute('id', 'smo105778');
smo105795v0ar.push(smo105778);
const smo105779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105779.setAttribute('id', 'smo105779');
smo105795v0ar.push(smo105779);
const smo105780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105780.setAttribute('id', 'smo105780');
smo105795v0ar.push(smo105780);
smo105795v0.addTickables(smo105795v0ar)
fmtsmo10579569.joinVoices([smo105795v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107160 = smo103046.getStemDirection();
smo103046.setStemDirection(dirsmo107160);
smo103047.setStemDirection(dirsmo107160);
smo103048.setStemDirection(dirsmo107160);
const smo107160 = new VF.Beam([smo103046,smo103047,smo103048]);
const dirsmo107161 = smo103049.getStemDirection();
smo103049.setStemDirection(dirsmo107161);
smo103050.setStemDirection(dirsmo107161);
smo103051.setStemDirection(dirsmo107161);
smo103052.setStemDirection(dirsmo107161);
const smo107161 = new VF.Beam([smo103049,smo103050,smo103051,smo103052]);
 
// formatting measures in staff group smo100894
fmtsmo10306769.format([smo103067v0,smo105795v0], 277);
const stavesmo103067 = new VF.Stave(958, 763, 295);
stavesmo103067.setAttribute('id', 'stavesmo103067');
stavesmo103067.setBegBarType(VF.Barline.type.NONE);
stavesmo103067.setEndBarType(5);
stavesmo103067.setContext(context);
stavesmo103067.draw();
smo103067v0.draw(context, stavesmo103067);
smo107160.setContext(context);
smo107160.draw();
smo107161.setContext(context);
smo107161.draw();
const stavesmo105795 = new VF.Stave(958, 934, 295);
stavesmo105795.setAttribute('id', 'stavesmo105795');
stavesmo105795.setBegBarType(VF.Barline.type.NONE);
stavesmo105795.setEndBarType(5);
stavesmo105795.setContext(context);
stavesmo105795.draw();
smo105795v0.draw(context, stavesmo105795);
const fmtsmo10308670 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo103086v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103086v0ar = [];
const smo103068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","fn/5/n"]}'))
smo103068.setAttribute('id', 'smo103068');
smo103086v0ar.push(smo103068);
const smo103069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103069.setAttribute('id', 'smo103069');
smo103086v0ar.push(smo103069);
const smo103070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
smo103070.setAttribute('id', 'smo103070');
smo103086v0ar.push(smo103070);
const smo103071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103071.setAttribute('id', 'smo103071');
smo103086v0ar.push(smo103071);
smo103086v0.addTickables(smo103086v0ar)
fmtsmo10308670.joinVoices([smo103086v0]);
const fmtsmo10581470 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo105814v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105814v0ar = [];
const smo105796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105796.setAttribute('id', 'smo105796');
smo105814v0ar.push(smo105796);
const smo105797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105797.setAttribute('id', 'smo105797');
smo105814v0ar.push(smo105797);
const smo105798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/1/n","fn/2/n"]}'))
smo105798.setAttribute('id', 'smo105798');
smo105814v0ar.push(smo105798);
const smo105799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105799.setAttribute('id', 'smo105799');
smo105814v0ar.push(smo105799);
smo105814v0.addTickables(smo105814v0ar)
fmtsmo10581470.joinVoices([smo105814v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
 
// formatting measures in staff group smo100894
fmtsmo10308670.format([smo103086v0,smo105814v0], 281);
const stavesmo103086 = new VF.Stave(1253, 763, 295);
stavesmo103086.setAttribute('id', 'stavesmo103086');
stavesmo103086.setBegBarType(VF.Barline.type.NONE);
stavesmo103086.setContext(context);
stavesmo103086.draw();
smo103086v0.draw(context, stavesmo103086);
const stavesmo105814 = new VF.Stave(1253, 934, 295);
stavesmo105814.setAttribute('id', 'stavesmo105814');
stavesmo105814.setBegBarType(VF.Barline.type.NONE);
stavesmo105814.setContext(context);
stavesmo105814.draw();
smo105814v0.draw(context, stavesmo105814);
const fmtsmo10310771 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo103107v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103107v0ar = [];
const smo103087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103087.setAttribute('id', 'smo103087');
smo103107v0ar.push(smo103087);
const smo103088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103088.setAttribute('id', 'smo103088');
smo103107v0ar.push(smo103088);
const smo103089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103089.setAttribute('id', 'smo103089');
smo103107v0ar.push(smo103089);
const smo103090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103090.setAttribute('id', 'smo103090');
smo103107v0ar.push(smo103090);
const smo103091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103091.setAttribute('id', 'smo103091');
smo103107v0ar.push(smo103091);
const smo103092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103092.setAttribute('id', 'smo103092');
smo103107v0ar.push(smo103092);
const smo103093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103093.setAttribute('id', 'smo103093');
smo103107v0ar.push(smo103093);
smo103107v0.addTickables(smo103107v0ar)
fmtsmo10310771.joinVoices([smo103107v0]);
const fmtsmo10583271 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo105832v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105832v0ar = [];
const smo105815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo105815.setAttribute('id', 'smo105815');
smo105832v0ar.push(smo105815);
const smo105816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo105816.setAttribute('id', 'smo105816');
smo105832v0ar.push(smo105816);
const smo105817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo105817.setAttribute('id', 'smo105817');
const smo1058170acc = new VF.Accidental('b');
smo105817.addModifier(smo1058170acc, 0);
const smo1058173acc = new VF.Accidental('b');
smo105817.addModifier(smo1058173acc, 3);
smo105832v0ar.push(smo105817);
const smo105818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo105818.setAttribute('id', 'smo105818');
smo105832v0ar.push(smo105818);
smo105832v0.addTickables(smo105832v0ar)
fmtsmo10583271.joinVoices([smo105832v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107168 = smo103087.getStemDirection();
smo103087.setStemDirection(dirsmo107168);
smo103088.setStemDirection(dirsmo107168);
smo103089.setStemDirection(dirsmo107168);
const smo107168 = new VF.Beam([smo103087,smo103088,smo103089]);
const dirsmo107169 = smo103090.getStemDirection();
smo103090.setStemDirection(dirsmo107169);
smo103091.setStemDirection(dirsmo107169);
smo103092.setStemDirection(dirsmo107169);
smo103093.setStemDirection(dirsmo107169);
const smo107169 = new VF.Beam([smo103090,smo103091,smo103092,smo103093]);
const dirsmo107171 = smo105815.getStemDirection();
smo105815.setStemDirection(dirsmo107171);
smo105816.setStemDirection(dirsmo107171);
const smo107171 = new VF.Beam([smo105815,smo105816]);
const dirsmo107172 = smo105817.getStemDirection();
smo105817.setStemDirection(dirsmo107172);
smo105818.setStemDirection(dirsmo107172);
const smo107172 = new VF.Beam([smo105817,smo105818]);
 
// formatting measures in staff group smo100894
fmtsmo10310771.format([smo103107v0,smo105832v0], 253);
const stavesmo103107 = new VF.Stave(1548, 763, 295);
stavesmo103107.setAttribute('id', 'stavesmo103107');
stavesmo103107.setBegBarType(VF.Barline.type.NONE);
const keysmo103107 = new VF.KeySignature('C');
keysmo103107.cancelKey('Bb');
keysmo103107.addToStave(stavesmo103107);
stavesmo103107.setContext(context);
stavesmo103107.draw();
smo103107v0.draw(context, stavesmo103107);
smo107168.setContext(context);
smo107168.draw();
smo107169.setContext(context);
smo107169.draw();
const stavesmo105832 = new VF.Stave(1548, 934, 295);
stavesmo105832.setAttribute('id', 'stavesmo105832');
stavesmo105832.setBegBarType(VF.Barline.type.NONE);
const keysmo105832 = new VF.KeySignature('C');
keysmo105832.cancelKey('Bb');
keysmo105832.addToStave(stavesmo105832);
stavesmo105832.setContext(context);
stavesmo105832.draw();
smo105832v0.draw(context, stavesmo105832);
smo107171.setContext(context);
smo107171.draw();
smo107172.setContext(context);
smo107172.draw();
const rightsmo100894stavesmo1031071 = new VF.StaveConnector(stavesmo103107, stavesmo105832).setType(0);
rightsmo100894stavesmo1031071.setContext(context).draw();
const fmtsmo10312972 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo103129v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103129v0ar = [];
const smo103108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo103108.setAttribute('id', 'smo103108');
smo103129v0ar.push(smo103108);
const smo103109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103109.setAttribute('id', 'smo103109');
smo103129v0ar.push(smo103109);
const smo103110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103110.setAttribute('id', 'smo103110');
smo103129v0ar.push(smo103110);
const smo103111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo103111.setAttribute('id', 'smo103111');
smo103129v0ar.push(smo103111);
const smo103112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo103112.setAttribute('id', 'smo103112');
smo103129v0ar.push(smo103112);
const smo103113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103113.setAttribute('id', 'smo103113');
smo103129v0ar.push(smo103113);
const smo103114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103114.setAttribute('id', 'smo103114');
smo103129v0ar.push(smo103114);
const smo103115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo103115.setAttribute('id', 'smo103115');
smo103129v0ar.push(smo103115);
smo103129v0.addTickables(smo103129v0ar)
fmtsmo10312972.joinVoices([smo103129v0]);
const fmtsmo10585072 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo105850v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105850v0ar = [];
const smo105833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105833.setAttribute('id', 'smo105833');
smo105850v0ar.push(smo105833);
const smo105834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105834.setAttribute('id', 'smo105834');
smo105850v0ar.push(smo105834);
const smo105835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105835.setAttribute('id', 'smo105835');
smo105850v0ar.push(smo105835);
const smo105836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105836.setAttribute('id', 'smo105836');
smo105850v0ar.push(smo105836);
smo105850v0.addTickables(smo105850v0ar)
fmtsmo10585072.joinVoices([smo105850v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107184 = smo103108.getStemDirection();
smo103108.setStemDirection(dirsmo107184);
smo103109.setStemDirection(dirsmo107184);
smo103110.setStemDirection(dirsmo107184);
smo103111.setStemDirection(dirsmo107184);
const smo107184 = new VF.Beam([smo103108,smo103109,smo103110,smo103111]);
const dirsmo107185 = smo103112.getStemDirection();
smo103112.setStemDirection(dirsmo107185);
smo103113.setStemDirection(dirsmo107185);
smo103114.setStemDirection(dirsmo107185);
smo103115.setStemDirection(dirsmo107185);
const smo107185 = new VF.Beam([smo103112,smo103113,smo103114,smo103115]);
const dirsmo107187 = smo105833.getStemDirection();
smo105833.setStemDirection(dirsmo107187);
smo105834.setStemDirection(dirsmo107187);
const smo107187 = new VF.Beam([smo105833,smo105834]);
const dirsmo107188 = smo105835.getStemDirection();
smo105835.setStemDirection(dirsmo107188);
smo105836.setStemDirection(dirsmo107188);
const smo107188 = new VF.Beam([smo105835,smo105836]);
 
// formatting measures in staff group smo100894
fmtsmo10312972.format([smo103129v0,smo105850v0], 244);
const stavesmo103129 = new VF.Stave(73, 1147, 295);
stavesmo103129.setAttribute('id', 'stavesmo103129');
stavesmo103129.setBegBarType(1);
stavesmo103129.addClef('treble');
stavesmo103129.setContext(context);
stavesmo103129.draw();
smo103129v0.draw(context, stavesmo103129);
smo107184.setContext(context);
smo107184.draw();
smo107185.setContext(context);
smo107185.draw();
const stavesmo105850 = new VF.Stave(73, 1271, 295);
stavesmo105850.setAttribute('id', 'stavesmo105850');
stavesmo105850.setBegBarType(1);
stavesmo105850.addClef('bass');
stavesmo105850.setContext(context);
stavesmo105850.draw();
smo105850v0.draw(context, stavesmo105850);
smo107187.setContext(context);
smo107187.draw();
smo107188.setContext(context);
smo107188.draw();
const leftsmo100894stavesmo1031291 = new VF.StaveConnector(stavesmo103129, stavesmo105850).setType(3);
leftsmo100894stavesmo1031291.setContext(context).draw();
const fmtsmo10314873 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo103148v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103148v0ar = [];
const smo103130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","an/4/n"]}'))
smo103130.setAttribute('id', 'smo103130');
const smo1031300acc = new VF.Accidental('b');
smo103130.addModifier(smo1031300acc, 0);
smo103148v0ar.push(smo103130);
const smo103131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo103131.setAttribute('id', 'smo103131');
const smo1031311acc = new VF.Accidental('b');
smo103131.addModifier(smo1031311acc, 1);
smo103148v0ar.push(smo103131);
const smo103132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","en/5/n"]}'))
smo103132.setAttribute('id', 'smo103132');
smo103148v0ar.push(smo103132);
const smo103133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo103133.setAttribute('id', 'smo103133');
smo103148v0ar.push(smo103133);
const smo103134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo103134.setAttribute('id', 'smo103134');
smo103148v0ar.push(smo103134);
smo103148v0.addTickables(smo103148v0ar)
fmtsmo10314873.joinVoices([smo103148v0]);
const fmtsmo10586873 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo105868v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105868v0ar = [];
const smo105851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo105851.setAttribute('id', 'smo105851');
smo105868v0ar.push(smo105851);
const smo105852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo105852.setAttribute('id', 'smo105852');
smo105868v0ar.push(smo105852);
const smo105853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105853.setAttribute('id', 'smo105853');
smo105868v0ar.push(smo105853);
const smo105854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105854.setAttribute('id', 'smo105854');
smo105868v0ar.push(smo105854);
smo105868v0.addTickables(smo105868v0ar)
fmtsmo10586873.joinVoices([smo105868v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107192 = smo103130.getStemDirection();
smo103130.setStemDirection(dirsmo107192);
smo103131.setStemDirection(dirsmo107192);
const smo107192 = new VF.Beam([smo103130,smo103131]);
const dirsmo107193 = smo103132.getStemDirection();
smo103132.setStemDirection(dirsmo107193);
smo103133.setStemDirection(dirsmo107193);
smo103134.setStemDirection(dirsmo107193);
const smo107193 = new VF.Beam([smo103132,smo103133,smo103134]);
const dirsmo107195 = smo105851.getStemDirection();
smo105851.setStemDirection(dirsmo107195);
smo105852.setStemDirection(dirsmo107195);
const smo107195 = new VF.Beam([smo105851,smo105852]);
const dirsmo107196 = smo105853.getStemDirection();
smo105853.setStemDirection(dirsmo107196);
smo105854.setStemDirection(dirsmo107196);
const smo107196 = new VF.Beam([smo105853,smo105854]);
 
// formatting measures in staff group smo100894
fmtsmo10314873.format([smo103148v0,smo105868v0], 281);
const stavesmo103148 = new VF.Stave(368, 1147, 295);
stavesmo103148.setAttribute('id', 'stavesmo103148');
stavesmo103148.setBegBarType(VF.Barline.type.NONE);
stavesmo103148.setContext(context);
stavesmo103148.draw();
smo103148v0.draw(context, stavesmo103148);
smo107192.setContext(context);
smo107192.draw();
smo107193.setContext(context);
smo107193.draw();
const stavesmo105868 = new VF.Stave(368, 1271, 295);
stavesmo105868.setAttribute('id', 'stavesmo105868');
stavesmo105868.setBegBarType(VF.Barline.type.NONE);
stavesmo105868.setContext(context);
stavesmo105868.draw();
smo105868v0.draw(context, stavesmo105868);
smo107195.setContext(context);
smo107195.draw();
smo107196.setContext(context);
smo107196.draw();
const fmtsmo10316574 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo103165v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103165v0ar = [];
const smo103149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo103149.setAttribute('id', 'smo103149');
smo103165v0ar.push(smo103149);
const smo103150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo103150.setAttribute('id', 'smo103150');
smo103165v0ar.push(smo103150);
const smo103151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103151.setAttribute('id', 'smo103151');
smo103165v0ar.push(smo103151);
smo103165v0.addTickables(smo103165v0ar)
fmtsmo10316574.joinVoices([smo103165v0]);
const fmtsmo10588574 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo105885v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105885v0ar = [];
const smo105869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo105869.setAttribute('id', 'smo105869');
smo105885v0ar.push(smo105869);
const smo105870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo105870.setAttribute('id', 'smo105870');
smo105885v0ar.push(smo105870);
const smo105871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105871.setAttribute('id', 'smo105871');
smo105885v0ar.push(smo105871);
smo105885v0.addTickables(smo105885v0ar)
fmtsmo10588574.joinVoices([smo105885v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
 
// formatting measures in staff group smo100894
fmtsmo10316574.format([smo103165v0,smo105885v0], 281);
const stavesmo103165 = new VF.Stave(663, 1147, 295);
stavesmo103165.setAttribute('id', 'stavesmo103165');
stavesmo103165.setBegBarType(VF.Barline.type.NONE);
stavesmo103165.setContext(context);
stavesmo103165.draw();
smo103165v0.draw(context, stavesmo103165);
const stavesmo105885 = new VF.Stave(663, 1271, 295);
stavesmo105885.setAttribute('id', 'stavesmo105885');
stavesmo105885.setBegBarType(VF.Barline.type.NONE);
stavesmo105885.setContext(context);
stavesmo105885.draw();
smo105885v0.draw(context, stavesmo105885);
const fmtsmo10318575 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo103185v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103185v0ar = [];
const smo103166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103166.setAttribute('id', 'smo103166');
smo103185v0ar.push(smo103166);
const smo103167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo103167.setAttribute('id', 'smo103167');
const smo1031670acc = new VF.Accidental('b');
smo103167.addModifier(smo1031670acc, 0);
smo103185v0ar.push(smo103167);
const smo103168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103168.setAttribute('id', 'smo103168');
const smo1031680acc = new VF.Accidental('n');
smo103168.addModifier(smo1031680acc, 0);
smo103185v0ar.push(smo103168);
const smo103169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103169.setAttribute('id', 'smo103169');
smo103185v0ar.push(smo103169);
const smo103170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo103170.setAttribute('id', 'smo103170');
const smo1031700acc = new VF.Accidental('b');
smo103170.addModifier(smo1031700acc, 0);
smo103185v0ar.push(smo103170);
const smo103171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103171.setAttribute('id', 'smo103171');
const smo1031710acc = new VF.Accidental('n');
smo103171.addModifier(smo1031710acc, 0);
smo103185v0ar.push(smo103171);
smo103185v0.addTickables(smo103185v0ar)
fmtsmo10318575.joinVoices([smo103185v0]);
const fmtsmo10590375 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo105903v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105903v0ar = [];
const smo105886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo105886.setAttribute('id', 'smo105886');
smo105903v0ar.push(smo105886);
const smo105887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo105887.setAttribute('id', 'smo105887');
smo105903v0ar.push(smo105887);
const smo105888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo105888.setAttribute('id', 'smo105888');
smo105903v0ar.push(smo105888);
const smo105889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo105889.setAttribute('id', 'smo105889');
smo105903v0ar.push(smo105889);
smo105903v0.addTickables(smo105903v0ar)
fmtsmo10590375.joinVoices([smo105903v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107202 = smo103166.getStemDirection();
smo103166.setStemDirection(dirsmo107202);
smo103167.setStemDirection(dirsmo107202);
smo103168.setStemDirection(dirsmo107202);
const smo107202 = new VF.Beam([smo103166,smo103167,smo103168]);
const dirsmo107203 = smo103169.getStemDirection();
smo103169.setStemDirection(dirsmo107203);
smo103170.setStemDirection(dirsmo107203);
smo103171.setStemDirection(dirsmo107203);
const smo107203 = new VF.Beam([smo103169,smo103170,smo103171]);
const dirsmo107205 = smo105886.getStemDirection();
smo105886.setStemDirection(dirsmo107205);
smo105887.setStemDirection(dirsmo107205);
const smo107205 = new VF.Beam([smo105886,smo105887]);
const dirsmo107206 = smo105888.getStemDirection();
smo105888.setStemDirection(dirsmo107206);
smo105889.setStemDirection(dirsmo107206);
const smo107206 = new VF.Beam([smo105888,smo105889]);
 
// formatting measures in staff group smo100894
fmtsmo10318575.format([smo103185v0,smo105903v0], 272);
const stavesmo103185 = new VF.Stave(958, 1147, 295);
stavesmo103185.setAttribute('id', 'stavesmo103185');
stavesmo103185.setBegBarType(4);
stavesmo103185.setContext(context);
stavesmo103185.draw();
smo103185v0.draw(context, stavesmo103185);
smo107202.setContext(context);
smo107202.draw();
smo107203.setContext(context);
smo107203.draw();
const stavesmo105903 = new VF.Stave(958, 1271, 295);
stavesmo105903.setAttribute('id', 'stavesmo105903');
stavesmo105903.setBegBarType(4);
stavesmo105903.setContext(context);
stavesmo105903.draw();
smo105903v0.draw(context, stavesmo105903);
smo107205.setContext(context);
smo107205.draw();
smo107206.setContext(context);
smo107206.draw();
const fmtsmo10320776 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo103207v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103207v0ar = [];
const smo103186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103186.setAttribute('id', 'smo103186');
smo103207v0ar.push(smo103186);
const smo103187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103187.setAttribute('id', 'smo103187');
smo103207v0ar.push(smo103187);
const smo103188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo103188.setAttribute('id', 'smo103188');
smo103207v0ar.push(smo103188);
const smo103189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103189.setAttribute('id', 'smo103189');
smo103207v0ar.push(smo103189);
const smo103190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103190.setAttribute('id', 'smo103190');
smo103207v0ar.push(smo103190);
const smo103191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103191.setAttribute('id', 'smo103191');
smo103207v0ar.push(smo103191);
const smo103192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103192.setAttribute('id', 'smo103192');
smo103207v0ar.push(smo103192);
const smo103193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103193.setAttribute('id', 'smo103193');
smo103207v0ar.push(smo103193);
smo103207v0.addTickables(smo103207v0ar)
fmtsmo10320776.joinVoices([smo103207v0]);
const fmtsmo10592176 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo105921v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105921v0ar = [];
const smo105904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo105904.setAttribute('id', 'smo105904');
smo105921v0ar.push(smo105904);
const smo105905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo105905.setAttribute('id', 'smo105905');
smo105921v0ar.push(smo105905);
const smo105906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo105906.setAttribute('id', 'smo105906');
smo105921v0ar.push(smo105906);
const smo105907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo105907.setAttribute('id', 'smo105907');
smo105921v0ar.push(smo105907);
smo105921v0.addTickables(smo105921v0ar)
fmtsmo10592176.joinVoices([smo105921v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107210 = smo103187.getStemDirection();
smo103187.setStemDirection(dirsmo107210);
smo103188.setStemDirection(dirsmo107210);
smo103189.setStemDirection(dirsmo107210);
const smo107210 = new VF.Beam([smo103187,smo103188,smo103189]);
const dirsmo107211 = smo103190.getStemDirection();
smo103190.setStemDirection(dirsmo107211);
smo103191.setStemDirection(dirsmo107211);
smo103192.setStemDirection(dirsmo107211);
smo103193.setStemDirection(dirsmo107211);
const smo107211 = new VF.Beam([smo103190,smo103191,smo103192,smo103193]);
const dirsmo107213 = smo105904.getStemDirection();
smo105904.setStemDirection(dirsmo107213);
smo105905.setStemDirection(dirsmo107213);
const smo107213 = new VF.Beam([smo105904,smo105905]);
const dirsmo107214 = smo105906.getStemDirection();
smo105906.setStemDirection(dirsmo107214);
smo105907.setStemDirection(dirsmo107214);
const smo107214 = new VF.Beam([smo105906,smo105907]);
 
// formatting measures in staff group smo100894
fmtsmo10320776.format([smo103207v0,smo105921v0], 281);
const stavesmo103207 = new VF.Stave(1253, 1147, 295);
stavesmo103207.setAttribute('id', 'stavesmo103207');
stavesmo103207.setBegBarType(VF.Barline.type.NONE);
stavesmo103207.setContext(context);
stavesmo103207.draw();
smo103207v0.draw(context, stavesmo103207);
smo107210.setContext(context);
smo107210.draw();
smo107211.setContext(context);
smo107211.draw();
const stavesmo105921 = new VF.Stave(1253, 1271, 295);
stavesmo105921.setAttribute('id', 'stavesmo105921');
stavesmo105921.setBegBarType(VF.Barline.type.NONE);
stavesmo105921.setContext(context);
stavesmo105921.draw();
smo105921v0.draw(context, stavesmo105921);
smo107213.setContext(context);
smo107213.draw();
smo107214.setContext(context);
smo107214.draw();
const fmtsmo10322777 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo103227v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103227v0ar = [];
const smo103208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103208.setAttribute('id', 'smo103208');
smo103227v0ar.push(smo103208);
const smo103209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo103209.setAttribute('id', 'smo103209');
const smo1032090acc = new VF.Accidental('b');
smo103209.addModifier(smo1032090acc, 0);
const smo1032091acc = new VF.Accidental('b');
smo103209.addModifier(smo1032091acc, 1);
smo103227v0ar.push(smo103209);
const smo103210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103210.setAttribute('id', 'smo103210');
const smo1032100acc = new VF.Accidental('n');
smo103210.addModifier(smo1032100acc, 0);
const smo1032101acc = new VF.Accidental('n');
smo103210.addModifier(smo1032101acc, 1);
smo103227v0ar.push(smo103210);
const smo103211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103211.setAttribute('id', 'smo103211');
smo103227v0ar.push(smo103211);
const smo103212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo103212.setAttribute('id', 'smo103212');
const smo1032120acc = new VF.Accidental('b');
smo103212.addModifier(smo1032120acc, 0);
const smo1032121acc = new VF.Accidental('b');
smo103212.addModifier(smo1032121acc, 1);
smo103227v0ar.push(smo103212);
const smo103213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103213.setAttribute('id', 'smo103213');
const smo1032130acc = new VF.Accidental('n');
smo103213.addModifier(smo1032130acc, 0);
const smo1032131acc = new VF.Accidental('n');
smo103213.addModifier(smo1032131acc, 1);
smo103227v0ar.push(smo103213);
smo103227v0.addTickables(smo103227v0ar)
fmtsmo10322777.joinVoices([smo103227v0]);
const fmtsmo10593977 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo105939v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105939v0ar = [];
const smo105922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105922.setAttribute('id', 'smo105922');
smo105939v0ar.push(smo105922);
const smo105923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105923.setAttribute('id', 'smo105923');
smo105939v0ar.push(smo105923);
const smo105924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105924.setAttribute('id', 'smo105924');
smo105939v0ar.push(smo105924);
const smo105925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105925.setAttribute('id', 'smo105925');
smo105939v0ar.push(smo105925);
smo105939v0.addTickables(smo105939v0ar)
fmtsmo10593977.joinVoices([smo105939v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107218 = smo103208.getStemDirection();
smo103208.setStemDirection(dirsmo107218);
smo103209.setStemDirection(dirsmo107218);
smo103210.setStemDirection(dirsmo107218);
const smo107218 = new VF.Beam([smo103208,smo103209,smo103210]);
const dirsmo107219 = smo103211.getStemDirection();
smo103211.setStemDirection(dirsmo107219);
smo103212.setStemDirection(dirsmo107219);
smo103213.setStemDirection(dirsmo107219);
const smo107219 = new VF.Beam([smo103211,smo103212,smo103213]);
const dirsmo107221 = smo105922.getStemDirection();
smo105922.setStemDirection(dirsmo107221);
smo105923.setStemDirection(dirsmo107221);
const smo107221 = new VF.Beam([smo105922,smo105923]);
const dirsmo107222 = smo105924.getStemDirection();
smo105924.setStemDirection(dirsmo107222);
smo105925.setStemDirection(dirsmo107222);
const smo107222 = new VF.Beam([smo105924,smo105925]);
 
// formatting measures in staff group smo100894
fmtsmo10322777.format([smo103227v0,smo105939v0], 281);
const stavesmo103227 = new VF.Stave(1548, 1147, 295);
stavesmo103227.setAttribute('id', 'stavesmo103227');
stavesmo103227.setBegBarType(VF.Barline.type.NONE);
stavesmo103227.setContext(context);
stavesmo103227.draw();
smo103227v0.draw(context, stavesmo103227);
smo107218.setContext(context);
smo107218.draw();
smo107219.setContext(context);
smo107219.draw();
const stavesmo105939 = new VF.Stave(1548, 1271, 295);
stavesmo105939.setAttribute('id', 'stavesmo105939');
stavesmo105939.setBegBarType(VF.Barline.type.NONE);
stavesmo105939.setContext(context);
stavesmo105939.draw();
smo105939v0.draw(context, stavesmo105939);
smo107221.setContext(context);
smo107221.draw();
smo107222.setContext(context);
smo107222.draw();
const rightsmo100894stavesmo1032271 = new VF.StaveConnector(stavesmo103227, stavesmo105939).setType(0);
rightsmo100894stavesmo1032271.setContext(context).draw();
const fmtsmo10324978 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo103249v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103249v0ar = [];
const smo103228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103228.setAttribute('id', 'smo103228');
smo103249v0ar.push(smo103228);
const smo103229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103229.setAttribute('id', 'smo103229');
smo103249v0ar.push(smo103229);
const smo103230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n"]}'))
smo103230.setAttribute('id', 'smo103230');
smo103249v0ar.push(smo103230);
const smo103231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103231.setAttribute('id', 'smo103231');
smo103249v0ar.push(smo103231);
const smo103232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103232.setAttribute('id', 'smo103232');
smo103249v0ar.push(smo103232);
const smo103233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103233.setAttribute('id', 'smo103233');
smo103249v0ar.push(smo103233);
const smo103234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103234.setAttribute('id', 'smo103234');
smo103249v0ar.push(smo103234);
const smo103235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103235.setAttribute('id', 'smo103235');
smo103249v0ar.push(smo103235);
smo103249v0.addTickables(smo103249v0ar)
fmtsmo10324978.joinVoices([smo103249v0]);
const fmtsmo10595778 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo105957v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105957v0ar = [];
const smo105940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105940.setAttribute('id', 'smo105940');
smo105957v0ar.push(smo105940);
const smo105941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105941.setAttribute('id', 'smo105941');
smo105957v0ar.push(smo105941);
const smo105942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105942.setAttribute('id', 'smo105942');
smo105957v0ar.push(smo105942);
const smo105943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105943.setAttribute('id', 'smo105943');
smo105957v0ar.push(smo105943);
smo105957v0.addTickables(smo105957v0ar)
fmtsmo10595778.joinVoices([smo105957v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107234 = smo103229.getStemDirection();
smo103229.setStemDirection(dirsmo107234);
smo103230.setStemDirection(dirsmo107234);
smo103231.setStemDirection(dirsmo107234);
const smo107234 = new VF.Beam([smo103229,smo103230,smo103231]);
const dirsmo107235 = smo103232.getStemDirection();
smo103232.setStemDirection(dirsmo107235);
smo103233.setStemDirection(dirsmo107235);
smo103234.setStemDirection(dirsmo107235);
smo103235.setStemDirection(dirsmo107235);
const smo107235 = new VF.Beam([smo103232,smo103233,smo103234,smo103235]);
const dirsmo107237 = smo105940.getStemDirection();
smo105940.setStemDirection(dirsmo107237);
smo105941.setStemDirection(dirsmo107237);
const smo107237 = new VF.Beam([smo105940,smo105941]);
const dirsmo107238 = smo105942.getStemDirection();
smo105942.setStemDirection(dirsmo107238);
smo105943.setStemDirection(dirsmo107238);
const smo107238 = new VF.Beam([smo105942,smo105943]);
 
// formatting measures in staff group smo100894
fmtsmo10324978.format([smo103249v0,smo105957v0], 244);
const stavesmo103249 = new VF.Stave(73, 1444, 295);
stavesmo103249.setAttribute('id', 'stavesmo103249');
stavesmo103249.setBegBarType(1);
stavesmo103249.addClef('treble');
stavesmo103249.setContext(context);
stavesmo103249.draw();
smo103249v0.draw(context, stavesmo103249);
smo107234.setContext(context);
smo107234.draw();
smo107235.setContext(context);
smo107235.draw();
const stavesmo105957 = new VF.Stave(73, 1574, 295);
stavesmo105957.setAttribute('id', 'stavesmo105957');
stavesmo105957.setBegBarType(1);
stavesmo105957.addClef('bass');
stavesmo105957.setContext(context);
stavesmo105957.draw();
smo105957v0.draw(context, stavesmo105957);
smo107237.setContext(context);
smo107237.draw();
smo107238.setContext(context);
smo107238.draw();
const leftsmo100894stavesmo1032491 = new VF.StaveConnector(stavesmo103249, stavesmo105957).setType(3);
leftsmo100894stavesmo1032491.setContext(context).draw();
const fmtsmo10326979 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo103269v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103269v0ar = [];
const smo103250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo103250.setAttribute('id', 'smo103250');
smo103269v0ar.push(smo103250);
const smo103251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","db/5/n"]}'))
smo103251.setAttribute('id', 'smo103251');
const smo1032510acc = new VF.Accidental('b');
smo103251.addModifier(smo1032510acc, 0);
const smo1032511acc = new VF.Accidental('b');
smo103251.addModifier(smo1032511acc, 1);
smo103269v0ar.push(smo103251);
const smo103252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo103252.setAttribute('id', 'smo103252');
const smo1032520acc = new VF.Accidental('n');
smo103252.addModifier(smo1032520acc, 0);
const smo1032521acc = new VF.Accidental('n');
smo103252.addModifier(smo1032521acc, 1);
smo103269v0ar.push(smo103252);
const smo103253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo103253.setAttribute('id', 'smo103253');
smo103269v0ar.push(smo103253);
const smo103254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","db/5/n"]}'))
smo103254.setAttribute('id', 'smo103254');
const smo1032540acc = new VF.Accidental('b');
smo103254.addModifier(smo1032540acc, 0);
const smo1032541acc = new VF.Accidental('b');
smo103254.addModifier(smo1032541acc, 1);
smo103269v0ar.push(smo103254);
const smo103255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo103255.setAttribute('id', 'smo103255');
const smo1032550acc = new VF.Accidental('n');
smo103255.addModifier(smo1032550acc, 0);
const smo1032551acc = new VF.Accidental('n');
smo103255.addModifier(smo1032551acc, 1);
smo103269v0ar.push(smo103255);
smo103269v0.addTickables(smo103269v0ar)
fmtsmo10326979.joinVoices([smo103269v0]);
const fmtsmo10597579 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo105975v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105975v0ar = [];
const smo105958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105958.setAttribute('id', 'smo105958');
smo105975v0ar.push(smo105958);
const smo105959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo105959.setAttribute('id', 'smo105959');
smo105975v0ar.push(smo105959);
const smo105960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo105960.setAttribute('id', 'smo105960');
smo105975v0ar.push(smo105960);
const smo105961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo105961.setAttribute('id', 'smo105961');
smo105975v0ar.push(smo105961);
smo105975v0.addTickables(smo105975v0ar)
fmtsmo10597579.joinVoices([smo105975v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107242 = smo103250.getStemDirection();
smo103250.setStemDirection(dirsmo107242);
smo103251.setStemDirection(dirsmo107242);
smo103252.setStemDirection(dirsmo107242);
const smo107242 = new VF.Beam([smo103250,smo103251,smo103252]);
const dirsmo107243 = smo103253.getStemDirection();
smo103253.setStemDirection(dirsmo107243);
smo103254.setStemDirection(dirsmo107243);
smo103255.setStemDirection(dirsmo107243);
const smo107243 = new VF.Beam([smo103253,smo103254,smo103255]);
const dirsmo107245 = smo105958.getStemDirection();
smo105958.setStemDirection(dirsmo107245);
smo105959.setStemDirection(dirsmo107245);
const smo107245 = new VF.Beam([smo105958,smo105959]);
const dirsmo107246 = smo105960.getStemDirection();
smo105960.setStemDirection(dirsmo107246);
smo105961.setStemDirection(dirsmo107246);
const smo107246 = new VF.Beam([smo105960,smo105961]);
 
// formatting measures in staff group smo100894
fmtsmo10326979.format([smo103269v0,smo105975v0], 281);
const stavesmo103269 = new VF.Stave(368, 1444, 295);
stavesmo103269.setAttribute('id', 'stavesmo103269');
stavesmo103269.setBegBarType(VF.Barline.type.NONE);
stavesmo103269.setContext(context);
stavesmo103269.draw();
smo103269v0.draw(context, stavesmo103269);
smo107242.setContext(context);
smo107242.draw();
smo107243.setContext(context);
smo107243.draw();
const stavesmo105975 = new VF.Stave(368, 1574, 295);
stavesmo105975.setAttribute('id', 'stavesmo105975');
stavesmo105975.setBegBarType(VF.Barline.type.NONE);
stavesmo105975.setContext(context);
stavesmo105975.draw();
smo105975v0.draw(context, stavesmo105975);
smo107245.setContext(context);
smo107245.draw();
smo107246.setContext(context);
smo107246.draw();
const fmtsmo10329180 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo103291v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103291v0ar = [];
const smo103270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103270.setAttribute('id', 'smo103270');
smo103291v0ar.push(smo103270);
const smo103271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo103271.setAttribute('id', 'smo103271');
smo103291v0ar.push(smo103271);
const smo103272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","an/5/n"]}'))
smo103272.setAttribute('id', 'smo103272');
smo103291v0ar.push(smo103272);
const smo103273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo103273.setAttribute('id', 'smo103273');
smo103291v0ar.push(smo103273);
const smo103274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo103274.setAttribute('id', 'smo103274');
smo103291v0ar.push(smo103274);
const smo103275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo103275.setAttribute('id', 'smo103275');
smo103291v0ar.push(smo103275);
const smo103276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo103276.setAttribute('id', 'smo103276');
smo103291v0ar.push(smo103276);
const smo103277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo103277.setAttribute('id', 'smo103277');
smo103291v0ar.push(smo103277);
smo103291v0.addTickables(smo103291v0ar)
fmtsmo10329180.joinVoices([smo103291v0]);
const fmtsmo10599380 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo105993v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105993v0ar = [];
const smo105976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105976.setAttribute('id', 'smo105976');
smo105993v0ar.push(smo105976);
const smo105977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo105977.setAttribute('id', 'smo105977');
smo105993v0ar.push(smo105977);
const smo105978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105978.setAttribute('id', 'smo105978');
smo105993v0ar.push(smo105978);
const smo105979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo105979.setAttribute('id', 'smo105979');
smo105993v0ar.push(smo105979);
smo105993v0.addTickables(smo105993v0ar)
fmtsmo10599380.joinVoices([smo105993v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107250 = smo103271.getStemDirection();
smo103271.setStemDirection(dirsmo107250);
smo103272.setStemDirection(dirsmo107250);
smo103273.setStemDirection(dirsmo107250);
const smo107250 = new VF.Beam([smo103271,smo103272,smo103273]);
const dirsmo107251 = smo103274.getStemDirection();
smo103274.setStemDirection(dirsmo107251);
smo103275.setStemDirection(dirsmo107251);
smo103276.setStemDirection(dirsmo107251);
smo103277.setStemDirection(dirsmo107251);
const smo107251 = new VF.Beam([smo103274,smo103275,smo103276,smo103277]);
const dirsmo107253 = smo105976.getStemDirection();
smo105976.setStemDirection(dirsmo107253);
smo105977.setStemDirection(dirsmo107253);
const smo107253 = new VF.Beam([smo105976,smo105977]);
const dirsmo107254 = smo105978.getStemDirection();
smo105978.setStemDirection(dirsmo107254);
smo105979.setStemDirection(dirsmo107254);
const smo107254 = new VF.Beam([smo105978,smo105979]);
 
// formatting measures in staff group smo100894
fmtsmo10329180.format([smo103291v0,smo105993v0], 281);
const stavesmo103291 = new VF.Stave(663, 1444, 295);
stavesmo103291.setAttribute('id', 'stavesmo103291');
stavesmo103291.setBegBarType(VF.Barline.type.NONE);
stavesmo103291.setContext(context);
stavesmo103291.draw();
smo103291v0.draw(context, stavesmo103291);
smo107250.setContext(context);
smo107250.draw();
smo107251.setContext(context);
smo107251.draw();
const stavesmo105993 = new VF.Stave(663, 1574, 295);
stavesmo105993.setAttribute('id', 'stavesmo105993');
stavesmo105993.setBegBarType(VF.Barline.type.NONE);
stavesmo105993.setContext(context);
stavesmo105993.draw();
smo105993v0.draw(context, stavesmo105993);
smo107253.setContext(context);
smo107253.draw();
smo107254.setContext(context);
smo107254.draw();
const fmtsmo10330981 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo103309v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103309v0ar = [];
const smo103292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo103292.setAttribute('id', 'smo103292');
smo103309v0ar.push(smo103292);
const smo103293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo103293.setAttribute('id', 'smo103293');
smo103309v0ar.push(smo103293);
const smo103294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo103294.setAttribute('id', 'smo103294');
smo103309v0ar.push(smo103294);
const smo103295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","an/5/n"]}'))
smo103295.setAttribute('id', 'smo103295');
smo103309v0ar.push(smo103295);
smo103309v0.addTickables(smo103309v0ar)
fmtsmo10330981.joinVoices([smo103309v0]);
const fmtsmo10601081 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo106010v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106010v0ar = [];
const smo105994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo105994.setAttribute('id', 'smo105994');
const smo1059940acc = new VF.Accidental('b');
smo105994.addModifier(smo1059940acc, 0);
const smo1059941acc = new VF.Accidental('b');
smo105994.addModifier(smo1059941acc, 1);
smo106010v0ar.push(smo105994);
const smo105995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo105995.setAttribute('id', 'smo105995');
smo106010v0ar.push(smo105995);
const smo105996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo105996.setAttribute('id', 'smo105996');
smo106010v0ar.push(smo105996);
smo106010v0.addTickables(smo106010v0ar)
fmtsmo10601081.joinVoices([smo106010v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107258 = smo103292.getStemDirection();
smo103292.setStemDirection(dirsmo107258);
smo103293.setStemDirection(dirsmo107258);
const smo107258 = new VF.Beam([smo103292,smo103293]);
 
// formatting measures in staff group smo100894
fmtsmo10330981.format([smo103309v0,smo106010v0], 281);
const stavesmo103309 = new VF.Stave(958, 1444, 295);
stavesmo103309.setAttribute('id', 'stavesmo103309');
stavesmo103309.setBegBarType(VF.Barline.type.NONE);
stavesmo103309.setContext(context);
stavesmo103309.draw();
smo103309v0.draw(context, stavesmo103309);
smo107258.setContext(context);
smo107258.draw();
const stavesmo106010 = new VF.Stave(958, 1574, 295);
stavesmo106010.setAttribute('id', 'stavesmo106010');
stavesmo106010.setBegBarType(VF.Barline.type.NONE);
stavesmo106010.setContext(context);
stavesmo106010.draw();
smo106010v0.draw(context, stavesmo106010);
const fmtsmo10332882 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo103328v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103328v0ar = [];
const smo103310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gn/5/n"]}'))
smo103310.setAttribute('id', 'smo103310');
smo103328v0ar.push(smo103310);
const smo103311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103311.setAttribute('id', 'smo103311');
smo103328v0ar.push(smo103311);
const smo103312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103312.setAttribute('id', 'smo103312');
smo103328v0ar.push(smo103312);
const smo103313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103313.setAttribute('id', 'smo103313');
smo103328v0ar.push(smo103313);
const smo103314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103314.setAttribute('id', 'smo103314');
smo103328v0ar.push(smo103314);
smo103328v0.addTickables(smo103328v0ar)
fmtsmo10332882.joinVoices([smo103328v0]);
const fmtsmo10602782 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo106027v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106027v0ar = [];
const smo106011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106011.setAttribute('id', 'smo106011');
smo106027v0ar.push(smo106011);
const smo106012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo106012.setAttribute('id', 'smo106012');
smo106027v0ar.push(smo106012);
const smo106013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo106013.setAttribute('id', 'smo106013');
smo106027v0ar.push(smo106013);
smo106027v0.addTickables(smo106027v0ar)
fmtsmo10602782.joinVoices([smo106027v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107263 = smo103310.getStemDirection();
smo103310.setStemDirection(dirsmo107263);
smo103311.setStemDirection(dirsmo107263);
smo103312.setStemDirection(dirsmo107263);
const smo107263 = new VF.Beam([smo103310,smo103311,smo103312]);
const dirsmo107264 = smo103313.getStemDirection();
smo103313.setStemDirection(dirsmo107264);
smo103314.setStemDirection(dirsmo107264);
const smo107264 = new VF.Beam([smo103313,smo103314]);
 
// formatting measures in staff group smo100894
fmtsmo10332882.format([smo103328v0,smo106027v0], 281);
const stavesmo103328 = new VF.Stave(1253, 1444, 295);
stavesmo103328.setAttribute('id', 'stavesmo103328');
stavesmo103328.setBegBarType(VF.Barline.type.NONE);
stavesmo103328.setContext(context);
stavesmo103328.draw();
smo103328v0.draw(context, stavesmo103328);
smo107263.setContext(context);
smo107263.draw();
smo107264.setContext(context);
smo107264.draw();
const stavesmo106027 = new VF.Stave(1253, 1574, 295);
stavesmo106027.setAttribute('id', 'stavesmo106027');
stavesmo106027.setBegBarType(VF.Barline.type.NONE);
stavesmo106027.setContext(context);
stavesmo106027.draw();
smo106027v0.draw(context, stavesmo106027);
const fmtsmo10334883 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo103348v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103348v0ar = [];
const smo103329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103329.setAttribute('id', 'smo103329');
smo103348v0ar.push(smo103329);
const smo103330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo103330.setAttribute('id', 'smo103330');
const smo1033300acc = new VF.Accidental('b');
smo103330.addModifier(smo1033300acc, 0);
smo103348v0ar.push(smo103330);
const smo103331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103331.setAttribute('id', 'smo103331');
const smo1033310acc = new VF.Accidental('n');
smo103331.addModifier(smo1033310acc, 0);
smo103348v0ar.push(smo103331);
const smo103332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103332.setAttribute('id', 'smo103332');
smo103348v0ar.push(smo103332);
const smo103333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo103333.setAttribute('id', 'smo103333');
const smo1033330acc = new VF.Accidental('b');
smo103333.addModifier(smo1033330acc, 0);
smo103348v0ar.push(smo103333);
const smo103334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo103334.setAttribute('id', 'smo103334');
const smo1033340acc = new VF.Accidental('n');
smo103334.addModifier(smo1033340acc, 0);
smo103348v0ar.push(smo103334);
smo103348v0.addTickables(smo103348v0ar)
fmtsmo10334883.joinVoices([smo103348v0]);
const fmtsmo10604583 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo106045v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106045v0ar = [];
const smo106028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo106028.setAttribute('id', 'smo106028');
smo106045v0ar.push(smo106028);
const smo106029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo106029.setAttribute('id', 'smo106029');
smo106045v0ar.push(smo106029);
const smo106030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo106030.setAttribute('id', 'smo106030');
smo106045v0ar.push(smo106030);
const smo106031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo106031.setAttribute('id', 'smo106031');
smo106045v0ar.push(smo106031);
smo106045v0.addTickables(smo106045v0ar)
fmtsmo10604583.joinVoices([smo106045v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107269 = smo103329.getStemDirection();
smo103329.setStemDirection(dirsmo107269);
smo103330.setStemDirection(dirsmo107269);
smo103331.setStemDirection(dirsmo107269);
const smo107269 = new VF.Beam([smo103329,smo103330,smo103331]);
const dirsmo107270 = smo103332.getStemDirection();
smo103332.setStemDirection(dirsmo107270);
smo103333.setStemDirection(dirsmo107270);
smo103334.setStemDirection(dirsmo107270);
const smo107270 = new VF.Beam([smo103332,smo103333,smo103334]);
const dirsmo107272 = smo106028.getStemDirection();
smo106028.setStemDirection(dirsmo107272);
smo106029.setStemDirection(dirsmo107272);
const smo107272 = new VF.Beam([smo106028,smo106029]);
const dirsmo107273 = smo106030.getStemDirection();
smo106030.setStemDirection(dirsmo107273);
smo106031.setStemDirection(dirsmo107273);
const smo107273 = new VF.Beam([smo106030,smo106031]);
 
// formatting measures in staff group smo100894
fmtsmo10334883.format([smo103348v0,smo106045v0], 281);
const stavesmo103348 = new VF.Stave(1548, 1444, 295);
stavesmo103348.setAttribute('id', 'stavesmo103348');
stavesmo103348.setBegBarType(VF.Barline.type.NONE);
stavesmo103348.setContext(context);
stavesmo103348.draw();
smo103348v0.draw(context, stavesmo103348);
smo107269.setContext(context);
smo107269.draw();
smo107270.setContext(context);
smo107270.draw();
const stavesmo106045 = new VF.Stave(1548, 1574, 295);
stavesmo106045.setAttribute('id', 'stavesmo106045');
stavesmo106045.setBegBarType(VF.Barline.type.NONE);
stavesmo106045.setContext(context);
stavesmo106045.draw();
smo106045v0.draw(context, stavesmo106045);
smo107272.setContext(context);
smo107272.draw();
smo107273.setContext(context);
smo107273.draw();
const rightsmo100894stavesmo1033481 = new VF.StaveConnector(stavesmo103348, stavesmo106045).setType(0);
rightsmo100894stavesmo1033481.setContext(context).draw();
const fmtsmo10337084 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo103370v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103370v0ar = [];
const smo103349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103349.setAttribute('id', 'smo103349');
smo103370v0ar.push(smo103349);
const smo103350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103350.setAttribute('id', 'smo103350');
smo103370v0ar.push(smo103350);
const smo103351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo103351.setAttribute('id', 'smo103351');
smo103370v0ar.push(smo103351);
const smo103352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103352.setAttribute('id', 'smo103352');
smo103370v0ar.push(smo103352);
const smo103353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103353.setAttribute('id', 'smo103353');
smo103370v0ar.push(smo103353);
const smo103354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103354.setAttribute('id', 'smo103354');
smo103370v0ar.push(smo103354);
const smo103355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103355.setAttribute('id', 'smo103355');
smo103370v0ar.push(smo103355);
const smo103356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103356.setAttribute('id', 'smo103356');
smo103370v0ar.push(smo103356);
smo103370v0.addTickables(smo103370v0ar)
fmtsmo10337084.joinVoices([smo103370v0]);
const fmtsmo10606384 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo106063v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106063v0ar = [];
const smo106046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo106046.setAttribute('id', 'smo106046');
smo106063v0ar.push(smo106046);
const smo106047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo106047.setAttribute('id', 'smo106047');
smo106063v0ar.push(smo106047);
const smo106048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo106048.setAttribute('id', 'smo106048');
smo106063v0ar.push(smo106048);
const smo106049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo106049.setAttribute('id', 'smo106049');
smo106063v0ar.push(smo106049);
smo106063v0.addTickables(smo106063v0ar)
fmtsmo10606384.joinVoices([smo106063v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107285 = smo103350.getStemDirection();
smo103350.setStemDirection(dirsmo107285);
smo103351.setStemDirection(dirsmo107285);
smo103352.setStemDirection(dirsmo107285);
const smo107285 = new VF.Beam([smo103350,smo103351,smo103352]);
const dirsmo107286 = smo103353.getStemDirection();
smo103353.setStemDirection(dirsmo107286);
smo103354.setStemDirection(dirsmo107286);
smo103355.setStemDirection(dirsmo107286);
smo103356.setStemDirection(dirsmo107286);
const smo107286 = new VF.Beam([smo103353,smo103354,smo103355,smo103356]);
const dirsmo107288 = smo106046.getStemDirection();
smo106046.setStemDirection(dirsmo107288);
smo106047.setStemDirection(dirsmo107288);
const smo107288 = new VF.Beam([smo106046,smo106047]);
const dirsmo107289 = smo106048.getStemDirection();
smo106048.setStemDirection(dirsmo107289);
smo106049.setStemDirection(dirsmo107289);
const smo107289 = new VF.Beam([smo106048,smo106049]);
 
// formatting measures in staff group smo100894
fmtsmo10337084.format([smo103370v0,smo106063v0], 244);
const stavesmo103370 = new VF.Stave(73, 1777, 295);
stavesmo103370.setAttribute('id', 'stavesmo103370');
stavesmo103370.setBegBarType(1);
stavesmo103370.addClef('treble');
stavesmo103370.setContext(context);
stavesmo103370.draw();
smo103370v0.draw(context, stavesmo103370);
smo107285.setContext(context);
smo107285.draw();
smo107286.setContext(context);
smo107286.draw();
const stavesmo106063 = new VF.Stave(73, 1921, 295);
stavesmo106063.setAttribute('id', 'stavesmo106063');
stavesmo106063.setBegBarType(1);
stavesmo106063.addClef('bass');
stavesmo106063.setContext(context);
stavesmo106063.draw();
smo106063v0.draw(context, stavesmo106063);
smo107288.setContext(context);
smo107288.draw();
smo107289.setContext(context);
smo107289.draw();
const leftsmo100894stavesmo1033701 = new VF.StaveConnector(stavesmo103370, stavesmo106063).setType(3);
leftsmo100894stavesmo1033701.setContext(context).draw();
const fmtsmo10339085 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo103390v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103390v0ar = [];
const smo103371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103371.setAttribute('id', 'smo103371');
smo103390v0ar.push(smo103371);
const smo103372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo103372.setAttribute('id', 'smo103372');
const smo1033720acc = new VF.Accidental('b');
smo103372.addModifier(smo1033720acc, 0);
const smo1033721acc = new VF.Accidental('b');
smo103372.addModifier(smo1033721acc, 1);
smo103390v0ar.push(smo103372);
const smo103373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103373.setAttribute('id', 'smo103373');
const smo1033730acc = new VF.Accidental('n');
smo103373.addModifier(smo1033730acc, 0);
const smo1033731acc = new VF.Accidental('n');
smo103373.addModifier(smo1033731acc, 1);
smo103390v0ar.push(smo103373);
const smo103374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103374.setAttribute('id', 'smo103374');
smo103390v0ar.push(smo103374);
const smo103375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo103375.setAttribute('id', 'smo103375');
const smo1033750acc = new VF.Accidental('b');
smo103375.addModifier(smo1033750acc, 0);
const smo1033751acc = new VF.Accidental('b');
smo103375.addModifier(smo1033751acc, 1);
smo103390v0ar.push(smo103375);
const smo103376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103376.setAttribute('id', 'smo103376');
const smo1033760acc = new VF.Accidental('n');
smo103376.addModifier(smo1033760acc, 0);
const smo1033761acc = new VF.Accidental('n');
smo103376.addModifier(smo1033761acc, 1);
smo103390v0ar.push(smo103376);
smo103390v0.addTickables(smo103390v0ar)
fmtsmo10339085.joinVoices([smo103390v0]);
const fmtsmo10608185 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo106081v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106081v0ar = [];
const smo106064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo106064.setAttribute('id', 'smo106064');
smo106081v0ar.push(smo106064);
const smo106065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106065.setAttribute('id', 'smo106065');
smo106081v0ar.push(smo106065);
const smo106066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo106066.setAttribute('id', 'smo106066');
smo106081v0ar.push(smo106066);
const smo106067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106067.setAttribute('id', 'smo106067');
smo106081v0ar.push(smo106067);
smo106081v0.addTickables(smo106081v0ar)
fmtsmo10608185.joinVoices([smo106081v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107293 = smo103371.getStemDirection();
smo103371.setStemDirection(dirsmo107293);
smo103372.setStemDirection(dirsmo107293);
smo103373.setStemDirection(dirsmo107293);
const smo107293 = new VF.Beam([smo103371,smo103372,smo103373]);
const dirsmo107294 = smo103374.getStemDirection();
smo103374.setStemDirection(dirsmo107294);
smo103375.setStemDirection(dirsmo107294);
smo103376.setStemDirection(dirsmo107294);
const smo107294 = new VF.Beam([smo103374,smo103375,smo103376]);
const dirsmo107296 = smo106064.getStemDirection();
smo106064.setStemDirection(dirsmo107296);
smo106065.setStemDirection(dirsmo107296);
const smo107296 = new VF.Beam([smo106064,smo106065]);
const dirsmo107297 = smo106066.getStemDirection();
smo106066.setStemDirection(dirsmo107297);
smo106067.setStemDirection(dirsmo107297);
const smo107297 = new VF.Beam([smo106066,smo106067]);
 
// formatting measures in staff group smo100894
fmtsmo10339085.format([smo103390v0,smo106081v0], 281);
const stavesmo103390 = new VF.Stave(368, 1777, 295);
stavesmo103390.setAttribute('id', 'stavesmo103390');
stavesmo103390.setBegBarType(VF.Barline.type.NONE);
stavesmo103390.setContext(context);
stavesmo103390.draw();
smo103390v0.draw(context, stavesmo103390);
smo107293.setContext(context);
smo107293.draw();
smo107294.setContext(context);
smo107294.draw();
const stavesmo106081 = new VF.Stave(368, 1921, 295);
stavesmo106081.setAttribute('id', 'stavesmo106081');
stavesmo106081.setBegBarType(VF.Barline.type.NONE);
stavesmo106081.setContext(context);
stavesmo106081.draw();
smo106081v0.draw(context, stavesmo106081);
smo107296.setContext(context);
smo107296.draw();
smo107297.setContext(context);
smo107297.draw();
const fmtsmo10341286 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo103412v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103412v0ar = [];
const smo103391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103391.setAttribute('id', 'smo103391');
smo103412v0ar.push(smo103391);
const smo103392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103392.setAttribute('id', 'smo103392');
smo103412v0ar.push(smo103392);
const smo103393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n"]}'))
smo103393.setAttribute('id', 'smo103393');
smo103412v0ar.push(smo103393);
const smo103394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103394.setAttribute('id', 'smo103394');
smo103412v0ar.push(smo103394);
const smo103395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103395.setAttribute('id', 'smo103395');
smo103412v0ar.push(smo103395);
const smo103396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103396.setAttribute('id', 'smo103396');
smo103412v0ar.push(smo103396);
const smo103397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo103397.setAttribute('id', 'smo103397');
smo103412v0ar.push(smo103397);
const smo103398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo103398.setAttribute('id', 'smo103398');
smo103412v0ar.push(smo103398);
smo103412v0.addTickables(smo103412v0ar)
fmtsmo10341286.joinVoices([smo103412v0]);
const fmtsmo10609986 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo106099v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106099v0ar = [];
const smo106082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo106082.setAttribute('id', 'smo106082');
smo106099v0ar.push(smo106082);
const smo106083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106083.setAttribute('id', 'smo106083');
smo106099v0ar.push(smo106083);
const smo106084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo106084.setAttribute('id', 'smo106084');
smo106099v0ar.push(smo106084);
const smo106085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo106085.setAttribute('id', 'smo106085');
smo106099v0ar.push(smo106085);
smo106099v0.addTickables(smo106099v0ar)
fmtsmo10609986.joinVoices([smo106099v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107301 = smo103392.getStemDirection();
smo103392.setStemDirection(dirsmo107301);
smo103393.setStemDirection(dirsmo107301);
smo103394.setStemDirection(dirsmo107301);
const smo107301 = new VF.Beam([smo103392,smo103393,smo103394]);
const dirsmo107302 = smo103395.getStemDirection();
smo103395.setStemDirection(dirsmo107302);
smo103396.setStemDirection(dirsmo107302);
smo103397.setStemDirection(dirsmo107302);
smo103398.setStemDirection(dirsmo107302);
const smo107302 = new VF.Beam([smo103395,smo103396,smo103397,smo103398]);
const dirsmo107304 = smo106082.getStemDirection();
smo106082.setStemDirection(dirsmo107304);
smo106083.setStemDirection(dirsmo107304);
const smo107304 = new VF.Beam([smo106082,smo106083]);
const dirsmo107305 = smo106084.getStemDirection();
smo106084.setStemDirection(dirsmo107305);
smo106085.setStemDirection(dirsmo107305);
const smo107305 = new VF.Beam([smo106084,smo106085]);
 
// formatting measures in staff group smo100894
fmtsmo10341286.format([smo103412v0,smo106099v0], 281);
const stavesmo103412 = new VF.Stave(663, 1777, 295);
stavesmo103412.setAttribute('id', 'stavesmo103412');
stavesmo103412.setBegBarType(VF.Barline.type.NONE);
stavesmo103412.setContext(context);
stavesmo103412.draw();
smo103412v0.draw(context, stavesmo103412);
smo107301.setContext(context);
smo107301.draw();
smo107302.setContext(context);
smo107302.draw();
const stavesmo106099 = new VF.Stave(663, 1921, 295);
stavesmo106099.setAttribute('id', 'stavesmo106099');
stavesmo106099.setBegBarType(VF.Barline.type.NONE);
stavesmo106099.setContext(context);
stavesmo106099.draw();
smo106099v0.draw(context, stavesmo106099);
smo107304.setContext(context);
smo107304.draw();
smo107305.setContext(context);
smo107305.draw();
const fmtsmo10343387 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo103433v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103433v0ar = [];
const smo103413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103413.setAttribute('id', 'smo103413');
smo103433v0ar.push(smo103413);
const smo103414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo103414.setAttribute('id', 'smo103414');
const smo1034140acc = new VF.Accidental('b');
smo103414.addModifier(smo1034140acc, 0);
smo103433v0ar.push(smo103414);
const smo103415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo103415.setAttribute('id', 'smo103415');
const smo1034150acc = new VF.Accidental('n');
smo103415.addModifier(smo1034150acc, 0);
smo103433v0ar.push(smo103415);
const smo103416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","gn/5/n"]}'))
smo103416.setAttribute('id', 'smo103416');
smo103433v0ar.push(smo103416);
const smo103417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","gn/5/n"]}'))
smo103417.setAttribute('id', 'smo103417');
smo103433v0ar.push(smo103417);
const smo103418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","fn/5/n"]}'))
smo103418.setAttribute('id', 'smo103418');
smo103433v0ar.push(smo103418);
const smo103419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n"]}'))
smo103419.setAttribute('id', 'smo103419');
smo103433v0ar.push(smo103419);
smo103433v0.addTickables(smo103433v0ar)
fmtsmo10343387.joinVoices([smo103433v0]);
const fmtsmo10611787 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo106117v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106117v0ar = [];
const smo106100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo106100.setAttribute('id', 'smo106100');
smo106117v0ar.push(smo106100);
const smo106101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo106101.setAttribute('id', 'smo106101');
smo106117v0ar.push(smo106101);
const smo106102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo106102.setAttribute('id', 'smo106102');
smo106117v0ar.push(smo106102);
const smo106103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo106103.setAttribute('id', 'smo106103');
smo106117v0ar.push(smo106103);
smo106117v0.addTickables(smo106117v0ar)
fmtsmo10611787.joinVoices([smo106117v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107309 = smo103413.getStemDirection();
smo103413.setStemDirection(dirsmo107309);
smo103414.setStemDirection(dirsmo107309);
smo103415.setStemDirection(dirsmo107309);
smo103416.setStemDirection(dirsmo107309);
const smo107309 = new VF.Beam([smo103413,smo103414,smo103415,smo103416]);
const dirsmo107310 = smo103417.getStemDirection();
smo103417.setStemDirection(dirsmo107310);
smo103418.setStemDirection(dirsmo107310);
smo103419.setStemDirection(dirsmo107310);
const smo107310 = new VF.Beam([smo103417,smo103418,smo103419]);
const dirsmo107312 = smo106100.getStemDirection();
smo106100.setStemDirection(dirsmo107312);
smo106101.setStemDirection(dirsmo107312);
const smo107312 = new VF.Beam([smo106100,smo106101]);
const dirsmo107313 = smo106102.getStemDirection();
smo106102.setStemDirection(dirsmo107313);
smo106103.setStemDirection(dirsmo107313);
const smo107313 = new VF.Beam([smo106102,smo106103]);
 
// formatting measures in staff group smo100894
fmtsmo10343387.format([smo103433v0,smo106117v0], 281);
const stavesmo103433 = new VF.Stave(958, 1777, 295);
stavesmo103433.setAttribute('id', 'stavesmo103433');
stavesmo103433.setBegBarType(VF.Barline.type.NONE);
stavesmo103433.setContext(context);
stavesmo103433.draw();
smo103433v0.draw(context, stavesmo103433);
smo107309.setContext(context);
smo107309.draw();
smo107310.setContext(context);
smo107310.draw();
const stavesmo106117 = new VF.Stave(958, 1921, 295);
stavesmo106117.setAttribute('id', 'stavesmo106117');
stavesmo106117.setBegBarType(VF.Barline.type.NONE);
stavesmo106117.setContext(context);
stavesmo106117.draw();
smo106117v0.draw(context, stavesmo106117);
smo107312.setContext(context);
smo107312.draw();
smo107313.setContext(context);
smo107313.draw();
const fmtsmo10345588 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo103455v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103455v0ar = [];
const smo103434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n"]}'))
smo103434.setAttribute('id', 'smo103434');
smo103455v0ar.push(smo103434);
const smo103435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo103435.setAttribute('id', 'smo103435');
const smo1034350acc = new VF.Accidental('b');
smo103435.addModifier(smo1034350acc, 0);
smo103455v0ar.push(smo103435);
const smo103436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103436.setAttribute('id', 'smo103436');
const smo1034360acc = new VF.Accidental('n');
smo103436.addModifier(smo1034360acc, 0);
smo103455v0ar.push(smo103436);
const smo103437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo103437.setAttribute('id', 'smo103437');
smo103455v0ar.push(smo103437);
const smo103438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo103438.setAttribute('id', 'smo103438');
smo103455v0ar.push(smo103438);
const smo103439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo103439.setAttribute('id', 'smo103439');
smo103455v0ar.push(smo103439);
const smo103440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo103440.setAttribute('id', 'smo103440');
smo103455v0ar.push(smo103440);
const smo103441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo103441.setAttribute('id', 'smo103441');
smo103455v0ar.push(smo103441);
smo103455v0.addTickables(smo103455v0ar)
fmtsmo10345588.joinVoices([smo103455v0]);
const fmtsmo10613588 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo106135v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106135v0ar = [];
const smo106118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo106118.setAttribute('id', 'smo106118');
smo106135v0ar.push(smo106118);
const smo106119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo106119.setAttribute('id', 'smo106119');
smo106135v0ar.push(smo106119);
const smo106120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
smo106120.setAttribute('id', 'smo106120');
const smo1061200acc = new VF.Accidental('b');
smo106120.addModifier(smo1061200acc, 0);
const smo1061202acc = new VF.Accidental('b');
smo106120.addModifier(smo1061202acc, 2);
smo106135v0ar.push(smo106120);
const smo106121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo106121.setAttribute('id', 'smo106121');
const smo1061210acc = new VF.Accidental('n');
smo106121.addModifier(smo1061210acc, 0);
const smo1061212acc = new VF.Accidental('n');
smo106121.addModifier(smo1061212acc, 2);
smo106135v0ar.push(smo106121);
smo106135v0.addTickables(smo106135v0ar)
fmtsmo10613588.joinVoices([smo106135v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107317 = smo103434.getStemDirection();
smo103434.setStemDirection(dirsmo107317);
smo103435.setStemDirection(dirsmo107317);
smo103436.setStemDirection(dirsmo107317);
smo103437.setStemDirection(dirsmo107317);
const smo107317 = new VF.Beam([smo103434,smo103435,smo103436,smo103437]);
const dirsmo107318 = smo103438.getStemDirection();
smo103438.setStemDirection(dirsmo107318);
smo103439.setStemDirection(dirsmo107318);
smo103440.setStemDirection(dirsmo107318);
smo103441.setStemDirection(dirsmo107318);
const smo107318 = new VF.Beam([smo103438,smo103439,smo103440,smo103441]);
const dirsmo107320 = smo106118.getStemDirection();
smo106118.setStemDirection(dirsmo107320);
smo106119.setStemDirection(dirsmo107320);
const smo107320 = new VF.Beam([smo106118,smo106119]);
const dirsmo107321 = smo106120.getStemDirection();
smo106120.setStemDirection(dirsmo107321);
smo106121.setStemDirection(dirsmo107321);
const smo107321 = new VF.Beam([smo106120,smo106121]);
 
// formatting measures in staff group smo100894
fmtsmo10345588.format([smo103455v0,smo106135v0], 281);
const stavesmo103455 = new VF.Stave(1253, 1777, 295);
stavesmo103455.setAttribute('id', 'stavesmo103455');
stavesmo103455.setBegBarType(VF.Barline.type.NONE);
stavesmo103455.setContext(context);
stavesmo103455.draw();
smo103455v0.draw(context, stavesmo103455);
smo107317.setContext(context);
smo107317.draw();
smo107318.setContext(context);
smo107318.draw();
const stavesmo106135 = new VF.Stave(1253, 1921, 295);
stavesmo106135.setAttribute('id', 'stavesmo106135');
stavesmo106135.setBegBarType(VF.Barline.type.NONE);
stavesmo106135.setContext(context);
stavesmo106135.draw();
smo106135v0.draw(context, stavesmo106135);
smo107320.setContext(context);
smo107320.draw();
smo107321.setContext(context);
smo107321.draw();
const fmtsmo10347489 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo103474v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103474v0ar = [];
const smo103456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo103456.setAttribute('id', 'smo103456');
const smo1034560acc = new VF.Accidental('b');
smo103456.addModifier(smo1034560acc, 0);
smo103474v0ar.push(smo103456);
const smo103457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo103457.setAttribute('id', 'smo103457');
smo103474v0ar.push(smo103457);
const smo103458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
smo103458.setAttribute('id', 'smo103458');
smo103474v0ar.push(smo103458);
const smo103459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
smo103459.setAttribute('id', 'smo103459');
smo103474v0ar.push(smo103459);
const smo103460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo103460.setAttribute('id', 'smo103460');
const smo1034601acc = new VF.Accidental('n');
smo103460.addModifier(smo1034601acc, 1);
smo103474v0ar.push(smo103460);
smo103474v0.addTickables(smo103474v0ar)
fmtsmo10347489.joinVoices([smo103474v0]);
const fmtsmo10615389 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo106153v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106153v0ar = [];
const smo106136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo106136.setAttribute('id', 'smo106136');
smo106153v0ar.push(smo106136);
const smo106137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo106137.setAttribute('id', 'smo106137');
smo106153v0ar.push(smo106137);
const smo106138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo106138.setAttribute('id', 'smo106138');
smo106153v0ar.push(smo106138);
const smo106139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo106139.setAttribute('id', 'smo106139');
smo106153v0ar.push(smo106139);
smo106153v0.addTickables(smo106153v0ar)
fmtsmo10615389.joinVoices([smo106153v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107325 = smo103456.getStemDirection();
smo103456.setStemDirection(dirsmo107325);
smo103457.setStemDirection(dirsmo107325);
const smo107325 = new VF.Beam([smo103456,smo103457]);
const dirsmo107326 = smo103458.getStemDirection();
smo103458.setStemDirection(dirsmo107326);
smo103459.setStemDirection(dirsmo107326);
smo103460.setStemDirection(dirsmo107326);
const smo107326 = new VF.Beam([smo103458,smo103459,smo103460]);
const dirsmo107328 = smo106136.getStemDirection();
smo106136.setStemDirection(dirsmo107328);
smo106137.setStemDirection(dirsmo107328);
const smo107328 = new VF.Beam([smo106136,smo106137]);
const dirsmo107329 = smo106138.getStemDirection();
smo106138.setStemDirection(dirsmo107329);
smo106139.setStemDirection(dirsmo107329);
const smo107329 = new VF.Beam([smo106138,smo106139]);
 
// formatting measures in staff group smo100894
fmtsmo10347489.format([smo103474v0,smo106153v0], 281);
const stavesmo103474 = new VF.Stave(1548, 1777, 295);
stavesmo103474.setAttribute('id', 'stavesmo103474');
stavesmo103474.setBegBarType(VF.Barline.type.NONE);
stavesmo103474.setContext(context);
stavesmo103474.draw();
smo103474v0.draw(context, stavesmo103474);
smo107325.setContext(context);
smo107325.draw();
smo107326.setContext(context);
smo107326.draw();
const stavesmo106153 = new VF.Stave(1548, 1921, 295);
stavesmo106153.setAttribute('id', 'stavesmo106153');
stavesmo106153.setBegBarType(VF.Barline.type.NONE);
stavesmo106153.setContext(context);
stavesmo106153.draw();
smo106153v0.draw(context, stavesmo106153);
smo107328.setContext(context);
smo107328.draw();
smo107329.setContext(context);
smo107329.draw();
const rightsmo100894stavesmo1034741 = new VF.StaveConnector(stavesmo103474, stavesmo106153).setType(0);
rightsmo100894stavesmo1034741.setContext(context).draw();
const fmtsmo10349490 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo103494v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103494v0ar = [];
const smo103475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo103475.setAttribute('id', 'smo103475');
smo103494v0ar.push(smo103475);
const smo103476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103476.setAttribute('id', 'smo103476');
smo103494v0ar.push(smo103476);
const smo103477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103477.setAttribute('id', 'smo103477');
smo103494v0ar.push(smo103477);
const smo103478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103478.setAttribute('id', 'smo103478');
smo103494v0ar.push(smo103478);
const smo103479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo103479.setAttribute('id', 'smo103479');
smo103494v0ar.push(smo103479);
smo103494v0.addTickables(smo103494v0ar)
fmtsmo10349490.joinVoices([smo103494v0]);
const fmtsmo10617190 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo106171v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106171v0ar = [];
const smo106154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo106154.setAttribute('id', 'smo106154');
smo106171v0ar.push(smo106154);
const smo106155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo106155.setAttribute('id', 'smo106155');
smo106171v0ar.push(smo106155);
const smo106156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo106156.setAttribute('id', 'smo106156');
smo106171v0ar.push(smo106156);
smo106171v0.addTickables(smo106171v0ar)
fmtsmo10617190.joinVoices([smo106171v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107337 = smo103475.getStemDirection();
smo103475.setStemDirection(dirsmo107337);
smo103476.setStemDirection(dirsmo107337);
smo103477.setStemDirection(dirsmo107337);
const smo107337 = new VF.Beam([smo103475,smo103476,smo103477]);
const dirsmo107338 = smo103478.getStemDirection();
smo103478.setStemDirection(dirsmo107338);
smo103479.setStemDirection(dirsmo107338);
const smo107338 = new VF.Beam([smo103478,smo103479]);
 
// formatting measures in staff group smo100894
fmtsmo10349490.format([smo103494v0,smo106171v0], 240);
const stavesmo103494 = new VF.Stave(73, 2089, 295);
stavesmo103494.setAttribute('id', 'stavesmo103494');
stavesmo103494.setBegBarType(1);
stavesmo103494.setEndBarType(5);
stavesmo103494.addClef('treble');
stavesmo103494.setContext(context);
stavesmo103494.draw();
smo103494v0.draw(context, stavesmo103494);
smo107337.setContext(context);
smo107337.draw();
smo107338.setContext(context);
smo107338.draw();
const stavesmo106171 = new VF.Stave(73, 2234, 295);
stavesmo106171.setAttribute('id', 'stavesmo106171');
stavesmo106171.setBegBarType(1);
stavesmo106171.setEndBarType(5);
stavesmo106171.addClef('bass');
stavesmo106171.setContext(context);
stavesmo106171.draw();
smo106171v0.draw(context, stavesmo106171);
const leftsmo100894stavesmo1034941 = new VF.StaveConnector(stavesmo103494, stavesmo106171).setType(3);
leftsmo100894stavesmo1034941.setContext(context).draw();
const fmtsmo10351291 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo103512v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103512v0ar = [];
const smo103495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo103495.setAttribute('id', 'smo103495');
smo103512v0ar.push(smo103495);
const smo103496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo103496.setAttribute('id', 'smo103496');
smo103512v0ar.push(smo103496);
const smo103497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo103497.setAttribute('id', 'smo103497');
smo103512v0ar.push(smo103497);
smo103512v0.addTickables(smo103512v0ar)
fmtsmo10351291.joinVoices([smo103512v0]);
const fmtsmo10619091 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo106190v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106190v0ar = [];
const smo106172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo106172.setAttribute('id', 'smo106172');
smo106190v0ar.push(smo106172);
const smo106173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo106173.setAttribute('id', 'smo106173');
smo106190v0ar.push(smo106173);
const smo106174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo106174.setAttribute('id', 'smo106174');
smo106190v0ar.push(smo106174);
const smo106175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo106175.setAttribute('id', 'smo106175');
smo106190v0ar.push(smo106175);
smo106190v0.addTickables(smo106190v0ar)
fmtsmo10619091.joinVoices([smo106190v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107342 = smo106172.getStemDirection();
smo106172.setStemDirection(dirsmo107342);
smo106173.setStemDirection(dirsmo107342);
const smo107342 = new VF.Beam([smo106172,smo106173]);
 
// formatting measures in staff group smo100894
fmtsmo10351291.format([smo103512v0,smo106190v0], 281);
const stavesmo103512 = new VF.Stave(368, 2089, 295);
stavesmo103512.setAttribute('id', 'stavesmo103512');
stavesmo103512.setBegBarType(VF.Barline.type.NONE);
stavesmo103512.setContext(context);
stavesmo103512.draw();
smo103512v0.draw(context, stavesmo103512);
const stavesmo106190 = new VF.Stave(368, 2234, 295);
stavesmo106190.setAttribute('id', 'stavesmo106190');
stavesmo106190.setBegBarType(VF.Barline.type.NONE);
stavesmo106190.setEndBarType(3);
stavesmo106190.setContext(context);
stavesmo106190.draw();
smo106190v0.draw(context, stavesmo106190);
smo107342.setContext(context);
smo107342.draw();
// modifier from 0-67-0-0 to 0-67-0-0
const smo108138 = new VF.StaveHairpin({ first_note: smo103006, last_note: smo103006,
       firstNote: smo103006, lastNote: smo103006 });
smo108138.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo108138.setContext(context).setPosition(4).draw();
// modifier from 0-67-0-1 to 0-67-0-2
const smo108139 = new VF.StaveHairpin({ first_note: smo103007, last_note: smo103007,
       firstNote: smo103007, lastNote: smo103007 });
smo108139.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo108139.setContext(context).setPosition(4).draw();
// modifier from 0-60-0-3 to 0-60-0-4
const smo108140 = new VF.StaveTie({ first_note: smo102869, last_note: smo102870, 
          firstNote: smo102869, lastNote: smo102870, first_indices: [0], last_indices: [0]});
smo108140.setContext(context).draw();
// modifier from 0-62-0-2 to 0-62-0-3
const smo108141 = new VF.StaveTie({ first_note: smo102906, last_note: smo102907, 
          firstNote: smo102906, lastNote: smo102907, first_indices: [0,1], last_indices: [0,1]});
smo108141.setContext(context).draw();
// modifier from 0-64-0-2 to 0-64-0-3
const smo108142 = new VF.StaveTie({ first_note: smo102946, last_note: smo102947, 
          firstNote: smo102946, lastNote: smo102947, first_indices: [0,1], last_indices: [0,1]});
smo108142.setContext(context).draw();
// modifier from 0-65-0-0 to 0-65-0-1
const smo108143 = new VF.StaveTie({ first_note: smo102963, last_note: smo102964, 
          firstNote: smo102963, lastNote: smo102964, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108143.setContext(context).draw();
// modifier from 0-66-0-2 to 0-66-0-3
const smo108144 = new VF.StaveTie({ first_note: smo102988, last_note: smo102989, 
          firstNote: smo102988, lastNote: smo102989, first_indices: [0], last_indices: [0]});
smo108144.setContext(context).draw();
// modifier from 0-68-0-2 to 0-68-0-3
const smo108145 = new VF.StaveTie({ first_note: smo103027, last_note: smo103028, 
          firstNote: smo103027, lastNote: smo103028, first_indices: [0,1], last_indices: [0,1]});
smo108145.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo108146 = new VF.StaveTie({ first_note: smo103089, last_note: smo103090, 
          firstNote: smo103089, lastNote: smo103090, first_indices: [0], last_indices: [0]});
smo108146.setContext(context).draw();
// modifier from 0-72-0-3 to 0-72-0-4
const smo108147 = new VF.StaveTie({ first_note: smo103111, last_note: smo103112, 
          firstNote: smo103111, lastNote: smo103112, first_indices: [0], last_indices: [0]});
smo108147.setContext(context).draw();
// modifier from 0-73-0-4 to 0-74-0-0
const smo108148 = new VF.StaveTie({ first_note: smo103134, last_note: smo103149, 
          firstNote: smo103134, lastNote: smo103149, first_indices: [0,1], last_indices: [0,1]});
smo108148.setContext(context).draw();
// modifier from 0-75-0-2 to 0-75-0-3
const smo108149 = new VF.StaveTie({ first_note: smo103168, last_note: smo103169, 
          firstNote: smo103168, lastNote: smo103169, first_indices: [0,1], last_indices: [0,1]});
smo108149.setContext(context).draw();
// modifier from 0-77-0-2 to 0-77-0-3
const smo108150 = new VF.StaveTie({ first_note: smo103210, last_note: smo103211, 
          firstNote: smo103210, lastNote: smo103211, first_indices: [0,1], last_indices: [0,1]});
smo108150.setContext(context).draw();
// modifier from 0-79-0-2 to 0-79-0-3
const smo108151 = new VF.StaveTie({ first_note: smo103252, last_note: smo103253, 
          firstNote: smo103252, lastNote: smo103253, first_indices: [0,1], last_indices: [0,1]});
smo108151.setContext(context).draw();
// modifier from 0-83-0-2 to 0-83-0-3
const smo108152 = new VF.StaveTie({ first_note: smo103331, last_note: smo103332, 
          firstNote: smo103331, lastNote: smo103332, first_indices: [0,1], last_indices: [0,1]});
smo108152.setContext(context).draw();
// modifier from 0-85-0-2 to 0-85-0-3
const smo108153 = new VF.StaveTie({ first_note: smo103373, last_note: smo103374, 
          firstNote: smo103373, lastNote: smo103374, first_indices: [0,1], last_indices: [0,1]});
smo108153.setContext(context).draw();
// modifier from 0-87-0-3 to 0-87-0-4
const smo108154 = new VF.StaveTie({ first_note: smo103416, last_note: smo103417, 
          firstNote: smo103416, lastNote: smo103417, first_indices: [0,1], last_indices: [0,1]});
smo108154.setContext(context).draw();
// modifier from 0-88-0-3 to 0-88-0-4
const smo108155 = new VF.StaveTie({ first_note: smo103437, last_note: smo103438, 
          firstNote: smo103437, lastNote: smo103438, first_indices: [0], last_indices: [0]});
smo108155.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo108156 = new VF.StaveTie({ first_note: smo103460, last_note: null, 
          firstNote: smo103460, lastNote: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108156.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo108157 = new VF.StaveTie({ first_note: null, last_note: smo103475, 
          firstNote: null, lastNote: smo103475, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108157.setContext(context).draw();
const smo103054smo103067 = new VF.Volta(5, '1', 958, 20);
smo103054smo103067.setContext(context).draw(stavesmo103067, -1 * 0);
const smo103072smo103086 = new VF.Volta(5, '2', 1253, 20);
smo103072smo103086.setContext(context).draw(stavesmo103086, -1 * 0);
const smo103481smo103494 = new VF.Volta(5, '1', 73, 20);
smo103481smo103494.setContext(context).draw(stavesmo103494, -1 * 0);
const smo103498smo103512 = new VF.Volta(5, '2', 368, 20);
smo103498smo103512.setContext(context).draw(stavesmo103512, -1 * 0);
}
// @@ Gnossienne No 3 p 2/2  by Erik Satie
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const fmtsmo782236 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo78223v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78223v0ar = [];
const smo78183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78183.setAttribute('id', 'smo78183');
smo78223v0ar.push(smo78183);
const smo78184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo78184.setAttribute('id', 'smo78184');
smo78223v0ar.push(smo78184);
const smo78185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo78185.setAttribute('id', 'smo78185');
const smo781850acc = new VF.Accidental('#');
smo78185.addModifier(smo781850acc, 0);
smo78223v0ar.push(smo78185);
const smo78186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo78186.setAttribute('id', 'smo78186');
smo78223v0ar.push(smo78186);
const smo78187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo78187.setAttribute('id', 'smo78187');
const smo781870acc = new VF.Accidental('#');
smo78187.addModifier(smo781870acc, 0);
smo78223v0ar.push(smo78187);
const smo78188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78188.setAttribute('id', 'smo78188');
smo78223v0ar.push(smo78188);
const smo78189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo78189.setAttribute('id', 'smo78189');
const smo781890acc = new VF.Accidental('#');
smo78189.addModifier(smo781890acc, 0);
smo78223v0ar.push(smo78189);
const smo78190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo78190.setAttribute('id', 'smo78190');
smo78223v0ar.push(smo78190);
const smo78191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo78191.setAttribute('id', 'smo78191');
smo78223v0ar.push(smo78191);
const smo78192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78192.setAttribute('id', 'smo78192');
smo78223v0ar.push(smo78192);
const smo78193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo78193.setAttribute('id', 'smo78193');
smo78223v0ar.push(smo78193);
const smo78194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo78194.setAttribute('id', 'smo78194');
smo78223v0ar.push(smo78194);
const smo78195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo78195.setAttribute('id', 'smo78195');
smo78223v0ar.push(smo78195);
const smo78196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo78196.setAttribute('id', 'smo78196');
smo78223v0ar.push(smo78196);
const smo78197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo78197.setAttribute('id', 'smo78197');
smo78223v0ar.push(smo78197);
const smo78198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo78198.setAttribute('id', 'smo78198');
smo78223v0ar.push(smo78198);
const smo78199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo78199.setAttribute('id', 'smo78199');
smo78223v0ar.push(smo78199);
const smo78200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78200.setAttribute('id', 'smo78200');
smo78223v0ar.push(smo78200);
const smo78201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo78201.setAttribute('id', 'smo78201');
smo78223v0ar.push(smo78201);
const smo78202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo78202.setAttribute('id', 'smo78202');
smo78223v0ar.push(smo78202);
const smo78203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo78203.setAttribute('id', 'smo78203');
smo78223v0ar.push(smo78203);
const smo78204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78204.setAttribute('id', 'smo78204');
smo78223v0ar.push(smo78204);
const smo78205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo78205.setAttribute('id', 'smo78205');
smo78223v0ar.push(smo78205);
const smo78206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo78206.setAttribute('id', 'smo78206');
smo78223v0ar.push(smo78206);
const smo78207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo78207.setAttribute('id', 'smo78207');
smo78223v0ar.push(smo78207);
smo78223v0.addTickables(smo78223v0ar)
fmtsmo782236.joinVoices([smo78223v0]);
const fmtsmo786786 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo78678v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78678v0ar = [];
const smo78647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78647.setAttribute('id', 'smo78647');
smo78678v0ar.push(smo78647);
const smo78648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78648.setAttribute('id', 'smo78648');
const smo786480acc = new VF.Accidental('#');
smo78648.addModifier(smo786480acc, 0);
smo78678v0ar.push(smo78648);
const smo78649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78649.setAttribute('id', 'smo78649');
smo78678v0ar.push(smo78649);
const smo78650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78650.setAttribute('id', 'smo78650');
smo78678v0ar.push(smo78650);
const smo78651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78651.setAttribute('id', 'smo78651');
smo78678v0ar.push(smo78651);
const smo78652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78652.setAttribute('id', 'smo78652');
smo78678v0ar.push(smo78652);
const smo78653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78653.setAttribute('id', 'smo78653');
smo78678v0ar.push(smo78653);
const smo78654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78654.setAttribute('id', 'smo78654');
smo78678v0ar.push(smo78654);
const smo78655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78655.setAttribute('id', 'smo78655');
smo78678v0ar.push(smo78655);
const smo78656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78656.setAttribute('id', 'smo78656');
smo78678v0ar.push(smo78656);
const smo78657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78657.setAttribute('id', 'smo78657');
smo78678v0ar.push(smo78657);
const smo78658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78658.setAttribute('id', 'smo78658');
smo78678v0ar.push(smo78658);
smo78678v0.addTickables(smo78678v0ar)
fmtsmo786786.joinVoices([smo78678v0]);
const smo78678v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78678v1ar = [];
const smo78659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo78659.setAttribute('id', 'smo78659');
smo78659.setStyle({ fillStyle: "#115511" });
smo78678v1ar.push(smo78659);
const smo78660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78660.setAttribute('id', 'smo78660');
smo78660.setStyle({ fillStyle: "#115511" });
smo78678v1ar.push(smo78660);
const smo78661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78661.setAttribute('id', 'smo78661');
smo78661.setStyle({ fillStyle: "#115511" });
smo78678v1ar.push(smo78661);
const smo78662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78662.setAttribute('id', 'smo78662');
smo78662.setStyle({ fillStyle: "#115511" });
smo78678v1ar.push(smo78662);
smo78678v1.addTickables(smo78678v1ar)
fmtsmo786786.joinVoices([smo78678v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80167 = smo78184.getStemDirection();
smo78184.setStemDirection(dirsmo80167);
smo78185.setStemDirection(dirsmo80167);
smo78186.setStemDirection(dirsmo80167);
smo78187.setStemDirection(dirsmo80167);
const smo80167 = new VF.Beam([smo78184,smo78185,smo78186,smo78187]);
const dirsmo80168 = smo78188.getStemDirection();
smo78188.setStemDirection(dirsmo80168);
smo78189.setStemDirection(dirsmo80168);
smo78190.setStemDirection(dirsmo80168);
smo78191.setStemDirection(dirsmo80168);
const smo80168 = new VF.Beam([smo78188,smo78189,smo78190,smo78191]);
const dirsmo80169 = smo78192.getStemDirection();
smo78192.setStemDirection(dirsmo80169);
smo78193.setStemDirection(dirsmo80169);
smo78194.setStemDirection(dirsmo80169);
smo78195.setStemDirection(dirsmo80169);
const smo80169 = new VF.Beam([smo78192,smo78193,smo78194,smo78195]);
const dirsmo80170 = smo78196.getStemDirection();
smo78196.setStemDirection(dirsmo80170);
smo78197.setStemDirection(dirsmo80170);
smo78198.setStemDirection(dirsmo80170);
smo78199.setStemDirection(dirsmo80170);
const smo80170 = new VF.Beam([smo78196,smo78197,smo78198,smo78199]);
const dirsmo80171 = smo78200.getStemDirection();
smo78200.setStemDirection(dirsmo80171);
smo78201.setStemDirection(dirsmo80171);
smo78202.setStemDirection(dirsmo80171);
smo78203.setStemDirection(dirsmo80171);
const smo80171 = new VF.Beam([smo78200,smo78201,smo78202,smo78203]);
const dirsmo80172 = smo78204.getStemDirection();
smo78204.setStemDirection(dirsmo80172);
smo78205.setStemDirection(dirsmo80172);
smo78206.setStemDirection(dirsmo80172);
smo78207.setStemDirection(dirsmo80172);
const smo80172 = new VF.Beam([smo78204,smo78205,smo78206,smo78207]);
 
// formatting measures in staff group smo78840
fmtsmo782236.format([smo78223v0,smo78678v0,smo78678v1], 1118);
const stavesmo78223 = new VF.Stave(103, 173.00000000000023, 1174);
stavesmo78223.setAttribute('id', 'stavesmo78223');
stavesmo78223.setBegBarType(1);
stavesmo78223.addClef('treble');
stavesmo78223.setContext(context);
stavesmo78223.draw();
smo78223v0.draw(context, stavesmo78223);
smo80167.setContext(context);
smo80167.draw();
smo80168.setContext(context);
smo80168.draw();
smo80169.setContext(context);
smo80169.draw();
smo80170.setContext(context);
smo80170.draw();
smo80171.setContext(context);
smo80171.draw();
smo80172.setContext(context);
smo80172.draw();
const stavesmo78678 = new VF.Stave(103, 286.0000000000002, 1174);
stavesmo78678.setAttribute('id', 'stavesmo78678');
stavesmo78678.setBegBarType(1);
stavesmo78678.addClef('bass');
stavesmo78678.setContext(context);
stavesmo78678.draw();
smo78678v0.draw(context, stavesmo78678);
smo78678v1.draw(context, stavesmo78678);
const leftsmo78840stavesmo782231 = new VF.StaveConnector(stavesmo78223, stavesmo78678).setType(3);
leftsmo78840stavesmo782231.setContext(context).draw();
const fmtsmo782597 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo78259v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78259v0ar = [];
const smo78224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo78224.setAttribute('id', 'smo78224');
smo78259v0ar.push(smo78224);
const smo78225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo78225.setAttribute('id', 'smo78225');
const smo782250acc = new VF.Accidental('#');
smo78225.addModifier(smo782250acc, 0);
smo78259v0ar.push(smo78225);
const smo78226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo78226.setAttribute('id', 'smo78226');
smo78259v0ar.push(smo78226);
const smo78227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo78227.setAttribute('id', 'smo78227');
const smo782270acc = new VF.Accidental('#');
smo78227.addModifier(smo782270acc, 0);
smo78259v0ar.push(smo78227);
const smo78228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78228.setAttribute('id', 'smo78228');
smo78259v0ar.push(smo78228);
const smo78229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo78229.setAttribute('id', 'smo78229');
const smo782290acc = new VF.Accidental('#');
smo78229.addModifier(smo782290acc, 0);
smo78259v0ar.push(smo78229);
const smo78230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo78230.setAttribute('id', 'smo78230');
smo78259v0ar.push(smo78230);
const smo78231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo78231.setAttribute('id', 'smo78231');
smo78259v0ar.push(smo78231);
const smo78232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo78232.setAttribute('id', 'smo78232');
smo78259v0ar.push(smo78232);
const smo78233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo78233.setAttribute('id', 'smo78233');
smo78259v0ar.push(smo78233);
const smo78234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo78234.setAttribute('id', 'smo78234');
smo78259v0ar.push(smo78234);
const smo78235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78235.setAttribute('id', 'smo78235');
smo78259v0ar.push(smo78235);
const smo78236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
const smo78237 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo78237.setAttribute('id', 'smo78237');
const acc0smo78237 = new VF.Accidental('#');
smo78237.addModifier(acc0smo78237, 0)
const ggrpsmo78236 = new VF.GraceNoteGroup([smo78237]);
ggrpsmo78236.beamNotes();
smo78236.addModifier(ggrpsmo78236, 0);
smo78236.setAttribute('id', 'smo78236');
const smo782360acc = new VF.Accidental('n');
smo78236.addModifier(smo782360acc, 0);
smo78259v0ar.push(smo78236);
const smo78238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo78238.setAttribute('id', 'smo78238');
smo78259v0ar.push(smo78238);
const smo78239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78239.setAttribute('id', 'smo78239');
smo78259v0ar.push(smo78239);
const smo78240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
const smo78241 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["cn/5"],"slash":false}'))
smo78241.setAttribute('id', 'smo78241');
const ggrpsmo78240 = new VF.GraceNoteGroup([smo78241]);
ggrpsmo78240.beamNotes();
smo78240.addModifier(ggrpsmo78240, 0);
smo78240.setAttribute('id', 'smo78240');
const smo782400acc = new VF.Accidental('b');
smo78240.addModifier(smo782400acc, 0);
smo78259v0ar.push(smo78240);
const smo78242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo78242.setAttribute('id', 'smo78242');
smo78259v0ar.push(smo78242);
const smo78243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78243.setAttribute('id', 'smo78243');
smo78259v0ar.push(smo78243);
smo78259v0.addTickables(smo78259v0ar)
fmtsmo782597.joinVoices([smo78259v0]);
const fmtsmo787187 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo78718v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78718v0ar = [];
const smo78679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78679.setAttribute('id', 'smo78679');
smo78718v0ar.push(smo78679);
const smo78680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78680.setAttribute('id', 'smo78680');
smo78718v0ar.push(smo78680);
const smo78681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78681.setAttribute('id', 'smo78681');
smo78718v0ar.push(smo78681);
const smo78682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78682.setAttribute('id', 'smo78682');
smo78718v0ar.push(smo78682);
const smo78683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78683.setAttribute('id', 'smo78683');
const smo786830acc = new VF.Accidental('#');
smo78683.addModifier(smo786830acc, 0);
smo78718v0ar.push(smo78683);
const smo78684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78684.setAttribute('id', 'smo78684');
smo78718v0ar.push(smo78684);
const smo78685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78685.setAttribute('id', 'smo78685');
smo78718v0ar.push(smo78685);
const smo78686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78686.setAttribute('id', 'smo78686');
smo78718v0ar.push(smo78686);
const smo78687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78687.setAttribute('id', 'smo78687');
smo78718v0ar.push(smo78687);
const smo78688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78688.setAttribute('id', 'smo78688');
smo78718v0ar.push(smo78688);
const smo78689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78689.setAttribute('id', 'smo78689');
smo78718v0ar.push(smo78689);
const smo78690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78690.setAttribute('id', 'smo78690');
smo78718v0ar.push(smo78690);
const smo78691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78691.setAttribute('id', 'smo78691');
smo78718v0ar.push(smo78691);
const smo78692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78692.setAttribute('id', 'smo78692');
const smo786920acc = new VF.Accidental('b');
smo78692.addModifier(smo786920acc, 0);
smo78718v0ar.push(smo78692);
const smo78693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78693.setAttribute('id', 'smo78693');
smo78718v0ar.push(smo78693);
const smo78694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78694.setAttribute('id', 'smo78694');
smo78718v0ar.push(smo78694);
const smo78695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78695.setAttribute('id', 'smo78695');
smo78718v0ar.push(smo78695);
const smo78696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78696.setAttribute('id', 'smo78696');
smo78718v0ar.push(smo78696);
smo78718v0.addTickables(smo78718v0ar)
fmtsmo787187.joinVoices([smo78718v0]);
const smo78718v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78718v1ar = [];
const smo78697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78697.setAttribute('id', 'smo78697');
smo78697.setStyle({ fillStyle: "#115511" });
smo78718v1ar.push(smo78697);
const smo78698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo78698.setAttribute('id', 'smo78698');
smo78698.setStyle({ fillStyle: "#115511" });
smo78718v1ar.push(smo78698);
const smo78699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo78699.setAttribute('id', 'smo78699');
smo78699.setStyle({ fillStyle: "#115511" });
smo78718v1ar.push(smo78699);
const smo78700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo78700.setAttribute('id', 'smo78700');
smo78700.setStyle({ fillStyle: "#115511" });
smo78718v1ar.push(smo78700);
const smo78701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo78701.setAttribute('id', 'smo78701');
smo78701.setStyle({ fillStyle: "#115511" });
smo78718v1ar.push(smo78701);
const smo78702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo78702.setAttribute('id', 'smo78702');
smo78702.setStyle({ fillStyle: "#115511" });
smo78718v1ar.push(smo78702);
smo78718v1.addTickables(smo78718v1ar)
fmtsmo787187.joinVoices([smo78718v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80185 = smo78224.getStemDirection();
smo78224.setStemDirection(dirsmo80185);
smo78225.setStemDirection(dirsmo80185);
smo78226.setStemDirection(dirsmo80185);
smo78227.setStemDirection(dirsmo80185);
const smo80185 = new VF.Beam([smo78224,smo78225,smo78226,smo78227]);
const dirsmo80186 = smo78228.getStemDirection();
smo78228.setStemDirection(dirsmo80186);
smo78229.setStemDirection(dirsmo80186);
smo78230.setStemDirection(dirsmo80186);
smo78231.setStemDirection(dirsmo80186);
const smo80186 = new VF.Beam([smo78228,smo78229,smo78230,smo78231]);
const dirsmo80187 = smo78232.getStemDirection();
smo78232.setStemDirection(dirsmo80187);
smo78233.setStemDirection(dirsmo80187);
const smo80187 = new VF.Beam([smo78232,smo78233]);
 
// formatting measures in staff group smo78840
fmtsmo782597.format([smo78259v0,smo78718v0,smo78718v1], 1118);
const stavesmo78259 = new VF.Stave(103, 455.0000000000002, 1174);
stavesmo78259.setAttribute('id', 'stavesmo78259');
stavesmo78259.setBegBarType(1);
stavesmo78259.addClef('treble');
stavesmo78259.setContext(context);
stavesmo78259.draw();
smo78259v0.draw(context, stavesmo78259);
smo80185.setContext(context);
smo80185.draw();
smo80186.setContext(context);
smo80186.draw();
smo80187.setContext(context);
smo80187.draw();
const stavesmo78718 = new VF.Stave(103, 573.0000000000002, 1174);
stavesmo78718.setAttribute('id', 'stavesmo78718');
stavesmo78718.setBegBarType(1);
stavesmo78718.addClef('bass');
stavesmo78718.setContext(context);
stavesmo78718.draw();
smo78718v0.draw(context, stavesmo78718);
smo78718v1.draw(context, stavesmo78718);
const leftsmo78840stavesmo782591 = new VF.StaveConnector(stavesmo78259, stavesmo78718).setType(3);
leftsmo78840stavesmo782591.setContext(context).draw();
const fmtsmo782998 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo78299v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78299v0ar = [];
const smo78260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo78260.setAttribute('id', 'smo78260');
const smo782600acc = new VF.Accidental('b');
smo78260.addModifier(smo782600acc, 0);
smo78299v0ar.push(smo78260);
const smo78261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78261.setAttribute('id', 'smo78261');
smo78299v0ar.push(smo78261);
const smo78262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78262.setAttribute('id', 'smo78262');
smo78299v0ar.push(smo78262);
const smo78263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/5/n"]}'))
smo78263.setAttribute('id', 'smo78263');
const smo782630acc = new VF.Accidental('b');
smo78263.addModifier(smo782630acc, 0);
smo78299v0ar.push(smo78263);
const smo78264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo78264.setAttribute('id', 'smo78264');
smo78299v0ar.push(smo78264);
const smo78265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78265.setAttribute('id', 'smo78265');
smo78299v0ar.push(smo78265);
const smo78266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78266.setAttribute('id', 'smo78266');
smo78299v0ar.push(smo78266);
const smo78267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo78267.setAttribute('id', 'smo78267');
smo78299v0ar.push(smo78267);
const smo78268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78268.setAttribute('id', 'smo78268');
smo78299v0ar.push(smo78268);
const smo78269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78269.setAttribute('id', 'smo78269');
smo78299v0ar.push(smo78269);
const smo78270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78270.setAttribute('id', 'smo78270');
smo78299v0ar.push(smo78270);
const smo78271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78271.setAttribute('id', 'smo78271');
smo78299v0ar.push(smo78271);
const smo78272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo78273 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo78273.setAttribute('id', 'smo78273');
const ggrpsmo78272 = new VF.GraceNoteGroup([smo78273]);
ggrpsmo78272.beamNotes();
smo78272.addModifier(ggrpsmo78272, 0);
smo78272.setAttribute('id', 'smo78272');
smo78299v0ar.push(smo78272);
const smo78274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo78274.setAttribute('id', 'smo78274');
smo78299v0ar.push(smo78274);
const smo78275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78275.setAttribute('id', 'smo78275');
smo78299v0ar.push(smo78275);
const smo78276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo78276.setAttribute('id', 'smo78276');
smo78299v0ar.push(smo78276);
const smo78277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78277.setAttribute('id', 'smo78277');
smo78299v0ar.push(smo78277);
const smo78278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78278.setAttribute('id', 'smo78278');
smo78299v0ar.push(smo78278);
const smo78279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/5/n"]}'))
smo78279.setAttribute('id', 'smo78279');
smo78299v0ar.push(smo78279);
const smo78280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo78280.setAttribute('id', 'smo78280');
smo78299v0ar.push(smo78280);
const smo78281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78281.setAttribute('id', 'smo78281');
smo78299v0ar.push(smo78281);
const smo78282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78282.setAttribute('id', 'smo78282');
smo78299v0ar.push(smo78282);
const smo78283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo78283.setAttribute('id', 'smo78283');
smo78299v0ar.push(smo78283);
smo78299v0.addTickables(smo78299v0ar)
fmtsmo782998.joinVoices([smo78299v0]);
const fmtsmo787548 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo78754v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78754v0ar = [];
const smo78719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78719.setAttribute('id', 'smo78719');
smo78754v0ar.push(smo78719);
const smo78720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78720.setAttribute('id', 'smo78720');
const smo787200acc = new VF.Accidental('b');
smo78720.addModifier(smo787200acc, 0);
smo78754v0ar.push(smo78720);
const smo78721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78721.setAttribute('id', 'smo78721');
smo78754v0ar.push(smo78721);
const smo78722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78722.setAttribute('id', 'smo78722');
smo78754v0ar.push(smo78722);
const smo78723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78723.setAttribute('id', 'smo78723');
smo78754v0ar.push(smo78723);
const smo78724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78724.setAttribute('id', 'smo78724');
smo78754v0ar.push(smo78724);
const smo78725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78725.setAttribute('id', 'smo78725');
smo78754v0ar.push(smo78725);
const smo78726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78726.setAttribute('id', 'smo78726');
const smo787260acc = new VF.Accidental('n');
smo78726.addModifier(smo787260acc, 0);
smo78754v0ar.push(smo78726);
const smo78727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78727.setAttribute('id', 'smo78727');
smo78754v0ar.push(smo78727);
const smo78728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78728.setAttribute('id', 'smo78728');
smo78754v0ar.push(smo78728);
const smo78729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78729.setAttribute('id', 'smo78729');
smo78754v0ar.push(smo78729);
const smo78730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78730.setAttribute('id', 'smo78730');
smo78754v0ar.push(smo78730);
const smo78731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78731.setAttribute('id', 'smo78731');
smo78754v0ar.push(smo78731);
const smo78732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78732.setAttribute('id', 'smo78732');
const smo787320acc = new VF.Accidental('b');
smo78732.addModifier(smo787320acc, 0);
smo78754v0ar.push(smo78732);
const smo78733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78733.setAttribute('id', 'smo78733');
smo78754v0ar.push(smo78733);
smo78754v0.addTickables(smo78754v0ar)
fmtsmo787548.joinVoices([smo78754v0]);
const smo78754v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78754v1ar = [];
const smo78734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo78734.setAttribute('id', 'smo78734');
smo78734.setStyle({ fillStyle: "#115511" });
smo78754v1ar.push(smo78734);
const smo78735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo78735.setAttribute('id', 'smo78735');
smo78735.setStyle({ fillStyle: "#115511" });
smo78754v1ar.push(smo78735);
const smo78736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo78736.setAttribute('id', 'smo78736');
smo78736.setStyle({ fillStyle: "#115511" });
smo78754v1ar.push(smo78736);
const smo78737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo78737.setAttribute('id', 'smo78737');
smo78737.setStyle({ fillStyle: "#115511" });
smo78754v1ar.push(smo78737);
const smo78738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo78738.setAttribute('id', 'smo78738');
smo78738.setStyle({ fillStyle: "#115511" });
smo78754v1ar.push(smo78738);
smo78754v1.addTickables(smo78754v1ar)
fmtsmo787548.joinVoices([smo78754v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80201 = smo78260.getStemDirection();
smo78260.setStemDirection(dirsmo80201);
smo78261.setStemDirection(dirsmo80201);
smo78262.setStemDirection(dirsmo80201);
smo78263.setStemDirection(dirsmo80201);
const smo80201 = new VF.Beam([smo78260,smo78261,smo78262,smo78263]);
const dirsmo80202 = smo78264.getStemDirection();
smo78264.setStemDirection(dirsmo80202);
smo78265.setStemDirection(dirsmo80202);
smo78266.setStemDirection(dirsmo80202);
smo78267.setStemDirection(dirsmo80202);
const smo80202 = new VF.Beam([smo78264,smo78265,smo78266,smo78267]);
const dirsmo80203 = smo78268.getStemDirection();
smo78268.setStemDirection(dirsmo80203);
smo78269.setStemDirection(dirsmo80203);
const smo80203 = new VF.Beam([smo78268,smo78269]);
const dirsmo80204 = smo78276.getStemDirection();
smo78276.setStemDirection(dirsmo80204);
smo78277.setStemDirection(dirsmo80204);
smo78278.setStemDirection(dirsmo80204);
smo78279.setStemDirection(dirsmo80204);
const smo80204 = new VF.Beam([smo78276,smo78277,smo78278,smo78279]);
const dirsmo80205 = smo78280.getStemDirection();
smo78280.setStemDirection(dirsmo80205);
smo78281.setStemDirection(dirsmo80205);
smo78282.setStemDirection(dirsmo80205);
smo78283.setStemDirection(dirsmo80205);
const smo80205 = new VF.Beam([smo78280,smo78281,smo78282,smo78283]);
 
// formatting measures in staff group smo78840
fmtsmo782998.format([smo78299v0,smo78754v0,smo78754v1], 1117);
const stavesmo78299 = new VF.Stave(103, 713.0000000000002, 1174);
stavesmo78299.setAttribute('id', 'stavesmo78299');
stavesmo78299.setBegBarType(1);
stavesmo78299.addClef('treble');
stavesmo78299.setContext(context);
stavesmo78299.draw();
smo78299v0.draw(context, stavesmo78299);
smo80201.setContext(context);
smo80201.draw();
smo80202.setContext(context);
smo80202.draw();
smo80203.setContext(context);
smo80203.draw();
smo80204.setContext(context);
smo80204.draw();
smo80205.setContext(context);
smo80205.draw();
const stavesmo78754 = new VF.Stave(103, 836.0000000000002, 1174);
stavesmo78754.setAttribute('id', 'stavesmo78754');
stavesmo78754.setBegBarType(1);
stavesmo78754.addClef('bass');
stavesmo78754.setContext(context);
stavesmo78754.draw();
smo78754v0.draw(context, stavesmo78754);
smo78754v1.draw(context, stavesmo78754);
const leftsmo78840stavesmo782991 = new VF.StaveConnector(stavesmo78299, stavesmo78754).setType(3);
leftsmo78840stavesmo782991.setContext(context).draw();
const fmtsmo783489 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo78348v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78348v0ar = [];
const smo78300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78300.setAttribute('id', 'smo78300');
smo78348v0ar.push(smo78300);
const smo78301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78301.setAttribute('id', 'smo78301');
smo78348v0ar.push(smo78301);
const smo78302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78302.setAttribute('id', 'smo78302');
smo78348v0ar.push(smo78302);
const smo78303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78303.setAttribute('id', 'smo78303');
smo78348v0ar.push(smo78303);
const smo78304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo78305 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo78305.setAttribute('id', 'smo78305');
const ggrpsmo78304 = new VF.GraceNoteGroup([smo78305]);
ggrpsmo78304.beamNotes();
smo78304.addModifier(ggrpsmo78304, 0);
smo78304.setAttribute('id', 'smo78304');
smo78348v0ar.push(smo78304);
const smo78306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo78306.setAttribute('id', 'smo78306');
smo78348v0ar.push(smo78306);
const smo78307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo78307.setAttribute('id', 'smo78307');
smo78348v0ar.push(smo78307);
const smo78308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78308.setAttribute('id', 'smo78308');
const smo783080acc = new VF.Accidental('#');
smo78308.addModifier(smo783080acc, 0);
smo78348v0ar.push(smo78308);
const smo78309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78309.setAttribute('id', 'smo78309');
smo78348v0ar.push(smo78309);
const smo78310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo78310.setAttribute('id', 'smo78310');
const smo783100acc = new VF.Accidental('#');
smo78310.addModifier(smo783100acc, 0);
smo78348v0ar.push(smo78310);
const smo78311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo78311.setAttribute('id', 'smo78311');
smo78348v0ar.push(smo78311);
const smo78312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo78312.setAttribute('id', 'smo78312');
smo78348v0ar.push(smo78312);
const smo78313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78313.setAttribute('id', 'smo78313');
smo78348v0ar.push(smo78313);
const smo78314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78314.setAttribute('id', 'smo78314');
smo78348v0ar.push(smo78314);
const smo78315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78315.setAttribute('id', 'smo78315');
smo78348v0ar.push(smo78315);
const smo78316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78316.setAttribute('id', 'smo78316');
smo78348v0ar.push(smo78316);
const smo78317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78317.setAttribute('id', 'smo78317');
smo78348v0ar.push(smo78317);
const smo78318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78318.setAttribute('id', 'smo78318');
smo78348v0ar.push(smo78318);
const smo78319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78319.setAttribute('id', 'smo78319');
smo78348v0ar.push(smo78319);
const smo78320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78320.setAttribute('id', 'smo78320');
smo78348v0ar.push(smo78320);
const smo78321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78321.setAttribute('id', 'smo78321');
smo78348v0ar.push(smo78321);
const smo78322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78322.setAttribute('id', 'smo78322');
smo78348v0ar.push(smo78322);
const smo78323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78323.setAttribute('id', 'smo78323');
smo78348v0ar.push(smo78323);
const smo78324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78324.setAttribute('id', 'smo78324');
smo78348v0ar.push(smo78324);
smo78348v0.addTickables(smo78348v0ar)
fmtsmo783489.joinVoices([smo78348v0]);
const smo78348v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78348v1ar = [];
const smo78325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78325.setAttribute('id', 'smo78325');
smo78325.setStyle({ fillStyle: '#aaaaaa7f' });
smo78348v1ar.push(smo78325);
const smo78326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78326.setAttribute('id', 'smo78326');
smo78326.setStyle({ fillStyle: '#aaaaaa7f' });
smo78348v1ar.push(smo78326);
const smo78327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78327.setAttribute('id', 'smo78327');
smo78327.setStyle({ fillStyle: "#115511" });
smo78348v1ar.push(smo78327);
const smo78328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78328.setAttribute('id', 'smo78328');
smo78328.setStyle({ fillStyle: "#115511" });
smo78348v1ar.push(smo78328);
const smo78329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78329.setAttribute('id', 'smo78329');
smo78329.setStyle({ fillStyle: '#aaaaaa7f' });
smo78348v1ar.push(smo78329);
const smo78330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78330.setAttribute('id', 'smo78330');
smo78330.setStyle({ fillStyle: "#115511" });
smo78348v1ar.push(smo78330);
const smo78331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78331.setAttribute('id', 'smo78331');
smo78331.setStyle({ fillStyle: "#115511" });
smo78348v1ar.push(smo78331);
const smo78332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78332.setAttribute('id', 'smo78332');
smo78332.setStyle({ fillStyle: "#115511" });
smo78348v1ar.push(smo78332);
smo78348v1.addTickables(smo78348v1ar)
fmtsmo783489.joinVoices([smo78348v1]);
const fmtsmo787929 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo78792v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78792v0ar = [];
const smo78755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78755.setAttribute('id', 'smo78755');
smo78792v0ar.push(smo78755);
const smo78756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78756.setAttribute('id', 'smo78756');
const smo787560acc = new VF.Accidental('b');
smo78756.addModifier(smo787560acc, 0);
smo78792v0ar.push(smo78756);
const smo78757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo78757.setAttribute('id', 'smo78757');
smo78792v0ar.push(smo78757);
const smo78758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78758.setAttribute('id', 'smo78758');
smo78792v0ar.push(smo78758);
const smo78759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78759.setAttribute('id', 'smo78759');
const smo787590acc = new VF.Accidental('n');
smo78759.addModifier(smo787590acc, 0);
smo78792v0ar.push(smo78759);
const smo78760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78760.setAttribute('id', 'smo78760');
smo78792v0ar.push(smo78760);
const smo78761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78761.setAttribute('id', 'smo78761');
smo78792v0ar.push(smo78761);
const smo78762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78762.setAttribute('id', 'smo78762');
smo78762.setStyle({ fillStyle: '#aaaaaa7f' });
smo78762.addModifier(new VF.Dot(), 0);
smo78792v0ar.push(smo78762);
const smo78763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78763.setAttribute('id', 'smo78763');
smo78792v0ar.push(smo78763);
const smo78764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78764.setAttribute('id', 'smo78764');
smo78764.setStyle({ fillStyle: '#aaaaaa7f' });
smo78764.addModifier(new VF.Dot(), 0);
smo78792v0ar.push(smo78764);
const smo78765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78765.setAttribute('id', 'smo78765');
smo78792v0ar.push(smo78765);
const smo78766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78766.setAttribute('id', 'smo78766');
smo78792v0ar.push(smo78766);
const smo78767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78767.setAttribute('id', 'smo78767');
smo78792v0ar.push(smo78767);
const smo78768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78768.setAttribute('id', 'smo78768');
smo78792v0ar.push(smo78768);
const smo78769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78769.setAttribute('id', 'smo78769');
smo78792v0ar.push(smo78769);
const smo78770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78770.setAttribute('id', 'smo78770');
smo78792v0ar.push(smo78770);
smo78792v0.addTickables(smo78792v0ar)
fmtsmo787929.joinVoices([smo78792v0]);
const smo78792v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78792v1ar = [];
const smo78771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo78771.setAttribute('id', 'smo78771');
smo78771.setStyle({ fillStyle: "#115511" });
smo78792v1ar.push(smo78771);
const smo78772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo78772.setAttribute('id', 'smo78772');
smo78772.setStyle({ fillStyle: "#115511" });
smo78792v1ar.push(smo78772);
const smo78773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo78773.setAttribute('id', 'smo78773');
smo78773.setStyle({ fillStyle: "#115511" });
smo78792v1ar.push(smo78773);
const smo78774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo78774.setAttribute('id', 'smo78774');
smo78774.setStyle({ fillStyle: "#115511" });
smo78792v1ar.push(smo78774);
const smo78775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78775.setAttribute('id', 'smo78775');
smo78775.setStyle({ fillStyle: "#115511" });
smo78792v1ar.push(smo78775);
const smo78776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78776.setAttribute('id', 'smo78776');
smo78776.setStyle({ fillStyle: "#115511" });
smo78792v1ar.push(smo78776);
smo78792v1.addTickables(smo78792v1ar)
fmtsmo787929.joinVoices([smo78792v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80220 = smo78300.getStemDirection();
smo78300.setStemDirection(dirsmo80220);
smo78301.setStemDirection(dirsmo80220);
const smo80220 = new VF.Beam([smo78300,smo78301]);
const dirsmo80221 = smo78306.getStemDirection();
smo78306.setStemDirection(dirsmo80221);
smo78307.setStemDirection(dirsmo80221);
smo78308.setStemDirection(dirsmo80221);
smo78309.setStemDirection(dirsmo80221);
const smo80221 = new VF.Beam([smo78306,smo78307,smo78308,smo78309]);
const dirsmo80222 = smo78310.getStemDirection();
smo78310.setStemDirection(dirsmo80222);
smo78311.setStemDirection(dirsmo80222);
const smo80222 = new VF.Beam([smo78310,smo78311]);
const dirsmo80223 = smo78314.getStemDirection();
smo78314.setStemDirection(dirsmo80223);
smo78315.setStemDirection(dirsmo80223);
const smo80223 = new VF.Beam([smo78314,smo78315]);
const dirsmo80224 = smo78316.getStemDirection();
smo78316.setStemDirection(dirsmo80224);
smo78317.setStemDirection(dirsmo80224);
smo78318.setStemDirection(dirsmo80224);
smo78319.setStemDirection(dirsmo80224);
const smo80224 = new VF.Beam([smo78316,smo78317,smo78318,smo78319]);
const dirsmo80225 = smo78320.getStemDirection();
smo78320.setStemDirection(dirsmo80225);
smo78321.setStemDirection(dirsmo80225);
const smo80225 = new VF.Beam([smo78320,smo78321]);
 
// formatting measures in staff group smo78840
fmtsmo783489.format([smo78348v0,smo78348v1,smo78792v0,smo78792v1], 1117);
const stavesmo78348 = new VF.Stave(103, 1000.0000000000002, 1174);
stavesmo78348.setAttribute('id', 'stavesmo78348');
stavesmo78348.setBegBarType(1);
stavesmo78348.addClef('treble');
stavesmo78348.setContext(context);
stavesmo78348.draw();
smo78348v0.draw(context, stavesmo78348);
smo78348v1.draw(context, stavesmo78348);
smo80220.setContext(context);
smo80220.draw();
smo80221.setContext(context);
smo80221.draw();
smo80222.setContext(context);
smo80222.draw();
smo80223.setContext(context);
smo80223.draw();
smo80224.setContext(context);
smo80224.draw();
smo80225.setContext(context);
smo80225.draw();
const stavesmo78792 = new VF.Stave(103, 1149.0000000000002, 1174);
stavesmo78792.setAttribute('id', 'stavesmo78792');
stavesmo78792.setBegBarType(1);
stavesmo78792.addClef('bass');
stavesmo78792.setContext(context);
stavesmo78792.draw();
smo78792v0.draw(context, stavesmo78792);
smo78792v1.draw(context, stavesmo78792);
const leftsmo78840stavesmo783481 = new VF.StaveConnector(stavesmo78348, stavesmo78792).setType(3);
leftsmo78840stavesmo783481.setContext(context).draw();
const fmtsmo7839610 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo78396v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78396v0ar = [];
const smo78349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo78349.setAttribute('id', 'smo78349');
smo78396v0ar.push(smo78349);
const smo78350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo78350.setAttribute('id', 'smo78350');
smo78396v0ar.push(smo78350);
const smo78351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78351.setAttribute('id', 'smo78351');
const smo783510acc = new VF.Accidental('#');
smo78351.addModifier(smo783510acc, 0);
smo78396v0ar.push(smo78351);
const smo78352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78352.setAttribute('id', 'smo78352');
smo78396v0ar.push(smo78352);
const smo78353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo78353.setAttribute('id', 'smo78353');
const smo783530acc = new VF.Accidental('#');
smo78353.addModifier(smo783530acc, 0);
smo78396v0ar.push(smo78353);
const smo78354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo78354.setAttribute('id', 'smo78354');
smo78396v0ar.push(smo78354);
const smo78355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo78355.setAttribute('id', 'smo78355');
smo78396v0ar.push(smo78355);
const smo78356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78356.setAttribute('id', 'smo78356');
smo78396v0ar.push(smo78356);
const smo78357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78357.setAttribute('id', 'smo78357');
smo78396v0ar.push(smo78357);
const smo78358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78358.setAttribute('id', 'smo78358');
smo78396v0ar.push(smo78358);
const smo78359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78359.setAttribute('id', 'smo78359');
smo78396v0ar.push(smo78359);
const smo78360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo78360.setAttribute('id', 'smo78360');
smo78396v0ar.push(smo78360);
const smo78361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78361.setAttribute('id', 'smo78361');
smo78396v0ar.push(smo78361);
const smo78362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo78362.setAttribute('id', 'smo78362');
smo78396v0ar.push(smo78362);
const smo78363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78363.setAttribute('id', 'smo78363');
smo78396v0ar.push(smo78363);
const smo78364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78364.setAttribute('id', 'smo78364');
smo78396v0ar.push(smo78364);
const smo78365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78365.setAttribute('id', 'smo78365');
smo78396v0ar.push(smo78365);
const smo78366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78366.setAttribute('id', 'smo78366');
smo78396v0ar.push(smo78366);
const smo78367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78367.setAttribute('id', 'smo78367');
smo78396v0ar.push(smo78367);
const smo78368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo78368.setAttribute('id', 'smo78368');
smo78396v0ar.push(smo78368);
const smo78369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78369.setAttribute('id', 'smo78369');
smo78396v0ar.push(smo78369);
const smo78370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78370.setAttribute('id', 'smo78370');
smo78396v0ar.push(smo78370);
const smo78371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo78371.setAttribute('id', 'smo78371');
smo78396v0ar.push(smo78371);
const smo78372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78372.setAttribute('id', 'smo78372');
smo78396v0ar.push(smo78372);
const smo78373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78373.setAttribute('id', 'smo78373');
smo78396v0ar.push(smo78373);
smo78396v0.addTickables(smo78396v0ar)
fmtsmo7839610.joinVoices([smo78396v0]);
const smo78396v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78396v1ar = [];
const smo78374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78374.setAttribute('id', 'smo78374');
smo78374.setStyle({ fillStyle: '#aaaaaa7f' });
smo78396v1ar.push(smo78374);
const smo78375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78375.setAttribute('id', 'smo78375');
smo78375.setStyle({ fillStyle: "#115511" });
smo78396v1ar.push(smo78375);
const smo78376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78376.setAttribute('id', 'smo78376');
smo78376.setStyle({ fillStyle: "#115511" });
smo78396v1ar.push(smo78376);
const smo78377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78377.setAttribute('id', 'smo78377');
smo78377.setStyle({ fillStyle: '#aaaaaa7f' });
smo78396v1ar.push(smo78377);
const smo78378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78378.setAttribute('id', 'smo78378');
smo78378.setStyle({ fillStyle: "#115511" });
smo78396v1ar.push(smo78378);
const smo78379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo78379.setAttribute('id', 'smo78379');
smo78379.setStyle({ fillStyle: "#115511" });
smo78396v1ar.push(smo78379);
const smo78380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78380.setAttribute('id', 'smo78380');
smo78380.setStyle({ fillStyle: "#115511" });
smo78380.addModifier(new VF.Dot(), 0);
smo78396v1ar.push(smo78380);
smo78396v1.addTickables(smo78396v1ar)
fmtsmo7839610.joinVoices([smo78396v1]);
const fmtsmo7882610 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo78826v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78826v0ar = [];
const smo78793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78793.setAttribute('id', 'smo78793');
smo78826v0ar.push(smo78793);
const smo78794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78794.setAttribute('id', 'smo78794');
smo78794.setStyle({ fillStyle: '#aaaaaa7f' });
smo78794.addModifier(new VF.Dot(), 0);
smo78826v0ar.push(smo78794);
const smo78795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78795.setAttribute('id', 'smo78795');
smo78826v0ar.push(smo78795);
const smo78796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78796.setAttribute('id', 'smo78796');
smo78796.setStyle({ fillStyle: '#aaaaaa7f' });
smo78796.addModifier(new VF.Dot(), 0);
smo78826v0ar.push(smo78796);
const smo78797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78797.setAttribute('id', 'smo78797');
smo78826v0ar.push(smo78797);
const smo78798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78798.setAttribute('id', 'smo78798');
smo78826v0ar.push(smo78798);
const smo78799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78799.setAttribute('id', 'smo78799');
smo78826v0ar.push(smo78799);
const smo78800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78800.setAttribute('id', 'smo78800');
smo78826v0ar.push(smo78800);
const smo78801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78801.setAttribute('id', 'smo78801');
smo78826v0ar.push(smo78801);
const smo78802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78802.setAttribute('id', 'smo78802');
smo78826v0ar.push(smo78802);
const smo78803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo78803.setAttribute('id', 'smo78803');
smo78826v0ar.push(smo78803);
const smo78804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78804.setAttribute('id', 'smo78804');
smo78826v0ar.push(smo78804);
const smo78805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78805.setAttribute('id', 'smo78805');
smo78826v0ar.push(smo78805);
smo78826v0.addTickables(smo78826v0ar)
fmtsmo7882610.joinVoices([smo78826v0]);
const smo78826v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78826v1ar = [];
const smo78806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo78806.setAttribute('id', 'smo78806');
smo78806.setStyle({ fillStyle: "#115511" });
smo78826v1ar.push(smo78806);
const smo78807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo78807.setAttribute('id', 'smo78807');
smo78807.setStyle({ fillStyle: "#115511" });
smo78826v1ar.push(smo78807);
const smo78808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo78808.setAttribute('id', 'smo78808');
smo78808.setStyle({ fillStyle: "#115511" });
smo78826v1ar.push(smo78808);
const smo78809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo78809.setAttribute('id', 'smo78809');
smo78809.setStyle({ fillStyle: "#115511" });
smo78826v1ar.push(smo78809);
const smo78810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo78810.setAttribute('id', 'smo78810');
smo78810.setStyle({ fillStyle: "#115511" });
smo78826v1ar.push(smo78810);
smo78826v1.addTickables(smo78826v1ar)
fmtsmo7882610.joinVoices([smo78826v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80239 = smo78349.getStemDirection();
smo78349.setStemDirection(dirsmo80239);
smo78350.setStemDirection(dirsmo80239);
smo78351.setStemDirection(dirsmo80239);
smo78352.setStemDirection(dirsmo80239);
const smo80239 = new VF.Beam([smo78349,smo78350,smo78351,smo78352]);
const dirsmo80240 = smo78353.getStemDirection();
smo78353.setStemDirection(dirsmo80240);
smo78354.setStemDirection(dirsmo80240);
const smo80240 = new VF.Beam([smo78353,smo78354]);
const dirsmo80241 = smo78357.getStemDirection();
smo78357.setStemDirection(dirsmo80241);
smo78358.setStemDirection(dirsmo80241);
const smo80241 = new VF.Beam([smo78357,smo78358]);
const dirsmo80242 = smo78359.getStemDirection();
smo78359.setStemDirection(dirsmo80242);
smo78360.setStemDirection(dirsmo80242);
smo78361.setStemDirection(dirsmo80242);
smo78362.setStemDirection(dirsmo80242);
const smo80242 = new VF.Beam([smo78359,smo78360,smo78361,smo78362]);
const dirsmo80243 = smo78363.getStemDirection();
smo78363.setStemDirection(dirsmo80243);
smo78364.setStemDirection(dirsmo80243);
const smo80243 = new VF.Beam([smo78363,smo78364]);
const dirsmo80244 = smo78367.getStemDirection();
smo78367.setStemDirection(dirsmo80244);
smo78368.setStemDirection(dirsmo80244);
const smo80244 = new VF.Beam([smo78367,smo78368]);
const dirsmo80245 = smo78369.getStemDirection();
smo78369.setStemDirection(dirsmo80245);
smo78370.setStemDirection(dirsmo80245);
const smo80245 = new VF.Beam([smo78369,smo78370]);
 
// formatting measures in staff group smo78840
fmtsmo7839610.format([smo78396v0,smo78396v1,smo78826v0,smo78826v1], 958);
const stavesmo78396 = new VF.Stave(103, 1323.0000000000002, 1022);
stavesmo78396.setAttribute('id', 'stavesmo78396');
stavesmo78396.setBegBarType(1);
stavesmo78396.setEndBarType(3);
stavesmo78396.addClef('treble');
stavesmo78396.setContext(context);
stavesmo78396.draw();
smo78396v0.draw(context, stavesmo78396);
smo78396v1.draw(context, stavesmo78396);
smo80239.setContext(context);
smo80239.draw();
smo80240.setContext(context);
smo80240.draw();
smo80241.setContext(context);
smo80241.draw();
smo80242.setContext(context);
smo80242.draw();
smo80243.setContext(context);
smo80243.draw();
smo80244.setContext(context);
smo80244.draw();
smo80245.setContext(context);
smo80245.draw();
const stavesmo78826 = new VF.Stave(103, 1466.0000000000002, 1022);
stavesmo78826.setAttribute('id', 'stavesmo78826');
stavesmo78826.setBegBarType(1);
stavesmo78826.setEndBarType(3);
stavesmo78826.addClef('bass');
stavesmo78826.setContext(context);
stavesmo78826.draw();
smo78826v0.draw(context, stavesmo78826);
smo78826v1.draw(context, stavesmo78826);
const leftsmo78840stavesmo783961 = new VF.StaveConnector(stavesmo78396, stavesmo78826).setType(3);
leftsmo78840stavesmo783961.setContext(context).draw();
// modifier from 0-7-0-9 to 0-7-0-10
const smo80388 = new VF.StaveTie({ first_note: smo78233, last_note: smo78234, 
          firstNote: smo78233, lastNote: smo78234, first_indices: [0], last_indices: [0]});
smo80388.setContext(context).draw();
// modifier from 0-7-0-12 to 0-7-0-13
const smo80389 = new VF.StaveTie({ first_note: smo78236, last_note: smo78238, 
          firstNote: smo78236, lastNote: smo78238, first_indices: [0], last_indices: [0]});
smo80389.setContext(context).draw();
// modifier from 0-7-0-15 to 0-7-0-16
const smo80390 = new VF.StaveTie({ first_note: smo78240, last_note: smo78242, 
          firstNote: smo78240, lastNote: smo78242, first_indices: [0], last_indices: [0]});
smo80390.setContext(context).draw();
// modifier from 0-8-0-9 to 0-8-0-10
const smo80391 = new VF.StaveTie({ first_note: smo78269, last_note: smo78270, 
          firstNote: smo78269, lastNote: smo78270, first_indices: [0], last_indices: [0]});
smo80391.setContext(context).draw();
// modifier from 0-8-0-12 to 0-8-0-13
const smo80392 = new VF.StaveTie({ first_note: smo78272, last_note: smo78274, 
          firstNote: smo78272, lastNote: smo78274, first_indices: [0], last_indices: [0]});
smo80392.setContext(context).draw();
// modifier from 0-9-0-1 to 0-9-0-2
const smo80393 = new VF.StaveTie({ first_note: smo78301, last_note: smo78302, 
          firstNote: smo78301, lastNote: smo78302, first_indices: [0], last_indices: [0]});
smo80393.setContext(context).draw();
// modifier from 0-9-0-10 to 0-9-0-11
const smo80394 = new VF.StaveTie({ first_note: smo78311, last_note: smo78312, 
          firstNote: smo78311, lastNote: smo78312, first_indices: [0], last_indices: [0]});
smo80394.setContext(context).draw();
// modifier from 0-9-0-20 to 0-9-0-21
const smo80395 = new VF.StaveTie({ first_note: smo78321, last_note: smo78322, 
          firstNote: smo78321, lastNote: smo78322, first_indices: [0], last_indices: [0]});
smo80395.setContext(context).draw();
// modifier from 0-10-0-5 to 0-10-0-6
const smo80396 = new VF.StaveTie({ first_note: smo78354, last_note: smo78355, 
          firstNote: smo78354, lastNote: smo78355, first_indices: [0], last_indices: [0]});
smo80396.setContext(context).draw();
// modifier from 0-10-0-15 to 0-10-0-16
const smo80397 = new VF.StaveTie({ first_note: smo78364, last_note: smo78365, 
          firstNote: smo78364, lastNote: smo78365, first_indices: [0], last_indices: [0]});
smo80397.setContext(context).draw();
// modifier from 0-10-0-21 to 0-10-0-22
const smo80398 = new VF.StaveTie({ first_note: smo78370, last_note: smo78371, 
          firstNote: smo78370, lastNote: smo78371, first_indices: [0], last_indices: [0]});
smo80398.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo80399 = new VF.Curve(smo78184, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo80399.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo80400 = new VF.Curve(null, smo78234, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo80400.setContext(context).draw();
// modifier from 0-8-0-0 to 0-8-0-10
const smo80401 = new VF.Curve(smo78260, smo78270, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":45},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo80401.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo80402 = new VF.Curve(smo78276, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo80402.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo80403 = new VF.Curve(null, smo78302, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo80403.setContext(context).draw();
// modifier from 0-9-0-5 to 0-9-0-11
const smo80404 = new VF.Curve(smo78306, smo78312, JSON.parse('{"thickness":2,"xShift":0,"yShift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo80404.setContext(context).draw();
// modifier from 0-9-0-13 to 0-9-0-21
const smo80405 = new VF.Curve(smo78314, smo78322, JSON.parse('{"thickness":2,"xShift":0,"yShift":13,"cps":[{"x":0,"y":30},{"x":0,"y":30}],"invert":true,"position":2,"positionEnd":2}'));
smo80405.setContext(context).draw();
}
// @@ Gnossienne No 3 p 1/2  by Erik Satie
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setFonts("Leland","Bravura","Gonville","Custom");
const fmtsmo756260 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo75626v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75626v0ar = [];
const smo75574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo75574.setAttribute('id', 'smo75574');
smo75626v0ar.push(smo75574);
const smo75576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo75576.setAttribute('id', 'smo75576');
smo75626v0ar.push(smo75576);
const smo75577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75577.setAttribute('id', 'smo75577');
const smo755770acc = new VF.Accidental('#');
smo75577.addModifier(smo755770acc, 0);
smo75626v0ar.push(smo75577);
const smo75578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75578.setAttribute('id', 'smo75578');
smo75626v0ar.push(smo75578);
const smo75579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75579.setAttribute('id', 'smo75579');
const smo755790acc = new VF.Accidental('#');
smo75579.addModifier(smo755790acc, 0);
smo75626v0ar.push(smo75579);
const smo75580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75580.setAttribute('id', 'smo75580');
smo75626v0ar.push(smo75580);
const smo75581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75581.setAttribute('id', 'smo75581');
smo75626v0ar.push(smo75581);
const smo75582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75582.setAttribute('id', 'smo75582');
smo75626v0ar.push(smo75582);
const smo75583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo75583.setAttribute('id', 'smo75583');
smo75626v0ar.push(smo75583);
const smo75584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo75584.setAttribute('id', 'smo75584');
smo75626v0ar.push(smo75584);
const smo75585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75585.setAttribute('id', 'smo75585');
smo75626v0ar.push(smo75585);
const smo75586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75586.setAttribute('id', 'smo75586');
smo75626v0ar.push(smo75586);
const smo75587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75587.setAttribute('id', 'smo75587');
smo75626v0ar.push(smo75587);
const smo75588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75588.setAttribute('id', 'smo75588');
smo75626v0ar.push(smo75588);
const smo75589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75589.setAttribute('id', 'smo75589');
smo75626v0ar.push(smo75589);
const smo75590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75590.setAttribute('id', 'smo75590');
smo75626v0ar.push(smo75590);
const smo75591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75591.setAttribute('id', 'smo75591');
smo75626v0ar.push(smo75591);
const smo75592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75592.setAttribute('id', 'smo75592');
smo75626v0ar.push(smo75592);
const smo75593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75593.setAttribute('id', 'smo75593');
smo75626v0ar.push(smo75593);
const smo75594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo75594.setAttribute('id', 'smo75594');
smo75626v0ar.push(smo75594);
const smo75595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo75595.setAttribute('id', 'smo75595');
smo75626v0ar.push(smo75595);
const smo75596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75596.setAttribute('id', 'smo75596');
smo75626v0ar.push(smo75596);
const smo75597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75597.setAttribute('id', 'smo75597');
smo75626v0ar.push(smo75597);
const smo75598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75598.setAttribute('id', 'smo75598');
smo75626v0ar.push(smo75598);
const smo75599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75599.setAttribute('id', 'smo75599');
smo75626v0ar.push(smo75599);
const smo75600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo75600.setAttribute('id', 'smo75600');
smo75626v0ar.push(smo75600);
smo75626v0.addTickables(smo75626v0ar)
fmtsmo756260.joinVoices([smo75626v0]);
const smo75626v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75626v1ar = [];
const smo75601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75601.setAttribute('id', 'smo75601');
smo75601.setStyle({ fillStyle: '#aaaaaa7f' });
smo75626v1ar.push(smo75601);
const smo75602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75602.setAttribute('id', 'smo75602');
smo75602.setStyle({ fillStyle: "#115511" });
smo75626v1ar.push(smo75602);
const smo75603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75603.setAttribute('id', 'smo75603');
smo75603.setStyle({ fillStyle: "#115511" });
smo75626v1ar.push(smo75603);
const smo75604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75604.setAttribute('id', 'smo75604');
smo75604.setStyle({ fillStyle: '#aaaaaa7f' });
smo75626v1ar.push(smo75604);
const smo75605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75605.setAttribute('id', 'smo75605');
smo75605.setStyle({ fillStyle: "#115511" });
smo75626v1ar.push(smo75605);
const smo75606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75606.setAttribute('id', 'smo75606');
smo75606.setStyle({ fillStyle: "#115511" });
smo75626v1ar.push(smo75606);
const smo75607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75607.setAttribute('id', 'smo75607');
smo75607.setStyle({ fillStyle: '#aaaaaa7f' });
smo75626v1ar.push(smo75607);
const smo75608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75608.setAttribute('id', 'smo75608');
smo75608.setStyle({ fillStyle: '#aaaaaa7f' });
smo75626v1ar.push(smo75608);
const smo75609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75609.setAttribute('id', 'smo75609');
smo75609.setStyle({ fillStyle: "#115511" });
smo75626v1ar.push(smo75609);
const smo75610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75610.setAttribute('id', 'smo75610');
smo75610.setStyle({ fillStyle: "#115511" });
smo75626v1ar.push(smo75610);
smo75626v1.addTickables(smo75626v1ar)
fmtsmo756260.joinVoices([smo75626v1]);
const fmtsmo761330 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo76133v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76133v0ar = [];
const smo76101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76101.setAttribute('id', 'smo76101');
smo76133v0ar.push(smo76101);
const smo76102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76102.setAttribute('id', 'smo76102');
smo76102.setStyle({ fillStyle: '#aaaaaa7f' });
smo76102.addModifier(new VF.Dot(), 0);
smo76133v0ar.push(smo76102);
const smo76103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76103.setAttribute('id', 'smo76103');
smo76133v0ar.push(smo76103);
const smo76104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76104.setAttribute('id', 'smo76104');
smo76104.setStyle({ fillStyle: '#aaaaaa7f' });
smo76104.addModifier(new VF.Dot(), 0);
smo76133v0ar.push(smo76104);
const smo76105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76105.setAttribute('id', 'smo76105');
smo76133v0ar.push(smo76105);
const smo76106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76106.setAttribute('id', 'smo76106');
smo76133v0ar.push(smo76106);
const smo76107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76107.setAttribute('id', 'smo76107');
smo76133v0ar.push(smo76107);
const smo76108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76108.setAttribute('id', 'smo76108');
smo76133v0ar.push(smo76108);
const smo76109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76109.setAttribute('id', 'smo76109');
smo76133v0ar.push(smo76109);
const smo76110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76110.setAttribute('id', 'smo76110');
smo76133v0ar.push(smo76110);
const smo76111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76111.setAttribute('id', 'smo76111');
smo76133v0ar.push(smo76111);
const smo76112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76112.setAttribute('id', 'smo76112');
smo76112.setStyle({ fillStyle: '#aaaaaa7f' });
smo76112.addModifier(new VF.Dot(), 0);
smo76133v0ar.push(smo76112);
smo76133v0.addTickables(smo76133v0ar)
fmtsmo761330.joinVoices([smo76133v0]);
const smo76133v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76133v1ar = [];
const smo76113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76113.setAttribute('id', 'smo76113');
smo76113.setStyle({ fillStyle: "#115511" });
smo76133v1ar.push(smo76113);
const smo76114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76114.setAttribute('id', 'smo76114');
smo76114.setStyle({ fillStyle: "#115511" });
smo76133v1ar.push(smo76114);
const smo76115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76115.setAttribute('id', 'smo76115');
smo76115.setStyle({ fillStyle: "#115511" });
smo76133v1ar.push(smo76115);
const smo76116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76116.setAttribute('id', 'smo76116');
smo76116.setStyle({ fillStyle: "#115511" });
smo76133v1ar.push(smo76116);
const smo76117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76117.setAttribute('id', 'smo76117');
smo76117.setStyle({ fillStyle: "#115511" });
smo76133v1ar.push(smo76117);
smo76133v1.addTickables(smo76133v1ar)
fmtsmo761330.joinVoices([smo76133v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77702 = smo75574.getStemDirection();
smo75574.setStemDirection(dirsmo77702);
smo75576.setStemDirection(dirsmo77702);
smo75577.setStemDirection(dirsmo77702);
smo75578.setStemDirection(dirsmo77702);
const smo77702 = new VF.Beam([smo75574,smo75576,smo75577,smo75578]);
const dirsmo77703 = smo75579.getStemDirection();
smo75579.setStemDirection(dirsmo77703);
smo75580.setStemDirection(dirsmo77703);
const smo77703 = new VF.Beam([smo75579,smo75580]);
const dirsmo77704 = smo75583.getStemDirection();
smo75583.setStemDirection(dirsmo77704);
smo75584.setStemDirection(dirsmo77704);
const smo77704 = new VF.Beam([smo75583,smo75584]);
const dirsmo77705 = smo75585.getStemDirection();
smo75585.setStemDirection(dirsmo77705);
smo75586.setStemDirection(dirsmo77705);
smo75587.setStemDirection(dirsmo77705);
smo75588.setStemDirection(dirsmo77705);
const smo77705 = new VF.Beam([smo75585,smo75586,smo75587,smo75588]);
const dirsmo77706 = smo75589.getStemDirection();
smo75589.setStemDirection(dirsmo77706);
smo75590.setStemDirection(dirsmo77706);
const smo77706 = new VF.Beam([smo75589,smo75590]);
const dirsmo77707 = smo75594.getStemDirection();
smo75594.setStemDirection(dirsmo77707);
smo75595.setStemDirection(dirsmo77707);
smo75596.setStemDirection(dirsmo77707);
smo75597.setStemDirection(dirsmo77707);
const smo77707 = new VF.Beam([smo75594,smo75595,smo75596,smo75597]);
const dirsmo77708 = smo75598.getStemDirection();
smo75598.setStemDirection(dirsmo77708);
smo75599.setStemDirection(dirsmo77708);
const smo77708 = new VF.Beam([smo75598,smo75599]);
 
// formatting measures in staff group smo76498
fmtsmo756260.format([smo75626v0,smo75626v1,smo76133v0,smo76133v1], 1102);
const stavesmo75626 = new VF.Stave(103, 187, 1174);
stavesmo75626.setAttribute('id', 'stavesmo75626');
stavesmo75626.setBegBarType(1);
stavesmo75626.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo75626.addClef('treble');
stavesmo75626.addTimeSignature('4/4');
stavesmo75626.setContext(context);
stavesmo75626.draw();
smo75626v0.draw(context, stavesmo75626);
smo75626v1.draw(context, stavesmo75626);
smo77702.setContext(context);
smo77702.draw();
smo77703.setContext(context);
smo77703.draw();
smo77704.setContext(context);
smo77704.draw();
smo77705.setContext(context);
smo77705.draw();
smo77706.setContext(context);
smo77706.draw();
smo77707.setContext(context);
smo77707.draw();
smo77708.setContext(context);
smo77708.draw();
const stavesmo76133 = new VF.Stave(103, 332, 1174);
stavesmo76133.setAttribute('id', 'stavesmo76133');
stavesmo76133.setBegBarType(1);
stavesmo76133.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo76133.addClef('bass');
stavesmo76133.addTimeSignature('4/4');
stavesmo76133.setContext(context);
stavesmo76133.draw();
smo76133v0.draw(context, stavesmo76133);
smo76133v1.draw(context, stavesmo76133);
const leftsmo76498stavesmo756261 = new VF.StaveConnector(stavesmo75626, stavesmo76133).setType(3);
leftsmo76498stavesmo756261.setContext(context).draw();
const fmtsmo756711 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo75671v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75671v0ar = [];
const smo75627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75627.setAttribute('id', 'smo75627');
smo75671v0ar.push(smo75627);
const smo75628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo75628.setAttribute('id', 'smo75628');
smo75671v0ar.push(smo75628);
const smo75629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo75629.setAttribute('id', 'smo75629');
smo75671v0ar.push(smo75629);
const smo75630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75630.setAttribute('id', 'smo75630');
const smo756300acc = new VF.Accidental('#');
smo75630.addModifier(smo756300acc, 0);
smo75671v0ar.push(smo75630);
const smo75631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo75631.setAttribute('id', 'smo75631');
smo75671v0ar.push(smo75631);
const smo75632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75632.setAttribute('id', 'smo75632');
smo75671v0ar.push(smo75632);
const smo75633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75633.setAttribute('id', 'smo75633');
smo75671v0ar.push(smo75633);
const smo75634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75634.setAttribute('id', 'smo75634');
smo75671v0ar.push(smo75634);
const smo75635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75635.setAttribute('id', 'smo75635');
smo75671v0ar.push(smo75635);
const smo75636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75636.setAttribute('id', 'smo75636');
smo75671v0ar.push(smo75636);
const smo75637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75637.setAttribute('id', 'smo75637');
smo75671v0ar.push(smo75637);
const smo75638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
const smo75639 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo75639.setAttribute('id', 'smo75639');
const ggrpsmo75638 = new VF.GraceNoteGroup([smo75639]);
ggrpsmo75638.beamNotes();
smo75638.addModifier(ggrpsmo75638, 0);
smo75638.setAttribute('id', 'smo75638');
const smo756380acc = new VF.Accidental('n');
smo75638.addModifier(smo756380acc, 0);
smo75671v0ar.push(smo75638);
const smo75640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75640.setAttribute('id', 'smo75640');
smo75671v0ar.push(smo75640);
const smo75641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75641.setAttribute('id', 'smo75641');
smo75671v0ar.push(smo75641);
const smo75642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75642.setAttribute('id', 'smo75642');
smo75671v0ar.push(smo75642);
const smo75643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75643.setAttribute('id', 'smo75643');
smo75671v0ar.push(smo75643);
const smo75644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo75644.setAttribute('id', 'smo75644');
smo75671v0ar.push(smo75644);
const smo75645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75645.setAttribute('id', 'smo75645');
smo75671v0ar.push(smo75645);
const smo75646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75646.setAttribute('id', 'smo75646');
smo75671v0ar.push(smo75646);
const smo75647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75647.setAttribute('id', 'smo75647');
smo75671v0ar.push(smo75647);
const smo75648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75648.setAttribute('id', 'smo75648');
smo75671v0ar.push(smo75648);
const smo75649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo75650 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo75650.setAttribute('id', 'smo75650');
const ggrpsmo75649 = new VF.GraceNoteGroup([smo75650]);
ggrpsmo75649.beamNotes();
smo75649.addModifier(ggrpsmo75649, 0);
smo75649.setAttribute('id', 'smo75649');
smo75671v0ar.push(smo75649);
smo75671v0.addTickables(smo75671v0ar)
fmtsmo756711.joinVoices([smo75671v0]);
const smo75671v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75671v1ar = [];
const smo75651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75651.setAttribute('id', 'smo75651');
smo75651.setStyle({ fillStyle: '#aaaaaa7f' });
smo75671v1ar.push(smo75651);
const smo75652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75652.setAttribute('id', 'smo75652');
smo75652.setStyle({ fillStyle: "#115511" });
smo75671v1ar.push(smo75652);
const smo75653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo75653.setAttribute('id', 'smo75653');
smo75653.setStyle({ fillStyle: "#115511" });
smo75671v1ar.push(smo75653);
const smo75654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75654.setAttribute('id', 'smo75654');
smo75654.setStyle({ fillStyle: '#aaaaaa7f' });
smo75654.addModifier(new VF.Dot(), 0);
smo75654.addModifier(new VF.Dot(), 0);
smo75654.addModifier(new VF.Dot(), 0);
smo75654.addModifier(new VF.Dot(), 0);
smo75671v1ar.push(smo75654);
const smo75655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75655.setAttribute('id', 'smo75655');
smo75655.setStyle({ fillStyle: '#aaaaaa7f' });
smo75671v1ar.push(smo75655);
smo75671v1.addTickables(smo75671v1ar)
fmtsmo756711.joinVoices([smo75671v1]);
const fmtsmo761681 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo76168v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76168v0ar = [];
const smo76134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76134.setAttribute('id', 'smo76134');
smo76168v0ar.push(smo76134);
const smo76135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76135.setAttribute('id', 'smo76135');
smo76135.setStyle({ fillStyle: '#aaaaaa7f' });
smo76135.addModifier(new VF.Dot(), 0);
smo76168v0ar.push(smo76135);
const smo76136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76136.setAttribute('id', 'smo76136');
smo76168v0ar.push(smo76136);
const smo76137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76137.setAttribute('id', 'smo76137');
smo76168v0ar.push(smo76137);
const smo76138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76138.setAttribute('id', 'smo76138');
smo76168v0ar.push(smo76138);
const smo76139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76139.setAttribute('id', 'smo76139');
smo76168v0ar.push(smo76139);
const smo76140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76140.setAttribute('id', 'smo76140');
smo76168v0ar.push(smo76140);
const smo76141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76141.setAttribute('id', 'smo76141');
smo76168v0ar.push(smo76141);
const smo76142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76142.setAttribute('id', 'smo76142');
smo76168v0ar.push(smo76142);
const smo76143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo76143.setAttribute('id', 'smo76143');
const smo761430acc = new VF.Accidental('#');
smo76143.addModifier(smo761430acc, 0);
smo76168v0ar.push(smo76143);
const smo76144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo76144.setAttribute('id', 'smo76144');
smo76168v0ar.push(smo76144);
const smo76145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76145.setAttribute('id', 'smo76145');
smo76168v0ar.push(smo76145);
const smo76146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76146.setAttribute('id', 'smo76146');
smo76168v0ar.push(smo76146);
const smo76147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76147.setAttribute('id', 'smo76147');
smo76168v0ar.push(smo76147);
smo76168v0.addTickables(smo76168v0ar)
fmtsmo761681.joinVoices([smo76168v0]);
const smo76168v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76168v1ar = [];
const smo76148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76148.setAttribute('id', 'smo76148');
smo76148.setStyle({ fillStyle: "#115511" });
smo76168v1ar.push(smo76148);
const smo76149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76149.setAttribute('id', 'smo76149');
smo76149.setStyle({ fillStyle: "#115511" });
smo76168v1ar.push(smo76149);
const smo76150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76150.setAttribute('id', 'smo76150');
smo76150.setStyle({ fillStyle: "#115511" });
smo76168v1ar.push(smo76150);
const smo76151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76151.setAttribute('id', 'smo76151');
smo76151.setStyle({ fillStyle: "#115511" });
smo76168v1ar.push(smo76151);
const smo76152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76152.setAttribute('id', 'smo76152');
smo76152.setStyle({ fillStyle: "#115511" });
smo76168v1ar.push(smo76152);
smo76168v1.addTickables(smo76168v1ar)
fmtsmo761681.joinVoices([smo76168v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77723 = smo75628.getStemDirection();
smo75628.setStemDirection(dirsmo77723);
smo75629.setStemDirection(dirsmo77723);
const smo77723 = new VF.Beam([smo75628,smo75629]);
const dirsmo77724 = smo75630.getStemDirection();
smo75630.setStemDirection(dirsmo77724);
smo75631.setStemDirection(dirsmo77724);
smo75632.setStemDirection(dirsmo77724);
smo75633.setStemDirection(dirsmo77724);
const smo77724 = new VF.Beam([smo75630,smo75631,smo75632,smo75633]);
const dirsmo77725 = smo75634.getStemDirection();
smo75634.setStemDirection(dirsmo77725);
smo75635.setStemDirection(dirsmo77725);
const smo77725 = new VF.Beam([smo75634,smo75635]);
const dirsmo77726 = smo75640.getStemDirection();
smo75640.setStemDirection(dirsmo77726);
smo75641.setStemDirection(dirsmo77726);
const smo77726 = new VF.Beam([smo75640,smo75641]);
const dirsmo77727 = smo75642.getStemDirection();
smo75642.setStemDirection(dirsmo77727);
smo75643.setStemDirection(dirsmo77727);
const smo77727 = new VF.Beam([smo75642,smo75643]);
const dirsmo77728 = smo75645.getStemDirection();
smo75645.setStemDirection(dirsmo77728);
smo75646.setStemDirection(dirsmo77728);
const smo77728 = new VF.Beam([smo75645,smo75646]);
 
// formatting measures in staff group smo76498
fmtsmo756711.format([smo75671v0,smo75671v1,smo76168v0,smo76168v1], 1123);
const stavesmo75671 = new VF.Stave(103, 492, 1173);
stavesmo75671.setAttribute('id', 'stavesmo75671');
stavesmo75671.setBegBarType(1);
stavesmo75671.addClef('treble');
stavesmo75671.setContext(context);
stavesmo75671.draw();
smo75671v0.draw(context, stavesmo75671);
smo75671v1.draw(context, stavesmo75671);
smo77723.setContext(context);
smo77723.draw();
smo77724.setContext(context);
smo77724.draw();
smo77725.setContext(context);
smo77725.draw();
smo77726.setContext(context);
smo77726.draw();
smo77727.setContext(context);
smo77727.draw();
smo77728.setContext(context);
smo77728.draw();
const stavesmo76168 = new VF.Stave(103, 640, 1173);
stavesmo76168.setAttribute('id', 'stavesmo76168');
stavesmo76168.setBegBarType(1);
stavesmo76168.addClef('bass');
stavesmo76168.setContext(context);
stavesmo76168.draw();
smo76168v0.draw(context, stavesmo76168);
smo76168v1.draw(context, stavesmo76168);
const leftsmo76498stavesmo756711 = new VF.StaveConnector(stavesmo75671, stavesmo76168).setType(3);
leftsmo76498stavesmo756711.setContext(context).draw();
const fmtsmo757162 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo75716v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75716v0ar = [];
const smo75672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75672.setAttribute('id', 'smo75672');
smo75716v0ar.push(smo75672);
const smo75673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75673.setAttribute('id', 'smo75673');
smo75716v0ar.push(smo75673);
const smo75674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75674.setAttribute('id', 'smo75674');
smo75716v0ar.push(smo75674);
const smo75675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75675.setAttribute('id', 'smo75675');
smo75716v0ar.push(smo75675);
const smo75676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75676.setAttribute('id', 'smo75676');
smo75716v0ar.push(smo75676);
const smo75677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75677.setAttribute('id', 'smo75677');
smo75716v0ar.push(smo75677);
const smo75678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75678.setAttribute('id', 'smo75678');
smo75716v0ar.push(smo75678);
const smo75679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo75679.setAttribute('id', 'smo75679');
const smo756790acc = new VF.Accidental('#');
smo75679.addModifier(smo756790acc, 0);
smo75716v0ar.push(smo75679);
const smo75680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo75680.setAttribute('id', 'smo75680');
smo75716v0ar.push(smo75680);
const smo75681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75681.setAttribute('id', 'smo75681');
smo75716v0ar.push(smo75681);
const smo75682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75682.setAttribute('id', 'smo75682');
smo75716v0ar.push(smo75682);
const smo75683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75683.setAttribute('id', 'smo75683');
smo75716v0ar.push(smo75683);
const smo75684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo75684.setAttribute('id', 'smo75684');
smo75716v0ar.push(smo75684);
const smo75685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo75685.setAttribute('id', 'smo75685');
smo75716v0ar.push(smo75685);
const smo75686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo75686.setAttribute('id', 'smo75686');
smo75716v0ar.push(smo75686);
const smo75687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75687.setAttribute('id', 'smo75687');
smo75716v0ar.push(smo75687);
const smo75688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75688.setAttribute('id', 'smo75688');
smo75716v0ar.push(smo75688);
const smo75689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75689.setAttribute('id', 'smo75689');
smo75716v0ar.push(smo75689);
const smo75690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo75690.setAttribute('id', 'smo75690');
smo75716v0ar.push(smo75690);
const smo75691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo75691.setAttribute('id', 'smo75691');
smo75716v0ar.push(smo75691);
const smo75692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo75692.setAttribute('id', 'smo75692');
smo75716v0ar.push(smo75692);
const smo75693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75693.setAttribute('id', 'smo75693');
smo75716v0ar.push(smo75693);
const smo75694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75694.setAttribute('id', 'smo75694');
smo75716v0ar.push(smo75694);
const smo75695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo75695.setAttribute('id', 'smo75695');
smo75716v0ar.push(smo75695);
const smo75696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo75696.setAttribute('id', 'smo75696');
smo75716v0ar.push(smo75696);
const smo75697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo75697.setAttribute('id', 'smo75697');
smo75716v0ar.push(smo75697);
const smo75698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo75698.setAttribute('id', 'smo75698');
smo75716v0ar.push(smo75698);
const smo75699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo75699.setAttribute('id', 'smo75699');
smo75716v0ar.push(smo75699);
const smo75700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75700.setAttribute('id', 'smo75700');
smo75716v0ar.push(smo75700);
smo75716v0.addTickables(smo75716v0ar)
fmtsmo757162.joinVoices([smo75716v0]);
const fmtsmo762002 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo76200v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76200v0ar = [];
const smo76169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76169.setAttribute('id', 'smo76169');
smo76200v0ar.push(smo76169);
const smo76170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76170.setAttribute('id', 'smo76170');
smo76200v0ar.push(smo76170);
const smo76171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76171.setAttribute('id', 'smo76171');
smo76200v0ar.push(smo76171);
const smo76172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76172.setAttribute('id', 'smo76172');
smo76200v0ar.push(smo76172);
const smo76173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76173.setAttribute('id', 'smo76173');
smo76200v0ar.push(smo76173);
const smo76174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76174.setAttribute('id', 'smo76174');
smo76200v0ar.push(smo76174);
const smo76175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76175.setAttribute('id', 'smo76175');
smo76200v0ar.push(smo76175);
const smo76176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76176.setAttribute('id', 'smo76176');
smo76200v0ar.push(smo76176);
const smo76177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo76177.setAttribute('id', 'smo76177');
smo76200v0ar.push(smo76177);
const smo76178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76178.setAttribute('id', 'smo76178');
smo76200v0ar.push(smo76178);
const smo76179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76179.setAttribute('id', 'smo76179');
smo76200v0ar.push(smo76179);
const smo76180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76180.setAttribute('id', 'smo76180');
smo76200v0ar.push(smo76180);
smo76200v0.addTickables(smo76200v0ar)
fmtsmo762002.joinVoices([smo76200v0]);
const smo76200v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76200v1ar = [];
const smo76181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76181.setAttribute('id', 'smo76181');
smo76181.setStyle({ fillStyle: "#115511" });
smo76200v1ar.push(smo76181);
const smo76182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76182.setAttribute('id', 'smo76182');
smo76182.setStyle({ fillStyle: "#115511" });
smo76200v1ar.push(smo76182);
const smo76183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo76183.setAttribute('id', 'smo76183');
smo76183.setStyle({ fillStyle: "#115511" });
smo76200v1ar.push(smo76183);
const smo76184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo76184.setAttribute('id', 'smo76184');
smo76184.setStyle({ fillStyle: "#115511" });
smo76200v1ar.push(smo76184);
smo76200v1.addTickables(smo76200v1ar)
fmtsmo762002.joinVoices([smo76200v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77744 = smo75673.getStemDirection();
smo75673.setStemDirection(dirsmo77744);
smo75674.setStemDirection(dirsmo77744);
const smo77744 = new VF.Beam([smo75673,smo75674]);
const dirsmo77745 = smo75675.getStemDirection();
smo75675.setStemDirection(dirsmo77745);
smo75676.setStemDirection(dirsmo77745);
smo75677.setStemDirection(dirsmo77745);
smo75678.setStemDirection(dirsmo77745);
const smo77745 = new VF.Beam([smo75675,smo75676,smo75677,smo75678]);
const dirsmo77746 = smo75679.getStemDirection();
smo75679.setStemDirection(dirsmo77746);
smo75680.setStemDirection(dirsmo77746);
smo75681.setStemDirection(dirsmo77746);
smo75682.setStemDirection(dirsmo77746);
const smo77746 = new VF.Beam([smo75679,smo75680,smo75681,smo75682]);
const dirsmo77747 = smo75683.getStemDirection();
smo75683.setStemDirection(dirsmo77747);
smo75684.setStemDirection(dirsmo77747);
smo75685.setStemDirection(dirsmo77747);
smo75686.setStemDirection(dirsmo77747);
const smo77747 = new VF.Beam([smo75683,smo75684,smo75685,smo75686]);
const dirsmo77748 = smo75687.getStemDirection();
smo75687.setStemDirection(dirsmo77748);
smo75688.setStemDirection(dirsmo77748);
smo75689.setStemDirection(dirsmo77748);
smo75690.setStemDirection(dirsmo77748);
const smo77748 = new VF.Beam([smo75687,smo75688,smo75689,smo75690]);
const dirsmo77749 = smo75691.getStemDirection();
smo75691.setStemDirection(dirsmo77749);
smo75692.setStemDirection(dirsmo77749);
smo75693.setStemDirection(dirsmo77749);
smo75694.setStemDirection(dirsmo77749);
const smo77749 = new VF.Beam([smo75691,smo75692,smo75693,smo75694]);
const dirsmo77750 = smo75695.getStemDirection();
smo75695.setStemDirection(dirsmo77750);
smo75696.setStemDirection(dirsmo77750);
smo75697.setStemDirection(dirsmo77750);
smo75698.setStemDirection(dirsmo77750);
const smo77750 = new VF.Beam([smo75695,smo75696,smo75697,smo75698]);
 
// formatting measures in staff group smo76498
fmtsmo757162.format([smo75716v0,smo76200v0,smo76200v1], 1123);
const stavesmo75716 = new VF.Stave(103, 770, 1173);
stavesmo75716.setAttribute('id', 'stavesmo75716');
stavesmo75716.setBegBarType(1);
stavesmo75716.addClef('treble');
stavesmo75716.setContext(context);
stavesmo75716.draw();
smo75716v0.draw(context, stavesmo75716);
smo77744.setContext(context);
smo77744.draw();
smo77745.setContext(context);
smo77745.draw();
smo77746.setContext(context);
smo77746.draw();
smo77747.setContext(context);
smo77747.draw();
smo77748.setContext(context);
smo77748.draw();
smo77749.setContext(context);
smo77749.draw();
smo77750.setContext(context);
smo77750.draw();
const stavesmo76200 = new VF.Stave(103, 898, 1173);
stavesmo76200.setAttribute('id', 'stavesmo76200');
stavesmo76200.setBegBarType(1);
stavesmo76200.addClef('bass');
stavesmo76200.setContext(context);
stavesmo76200.draw();
smo76200v0.draw(context, stavesmo76200);
smo76200v1.draw(context, stavesmo76200);
const leftsmo76498stavesmo757161 = new VF.StaveConnector(stavesmo75716, stavesmo76200).setType(3);
leftsmo76498stavesmo757161.setContext(context).draw();
const fmtsmo757523 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo75752v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75752v0ar = [];
const smo75717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75717.setAttribute('id', 'smo75717');
smo75752v0ar.push(smo75717);
const smo75718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75718.setAttribute('id', 'smo75718');
smo75752v0ar.push(smo75718);
const smo75719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75719.setAttribute('id', 'smo75719');
smo75752v0ar.push(smo75719);
const smo75720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75720.setAttribute('id', 'smo75720');
const smo757200acc = new VF.Accidental('#');
smo75720.addModifier(smo757200acc, 0);
smo75752v0ar.push(smo75720);
const smo75721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75721.setAttribute('id', 'smo75721');
smo75752v0ar.push(smo75721);
const smo75722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75722.setAttribute('id', 'smo75722');
const smo757220acc = new VF.Accidental('#');
smo75722.addModifier(smo757220acc, 0);
smo75752v0ar.push(smo75722);
const smo75723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75723.setAttribute('id', 'smo75723');
smo75752v0ar.push(smo75723);
const smo75724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75724.setAttribute('id', 'smo75724');
smo75752v0ar.push(smo75724);
const smo75725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75725.setAttribute('id', 'smo75725');
smo75752v0ar.push(smo75725);
const smo75726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75726.setAttribute('id', 'smo75726');
smo75752v0ar.push(smo75726);
const smo75727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75727.setAttribute('id', 'smo75727');
smo75752v0ar.push(smo75727);
const smo75728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75728.setAttribute('id', 'smo75728');
smo75752v0ar.push(smo75728);
const smo75729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75729.setAttribute('id', 'smo75729');
smo75752v0ar.push(smo75729);
const smo75730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75730.setAttribute('id', 'smo75730');
smo75752v0ar.push(smo75730);
const smo75731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75731.setAttribute('id', 'smo75731');
smo75752v0ar.push(smo75731);
const smo75732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75732.setAttribute('id', 'smo75732');
const smo757320acc = new VF.Accidental('#');
smo75732.addModifier(smo757320acc, 0);
smo75752v0ar.push(smo75732);
const smo75733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75733.setAttribute('id', 'smo75733');
smo75752v0ar.push(smo75733);
const smo75734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75734.setAttribute('id', 'smo75734');
smo75752v0ar.push(smo75734);
const smo75735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75735.setAttribute('id', 'smo75735');
smo75752v0ar.push(smo75735);
const smo75736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75736.setAttribute('id', 'smo75736');
smo75752v0ar.push(smo75736);
smo75752v0.addTickables(smo75752v0ar)
fmtsmo757523.joinVoices([smo75752v0]);
const fmtsmo762363 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo76236v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76236v0ar = [];
const smo76201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76201.setAttribute('id', 'smo76201');
smo76236v0ar.push(smo76201);
const smo76202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76202.setAttribute('id', 'smo76202');
smo76236v0ar.push(smo76202);
const smo76203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo76203.setAttribute('id', 'smo76203');
smo76236v0ar.push(smo76203);
const smo76204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76204.setAttribute('id', 'smo76204');
smo76236v0ar.push(smo76204);
const smo76205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76205.setAttribute('id', 'smo76205');
smo76236v0ar.push(smo76205);
const smo76206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76206.setAttribute('id', 'smo76206');
smo76236v0ar.push(smo76206);
const smo76207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76207.setAttribute('id', 'smo76207');
smo76236v0ar.push(smo76207);
const smo76208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76208.setAttribute('id', 'smo76208');
smo76236v0ar.push(smo76208);
const smo76209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76209.setAttribute('id', 'smo76209');
smo76236v0ar.push(smo76209);
const smo76210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76210.setAttribute('id', 'smo76210');
smo76236v0ar.push(smo76210);
const smo76211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76211.setAttribute('id', 'smo76211');
const smo762110acc = new VF.Accidental('#');
smo76211.addModifier(smo762110acc, 0);
smo76236v0ar.push(smo76211);
const smo76212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76212.setAttribute('id', 'smo76212');
smo76236v0ar.push(smo76212);
const smo76213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76213.setAttribute('id', 'smo76213');
smo76236v0ar.push(smo76213);
const smo76214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76214.setAttribute('id', 'smo76214');
smo76236v0ar.push(smo76214);
const smo76215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76215.setAttribute('id', 'smo76215');
smo76236v0ar.push(smo76215);
smo76236v0.addTickables(smo76236v0ar)
fmtsmo762363.joinVoices([smo76236v0]);
const smo76236v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76236v1ar = [];
const smo76216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo76216.setAttribute('id', 'smo76216');
smo76216.setStyle({ fillStyle: "#115511" });
smo76236v1ar.push(smo76216);
const smo76217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76217.setAttribute('id', 'smo76217');
smo76217.setStyle({ fillStyle: "#115511" });
smo76236v1ar.push(smo76217);
const smo76218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76218.setAttribute('id', 'smo76218');
smo76218.setStyle({ fillStyle: "#115511" });
smo76236v1ar.push(smo76218);
const smo76219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo76219.setAttribute('id', 'smo76219');
smo76219.setStyle({ fillStyle: "#115511" });
smo76236v1ar.push(smo76219);
const smo76220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo76220.setAttribute('id', 'smo76220');
smo76220.setStyle({ fillStyle: "#115511" });
smo76236v1ar.push(smo76220);
smo76236v1.addTickables(smo76236v1ar)
fmtsmo762363.joinVoices([smo76236v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77764 = smo75718.getStemDirection();
smo75718.setStemDirection(dirsmo77764);
smo75719.setStemDirection(dirsmo77764);
smo75720.setStemDirection(dirsmo77764);
smo75721.setStemDirection(dirsmo77764);
const smo77764 = new VF.Beam([smo75718,smo75719,smo75720,smo75721]);
const dirsmo77765 = smo75722.getStemDirection();
smo75722.setStemDirection(dirsmo77765);
smo75723.setStemDirection(dirsmo77765);
const smo77765 = new VF.Beam([smo75722,smo75723]);
const dirsmo77766 = smo75726.getStemDirection();
smo75726.setStemDirection(dirsmo77766);
smo75727.setStemDirection(dirsmo77766);
const smo77766 = new VF.Beam([smo75726,smo75727]);
const dirsmo77767 = smo75728.getStemDirection();
smo75728.setStemDirection(dirsmo77767);
smo75729.setStemDirection(dirsmo77767);
smo75730.setStemDirection(dirsmo77767);
smo75731.setStemDirection(dirsmo77767);
const smo77767 = new VF.Beam([smo75728,smo75729,smo75730,smo75731]);
const dirsmo77768 = smo75732.getStemDirection();
smo75732.setStemDirection(dirsmo77768);
smo75733.setStemDirection(dirsmo77768);
const smo77768 = new VF.Beam([smo75732,smo75733]);
 
// formatting measures in staff group smo76498
fmtsmo757523.format([smo75752v0,smo76236v0,smo76236v1], 1123);
const stavesmo75752 = new VF.Stave(103, 1037, 1174);
stavesmo75752.setAttribute('id', 'stavesmo75752');
stavesmo75752.setBegBarType(1);
stavesmo75752.addClef('treble');
stavesmo75752.setContext(context);
stavesmo75752.draw();
smo75752v0.draw(context, stavesmo75752);
smo77764.setContext(context);
smo77764.draw();
smo77765.setContext(context);
smo77765.draw();
smo77766.setContext(context);
smo77766.draw();
smo77767.setContext(context);
smo77767.draw();
smo77768.setContext(context);
smo77768.draw();
const stavesmo76236 = new VF.Stave(103, 1166, 1174);
stavesmo76236.setAttribute('id', 'stavesmo76236');
stavesmo76236.setBegBarType(1);
stavesmo76236.addClef('bass');
stavesmo76236.setContext(context);
stavesmo76236.draw();
smo76236v0.draw(context, stavesmo76236);
smo76236v1.draw(context, stavesmo76236);
const leftsmo76498stavesmo757521 = new VF.StaveConnector(stavesmo75752, stavesmo76236).setType(3);
leftsmo76498stavesmo757521.setContext(context).draw();
const fmtsmo757964 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo75796v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75796v0ar = [];
const smo75753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75753.setAttribute('id', 'smo75753');
smo75796v0ar.push(smo75753);
const smo75754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75754.setAttribute('id', 'smo75754');
smo75796v0ar.push(smo75754);
const smo75755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75755.setAttribute('id', 'smo75755');
const smo757550acc = new VF.Accidental('#');
smo75755.addModifier(smo757550acc, 0);
smo75796v0ar.push(smo75755);
const smo75756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75756.setAttribute('id', 'smo75756');
smo75796v0ar.push(smo75756);
const smo75757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75757.setAttribute('id', 'smo75757');
const smo757570acc = new VF.Accidental('#');
smo75757.addModifier(smo757570acc, 0);
smo75796v0ar.push(smo75757);
const smo75758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75758.setAttribute('id', 'smo75758');
smo75796v0ar.push(smo75758);
const smo75759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75759.setAttribute('id', 'smo75759');
smo75796v0ar.push(smo75759);
const smo75760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75760.setAttribute('id', 'smo75760');
smo75796v0ar.push(smo75760);
const smo75761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75761.setAttribute('id', 'smo75761');
smo75796v0ar.push(smo75761);
const smo75762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75762.setAttribute('id', 'smo75762');
smo75796v0ar.push(smo75762);
const smo75763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75763.setAttribute('id', 'smo75763');
smo75796v0ar.push(smo75763);
const smo75764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75764.setAttribute('id', 'smo75764');
smo75796v0ar.push(smo75764);
const smo75765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75765.setAttribute('id', 'smo75765');
smo75796v0ar.push(smo75765);
const smo75766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75766.setAttribute('id', 'smo75766');
smo75796v0ar.push(smo75766);
const smo75767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75767.setAttribute('id', 'smo75767');
const smo757670acc = new VF.Accidental('#');
smo75767.addModifier(smo757670acc, 0);
smo75796v0ar.push(smo75767);
const smo75768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75768.setAttribute('id', 'smo75768');
smo75796v0ar.push(smo75768);
const smo75769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75769.setAttribute('id', 'smo75769');
smo75796v0ar.push(smo75769);
const smo75770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75770.setAttribute('id', 'smo75770');
smo75796v0ar.push(smo75770);
const smo75771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
const smo75772 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo75772.setAttribute('id', 'smo75772');
const acc0smo75772 = new VF.Accidental('#');
smo75772.addModifier(acc0smo75772, 0)
const ggrpsmo75771 = new VF.GraceNoteGroup([smo75772]);
ggrpsmo75771.beamNotes();
smo75771.addModifier(ggrpsmo75771, 0);
smo75771.setAttribute('id', 'smo75771');
const smo757710acc = new VF.Accidental('n');
smo75771.addModifier(smo757710acc, 0);
smo75796v0ar.push(smo75771);
const smo75773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo75773.setAttribute('id', 'smo75773');
smo75796v0ar.push(smo75773);
const smo75774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75774.setAttribute('id', 'smo75774');
smo75796v0ar.push(smo75774);
const smo75775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75775.setAttribute('id', 'smo75775');
smo75796v0ar.push(smo75775);
const smo75776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75776.setAttribute('id', 'smo75776');
const smo757760acc = new VF.Accidental('#');
smo75776.addModifier(smo757760acc, 0);
smo75796v0ar.push(smo75776);
const smo75777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75777.setAttribute('id', 'smo75777');
smo75796v0ar.push(smo75777);
const smo75778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75778.setAttribute('id', 'smo75778');
smo75796v0ar.push(smo75778);
const smo75779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75779.setAttribute('id', 'smo75779');
smo75796v0ar.push(smo75779);
const smo75780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75780.setAttribute('id', 'smo75780');
smo75796v0ar.push(smo75780);
smo75796v0.addTickables(smo75796v0ar)
fmtsmo757964.joinVoices([smo75796v0]);
const fmtsmo762724 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo76272v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76272v0ar = [];
const smo76237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76237.setAttribute('id', 'smo76237');
smo76272v0ar.push(smo76237);
const smo76238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76238.setAttribute('id', 'smo76238');
smo76272v0ar.push(smo76238);
const smo76239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76239.setAttribute('id', 'smo76239');
smo76272v0ar.push(smo76239);
const smo76240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76240.setAttribute('id', 'smo76240');
smo76272v0ar.push(smo76240);
const smo76241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76241.setAttribute('id', 'smo76241');
smo76272v0ar.push(smo76241);
const smo76242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76242.setAttribute('id', 'smo76242');
smo76272v0ar.push(smo76242);
const smo76243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76243.setAttribute('id', 'smo76243');
smo76272v0ar.push(smo76243);
const smo76244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76244.setAttribute('id', 'smo76244');
const smo762440acc = new VF.Accidental('#');
smo76244.addModifier(smo762440acc, 0);
smo76272v0ar.push(smo76244);
const smo76245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76245.setAttribute('id', 'smo76245');
smo76272v0ar.push(smo76245);
const smo76246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76246.setAttribute('id', 'smo76246');
smo76272v0ar.push(smo76246);
const smo76247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo76247.setAttribute('id', 'smo76247');
const smo762471acc = new VF.Accidental('#');
smo76247.addModifier(smo762471acc, 1);
const smo762472acc = new VF.Accidental('#');
smo76247.addModifier(smo762472acc, 2);
smo76272v0ar.push(smo76247);
const smo76248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo76248.setAttribute('id', 'smo76248');
smo76272v0ar.push(smo76248);
const smo76249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76249.setAttribute('id', 'smo76249');
smo76272v0ar.push(smo76249);
const smo76250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76250.setAttribute('id', 'smo76250');
smo76272v0ar.push(smo76250);
const smo76251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76251.setAttribute('id', 'smo76251');
smo76272v0ar.push(smo76251);
smo76272v0.addTickables(smo76272v0ar)
fmtsmo762724.joinVoices([smo76272v0]);
const smo76272v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76272v1ar = [];
const smo76252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76252.setAttribute('id', 'smo76252');
smo76252.setStyle({ fillStyle: "#115511" });
smo76272v1ar.push(smo76252);
const smo76253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76253.setAttribute('id', 'smo76253');
smo76253.setStyle({ fillStyle: "#115511" });
smo76272v1ar.push(smo76253);
const smo76254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo76254.setAttribute('id', 'smo76254');
smo76254.setStyle({ fillStyle: "#115511" });
smo76272v1ar.push(smo76254);
const smo76255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/1/n"]}'))
smo76255.setAttribute('id', 'smo76255');
smo76255.setStyle({ fillStyle: "#115511" });
const smo762550acc = new VF.Accidental('#');
smo76255.addModifier(smo762550acc, 0);
smo76272v1ar.push(smo76255);
const smo76256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76256.setAttribute('id', 'smo76256');
smo76256.setStyle({ fillStyle: "#115511" });
smo76272v1ar.push(smo76256);
smo76272v1.addTickables(smo76272v1ar)
fmtsmo762724.joinVoices([smo76272v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77784 = smo75753.getStemDirection();
smo75753.setStemDirection(dirsmo77784);
smo75754.setStemDirection(dirsmo77784);
smo75755.setStemDirection(dirsmo77784);
smo75756.setStemDirection(dirsmo77784);
const smo77784 = new VF.Beam([smo75753,smo75754,smo75755,smo75756]);
const dirsmo77785 = smo75757.getStemDirection();
smo75757.setStemDirection(dirsmo77785);
smo75758.setStemDirection(dirsmo77785);
const smo77785 = new VF.Beam([smo75757,smo75758]);
const dirsmo77786 = smo75761.getStemDirection();
smo75761.setStemDirection(dirsmo77786);
smo75762.setStemDirection(dirsmo77786);
const smo77786 = new VF.Beam([smo75761,smo75762]);
const dirsmo77787 = smo75763.getStemDirection();
smo75763.setStemDirection(dirsmo77787);
smo75764.setStemDirection(dirsmo77787);
smo75765.setStemDirection(dirsmo77787);
smo75766.setStemDirection(dirsmo77787);
const smo77787 = new VF.Beam([smo75763,smo75764,smo75765,smo75766]);
const dirsmo77788 = smo75767.getStemDirection();
smo75767.setStemDirection(dirsmo77788);
smo75768.setStemDirection(dirsmo77788);
const smo77788 = new VF.Beam([smo75767,smo75768]);
const dirsmo77789 = smo75773.getStemDirection();
smo75773.setStemDirection(dirsmo77789);
smo75774.setStemDirection(dirsmo77789);
smo75775.setStemDirection(dirsmo77789);
smo75776.setStemDirection(dirsmo77789);
const smo77789 = new VF.Beam([smo75773,smo75774,smo75775,smo75776]);
const dirsmo77790 = smo75777.getStemDirection();
smo75777.setStemDirection(dirsmo77790);
smo75778.setStemDirection(dirsmo77790);
smo75779.setStemDirection(dirsmo77790);
smo75780.setStemDirection(dirsmo77790);
const smo77790 = new VF.Beam([smo75777,smo75778,smo75779,smo75780]);
 
// formatting measures in staff group smo76498
fmtsmo757964.format([smo75796v0,smo76272v0,smo76272v1], 1123);
const stavesmo75796 = new VF.Stave(103, 1300, 1174);
stavesmo75796.setAttribute('id', 'stavesmo75796');
stavesmo75796.setBegBarType(1);
stavesmo75796.addClef('treble');
stavesmo75796.setContext(context);
stavesmo75796.draw();
smo75796v0.draw(context, stavesmo75796);
smo77784.setContext(context);
smo77784.draw();
smo77785.setContext(context);
smo77785.draw();
smo77786.setContext(context);
smo77786.draw();
smo77787.setContext(context);
smo77787.draw();
smo77788.setContext(context);
smo77788.draw();
smo77789.setContext(context);
smo77789.draw();
smo77790.setContext(context);
smo77790.draw();
const stavesmo76272 = new VF.Stave(103, 1438, 1174);
stavesmo76272.setAttribute('id', 'stavesmo76272');
stavesmo76272.setBegBarType(1);
stavesmo76272.addClef('bass');
stavesmo76272.setContext(context);
stavesmo76272.draw();
smo76272v0.draw(context, stavesmo76272);
smo76272v1.draw(context, stavesmo76272);
const leftsmo76498stavesmo757961 = new VF.StaveConnector(stavesmo75796, stavesmo76272).setType(3);
leftsmo76498stavesmo757961.setContext(context).draw();
const fmtsmo758405 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo75840v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75840v0ar = [];
const smo75797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75797.setAttribute('id', 'smo75797');
smo75840v0ar.push(smo75797);
const smo75798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75798.setAttribute('id', 'smo75798');
const smo757980acc = new VF.Accidental('#');
smo75798.addModifier(smo757980acc, 0);
smo75840v0ar.push(smo75798);
const smo75799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75799.setAttribute('id', 'smo75799');
smo75840v0ar.push(smo75799);
const smo75800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75800.setAttribute('id', 'smo75800');
const smo758000acc = new VF.Accidental('#');
smo75800.addModifier(smo758000acc, 0);
smo75840v0ar.push(smo75800);
const smo75801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo75801.setAttribute('id', 'smo75801');
smo75840v0ar.push(smo75801);
const smo75802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75802.setAttribute('id', 'smo75802');
smo75840v0ar.push(smo75802);
const smo75803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75803.setAttribute('id', 'smo75803');
smo75840v0ar.push(smo75803);
const smo75804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75804.setAttribute('id', 'smo75804');
smo75840v0ar.push(smo75804);
const smo75805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75805.setAttribute('id', 'smo75805');
smo75840v0ar.push(smo75805);
const smo75806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75806.setAttribute('id', 'smo75806');
const smo758060acc = new VF.Accidental('#');
smo75806.addModifier(smo758060acc, 0);
smo75840v0ar.push(smo75806);
const smo75807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75807.setAttribute('id', 'smo75807');
smo75840v0ar.push(smo75807);
const smo75808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75808.setAttribute('id', 'smo75808');
smo75840v0ar.push(smo75808);
const smo75809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75809.setAttribute('id', 'smo75809');
smo75840v0ar.push(smo75809);
const smo75810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75810.setAttribute('id', 'smo75810');
smo75840v0ar.push(smo75810);
const smo75811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75811.setAttribute('id', 'smo75811');
smo75840v0ar.push(smo75811);
const smo75812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75812.setAttribute('id', 'smo75812');
smo75840v0ar.push(smo75812);
const smo75813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo75813.setAttribute('id', 'smo75813');
smo75840v0ar.push(smo75813);
const smo75814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo75814.setAttribute('id', 'smo75814');
smo75840v0ar.push(smo75814);
const smo75815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo75815.setAttribute('id', 'smo75815');
smo75840v0ar.push(smo75815);
const smo75816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo75816.setAttribute('id', 'smo75816');
smo75840v0ar.push(smo75816);
const smo75817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo75817.setAttribute('id', 'smo75817');
smo75840v0ar.push(smo75817);
const smo75818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75818.setAttribute('id', 'smo75818');
smo75840v0ar.push(smo75818);
const smo75819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo75819.setAttribute('id', 'smo75819');
smo75840v0ar.push(smo75819);
const smo75820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo75820.setAttribute('id', 'smo75820');
smo75840v0ar.push(smo75820);
const smo75821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75821.setAttribute('id', 'smo75821');
smo75840v0ar.push(smo75821);
const smo75822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75822.setAttribute('id', 'smo75822');
smo75840v0ar.push(smo75822);
const smo75823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo75823.setAttribute('id', 'smo75823');
smo75840v0ar.push(smo75823);
const smo75824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo75824.setAttribute('id', 'smo75824');
smo75840v0ar.push(smo75824);
smo75840v0.addTickables(smo75840v0ar)
fmtsmo758405.joinVoices([smo75840v0]);
const fmtsmo763045 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo76304v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76304v0ar = [];
const smo76273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76273.setAttribute('id', 'smo76273');
smo76304v0ar.push(smo76273);
const smo76274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76274.setAttribute('id', 'smo76274');
smo76304v0ar.push(smo76274);
const smo76275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76275.setAttribute('id', 'smo76275');
smo76304v0ar.push(smo76275);
const smo76276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76276.setAttribute('id', 'smo76276');
smo76304v0ar.push(smo76276);
const smo76277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76277.setAttribute('id', 'smo76277');
smo76304v0ar.push(smo76277);
const smo76278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76278.setAttribute('id', 'smo76278');
smo76304v0ar.push(smo76278);
const smo76279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76279.setAttribute('id', 'smo76279');
smo76304v0ar.push(smo76279);
const smo76280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76280.setAttribute('id', 'smo76280');
smo76304v0ar.push(smo76280);
const smo76281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo76281.setAttribute('id', 'smo76281');
smo76304v0ar.push(smo76281);
const smo76282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo76282.setAttribute('id', 'smo76282');
smo76304v0ar.push(smo76282);
const smo76283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76283.setAttribute('id', 'smo76283');
const smo762830acc = new VF.Accidental('#');
smo76283.addModifier(smo762830acc, 0);
smo76304v0ar.push(smo76283);
const smo76284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo76284.setAttribute('id', 'smo76284');
smo76304v0ar.push(smo76284);
smo76304v0.addTickables(smo76304v0ar)
fmtsmo763045.joinVoices([smo76304v0]);
const smo76304v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76304v1ar = [];
const smo76285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76285.setAttribute('id', 'smo76285');
smo76285.setStyle({ fillStyle: "#115511" });
smo76304v1ar.push(smo76285);
const smo76286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76286.setAttribute('id', 'smo76286');
smo76286.setStyle({ fillStyle: "#115511" });
smo76304v1ar.push(smo76286);
const smo76287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo76287.setAttribute('id', 'smo76287');
smo76287.setStyle({ fillStyle: "#115511" });
smo76304v1ar.push(smo76287);
const smo76288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo76288.setAttribute('id', 'smo76288');
smo76288.setStyle({ fillStyle: "#115511" });
smo76304v1ar.push(smo76288);
smo76304v1.addTickables(smo76304v1ar)
fmtsmo763045.joinVoices([smo76304v1]);
// create beam groups and tuplets for format grp smo76498 before formatting
const dirsmo77806 = smo75797.getStemDirection();
smo75797.setStemDirection(dirsmo77806);
smo75798.setStemDirection(dirsmo77806);
smo75799.setStemDirection(dirsmo77806);
smo75800.setStemDirection(dirsmo77806);
const smo77806 = new VF.Beam([smo75797,smo75798,smo75799,smo75800]);
const dirsmo77807 = smo75801.getStemDirection();
smo75801.setStemDirection(dirsmo77807);
smo75802.setStemDirection(dirsmo77807);
smo75803.setStemDirection(dirsmo77807);
smo75804.setStemDirection(dirsmo77807);
const smo77807 = new VF.Beam([smo75801,smo75802,smo75803,smo75804]);
const dirsmo77808 = smo75805.getStemDirection();
smo75805.setStemDirection(dirsmo77808);
smo75806.setStemDirection(dirsmo77808);
smo75807.setStemDirection(dirsmo77808);
smo75808.setStemDirection(dirsmo77808);
const smo77808 = new VF.Beam([smo75805,smo75806,smo75807,smo75808]);
const dirsmo77809 = smo75809.getStemDirection();
smo75809.setStemDirection(dirsmo77809);
smo75810.setStemDirection(dirsmo77809);
smo75811.setStemDirection(dirsmo77809);
smo75812.setStemDirection(dirsmo77809);
const smo77809 = new VF.Beam([smo75809,smo75810,smo75811,smo75812]);
const dirsmo77810 = smo75813.getStemDirection();
smo75813.setStemDirection(dirsmo77810);
smo75814.setStemDirection(dirsmo77810);
smo75815.setStemDirection(dirsmo77810);
smo75816.setStemDirection(dirsmo77810);
const smo77810 = new VF.Beam([smo75813,smo75814,smo75815,smo75816]);
const dirsmo77811 = smo75817.getStemDirection();
smo75817.setStemDirection(dirsmo77811);
smo75818.setStemDirection(dirsmo77811);
smo75819.setStemDirection(dirsmo77811);
smo75820.setStemDirection(dirsmo77811);
const smo77811 = new VF.Beam([smo75817,smo75818,smo75819,smo75820]);
const dirsmo77812 = smo75821.getStemDirection();
smo75821.setStemDirection(dirsmo77812);
smo75822.setStemDirection(dirsmo77812);
const smo77812 = new VF.Beam([smo75821,smo75822]);
 
// formatting measures in staff group smo76498
fmtsmo758405.format([smo75840v0,smo76304v0,smo76304v1], 1123);
const stavesmo75840 = new VF.Stave(103, 1623, 1174);
stavesmo75840.setAttribute('id', 'stavesmo75840');
stavesmo75840.setBegBarType(1);
stavesmo75840.addClef('treble');
stavesmo75840.setContext(context);
stavesmo75840.draw();
smo75840v0.draw(context, stavesmo75840);
smo77806.setContext(context);
smo77806.draw();
smo77807.setContext(context);
smo77807.draw();
smo77808.setContext(context);
smo77808.draw();
smo77809.setContext(context);
smo77809.draw();
smo77810.setContext(context);
smo77810.draw();
smo77811.setContext(context);
smo77811.draw();
smo77812.setContext(context);
smo77812.draw();
const stavesmo76304 = new VF.Stave(103, 1736, 1174);
stavesmo76304.setAttribute('id', 'stavesmo76304');
stavesmo76304.setBegBarType(1);
stavesmo76304.addClef('bass');
stavesmo76304.setContext(context);
stavesmo76304.draw();
smo76304v0.draw(context, stavesmo76304);
smo76304v1.draw(context, stavesmo76304);
const leftsmo76498stavesmo758401 = new VF.StaveConnector(stavesmo75840, stavesmo76304).setType(3);
leftsmo76498stavesmo758401.setContext(context).draw();
// modifier from 0-0-0-5 to 0-0-0-6
const smo78002 = new VF.StaveTie({ first_note: smo75580, last_note: smo75581, 
          firstNote: smo75580, lastNote: smo75581, first_indices: [0], last_indices: [0]});
smo78002.setContext(context).draw();
// modifier from 0-0-0-15 to 0-0-0-16
const smo78003 = new VF.StaveTie({ first_note: smo75590, last_note: smo75591, 
          firstNote: smo75590, lastNote: smo75591, first_indices: [0], last_indices: [0]});
smo78003.setContext(context).draw();
// modifier from 0-0-0-24 to 0-0-0-25
const smo78004 = new VF.StaveTie({ first_note: smo75599, last_note: smo75600, 
          firstNote: smo75599, lastNote: smo75600, first_indices: [0], last_indices: [0]});
smo78004.setContext(context).draw();
// modifier from 0-1-0-8 to 0-1-0-9
const smo78005 = new VF.StaveTie({ first_note: smo75635, last_note: smo75636, 
          firstNote: smo75635, lastNote: smo75636, first_indices: [0], last_indices: [0]});
smo78005.setContext(context).draw();
// modifier from 0-1-0-15 to 0-1-0-16
const smo78006 = new VF.StaveTie({ first_note: smo75643, last_note: smo75644, 
          firstNote: smo75643, lastNote: smo75644, first_indices: [0], last_indices: [0]});
smo78006.setContext(context).draw();
// modifier from 0-1-0-18 to 0-1-0-19
const smo78007 = new VF.StaveTie({ first_note: smo75646, last_note: smo75647, 
          firstNote: smo75646, lastNote: smo75647, first_indices: [0], last_indices: [0]});
smo78007.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo78008 = new VF.StaveTie({ first_note: smo75649, last_note: null, 
          firstNote: smo75649, lastNote: null, first_indices: [0], last_indices: [0]});
smo78008.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo78009 = new VF.StaveTie({ first_note: null, last_note: smo75672, 
          firstNote: null, lastNote: smo75672, first_indices: [0], last_indices: [0]});
smo78009.setContext(context).draw();
// modifier from 0-2-0-26 to 0-2-0-27
const smo78010 = new VF.StaveTie({ first_note: smo75698, last_note: smo75699, 
          firstNote: smo75698, lastNote: smo75699, first_indices: [0], last_indices: [0]});
smo78010.setContext(context).draw();
// modifier from 0-3-0-6 to 0-3-0-7
const smo78011 = new VF.StaveTie({ first_note: smo75723, last_note: smo75724, 
          firstNote: smo75723, lastNote: smo75724, first_indices: [0], last_indices: [0]});
smo78011.setContext(context).draw();
// modifier from 0-3-0-16 to 0-3-0-17
const smo78012 = new VF.StaveTie({ first_note: smo75733, last_note: smo75734, 
          firstNote: smo75733, lastNote: smo75734, first_indices: [0], last_indices: [0]});
smo78012.setContext(context).draw();
// modifier from 0-4-0-5 to 0-4-0-6
const smo78013 = new VF.StaveTie({ first_note: smo75758, last_note: smo75759, 
          firstNote: smo75758, lastNote: smo75759, first_indices: [0], last_indices: [0]});
smo78013.setContext(context).draw();
// modifier from 0-4-0-15 to 0-4-0-16
const smo78014 = new VF.StaveTie({ first_note: smo75768, last_note: smo75769, 
          firstNote: smo75768, lastNote: smo75769, first_indices: [0], last_indices: [0]});
smo78014.setContext(context).draw();
// modifier from 0-5-0-25 to 0-5-0-26
const smo78015 = new VF.StaveTie({ first_note: smo75822, last_note: smo75823, 
          firstNote: smo75822, lastNote: smo75823, first_indices: [0], last_indices: [0]});
smo78015.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo78016 = new VF.Curve(smo75773, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo78016.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo78017 = new VF.Curve(null, smo75823, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo78017.setContext(context).draw();
// modifier from 0-3-0-1 to 0-3-0-7
const smo78018 = new VF.Curve(smo75718, smo75724, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo78018.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-6
const smo78019 = new VF.Curve(smo75574, smo75581, JSON.parse('{"thickness":2,"xShift":0,"yShift":67,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"positionEnd":1}'));
smo78019.setContext(context).draw();
// modifier from 0-0-0-8 to 0-0-0-16
const smo78020 = new VF.Curve(smo75583, smo75591, JSON.parse('{"thickness":2,"xShift":0,"yShift":35,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo78020.setContext(context).draw();
// modifier from 0-0-0-19 to 0-0-0-25
const smo78021 = new VF.Curve(smo75594, smo75600, JSON.parse('{"thickness":2,"xShift":0,"yShift":13,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo78021.setContext(context).draw();
// modifier from 0-1-0-1 to 0-1-0-9
const smo78022 = new VF.Curve(smo75628, smo75636, JSON.parse('{"thickness":2,"xShift":0,"yShift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo78022.setContext(context).draw();
// modifier from 0-2-0-1 to 0-2-0-27
const smo78023 = new VF.Curve(smo75673, smo75699, JSON.parse('{"thickness":2,"xShift":0,"yShift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"positionEnd":1}'));
smo78023.setContext(context).draw();
// modifier from 0-1-0-11 to 0-1-0-19
const smo78024 = new VF.Curve(smo75638, smo75647, JSON.parse('{"thickness":2,"xShift":0,"yShift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo78024.setContext(context).draw();
// modifier from 0-3-0-9 to 0-3-0-17
const smo78025 = new VF.Curve(smo75726, smo75734, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"positionEnd":2}'));
smo78025.setContext(context).draw();
// modifier from 0-4-0-0 to 0-4-0-6
const smo78026 = new VF.Curve(smo75753, smo75759, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo78026.setContext(context).draw();
// modifier from 0-4-0-8 to 0-4-0-16
const smo78027 = new VF.Curve(smo75761, smo75769, JSON.parse('{"thickness":2,"xShift":0,"yShift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo78027.setContext(context).draw();
}
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
const fmtsmo747186 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo74718v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74718v0ar = [];
const smo74678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74678.setAttribute('id', 'smo74678');
smo74718v0ar.push(smo74678);
const smo74679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo74679.setAttribute('id', 'smo74679');
smo74718v0ar.push(smo74679);
const smo74680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74680.setAttribute('id', 'smo74680');
const smo746800acc = new VF.Accidental('#');
smo74680.addModifier(smo746800acc, 0);
smo74718v0ar.push(smo74680);
const smo74681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74681.setAttribute('id', 'smo74681');
smo74718v0ar.push(smo74681);
const smo74682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74682.setAttribute('id', 'smo74682');
const smo746820acc = new VF.Accidental('#');
smo74682.addModifier(smo746820acc, 0);
smo74718v0ar.push(smo74682);
const smo74683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74683.setAttribute('id', 'smo74683');
smo74718v0ar.push(smo74683);
const smo74684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74684.setAttribute('id', 'smo74684');
const smo746840acc = new VF.Accidental('#');
smo74684.addModifier(smo746840acc, 0);
smo74718v0ar.push(smo74684);
const smo74685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74685.setAttribute('id', 'smo74685');
smo74718v0ar.push(smo74685);
const smo74686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74686.setAttribute('id', 'smo74686');
smo74718v0ar.push(smo74686);
const smo74687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74687.setAttribute('id', 'smo74687');
smo74718v0ar.push(smo74687);
const smo74688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74688.setAttribute('id', 'smo74688');
smo74718v0ar.push(smo74688);
const smo74689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74689.setAttribute('id', 'smo74689');
smo74718v0ar.push(smo74689);
const smo74690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74690.setAttribute('id', 'smo74690');
smo74718v0ar.push(smo74690);
const smo74691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo74691.setAttribute('id', 'smo74691');
smo74718v0ar.push(smo74691);
const smo74692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74692.setAttribute('id', 'smo74692');
smo74718v0ar.push(smo74692);
const smo74693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74693.setAttribute('id', 'smo74693');
smo74718v0ar.push(smo74693);
const smo74694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74694.setAttribute('id', 'smo74694');
smo74718v0ar.push(smo74694);
const smo74695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74695.setAttribute('id', 'smo74695');
smo74718v0ar.push(smo74695);
const smo74696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74696.setAttribute('id', 'smo74696');
smo74718v0ar.push(smo74696);
const smo74697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74697.setAttribute('id', 'smo74697');
smo74718v0ar.push(smo74697);
const smo74698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74698.setAttribute('id', 'smo74698');
smo74718v0ar.push(smo74698);
const smo74699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74699.setAttribute('id', 'smo74699');
smo74718v0ar.push(smo74699);
const smo74700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74700.setAttribute('id', 'smo74700');
smo74718v0ar.push(smo74700);
const smo74701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74701.setAttribute('id', 'smo74701');
smo74718v0ar.push(smo74701);
const smo74702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74702.setAttribute('id', 'smo74702');
smo74718v0ar.push(smo74702);
smo74718v0.addTickables(smo74718v0ar)
fmtsmo747186.joinVoices([smo74718v0]);
const fmtsmo751736 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo75173v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75173v0ar = [];
const smo75142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75142.setAttribute('id', 'smo75142');
smo75173v0ar.push(smo75142);
const smo75143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75143.setAttribute('id', 'smo75143');
const smo751430acc = new VF.Accidental('#');
smo75143.addModifier(smo751430acc, 0);
smo75173v0ar.push(smo75143);
const smo75144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75144.setAttribute('id', 'smo75144');
smo75173v0ar.push(smo75144);
const smo75145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75145.setAttribute('id', 'smo75145');
smo75173v0ar.push(smo75145);
const smo75146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75146.setAttribute('id', 'smo75146');
smo75173v0ar.push(smo75146);
const smo75147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75147.setAttribute('id', 'smo75147');
smo75173v0ar.push(smo75147);
const smo75148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75148.setAttribute('id', 'smo75148');
smo75173v0ar.push(smo75148);
const smo75149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75149.setAttribute('id', 'smo75149');
smo75173v0ar.push(smo75149);
const smo75150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75150.setAttribute('id', 'smo75150');
smo75173v0ar.push(smo75150);
const smo75151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75151.setAttribute('id', 'smo75151');
smo75173v0ar.push(smo75151);
const smo75152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75152.setAttribute('id', 'smo75152');
smo75173v0ar.push(smo75152);
const smo75153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75153.setAttribute('id', 'smo75153');
smo75173v0ar.push(smo75153);
smo75173v0.addTickables(smo75173v0ar)
fmtsmo751736.joinVoices([smo75173v0]);
const smo75173v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75173v1ar = [];
const smo75154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo75154.setAttribute('id', 'smo75154');
smo75154.setStyle({ fillStyle: "#115511" });
smo75173v1ar.push(smo75154);
const smo75155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75155.setAttribute('id', 'smo75155');
smo75155.setStyle({ fillStyle: "#115511" });
smo75173v1ar.push(smo75155);
const smo75156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75156.setAttribute('id', 'smo75156');
smo75156.setStyle({ fillStyle: "#115511" });
smo75173v1ar.push(smo75156);
const smo75157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75157.setAttribute('id', 'smo75157');
smo75157.setStyle({ fillStyle: "#115511" });
smo75173v1ar.push(smo75157);
smo75173v1.addTickables(smo75173v1ar)
fmtsmo751736.joinVoices([smo75173v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76662 = smo74679.getStemDirection();
smo74679.setStemDirection(dirsmo76662);
smo74680.setStemDirection(dirsmo76662);
smo74681.setStemDirection(dirsmo76662);
smo74682.setStemDirection(dirsmo76662);
const smo76662 = new VF.Beam([smo74679,smo74680,smo74681,smo74682]);
const dirsmo76663 = smo74683.getStemDirection();
smo74683.setStemDirection(dirsmo76663);
smo74684.setStemDirection(dirsmo76663);
smo74685.setStemDirection(dirsmo76663);
smo74686.setStemDirection(dirsmo76663);
const smo76663 = new VF.Beam([smo74683,smo74684,smo74685,smo74686]);
const dirsmo76664 = smo74687.getStemDirection();
smo74687.setStemDirection(dirsmo76664);
smo74688.setStemDirection(dirsmo76664);
smo74689.setStemDirection(dirsmo76664);
smo74690.setStemDirection(dirsmo76664);
const smo76664 = new VF.Beam([smo74687,smo74688,smo74689,smo74690]);
const dirsmo76665 = smo74691.getStemDirection();
smo74691.setStemDirection(dirsmo76665);
smo74692.setStemDirection(dirsmo76665);
smo74693.setStemDirection(dirsmo76665);
smo74694.setStemDirection(dirsmo76665);
const smo76665 = new VF.Beam([smo74691,smo74692,smo74693,smo74694]);
const dirsmo76666 = smo74695.getStemDirection();
smo74695.setStemDirection(dirsmo76666);
smo74696.setStemDirection(dirsmo76666);
smo74697.setStemDirection(dirsmo76666);
smo74698.setStemDirection(dirsmo76666);
const smo76666 = new VF.Beam([smo74695,smo74696,smo74697,smo74698]);
const dirsmo76667 = smo74699.getStemDirection();
smo74699.setStemDirection(dirsmo76667);
smo74700.setStemDirection(dirsmo76667);
smo74701.setStemDirection(dirsmo76667);
smo74702.setStemDirection(dirsmo76667);
const smo76667 = new VF.Beam([smo74699,smo74700,smo74701,smo74702]);
 
// formatting measures in staff group smo75335
fmtsmo747186.format([smo74718v0,smo75173v0,smo75173v1], 1118);
const stavesmo74718 = new VF.Stave(103, 173.00000000000023, 1174);
stavesmo74718.setAttribute('id', 'stavesmo74718');
stavesmo74718.setBegBarType(1);
stavesmo74718.addClef('treble');
stavesmo74718.setContext(context);
stavesmo74718.draw();
smo74718v0.draw(context, stavesmo74718);
smo76662.setContext(context);
smo76662.draw();
smo76663.setContext(context);
smo76663.draw();
smo76664.setContext(context);
smo76664.draw();
smo76665.setContext(context);
smo76665.draw();
smo76666.setContext(context);
smo76666.draw();
smo76667.setContext(context);
smo76667.draw();
const stavesmo75173 = new VF.Stave(103, 286.0000000000002, 1174);
stavesmo75173.setAttribute('id', 'stavesmo75173');
stavesmo75173.setBegBarType(1);
stavesmo75173.addClef('bass');
stavesmo75173.setContext(context);
stavesmo75173.draw();
smo75173v0.draw(context, stavesmo75173);
smo75173v1.draw(context, stavesmo75173);
const leftsmo75335stavesmo747181 = new VF.StaveConnector(stavesmo74718, stavesmo75173).setType(3);
leftsmo75335stavesmo747181.setContext(context).draw();
const fmtsmo747547 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo74754v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74754v0ar = [];
const smo74719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo74719.setAttribute('id', 'smo74719');
smo74754v0ar.push(smo74719);
const smo74720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74720.setAttribute('id', 'smo74720');
const smo747200acc = new VF.Accidental('#');
smo74720.addModifier(smo747200acc, 0);
smo74754v0ar.push(smo74720);
const smo74721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74721.setAttribute('id', 'smo74721');
smo74754v0ar.push(smo74721);
const smo74722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74722.setAttribute('id', 'smo74722');
const smo747220acc = new VF.Accidental('#');
smo74722.addModifier(smo747220acc, 0);
smo74754v0ar.push(smo74722);
const smo74723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74723.setAttribute('id', 'smo74723');
smo74754v0ar.push(smo74723);
const smo74724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74724.setAttribute('id', 'smo74724');
const smo747240acc = new VF.Accidental('#');
smo74724.addModifier(smo747240acc, 0);
smo74754v0ar.push(smo74724);
const smo74725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74725.setAttribute('id', 'smo74725');
smo74754v0ar.push(smo74725);
const smo74726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74726.setAttribute('id', 'smo74726');
smo74754v0ar.push(smo74726);
const smo74727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74727.setAttribute('id', 'smo74727');
smo74754v0ar.push(smo74727);
const smo74728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74728.setAttribute('id', 'smo74728');
smo74754v0ar.push(smo74728);
const smo74729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74729.setAttribute('id', 'smo74729');
smo74754v0ar.push(smo74729);
const smo74730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74730.setAttribute('id', 'smo74730');
smo74754v0ar.push(smo74730);
const smo74731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
const smo74732 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo74732.setAttribute('id', 'smo74732');
const acc0smo74732 = new VF.Accidental('#');
smo74732.addModifier(acc0smo74732, 0)
const ggrpsmo74731 = new VF.GraceNoteGroup([smo74732]);
ggrpsmo74731.beamNotes();
smo74731.addModifier(ggrpsmo74731, 0);
smo74731.setAttribute('id', 'smo74731');
const smo747310acc = new VF.Accidental('n');
smo74731.addModifier(smo747310acc, 0);
smo74754v0ar.push(smo74731);
const smo74733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo74733.setAttribute('id', 'smo74733');
smo74754v0ar.push(smo74733);
const smo74734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74734.setAttribute('id', 'smo74734');
smo74754v0ar.push(smo74734);
const smo74735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
const smo74736 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["cn/5"],"slash":false}'))
smo74736.setAttribute('id', 'smo74736');
const ggrpsmo74735 = new VF.GraceNoteGroup([smo74736]);
ggrpsmo74735.beamNotes();
smo74735.addModifier(ggrpsmo74735, 0);
smo74735.setAttribute('id', 'smo74735');
const smo747350acc = new VF.Accidental('b');
smo74735.addModifier(smo747350acc, 0);
smo74754v0ar.push(smo74735);
const smo74737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo74737.setAttribute('id', 'smo74737');
smo74754v0ar.push(smo74737);
const smo74738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74738.setAttribute('id', 'smo74738');
smo74754v0ar.push(smo74738);
smo74754v0.addTickables(smo74754v0ar)
fmtsmo747547.joinVoices([smo74754v0]);
const fmtsmo752137 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo75213v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75213v0ar = [];
const smo75174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75174.setAttribute('id', 'smo75174');
smo75213v0ar.push(smo75174);
const smo75175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75175.setAttribute('id', 'smo75175');
smo75213v0ar.push(smo75175);
const smo75176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75176.setAttribute('id', 'smo75176');
smo75213v0ar.push(smo75176);
const smo75177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75177.setAttribute('id', 'smo75177');
smo75213v0ar.push(smo75177);
const smo75178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75178.setAttribute('id', 'smo75178');
const smo751780acc = new VF.Accidental('#');
smo75178.addModifier(smo751780acc, 0);
smo75213v0ar.push(smo75178);
const smo75179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75179.setAttribute('id', 'smo75179');
smo75213v0ar.push(smo75179);
const smo75180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75180.setAttribute('id', 'smo75180');
smo75213v0ar.push(smo75180);
const smo75181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75181.setAttribute('id', 'smo75181');
smo75213v0ar.push(smo75181);
const smo75182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75182.setAttribute('id', 'smo75182');
smo75213v0ar.push(smo75182);
const smo75183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75183.setAttribute('id', 'smo75183');
smo75213v0ar.push(smo75183);
const smo75184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75184.setAttribute('id', 'smo75184');
smo75213v0ar.push(smo75184);
const smo75185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75185.setAttribute('id', 'smo75185');
smo75213v0ar.push(smo75185);
const smo75186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75186.setAttribute('id', 'smo75186');
smo75213v0ar.push(smo75186);
const smo75187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75187.setAttribute('id', 'smo75187');
const smo751870acc = new VF.Accidental('b');
smo75187.addModifier(smo751870acc, 0);
smo75213v0ar.push(smo75187);
const smo75188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75188.setAttribute('id', 'smo75188');
smo75213v0ar.push(smo75188);
const smo75189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75189.setAttribute('id', 'smo75189');
smo75213v0ar.push(smo75189);
const smo75190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75190.setAttribute('id', 'smo75190');
smo75213v0ar.push(smo75190);
const smo75191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75191.setAttribute('id', 'smo75191');
smo75213v0ar.push(smo75191);
smo75213v0.addTickables(smo75213v0ar)
fmtsmo752137.joinVoices([smo75213v0]);
const smo75213v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75213v1ar = [];
const smo75192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75192.setAttribute('id', 'smo75192');
smo75192.setStyle({ fillStyle: "#115511" });
smo75213v1ar.push(smo75192);
const smo75193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo75193.setAttribute('id', 'smo75193');
smo75193.setStyle({ fillStyle: "#115511" });
smo75213v1ar.push(smo75193);
const smo75194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo75194.setAttribute('id', 'smo75194');
smo75194.setStyle({ fillStyle: "#115511" });
smo75213v1ar.push(smo75194);
const smo75195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75195.setAttribute('id', 'smo75195');
smo75195.setStyle({ fillStyle: "#115511" });
smo75213v1ar.push(smo75195);
const smo75196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo75196.setAttribute('id', 'smo75196');
smo75196.setStyle({ fillStyle: "#115511" });
smo75213v1ar.push(smo75196);
const smo75197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo75197.setAttribute('id', 'smo75197');
smo75197.setStyle({ fillStyle: "#115511" });
smo75213v1ar.push(smo75197);
smo75213v1.addTickables(smo75213v1ar)
fmtsmo752137.joinVoices([smo75213v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76680 = smo74719.getStemDirection();
smo74719.setStemDirection(dirsmo76680);
smo74720.setStemDirection(dirsmo76680);
smo74721.setStemDirection(dirsmo76680);
smo74722.setStemDirection(dirsmo76680);
const smo76680 = new VF.Beam([smo74719,smo74720,smo74721,smo74722]);
const dirsmo76681 = smo74723.getStemDirection();
smo74723.setStemDirection(dirsmo76681);
smo74724.setStemDirection(dirsmo76681);
smo74725.setStemDirection(dirsmo76681);
smo74726.setStemDirection(dirsmo76681);
const smo76681 = new VF.Beam([smo74723,smo74724,smo74725,smo74726]);
const dirsmo76682 = smo74727.getStemDirection();
smo74727.setStemDirection(dirsmo76682);
smo74728.setStemDirection(dirsmo76682);
const smo76682 = new VF.Beam([smo74727,smo74728]);
 
// formatting measures in staff group smo75335
fmtsmo747547.format([smo74754v0,smo75213v0,smo75213v1], 1118);
const stavesmo74754 = new VF.Stave(103, 455.0000000000002, 1174);
stavesmo74754.setAttribute('id', 'stavesmo74754');
stavesmo74754.setBegBarType(1);
stavesmo74754.addClef('treble');
stavesmo74754.setContext(context);
stavesmo74754.draw();
smo74754v0.draw(context, stavesmo74754);
smo76680.setContext(context);
smo76680.draw();
smo76681.setContext(context);
smo76681.draw();
smo76682.setContext(context);
smo76682.draw();
const stavesmo75213 = new VF.Stave(103, 573.0000000000002, 1174);
stavesmo75213.setAttribute('id', 'stavesmo75213');
stavesmo75213.setBegBarType(1);
stavesmo75213.addClef('bass');
stavesmo75213.setContext(context);
stavesmo75213.draw();
smo75213v0.draw(context, stavesmo75213);
smo75213v1.draw(context, stavesmo75213);
const leftsmo75335stavesmo747541 = new VF.StaveConnector(stavesmo74754, stavesmo75213).setType(3);
leftsmo75335stavesmo747541.setContext(context).draw();
const fmtsmo747948 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo74794v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74794v0ar = [];
const smo74755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo74755.setAttribute('id', 'smo74755');
const smo747550acc = new VF.Accidental('b');
smo74755.addModifier(smo747550acc, 0);
smo74794v0ar.push(smo74755);
const smo74756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74756.setAttribute('id', 'smo74756');
smo74794v0ar.push(smo74756);
const smo74757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74757.setAttribute('id', 'smo74757');
smo74794v0ar.push(smo74757);
const smo74758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/5/n"]}'))
smo74758.setAttribute('id', 'smo74758');
const smo747580acc = new VF.Accidental('b');
smo74758.addModifier(smo747580acc, 0);
smo74794v0ar.push(smo74758);
const smo74759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74759.setAttribute('id', 'smo74759');
smo74794v0ar.push(smo74759);
const smo74760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74760.setAttribute('id', 'smo74760');
smo74794v0ar.push(smo74760);
const smo74761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74761.setAttribute('id', 'smo74761');
smo74794v0ar.push(smo74761);
const smo74762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo74762.setAttribute('id', 'smo74762');
smo74794v0ar.push(smo74762);
const smo74763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74763.setAttribute('id', 'smo74763');
smo74794v0ar.push(smo74763);
const smo74764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74764.setAttribute('id', 'smo74764');
smo74794v0ar.push(smo74764);
const smo74765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74765.setAttribute('id', 'smo74765');
smo74794v0ar.push(smo74765);
const smo74766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74766.setAttribute('id', 'smo74766');
smo74794v0ar.push(smo74766);
const smo74767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo74768 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo74768.setAttribute('id', 'smo74768');
const ggrpsmo74767 = new VF.GraceNoteGroup([smo74768]);
ggrpsmo74767.beamNotes();
smo74767.addModifier(ggrpsmo74767, 0);
smo74767.setAttribute('id', 'smo74767');
smo74794v0ar.push(smo74767);
const smo74769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74769.setAttribute('id', 'smo74769');
smo74794v0ar.push(smo74769);
const smo74770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74770.setAttribute('id', 'smo74770');
smo74794v0ar.push(smo74770);
const smo74771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo74771.setAttribute('id', 'smo74771');
smo74794v0ar.push(smo74771);
const smo74772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74772.setAttribute('id', 'smo74772');
smo74794v0ar.push(smo74772);
const smo74773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74773.setAttribute('id', 'smo74773');
smo74794v0ar.push(smo74773);
const smo74774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/5/n"]}'))
smo74774.setAttribute('id', 'smo74774');
smo74794v0ar.push(smo74774);
const smo74775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74775.setAttribute('id', 'smo74775');
smo74794v0ar.push(smo74775);
const smo74776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74776.setAttribute('id', 'smo74776');
smo74794v0ar.push(smo74776);
const smo74777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74777.setAttribute('id', 'smo74777');
smo74794v0ar.push(smo74777);
const smo74778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/4/n"]}'))
smo74778.setAttribute('id', 'smo74778');
smo74794v0ar.push(smo74778);
smo74794v0.addTickables(smo74794v0ar)
fmtsmo747948.joinVoices([smo74794v0]);
const fmtsmo752498 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo75249v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75249v0ar = [];
const smo75214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75214.setAttribute('id', 'smo75214');
smo75249v0ar.push(smo75214);
const smo75215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75215.setAttribute('id', 'smo75215');
const smo752150acc = new VF.Accidental('b');
smo75215.addModifier(smo752150acc, 0);
smo75249v0ar.push(smo75215);
const smo75216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75216.setAttribute('id', 'smo75216');
smo75249v0ar.push(smo75216);
const smo75217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75217.setAttribute('id', 'smo75217');
smo75249v0ar.push(smo75217);
const smo75218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75218.setAttribute('id', 'smo75218');
smo75249v0ar.push(smo75218);
const smo75219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75219.setAttribute('id', 'smo75219');
smo75249v0ar.push(smo75219);
const smo75220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75220.setAttribute('id', 'smo75220');
smo75249v0ar.push(smo75220);
const smo75221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75221.setAttribute('id', 'smo75221');
const smo752210acc = new VF.Accidental('n');
smo75221.addModifier(smo752210acc, 0);
smo75249v0ar.push(smo75221);
const smo75222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75222.setAttribute('id', 'smo75222');
smo75249v0ar.push(smo75222);
const smo75223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75223.setAttribute('id', 'smo75223');
smo75249v0ar.push(smo75223);
const smo75224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75224.setAttribute('id', 'smo75224');
smo75249v0ar.push(smo75224);
const smo75225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75225.setAttribute('id', 'smo75225');
smo75249v0ar.push(smo75225);
const smo75226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75226.setAttribute('id', 'smo75226');
smo75249v0ar.push(smo75226);
const smo75227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75227.setAttribute('id', 'smo75227');
const smo752270acc = new VF.Accidental('b');
smo75227.addModifier(smo752270acc, 0);
smo75249v0ar.push(smo75227);
const smo75228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75228.setAttribute('id', 'smo75228');
smo75249v0ar.push(smo75228);
smo75249v0.addTickables(smo75249v0ar)
fmtsmo752498.joinVoices([smo75249v0]);
const smo75249v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75249v1ar = [];
const smo75229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo75229.setAttribute('id', 'smo75229');
smo75229.setStyle({ fillStyle: "#115511" });
smo75249v1ar.push(smo75229);
const smo75230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo75230.setAttribute('id', 'smo75230');
smo75230.setStyle({ fillStyle: "#115511" });
smo75249v1ar.push(smo75230);
const smo75231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo75231.setAttribute('id', 'smo75231');
smo75231.setStyle({ fillStyle: "#115511" });
smo75249v1ar.push(smo75231);
const smo75232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo75232.setAttribute('id', 'smo75232');
smo75232.setStyle({ fillStyle: "#115511" });
smo75249v1ar.push(smo75232);
const smo75233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo75233.setAttribute('id', 'smo75233');
smo75233.setStyle({ fillStyle: "#115511" });
smo75249v1ar.push(smo75233);
smo75249v1.addTickables(smo75249v1ar)
fmtsmo752498.joinVoices([smo75249v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76696 = smo74755.getStemDirection();
smo74755.setStemDirection(dirsmo76696);
smo74756.setStemDirection(dirsmo76696);
smo74757.setStemDirection(dirsmo76696);
smo74758.setStemDirection(dirsmo76696);
const smo76696 = new VF.Beam([smo74755,smo74756,smo74757,smo74758]);
const dirsmo76697 = smo74759.getStemDirection();
smo74759.setStemDirection(dirsmo76697);
smo74760.setStemDirection(dirsmo76697);
smo74761.setStemDirection(dirsmo76697);
smo74762.setStemDirection(dirsmo76697);
const smo76697 = new VF.Beam([smo74759,smo74760,smo74761,smo74762]);
const dirsmo76698 = smo74763.getStemDirection();
smo74763.setStemDirection(dirsmo76698);
smo74764.setStemDirection(dirsmo76698);
const smo76698 = new VF.Beam([smo74763,smo74764]);
const dirsmo76699 = smo74771.getStemDirection();
smo74771.setStemDirection(dirsmo76699);
smo74772.setStemDirection(dirsmo76699);
smo74773.setStemDirection(dirsmo76699);
smo74774.setStemDirection(dirsmo76699);
const smo76699 = new VF.Beam([smo74771,smo74772,smo74773,smo74774]);
const dirsmo76700 = smo74775.getStemDirection();
smo74775.setStemDirection(dirsmo76700);
smo74776.setStemDirection(dirsmo76700);
smo74777.setStemDirection(dirsmo76700);
smo74778.setStemDirection(dirsmo76700);
const smo76700 = new VF.Beam([smo74775,smo74776,smo74777,smo74778]);
 
// formatting measures in staff group smo75335
fmtsmo747948.format([smo74794v0,smo75249v0,smo75249v1], 1117);
const stavesmo74794 = new VF.Stave(103, 713.0000000000002, 1174);
stavesmo74794.setAttribute('id', 'stavesmo74794');
stavesmo74794.setBegBarType(1);
stavesmo74794.addClef('treble');
stavesmo74794.setContext(context);
stavesmo74794.draw();
smo74794v0.draw(context, stavesmo74794);
smo76696.setContext(context);
smo76696.draw();
smo76697.setContext(context);
smo76697.draw();
smo76698.setContext(context);
smo76698.draw();
smo76699.setContext(context);
smo76699.draw();
smo76700.setContext(context);
smo76700.draw();
const stavesmo75249 = new VF.Stave(103, 836.0000000000002, 1174);
stavesmo75249.setAttribute('id', 'stavesmo75249');
stavesmo75249.setBegBarType(1);
stavesmo75249.addClef('bass');
stavesmo75249.setContext(context);
stavesmo75249.draw();
smo75249v0.draw(context, stavesmo75249);
smo75249v1.draw(context, stavesmo75249);
const leftsmo75335stavesmo747941 = new VF.StaveConnector(stavesmo74794, stavesmo75249).setType(3);
leftsmo75335stavesmo747941.setContext(context).draw();
const fmtsmo748439 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo74843v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74843v0ar = [];
const smo74795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74795.setAttribute('id', 'smo74795');
smo74843v0ar.push(smo74795);
const smo74796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74796.setAttribute('id', 'smo74796');
smo74843v0ar.push(smo74796);
const smo74797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74797.setAttribute('id', 'smo74797');
smo74843v0ar.push(smo74797);
const smo74798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74798.setAttribute('id', 'smo74798');
smo74843v0ar.push(smo74798);
const smo74799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo74800 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo74800.setAttribute('id', 'smo74800');
const ggrpsmo74799 = new VF.GraceNoteGroup([smo74800]);
ggrpsmo74799.beamNotes();
smo74799.addModifier(ggrpsmo74799, 0);
smo74799.setAttribute('id', 'smo74799');
smo74843v0ar.push(smo74799);
const smo74801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74801.setAttribute('id', 'smo74801');
smo74843v0ar.push(smo74801);
const smo74802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74802.setAttribute('id', 'smo74802');
smo74843v0ar.push(smo74802);
const smo74803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74803.setAttribute('id', 'smo74803');
const smo748030acc = new VF.Accidental('#');
smo74803.addModifier(smo748030acc, 0);
smo74843v0ar.push(smo74803);
const smo74804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74804.setAttribute('id', 'smo74804');
smo74843v0ar.push(smo74804);
const smo74805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74805.setAttribute('id', 'smo74805');
const smo748050acc = new VF.Accidental('#');
smo74805.addModifier(smo748050acc, 0);
smo74843v0ar.push(smo74805);
const smo74806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74806.setAttribute('id', 'smo74806');
smo74843v0ar.push(smo74806);
const smo74807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74807.setAttribute('id', 'smo74807');
smo74843v0ar.push(smo74807);
const smo74808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74808.setAttribute('id', 'smo74808');
smo74843v0ar.push(smo74808);
const smo74809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74809.setAttribute('id', 'smo74809');
smo74843v0ar.push(smo74809);
const smo74810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74810.setAttribute('id', 'smo74810');
smo74843v0ar.push(smo74810);
const smo74811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74811.setAttribute('id', 'smo74811');
smo74843v0ar.push(smo74811);
const smo74812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74812.setAttribute('id', 'smo74812');
smo74843v0ar.push(smo74812);
const smo74813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74813.setAttribute('id', 'smo74813');
smo74843v0ar.push(smo74813);
const smo74814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74814.setAttribute('id', 'smo74814');
smo74843v0ar.push(smo74814);
const smo74815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74815.setAttribute('id', 'smo74815');
smo74843v0ar.push(smo74815);
const smo74816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74816.setAttribute('id', 'smo74816');
smo74843v0ar.push(smo74816);
const smo74817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74817.setAttribute('id', 'smo74817');
smo74843v0ar.push(smo74817);
const smo74818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74818.setAttribute('id', 'smo74818');
smo74843v0ar.push(smo74818);
const smo74819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74819.setAttribute('id', 'smo74819');
smo74843v0ar.push(smo74819);
smo74843v0.addTickables(smo74843v0ar)
fmtsmo748439.joinVoices([smo74843v0]);
const smo74843v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74843v1ar = [];
const smo74820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74820.setAttribute('id', 'smo74820');
smo74820.setStyle({ fillStyle: '#aaaaaa7f' });
smo74843v1ar.push(smo74820);
const smo74821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74821.setAttribute('id', 'smo74821');
smo74821.setStyle({ fillStyle: '#aaaaaa7f' });
smo74843v1ar.push(smo74821);
const smo74822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74822.setAttribute('id', 'smo74822');
smo74822.setStyle({ fillStyle: "#115511" });
smo74843v1ar.push(smo74822);
const smo74823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74823.setAttribute('id', 'smo74823');
smo74823.setStyle({ fillStyle: "#115511" });
smo74843v1ar.push(smo74823);
const smo74824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74824.setAttribute('id', 'smo74824');
smo74824.setStyle({ fillStyle: '#aaaaaa7f' });
smo74843v1ar.push(smo74824);
const smo74825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74825.setAttribute('id', 'smo74825');
smo74825.setStyle({ fillStyle: "#115511" });
smo74843v1ar.push(smo74825);
const smo74826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74826.setAttribute('id', 'smo74826');
smo74826.setStyle({ fillStyle: "#115511" });
smo74843v1ar.push(smo74826);
const smo74827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74827.setAttribute('id', 'smo74827');
smo74827.setStyle({ fillStyle: "#115511" });
smo74843v1ar.push(smo74827);
smo74843v1.addTickables(smo74843v1ar)
fmtsmo748439.joinVoices([smo74843v1]);
const fmtsmo752879 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo75287v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75287v0ar = [];
const smo75250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75250.setAttribute('id', 'smo75250');
smo75287v0ar.push(smo75250);
const smo75251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75251.setAttribute('id', 'smo75251');
const smo752510acc = new VF.Accidental('b');
smo75251.addModifier(smo752510acc, 0);
smo75287v0ar.push(smo75251);
const smo75252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo75252.setAttribute('id', 'smo75252');
smo75287v0ar.push(smo75252);
const smo75253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75253.setAttribute('id', 'smo75253');
smo75287v0ar.push(smo75253);
const smo75254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75254.setAttribute('id', 'smo75254');
const smo752540acc = new VF.Accidental('n');
smo75254.addModifier(smo752540acc, 0);
smo75287v0ar.push(smo75254);
const smo75255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75255.setAttribute('id', 'smo75255');
smo75287v0ar.push(smo75255);
const smo75256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75256.setAttribute('id', 'smo75256');
smo75287v0ar.push(smo75256);
const smo75257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75257.setAttribute('id', 'smo75257');
smo75257.setStyle({ fillStyle: '#aaaaaa7f' });
smo75257.addModifier(new VF.Dot(), 0);
smo75287v0ar.push(smo75257);
const smo75258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75258.setAttribute('id', 'smo75258');
smo75287v0ar.push(smo75258);
const smo75259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75259.setAttribute('id', 'smo75259');
smo75259.setStyle({ fillStyle: '#aaaaaa7f' });
smo75259.addModifier(new VF.Dot(), 0);
smo75287v0ar.push(smo75259);
const smo75260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75260.setAttribute('id', 'smo75260');
smo75287v0ar.push(smo75260);
const smo75261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75261.setAttribute('id', 'smo75261');
smo75287v0ar.push(smo75261);
const smo75262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75262.setAttribute('id', 'smo75262');
smo75287v0ar.push(smo75262);
const smo75263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75263.setAttribute('id', 'smo75263');
smo75287v0ar.push(smo75263);
const smo75264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75264.setAttribute('id', 'smo75264');
smo75287v0ar.push(smo75264);
const smo75265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75265.setAttribute('id', 'smo75265');
smo75287v0ar.push(smo75265);
smo75287v0.addTickables(smo75287v0ar)
fmtsmo752879.joinVoices([smo75287v0]);
const smo75287v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75287v1ar = [];
const smo75266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo75266.setAttribute('id', 'smo75266');
smo75266.setStyle({ fillStyle: "#115511" });
smo75287v1ar.push(smo75266);
const smo75267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo75267.setAttribute('id', 'smo75267');
smo75267.setStyle({ fillStyle: "#115511" });
smo75287v1ar.push(smo75267);
const smo75268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75268.setAttribute('id', 'smo75268');
smo75268.setStyle({ fillStyle: "#115511" });
smo75287v1ar.push(smo75268);
const smo75269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75269.setAttribute('id', 'smo75269');
smo75269.setStyle({ fillStyle: "#115511" });
smo75287v1ar.push(smo75269);
const smo75270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75270.setAttribute('id', 'smo75270');
smo75270.setStyle({ fillStyle: "#115511" });
smo75287v1ar.push(smo75270);
const smo75271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75271.setAttribute('id', 'smo75271');
smo75271.setStyle({ fillStyle: "#115511" });
smo75287v1ar.push(smo75271);
smo75287v1.addTickables(smo75287v1ar)
fmtsmo752879.joinVoices([smo75287v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76715 = smo74795.getStemDirection();
smo74795.setStemDirection(dirsmo76715);
smo74796.setStemDirection(dirsmo76715);
const smo76715 = new VF.Beam([smo74795,smo74796]);
const dirsmo76716 = smo74801.getStemDirection();
smo74801.setStemDirection(dirsmo76716);
smo74802.setStemDirection(dirsmo76716);
smo74803.setStemDirection(dirsmo76716);
smo74804.setStemDirection(dirsmo76716);
const smo76716 = new VF.Beam([smo74801,smo74802,smo74803,smo74804]);
const dirsmo76717 = smo74805.getStemDirection();
smo74805.setStemDirection(dirsmo76717);
smo74806.setStemDirection(dirsmo76717);
const smo76717 = new VF.Beam([smo74805,smo74806]);
const dirsmo76718 = smo74809.getStemDirection();
smo74809.setStemDirection(dirsmo76718);
smo74810.setStemDirection(dirsmo76718);
const smo76718 = new VF.Beam([smo74809,smo74810]);
const dirsmo76719 = smo74811.getStemDirection();
smo74811.setStemDirection(dirsmo76719);
smo74812.setStemDirection(dirsmo76719);
smo74813.setStemDirection(dirsmo76719);
smo74814.setStemDirection(dirsmo76719);
const smo76719 = new VF.Beam([smo74811,smo74812,smo74813,smo74814]);
const dirsmo76720 = smo74815.getStemDirection();
smo74815.setStemDirection(dirsmo76720);
smo74816.setStemDirection(dirsmo76720);
const smo76720 = new VF.Beam([smo74815,smo74816]);
 
// formatting measures in staff group smo75335
fmtsmo748439.format([smo74843v0,smo74843v1,smo75287v0,smo75287v1], 1117);
const stavesmo74843 = new VF.Stave(103, 1000.0000000000002, 1174);
stavesmo74843.setAttribute('id', 'stavesmo74843');
stavesmo74843.setBegBarType(1);
stavesmo74843.addClef('treble');
stavesmo74843.setContext(context);
stavesmo74843.draw();
smo74843v0.draw(context, stavesmo74843);
smo74843v1.draw(context, stavesmo74843);
smo76715.setContext(context);
smo76715.draw();
smo76716.setContext(context);
smo76716.draw();
smo76717.setContext(context);
smo76717.draw();
smo76718.setContext(context);
smo76718.draw();
smo76719.setContext(context);
smo76719.draw();
smo76720.setContext(context);
smo76720.draw();
const stavesmo75287 = new VF.Stave(103, 1149.0000000000002, 1174);
stavesmo75287.setAttribute('id', 'stavesmo75287');
stavesmo75287.setBegBarType(1);
stavesmo75287.addClef('bass');
stavesmo75287.setContext(context);
stavesmo75287.draw();
smo75287v0.draw(context, stavesmo75287);
smo75287v1.draw(context, stavesmo75287);
const leftsmo75335stavesmo748431 = new VF.StaveConnector(stavesmo74843, stavesmo75287).setType(3);
leftsmo75335stavesmo748431.setContext(context).draw();
const fmtsmo7489110 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo74891v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74891v0ar = [];
const smo74844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74844.setAttribute('id', 'smo74844');
smo74891v0ar.push(smo74844);
const smo74845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74845.setAttribute('id', 'smo74845');
smo74891v0ar.push(smo74845);
const smo74846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74846.setAttribute('id', 'smo74846');
const smo748460acc = new VF.Accidental('#');
smo74846.addModifier(smo748460acc, 0);
smo74891v0ar.push(smo74846);
const smo74847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74847.setAttribute('id', 'smo74847');
smo74891v0ar.push(smo74847);
const smo74848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74848.setAttribute('id', 'smo74848');
const smo748480acc = new VF.Accidental('#');
smo74848.addModifier(smo748480acc, 0);
smo74891v0ar.push(smo74848);
const smo74849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74849.setAttribute('id', 'smo74849');
smo74891v0ar.push(smo74849);
const smo74850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74850.setAttribute('id', 'smo74850');
smo74891v0ar.push(smo74850);
const smo74851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74851.setAttribute('id', 'smo74851');
smo74891v0ar.push(smo74851);
const smo74852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74852.setAttribute('id', 'smo74852');
smo74891v0ar.push(smo74852);
const smo74853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74853.setAttribute('id', 'smo74853');
smo74891v0ar.push(smo74853);
const smo74854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74854.setAttribute('id', 'smo74854');
smo74891v0ar.push(smo74854);
const smo74855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74855.setAttribute('id', 'smo74855');
smo74891v0ar.push(smo74855);
const smo74856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74856.setAttribute('id', 'smo74856');
smo74891v0ar.push(smo74856);
const smo74857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74857.setAttribute('id', 'smo74857');
smo74891v0ar.push(smo74857);
const smo74858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74858.setAttribute('id', 'smo74858');
smo74891v0ar.push(smo74858);
const smo74859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74859.setAttribute('id', 'smo74859');
smo74891v0ar.push(smo74859);
const smo74860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74860.setAttribute('id', 'smo74860');
smo74891v0ar.push(smo74860);
const smo74861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74861.setAttribute('id', 'smo74861');
smo74891v0ar.push(smo74861);
const smo74862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74862.setAttribute('id', 'smo74862');
smo74891v0ar.push(smo74862);
const smo74863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74863.setAttribute('id', 'smo74863');
smo74891v0ar.push(smo74863);
const smo74864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74864.setAttribute('id', 'smo74864');
smo74891v0ar.push(smo74864);
const smo74865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74865.setAttribute('id', 'smo74865');
smo74891v0ar.push(smo74865);
const smo74866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74866.setAttribute('id', 'smo74866');
smo74891v0ar.push(smo74866);
const smo74867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74867.setAttribute('id', 'smo74867');
smo74891v0ar.push(smo74867);
const smo74868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74868.setAttribute('id', 'smo74868');
smo74891v0ar.push(smo74868);
smo74891v0.addTickables(smo74891v0ar)
fmtsmo7489110.joinVoices([smo74891v0]);
const smo74891v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74891v1ar = [];
const smo74869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74869.setAttribute('id', 'smo74869');
smo74869.setStyle({ fillStyle: '#aaaaaa7f' });
smo74891v1ar.push(smo74869);
const smo74870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74870.setAttribute('id', 'smo74870');
smo74870.setStyle({ fillStyle: "#115511" });
smo74891v1ar.push(smo74870);
const smo74871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74871.setAttribute('id', 'smo74871');
smo74871.setStyle({ fillStyle: "#115511" });
smo74891v1ar.push(smo74871);
const smo74872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74872.setAttribute('id', 'smo74872');
smo74872.setStyle({ fillStyle: '#aaaaaa7f' });
smo74891v1ar.push(smo74872);
const smo74873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74873.setAttribute('id', 'smo74873');
smo74873.setStyle({ fillStyle: "#115511" });
smo74891v1ar.push(smo74873);
const smo74874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74874.setAttribute('id', 'smo74874');
smo74874.setStyle({ fillStyle: "#115511" });
smo74891v1ar.push(smo74874);
const smo74875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74875.setAttribute('id', 'smo74875');
smo74875.setStyle({ fillStyle: "#115511" });
smo74875.addModifier(new VF.Dot(), 0);
smo74891v1ar.push(smo74875);
smo74891v1.addTickables(smo74891v1ar)
fmtsmo7489110.joinVoices([smo74891v1]);
const fmtsmo7532110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo75321v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75321v0ar = [];
const smo75288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75288.setAttribute('id', 'smo75288');
smo75321v0ar.push(smo75288);
const smo75289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75289.setAttribute('id', 'smo75289');
smo75289.setStyle({ fillStyle: '#aaaaaa7f' });
smo75289.addModifier(new VF.Dot(), 0);
smo75321v0ar.push(smo75289);
const smo75290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75290.setAttribute('id', 'smo75290');
smo75321v0ar.push(smo75290);
const smo75291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75291.setAttribute('id', 'smo75291');
smo75291.setStyle({ fillStyle: '#aaaaaa7f' });
smo75291.addModifier(new VF.Dot(), 0);
smo75321v0ar.push(smo75291);
const smo75292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75292.setAttribute('id', 'smo75292');
smo75321v0ar.push(smo75292);
const smo75293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75293.setAttribute('id', 'smo75293');
smo75321v0ar.push(smo75293);
const smo75294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75294.setAttribute('id', 'smo75294');
smo75321v0ar.push(smo75294);
const smo75295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75295.setAttribute('id', 'smo75295');
smo75321v0ar.push(smo75295);
const smo75296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75296.setAttribute('id', 'smo75296');
smo75321v0ar.push(smo75296);
const smo75297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75297.setAttribute('id', 'smo75297');
smo75321v0ar.push(smo75297);
const smo75298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75298.setAttribute('id', 'smo75298');
smo75321v0ar.push(smo75298);
const smo75299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75299.setAttribute('id', 'smo75299');
smo75321v0ar.push(smo75299);
const smo75300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75300.setAttribute('id', 'smo75300');
smo75321v0ar.push(smo75300);
smo75321v0.addTickables(smo75321v0ar)
fmtsmo7532110.joinVoices([smo75321v0]);
const smo75321v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75321v1ar = [];
const smo75301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75301.setAttribute('id', 'smo75301');
smo75301.setStyle({ fillStyle: "#115511" });
smo75321v1ar.push(smo75301);
const smo75302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75302.setAttribute('id', 'smo75302');
smo75302.setStyle({ fillStyle: "#115511" });
smo75321v1ar.push(smo75302);
const smo75303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75303.setAttribute('id', 'smo75303');
smo75303.setStyle({ fillStyle: "#115511" });
smo75321v1ar.push(smo75303);
const smo75304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo75304.setAttribute('id', 'smo75304');
smo75304.setStyle({ fillStyle: "#115511" });
smo75321v1ar.push(smo75304);
const smo75305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75305.setAttribute('id', 'smo75305');
smo75305.setStyle({ fillStyle: "#115511" });
smo75321v1ar.push(smo75305);
smo75321v1.addTickables(smo75321v1ar)
fmtsmo7532110.joinVoices([smo75321v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76734 = smo74844.getStemDirection();
smo74844.setStemDirection(dirsmo76734);
smo74845.setStemDirection(dirsmo76734);
smo74846.setStemDirection(dirsmo76734);
smo74847.setStemDirection(dirsmo76734);
const smo76734 = new VF.Beam([smo74844,smo74845,smo74846,smo74847]);
const dirsmo76735 = smo74848.getStemDirection();
smo74848.setStemDirection(dirsmo76735);
smo74849.setStemDirection(dirsmo76735);
const smo76735 = new VF.Beam([smo74848,smo74849]);
const dirsmo76736 = smo74852.getStemDirection();
smo74852.setStemDirection(dirsmo76736);
smo74853.setStemDirection(dirsmo76736);
const smo76736 = new VF.Beam([smo74852,smo74853]);
const dirsmo76737 = smo74854.getStemDirection();
smo74854.setStemDirection(dirsmo76737);
smo74855.setStemDirection(dirsmo76737);
smo74856.setStemDirection(dirsmo76737);
smo74857.setStemDirection(dirsmo76737);
const smo76737 = new VF.Beam([smo74854,smo74855,smo74856,smo74857]);
const dirsmo76738 = smo74858.getStemDirection();
smo74858.setStemDirection(dirsmo76738);
smo74859.setStemDirection(dirsmo76738);
const smo76738 = new VF.Beam([smo74858,smo74859]);
const dirsmo76739 = smo74862.getStemDirection();
smo74862.setStemDirection(dirsmo76739);
smo74863.setStemDirection(dirsmo76739);
const smo76739 = new VF.Beam([smo74862,smo74863]);
const dirsmo76740 = smo74864.getStemDirection();
smo74864.setStemDirection(dirsmo76740);
smo74865.setStemDirection(dirsmo76740);
const smo76740 = new VF.Beam([smo74864,smo74865]);
 
// formatting measures in staff group smo75335
fmtsmo7489110.format([smo74891v0,smo74891v1,smo75321v0,smo75321v1], 958);
const stavesmo74891 = new VF.Stave(103, 1323.0000000000002, 1022);
stavesmo74891.setAttribute('id', 'stavesmo74891');
stavesmo74891.setBegBarType(1);
stavesmo74891.setEndBarType(3);
stavesmo74891.addClef('treble');
stavesmo74891.setContext(context);
stavesmo74891.draw();
smo74891v0.draw(context, stavesmo74891);
smo74891v1.draw(context, stavesmo74891);
smo76734.setContext(context);
smo76734.draw();
smo76735.setContext(context);
smo76735.draw();
smo76736.setContext(context);
smo76736.draw();
smo76737.setContext(context);
smo76737.draw();
smo76738.setContext(context);
smo76738.draw();
smo76739.setContext(context);
smo76739.draw();
smo76740.setContext(context);
smo76740.draw();
const stavesmo75321 = new VF.Stave(103, 1466.0000000000002, 1022);
stavesmo75321.setAttribute('id', 'stavesmo75321');
stavesmo75321.setBegBarType(1);
stavesmo75321.setEndBarType(3);
stavesmo75321.addClef('bass');
stavesmo75321.setContext(context);
stavesmo75321.draw();
smo75321v0.draw(context, stavesmo75321);
smo75321v1.draw(context, stavesmo75321);
const leftsmo75335stavesmo748911 = new VF.StaveConnector(stavesmo74891, stavesmo75321).setType(3);
leftsmo75335stavesmo748911.setContext(context).draw();
// modifier from 0-7-0-9 to 0-7-0-10
const smo76883 = new VF.StaveTie({ first_note: smo74728, last_note: smo74729, 
          firstNote: smo74728, lastNote: smo74729, first_indices: [0], last_indices: [0]});
smo76883.setContext(context).draw();
// modifier from 0-7-0-12 to 0-7-0-13
const smo76884 = new VF.StaveTie({ first_note: smo74731, last_note: smo74733, 
          firstNote: smo74731, lastNote: smo74733, first_indices: [0], last_indices: [0]});
smo76884.setContext(context).draw();
// modifier from 0-7-0-15 to 0-7-0-16
const smo76885 = new VF.StaveTie({ first_note: smo74735, last_note: smo74737, 
          firstNote: smo74735, lastNote: smo74737, first_indices: [0], last_indices: [0]});
smo76885.setContext(context).draw();
// modifier from 0-8-0-9 to 0-8-0-10
const smo76886 = new VF.StaveTie({ first_note: smo74764, last_note: smo74765, 
          firstNote: smo74764, lastNote: smo74765, first_indices: [0], last_indices: [0]});
smo76886.setContext(context).draw();
// modifier from 0-8-0-12 to 0-8-0-13
const smo76887 = new VF.StaveTie({ first_note: smo74767, last_note: smo74769, 
          firstNote: smo74767, lastNote: smo74769, first_indices: [0], last_indices: [0]});
smo76887.setContext(context).draw();
// modifier from 0-9-0-1 to 0-9-0-2
const smo76888 = new VF.StaveTie({ first_note: smo74796, last_note: smo74797, 
          firstNote: smo74796, lastNote: smo74797, first_indices: [0], last_indices: [0]});
smo76888.setContext(context).draw();
// modifier from 0-9-0-10 to 0-9-0-11
const smo76889 = new VF.StaveTie({ first_note: smo74806, last_note: smo74807, 
          firstNote: smo74806, lastNote: smo74807, first_indices: [0], last_indices: [0]});
smo76889.setContext(context).draw();
// modifier from 0-9-0-20 to 0-9-0-21
const smo76890 = new VF.StaveTie({ first_note: smo74816, last_note: smo74817, 
          firstNote: smo74816, lastNote: smo74817, first_indices: [0], last_indices: [0]});
smo76890.setContext(context).draw();
// modifier from 0-10-0-5 to 0-10-0-6
const smo76891 = new VF.StaveTie({ first_note: smo74849, last_note: smo74850, 
          firstNote: smo74849, lastNote: smo74850, first_indices: [0], last_indices: [0]});
smo76891.setContext(context).draw();
// modifier from 0-10-0-15 to 0-10-0-16
const smo76892 = new VF.StaveTie({ first_note: smo74859, last_note: smo74860, 
          firstNote: smo74859, lastNote: smo74860, first_indices: [0], last_indices: [0]});
smo76892.setContext(context).draw();
// modifier from 0-10-0-21 to 0-10-0-22
const smo76893 = new VF.StaveTie({ first_note: smo74865, last_note: smo74866, 
          firstNote: smo74865, lastNote: smo74866, first_indices: [0], last_indices: [0]});
smo76893.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo76894 = new VF.Curve(smo74679, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo76894.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo76895 = new VF.Curve(null, smo74729, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo76895.setContext(context).draw();
// modifier from 0-8-0-0 to 0-8-0-10
const smo76896 = new VF.Curve(smo74755, smo74765, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":45},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo76896.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo76897 = new VF.Curve(smo74771, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo76897.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo76898 = new VF.Curve(null, smo74797, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo76898.setContext(context).draw();
// modifier from 0-9-0-5 to 0-9-0-11
const smo76899 = new VF.Curve(smo74801, smo74807, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo76899.setContext(context).draw();
// modifier from 0-9-0-13 to 0-9-0-21
const smo76900 = new VF.Curve(smo74809, smo74817, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":30},{"x":0,"y":30}],"invert":true,"position":2,"position_end":2}'));
smo76900.setContext(context).draw();
}
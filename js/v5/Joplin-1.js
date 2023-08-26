// @@ The Entertainer p 2/3  by Scott Joplin
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
const fmtsmo10109830 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo101098v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101098v0ar = [];
const smo101078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo101078.setAttribute('id', 'smo101078');
smo101098v0ar.push(smo101078);
const smo101079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo101079.setAttribute('id', 'smo101079');
smo101098v0ar.push(smo101079);
const smo101080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo101080.setAttribute('id', 'smo101080');
smo101098v0ar.push(smo101080);
const smo101081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo101081.setAttribute('id', 'smo101081');
smo101098v0ar.push(smo101081);
const smo101082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101082.setAttribute('id', 'smo101082');
smo101098v0ar.push(smo101082);
const smo101083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101083.setAttribute('id', 'smo101083');
smo101098v0ar.push(smo101083);
const smo101084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101084.setAttribute('id', 'smo101084');
smo101098v0ar.push(smo101084);
smo101098v0.addTickables(smo101098v0ar)
fmtsmo10109830.joinVoices([smo101098v0]);
const fmtsmo10390830 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo103908v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103908v0ar = [];
const smo103891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103891.setAttribute('id', 'smo103891');
smo103908v0ar.push(smo103891);
const smo103892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103892.setAttribute('id', 'smo103892');
smo103908v0ar.push(smo103892);
const smo103893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103893.setAttribute('id', 'smo103893');
smo103908v0ar.push(smo103893);
const smo103894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103894.setAttribute('id', 'smo103894');
smo103908v0ar.push(smo103894);
smo103908v0.addTickables(smo103908v0ar)
fmtsmo10390830.joinVoices([smo103908v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105641 = smo101078.getStemDirection();
smo101078.setStemDirection(dirsmo105641);
smo101079.setStemDirection(dirsmo105641);
smo101080.setStemDirection(dirsmo105641);
const smo105641 = new VF.Beam([smo101078,smo101079,smo101080]);
const dirsmo105642 = smo101081.getStemDirection();
smo101081.setStemDirection(dirsmo105642);
smo101082.setStemDirection(dirsmo105642);
smo101083.setStemDirection(dirsmo105642);
smo101084.setStemDirection(dirsmo105642);
const smo105642 = new VF.Beam([smo101081,smo101082,smo101083,smo101084]);
const dirsmo105645 = smo103891.getStemDirection();
smo103891.setStemDirection(dirsmo105645);
smo103892.setStemDirection(dirsmo105645);
const smo105645 = new VF.Beam([smo103891,smo103892]);
const dirsmo105646 = smo103893.getStemDirection();
smo103893.setStemDirection(dirsmo105646);
smo103894.setStemDirection(dirsmo105646);
const smo105646 = new VF.Beam([smo103893,smo103894]);
 
// formatting measures in staff group smo99711
fmtsmo10109830.format([smo101098v0,smo103908v0], 237);
const stavesmo101098 = new VF.Stave(73, 411, 295);
stavesmo101098.setAttribute('id', 'stavesmo101098');
stavesmo101098.setBegBarType(1);
stavesmo101098.addClef('treble');
stavesmo101098.setContext(context);
stavesmo101098.draw();
smo101098v0.draw(context, stavesmo101098);
smo105641.setContext(context);
smo105641.draw();
smo105642.setContext(context);
smo105642.draw();
const stavesmo103908 = new VF.Stave(73, 561, 295);
stavesmo103908.setAttribute('id', 'stavesmo103908');
stavesmo103908.setBegBarType(1);
stavesmo103908.addClef('bass');
stavesmo103908.setContext(context);
stavesmo103908.draw();
smo103908v0.draw(context, stavesmo103908);
smo105645.setContext(context);
smo105645.draw();
smo105646.setContext(context);
smo105646.draw();
const leftsmo99711stavesmo1010981 = new VF.StaveConnector(stavesmo101098, stavesmo103908).setType(3);
leftsmo99711stavesmo1010981.setContext(context).draw();
const fmtsmo10112031 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo101120v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101120v0ar = [];
const smo101099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101099.setAttribute('id', 'smo101099');
smo101120v0ar.push(smo101099);
const smo101100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo101100.setAttribute('id', 'smo101100');
smo101120v0ar.push(smo101100);
const smo101101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101101.setAttribute('id', 'smo101101');
smo101120v0ar.push(smo101101);
const smo101102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101102.setAttribute('id', 'smo101102');
smo101120v0ar.push(smo101102);
const smo101103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101103.setAttribute('id', 'smo101103');
smo101120v0ar.push(smo101103);
const smo101104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101104.setAttribute('id', 'smo101104');
smo101120v0ar.push(smo101104);
const smo101105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101105.setAttribute('id', 'smo101105');
smo101120v0ar.push(smo101105);
const smo101106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101106.setAttribute('id', 'smo101106');
smo101120v0ar.push(smo101106);
smo101120v0.addTickables(smo101120v0ar)
fmtsmo10112031.joinVoices([smo101120v0]);
const fmtsmo10392631 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo103926v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103926v0ar = [];
const smo103909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo103909.setAttribute('id', 'smo103909');
smo103926v0ar.push(smo103909);
const smo103910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo103910.setAttribute('id', 'smo103910');
smo103926v0ar.push(smo103910);
const smo103911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo103911.setAttribute('id', 'smo103911');
smo103926v0ar.push(smo103911);
const smo103912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo103912.setAttribute('id', 'smo103912');
const smo1039120acc = new VF.Accidental('b');
smo103912.addModifier(smo1039120acc, 0);
smo103926v0ar.push(smo103912);
smo103926v0.addTickables(smo103926v0ar)
fmtsmo10392631.joinVoices([smo103926v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105649 = smo101099.getStemDirection();
smo101099.setStemDirection(dirsmo105649);
smo101100.setStemDirection(dirsmo105649);
smo101101.setStemDirection(dirsmo105649);
smo101102.setStemDirection(dirsmo105649);
const smo105649 = new VF.Beam([smo101099,smo101100,smo101101,smo101102]);
const dirsmo105650 = smo101103.getStemDirection();
smo101103.setStemDirection(dirsmo105650);
smo101104.setStemDirection(dirsmo105650);
smo101105.setStemDirection(dirsmo105650);
smo101106.setStemDirection(dirsmo105650);
const smo105650 = new VF.Beam([smo101103,smo101104,smo101105,smo101106]);
const dirsmo105653 = smo103909.getStemDirection();
smo103909.setStemDirection(dirsmo105653);
smo103910.setStemDirection(dirsmo105653);
const smo105653 = new VF.Beam([smo103909,smo103910]);
const dirsmo105654 = smo103911.getStemDirection();
smo103911.setStemDirection(dirsmo105654);
smo103912.setStemDirection(dirsmo105654);
const smo105654 = new VF.Beam([smo103911,smo103912]);
 
// formatting measures in staff group smo99711
fmtsmo10112031.format([smo101120v0,smo103926v0], 281);
const stavesmo101120 = new VF.Stave(368, 411, 295);
stavesmo101120.setAttribute('id', 'stavesmo101120');
stavesmo101120.setBegBarType(VF.Barline.type.NONE);
stavesmo101120.setContext(context);
stavesmo101120.draw();
smo101120v0.draw(context, stavesmo101120);
smo105649.setContext(context);
smo105649.draw();
smo105650.setContext(context);
smo105650.draw();
const stavesmo103926 = new VF.Stave(368, 561, 295);
stavesmo103926.setAttribute('id', 'stavesmo103926');
stavesmo103926.setBegBarType(VF.Barline.type.NONE);
stavesmo103926.setContext(context);
stavesmo103926.draw();
smo103926v0.draw(context, stavesmo103926);
smo105653.setContext(context);
smo105653.draw();
smo105654.setContext(context);
smo105654.draw();
const fmtsmo10113932 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo101139v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101139v0ar = [];
const smo101121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101121.setAttribute('id', 'smo101121');
smo101139v0ar.push(smo101121);
const smo101122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101122.setAttribute('id', 'smo101122');
smo101139v0ar.push(smo101122);
const smo101123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101123.setAttribute('id', 'smo101123');
smo101139v0ar.push(smo101123);
const smo101124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo101124.setAttribute('id', 'smo101124');
const smo1011240acc = new VF.Accidental('b');
smo101124.addModifier(smo1011240acc, 0);
smo101139v0ar.push(smo101124);
const smo101125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101125.setAttribute('id', 'smo101125');
const smo1011250acc = new VF.Accidental('n');
smo101125.addModifier(smo1011250acc, 0);
smo101139v0ar.push(smo101125);
smo101139v0.addTickables(smo101139v0ar)
fmtsmo10113932.joinVoices([smo101139v0]);
const fmtsmo10394432 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo103944v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103944v0ar = [];
const smo103927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo103927.setAttribute('id', 'smo103927');
smo103944v0ar.push(smo103927);
const smo103928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103928.setAttribute('id', 'smo103928');
smo103944v0ar.push(smo103928);
const smo103929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103929.setAttribute('id', 'smo103929');
smo103944v0ar.push(smo103929);
const smo103930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
smo103930.setAttribute('id', 'smo103930');
const smo1039300acc = new VF.Accidental('b');
smo103930.addModifier(smo1039300acc, 0);
smo103944v0ar.push(smo103930);
smo103944v0.addTickables(smo103944v0ar)
fmtsmo10394432.joinVoices([smo103944v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105657 = smo101122.getStemDirection();
smo101122.setStemDirection(dirsmo105657);
smo101123.setStemDirection(dirsmo105657);
smo101124.setStemDirection(dirsmo105657);
smo101125.setStemDirection(dirsmo105657);
const smo105657 = new VF.Beam([smo101122,smo101123,smo101124,smo101125]);
const dirsmo105660 = smo103927.getStemDirection();
smo103927.setStemDirection(dirsmo105660);
smo103928.setStemDirection(dirsmo105660);
const smo105660 = new VF.Beam([smo103927,smo103928]);
const dirsmo105661 = smo103929.getStemDirection();
smo103929.setStemDirection(dirsmo105661);
smo103930.setStemDirection(dirsmo105661);
const smo105661 = new VF.Beam([smo103929,smo103930]);
 
// formatting measures in staff group smo99711
fmtsmo10113932.format([smo101139v0,smo103944v0], 281);
const stavesmo101139 = new VF.Stave(663, 411, 295);
stavesmo101139.setAttribute('id', 'stavesmo101139');
stavesmo101139.setBegBarType(VF.Barline.type.NONE);
stavesmo101139.setContext(context);
stavesmo101139.draw();
smo101139v0.draw(context, stavesmo101139);
smo105657.setContext(context);
smo105657.draw();
const stavesmo103944 = new VF.Stave(663, 561, 295);
stavesmo103944.setAttribute('id', 'stavesmo103944');
stavesmo103944.setBegBarType(VF.Barline.type.NONE);
stavesmo103944.setContext(context);
stavesmo103944.draw();
smo103944v0.draw(context, stavesmo103944);
smo105660.setContext(context);
smo105660.draw();
smo105661.setContext(context);
smo105661.draw();
const fmtsmo10116133 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo101161v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101161v0ar = [];
const smo101140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101140.setAttribute('id', 'smo101140');
smo101161v0ar.push(smo101140);
const smo101142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101142.setAttribute('id', 'smo101142');
smo101161v0ar.push(smo101142);
const smo101143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101143.setAttribute('id', 'smo101143');
smo101161v0ar.push(smo101143);
const smo101144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101144.setAttribute('id', 'smo101144');
smo101161v0ar.push(smo101144);
const smo101145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101145.setAttribute('id', 'smo101145');
smo101161v0ar.push(smo101145);
const smo101146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101146.setAttribute('id', 'smo101146');
smo101161v0ar.push(smo101146);
const smo101147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101147.setAttribute('id', 'smo101147');
smo101161v0ar.push(smo101147);
smo101161v0.addTickables(smo101161v0ar)
fmtsmo10116133.joinVoices([smo101161v0]);
const fmtsmo10396233 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo103962v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103962v0ar = [];
const smo103945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo103945.setAttribute('id', 'smo103945');
smo103962v0ar.push(smo103945);
const smo103946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo103946.setAttribute('id', 'smo103946');
smo103962v0ar.push(smo103946);
const smo103947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo103947.setAttribute('id', 'smo103947');
const smo1039470acc = new VF.Accidental('b');
smo103947.addModifier(smo1039470acc, 0);
const smo1039473acc = new VF.Accidental('b');
smo103947.addModifier(smo1039473acc, 3);
smo103962v0ar.push(smo103947);
const smo103948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo103948.setAttribute('id', 'smo103948');
smo103962v0ar.push(smo103948);
smo103962v0.addTickables(smo103962v0ar)
fmtsmo10396233.joinVoices([smo103962v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105664 = smo101140.getStemDirection();
smo101140.setStemDirection(dirsmo105664);
smo101142.setStemDirection(dirsmo105664);
smo101143.setStemDirection(dirsmo105664);
const smo105664 = new VF.Beam([smo101140,smo101142,smo101143]);
const dirsmo105665 = smo101144.getStemDirection();
smo101144.setStemDirection(dirsmo105665);
smo101145.setStemDirection(dirsmo105665);
smo101146.setStemDirection(dirsmo105665);
smo101147.setStemDirection(dirsmo105665);
const smo105665 = new VF.Beam([smo101144,smo101145,smo101146,smo101147]);
const dirsmo105668 = smo103945.getStemDirection();
smo103945.setStemDirection(dirsmo105668);
smo103946.setStemDirection(dirsmo105668);
const smo105668 = new VF.Beam([smo103945,smo103946]);
const dirsmo105669 = smo103947.getStemDirection();
smo103947.setStemDirection(dirsmo105669);
smo103948.setStemDirection(dirsmo105669);
const smo105669 = new VF.Beam([smo103947,smo103948]);
 
// formatting measures in staff group smo99711
fmtsmo10116133.format([smo101161v0,smo103962v0], 281);
const stavesmo101161 = new VF.Stave(958, 411, 295);
stavesmo101161.setAttribute('id', 'stavesmo101161');
stavesmo101161.setBegBarType(VF.Barline.type.NONE);
stavesmo101161.setContext(context);
stavesmo101161.draw();
smo101161v0.draw(context, stavesmo101161);
smo105664.setContext(context);
smo105664.draw();
smo105665.setContext(context);
smo105665.draw();
const stavesmo103962 = new VF.Stave(958, 561, 295);
stavesmo103962.setAttribute('id', 'stavesmo103962');
stavesmo103962.setBegBarType(VF.Barline.type.NONE);
stavesmo103962.setContext(context);
stavesmo103962.draw();
smo103962v0.draw(context, stavesmo103962);
smo105668.setContext(context);
smo105668.draw();
smo105669.setContext(context);
smo105669.draw();
const fmtsmo10118334 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo101183v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101183v0ar = [];
const smo101162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101162.setAttribute('id', 'smo101162');
smo101183v0ar.push(smo101162);
const smo101163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101163.setAttribute('id', 'smo101163');
smo101183v0ar.push(smo101163);
const smo101164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101164.setAttribute('id', 'smo101164');
smo101183v0ar.push(smo101164);
const smo101165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101165.setAttribute('id', 'smo101165');
smo101183v0ar.push(smo101165);
const smo101166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101166.setAttribute('id', 'smo101166');
smo101183v0ar.push(smo101166);
const smo101167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101167.setAttribute('id', 'smo101167');
smo101183v0ar.push(smo101167);
const smo101168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101168.setAttribute('id', 'smo101168');
smo101183v0ar.push(smo101168);
const smo101169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101169.setAttribute('id', 'smo101169');
smo101183v0ar.push(smo101169);
smo101183v0.addTickables(smo101183v0ar)
fmtsmo10118334.joinVoices([smo101183v0]);
const fmtsmo10398034 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo103980v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103980v0ar = [];
const smo103963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103963.setAttribute('id', 'smo103963');
smo103980v0ar.push(smo103963);
const smo103964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103964.setAttribute('id', 'smo103964');
smo103980v0ar.push(smo103964);
const smo103965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103965.setAttribute('id', 'smo103965');
smo103980v0ar.push(smo103965);
const smo103966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103966.setAttribute('id', 'smo103966');
smo103980v0ar.push(smo103966);
smo103980v0.addTickables(smo103980v0ar)
fmtsmo10398034.joinVoices([smo103980v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105672 = smo101162.getStemDirection();
smo101162.setStemDirection(dirsmo105672);
smo101163.setStemDirection(dirsmo105672);
smo101164.setStemDirection(dirsmo105672);
smo101165.setStemDirection(dirsmo105672);
const smo105672 = new VF.Beam([smo101162,smo101163,smo101164,smo101165]);
const dirsmo105673 = smo101166.getStemDirection();
smo101166.setStemDirection(dirsmo105673);
smo101167.setStemDirection(dirsmo105673);
smo101168.setStemDirection(dirsmo105673);
smo101169.setStemDirection(dirsmo105673);
const smo105673 = new VF.Beam([smo101166,smo101167,smo101168,smo101169]);
const dirsmo105676 = smo103963.getStemDirection();
smo103963.setStemDirection(dirsmo105676);
smo103964.setStemDirection(dirsmo105676);
const smo105676 = new VF.Beam([smo103963,smo103964]);
const dirsmo105677 = smo103965.getStemDirection();
smo103965.setStemDirection(dirsmo105677);
smo103966.setStemDirection(dirsmo105677);
const smo105677 = new VF.Beam([smo103965,smo103966]);
 
// formatting measures in staff group smo99711
fmtsmo10118334.format([smo101183v0,smo103980v0], 281);
const stavesmo101183 = new VF.Stave(1253, 411, 295);
stavesmo101183.setAttribute('id', 'stavesmo101183');
stavesmo101183.setBegBarType(VF.Barline.type.NONE);
stavesmo101183.setContext(context);
stavesmo101183.draw();
smo101183v0.draw(context, stavesmo101183);
smo105672.setContext(context);
smo105672.draw();
smo105673.setContext(context);
smo105673.draw();
const stavesmo103980 = new VF.Stave(1253, 561, 295);
stavesmo103980.setAttribute('id', 'stavesmo103980');
stavesmo103980.setBegBarType(VF.Barline.type.NONE);
stavesmo103980.setContext(context);
stavesmo103980.draw();
smo103980v0.draw(context, stavesmo103980);
smo105676.setContext(context);
smo105676.draw();
smo105677.setContext(context);
smo105677.draw();
const fmtsmo10120235 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo101202v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101202v0ar = [];
const smo101184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","an/4/n"]}'))
smo101184.setAttribute('id', 'smo101184');
const smo1011840acc = new VF.Accidental('b');
smo101184.addModifier(smo1011840acc, 0);
smo101202v0ar.push(smo101184);
const smo101185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo101185.setAttribute('id', 'smo101185');
smo101202v0ar.push(smo101185);
const smo101186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","en/5/n"]}'))
smo101186.setAttribute('id', 'smo101186');
smo101202v0ar.push(smo101186);
const smo101187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo101187.setAttribute('id', 'smo101187');
smo101202v0ar.push(smo101187);
const smo101188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101188.setAttribute('id', 'smo101188');
smo101202v0ar.push(smo101188);
smo101202v0.addTickables(smo101202v0ar)
fmtsmo10120235.joinVoices([smo101202v0]);
const fmtsmo10399835 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo103998v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103998v0ar = [];
const smo103981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo103981.setAttribute('id', 'smo103981');
smo103998v0ar.push(smo103981);
const smo103982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo103982.setAttribute('id', 'smo103982');
smo103998v0ar.push(smo103982);
const smo103983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo103983.setAttribute('id', 'smo103983');
smo103998v0ar.push(smo103983);
const smo103984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo103984.setAttribute('id', 'smo103984');
smo103998v0ar.push(smo103984);
smo103998v0.addTickables(smo103998v0ar)
fmtsmo10399835.joinVoices([smo103998v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105680 = smo101184.getStemDirection();
smo101184.setStemDirection(dirsmo105680);
smo101185.setStemDirection(dirsmo105680);
const smo105680 = new VF.Beam([smo101184,smo101185]);
const dirsmo105681 = smo101186.getStemDirection();
smo101186.setStemDirection(dirsmo105681);
smo101187.setStemDirection(dirsmo105681);
smo101188.setStemDirection(dirsmo105681);
const smo105681 = new VF.Beam([smo101186,smo101187,smo101188]);
const dirsmo105684 = smo103981.getStemDirection();
smo103981.setStemDirection(dirsmo105684);
smo103982.setStemDirection(dirsmo105684);
const smo105684 = new VF.Beam([smo103981,smo103982]);
const dirsmo105685 = smo103983.getStemDirection();
smo103983.setStemDirection(dirsmo105685);
smo103984.setStemDirection(dirsmo105685);
const smo105685 = new VF.Beam([smo103983,smo103984]);
 
// formatting measures in staff group smo99711
fmtsmo10120235.format([smo101202v0,smo103998v0], 281);
const stavesmo101202 = new VF.Stave(1548, 411, 295);
stavesmo101202.setAttribute('id', 'stavesmo101202');
stavesmo101202.setBegBarType(VF.Barline.type.NONE);
stavesmo101202.setContext(context);
stavesmo101202.draw();
smo101202v0.draw(context, stavesmo101202);
smo105680.setContext(context);
smo105680.draw();
smo105681.setContext(context);
smo105681.draw();
const stavesmo103998 = new VF.Stave(1548, 561, 295);
stavesmo103998.setAttribute('id', 'stavesmo103998');
stavesmo103998.setBegBarType(VF.Barline.type.NONE);
stavesmo103998.setContext(context);
stavesmo103998.draw();
smo103998v0.draw(context, stavesmo103998);
smo105684.setContext(context);
smo105684.draw();
smo105685.setContext(context);
smo105685.draw();
const rightsmo99711stavesmo1012021 = new VF.StaveConnector(stavesmo101202, stavesmo103998).setType(0);
rightsmo99711stavesmo1012021.setContext(context).draw();
const fmtsmo10122236 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo101222v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101222v0ar = [];
const smo101203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101203.setAttribute('id', 'smo101203');
smo101222v0ar.push(smo101203);
const smo101204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101204.setAttribute('id', 'smo101204');
smo101222v0ar.push(smo101204);
const smo101205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
smo101205.setAttribute('id', 'smo101205');
smo101222v0ar.push(smo101205);
const smo101206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
smo101206.setAttribute('id', 'smo101206');
smo101222v0ar.push(smo101206);
const smo101207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
smo101207.setAttribute('id', 'smo101207');
const smo1012070acc = new VF.Accidental('b');
smo101207.addModifier(smo1012070acc, 0);
const smo1012071acc = new VF.Accidental('b');
smo101207.addModifier(smo1012071acc, 1);
const smo1012072acc = new VF.Accidental('b');
smo101207.addModifier(smo1012072acc, 2);
smo101222v0ar.push(smo101207);
smo101222v0.addTickables(smo101222v0ar)
fmtsmo10122236.joinVoices([smo101222v0]);
const fmtsmo10401736 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo104017v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104017v0ar = [];
const smo103999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo103999.setAttribute('id', 'smo103999');
smo104017v0ar.push(smo103999);
const smo104000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104000.setAttribute('id', 'smo104000');
smo104017v0ar.push(smo104000);
const smo104001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104001.setAttribute('id', 'smo104001');
smo104017v0ar.push(smo104001);
const smo104002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo104002.setAttribute('id', 'smo104002');
smo104017v0ar.push(smo104002);
smo104017v0.addTickables(smo104017v0ar)
fmtsmo10401736.joinVoices([smo104017v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105694 = smo101204.getStemDirection();
smo101204.setStemDirection(dirsmo105694);
smo101205.setStemDirection(dirsmo105694);
smo101206.setStemDirection(dirsmo105694);
smo101207.setStemDirection(dirsmo105694);
const smo105694 = new VF.Beam([smo101204,smo101205,smo101206,smo101207]);
const dirsmo105696 = smo103999.getStemDirection();
smo103999.setStemDirection(dirsmo105696);
smo104000.setStemDirection(dirsmo105696);
const smo105696 = new VF.Beam([smo103999,smo104000]);
const dirsmo105697 = smo104001.getStemDirection();
smo104001.setStemDirection(dirsmo105697);
smo104002.setStemDirection(dirsmo105697);
const smo105697 = new VF.Beam([smo104001,smo104002]);
 
// formatting measures in staff group smo99711
fmtsmo10122236.format([smo101222v0,smo104017v0], 233);
const stavesmo101222 = new VF.Stave(73, 789, 295);
stavesmo101222.setAttribute('id', 'stavesmo101222');
stavesmo101222.setBegBarType(1);
stavesmo101222.setEndBarType(5);
stavesmo101222.addClef('treble');
stavesmo101222.setContext(context);
stavesmo101222.draw();
smo101222v0.draw(context, stavesmo101222);
smo105694.setContext(context);
smo105694.draw();
const stavesmo104017 = new VF.Stave(73, 930, 295);
stavesmo104017.setAttribute('id', 'stavesmo104017');
stavesmo104017.setBegBarType(1);
stavesmo104017.setEndBarType(5);
stavesmo104017.addClef('bass');
stavesmo104017.setContext(context);
stavesmo104017.draw();
smo104017v0.draw(context, stavesmo104017);
smo105696.setContext(context);
smo105696.draw();
smo105697.setContext(context);
smo105697.draw();
const leftsmo99711stavesmo1012221 = new VF.StaveConnector(stavesmo101222, stavesmo104017).setType(3);
leftsmo99711stavesmo1012221.setContext(context).draw();
const fmtsmo10124137 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo101241v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101241v0ar = [];
const smo101223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101223.setAttribute('id', 'smo101223');
smo101241v0ar.push(smo101223);
const smo101224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101224.setAttribute('id', 'smo101224');
smo101241v0ar.push(smo101224);
const smo101225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101225.setAttribute('id', 'smo101225');
smo101241v0ar.push(smo101225);
const smo101226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo101226.setAttribute('id', 'smo101226');
const smo1012260acc = new VF.Accidental('b');
smo101226.addModifier(smo1012260acc, 0);
smo101241v0ar.push(smo101226);
smo101241v0.addTickables(smo101241v0ar)
fmtsmo10124137.joinVoices([smo101241v0]);
const fmtsmo10403637 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo104036v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104036v0ar = [];
const smo104018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104018.setAttribute('id', 'smo104018');
smo104036v0ar.push(smo104018);
const smo104019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104019.setAttribute('id', 'smo104019');
smo104036v0ar.push(smo104019);
const smo104020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104020.setAttribute('id', 'smo104020');
smo104036v0ar.push(smo104020);
const smo104021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104021.setAttribute('id', 'smo104021');
smo104036v0ar.push(smo104021);
smo104036v0.addTickables(smo104036v0ar)
fmtsmo10403637.joinVoices([smo104036v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105699 = smo101224.getStemDirection();
smo101224.setStemDirection(dirsmo105699);
smo101225.setStemDirection(dirsmo105699);
smo101226.setStemDirection(dirsmo105699);
const smo105699 = new VF.Beam([smo101224,smo101225,smo101226]);
const dirsmo105702 = smo104018.getStemDirection();
smo104018.setStemDirection(dirsmo105702);
smo104019.setStemDirection(dirsmo105702);
const smo105702 = new VF.Beam([smo104018,smo104019]);
 
// formatting measures in staff group smo99711
fmtsmo10124137.format([smo101241v0,smo104036v0], 281);
const stavesmo101241 = new VF.Stave(368, 789, 295);
stavesmo101241.setAttribute('id', 'stavesmo101241');
stavesmo101241.setBegBarType(VF.Barline.type.NONE);
stavesmo101241.setContext(context);
stavesmo101241.draw();
smo101241v0.draw(context, stavesmo101241);
smo105699.setContext(context);
smo105699.draw();
const stavesmo104036 = new VF.Stave(368, 930, 295);
stavesmo104036.setAttribute('id', 'stavesmo104036');
stavesmo104036.setBegBarType(VF.Barline.type.NONE);
stavesmo104036.setContext(context);
stavesmo104036.draw();
smo104036v0.draw(context, stavesmo104036);
smo105702.setContext(context);
smo105702.draw();
const fmtsmo10126238 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo101262v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101262v0ar = [];
const smo101242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101242.setAttribute('id', 'smo101242');
smo101262v0ar.push(smo101242);
const smo101244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101244.setAttribute('id', 'smo101244');
smo101262v0ar.push(smo101244);
const smo101245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101245.setAttribute('id', 'smo101245');
smo101262v0ar.push(smo101245);
const smo101246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101246.setAttribute('id', 'smo101246');
smo101262v0ar.push(smo101246);
const smo101247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101247.setAttribute('id', 'smo101247');
smo101262v0ar.push(smo101247);
const smo101248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101248.setAttribute('id', 'smo101248');
smo101262v0ar.push(smo101248);
smo101262v0.addTickables(smo101262v0ar)
fmtsmo10126238.joinVoices([smo101262v0]);
const fmtsmo10405438 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo104054v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104054v0ar = [];
const smo104037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104037.setAttribute('id', 'smo104037');
smo104054v0ar.push(smo104037);
const smo104038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104038.setAttribute('id', 'smo104038');
smo104054v0ar.push(smo104038);
const smo104039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104039.setAttribute('id', 'smo104039');
smo104054v0ar.push(smo104039);
const smo104040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo104040.setAttribute('id', 'smo104040');
const smo1040401acc = new VF.Accidental('b');
smo104040.addModifier(smo1040401acc, 1);
smo104054v0ar.push(smo104040);
smo104054v0.addTickables(smo104054v0ar)
fmtsmo10405438.joinVoices([smo104054v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105705 = smo101242.getStemDirection();
smo101242.setStemDirection(dirsmo105705);
smo101244.setStemDirection(dirsmo105705);
smo101245.setStemDirection(dirsmo105705);
const smo105705 = new VF.Beam([smo101242,smo101244,smo101245]);
const dirsmo105706 = smo101246.getStemDirection();
smo101246.setStemDirection(dirsmo105706);
smo101247.setStemDirection(dirsmo105706);
smo101248.setStemDirection(dirsmo105706);
const smo105706 = new VF.Beam([smo101246,smo101247,smo101248]);
const dirsmo105709 = smo104037.getStemDirection();
smo104037.setStemDirection(dirsmo105709);
smo104038.setStemDirection(dirsmo105709);
const smo105709 = new VF.Beam([smo104037,smo104038]);
const dirsmo105710 = smo104039.getStemDirection();
smo104039.setStemDirection(dirsmo105710);
smo104040.setStemDirection(dirsmo105710);
const smo105710 = new VF.Beam([smo104039,smo104040]);
 
// formatting measures in staff group smo99711
fmtsmo10126238.format([smo101262v0,smo104054v0], 281);
const stavesmo101262 = new VF.Stave(663, 789, 295);
stavesmo101262.setAttribute('id', 'stavesmo101262');
stavesmo101262.setBegBarType(VF.Barline.type.NONE);
stavesmo101262.setContext(context);
stavesmo101262.draw();
smo101262v0.draw(context, stavesmo101262);
smo105705.setContext(context);
smo105705.draw();
smo105706.setContext(context);
smo105706.draw();
const stavesmo104054 = new VF.Stave(663, 930, 295);
stavesmo104054.setAttribute('id', 'stavesmo104054');
stavesmo104054.setBegBarType(VF.Barline.type.NONE);
stavesmo104054.setContext(context);
stavesmo104054.draw();
smo104054v0.draw(context, stavesmo104054);
smo105709.setContext(context);
smo105709.draw();
smo105710.setContext(context);
smo105710.draw();
const fmtsmo10128139 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo101281v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101281v0ar = [];
const smo101263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101263.setAttribute('id', 'smo101263');
smo101281v0ar.push(smo101263);
const smo101264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101264.setAttribute('id', 'smo101264');
smo101281v0ar.push(smo101264);
const smo101265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101265.setAttribute('id', 'smo101265');
smo101281v0ar.push(smo101265);
const smo101266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101266.setAttribute('id', 'smo101266');
smo101281v0ar.push(smo101266);
const smo101267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo101267.setAttribute('id', 'smo101267');
const smo1012670acc = new VF.Accidental('b');
smo101267.addModifier(smo1012670acc, 0);
const smo1012671acc = new VF.Accidental('b');
smo101267.addModifier(smo1012671acc, 1);
const smo1012672acc = new VF.Accidental('b');
smo101267.addModifier(smo1012672acc, 2);
smo101281v0ar.push(smo101267);
smo101281v0.addTickables(smo101281v0ar)
fmtsmo10128139.joinVoices([smo101281v0]);
const fmtsmo10407239 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo104072v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104072v0ar = [];
const smo104055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104055.setAttribute('id', 'smo104055');
smo104072v0ar.push(smo104055);
const smo104056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo104056.setAttribute('id', 'smo104056');
smo104072v0ar.push(smo104056);
const smo104057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104057.setAttribute('id', 'smo104057');
smo104072v0ar.push(smo104057);
const smo104058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo104058.setAttribute('id', 'smo104058');
smo104072v0ar.push(smo104058);
smo104072v0.addTickables(smo104072v0ar)
fmtsmo10407239.joinVoices([smo104072v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105713 = smo101264.getStemDirection();
smo101264.setStemDirection(dirsmo105713);
smo101265.setStemDirection(dirsmo105713);
smo101266.setStemDirection(dirsmo105713);
smo101267.setStemDirection(dirsmo105713);
const smo105713 = new VF.Beam([smo101264,smo101265,smo101266,smo101267]);
const dirsmo105716 = smo104055.getStemDirection();
smo104055.setStemDirection(dirsmo105716);
smo104056.setStemDirection(dirsmo105716);
const smo105716 = new VF.Beam([smo104055,smo104056]);
const dirsmo105717 = smo104057.getStemDirection();
smo104057.setStemDirection(dirsmo105717);
smo104058.setStemDirection(dirsmo105717);
const smo105717 = new VF.Beam([smo104057,smo104058]);
 
// formatting measures in staff group smo99711
fmtsmo10128139.format([smo101281v0,smo104072v0], 281);
const stavesmo101281 = new VF.Stave(958, 789, 295);
stavesmo101281.setAttribute('id', 'stavesmo101281');
stavesmo101281.setBegBarType(VF.Barline.type.NONE);
stavesmo101281.setContext(context);
stavesmo101281.draw();
smo101281v0.draw(context, stavesmo101281);
smo105713.setContext(context);
smo105713.draw();
const stavesmo104072 = new VF.Stave(958, 930, 295);
stavesmo104072.setAttribute('id', 'stavesmo104072');
stavesmo104072.setBegBarType(VF.Barline.type.NONE);
stavesmo104072.setContext(context);
stavesmo104072.draw();
smo104072v0.draw(context, stavesmo104072);
smo105716.setContext(context);
smo105716.draw();
smo105717.setContext(context);
smo105717.draw();
const fmtsmo10130340 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo101303v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101303v0ar = [];
const smo101282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101282.setAttribute('id', 'smo101282');
smo101303v0ar.push(smo101282);
const smo101284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101284.setAttribute('id', 'smo101284');
smo101303v0ar.push(smo101284);
const smo101285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101285.setAttribute('id', 'smo101285');
smo101303v0ar.push(smo101285);
const smo101286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101286.setAttribute('id', 'smo101286');
smo101303v0ar.push(smo101286);
const smo101287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101287.setAttribute('id', 'smo101287');
smo101303v0ar.push(smo101287);
const smo101288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo101288.setAttribute('id', 'smo101288');
smo101303v0ar.push(smo101288);
const smo101289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101289.setAttribute('id', 'smo101289');
smo101303v0ar.push(smo101289);
smo101303v0.addTickables(smo101303v0ar)
fmtsmo10130340.joinVoices([smo101303v0]);
const fmtsmo10409040 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo104090v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104090v0ar = [];
const smo104073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104073.setAttribute('id', 'smo104073');
smo104090v0ar.push(smo104073);
const smo104074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104074.setAttribute('id', 'smo104074');
smo104090v0ar.push(smo104074);
const smo104075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104075.setAttribute('id', 'smo104075');
smo104090v0ar.push(smo104075);
const smo104076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104076.setAttribute('id', 'smo104076');
smo104090v0ar.push(smo104076);
smo104090v0.addTickables(smo104090v0ar)
fmtsmo10409040.joinVoices([smo104090v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105720 = smo101282.getStemDirection();
smo101282.setStemDirection(dirsmo105720);
smo101284.setStemDirection(dirsmo105720);
smo101285.setStemDirection(dirsmo105720);
smo101286.setStemDirection(dirsmo105720);
const smo105720 = new VF.Beam([smo101282,smo101284,smo101285,smo101286]);
const dirsmo105721 = smo101287.getStemDirection();
smo101287.setStemDirection(dirsmo105721);
smo101288.setStemDirection(dirsmo105721);
smo101289.setStemDirection(dirsmo105721);
const smo105721 = new VF.Beam([smo101287,smo101288,smo101289]);
const dirsmo105724 = smo104073.getStemDirection();
smo104073.setStemDirection(dirsmo105724);
smo104074.setStemDirection(dirsmo105724);
const smo105724 = new VF.Beam([smo104073,smo104074]);
const dirsmo105725 = smo104075.getStemDirection();
smo104075.setStemDirection(dirsmo105725);
smo104076.setStemDirection(dirsmo105725);
const smo105725 = new VF.Beam([smo104075,smo104076]);
 
// formatting measures in staff group smo99711
fmtsmo10130340.format([smo101303v0,smo104090v0], 281);
const stavesmo101303 = new VF.Stave(1253, 789, 295);
stavesmo101303.setAttribute('id', 'stavesmo101303');
stavesmo101303.setBegBarType(VF.Barline.type.NONE);
stavesmo101303.setContext(context);
stavesmo101303.draw();
smo101303v0.draw(context, stavesmo101303);
smo105720.setContext(context);
smo105720.draw();
smo105721.setContext(context);
smo105721.draw();
const stavesmo104090 = new VF.Stave(1253, 930, 295);
stavesmo104090.setAttribute('id', 'stavesmo104090');
stavesmo104090.setBegBarType(VF.Barline.type.NONE);
stavesmo104090.setContext(context);
stavesmo104090.draw();
smo104090v0.draw(context, stavesmo104090);
smo105724.setContext(context);
smo105724.draw();
smo105725.setContext(context);
smo105725.draw();
const fmtsmo10132141 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo101321v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101321v0ar = [];
const smo101304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101304.setAttribute('id', 'smo101304');
smo101321v0ar.push(smo101304);
const smo101305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101305.setAttribute('id', 'smo101305');
smo101321v0ar.push(smo101305);
const smo101306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101306.setAttribute('id', 'smo101306');
smo101321v0ar.push(smo101306);
const smo101307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo101307.setAttribute('id', 'smo101307');
const smo1013070acc = new VF.Accidental('b');
smo101307.addModifier(smo1013070acc, 0);
smo101321v0ar.push(smo101307);
smo101321v0.addTickables(smo101321v0ar)
fmtsmo10132141.joinVoices([smo101321v0]);
const fmtsmo10410841 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo104108v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104108v0ar = [];
const smo104091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104091.setAttribute('id', 'smo104091');
smo104108v0ar.push(smo104091);
const smo104092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104092.setAttribute('id', 'smo104092');
smo104108v0ar.push(smo104092);
const smo104093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104093.setAttribute('id', 'smo104093');
smo104108v0ar.push(smo104093);
const smo104094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104094.setAttribute('id', 'smo104094');
smo104108v0ar.push(smo104094);
smo104108v0.addTickables(smo104108v0ar)
fmtsmo10410841.joinVoices([smo104108v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105728 = smo101305.getStemDirection();
smo101305.setStemDirection(dirsmo105728);
smo101306.setStemDirection(dirsmo105728);
smo101307.setStemDirection(dirsmo105728);
const smo105728 = new VF.Beam([smo101305,smo101306,smo101307]);
const dirsmo105731 = smo104091.getStemDirection();
smo104091.setStemDirection(dirsmo105731);
smo104092.setStemDirection(dirsmo105731);
const smo105731 = new VF.Beam([smo104091,smo104092]);
const dirsmo105732 = smo104093.getStemDirection();
smo104093.setStemDirection(dirsmo105732);
smo104094.setStemDirection(dirsmo105732);
const smo105732 = new VF.Beam([smo104093,smo104094]);
 
// formatting measures in staff group smo99711
fmtsmo10132141.format([smo101321v0,smo104108v0], 281);
const stavesmo101321 = new VF.Stave(1548, 789, 295);
stavesmo101321.setAttribute('id', 'stavesmo101321');
stavesmo101321.setBegBarType(VF.Barline.type.NONE);
stavesmo101321.setContext(context);
stavesmo101321.draw();
smo101321v0.draw(context, stavesmo101321);
smo105728.setContext(context);
smo105728.draw();
const stavesmo104108 = new VF.Stave(1548, 930, 295);
stavesmo104108.setAttribute('id', 'stavesmo104108');
stavesmo104108.setBegBarType(VF.Barline.type.NONE);
stavesmo104108.setContext(context);
stavesmo104108.draw();
smo104108v0.draw(context, stavesmo104108);
smo105731.setContext(context);
smo105731.draw();
smo105732.setContext(context);
smo105732.draw();
const rightsmo99711stavesmo1013211 = new VF.StaveConnector(stavesmo101321, stavesmo104108).setType(0);
rightsmo99711stavesmo1013211.setContext(context).draw();
const fmtsmo10134242 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo101342v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101342v0ar = [];
const smo101322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101322.setAttribute('id', 'smo101322');
smo101342v0ar.push(smo101322);
const smo101324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101324.setAttribute('id', 'smo101324');
smo101342v0ar.push(smo101324);
const smo101325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101325.setAttribute('id', 'smo101325');
smo101342v0ar.push(smo101325);
const smo101326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101326.setAttribute('id', 'smo101326');
smo101342v0ar.push(smo101326);
const smo101327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101327.setAttribute('id', 'smo101327');
smo101342v0ar.push(smo101327);
const smo101328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101328.setAttribute('id', 'smo101328');
smo101342v0ar.push(smo101328);
smo101342v0.addTickables(smo101342v0ar)
fmtsmo10134242.joinVoices([smo101342v0]);
const fmtsmo10412642 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo104126v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104126v0ar = [];
const smo104109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104109.setAttribute('id', 'smo104109');
smo104126v0ar.push(smo104109);
const smo104110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104110.setAttribute('id', 'smo104110');
smo104126v0ar.push(smo104110);
const smo104111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104111.setAttribute('id', 'smo104111');
smo104126v0ar.push(smo104111);
const smo104112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo104112.setAttribute('id', 'smo104112');
const smo1041121acc = new VF.Accidental('b');
smo104112.addModifier(smo1041121acc, 1);
smo104126v0ar.push(smo104112);
smo104126v0.addTickables(smo104126v0ar)
fmtsmo10412642.joinVoices([smo104126v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105743 = smo101322.getStemDirection();
smo101322.setStemDirection(dirsmo105743);
smo101324.setStemDirection(dirsmo105743);
smo101325.setStemDirection(dirsmo105743);
const smo105743 = new VF.Beam([smo101322,smo101324,smo101325]);
const dirsmo105744 = smo101326.getStemDirection();
smo101326.setStemDirection(dirsmo105744);
smo101327.setStemDirection(dirsmo105744);
smo101328.setStemDirection(dirsmo105744);
const smo105744 = new VF.Beam([smo101326,smo101327,smo101328]);
const dirsmo105747 = smo104109.getStemDirection();
smo104109.setStemDirection(dirsmo105747);
smo104110.setStemDirection(dirsmo105747);
const smo105747 = new VF.Beam([smo104109,smo104110]);
const dirsmo105748 = smo104111.getStemDirection();
smo104111.setStemDirection(dirsmo105748);
smo104112.setStemDirection(dirsmo105748);
const smo105748 = new VF.Beam([smo104111,smo104112]);
 
// formatting measures in staff group smo99711
fmtsmo10134242.format([smo101342v0,smo104126v0], 237);
const stavesmo101342 = new VF.Stave(73, 1148, 295);
stavesmo101342.setAttribute('id', 'stavesmo101342');
stavesmo101342.setBegBarType(1);
stavesmo101342.addClef('treble');
stavesmo101342.setContext(context);
stavesmo101342.draw();
smo101342v0.draw(context, stavesmo101342);
smo105743.setContext(context);
smo105743.draw();
smo105744.setContext(context);
smo105744.draw();
const stavesmo104126 = new VF.Stave(73, 1303, 295);
stavesmo104126.setAttribute('id', 'stavesmo104126');
stavesmo104126.setBegBarType(1);
stavesmo104126.addClef('bass');
stavesmo104126.setContext(context);
stavesmo104126.draw();
smo104126v0.draw(context, stavesmo104126);
smo105747.setContext(context);
smo105747.draw();
smo105748.setContext(context);
smo105748.draw();
const leftsmo99711stavesmo1013421 = new VF.StaveConnector(stavesmo101342, stavesmo104126).setType(3);
leftsmo99711stavesmo1013421.setContext(context).draw();
const fmtsmo10136043 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo101360v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101360v0ar = [];
const smo101343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101343.setAttribute('id', 'smo101343');
smo101360v0ar.push(smo101343);
const smo101344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101344.setAttribute('id', 'smo101344');
smo101360v0ar.push(smo101344);
const smo101345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo101345.setAttribute('id', 'smo101345');
smo101360v0ar.push(smo101345);
const smo101346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo101346.setAttribute('id', 'smo101346');
smo101360v0ar.push(smo101346);
smo101360v0.addTickables(smo101360v0ar)
fmtsmo10136043.joinVoices([smo101360v0]);
const fmtsmo10414443 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo104144v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104144v0ar = [];
const smo104127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104127.setAttribute('id', 'smo104127');
smo104144v0ar.push(smo104127);
const smo104128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo104128.setAttribute('id', 'smo104128');
smo104144v0ar.push(smo104128);
const smo104129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104129.setAttribute('id', 'smo104129');
smo104144v0ar.push(smo104129);
const smo104130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo104130.setAttribute('id', 'smo104130');
const smo1041300acc = new VF.Accidental('b');
smo104130.addModifier(smo1041300acc, 0);
const smo1041301acc = new VF.Accidental('b');
smo104130.addModifier(smo1041301acc, 1);
smo104144v0ar.push(smo104130);
smo104144v0.addTickables(smo104144v0ar)
fmtsmo10414443.joinVoices([smo104144v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105751 = smo101344.getStemDirection();
smo101344.setStemDirection(dirsmo105751);
smo101345.setStemDirection(dirsmo105751);
smo101346.setStemDirection(dirsmo105751);
const smo105751 = new VF.Beam([smo101344,smo101345,smo101346]);
const dirsmo105754 = smo104127.getStemDirection();
smo104127.setStemDirection(dirsmo105754);
smo104128.setStemDirection(dirsmo105754);
const smo105754 = new VF.Beam([smo104127,smo104128]);
const dirsmo105755 = smo104129.getStemDirection();
smo104129.setStemDirection(dirsmo105755);
smo104130.setStemDirection(dirsmo105755);
const smo105755 = new VF.Beam([smo104129,smo104130]);
 
// formatting measures in staff group smo99711
fmtsmo10136043.format([smo101360v0,smo104144v0], 281);
const stavesmo101360 = new VF.Stave(368, 1148, 295);
stavesmo101360.setAttribute('id', 'stavesmo101360');
stavesmo101360.setBegBarType(VF.Barline.type.NONE);
stavesmo101360.setContext(context);
stavesmo101360.draw();
smo101360v0.draw(context, stavesmo101360);
smo105751.setContext(context);
smo105751.draw();
const stavesmo104144 = new VF.Stave(368, 1303, 295);
stavesmo104144.setAttribute('id', 'stavesmo104144');
stavesmo104144.setBegBarType(VF.Barline.type.NONE);
stavesmo104144.setContext(context);
stavesmo104144.draw();
smo104144v0.draw(context, stavesmo104144);
smo105754.setContext(context);
smo105754.draw();
smo105755.setContext(context);
smo105755.draw();
const fmtsmo10138344 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo101383v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101383v0ar = [];
const smo101361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo101361.setAttribute('id', 'smo101361');
const smo1013610acc = new VF.Accidental('b');
smo101361.addModifier(smo1013610acc, 0);
const smo1013612acc = new VF.Accidental('b');
smo101361.addModifier(smo1013612acc, 2);
smo101383v0ar.push(smo101361);
const smo101363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo101363.setAttribute('id', 'smo101363');
smo101383v0ar.push(smo101363);
const smo101364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101364.setAttribute('id', 'smo101364');
smo101383v0ar.push(smo101364);
const smo101365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101365.setAttribute('id', 'smo101365');
smo101383v0ar.push(smo101365);
const smo101366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101366.setAttribute('id', 'smo101366');
smo101383v0ar.push(smo101366);
const smo101367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101367.setAttribute('id', 'smo101367');
smo101383v0ar.push(smo101367);
const smo101368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101368.setAttribute('id', 'smo101368');
smo101383v0ar.push(smo101368);
const smo101369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo101369.setAttribute('id', 'smo101369');
smo101383v0ar.push(smo101369);
smo101383v0.addTickables(smo101383v0ar)
fmtsmo10138344.joinVoices([smo101383v0]);
const fmtsmo10416244 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo104162v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104162v0ar = [];
const smo104145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo104145.setAttribute('id', 'smo104145');
smo104162v0ar.push(smo104145);
const smo104146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo104146.setAttribute('id', 'smo104146');
const smo1041461acc = new VF.Accidental('b');
smo104146.addModifier(smo1041461acc, 1);
smo104162v0ar.push(smo104146);
const smo104147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104147.setAttribute('id', 'smo104147');
smo104162v0ar.push(smo104147);
const smo104148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo104148.setAttribute('id', 'smo104148');
smo104162v0ar.push(smo104148);
smo104162v0.addTickables(smo104162v0ar)
fmtsmo10416244.joinVoices([smo104162v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105758 = smo101361.getStemDirection();
smo101361.setStemDirection(dirsmo105758);
smo101363.setStemDirection(dirsmo105758);
smo101364.setStemDirection(dirsmo105758);
smo101365.setStemDirection(dirsmo105758);
const smo105758 = new VF.Beam([smo101361,smo101363,smo101364,smo101365]);
const dirsmo105759 = smo101366.getStemDirection();
smo101366.setStemDirection(dirsmo105759);
smo101367.setStemDirection(dirsmo105759);
smo101368.setStemDirection(dirsmo105759);
smo101369.setStemDirection(dirsmo105759);
const smo105759 = new VF.Beam([smo101366,smo101367,smo101368,smo101369]);
const dirsmo105762 = smo104145.getStemDirection();
smo104145.setStemDirection(dirsmo105762);
smo104146.setStemDirection(dirsmo105762);
const smo105762 = new VF.Beam([smo104145,smo104146]);
const dirsmo105763 = smo104147.getStemDirection();
smo104147.setStemDirection(dirsmo105763);
smo104148.setStemDirection(dirsmo105763);
const smo105763 = new VF.Beam([smo104147,smo104148]);
 
// formatting measures in staff group smo99711
fmtsmo10138344.format([smo101383v0,smo104162v0], 281);
const stavesmo101383 = new VF.Stave(663, 1148, 295);
stavesmo101383.setAttribute('id', 'stavesmo101383');
stavesmo101383.setBegBarType(VF.Barline.type.NONE);
stavesmo101383.setContext(context);
stavesmo101383.draw();
smo101383v0.draw(context, stavesmo101383);
smo105758.setContext(context);
smo105758.draw();
smo105759.setContext(context);
smo105759.draw();
const stavesmo104162 = new VF.Stave(663, 1303, 295);
stavesmo104162.setAttribute('id', 'stavesmo104162');
stavesmo104162.setBegBarType(VF.Barline.type.NONE);
stavesmo104162.setContext(context);
stavesmo104162.draw();
smo104162v0.draw(context, stavesmo104162);
smo105762.setContext(context);
smo105762.draw();
smo105763.setContext(context);
smo105763.draw();
const fmtsmo10140145 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo101401v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101401v0ar = [];
const smo101384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101384.setAttribute('id', 'smo101384');
smo101401v0ar.push(smo101384);
const smo101385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101385.setAttribute('id', 'smo101385');
smo101401v0ar.push(smo101385);
const smo101386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101386.setAttribute('id', 'smo101386');
smo101401v0ar.push(smo101386);
const smo101387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo101387.setAttribute('id', 'smo101387');
const smo1013870acc = new VF.Accidental('b');
smo101387.addModifier(smo1013870acc, 0);
smo101401v0ar.push(smo101387);
smo101401v0.addTickables(smo101401v0ar)
fmtsmo10140145.joinVoices([smo101401v0]);
const fmtsmo10418045 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo104180v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104180v0ar = [];
const smo104163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104163.setAttribute('id', 'smo104163');
smo104180v0ar.push(smo104163);
const smo104164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104164.setAttribute('id', 'smo104164');
smo104180v0ar.push(smo104164);
const smo104165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104165.setAttribute('id', 'smo104165');
smo104180v0ar.push(smo104165);
const smo104166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo104166.setAttribute('id', 'smo104166');
smo104180v0ar.push(smo104166);
smo104180v0.addTickables(smo104180v0ar)
fmtsmo10418045.joinVoices([smo104180v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105766 = smo101385.getStemDirection();
smo101385.setStemDirection(dirsmo105766);
smo101386.setStemDirection(dirsmo105766);
smo101387.setStemDirection(dirsmo105766);
const smo105766 = new VF.Beam([smo101385,smo101386,smo101387]);
const dirsmo105769 = smo104163.getStemDirection();
smo104163.setStemDirection(dirsmo105769);
smo104164.setStemDirection(dirsmo105769);
const smo105769 = new VF.Beam([smo104163,smo104164]);
const dirsmo105770 = smo104165.getStemDirection();
smo104165.setStemDirection(dirsmo105770);
smo104166.setStemDirection(dirsmo105770);
const smo105770 = new VF.Beam([smo104165,smo104166]);
 
// formatting measures in staff group smo99711
fmtsmo10140145.format([smo101401v0,smo104180v0], 281);
const stavesmo101401 = new VF.Stave(958, 1148, 295);
stavesmo101401.setAttribute('id', 'stavesmo101401');
stavesmo101401.setBegBarType(VF.Barline.type.NONE);
stavesmo101401.setContext(context);
stavesmo101401.draw();
smo101401v0.draw(context, stavesmo101401);
smo105766.setContext(context);
smo105766.draw();
const stavesmo104180 = new VF.Stave(958, 1303, 295);
stavesmo104180.setAttribute('id', 'stavesmo104180');
stavesmo104180.setBegBarType(VF.Barline.type.NONE);
stavesmo104180.setContext(context);
stavesmo104180.draw();
smo104180v0.draw(context, stavesmo104180);
smo105769.setContext(context);
smo105769.draw();
smo105770.setContext(context);
smo105770.draw();
const fmtsmo10142246 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo101422v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101422v0ar = [];
const smo101402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101402.setAttribute('id', 'smo101402');
smo101422v0ar.push(smo101402);
const smo101404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101404.setAttribute('id', 'smo101404');
smo101422v0ar.push(smo101404);
const smo101405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101405.setAttribute('id', 'smo101405');
smo101422v0ar.push(smo101405);
const smo101406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101406.setAttribute('id', 'smo101406');
smo101422v0ar.push(smo101406);
const smo101407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101407.setAttribute('id', 'smo101407');
smo101422v0ar.push(smo101407);
const smo101408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101408.setAttribute('id', 'smo101408');
smo101422v0ar.push(smo101408);
smo101422v0.addTickables(smo101422v0ar)
fmtsmo10142246.joinVoices([smo101422v0]);
const fmtsmo10419846 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo104198v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104198v0ar = [];
const smo104181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104181.setAttribute('id', 'smo104181');
smo104198v0ar.push(smo104181);
const smo104182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104182.setAttribute('id', 'smo104182');
smo104198v0ar.push(smo104182);
const smo104183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104183.setAttribute('id', 'smo104183');
smo104198v0ar.push(smo104183);
const smo104184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo104184.setAttribute('id', 'smo104184');
const smo1041841acc = new VF.Accidental('b');
smo104184.addModifier(smo1041841acc, 1);
smo104198v0ar.push(smo104184);
smo104198v0.addTickables(smo104198v0ar)
fmtsmo10419846.joinVoices([smo104198v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105773 = smo101402.getStemDirection();
smo101402.setStemDirection(dirsmo105773);
smo101404.setStemDirection(dirsmo105773);
smo101405.setStemDirection(dirsmo105773);
const smo105773 = new VF.Beam([smo101402,smo101404,smo101405]);
const dirsmo105774 = smo101406.getStemDirection();
smo101406.setStemDirection(dirsmo105774);
smo101407.setStemDirection(dirsmo105774);
smo101408.setStemDirection(dirsmo105774);
const smo105774 = new VF.Beam([smo101406,smo101407,smo101408]);
const dirsmo105777 = smo104181.getStemDirection();
smo104181.setStemDirection(dirsmo105777);
smo104182.setStemDirection(dirsmo105777);
const smo105777 = new VF.Beam([smo104181,smo104182]);
const dirsmo105778 = smo104183.getStemDirection();
smo104183.setStemDirection(dirsmo105778);
smo104184.setStemDirection(dirsmo105778);
const smo105778 = new VF.Beam([smo104183,smo104184]);
 
// formatting measures in staff group smo99711
fmtsmo10142246.format([smo101422v0,smo104198v0], 281);
const stavesmo101422 = new VF.Stave(1253, 1148, 295);
stavesmo101422.setAttribute('id', 'stavesmo101422');
stavesmo101422.setBegBarType(VF.Barline.type.NONE);
stavesmo101422.setContext(context);
stavesmo101422.draw();
smo101422v0.draw(context, stavesmo101422);
smo105773.setContext(context);
smo105773.draw();
smo105774.setContext(context);
smo105774.draw();
const stavesmo104198 = new VF.Stave(1253, 1303, 295);
stavesmo104198.setAttribute('id', 'stavesmo104198');
stavesmo104198.setBegBarType(VF.Barline.type.NONE);
stavesmo104198.setContext(context);
stavesmo104198.draw();
smo104198v0.draw(context, stavesmo104198);
smo105777.setContext(context);
smo105777.draw();
smo105778.setContext(context);
smo105778.draw();
const fmtsmo10144147 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo101441v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101441v0ar = [];
const smo101423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101423.setAttribute('id', 'smo101423');
smo101441v0ar.push(smo101423);
const smo101424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101424.setAttribute('id', 'smo101424');
smo101441v0ar.push(smo101424);
const smo101425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101425.setAttribute('id', 'smo101425');
smo101441v0ar.push(smo101425);
const smo101426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101426.setAttribute('id', 'smo101426');
smo101441v0ar.push(smo101426);
const smo101427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo101427.setAttribute('id', 'smo101427');
const smo1014270acc = new VF.Accidental('b');
smo101427.addModifier(smo1014270acc, 0);
const smo1014271acc = new VF.Accidental('b');
smo101427.addModifier(smo1014271acc, 1);
const smo1014272acc = new VF.Accidental('b');
smo101427.addModifier(smo1014272acc, 2);
smo101441v0ar.push(smo101427);
smo101441v0.addTickables(smo101441v0ar)
fmtsmo10144147.joinVoices([smo101441v0]);
const fmtsmo10421647 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo104216v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104216v0ar = [];
const smo104199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104199.setAttribute('id', 'smo104199');
smo104216v0ar.push(smo104199);
const smo104200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo104200.setAttribute('id', 'smo104200');
smo104216v0ar.push(smo104200);
const smo104201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104201.setAttribute('id', 'smo104201');
smo104216v0ar.push(smo104201);
const smo104202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo104202.setAttribute('id', 'smo104202');
smo104216v0ar.push(smo104202);
smo104216v0.addTickables(smo104216v0ar)
fmtsmo10421647.joinVoices([smo104216v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105781 = smo101424.getStemDirection();
smo101424.setStemDirection(dirsmo105781);
smo101425.setStemDirection(dirsmo105781);
smo101426.setStemDirection(dirsmo105781);
smo101427.setStemDirection(dirsmo105781);
const smo105781 = new VF.Beam([smo101424,smo101425,smo101426,smo101427]);
const dirsmo105784 = smo104199.getStemDirection();
smo104199.setStemDirection(dirsmo105784);
smo104200.setStemDirection(dirsmo105784);
const smo105784 = new VF.Beam([smo104199,smo104200]);
const dirsmo105785 = smo104201.getStemDirection();
smo104201.setStemDirection(dirsmo105785);
smo104202.setStemDirection(dirsmo105785);
const smo105785 = new VF.Beam([smo104201,smo104202]);
 
// formatting measures in staff group smo99711
fmtsmo10144147.format([smo101441v0,smo104216v0], 281);
const stavesmo101441 = new VF.Stave(1548, 1148, 295);
stavesmo101441.setAttribute('id', 'stavesmo101441');
stavesmo101441.setBegBarType(VF.Barline.type.NONE);
stavesmo101441.setContext(context);
stavesmo101441.draw();
smo101441v0.draw(context, stavesmo101441);
smo105781.setContext(context);
smo105781.draw();
const stavesmo104216 = new VF.Stave(1548, 1303, 295);
stavesmo104216.setAttribute('id', 'stavesmo104216');
stavesmo104216.setBegBarType(VF.Barline.type.NONE);
stavesmo104216.setContext(context);
stavesmo104216.draw();
smo104216v0.draw(context, stavesmo104216);
smo105784.setContext(context);
smo105784.draw();
smo105785.setContext(context);
smo105785.draw();
const rightsmo99711stavesmo1014411 = new VF.StaveConnector(stavesmo101441, stavesmo104216).setType(0);
rightsmo99711stavesmo1014411.setContext(context).draw();
const fmtsmo10146348 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo101463v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101463v0ar = [];
const smo101442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101442.setAttribute('id', 'smo101442');
smo101463v0ar.push(smo101442);
const smo101444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101444.setAttribute('id', 'smo101444');
smo101463v0ar.push(smo101444);
const smo101445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101445.setAttribute('id', 'smo101445');
smo101463v0ar.push(smo101445);
const smo101446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101446.setAttribute('id', 'smo101446');
smo101463v0ar.push(smo101446);
const smo101447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101447.setAttribute('id', 'smo101447');
smo101463v0ar.push(smo101447);
const smo101448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo101448.setAttribute('id', 'smo101448');
smo101463v0ar.push(smo101448);
const smo101449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101449.setAttribute('id', 'smo101449');
smo101463v0ar.push(smo101449);
smo101463v0.addTickables(smo101463v0ar)
fmtsmo10146348.joinVoices([smo101463v0]);
const fmtsmo10423448 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo104234v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104234v0ar = [];
const smo104217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104217.setAttribute('id', 'smo104217');
smo104234v0ar.push(smo104217);
const smo104218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104218.setAttribute('id', 'smo104218');
smo104234v0ar.push(smo104218);
const smo104219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104219.setAttribute('id', 'smo104219');
smo104234v0ar.push(smo104219);
const smo104220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104220.setAttribute('id', 'smo104220');
smo104234v0ar.push(smo104220);
smo104234v0.addTickables(smo104234v0ar)
fmtsmo10423448.joinVoices([smo104234v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105796 = smo101442.getStemDirection();
smo101442.setStemDirection(dirsmo105796);
smo101444.setStemDirection(dirsmo105796);
smo101445.setStemDirection(dirsmo105796);
smo101446.setStemDirection(dirsmo105796);
const smo105796 = new VF.Beam([smo101442,smo101444,smo101445,smo101446]);
const dirsmo105797 = smo101447.getStemDirection();
smo101447.setStemDirection(dirsmo105797);
smo101448.setStemDirection(dirsmo105797);
smo101449.setStemDirection(dirsmo105797);
const smo105797 = new VF.Beam([smo101447,smo101448,smo101449]);
const dirsmo105800 = smo104217.getStemDirection();
smo104217.setStemDirection(dirsmo105800);
smo104218.setStemDirection(dirsmo105800);
const smo105800 = new VF.Beam([smo104217,smo104218]);
const dirsmo105801 = smo104219.getStemDirection();
smo104219.setStemDirection(dirsmo105801);
smo104220.setStemDirection(dirsmo105801);
const smo105801 = new VF.Beam([smo104219,smo104220]);
 
// formatting measures in staff group smo99711
fmtsmo10146348.format([smo101463v0,smo104234v0], 237);
const stavesmo101463 = new VF.Stave(73, 1501, 295);
stavesmo101463.setAttribute('id', 'stavesmo101463');
stavesmo101463.setBegBarType(1);
stavesmo101463.addClef('treble');
stavesmo101463.setContext(context);
stavesmo101463.draw();
smo101463v0.draw(context, stavesmo101463);
smo105796.setContext(context);
smo105796.draw();
smo105797.setContext(context);
smo105797.draw();
const stavesmo104234 = new VF.Stave(73, 1657, 295);
stavesmo104234.setAttribute('id', 'stavesmo104234');
stavesmo104234.setBegBarType(1);
stavesmo104234.addClef('bass');
stavesmo104234.setContext(context);
stavesmo104234.draw();
smo104234v0.draw(context, stavesmo104234);
smo105800.setContext(context);
smo105800.draw();
smo105801.setContext(context);
smo105801.draw();
const leftsmo99711stavesmo1014631 = new VF.StaveConnector(stavesmo101463, stavesmo104234).setType(3);
leftsmo99711stavesmo1014631.setContext(context).draw();
const fmtsmo10148149 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo101481v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101481v0ar = [];
const smo101464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101464.setAttribute('id', 'smo101464');
smo101481v0ar.push(smo101464);
const smo101465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101465.setAttribute('id', 'smo101465');
smo101481v0ar.push(smo101465);
const smo101466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101466.setAttribute('id', 'smo101466');
smo101481v0ar.push(smo101466);
const smo101467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101467.setAttribute('id', 'smo101467');
smo101481v0ar.push(smo101467);
smo101481v0.addTickables(smo101481v0ar)
fmtsmo10148149.joinVoices([smo101481v0]);
const fmtsmo10425249 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo104252v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104252v0ar = [];
const smo104235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104235.setAttribute('id', 'smo104235');
smo104252v0ar.push(smo104235);
const smo104236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104236.setAttribute('id', 'smo104236');
smo104252v0ar.push(smo104236);
const smo104237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104237.setAttribute('id', 'smo104237');
smo104252v0ar.push(smo104237);
const smo104238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104238.setAttribute('id', 'smo104238');
smo104252v0ar.push(smo104238);
smo104252v0.addTickables(smo104252v0ar)
fmtsmo10425249.joinVoices([smo104252v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105804 = smo101465.getStemDirection();
smo101465.setStemDirection(dirsmo105804);
smo101466.setStemDirection(dirsmo105804);
smo101467.setStemDirection(dirsmo105804);
const smo105804 = new VF.Beam([smo101465,smo101466,smo101467]);
const dirsmo105807 = smo104235.getStemDirection();
smo104235.setStemDirection(dirsmo105807);
smo104236.setStemDirection(dirsmo105807);
const smo105807 = new VF.Beam([smo104235,smo104236]);
 
// formatting measures in staff group smo99711
fmtsmo10148149.format([smo101481v0,smo104252v0], 281);
const stavesmo101481 = new VF.Stave(368, 1501, 295);
stavesmo101481.setAttribute('id', 'stavesmo101481');
stavesmo101481.setBegBarType(VF.Barline.type.NONE);
stavesmo101481.setContext(context);
stavesmo101481.draw();
smo101481v0.draw(context, stavesmo101481);
smo105804.setContext(context);
smo105804.draw();
const stavesmo104252 = new VF.Stave(368, 1657, 295);
stavesmo104252.setAttribute('id', 'stavesmo104252');
stavesmo104252.setBegBarType(VF.Barline.type.NONE);
stavesmo104252.setContext(context);
stavesmo104252.draw();
smo104252v0.draw(context, stavesmo104252);
smo105807.setContext(context);
smo105807.draw();
const fmtsmo10150350 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo101503v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101503v0ar = [];
const smo101482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101482.setAttribute('id', 'smo101482');
smo101503v0ar.push(smo101482);
const smo101483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101483.setAttribute('id', 'smo101483');
smo101503v0ar.push(smo101483);
const smo101484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101484.setAttribute('id', 'smo101484');
smo101503v0ar.push(smo101484);
const smo101485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101485.setAttribute('id', 'smo101485');
smo101503v0ar.push(smo101485);
const smo101486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101486.setAttribute('id', 'smo101486');
smo101503v0ar.push(smo101486);
const smo101487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101487.setAttribute('id', 'smo101487');
smo101503v0ar.push(smo101487);
const smo101488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101488.setAttribute('id', 'smo101488');
smo101503v0ar.push(smo101488);
const smo101489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101489.setAttribute('id', 'smo101489');
smo101503v0ar.push(smo101489);
smo101503v0.addTickables(smo101503v0ar)
fmtsmo10150350.joinVoices([smo101503v0]);
const fmtsmo10427050 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo104270v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104270v0ar = [];
const smo104253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104253.setAttribute('id', 'smo104253');
smo104270v0ar.push(smo104253);
const smo104254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104254.setAttribute('id', 'smo104254');
smo104270v0ar.push(smo104254);
const smo104255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo104255.setAttribute('id', 'smo104255');
const smo1042550acc = new VF.Accidental('b');
smo104255.addModifier(smo1042550acc, 0);
const smo1042551acc = new VF.Accidental('b');
smo104255.addModifier(smo1042551acc, 1);
smo104270v0ar.push(smo104255);
const smo104256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104256.setAttribute('id', 'smo104256');
smo104270v0ar.push(smo104256);
smo104270v0.addTickables(smo104270v0ar)
fmtsmo10427050.joinVoices([smo104270v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105810 = smo101482.getStemDirection();
smo101482.setStemDirection(dirsmo105810);
smo101483.setStemDirection(dirsmo105810);
smo101484.setStemDirection(dirsmo105810);
smo101485.setStemDirection(dirsmo105810);
const smo105810 = new VF.Beam([smo101482,smo101483,smo101484,smo101485]);
const dirsmo105811 = smo101486.getStemDirection();
smo101486.setStemDirection(dirsmo105811);
smo101487.setStemDirection(dirsmo105811);
smo101488.setStemDirection(dirsmo105811);
smo101489.setStemDirection(dirsmo105811);
const smo105811 = new VF.Beam([smo101486,smo101487,smo101488,smo101489]);
const dirsmo105814 = smo104253.getStemDirection();
smo104253.setStemDirection(dirsmo105814);
smo104254.setStemDirection(dirsmo105814);
const smo105814 = new VF.Beam([smo104253,smo104254]);
const dirsmo105815 = smo104255.getStemDirection();
smo104255.setStemDirection(dirsmo105815);
smo104256.setStemDirection(dirsmo105815);
const smo105815 = new VF.Beam([smo104255,smo104256]);
 
// formatting measures in staff group smo99711
fmtsmo10150350.format([smo101503v0,smo104270v0], 281);
const stavesmo101503 = new VF.Stave(663, 1501, 295);
stavesmo101503.setAttribute('id', 'stavesmo101503');
stavesmo101503.setBegBarType(VF.Barline.type.NONE);
stavesmo101503.setContext(context);
stavesmo101503.draw();
smo101503v0.draw(context, stavesmo101503);
smo105810.setContext(context);
smo105810.draw();
smo105811.setContext(context);
smo105811.draw();
const stavesmo104270 = new VF.Stave(663, 1657, 295);
stavesmo104270.setAttribute('id', 'stavesmo104270');
stavesmo104270.setBegBarType(VF.Barline.type.NONE);
stavesmo104270.setContext(context);
stavesmo104270.draw();
smo104270v0.draw(context, stavesmo104270);
smo105814.setContext(context);
smo105814.draw();
smo105815.setContext(context);
smo105815.draw();
const fmtsmo10152551 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo101525v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101525v0ar = [];
const smo101504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101504.setAttribute('id', 'smo101504');
smo101525v0ar.push(smo101504);
const smo101505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101505.setAttribute('id', 'smo101505');
smo101525v0ar.push(smo101505);
const smo101506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101506.setAttribute('id', 'smo101506');
smo101525v0ar.push(smo101506);
const smo101507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101507.setAttribute('id', 'smo101507');
smo101525v0ar.push(smo101507);
const smo101508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101508.setAttribute('id', 'smo101508');
smo101525v0ar.push(smo101508);
const smo101509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101509.setAttribute('id', 'smo101509');
smo101525v0ar.push(smo101509);
const smo101510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101510.setAttribute('id', 'smo101510');
smo101525v0ar.push(smo101510);
const smo101511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101511.setAttribute('id', 'smo101511');
smo101525v0ar.push(smo101511);
smo101525v0.addTickables(smo101525v0ar)
fmtsmo10152551.joinVoices([smo101525v0]);
const fmtsmo10428851 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo104288v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104288v0ar = [];
const smo104271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104271.setAttribute('id', 'smo104271');
smo104288v0ar.push(smo104271);
const smo104272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104272.setAttribute('id', 'smo104272');
smo104288v0ar.push(smo104272);
const smo104273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo104273.setAttribute('id', 'smo104273');
const smo1042730acc = new VF.Accidental('b');
smo104273.addModifier(smo1042730acc, 0);
const smo1042731acc = new VF.Accidental('b');
smo104273.addModifier(smo1042731acc, 1);
smo104288v0ar.push(smo104273);
const smo104274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo104274.setAttribute('id', 'smo104274');
smo104288v0ar.push(smo104274);
smo104288v0.addTickables(smo104288v0ar)
fmtsmo10428851.joinVoices([smo104288v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105818 = smo101504.getStemDirection();
smo101504.setStemDirection(dirsmo105818);
smo101505.setStemDirection(dirsmo105818);
smo101506.setStemDirection(dirsmo105818);
smo101507.setStemDirection(dirsmo105818);
const smo105818 = new VF.Beam([smo101504,smo101505,smo101506,smo101507]);
const dirsmo105819 = smo101508.getStemDirection();
smo101508.setStemDirection(dirsmo105819);
smo101509.setStemDirection(dirsmo105819);
smo101510.setStemDirection(dirsmo105819);
smo101511.setStemDirection(dirsmo105819);
const smo105819 = new VF.Beam([smo101508,smo101509,smo101510,smo101511]);
const dirsmo105822 = smo104271.getStemDirection();
smo104271.setStemDirection(dirsmo105822);
smo104272.setStemDirection(dirsmo105822);
const smo105822 = new VF.Beam([smo104271,smo104272]);
const dirsmo105823 = smo104273.getStemDirection();
smo104273.setStemDirection(dirsmo105823);
smo104274.setStemDirection(dirsmo105823);
const smo105823 = new VF.Beam([smo104273,smo104274]);
 
// formatting measures in staff group smo99711
fmtsmo10152551.format([smo101525v0,smo104288v0], 281);
const stavesmo101525 = new VF.Stave(958, 1501, 295);
stavesmo101525.setAttribute('id', 'stavesmo101525');
stavesmo101525.setBegBarType(VF.Barline.type.NONE);
stavesmo101525.setContext(context);
stavesmo101525.draw();
smo101525v0.draw(context, stavesmo101525);
smo105818.setContext(context);
smo105818.draw();
smo105819.setContext(context);
smo105819.draw();
const stavesmo104288 = new VF.Stave(958, 1657, 295);
stavesmo104288.setAttribute('id', 'stavesmo104288');
stavesmo104288.setBegBarType(VF.Barline.type.NONE);
stavesmo104288.setContext(context);
stavesmo104288.draw();
smo104288v0.draw(context, stavesmo104288);
smo105822.setContext(context);
smo105822.draw();
smo105823.setContext(context);
smo105823.draw();
const fmtsmo10154652 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo101546v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101546v0ar = [];
const smo101526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101526.setAttribute('id', 'smo101526');
smo101546v0ar.push(smo101526);
const smo101527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101527.setAttribute('id', 'smo101527');
smo101546v0ar.push(smo101527);
const smo101528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101528.setAttribute('id', 'smo101528');
smo101546v0ar.push(smo101528);
const smo101529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101529.setAttribute('id', 'smo101529');
smo101546v0ar.push(smo101529);
const smo101530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101530.setAttribute('id', 'smo101530');
smo101546v0ar.push(smo101530);
const smo101531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo101531.setAttribute('id', 'smo101531');
smo101546v0ar.push(smo101531);
const smo101532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101532.setAttribute('id', 'smo101532');
smo101546v0ar.push(smo101532);
smo101546v0.addTickables(smo101546v0ar)
fmtsmo10154652.joinVoices([smo101546v0]);
const fmtsmo10430652 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo104306v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104306v0ar = [];
const smo104289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104289.setAttribute('id', 'smo104289');
smo104306v0ar.push(smo104289);
const smo104290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104290.setAttribute('id', 'smo104290');
smo104306v0ar.push(smo104290);
const smo104291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104291.setAttribute('id', 'smo104291');
smo104306v0ar.push(smo104291);
const smo104292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104292.setAttribute('id', 'smo104292');
smo104306v0ar.push(smo104292);
smo104306v0.addTickables(smo104306v0ar)
fmtsmo10430652.joinVoices([smo104306v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105826 = smo101526.getStemDirection();
smo101526.setStemDirection(dirsmo105826);
smo101527.setStemDirection(dirsmo105826);
smo101528.setStemDirection(dirsmo105826);
smo101529.setStemDirection(dirsmo105826);
const smo105826 = new VF.Beam([smo101526,smo101527,smo101528,smo101529]);
const dirsmo105827 = smo101530.getStemDirection();
smo101530.setStemDirection(dirsmo105827);
smo101531.setStemDirection(dirsmo105827);
smo101532.setStemDirection(dirsmo105827);
const smo105827 = new VF.Beam([smo101530,smo101531,smo101532]);
const dirsmo105830 = smo104289.getStemDirection();
smo104289.setStemDirection(dirsmo105830);
smo104290.setStemDirection(dirsmo105830);
const smo105830 = new VF.Beam([smo104289,smo104290]);
const dirsmo105831 = smo104291.getStemDirection();
smo104291.setStemDirection(dirsmo105831);
smo104292.setStemDirection(dirsmo105831);
const smo105831 = new VF.Beam([smo104291,smo104292]);
 
// formatting measures in staff group smo99711
fmtsmo10154652.format([smo101546v0,smo104306v0], 281);
const stavesmo101546 = new VF.Stave(1253, 1501, 295);
stavesmo101546.setAttribute('id', 'stavesmo101546');
stavesmo101546.setBegBarType(VF.Barline.type.NONE);
stavesmo101546.setContext(context);
stavesmo101546.draw();
smo101546v0.draw(context, stavesmo101546);
smo105826.setContext(context);
smo105826.draw();
smo105827.setContext(context);
smo105827.draw();
const stavesmo104306 = new VF.Stave(1253, 1657, 295);
stavesmo104306.setAttribute('id', 'stavesmo104306');
stavesmo104306.setBegBarType(VF.Barline.type.NONE);
stavesmo104306.setContext(context);
stavesmo104306.draw();
smo104306v0.draw(context, stavesmo104306);
smo105830.setContext(context);
smo105830.draw();
smo105831.setContext(context);
smo105831.draw();
const fmtsmo10156353 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo101563v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101563v0ar = [];
const smo101547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101547.setAttribute('id', 'smo101547');
smo101563v0ar.push(smo101547);
const smo101548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101548.setAttribute('id', 'smo101548');
smo101563v0ar.push(smo101548);
const smo101549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101549.setAttribute('id', 'smo101549');
smo101563v0ar.push(smo101549);
smo101563v0.addTickables(smo101563v0ar)
fmtsmo10156353.joinVoices([smo101563v0]);
const fmtsmo10432453 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo104324v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104324v0ar = [];
const smo104307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo104307.setAttribute('id', 'smo104307');
smo104324v0ar.push(smo104307);
const smo104308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104308.setAttribute('id', 'smo104308');
smo104324v0ar.push(smo104308);
const smo104309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104309.setAttribute('id', 'smo104309');
smo104324v0ar.push(smo104309);
const smo104310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104310.setAttribute('id', 'smo104310');
smo104324v0ar.push(smo104310);
smo104324v0.addTickables(smo104324v0ar)
fmtsmo10432453.joinVoices([smo104324v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105836 = smo104307.getStemDirection();
smo104307.setStemDirection(dirsmo105836);
smo104308.setStemDirection(dirsmo105836);
const smo105836 = new VF.Beam([smo104307,smo104308]);
 
// formatting measures in staff group smo99711
fmtsmo10156353.format([smo101563v0,smo104324v0], 281);
const stavesmo101563 = new VF.Stave(1548, 1501, 295);
stavesmo101563.setAttribute('id', 'stavesmo101563');
stavesmo101563.setBegBarType(VF.Barline.type.NONE);
stavesmo101563.setContext(context);
stavesmo101563.draw();
smo101563v0.draw(context, stavesmo101563);
const stavesmo104324 = new VF.Stave(1548, 1657, 295);
stavesmo104324.setAttribute('id', 'stavesmo104324');
stavesmo104324.setBegBarType(VF.Barline.type.NONE);
stavesmo104324.setContext(context);
stavesmo104324.draw();
smo104324v0.draw(context, stavesmo104324);
smo105836.setContext(context);
smo105836.draw();
const rightsmo99711stavesmo1015631 = new VF.StaveConnector(stavesmo101563, stavesmo104324).setType(0);
rightsmo99711stavesmo1015631.setContext(context).draw();
const fmtsmo10158354 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo101583v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101583v0ar = [];
const smo101564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo101564.setAttribute('id', 'smo101564');
smo101583v0ar.push(smo101564);
const smo101566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo101566.setAttribute('id', 'smo101566');
const smo1015660acc = new VF.Accidental('b');
smo101566.addModifier(smo1015660acc, 0);
smo101583v0ar.push(smo101566);
const smo101567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo101567.setAttribute('id', 'smo101567');
const smo1015671acc = new VF.Accidental('n');
smo101567.addModifier(smo1015671acc, 1);
smo101583v0ar.push(smo101567);
const smo101568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo101568.setAttribute('id', 'smo101568');
smo101583v0ar.push(smo101568);
const smo101569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo101569.setAttribute('id', 'smo101569');
smo101583v0ar.push(smo101569);
smo101583v0.addTickables(smo101583v0ar)
fmtsmo10158354.joinVoices([smo101583v0]);
const fmtsmo10434254 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo104342v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104342v0ar = [];
const smo104325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104325.setAttribute('id', 'smo104325');
smo104342v0ar.push(smo104325);
const smo104326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104326.setAttribute('id', 'smo104326');
smo104342v0ar.push(smo104326);
const smo104327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104327.setAttribute('id', 'smo104327');
smo104342v0ar.push(smo104327);
const smo104328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104328.setAttribute('id', 'smo104328');
smo104342v0ar.push(smo104328);
smo104342v0.addTickables(smo104342v0ar)
fmtsmo10434254.joinVoices([smo104342v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105845 = smo101564.getStemDirection();
smo101564.setStemDirection(dirsmo105845);
smo101566.setStemDirection(dirsmo105845);
smo101567.setStemDirection(dirsmo105845);
const smo105845 = new VF.Beam([smo101564,smo101566,smo101567]);
const dirsmo105846 = smo101568.getStemDirection();
smo101568.setStemDirection(dirsmo105846);
smo101569.setStemDirection(dirsmo105846);
const smo105846 = new VF.Beam([smo101568,smo101569]);
const dirsmo105848 = smo104325.getStemDirection();
smo104325.setStemDirection(dirsmo105848);
smo104326.setStemDirection(dirsmo105848);
const smo105848 = new VF.Beam([smo104325,smo104326]);
const dirsmo105849 = smo104327.getStemDirection();
smo104327.setStemDirection(dirsmo105849);
smo104328.setStemDirection(dirsmo105849);
const smo105849 = new VF.Beam([smo104327,smo104328]);
 
// formatting measures in staff group smo99711
fmtsmo10158354.format([smo101583v0,smo104342v0], 195);
const stavesmo101583 = new VF.Stave(73, 1835, 295);
stavesmo101583.setAttribute('id', 'stavesmo101583');
stavesmo101583.setBegBarType(4);
stavesmo101583.addClef('treble');
const keysmo101583 = new VF.KeySignature('Bb');
keysmo101583.cancelKey('C');
keysmo101583.addToStave(stavesmo101583);
stavesmo101583.setContext(context);
stavesmo101583.draw();
smo101583v0.draw(context, stavesmo101583);
smo105845.setContext(context);
smo105845.draw();
smo105846.setContext(context);
smo105846.draw();
const stavesmo104342 = new VF.Stave(73, 2000, 295);
stavesmo104342.setAttribute('id', 'stavesmo104342');
stavesmo104342.setBegBarType(4);
stavesmo104342.addClef('bass');
const keysmo104342 = new VF.KeySignature('Bb');
keysmo104342.cancelKey('C');
keysmo104342.addToStave(stavesmo104342);
stavesmo104342.setContext(context);
stavesmo104342.draw();
smo104342v0.draw(context, stavesmo104342);
smo105848.setContext(context);
smo105848.draw();
smo105849.setContext(context);
smo105849.draw();
const leftsmo99711stavesmo1015831 = new VF.StaveConnector(stavesmo101583, stavesmo104342).setType(3);
leftsmo99711stavesmo1015831.setContext(context).draw();
const fmtsmo10160455 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo101604v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101604v0ar = [];
const smo101584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo101584.setAttribute('id', 'smo101584');
smo101604v0ar.push(smo101584);
smo101604v0.addTickables(smo101604v0ar)
fmtsmo10160455.joinVoices([smo101604v0]);
const smo101604v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101604v1ar = [];
const smo101585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101585.setAttribute('id', 'smo101585');
smo101585.setStyle({ fillStyle: "#115511" });
smo101604v1ar.push(smo101585);
const smo101586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo101586.setAttribute('id', 'smo101586');
smo101586.setStyle({ fillStyle: "#115511" });
smo101604v1ar.push(smo101586);
const smo101587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101587.setAttribute('id', 'smo101587');
smo101587.setStyle({ fillStyle: "#115511" });
smo101604v1ar.push(smo101587);
const smo101588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo101588.setAttribute('id', 'smo101588');
smo101588.setStyle({ fillStyle: "#115511" });
smo101604v1ar.push(smo101588);
const smo101589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101589.setAttribute('id', 'smo101589');
smo101589.setStyle({ fillStyle: "#115511" });
smo101604v1ar.push(smo101589);
const smo101590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101590.setAttribute('id', 'smo101590');
smo101590.setStyle({ fillStyle: "#115511" });
smo101604v1ar.push(smo101590);
smo101604v1.addTickables(smo101604v1ar)
fmtsmo10160455.joinVoices([smo101604v1]);
const fmtsmo10436055 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo104360v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104360v0ar = [];
const smo104343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo104343.setAttribute('id', 'smo104343');
smo104360v0ar.push(smo104343);
const smo104344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo104344.setAttribute('id', 'smo104344');
smo104360v0ar.push(smo104344);
const smo104345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo104345.setAttribute('id', 'smo104345');
smo104360v0ar.push(smo104345);
const smo104346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo104346.setAttribute('id', 'smo104346');
smo104360v0ar.push(smo104346);
smo104360v0.addTickables(smo104360v0ar)
fmtsmo10436055.joinVoices([smo104360v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105851 = smo101586.getStemDirection();
smo101586.setStemDirection(dirsmo105851);
smo101587.setStemDirection(dirsmo105851);
const smo105851 = new VF.Beam([smo101586,smo101587]);
const dirsmo105852 = smo101588.getStemDirection();
smo101588.setStemDirection(dirsmo105852);
smo101589.setStemDirection(dirsmo105852);
smo101590.setStemDirection(dirsmo105852);
const smo105852 = new VF.Beam([smo101588,smo101589,smo101590]);
const dirsmo105855 = smo104343.getStemDirection();
smo104343.setStemDirection(dirsmo105855);
smo104344.setStemDirection(dirsmo105855);
const smo105855 = new VF.Beam([smo104343,smo104344]);
const dirsmo105856 = smo104345.getStemDirection();
smo104345.setStemDirection(dirsmo105856);
smo104346.setStemDirection(dirsmo105856);
const smo105856 = new VF.Beam([smo104345,smo104346]);
 
// formatting measures in staff group smo99711
fmtsmo10160455.format([smo101604v0,smo101604v1,smo104360v0], 281);
const stavesmo101604 = new VF.Stave(368, 1835, 295);
stavesmo101604.setAttribute('id', 'stavesmo101604');
stavesmo101604.setBegBarType(VF.Barline.type.NONE);
stavesmo101604.setContext(context);
stavesmo101604.draw();
smo101604v0.draw(context, stavesmo101604);
smo101604v1.draw(context, stavesmo101604);
smo105851.setContext(context);
smo105851.draw();
smo105852.setContext(context);
smo105852.draw();
const stavesmo104360 = new VF.Stave(368, 2000, 295);
stavesmo104360.setAttribute('id', 'stavesmo104360');
stavesmo104360.setBegBarType(VF.Barline.type.NONE);
stavesmo104360.setContext(context);
stavesmo104360.draw();
smo104360v0.draw(context, stavesmo104360);
smo105855.setContext(context);
smo105855.draw();
smo105856.setContext(context);
smo105856.draw();
const fmtsmo10162356 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo101623v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101623v0ar = [];
const smo101605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo101605.setAttribute('id', 'smo101605');
smo101623v0ar.push(smo101605);
const smo101606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101606.setAttribute('id', 'smo101606');
const smo1016060acc = new VF.Accidental('n');
smo101606.addModifier(smo1016060acc, 0);
smo101623v0ar.push(smo101606);
const smo101607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo101607.setAttribute('id', 'smo101607');
smo101623v0ar.push(smo101607);
const smo101608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo101608.setAttribute('id', 'smo101608');
smo101623v0ar.push(smo101608);
const smo101609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo101609.setAttribute('id', 'smo101609');
smo101623v0ar.push(smo101609);
smo101623v0.addTickables(smo101623v0ar)
fmtsmo10162356.joinVoices([smo101623v0]);
const fmtsmo10437856 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo104378v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104378v0ar = [];
const smo104361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo104361.setAttribute('id', 'smo104361');
smo104378v0ar.push(smo104361);
const smo104362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo104362.setAttribute('id', 'smo104362');
smo104378v0ar.push(smo104362);
const smo104363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104363.setAttribute('id', 'smo104363');
smo104378v0ar.push(smo104363);
const smo104364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo104364.setAttribute('id', 'smo104364');
smo104378v0ar.push(smo104364);
smo104378v0.addTickables(smo104378v0ar)
fmtsmo10437856.joinVoices([smo104378v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105859 = smo101605.getStemDirection();
smo101605.setStemDirection(dirsmo105859);
smo101606.setStemDirection(dirsmo105859);
smo101607.setStemDirection(dirsmo105859);
const smo105859 = new VF.Beam([smo101605,smo101606,smo101607]);
const dirsmo105860 = smo101608.getStemDirection();
smo101608.setStemDirection(dirsmo105860);
smo101609.setStemDirection(dirsmo105860);
const smo105860 = new VF.Beam([smo101608,smo101609]);
const dirsmo105863 = smo104361.getStemDirection();
smo104361.setStemDirection(dirsmo105863);
smo104362.setStemDirection(dirsmo105863);
const smo105863 = new VF.Beam([smo104361,smo104362]);
const dirsmo105864 = smo104363.getStemDirection();
smo104363.setStemDirection(dirsmo105864);
smo104364.setStemDirection(dirsmo105864);
const smo105864 = new VF.Beam([smo104363,smo104364]);
 
// formatting measures in staff group smo99711
fmtsmo10162356.format([smo101623v0,smo104378v0], 281);
const stavesmo101623 = new VF.Stave(663, 1835, 295);
stavesmo101623.setAttribute('id', 'stavesmo101623');
stavesmo101623.setBegBarType(VF.Barline.type.NONE);
stavesmo101623.setContext(context);
stavesmo101623.draw();
smo101623v0.draw(context, stavesmo101623);
smo105859.setContext(context);
smo105859.draw();
smo105860.setContext(context);
smo105860.draw();
const stavesmo104378 = new VF.Stave(663, 2000, 295);
stavesmo104378.setAttribute('id', 'stavesmo104378');
stavesmo104378.setBegBarType(VF.Barline.type.NONE);
stavesmo104378.setContext(context);
stavesmo104378.draw();
smo104378v0.draw(context, stavesmo104378);
smo105863.setContext(context);
smo105863.draw();
smo105864.setContext(context);
smo105864.draw();
const fmtsmo10164657 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo101646v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101646v0ar = [];
const smo101624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo101624.setAttribute('id', 'smo101624');
smo101646v0ar.push(smo101624);
const smo101625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo101625.setAttribute('id', 'smo101625');
smo101625.addModifier(new VF.Dot(), 0);
smo101625.addModifier(new VF.Dot(), 1);
smo101625.addModifier(new VF.Dot(), 2);
smo101646v0ar.push(smo101625);
const smo101626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101626.setAttribute('id', 'smo101626');
smo101646v0ar.push(smo101626);
smo101646v0.addTickables(smo101646v0ar)
fmtsmo10164657.joinVoices([smo101646v0]);
const smo101646v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101646v1ar = [];
const smo101627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101627.setAttribute('id', 'smo101627');
smo101627.setStyle({ fillStyle: "#115511" });
smo101646v1ar.push(smo101627);
const smo101628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101628.setAttribute('id', 'smo101628');
smo101628.setStyle({ fillStyle: "#115511" });
smo101646v1ar.push(smo101628);
const smo101629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo101629.setAttribute('id', 'smo101629');
smo101629.setStyle({ fillStyle: "#115511" });
const smo1016290acc = new VF.Accidental('b');
smo101629.addModifier(smo1016290acc, 0);
smo101646v1ar.push(smo101629);
const smo101630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101630.setAttribute('id', 'smo101630');
smo101630.setStyle({ fillStyle: "#115511" });
const smo1016300acc = new VF.Accidental('n');
smo101630.addModifier(smo1016300acc, 0);
smo101646v1ar.push(smo101630);
const smo101631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101631.setAttribute('id', 'smo101631');
smo101631.setStyle({ fillStyle: "#115511" });
smo101646v1ar.push(smo101631);
const smo101632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo101632.setAttribute('id', 'smo101632');
smo101632.setStyle({ fillStyle: "#115511" });
smo101646v1ar.push(smo101632);
smo101646v1.addTickables(smo101646v1ar)
fmtsmo10164657.joinVoices([smo101646v1]);
const fmtsmo10439657 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo104396v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104396v0ar = [];
const smo104379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104379.setAttribute('id', 'smo104379');
smo104396v0ar.push(smo104379);
const smo104380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo104380.setAttribute('id', 'smo104380');
smo104396v0ar.push(smo104380);
const smo104381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104381.setAttribute('id', 'smo104381');
smo104396v0ar.push(smo104381);
const smo104382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo104382.setAttribute('id', 'smo104382');
smo104396v0ar.push(smo104382);
smo104396v0.addTickables(smo104396v0ar)
fmtsmo10439657.joinVoices([smo104396v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105867 = smo101625.getStemDirection();
smo101625.setStemDirection(dirsmo105867);
smo101626.setStemDirection(dirsmo105867);
const smo105867 = new VF.Beam([smo101625,smo101626]);
const dirsmo105868 = smo101628.getStemDirection();
smo101628.setStemDirection(dirsmo105868);
smo101629.setStemDirection(dirsmo105868);
const smo105868 = new VF.Beam([smo101628,smo101629]);
const dirsmo105869 = smo101630.getStemDirection();
smo101630.setStemDirection(dirsmo105869);
smo101631.setStemDirection(dirsmo105869);
smo101632.setStemDirection(dirsmo105869);
const smo105869 = new VF.Beam([smo101630,smo101631,smo101632]);
const dirsmo105872 = smo104379.getStemDirection();
smo104379.setStemDirection(dirsmo105872);
smo104380.setStemDirection(dirsmo105872);
const smo105872 = new VF.Beam([smo104379,smo104380]);
const dirsmo105873 = smo104381.getStemDirection();
smo104381.setStemDirection(dirsmo105873);
smo104382.setStemDirection(dirsmo105873);
const smo105873 = new VF.Beam([smo104381,smo104382]);
 
// formatting measures in staff group smo99711
fmtsmo10164657.format([smo101646v0,smo101646v1,smo104396v0], 281);
const stavesmo101646 = new VF.Stave(958, 1835, 295);
stavesmo101646.setAttribute('id', 'stavesmo101646');
stavesmo101646.setBegBarType(VF.Barline.type.NONE);
stavesmo101646.setContext(context);
stavesmo101646.draw();
smo101646v0.draw(context, stavesmo101646);
smo101646v1.draw(context, stavesmo101646);
smo105867.setContext(context);
smo105867.draw();
smo105868.setContext(context);
smo105868.draw();
smo105869.setContext(context);
smo105869.draw();
const stavesmo104396 = new VF.Stave(958, 2000, 295);
stavesmo104396.setAttribute('id', 'stavesmo104396');
stavesmo104396.setBegBarType(VF.Barline.type.NONE);
stavesmo104396.setContext(context);
stavesmo104396.draw();
smo104396v0.draw(context, stavesmo104396);
smo105872.setContext(context);
smo105872.draw();
smo105873.setContext(context);
smo105873.draw();
const fmtsmo10166658 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo101666v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101666v0ar = [];
const smo101647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101647.setAttribute('id', 'smo101647');
smo101666v0ar.push(smo101647);
const smo101648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101648.setAttribute('id', 'smo101648');
smo101666v0ar.push(smo101648);
const smo101649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101649.setAttribute('id', 'smo101649');
smo101666v0ar.push(smo101649);
const smo101650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101650.setAttribute('id', 'smo101650');
smo101666v0ar.push(smo101650);
const smo101651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101651.setAttribute('id', 'smo101651');
smo101666v0ar.push(smo101651);
const smo101652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101652.setAttribute('id', 'smo101652');
smo101666v0ar.push(smo101652);
smo101666v0.addTickables(smo101666v0ar)
fmtsmo10166658.joinVoices([smo101666v0]);
const fmtsmo10441458 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo104414v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104414v0ar = [];
const smo104397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo104397.setAttribute('id', 'smo104397');
smo104414v0ar.push(smo104397);
const smo104398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo104398.setAttribute('id', 'smo104398');
smo104414v0ar.push(smo104398);
const smo104399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104399.setAttribute('id', 'smo104399');
smo104414v0ar.push(smo104399);
const smo104400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo104400.setAttribute('id', 'smo104400');
const smo1044000acc = new VF.Accidental('b');
smo104400.addModifier(smo1044000acc, 0);
const smo1044001acc = new VF.Accidental('b');
smo104400.addModifier(smo1044001acc, 1);
smo104414v0ar.push(smo104400);
smo104414v0.addTickables(smo104414v0ar)
fmtsmo10441458.joinVoices([smo104414v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105876 = smo101647.getStemDirection();
smo101647.setStemDirection(dirsmo105876);
smo101648.setStemDirection(dirsmo105876);
smo101649.setStemDirection(dirsmo105876);
const smo105876 = new VF.Beam([smo101647,smo101648,smo101649]);
const dirsmo105877 = smo101650.getStemDirection();
smo101650.setStemDirection(dirsmo105877);
smo101651.setStemDirection(dirsmo105877);
smo101652.setStemDirection(dirsmo105877);
const smo105877 = new VF.Beam([smo101650,smo101651,smo101652]);
const dirsmo105880 = smo104397.getStemDirection();
smo104397.setStemDirection(dirsmo105880);
smo104398.setStemDirection(dirsmo105880);
const smo105880 = new VF.Beam([smo104397,smo104398]);
const dirsmo105881 = smo104399.getStemDirection();
smo104399.setStemDirection(dirsmo105881);
smo104400.setStemDirection(dirsmo105881);
const smo105881 = new VF.Beam([smo104399,smo104400]);
 
// formatting measures in staff group smo99711
fmtsmo10166658.format([smo101666v0,smo104414v0], 281);
const stavesmo101666 = new VF.Stave(1253, 1835, 295);
stavesmo101666.setAttribute('id', 'stavesmo101666');
stavesmo101666.setBegBarType(VF.Barline.type.NONE);
stavesmo101666.setContext(context);
stavesmo101666.draw();
smo101666v0.draw(context, stavesmo101666);
smo105876.setContext(context);
smo105876.draw();
smo105877.setContext(context);
smo105877.draw();
const stavesmo104414 = new VF.Stave(1253, 2000, 295);
stavesmo104414.setAttribute('id', 'stavesmo104414');
stavesmo104414.setBegBarType(VF.Barline.type.NONE);
stavesmo104414.setContext(context);
stavesmo104414.draw();
smo104414v0.draw(context, stavesmo104414);
smo105880.setContext(context);
smo105880.draw();
smo105881.setContext(context);
smo105881.draw();
const fmtsmo10168259 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo101682v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101682v0ar = [];
const smo101667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101667.setAttribute('id', 'smo101667');
smo101682v0ar.push(smo101667);
const smo101668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo101668.setAttribute('id', 'smo101668');
smo101682v0ar.push(smo101668);
smo101682v0.addTickables(smo101682v0ar)
fmtsmo10168259.joinVoices([smo101682v0]);
const fmtsmo10443259 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo104432v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104432v0ar = [];
const smo104415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104415.setAttribute('id', 'smo104415');
smo104432v0ar.push(smo104415);
const smo104416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104416.setAttribute('id', 'smo104416');
smo104432v0ar.push(smo104416);
const smo104417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104417.setAttribute('id', 'smo104417');
smo104432v0ar.push(smo104417);
const smo104418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo104418.setAttribute('id', 'smo104418');
smo104432v0ar.push(smo104418);
smo104432v0.addTickables(smo104432v0ar)
fmtsmo10443259.joinVoices([smo104432v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105886 = smo104415.getStemDirection();
smo104415.setStemDirection(dirsmo105886);
smo104416.setStemDirection(dirsmo105886);
const smo105886 = new VF.Beam([smo104415,smo104416]);
const dirsmo105887 = smo104417.getStemDirection();
smo104417.setStemDirection(dirsmo105887);
smo104418.setStemDirection(dirsmo105887);
const smo105887 = new VF.Beam([smo104417,smo104418]);
 
// formatting measures in staff group smo99711
fmtsmo10168259.format([smo101682v0,smo104432v0], 281);
const stavesmo101682 = new VF.Stave(1548, 1835, 295);
stavesmo101682.setAttribute('id', 'stavesmo101682');
stavesmo101682.setBegBarType(VF.Barline.type.NONE);
stavesmo101682.setContext(context);
stavesmo101682.draw();
smo101682v0.draw(context, stavesmo101682);
const stavesmo104432 = new VF.Stave(1548, 2000, 295);
stavesmo104432.setAttribute('id', 'stavesmo104432');
stavesmo104432.setBegBarType(VF.Barline.type.NONE);
stavesmo104432.setContext(context);
stavesmo104432.draw();
smo104432v0.draw(context, stavesmo104432);
smo105886.setContext(context);
smo105886.draw();
smo105887.setContext(context);
smo105887.draw();
const rightsmo99711stavesmo1016821 = new VF.StaveConnector(stavesmo101682, stavesmo104432).setType(0);
rightsmo99711stavesmo1016821.setContext(context).draw();
// modifier from 0-32-0-2 to 0-32-0-4
const smo106798 = new VF.StaveHairpin({ first_note: smo101123, last_note: smo101123,
       firstNote: smo101123, lastNote: smo101123 });
smo106798.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106798.setContext(context).setPosition(4).draw();
// modifier from 0-34-0-1 to 0-34-0-7
const smo106799 = new VF.StaveHairpin({ first_note: smo101163, last_note: smo101163,
       firstNote: smo101163, lastNote: smo101163 });
smo106799.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106799.setContext(context).setPosition(4).draw();
// modifier from 0-37-0-2 to 0-38-0-0
const smo106800 = new VF.StaveHairpin({ first_note: smo101225, last_note: smo101225,
       firstNote: smo101225, lastNote: smo101225 });
smo106800.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106800.setContext(context).setPosition(4).draw();
// modifier from 0-39-0-2 to 0-39-0-4
const smo106801 = new VF.StaveHairpin({ first_note: smo101265, last_note: smo101265,
       firstNote: smo101265, lastNote: smo101265 });
smo106801.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106801.setContext(context).setPosition(4).draw();
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-43-0-2 to 0-44-0-0
const smo106804 = new VF.StaveHairpin({ first_note: smo101345, last_note: smo101345,
       firstNote: smo101345, lastNote: smo101345 });
smo106804.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106804.setContext(context).setPosition(4).draw();
// modifier from 0-45-0-2 to 0-46-0-0
const smo106805 = new VF.StaveHairpin({ first_note: smo101386, last_note: smo101386,
       firstNote: smo101386, lastNote: smo101386 });
smo106805.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106805.setContext(context).setPosition(4).draw();
// modifier from 0-47-0-2 to 0-47-0-4
const smo106806 = new VF.StaveHairpin({ first_note: smo101425, last_note: smo101425,
       firstNote: smo101425, lastNote: smo101425 });
smo106806.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106806.setContext(context).setPosition(4).draw();
// modifier from 0-30-0-2 to 0-30-0-3
const smo106807 = new VF.StaveTie({ first_note: smo101080, last_note: smo101081, 
          firstNote: smo101080, lastNote: smo101081, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106807.setContext(context).draw();
// modifier from 0-32-0-0 to 0-32-0-1
const smo106808 = new VF.StaveTie({ first_note: smo101121, last_note: smo101122, 
          firstNote: smo101121, lastNote: smo101122, first_indices: [0], last_indices: [0]});
smo106808.setContext(context).draw();
// modifier from 0-33-0-2 to 0-33-0-3
const smo106809 = new VF.StaveTie({ first_note: smo101143, last_note: smo101144, 
          firstNote: smo101143, lastNote: smo101144, first_indices: [0], last_indices: [0]});
smo106809.setContext(context).draw();
// modifier from 0-34-0-3 to 0-34-0-4
const smo106810 = new VF.StaveTie({ first_note: smo101165, last_note: smo101166, 
          firstNote: smo101165, lastNote: smo101166, first_indices: [0], last_indices: [0]});
smo106810.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo106811 = new VF.StaveTie({ first_note: smo101188, last_note: null, 
          firstNote: smo101188, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo106811.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo106812 = new VF.StaveTie({ first_note: null, last_note: smo101203, 
          firstNote: null, lastNote: smo101203, first_indices: [0,1], last_indices: [0,1]});
smo106812.setContext(context).draw();
// modifier from 0-36-0-0 to 0-36-0-1
const smo106813 = new VF.StaveTie({ first_note: smo101203, last_note: smo101204, 
          firstNote: smo101203, lastNote: smo101204, first_indices: [0,1], last_indices: [0,1]});
smo106813.setContext(context).draw();
// modifier from 0-37-0-0 to 0-37-0-1
const smo106814 = new VF.StaveTie({ first_note: smo101223, last_note: smo101224, 
          firstNote: smo101223, lastNote: smo101224, first_indices: [0,1], last_indices: [0,1]});
smo106814.setContext(context).draw();
// modifier from 0-38-0-5 to 0-39-0-0
const smo106815 = new VF.StaveTie({ first_note: smo101248, last_note: smo101263, 
          firstNote: smo101248, lastNote: smo101263, first_indices: [0], last_indices: [0]});
smo106815.setContext(context).draw();
// modifier from 0-39-0-0 to 0-39-0-1
const smo106816 = new VF.StaveTie({ first_note: smo101263, last_note: smo101264, 
          firstNote: smo101263, lastNote: smo101264, first_indices: [0], last_indices: [0]});
smo106816.setContext(context).draw();
// modifier from 0-40-0-3 to 0-40-0-4
const smo106817 = new VF.StaveTie({ first_note: smo101286, last_note: smo101287, 
          firstNote: smo101286, lastNote: smo101287, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106817.setContext(context).draw();
// modifier from 0-41-0-0 to 0-41-0-1
const smo106818 = new VF.StaveTie({ first_note: smo101304, last_note: smo101305, 
          firstNote: smo101304, lastNote: smo101305, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106818.setContext(context).draw();
// modifier from 0-42-0-5 to 0-43-0-0
const smo106819 = new VF.StaveTie({ first_note: smo101328, last_note: smo101343, 
          firstNote: smo101328, lastNote: smo101343, first_indices: [0], last_indices: [0]});
smo106819.setContext(context).draw();
// modifier from 0-43-0-0 to 0-43-0-1
const smo106820 = new VF.StaveTie({ first_note: smo101343, last_note: smo101344, 
          firstNote: smo101343, lastNote: smo101344, first_indices: [0], last_indices: [0]});
smo106820.setContext(context).draw();
// modifier from 0-44-0-3 to 0-44-0-4
const smo106821 = new VF.StaveTie({ first_note: smo101365, last_note: smo101366, 
          firstNote: smo101365, lastNote: smo101366, first_indices: [0,1], last_indices: [0,1]});
smo106821.setContext(context).draw();
// modifier from 0-45-0-0 to 0-45-0-1
const smo106822 = new VF.StaveTie({ first_note: smo101384, last_note: smo101385, 
          firstNote: smo101384, lastNote: smo101385, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106822.setContext(context).draw();
// modifier from 0-46-0-5 to 0-47-0-0
const smo106823 = new VF.StaveTie({ first_note: smo101408, last_note: smo101423, 
          firstNote: smo101408, lastNote: smo101423, first_indices: [0], last_indices: [0]});
smo106823.setContext(context).draw();
// modifier from 0-47-0-0 to 0-47-0-1
const smo106824 = new VF.StaveTie({ first_note: smo101423, last_note: smo101424, 
          firstNote: smo101423, lastNote: smo101424, first_indices: [0], last_indices: [0]});
smo106824.setContext(context).draw();
// modifier from 0-48-0-3 to 0-48-0-4
const smo106825 = new VF.StaveTie({ first_note: smo101446, last_note: smo101447, 
          firstNote: smo101446, lastNote: smo101447, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106825.setContext(context).draw();
// modifier from 0-49-0-0 to 0-49-0-1
const smo106826 = new VF.StaveTie({ first_note: smo101464, last_note: smo101465, 
          firstNote: smo101464, lastNote: smo101465, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106826.setContext(context).draw();
// modifier from 0-50-0-3 to 0-50-0-4
const smo106827 = new VF.StaveTie({ first_note: smo101485, last_note: smo101486, 
          firstNote: smo101485, lastNote: smo101486, first_indices: [0,1], last_indices: [0,1]});
smo106827.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo106828 = new VF.StaveTie({ first_note: smo101507, last_note: smo101508, 
          firstNote: smo101507, lastNote: smo101508, first_indices: [0,1], last_indices: [0,1]});
smo106828.setContext(context).draw();
// modifier from 0-52-0-3 to 0-52-0-4
const smo106829 = new VF.StaveTie({ first_note: smo101529, last_note: smo101530, 
          firstNote: smo101529, lastNote: smo101530, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106829.setContext(context).draw();
// modifier from 0-54-0-2 to 0-54-0-3
const smo106830 = new VF.StaveTie({ first_note: smo101567, last_note: smo101568, 
          firstNote: smo101567, lastNote: smo101568, first_indices: [0,1], last_indices: [0,1]});
smo106830.setContext(context).draw();
// modifier from 0-56-0-2 to 0-56-0-3
const smo106831 = new VF.StaveTie({ first_note: smo101607, last_note: smo101608, 
          firstNote: smo101607, lastNote: smo101608, first_indices: [0,1], last_indices: [0,1]});
smo106831.setContext(context).draw();
// modifier from 0-57-0-0 to 0-57-0-1
const smo106832 = new VF.StaveTie({ first_note: smo101624, last_note: smo101625, 
          firstNote: smo101624, lastNote: smo101625, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106832.setContext(context).draw();
// modifier from 0-58-0-2 to 0-58-0-3
const smo106833 = new VF.StaveTie({ first_note: smo101649, last_note: smo101650, 
          firstNote: smo101649, lastNote: smo101650, first_indices: [0], last_indices: [0]});
smo106833.setContext(context).draw();
const smo101209smo101222 = new VF.Volta(5, '1', 73, -55);
smo101209smo101222.setContext(context).draw(stavesmo101222, -1 * 0);
const smo101227smo101241 = new VF.Volta(5, '2', 368, 20);
smo101227smo101241.setContext(context).draw(stavesmo101241, -1 * 0);
}
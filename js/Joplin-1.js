// @@ The Entertainer p 2/2  by Scott Joplin
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
const fmtsmo11084130 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo110841v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110841v0ar = [];
const smo110821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110821.setAttribute('id', 'smo110821');
smo110841v0ar.push(smo110821);
const smo110822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo110822.setAttribute('id', 'smo110822');
smo110841v0ar.push(smo110822);
const smo110823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110823.setAttribute('id', 'smo110823');
smo110841v0ar.push(smo110823);
const smo110824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110824.setAttribute('id', 'smo110824');
smo110841v0ar.push(smo110824);
const smo110825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110825.setAttribute('id', 'smo110825');
smo110841v0ar.push(smo110825);
const smo110826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110826.setAttribute('id', 'smo110826');
smo110841v0ar.push(smo110826);
const smo110827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110827.setAttribute('id', 'smo110827');
smo110841v0ar.push(smo110827);
smo110841v0.addTickables(smo110841v0ar)
fmtsmo11084130.joinVoices([smo110841v0]);
const fmtsmo11365130 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo113651v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113651v0ar = [];
const smo113634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113634.setAttribute('id', 'smo113634');
smo113651v0ar.push(smo113634);
const smo113635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113635.setAttribute('id', 'smo113635');
smo113651v0ar.push(smo113635);
const smo113636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113636.setAttribute('id', 'smo113636');
smo113651v0ar.push(smo113636);
const smo113637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113637.setAttribute('id', 'smo113637');
smo113651v0ar.push(smo113637);
smo113651v0.addTickables(smo113651v0ar)
fmtsmo11365130.joinVoices([smo113651v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115384 = smo110821.getStemDirection();
smo110821.setStemDirection(dirsmo115384);
smo110822.setStemDirection(dirsmo115384);
smo110823.setStemDirection(dirsmo115384);
const smo115384 = new VF.Beam([smo110821,smo110822,smo110823]);
const dirsmo115385 = smo110824.getStemDirection();
smo110824.setStemDirection(dirsmo115385);
smo110825.setStemDirection(dirsmo115385);
smo110826.setStemDirection(dirsmo115385);
smo110827.setStemDirection(dirsmo115385);
const smo115385 = new VF.Beam([smo110824,smo110825,smo110826,smo110827]);
const dirsmo115388 = smo113634.getStemDirection();
smo113634.setStemDirection(dirsmo115388);
smo113635.setStemDirection(dirsmo115388);
const smo115388 = new VF.Beam([smo113634,smo113635]);
const dirsmo115389 = smo113636.getStemDirection();
smo113636.setStemDirection(dirsmo115389);
smo113637.setStemDirection(dirsmo115389);
const smo115389 = new VF.Beam([smo113636,smo113637]);
 
// formatting measures in staff group smo109454
fmtsmo11084130.format([smo110841v0,smo113651v0], 237);
const stavesmo110841 = new VF.Stave(73, 411, 295);
stavesmo110841.setAttribute('id', 'stavesmo110841');
stavesmo110841.setBegBarType(1);
stavesmo110841.addClef('treble');
stavesmo110841.setContext(context);
stavesmo110841.draw();
smo110841v0.draw(context, stavesmo110841);
smo115384.setContext(context);
smo115384.draw();
smo115385.setContext(context);
smo115385.draw();
const stavesmo113651 = new VF.Stave(73, 561, 295);
stavesmo113651.setAttribute('id', 'stavesmo113651');
stavesmo113651.setBegBarType(1);
stavesmo113651.addClef('bass');
stavesmo113651.setContext(context);
stavesmo113651.draw();
smo113651v0.draw(context, stavesmo113651);
smo115388.setContext(context);
smo115388.draw();
smo115389.setContext(context);
smo115389.draw();
const leftsmo109454stavesmo1108411 = new VF.StaveConnector(stavesmo110841, stavesmo113651).setType(3);
leftsmo109454stavesmo1108411.setContext(context).draw();
const fmtsmo11086331 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo110863v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110863v0ar = [];
const smo110842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110842.setAttribute('id', 'smo110842');
smo110863v0ar.push(smo110842);
const smo110843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo110843.setAttribute('id', 'smo110843');
smo110863v0ar.push(smo110843);
const smo110844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110844.setAttribute('id', 'smo110844');
smo110863v0ar.push(smo110844);
const smo110845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110845.setAttribute('id', 'smo110845');
smo110863v0ar.push(smo110845);
const smo110846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110846.setAttribute('id', 'smo110846');
smo110863v0ar.push(smo110846);
const smo110847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110847.setAttribute('id', 'smo110847');
smo110863v0ar.push(smo110847);
const smo110848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110848.setAttribute('id', 'smo110848');
smo110863v0ar.push(smo110848);
const smo110849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110849.setAttribute('id', 'smo110849');
smo110863v0ar.push(smo110849);
smo110863v0.addTickables(smo110863v0ar)
fmtsmo11086331.joinVoices([smo110863v0]);
const fmtsmo11366931 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo113669v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113669v0ar = [];
const smo113652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo113652.setAttribute('id', 'smo113652');
smo113669v0ar.push(smo113652);
const smo113653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo113653.setAttribute('id', 'smo113653');
smo113669v0ar.push(smo113653);
const smo113654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo113654.setAttribute('id', 'smo113654');
smo113669v0ar.push(smo113654);
const smo113655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo113655.setAttribute('id', 'smo113655');
const smo1136550acc = new VF.Accidental('b');
smo113655.addModifier(smo1136550acc, 0);
smo113669v0ar.push(smo113655);
smo113669v0.addTickables(smo113669v0ar)
fmtsmo11366931.joinVoices([smo113669v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115392 = smo110842.getStemDirection();
smo110842.setStemDirection(dirsmo115392);
smo110843.setStemDirection(dirsmo115392);
smo110844.setStemDirection(dirsmo115392);
smo110845.setStemDirection(dirsmo115392);
const smo115392 = new VF.Beam([smo110842,smo110843,smo110844,smo110845]);
const dirsmo115393 = smo110846.getStemDirection();
smo110846.setStemDirection(dirsmo115393);
smo110847.setStemDirection(dirsmo115393);
smo110848.setStemDirection(dirsmo115393);
smo110849.setStemDirection(dirsmo115393);
const smo115393 = new VF.Beam([smo110846,smo110847,smo110848,smo110849]);
const dirsmo115396 = smo113652.getStemDirection();
smo113652.setStemDirection(dirsmo115396);
smo113653.setStemDirection(dirsmo115396);
const smo115396 = new VF.Beam([smo113652,smo113653]);
const dirsmo115397 = smo113654.getStemDirection();
smo113654.setStemDirection(dirsmo115397);
smo113655.setStemDirection(dirsmo115397);
const smo115397 = new VF.Beam([smo113654,smo113655]);
 
// formatting measures in staff group smo109454
fmtsmo11086331.format([smo110863v0,smo113669v0], 281);
const stavesmo110863 = new VF.Stave(368, 411, 295);
stavesmo110863.setAttribute('id', 'stavesmo110863');
stavesmo110863.setBegBarType(VF.Barline.type.NONE);
stavesmo110863.setContext(context);
stavesmo110863.draw();
smo110863v0.draw(context, stavesmo110863);
smo115392.setContext(context);
smo115392.draw();
smo115393.setContext(context);
smo115393.draw();
const stavesmo113669 = new VF.Stave(368, 561, 295);
stavesmo113669.setAttribute('id', 'stavesmo113669');
stavesmo113669.setBegBarType(VF.Barline.type.NONE);
stavesmo113669.setContext(context);
stavesmo113669.draw();
smo113669v0.draw(context, stavesmo113669);
smo115396.setContext(context);
smo115396.draw();
smo115397.setContext(context);
smo115397.draw();
const fmtsmo11088232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo110882v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110882v0ar = [];
const smo110864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110864.setAttribute('id', 'smo110864');
smo110882v0ar.push(smo110864);
const smo110865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110865.setAttribute('id', 'smo110865');
smo110882v0ar.push(smo110865);
const smo110866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110866.setAttribute('id', 'smo110866');
smo110882v0ar.push(smo110866);
const smo110867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo110867.setAttribute('id', 'smo110867');
const smo1108670acc = new VF.Accidental('b');
smo110867.addModifier(smo1108670acc, 0);
smo110882v0ar.push(smo110867);
const smo110868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110868.setAttribute('id', 'smo110868');
const smo1108680acc = new VF.Accidental('n');
smo110868.addModifier(smo1108680acc, 0);
smo110882v0ar.push(smo110868);
smo110882v0.addTickables(smo110882v0ar)
fmtsmo11088232.joinVoices([smo110882v0]);
const fmtsmo11368732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo113687v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113687v0ar = [];
const smo113670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo113670.setAttribute('id', 'smo113670');
smo113687v0ar.push(smo113670);
const smo113671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113671.setAttribute('id', 'smo113671');
smo113687v0ar.push(smo113671);
const smo113672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113672.setAttribute('id', 'smo113672');
smo113687v0ar.push(smo113672);
const smo113673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
smo113673.setAttribute('id', 'smo113673');
const smo1136730acc = new VF.Accidental('b');
smo113673.addModifier(smo1136730acc, 0);
smo113687v0ar.push(smo113673);
smo113687v0.addTickables(smo113687v0ar)
fmtsmo11368732.joinVoices([smo113687v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115400 = smo110865.getStemDirection();
smo110865.setStemDirection(dirsmo115400);
smo110866.setStemDirection(dirsmo115400);
smo110867.setStemDirection(dirsmo115400);
smo110868.setStemDirection(dirsmo115400);
const smo115400 = new VF.Beam([smo110865,smo110866,smo110867,smo110868]);
const dirsmo115403 = smo113670.getStemDirection();
smo113670.setStemDirection(dirsmo115403);
smo113671.setStemDirection(dirsmo115403);
const smo115403 = new VF.Beam([smo113670,smo113671]);
const dirsmo115404 = smo113672.getStemDirection();
smo113672.setStemDirection(dirsmo115404);
smo113673.setStemDirection(dirsmo115404);
const smo115404 = new VF.Beam([smo113672,smo113673]);
 
// formatting measures in staff group smo109454
fmtsmo11088232.format([smo110882v0,smo113687v0], 281);
const stavesmo110882 = new VF.Stave(663, 411, 295);
stavesmo110882.setAttribute('id', 'stavesmo110882');
stavesmo110882.setBegBarType(VF.Barline.type.NONE);
stavesmo110882.setContext(context);
stavesmo110882.draw();
smo110882v0.draw(context, stavesmo110882);
smo115400.setContext(context);
smo115400.draw();
const stavesmo113687 = new VF.Stave(663, 561, 295);
stavesmo113687.setAttribute('id', 'stavesmo113687');
stavesmo113687.setBegBarType(VF.Barline.type.NONE);
stavesmo113687.setContext(context);
stavesmo113687.draw();
smo113687v0.draw(context, stavesmo113687);
smo115403.setContext(context);
smo115403.draw();
smo115404.setContext(context);
smo115404.draw();
const fmtsmo11090433 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo110904v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110904v0ar = [];
const smo110883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110883.setAttribute('id', 'smo110883');
smo110904v0ar.push(smo110883);
const smo110885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110885.setAttribute('id', 'smo110885');
smo110904v0ar.push(smo110885);
const smo110886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110886.setAttribute('id', 'smo110886');
smo110904v0ar.push(smo110886);
const smo110887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110887.setAttribute('id', 'smo110887');
smo110904v0ar.push(smo110887);
const smo110888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110888.setAttribute('id', 'smo110888');
smo110904v0ar.push(smo110888);
const smo110889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110889.setAttribute('id', 'smo110889');
smo110904v0ar.push(smo110889);
const smo110890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110890.setAttribute('id', 'smo110890');
smo110904v0ar.push(smo110890);
smo110904v0.addTickables(smo110904v0ar)
fmtsmo11090433.joinVoices([smo110904v0]);
const fmtsmo11370533 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo113705v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113705v0ar = [];
const smo113688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo113688.setAttribute('id', 'smo113688');
smo113705v0ar.push(smo113688);
const smo113689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo113689.setAttribute('id', 'smo113689');
smo113705v0ar.push(smo113689);
const smo113690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo113690.setAttribute('id', 'smo113690');
const smo1136900acc = new VF.Accidental('b');
smo113690.addModifier(smo1136900acc, 0);
const smo1136903acc = new VF.Accidental('b');
smo113690.addModifier(smo1136903acc, 3);
smo113705v0ar.push(smo113690);
const smo113691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo113691.setAttribute('id', 'smo113691');
smo113705v0ar.push(smo113691);
smo113705v0.addTickables(smo113705v0ar)
fmtsmo11370533.joinVoices([smo113705v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115407 = smo110883.getStemDirection();
smo110883.setStemDirection(dirsmo115407);
smo110885.setStemDirection(dirsmo115407);
smo110886.setStemDirection(dirsmo115407);
const smo115407 = new VF.Beam([smo110883,smo110885,smo110886]);
const dirsmo115408 = smo110887.getStemDirection();
smo110887.setStemDirection(dirsmo115408);
smo110888.setStemDirection(dirsmo115408);
smo110889.setStemDirection(dirsmo115408);
smo110890.setStemDirection(dirsmo115408);
const smo115408 = new VF.Beam([smo110887,smo110888,smo110889,smo110890]);
const dirsmo115411 = smo113688.getStemDirection();
smo113688.setStemDirection(dirsmo115411);
smo113689.setStemDirection(dirsmo115411);
const smo115411 = new VF.Beam([smo113688,smo113689]);
const dirsmo115412 = smo113690.getStemDirection();
smo113690.setStemDirection(dirsmo115412);
smo113691.setStemDirection(dirsmo115412);
const smo115412 = new VF.Beam([smo113690,smo113691]);
 
// formatting measures in staff group smo109454
fmtsmo11090433.format([smo110904v0,smo113705v0], 281);
const stavesmo110904 = new VF.Stave(958, 411, 295);
stavesmo110904.setAttribute('id', 'stavesmo110904');
stavesmo110904.setBegBarType(VF.Barline.type.NONE);
stavesmo110904.setContext(context);
stavesmo110904.draw();
smo110904v0.draw(context, stavesmo110904);
smo115407.setContext(context);
smo115407.draw();
smo115408.setContext(context);
smo115408.draw();
const stavesmo113705 = new VF.Stave(958, 561, 295);
stavesmo113705.setAttribute('id', 'stavesmo113705');
stavesmo113705.setBegBarType(VF.Barline.type.NONE);
stavesmo113705.setContext(context);
stavesmo113705.draw();
smo113705v0.draw(context, stavesmo113705);
smo115411.setContext(context);
smo115411.draw();
smo115412.setContext(context);
smo115412.draw();
const fmtsmo11092634 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo110926v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110926v0ar = [];
const smo110905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110905.setAttribute('id', 'smo110905');
smo110926v0ar.push(smo110905);
const smo110906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110906.setAttribute('id', 'smo110906');
smo110926v0ar.push(smo110906);
const smo110907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110907.setAttribute('id', 'smo110907');
smo110926v0ar.push(smo110907);
const smo110908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo110908.setAttribute('id', 'smo110908');
smo110926v0ar.push(smo110908);
const smo110909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo110909.setAttribute('id', 'smo110909');
smo110926v0ar.push(smo110909);
const smo110910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110910.setAttribute('id', 'smo110910');
smo110926v0ar.push(smo110910);
const smo110911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110911.setAttribute('id', 'smo110911');
smo110926v0ar.push(smo110911);
const smo110912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110912.setAttribute('id', 'smo110912');
smo110926v0ar.push(smo110912);
smo110926v0.addTickables(smo110926v0ar)
fmtsmo11092634.joinVoices([smo110926v0]);
const fmtsmo11372334 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo113723v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113723v0ar = [];
const smo113706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113706.setAttribute('id', 'smo113706');
smo113723v0ar.push(smo113706);
const smo113707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113707.setAttribute('id', 'smo113707');
smo113723v0ar.push(smo113707);
const smo113708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113708.setAttribute('id', 'smo113708');
smo113723v0ar.push(smo113708);
const smo113709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113709.setAttribute('id', 'smo113709');
smo113723v0ar.push(smo113709);
smo113723v0.addTickables(smo113723v0ar)
fmtsmo11372334.joinVoices([smo113723v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115415 = smo110905.getStemDirection();
smo110905.setStemDirection(dirsmo115415);
smo110906.setStemDirection(dirsmo115415);
smo110907.setStemDirection(dirsmo115415);
smo110908.setStemDirection(dirsmo115415);
const smo115415 = new VF.Beam([smo110905,smo110906,smo110907,smo110908]);
const dirsmo115416 = smo110909.getStemDirection();
smo110909.setStemDirection(dirsmo115416);
smo110910.setStemDirection(dirsmo115416);
smo110911.setStemDirection(dirsmo115416);
smo110912.setStemDirection(dirsmo115416);
const smo115416 = new VF.Beam([smo110909,smo110910,smo110911,smo110912]);
const dirsmo115419 = smo113706.getStemDirection();
smo113706.setStemDirection(dirsmo115419);
smo113707.setStemDirection(dirsmo115419);
const smo115419 = new VF.Beam([smo113706,smo113707]);
const dirsmo115420 = smo113708.getStemDirection();
smo113708.setStemDirection(dirsmo115420);
smo113709.setStemDirection(dirsmo115420);
const smo115420 = new VF.Beam([smo113708,smo113709]);
 
// formatting measures in staff group smo109454
fmtsmo11092634.format([smo110926v0,smo113723v0], 281);
const stavesmo110926 = new VF.Stave(1253, 411, 295);
stavesmo110926.setAttribute('id', 'stavesmo110926');
stavesmo110926.setBegBarType(VF.Barline.type.NONE);
stavesmo110926.setContext(context);
stavesmo110926.draw();
smo110926v0.draw(context, stavesmo110926);
smo115415.setContext(context);
smo115415.draw();
smo115416.setContext(context);
smo115416.draw();
const stavesmo113723 = new VF.Stave(1253, 561, 295);
stavesmo113723.setAttribute('id', 'stavesmo113723');
stavesmo113723.setBegBarType(VF.Barline.type.NONE);
stavesmo113723.setContext(context);
stavesmo113723.draw();
smo113723v0.draw(context, stavesmo113723);
smo115419.setContext(context);
smo115419.draw();
smo115420.setContext(context);
smo115420.draw();
const fmtsmo11094535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo110945v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110945v0ar = [];
const smo110927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
smo110927.setAttribute('id', 'smo110927');
const smo1109270acc = new VF.Accidental('b');
smo110927.addModifier(smo1109270acc, 0);
smo110945v0ar.push(smo110927);
const smo110928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo110928.setAttribute('id', 'smo110928');
smo110945v0ar.push(smo110928);
const smo110929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
smo110929.setAttribute('id', 'smo110929');
smo110945v0ar.push(smo110929);
const smo110930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo110930.setAttribute('id', 'smo110930');
smo110945v0ar.push(smo110930);
const smo110931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo110931.setAttribute('id', 'smo110931');
smo110945v0ar.push(smo110931);
smo110945v0.addTickables(smo110945v0ar)
fmtsmo11094535.joinVoices([smo110945v0]);
const fmtsmo11374135 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo113741v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113741v0ar = [];
const smo113724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo113724.setAttribute('id', 'smo113724');
smo113741v0ar.push(smo113724);
const smo113725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo113725.setAttribute('id', 'smo113725');
smo113741v0ar.push(smo113725);
const smo113726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113726.setAttribute('id', 'smo113726');
smo113741v0ar.push(smo113726);
const smo113727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113727.setAttribute('id', 'smo113727');
smo113741v0ar.push(smo113727);
smo113741v0.addTickables(smo113741v0ar)
fmtsmo11374135.joinVoices([smo113741v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115423 = smo110927.getStemDirection();
smo110927.setStemDirection(dirsmo115423);
smo110928.setStemDirection(dirsmo115423);
const smo115423 = new VF.Beam([smo110927,smo110928]);
const dirsmo115424 = smo110929.getStemDirection();
smo110929.setStemDirection(dirsmo115424);
smo110930.setStemDirection(dirsmo115424);
smo110931.setStemDirection(dirsmo115424);
const smo115424 = new VF.Beam([smo110929,smo110930,smo110931]);
const dirsmo115427 = smo113724.getStemDirection();
smo113724.setStemDirection(dirsmo115427);
smo113725.setStemDirection(dirsmo115427);
const smo115427 = new VF.Beam([smo113724,smo113725]);
const dirsmo115428 = smo113726.getStemDirection();
smo113726.setStemDirection(dirsmo115428);
smo113727.setStemDirection(dirsmo115428);
const smo115428 = new VF.Beam([smo113726,smo113727]);
 
// formatting measures in staff group smo109454
fmtsmo11094535.format([smo110945v0,smo113741v0], 281);
const stavesmo110945 = new VF.Stave(1548, 411, 295);
stavesmo110945.setAttribute('id', 'stavesmo110945');
stavesmo110945.setBegBarType(VF.Barline.type.NONE);
stavesmo110945.setContext(context);
stavesmo110945.draw();
smo110945v0.draw(context, stavesmo110945);
smo115423.setContext(context);
smo115423.draw();
smo115424.setContext(context);
smo115424.draw();
const stavesmo113741 = new VF.Stave(1548, 561, 295);
stavesmo113741.setAttribute('id', 'stavesmo113741');
stavesmo113741.setBegBarType(VF.Barline.type.NONE);
stavesmo113741.setContext(context);
stavesmo113741.draw();
smo113741v0.draw(context, stavesmo113741);
smo115427.setContext(context);
smo115427.draw();
smo115428.setContext(context);
smo115428.draw();
const rightsmo109454stavesmo1109451 = new VF.StaveConnector(stavesmo110945, stavesmo113741).setType(0);
rightsmo109454stavesmo1109451.setContext(context).draw();
const fmtsmo11096536 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo110965v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110965v0ar = [];
const smo110946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo110946.setAttribute('id', 'smo110946');
smo110965v0ar.push(smo110946);
const smo110947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo110947.setAttribute('id', 'smo110947');
smo110965v0ar.push(smo110947);
const smo110948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
smo110948.setAttribute('id', 'smo110948');
smo110965v0ar.push(smo110948);
const smo110949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
smo110949.setAttribute('id', 'smo110949');
smo110965v0ar.push(smo110949);
const smo110950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
smo110950.setAttribute('id', 'smo110950');
const smo1109500acc = new VF.Accidental('b');
smo110950.addModifier(smo1109500acc, 0);
const smo1109501acc = new VF.Accidental('b');
smo110950.addModifier(smo1109501acc, 1);
const smo1109502acc = new VF.Accidental('b');
smo110950.addModifier(smo1109502acc, 2);
smo110965v0ar.push(smo110950);
smo110965v0.addTickables(smo110965v0ar)
fmtsmo11096536.joinVoices([smo110965v0]);
const fmtsmo11376036 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo113760v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113760v0ar = [];
const smo113742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo113742.setAttribute('id', 'smo113742');
smo113760v0ar.push(smo113742);
const smo113743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113743.setAttribute('id', 'smo113743');
smo113760v0ar.push(smo113743);
const smo113744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113744.setAttribute('id', 'smo113744');
smo113760v0ar.push(smo113744);
const smo113745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo113745.setAttribute('id', 'smo113745');
smo113760v0ar.push(smo113745);
smo113760v0.addTickables(smo113760v0ar)
fmtsmo11376036.joinVoices([smo113760v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115437 = smo110947.getStemDirection();
smo110947.setStemDirection(dirsmo115437);
smo110948.setStemDirection(dirsmo115437);
smo110949.setStemDirection(dirsmo115437);
smo110950.setStemDirection(dirsmo115437);
const smo115437 = new VF.Beam([smo110947,smo110948,smo110949,smo110950]);
const dirsmo115439 = smo113742.getStemDirection();
smo113742.setStemDirection(dirsmo115439);
smo113743.setStemDirection(dirsmo115439);
const smo115439 = new VF.Beam([smo113742,smo113743]);
const dirsmo115440 = smo113744.getStemDirection();
smo113744.setStemDirection(dirsmo115440);
smo113745.setStemDirection(dirsmo115440);
const smo115440 = new VF.Beam([smo113744,smo113745]);
 
// formatting measures in staff group smo109454
fmtsmo11096536.format([smo110965v0,smo113760v0], 233);
const stavesmo110965 = new VF.Stave(73, 789, 295);
stavesmo110965.setAttribute('id', 'stavesmo110965');
stavesmo110965.setBegBarType(1);
stavesmo110965.setEndBarType(5);
stavesmo110965.addClef('treble');
stavesmo110965.setContext(context);
stavesmo110965.draw();
smo110965v0.draw(context, stavesmo110965);
smo115437.setContext(context);
smo115437.draw();
const stavesmo113760 = new VF.Stave(73, 930, 295);
stavesmo113760.setAttribute('id', 'stavesmo113760');
stavesmo113760.setBegBarType(1);
stavesmo113760.setEndBarType(5);
stavesmo113760.addClef('bass');
stavesmo113760.setContext(context);
stavesmo113760.draw();
smo113760v0.draw(context, stavesmo113760);
smo115439.setContext(context);
smo115439.draw();
smo115440.setContext(context);
smo115440.draw();
const leftsmo109454stavesmo1109651 = new VF.StaveConnector(stavesmo110965, stavesmo113760).setType(3);
leftsmo109454stavesmo1109651.setContext(context).draw();
const fmtsmo11098437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo110984v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110984v0ar = [];
const smo110966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo110966.setAttribute('id', 'smo110966');
smo110984v0ar.push(smo110966);
const smo110967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo110967.setAttribute('id', 'smo110967');
smo110984v0ar.push(smo110967);
const smo110968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo110968.setAttribute('id', 'smo110968');
smo110984v0ar.push(smo110968);
const smo110969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo110969.setAttribute('id', 'smo110969');
const smo1109690acc = new VF.Accidental('b');
smo110969.addModifier(smo1109690acc, 0);
smo110984v0ar.push(smo110969);
smo110984v0.addTickables(smo110984v0ar)
fmtsmo11098437.joinVoices([smo110984v0]);
const fmtsmo11377937 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo113779v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113779v0ar = [];
const smo113761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo113761.setAttribute('id', 'smo113761');
smo113779v0ar.push(smo113761);
const smo113762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113762.setAttribute('id', 'smo113762');
smo113779v0ar.push(smo113762);
const smo113763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo113763.setAttribute('id', 'smo113763');
smo113779v0ar.push(smo113763);
const smo113764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo113764.setAttribute('id', 'smo113764');
smo113779v0ar.push(smo113764);
smo113779v0.addTickables(smo113779v0ar)
fmtsmo11377937.joinVoices([smo113779v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115442 = smo110967.getStemDirection();
smo110967.setStemDirection(dirsmo115442);
smo110968.setStemDirection(dirsmo115442);
smo110969.setStemDirection(dirsmo115442);
const smo115442 = new VF.Beam([smo110967,smo110968,smo110969]);
const dirsmo115445 = smo113761.getStemDirection();
smo113761.setStemDirection(dirsmo115445);
smo113762.setStemDirection(dirsmo115445);
const smo115445 = new VF.Beam([smo113761,smo113762]);
 
// formatting measures in staff group smo109454
fmtsmo11098437.format([smo110984v0,smo113779v0], 281);
const stavesmo110984 = new VF.Stave(368, 789, 295);
stavesmo110984.setAttribute('id', 'stavesmo110984');
stavesmo110984.setBegBarType(VF.Barline.type.NONE);
stavesmo110984.setContext(context);
stavesmo110984.draw();
smo110984v0.draw(context, stavesmo110984);
smo115442.setContext(context);
smo115442.draw();
const stavesmo113779 = new VF.Stave(368, 930, 295);
stavesmo113779.setAttribute('id', 'stavesmo113779');
stavesmo113779.setBegBarType(VF.Barline.type.NONE);
stavesmo113779.setContext(context);
stavesmo113779.draw();
smo113779v0.draw(context, stavesmo113779);
smo115445.setContext(context);
smo115445.draw();
const fmtsmo11100538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo111005v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111005v0ar = [];
const smo110985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110985.setAttribute('id', 'smo110985');
smo111005v0ar.push(smo110985);
const smo110987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110987.setAttribute('id', 'smo110987');
smo111005v0ar.push(smo110987);
const smo110988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110988.setAttribute('id', 'smo110988');
smo111005v0ar.push(smo110988);
const smo110989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110989.setAttribute('id', 'smo110989');
smo111005v0ar.push(smo110989);
const smo110990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110990.setAttribute('id', 'smo110990');
smo111005v0ar.push(smo110990);
const smo110991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110991.setAttribute('id', 'smo110991');
smo111005v0ar.push(smo110991);
smo111005v0.addTickables(smo111005v0ar)
fmtsmo11100538.joinVoices([smo111005v0]);
const fmtsmo11379738 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo113797v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113797v0ar = [];
const smo113780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113780.setAttribute('id', 'smo113780');
smo113797v0ar.push(smo113780);
const smo113781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113781.setAttribute('id', 'smo113781');
smo113797v0ar.push(smo113781);
const smo113782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113782.setAttribute('id', 'smo113782');
smo113797v0ar.push(smo113782);
const smo113783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo113783.setAttribute('id', 'smo113783');
const smo1137831acc = new VF.Accidental('b');
smo113783.addModifier(smo1137831acc, 1);
smo113797v0ar.push(smo113783);
smo113797v0.addTickables(smo113797v0ar)
fmtsmo11379738.joinVoices([smo113797v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115448 = smo110985.getStemDirection();
smo110985.setStemDirection(dirsmo115448);
smo110987.setStemDirection(dirsmo115448);
smo110988.setStemDirection(dirsmo115448);
const smo115448 = new VF.Beam([smo110985,smo110987,smo110988]);
const dirsmo115449 = smo110989.getStemDirection();
smo110989.setStemDirection(dirsmo115449);
smo110990.setStemDirection(dirsmo115449);
smo110991.setStemDirection(dirsmo115449);
const smo115449 = new VF.Beam([smo110989,smo110990,smo110991]);
const dirsmo115452 = smo113780.getStemDirection();
smo113780.setStemDirection(dirsmo115452);
smo113781.setStemDirection(dirsmo115452);
const smo115452 = new VF.Beam([smo113780,smo113781]);
const dirsmo115453 = smo113782.getStemDirection();
smo113782.setStemDirection(dirsmo115453);
smo113783.setStemDirection(dirsmo115453);
const smo115453 = new VF.Beam([smo113782,smo113783]);
 
// formatting measures in staff group smo109454
fmtsmo11100538.format([smo111005v0,smo113797v0], 281);
const stavesmo111005 = new VF.Stave(663, 789, 295);
stavesmo111005.setAttribute('id', 'stavesmo111005');
stavesmo111005.setBegBarType(VF.Barline.type.NONE);
stavesmo111005.setContext(context);
stavesmo111005.draw();
smo111005v0.draw(context, stavesmo111005);
smo115448.setContext(context);
smo115448.draw();
smo115449.setContext(context);
smo115449.draw();
const stavesmo113797 = new VF.Stave(663, 930, 295);
stavesmo113797.setAttribute('id', 'stavesmo113797');
stavesmo113797.setBegBarType(VF.Barline.type.NONE);
stavesmo113797.setContext(context);
stavesmo113797.draw();
smo113797v0.draw(context, stavesmo113797);
smo115452.setContext(context);
smo115452.draw();
smo115453.setContext(context);
smo115453.draw();
const fmtsmo11102439 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo111024v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111024v0ar = [];
const smo111006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111006.setAttribute('id', 'smo111006');
smo111024v0ar.push(smo111006);
const smo111007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111007.setAttribute('id', 'smo111007');
smo111024v0ar.push(smo111007);
const smo111008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111008.setAttribute('id', 'smo111008');
smo111024v0ar.push(smo111008);
const smo111009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111009.setAttribute('id', 'smo111009');
smo111024v0ar.push(smo111009);
const smo111010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo111010.setAttribute('id', 'smo111010');
const smo1110100acc = new VF.Accidental('b');
smo111010.addModifier(smo1110100acc, 0);
const smo1110101acc = new VF.Accidental('b');
smo111010.addModifier(smo1110101acc, 1);
const smo1110102acc = new VF.Accidental('b');
smo111010.addModifier(smo1110102acc, 2);
smo111024v0ar.push(smo111010);
smo111024v0.addTickables(smo111024v0ar)
fmtsmo11102439.joinVoices([smo111024v0]);
const fmtsmo11381539 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo113815v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113815v0ar = [];
const smo113798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113798.setAttribute('id', 'smo113798');
smo113815v0ar.push(smo113798);
const smo113799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo113799.setAttribute('id', 'smo113799');
smo113815v0ar.push(smo113799);
const smo113800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113800.setAttribute('id', 'smo113800');
smo113815v0ar.push(smo113800);
const smo113801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo113801.setAttribute('id', 'smo113801');
smo113815v0ar.push(smo113801);
smo113815v0.addTickables(smo113815v0ar)
fmtsmo11381539.joinVoices([smo113815v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115456 = smo111007.getStemDirection();
smo111007.setStemDirection(dirsmo115456);
smo111008.setStemDirection(dirsmo115456);
smo111009.setStemDirection(dirsmo115456);
smo111010.setStemDirection(dirsmo115456);
const smo115456 = new VF.Beam([smo111007,smo111008,smo111009,smo111010]);
const dirsmo115459 = smo113798.getStemDirection();
smo113798.setStemDirection(dirsmo115459);
smo113799.setStemDirection(dirsmo115459);
const smo115459 = new VF.Beam([smo113798,smo113799]);
const dirsmo115460 = smo113800.getStemDirection();
smo113800.setStemDirection(dirsmo115460);
smo113801.setStemDirection(dirsmo115460);
const smo115460 = new VF.Beam([smo113800,smo113801]);
 
// formatting measures in staff group smo109454
fmtsmo11102439.format([smo111024v0,smo113815v0], 281);
const stavesmo111024 = new VF.Stave(958, 789, 295);
stavesmo111024.setAttribute('id', 'stavesmo111024');
stavesmo111024.setBegBarType(VF.Barline.type.NONE);
stavesmo111024.setContext(context);
stavesmo111024.draw();
smo111024v0.draw(context, stavesmo111024);
smo115456.setContext(context);
smo115456.draw();
const stavesmo113815 = new VF.Stave(958, 930, 295);
stavesmo113815.setAttribute('id', 'stavesmo113815');
stavesmo113815.setBegBarType(VF.Barline.type.NONE);
stavesmo113815.setContext(context);
stavesmo113815.draw();
smo113815v0.draw(context, stavesmo113815);
smo115459.setContext(context);
smo115459.draw();
smo115460.setContext(context);
smo115460.draw();
const fmtsmo11104640 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo111046v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111046v0ar = [];
const smo111025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111025.setAttribute('id', 'smo111025');
smo111046v0ar.push(smo111025);
const smo111027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111027.setAttribute('id', 'smo111027');
smo111046v0ar.push(smo111027);
const smo111028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111028.setAttribute('id', 'smo111028');
smo111046v0ar.push(smo111028);
const smo111029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111029.setAttribute('id', 'smo111029');
smo111046v0ar.push(smo111029);
const smo111030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111030.setAttribute('id', 'smo111030');
smo111046v0ar.push(smo111030);
const smo111031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo111031.setAttribute('id', 'smo111031');
smo111046v0ar.push(smo111031);
const smo111032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111032.setAttribute('id', 'smo111032');
smo111046v0ar.push(smo111032);
smo111046v0.addTickables(smo111046v0ar)
fmtsmo11104640.joinVoices([smo111046v0]);
const fmtsmo11383340 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo113833v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113833v0ar = [];
const smo113816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113816.setAttribute('id', 'smo113816');
smo113833v0ar.push(smo113816);
const smo113817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113817.setAttribute('id', 'smo113817');
smo113833v0ar.push(smo113817);
const smo113818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113818.setAttribute('id', 'smo113818');
smo113833v0ar.push(smo113818);
const smo113819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo113819.setAttribute('id', 'smo113819');
smo113833v0ar.push(smo113819);
smo113833v0.addTickables(smo113833v0ar)
fmtsmo11383340.joinVoices([smo113833v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115463 = smo111025.getStemDirection();
smo111025.setStemDirection(dirsmo115463);
smo111027.setStemDirection(dirsmo115463);
smo111028.setStemDirection(dirsmo115463);
smo111029.setStemDirection(dirsmo115463);
const smo115463 = new VF.Beam([smo111025,smo111027,smo111028,smo111029]);
const dirsmo115464 = smo111030.getStemDirection();
smo111030.setStemDirection(dirsmo115464);
smo111031.setStemDirection(dirsmo115464);
smo111032.setStemDirection(dirsmo115464);
const smo115464 = new VF.Beam([smo111030,smo111031,smo111032]);
const dirsmo115467 = smo113816.getStemDirection();
smo113816.setStemDirection(dirsmo115467);
smo113817.setStemDirection(dirsmo115467);
const smo115467 = new VF.Beam([smo113816,smo113817]);
const dirsmo115468 = smo113818.getStemDirection();
smo113818.setStemDirection(dirsmo115468);
smo113819.setStemDirection(dirsmo115468);
const smo115468 = new VF.Beam([smo113818,smo113819]);
 
// formatting measures in staff group smo109454
fmtsmo11104640.format([smo111046v0,smo113833v0], 281);
const stavesmo111046 = new VF.Stave(1253, 789, 295);
stavesmo111046.setAttribute('id', 'stavesmo111046');
stavesmo111046.setBegBarType(VF.Barline.type.NONE);
stavesmo111046.setContext(context);
stavesmo111046.draw();
smo111046v0.draw(context, stavesmo111046);
smo115463.setContext(context);
smo115463.draw();
smo115464.setContext(context);
smo115464.draw();
const stavesmo113833 = new VF.Stave(1253, 930, 295);
stavesmo113833.setAttribute('id', 'stavesmo113833');
stavesmo113833.setBegBarType(VF.Barline.type.NONE);
stavesmo113833.setContext(context);
stavesmo113833.draw();
smo113833v0.draw(context, stavesmo113833);
smo115467.setContext(context);
smo115467.draw();
smo115468.setContext(context);
smo115468.draw();
const fmtsmo11106441 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo111064v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111064v0ar = [];
const smo111047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111047.setAttribute('id', 'smo111047');
smo111064v0ar.push(smo111047);
const smo111048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111048.setAttribute('id', 'smo111048');
smo111064v0ar.push(smo111048);
const smo111049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo111049.setAttribute('id', 'smo111049');
smo111064v0ar.push(smo111049);
const smo111050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo111050.setAttribute('id', 'smo111050');
const smo1110500acc = new VF.Accidental('b');
smo111050.addModifier(smo1110500acc, 0);
smo111064v0ar.push(smo111050);
smo111064v0.addTickables(smo111064v0ar)
fmtsmo11106441.joinVoices([smo111064v0]);
const fmtsmo11385141 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo113851v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113851v0ar = [];
const smo113834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113834.setAttribute('id', 'smo113834');
smo113851v0ar.push(smo113834);
const smo113835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113835.setAttribute('id', 'smo113835');
smo113851v0ar.push(smo113835);
const smo113836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113836.setAttribute('id', 'smo113836');
smo113851v0ar.push(smo113836);
const smo113837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113837.setAttribute('id', 'smo113837');
smo113851v0ar.push(smo113837);
smo113851v0.addTickables(smo113851v0ar)
fmtsmo11385141.joinVoices([smo113851v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115471 = smo111048.getStemDirection();
smo111048.setStemDirection(dirsmo115471);
smo111049.setStemDirection(dirsmo115471);
smo111050.setStemDirection(dirsmo115471);
const smo115471 = new VF.Beam([smo111048,smo111049,smo111050]);
const dirsmo115474 = smo113834.getStemDirection();
smo113834.setStemDirection(dirsmo115474);
smo113835.setStemDirection(dirsmo115474);
const smo115474 = new VF.Beam([smo113834,smo113835]);
const dirsmo115475 = smo113836.getStemDirection();
smo113836.setStemDirection(dirsmo115475);
smo113837.setStemDirection(dirsmo115475);
const smo115475 = new VF.Beam([smo113836,smo113837]);
 
// formatting measures in staff group smo109454
fmtsmo11106441.format([smo111064v0,smo113851v0], 281);
const stavesmo111064 = new VF.Stave(1548, 789, 295);
stavesmo111064.setAttribute('id', 'stavesmo111064');
stavesmo111064.setBegBarType(VF.Barline.type.NONE);
stavesmo111064.setContext(context);
stavesmo111064.draw();
smo111064v0.draw(context, stavesmo111064);
smo115471.setContext(context);
smo115471.draw();
const stavesmo113851 = new VF.Stave(1548, 930, 295);
stavesmo113851.setAttribute('id', 'stavesmo113851');
stavesmo113851.setBegBarType(VF.Barline.type.NONE);
stavesmo113851.setContext(context);
stavesmo113851.draw();
smo113851v0.draw(context, stavesmo113851);
smo115474.setContext(context);
smo115474.draw();
smo115475.setContext(context);
smo115475.draw();
const rightsmo109454stavesmo1110641 = new VF.StaveConnector(stavesmo111064, stavesmo113851).setType(0);
rightsmo109454stavesmo1110641.setContext(context).draw();
const fmtsmo11108542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo111085v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111085v0ar = [];
const smo111065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo111065.setAttribute('id', 'smo111065');
smo111085v0ar.push(smo111065);
const smo111067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111067.setAttribute('id', 'smo111067');
smo111085v0ar.push(smo111067);
const smo111068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo111068.setAttribute('id', 'smo111068');
smo111085v0ar.push(smo111068);
const smo111069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111069.setAttribute('id', 'smo111069');
smo111085v0ar.push(smo111069);
const smo111070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo111070.setAttribute('id', 'smo111070');
smo111085v0ar.push(smo111070);
const smo111071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111071.setAttribute('id', 'smo111071');
smo111085v0ar.push(smo111071);
smo111085v0.addTickables(smo111085v0ar)
fmtsmo11108542.joinVoices([smo111085v0]);
const fmtsmo11386942 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo113869v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113869v0ar = [];
const smo113852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113852.setAttribute('id', 'smo113852');
smo113869v0ar.push(smo113852);
const smo113853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113853.setAttribute('id', 'smo113853');
smo113869v0ar.push(smo113853);
const smo113854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113854.setAttribute('id', 'smo113854');
smo113869v0ar.push(smo113854);
const smo113855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo113855.setAttribute('id', 'smo113855');
const smo1138551acc = new VF.Accidental('b');
smo113855.addModifier(smo1138551acc, 1);
smo113869v0ar.push(smo113855);
smo113869v0.addTickables(smo113869v0ar)
fmtsmo11386942.joinVoices([smo113869v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115486 = smo111065.getStemDirection();
smo111065.setStemDirection(dirsmo115486);
smo111067.setStemDirection(dirsmo115486);
smo111068.setStemDirection(dirsmo115486);
const smo115486 = new VF.Beam([smo111065,smo111067,smo111068]);
const dirsmo115487 = smo111069.getStemDirection();
smo111069.setStemDirection(dirsmo115487);
smo111070.setStemDirection(dirsmo115487);
smo111071.setStemDirection(dirsmo115487);
const smo115487 = new VF.Beam([smo111069,smo111070,smo111071]);
const dirsmo115490 = smo113852.getStemDirection();
smo113852.setStemDirection(dirsmo115490);
smo113853.setStemDirection(dirsmo115490);
const smo115490 = new VF.Beam([smo113852,smo113853]);
const dirsmo115491 = smo113854.getStemDirection();
smo113854.setStemDirection(dirsmo115491);
smo113855.setStemDirection(dirsmo115491);
const smo115491 = new VF.Beam([smo113854,smo113855]);
 
// formatting measures in staff group smo109454
fmtsmo11108542.format([smo111085v0,smo113869v0], 237);
const stavesmo111085 = new VF.Stave(73, 1148, 295);
stavesmo111085.setAttribute('id', 'stavesmo111085');
stavesmo111085.setBegBarType(1);
stavesmo111085.addClef('treble');
stavesmo111085.setContext(context);
stavesmo111085.draw();
smo111085v0.draw(context, stavesmo111085);
smo115486.setContext(context);
smo115486.draw();
smo115487.setContext(context);
smo115487.draw();
const stavesmo113869 = new VF.Stave(73, 1303, 295);
stavesmo113869.setAttribute('id', 'stavesmo113869');
stavesmo113869.setBegBarType(1);
stavesmo113869.addClef('bass');
stavesmo113869.setContext(context);
stavesmo113869.draw();
smo113869v0.draw(context, stavesmo113869);
smo115490.setContext(context);
smo115490.draw();
smo115491.setContext(context);
smo115491.draw();
const leftsmo109454stavesmo1110851 = new VF.StaveConnector(stavesmo111085, stavesmo113869).setType(3);
leftsmo109454stavesmo1110851.setContext(context).draw();
const fmtsmo11110343 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo111103v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111103v0ar = [];
const smo111086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111086.setAttribute('id', 'smo111086');
smo111103v0ar.push(smo111086);
const smo111087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111087.setAttribute('id', 'smo111087');
smo111103v0ar.push(smo111087);
const smo111088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo111088.setAttribute('id', 'smo111088');
smo111103v0ar.push(smo111088);
const smo111089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo111089.setAttribute('id', 'smo111089');
smo111103v0ar.push(smo111089);
smo111103v0.addTickables(smo111103v0ar)
fmtsmo11110343.joinVoices([smo111103v0]);
const fmtsmo11388743 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo113887v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113887v0ar = [];
const smo113870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113870.setAttribute('id', 'smo113870');
smo113887v0ar.push(smo113870);
const smo113871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo113871.setAttribute('id', 'smo113871');
smo113887v0ar.push(smo113871);
const smo113872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113872.setAttribute('id', 'smo113872');
smo113887v0ar.push(smo113872);
const smo113873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo113873.setAttribute('id', 'smo113873');
const smo1138730acc = new VF.Accidental('b');
smo113873.addModifier(smo1138730acc, 0);
const smo1138731acc = new VF.Accidental('b');
smo113873.addModifier(smo1138731acc, 1);
smo113887v0ar.push(smo113873);
smo113887v0.addTickables(smo113887v0ar)
fmtsmo11388743.joinVoices([smo113887v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115494 = smo111087.getStemDirection();
smo111087.setStemDirection(dirsmo115494);
smo111088.setStemDirection(dirsmo115494);
smo111089.setStemDirection(dirsmo115494);
const smo115494 = new VF.Beam([smo111087,smo111088,smo111089]);
const dirsmo115497 = smo113870.getStemDirection();
smo113870.setStemDirection(dirsmo115497);
smo113871.setStemDirection(dirsmo115497);
const smo115497 = new VF.Beam([smo113870,smo113871]);
const dirsmo115498 = smo113872.getStemDirection();
smo113872.setStemDirection(dirsmo115498);
smo113873.setStemDirection(dirsmo115498);
const smo115498 = new VF.Beam([smo113872,smo113873]);
 
// formatting measures in staff group smo109454
fmtsmo11110343.format([smo111103v0,smo113887v0], 281);
const stavesmo111103 = new VF.Stave(368, 1148, 295);
stavesmo111103.setAttribute('id', 'stavesmo111103');
stavesmo111103.setBegBarType(VF.Barline.type.NONE);
stavesmo111103.setContext(context);
stavesmo111103.draw();
smo111103v0.draw(context, stavesmo111103);
smo115494.setContext(context);
smo115494.draw();
const stavesmo113887 = new VF.Stave(368, 1303, 295);
stavesmo113887.setAttribute('id', 'stavesmo113887');
stavesmo113887.setBegBarType(VF.Barline.type.NONE);
stavesmo113887.setContext(context);
stavesmo113887.draw();
smo113887v0.draw(context, stavesmo113887);
smo115497.setContext(context);
smo115497.draw();
smo115498.setContext(context);
smo115498.draw();
const fmtsmo11112644 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo111126v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111126v0ar = [];
const smo111104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo111104.setAttribute('id', 'smo111104');
const smo1111040acc = new VF.Accidental('b');
smo111104.addModifier(smo1111040acc, 0);
const smo1111042acc = new VF.Accidental('b');
smo111104.addModifier(smo1111042acc, 2);
smo111126v0ar.push(smo111104);
const smo111106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo111106.setAttribute('id', 'smo111106');
smo111126v0ar.push(smo111106);
const smo111107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111107.setAttribute('id', 'smo111107');
smo111126v0ar.push(smo111107);
const smo111108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111108.setAttribute('id', 'smo111108');
smo111126v0ar.push(smo111108);
const smo111109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111109.setAttribute('id', 'smo111109');
smo111126v0ar.push(smo111109);
const smo111110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo111110.setAttribute('id', 'smo111110');
smo111126v0ar.push(smo111110);
const smo111111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111111.setAttribute('id', 'smo111111');
smo111126v0ar.push(smo111111);
const smo111112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo111112.setAttribute('id', 'smo111112');
smo111126v0ar.push(smo111112);
smo111126v0.addTickables(smo111126v0ar)
fmtsmo11112644.joinVoices([smo111126v0]);
const fmtsmo11390544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo113905v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113905v0ar = [];
const smo113888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo113888.setAttribute('id', 'smo113888');
smo113905v0ar.push(smo113888);
const smo113889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo113889.setAttribute('id', 'smo113889');
const smo1138891acc = new VF.Accidental('b');
smo113889.addModifier(smo1138891acc, 1);
smo113905v0ar.push(smo113889);
const smo113890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo113890.setAttribute('id', 'smo113890');
smo113905v0ar.push(smo113890);
const smo113891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo113891.setAttribute('id', 'smo113891');
smo113905v0ar.push(smo113891);
smo113905v0.addTickables(smo113905v0ar)
fmtsmo11390544.joinVoices([smo113905v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115501 = smo111104.getStemDirection();
smo111104.setStemDirection(dirsmo115501);
smo111106.setStemDirection(dirsmo115501);
smo111107.setStemDirection(dirsmo115501);
smo111108.setStemDirection(dirsmo115501);
const smo115501 = new VF.Beam([smo111104,smo111106,smo111107,smo111108]);
const dirsmo115502 = smo111109.getStemDirection();
smo111109.setStemDirection(dirsmo115502);
smo111110.setStemDirection(dirsmo115502);
smo111111.setStemDirection(dirsmo115502);
smo111112.setStemDirection(dirsmo115502);
const smo115502 = new VF.Beam([smo111109,smo111110,smo111111,smo111112]);
const dirsmo115505 = smo113888.getStemDirection();
smo113888.setStemDirection(dirsmo115505);
smo113889.setStemDirection(dirsmo115505);
const smo115505 = new VF.Beam([smo113888,smo113889]);
const dirsmo115506 = smo113890.getStemDirection();
smo113890.setStemDirection(dirsmo115506);
smo113891.setStemDirection(dirsmo115506);
const smo115506 = new VF.Beam([smo113890,smo113891]);
 
// formatting measures in staff group smo109454
fmtsmo11112644.format([smo111126v0,smo113905v0], 281);
const stavesmo111126 = new VF.Stave(663, 1148, 295);
stavesmo111126.setAttribute('id', 'stavesmo111126');
stavesmo111126.setBegBarType(VF.Barline.type.NONE);
stavesmo111126.setContext(context);
stavesmo111126.draw();
smo111126v0.draw(context, stavesmo111126);
smo115501.setContext(context);
smo115501.draw();
smo115502.setContext(context);
smo115502.draw();
const stavesmo113905 = new VF.Stave(663, 1303, 295);
stavesmo113905.setAttribute('id', 'stavesmo113905');
stavesmo113905.setBegBarType(VF.Barline.type.NONE);
stavesmo113905.setContext(context);
stavesmo113905.draw();
smo113905v0.draw(context, stavesmo113905);
smo115505.setContext(context);
smo115505.draw();
smo115506.setContext(context);
smo115506.draw();
const fmtsmo11114445 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo111144v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111144v0ar = [];
const smo111127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111127.setAttribute('id', 'smo111127');
smo111144v0ar.push(smo111127);
const smo111128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111128.setAttribute('id', 'smo111128');
smo111144v0ar.push(smo111128);
const smo111129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo111129.setAttribute('id', 'smo111129');
smo111144v0ar.push(smo111129);
const smo111130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo111130.setAttribute('id', 'smo111130');
const smo1111300acc = new VF.Accidental('b');
smo111130.addModifier(smo1111300acc, 0);
smo111144v0ar.push(smo111130);
smo111144v0.addTickables(smo111144v0ar)
fmtsmo11114445.joinVoices([smo111144v0]);
const fmtsmo11392345 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo113923v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113923v0ar = [];
const smo113906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113906.setAttribute('id', 'smo113906');
smo113923v0ar.push(smo113906);
const smo113907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113907.setAttribute('id', 'smo113907');
smo113923v0ar.push(smo113907);
const smo113908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo113908.setAttribute('id', 'smo113908');
smo113923v0ar.push(smo113908);
const smo113909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo113909.setAttribute('id', 'smo113909');
smo113923v0ar.push(smo113909);
smo113923v0.addTickables(smo113923v0ar)
fmtsmo11392345.joinVoices([smo113923v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115509 = smo111128.getStemDirection();
smo111128.setStemDirection(dirsmo115509);
smo111129.setStemDirection(dirsmo115509);
smo111130.setStemDirection(dirsmo115509);
const smo115509 = new VF.Beam([smo111128,smo111129,smo111130]);
const dirsmo115512 = smo113906.getStemDirection();
smo113906.setStemDirection(dirsmo115512);
smo113907.setStemDirection(dirsmo115512);
const smo115512 = new VF.Beam([smo113906,smo113907]);
const dirsmo115513 = smo113908.getStemDirection();
smo113908.setStemDirection(dirsmo115513);
smo113909.setStemDirection(dirsmo115513);
const smo115513 = new VF.Beam([smo113908,smo113909]);
 
// formatting measures in staff group smo109454
fmtsmo11114445.format([smo111144v0,smo113923v0], 281);
const stavesmo111144 = new VF.Stave(958, 1148, 295);
stavesmo111144.setAttribute('id', 'stavesmo111144');
stavesmo111144.setBegBarType(VF.Barline.type.NONE);
stavesmo111144.setContext(context);
stavesmo111144.draw();
smo111144v0.draw(context, stavesmo111144);
smo115509.setContext(context);
smo115509.draw();
const stavesmo113923 = new VF.Stave(958, 1303, 295);
stavesmo113923.setAttribute('id', 'stavesmo113923');
stavesmo113923.setBegBarType(VF.Barline.type.NONE);
stavesmo113923.setContext(context);
stavesmo113923.draw();
smo113923v0.draw(context, stavesmo113923);
smo115512.setContext(context);
smo115512.draw();
smo115513.setContext(context);
smo115513.draw();
const fmtsmo11116546 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo111165v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111165v0ar = [];
const smo111145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo111145.setAttribute('id', 'smo111145');
smo111165v0ar.push(smo111145);
const smo111147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111147.setAttribute('id', 'smo111147');
smo111165v0ar.push(smo111147);
const smo111148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo111148.setAttribute('id', 'smo111148');
smo111165v0ar.push(smo111148);
const smo111149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111149.setAttribute('id', 'smo111149');
smo111165v0ar.push(smo111149);
const smo111150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo111150.setAttribute('id', 'smo111150');
smo111165v0ar.push(smo111150);
const smo111151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111151.setAttribute('id', 'smo111151');
smo111165v0ar.push(smo111151);
smo111165v0.addTickables(smo111165v0ar)
fmtsmo11116546.joinVoices([smo111165v0]);
const fmtsmo11394146 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo113941v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113941v0ar = [];
const smo113924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113924.setAttribute('id', 'smo113924');
smo113941v0ar.push(smo113924);
const smo113925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113925.setAttribute('id', 'smo113925');
smo113941v0ar.push(smo113925);
const smo113926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113926.setAttribute('id', 'smo113926');
smo113941v0ar.push(smo113926);
const smo113927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo113927.setAttribute('id', 'smo113927');
const smo1139271acc = new VF.Accidental('b');
smo113927.addModifier(smo1139271acc, 1);
smo113941v0ar.push(smo113927);
smo113941v0.addTickables(smo113941v0ar)
fmtsmo11394146.joinVoices([smo113941v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115516 = smo111145.getStemDirection();
smo111145.setStemDirection(dirsmo115516);
smo111147.setStemDirection(dirsmo115516);
smo111148.setStemDirection(dirsmo115516);
const smo115516 = new VF.Beam([smo111145,smo111147,smo111148]);
const dirsmo115517 = smo111149.getStemDirection();
smo111149.setStemDirection(dirsmo115517);
smo111150.setStemDirection(dirsmo115517);
smo111151.setStemDirection(dirsmo115517);
const smo115517 = new VF.Beam([smo111149,smo111150,smo111151]);
const dirsmo115520 = smo113924.getStemDirection();
smo113924.setStemDirection(dirsmo115520);
smo113925.setStemDirection(dirsmo115520);
const smo115520 = new VF.Beam([smo113924,smo113925]);
const dirsmo115521 = smo113926.getStemDirection();
smo113926.setStemDirection(dirsmo115521);
smo113927.setStemDirection(dirsmo115521);
const smo115521 = new VF.Beam([smo113926,smo113927]);
 
// formatting measures in staff group smo109454
fmtsmo11116546.format([smo111165v0,smo113941v0], 281);
const stavesmo111165 = new VF.Stave(1253, 1148, 295);
stavesmo111165.setAttribute('id', 'stavesmo111165');
stavesmo111165.setBegBarType(VF.Barline.type.NONE);
stavesmo111165.setContext(context);
stavesmo111165.draw();
smo111165v0.draw(context, stavesmo111165);
smo115516.setContext(context);
smo115516.draw();
smo115517.setContext(context);
smo115517.draw();
const stavesmo113941 = new VF.Stave(1253, 1303, 295);
stavesmo113941.setAttribute('id', 'stavesmo113941');
stavesmo113941.setBegBarType(VF.Barline.type.NONE);
stavesmo113941.setContext(context);
stavesmo113941.draw();
smo113941v0.draw(context, stavesmo113941);
smo115520.setContext(context);
smo115520.draw();
smo115521.setContext(context);
smo115521.draw();
const fmtsmo11118447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo111184v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111184v0ar = [];
const smo111166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111166.setAttribute('id', 'smo111166');
smo111184v0ar.push(smo111166);
const smo111167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111167.setAttribute('id', 'smo111167');
smo111184v0ar.push(smo111167);
const smo111168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111168.setAttribute('id', 'smo111168');
smo111184v0ar.push(smo111168);
const smo111169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111169.setAttribute('id', 'smo111169');
smo111184v0ar.push(smo111169);
const smo111170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo111170.setAttribute('id', 'smo111170');
const smo1111700acc = new VF.Accidental('b');
smo111170.addModifier(smo1111700acc, 0);
const smo1111701acc = new VF.Accidental('b');
smo111170.addModifier(smo1111701acc, 1);
const smo1111702acc = new VF.Accidental('b');
smo111170.addModifier(smo1111702acc, 2);
smo111184v0ar.push(smo111170);
smo111184v0.addTickables(smo111184v0ar)
fmtsmo11118447.joinVoices([smo111184v0]);
const fmtsmo11395947 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo113959v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113959v0ar = [];
const smo113942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113942.setAttribute('id', 'smo113942');
smo113959v0ar.push(smo113942);
const smo113943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo113943.setAttribute('id', 'smo113943');
smo113959v0ar.push(smo113943);
const smo113944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113944.setAttribute('id', 'smo113944');
smo113959v0ar.push(smo113944);
const smo113945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo113945.setAttribute('id', 'smo113945');
smo113959v0ar.push(smo113945);
smo113959v0.addTickables(smo113959v0ar)
fmtsmo11395947.joinVoices([smo113959v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115524 = smo111167.getStemDirection();
smo111167.setStemDirection(dirsmo115524);
smo111168.setStemDirection(dirsmo115524);
smo111169.setStemDirection(dirsmo115524);
smo111170.setStemDirection(dirsmo115524);
const smo115524 = new VF.Beam([smo111167,smo111168,smo111169,smo111170]);
const dirsmo115527 = smo113942.getStemDirection();
smo113942.setStemDirection(dirsmo115527);
smo113943.setStemDirection(dirsmo115527);
const smo115527 = new VF.Beam([smo113942,smo113943]);
const dirsmo115528 = smo113944.getStemDirection();
smo113944.setStemDirection(dirsmo115528);
smo113945.setStemDirection(dirsmo115528);
const smo115528 = new VF.Beam([smo113944,smo113945]);
 
// formatting measures in staff group smo109454
fmtsmo11118447.format([smo111184v0,smo113959v0], 281);
const stavesmo111184 = new VF.Stave(1548, 1148, 295);
stavesmo111184.setAttribute('id', 'stavesmo111184');
stavesmo111184.setBegBarType(VF.Barline.type.NONE);
stavesmo111184.setContext(context);
stavesmo111184.draw();
smo111184v0.draw(context, stavesmo111184);
smo115524.setContext(context);
smo115524.draw();
const stavesmo113959 = new VF.Stave(1548, 1303, 295);
stavesmo113959.setAttribute('id', 'stavesmo113959');
stavesmo113959.setBegBarType(VF.Barline.type.NONE);
stavesmo113959.setContext(context);
stavesmo113959.draw();
smo113959v0.draw(context, stavesmo113959);
smo115527.setContext(context);
smo115527.draw();
smo115528.setContext(context);
smo115528.draw();
const rightsmo109454stavesmo1111841 = new VF.StaveConnector(stavesmo111184, stavesmo113959).setType(0);
rightsmo109454stavesmo1111841.setContext(context).draw();
const fmtsmo11120648 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo111206v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111206v0ar = [];
const smo111185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111185.setAttribute('id', 'smo111185');
smo111206v0ar.push(smo111185);
const smo111187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111187.setAttribute('id', 'smo111187');
smo111206v0ar.push(smo111187);
const smo111188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111188.setAttribute('id', 'smo111188');
smo111206v0ar.push(smo111188);
const smo111189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111189.setAttribute('id', 'smo111189');
smo111206v0ar.push(smo111189);
const smo111190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111190.setAttribute('id', 'smo111190');
smo111206v0ar.push(smo111190);
const smo111191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo111191.setAttribute('id', 'smo111191');
smo111206v0ar.push(smo111191);
const smo111192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111192.setAttribute('id', 'smo111192');
smo111206v0ar.push(smo111192);
smo111206v0.addTickables(smo111206v0ar)
fmtsmo11120648.joinVoices([smo111206v0]);
const fmtsmo11397748 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo113977v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113977v0ar = [];
const smo113960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113960.setAttribute('id', 'smo113960');
smo113977v0ar.push(smo113960);
const smo113961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113961.setAttribute('id', 'smo113961');
smo113977v0ar.push(smo113961);
const smo113962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113962.setAttribute('id', 'smo113962');
smo113977v0ar.push(smo113962);
const smo113963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo113963.setAttribute('id', 'smo113963');
smo113977v0ar.push(smo113963);
smo113977v0.addTickables(smo113977v0ar)
fmtsmo11397748.joinVoices([smo113977v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115539 = smo111185.getStemDirection();
smo111185.setStemDirection(dirsmo115539);
smo111187.setStemDirection(dirsmo115539);
smo111188.setStemDirection(dirsmo115539);
smo111189.setStemDirection(dirsmo115539);
const smo115539 = new VF.Beam([smo111185,smo111187,smo111188,smo111189]);
const dirsmo115540 = smo111190.getStemDirection();
smo111190.setStemDirection(dirsmo115540);
smo111191.setStemDirection(dirsmo115540);
smo111192.setStemDirection(dirsmo115540);
const smo115540 = new VF.Beam([smo111190,smo111191,smo111192]);
const dirsmo115543 = smo113960.getStemDirection();
smo113960.setStemDirection(dirsmo115543);
smo113961.setStemDirection(dirsmo115543);
const smo115543 = new VF.Beam([smo113960,smo113961]);
const dirsmo115544 = smo113962.getStemDirection();
smo113962.setStemDirection(dirsmo115544);
smo113963.setStemDirection(dirsmo115544);
const smo115544 = new VF.Beam([smo113962,smo113963]);
 
// formatting measures in staff group smo109454
fmtsmo11120648.format([smo111206v0,smo113977v0], 237);
const stavesmo111206 = new VF.Stave(73, 1501, 295);
stavesmo111206.setAttribute('id', 'stavesmo111206');
stavesmo111206.setBegBarType(1);
stavesmo111206.addClef('treble');
stavesmo111206.setContext(context);
stavesmo111206.draw();
smo111206v0.draw(context, stavesmo111206);
smo115539.setContext(context);
smo115539.draw();
smo115540.setContext(context);
smo115540.draw();
const stavesmo113977 = new VF.Stave(73, 1657, 295);
stavesmo113977.setAttribute('id', 'stavesmo113977');
stavesmo113977.setBegBarType(1);
stavesmo113977.addClef('bass');
stavesmo113977.setContext(context);
stavesmo113977.draw();
smo113977v0.draw(context, stavesmo113977);
smo115543.setContext(context);
smo115543.draw();
smo115544.setContext(context);
smo115544.draw();
const leftsmo109454stavesmo1112061 = new VF.StaveConnector(stavesmo111206, stavesmo113977).setType(3);
leftsmo109454stavesmo1112061.setContext(context).draw();
const fmtsmo11122449 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo111224v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111224v0ar = [];
const smo111207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111207.setAttribute('id', 'smo111207');
smo111224v0ar.push(smo111207);
const smo111208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111208.setAttribute('id', 'smo111208');
smo111224v0ar.push(smo111208);
const smo111209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111209.setAttribute('id', 'smo111209');
smo111224v0ar.push(smo111209);
const smo111210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo111210.setAttribute('id', 'smo111210');
smo111224v0ar.push(smo111210);
smo111224v0.addTickables(smo111224v0ar)
fmtsmo11122449.joinVoices([smo111224v0]);
const fmtsmo11399549 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo113995v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113995v0ar = [];
const smo113978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113978.setAttribute('id', 'smo113978');
smo113995v0ar.push(smo113978);
const smo113979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113979.setAttribute('id', 'smo113979');
smo113995v0ar.push(smo113979);
const smo113980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113980.setAttribute('id', 'smo113980');
smo113995v0ar.push(smo113980);
const smo113981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo113981.setAttribute('id', 'smo113981');
smo113995v0ar.push(smo113981);
smo113995v0.addTickables(smo113995v0ar)
fmtsmo11399549.joinVoices([smo113995v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115547 = smo111208.getStemDirection();
smo111208.setStemDirection(dirsmo115547);
smo111209.setStemDirection(dirsmo115547);
smo111210.setStemDirection(dirsmo115547);
const smo115547 = new VF.Beam([smo111208,smo111209,smo111210]);
const dirsmo115550 = smo113978.getStemDirection();
smo113978.setStemDirection(dirsmo115550);
smo113979.setStemDirection(dirsmo115550);
const smo115550 = new VF.Beam([smo113978,smo113979]);
 
// formatting measures in staff group smo109454
fmtsmo11122449.format([smo111224v0,smo113995v0], 281);
const stavesmo111224 = new VF.Stave(368, 1501, 295);
stavesmo111224.setAttribute('id', 'stavesmo111224');
stavesmo111224.setBegBarType(VF.Barline.type.NONE);
stavesmo111224.setContext(context);
stavesmo111224.draw();
smo111224v0.draw(context, stavesmo111224);
smo115547.setContext(context);
smo115547.draw();
const stavesmo113995 = new VF.Stave(368, 1657, 295);
stavesmo113995.setAttribute('id', 'stavesmo113995');
stavesmo113995.setBegBarType(VF.Barline.type.NONE);
stavesmo113995.setContext(context);
stavesmo113995.draw();
smo113995v0.draw(context, stavesmo113995);
smo115550.setContext(context);
smo115550.draw();
const fmtsmo11124650 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo111246v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111246v0ar = [];
const smo111225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111225.setAttribute('id', 'smo111225');
smo111246v0ar.push(smo111225);
const smo111226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111226.setAttribute('id', 'smo111226');
smo111246v0ar.push(smo111226);
const smo111227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo111227.setAttribute('id', 'smo111227');
smo111246v0ar.push(smo111227);
const smo111228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111228.setAttribute('id', 'smo111228');
smo111246v0ar.push(smo111228);
const smo111229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111229.setAttribute('id', 'smo111229');
smo111246v0ar.push(smo111229);
const smo111230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111230.setAttribute('id', 'smo111230');
smo111246v0ar.push(smo111230);
const smo111231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo111231.setAttribute('id', 'smo111231');
smo111246v0ar.push(smo111231);
const smo111232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111232.setAttribute('id', 'smo111232');
smo111246v0ar.push(smo111232);
smo111246v0.addTickables(smo111246v0ar)
fmtsmo11124650.joinVoices([smo111246v0]);
const fmtsmo11401350 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo114013v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114013v0ar = [];
const smo113996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo113996.setAttribute('id', 'smo113996');
smo114013v0ar.push(smo113996);
const smo113997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113997.setAttribute('id', 'smo113997');
smo114013v0ar.push(smo113997);
const smo113998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo113998.setAttribute('id', 'smo113998');
const smo1139980acc = new VF.Accidental('b');
smo113998.addModifier(smo1139980acc, 0);
const smo1139981acc = new VF.Accidental('b');
smo113998.addModifier(smo1139981acc, 1);
smo114013v0ar.push(smo113998);
const smo113999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113999.setAttribute('id', 'smo113999');
smo114013v0ar.push(smo113999);
smo114013v0.addTickables(smo114013v0ar)
fmtsmo11401350.joinVoices([smo114013v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115553 = smo111225.getStemDirection();
smo111225.setStemDirection(dirsmo115553);
smo111226.setStemDirection(dirsmo115553);
smo111227.setStemDirection(dirsmo115553);
smo111228.setStemDirection(dirsmo115553);
const smo115553 = new VF.Beam([smo111225,smo111226,smo111227,smo111228]);
const dirsmo115554 = smo111229.getStemDirection();
smo111229.setStemDirection(dirsmo115554);
smo111230.setStemDirection(dirsmo115554);
smo111231.setStemDirection(dirsmo115554);
smo111232.setStemDirection(dirsmo115554);
const smo115554 = new VF.Beam([smo111229,smo111230,smo111231,smo111232]);
const dirsmo115557 = smo113996.getStemDirection();
smo113996.setStemDirection(dirsmo115557);
smo113997.setStemDirection(dirsmo115557);
const smo115557 = new VF.Beam([smo113996,smo113997]);
const dirsmo115558 = smo113998.getStemDirection();
smo113998.setStemDirection(dirsmo115558);
smo113999.setStemDirection(dirsmo115558);
const smo115558 = new VF.Beam([smo113998,smo113999]);
 
// formatting measures in staff group smo109454
fmtsmo11124650.format([smo111246v0,smo114013v0], 281);
const stavesmo111246 = new VF.Stave(663, 1501, 295);
stavesmo111246.setAttribute('id', 'stavesmo111246');
stavesmo111246.setBegBarType(VF.Barline.type.NONE);
stavesmo111246.setContext(context);
stavesmo111246.draw();
smo111246v0.draw(context, stavesmo111246);
smo115553.setContext(context);
smo115553.draw();
smo115554.setContext(context);
smo115554.draw();
const stavesmo114013 = new VF.Stave(663, 1657, 295);
stavesmo114013.setAttribute('id', 'stavesmo114013');
stavesmo114013.setBegBarType(VF.Barline.type.NONE);
stavesmo114013.setContext(context);
stavesmo114013.draw();
smo114013v0.draw(context, stavesmo114013);
smo115557.setContext(context);
smo115557.draw();
smo115558.setContext(context);
smo115558.draw();
const fmtsmo11126851 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo111268v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111268v0ar = [];
const smo111247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111247.setAttribute('id', 'smo111247');
smo111268v0ar.push(smo111247);
const smo111248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111248.setAttribute('id', 'smo111248');
smo111268v0ar.push(smo111248);
const smo111249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo111249.setAttribute('id', 'smo111249');
smo111268v0ar.push(smo111249);
const smo111250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111250.setAttribute('id', 'smo111250');
smo111268v0ar.push(smo111250);
const smo111251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo111251.setAttribute('id', 'smo111251');
smo111268v0ar.push(smo111251);
const smo111252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111252.setAttribute('id', 'smo111252');
smo111268v0ar.push(smo111252);
const smo111253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo111253.setAttribute('id', 'smo111253');
smo111268v0ar.push(smo111253);
const smo111254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111254.setAttribute('id', 'smo111254');
smo111268v0ar.push(smo111254);
smo111268v0.addTickables(smo111268v0ar)
fmtsmo11126851.joinVoices([smo111268v0]);
const fmtsmo11403151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo114031v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114031v0ar = [];
const smo114014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo114014.setAttribute('id', 'smo114014');
smo114031v0ar.push(smo114014);
const smo114015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114015.setAttribute('id', 'smo114015');
smo114031v0ar.push(smo114015);
const smo114016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo114016.setAttribute('id', 'smo114016');
const smo1140160acc = new VF.Accidental('b');
smo114016.addModifier(smo1140160acc, 0);
const smo1140161acc = new VF.Accidental('b');
smo114016.addModifier(smo1140161acc, 1);
smo114031v0ar.push(smo114016);
const smo114017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo114017.setAttribute('id', 'smo114017');
smo114031v0ar.push(smo114017);
smo114031v0.addTickables(smo114031v0ar)
fmtsmo11403151.joinVoices([smo114031v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115561 = smo111247.getStemDirection();
smo111247.setStemDirection(dirsmo115561);
smo111248.setStemDirection(dirsmo115561);
smo111249.setStemDirection(dirsmo115561);
smo111250.setStemDirection(dirsmo115561);
const smo115561 = new VF.Beam([smo111247,smo111248,smo111249,smo111250]);
const dirsmo115562 = smo111251.getStemDirection();
smo111251.setStemDirection(dirsmo115562);
smo111252.setStemDirection(dirsmo115562);
smo111253.setStemDirection(dirsmo115562);
smo111254.setStemDirection(dirsmo115562);
const smo115562 = new VF.Beam([smo111251,smo111252,smo111253,smo111254]);
const dirsmo115565 = smo114014.getStemDirection();
smo114014.setStemDirection(dirsmo115565);
smo114015.setStemDirection(dirsmo115565);
const smo115565 = new VF.Beam([smo114014,smo114015]);
const dirsmo115566 = smo114016.getStemDirection();
smo114016.setStemDirection(dirsmo115566);
smo114017.setStemDirection(dirsmo115566);
const smo115566 = new VF.Beam([smo114016,smo114017]);
 
// formatting measures in staff group smo109454
fmtsmo11126851.format([smo111268v0,smo114031v0], 281);
const stavesmo111268 = new VF.Stave(958, 1501, 295);
stavesmo111268.setAttribute('id', 'stavesmo111268');
stavesmo111268.setBegBarType(VF.Barline.type.NONE);
stavesmo111268.setContext(context);
stavesmo111268.draw();
smo111268v0.draw(context, stavesmo111268);
smo115561.setContext(context);
smo115561.draw();
smo115562.setContext(context);
smo115562.draw();
const stavesmo114031 = new VF.Stave(958, 1657, 295);
stavesmo114031.setAttribute('id', 'stavesmo114031');
stavesmo114031.setBegBarType(VF.Barline.type.NONE);
stavesmo114031.setContext(context);
stavesmo114031.draw();
smo114031v0.draw(context, stavesmo114031);
smo115565.setContext(context);
smo115565.draw();
smo115566.setContext(context);
smo115566.draw();
const fmtsmo11128952 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo111289v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111289v0ar = [];
const smo111269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111269.setAttribute('id', 'smo111269');
smo111289v0ar.push(smo111269);
const smo111270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111270.setAttribute('id', 'smo111270');
smo111289v0ar.push(smo111270);
const smo111271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111271.setAttribute('id', 'smo111271');
smo111289v0ar.push(smo111271);
const smo111272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111272.setAttribute('id', 'smo111272');
smo111289v0ar.push(smo111272);
const smo111273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo111273.setAttribute('id', 'smo111273');
smo111289v0ar.push(smo111273);
const smo111274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo111274.setAttribute('id', 'smo111274');
smo111289v0ar.push(smo111274);
const smo111275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo111275.setAttribute('id', 'smo111275');
smo111289v0ar.push(smo111275);
smo111289v0.addTickables(smo111289v0ar)
fmtsmo11128952.joinVoices([smo111289v0]);
const fmtsmo11404952 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo114049v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114049v0ar = [];
const smo114032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114032.setAttribute('id', 'smo114032');
smo114049v0ar.push(smo114032);
const smo114033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114033.setAttribute('id', 'smo114033');
smo114049v0ar.push(smo114033);
const smo114034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114034.setAttribute('id', 'smo114034');
smo114049v0ar.push(smo114034);
const smo114035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo114035.setAttribute('id', 'smo114035');
smo114049v0ar.push(smo114035);
smo114049v0.addTickables(smo114049v0ar)
fmtsmo11404952.joinVoices([smo114049v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115569 = smo111269.getStemDirection();
smo111269.setStemDirection(dirsmo115569);
smo111270.setStemDirection(dirsmo115569);
smo111271.setStemDirection(dirsmo115569);
smo111272.setStemDirection(dirsmo115569);
const smo115569 = new VF.Beam([smo111269,smo111270,smo111271,smo111272]);
const dirsmo115570 = smo111273.getStemDirection();
smo111273.setStemDirection(dirsmo115570);
smo111274.setStemDirection(dirsmo115570);
smo111275.setStemDirection(dirsmo115570);
const smo115570 = new VF.Beam([smo111273,smo111274,smo111275]);
const dirsmo115573 = smo114032.getStemDirection();
smo114032.setStemDirection(dirsmo115573);
smo114033.setStemDirection(dirsmo115573);
const smo115573 = new VF.Beam([smo114032,smo114033]);
const dirsmo115574 = smo114034.getStemDirection();
smo114034.setStemDirection(dirsmo115574);
smo114035.setStemDirection(dirsmo115574);
const smo115574 = new VF.Beam([smo114034,smo114035]);
 
// formatting measures in staff group smo109454
fmtsmo11128952.format([smo111289v0,smo114049v0], 281);
const stavesmo111289 = new VF.Stave(1253, 1501, 295);
stavesmo111289.setAttribute('id', 'stavesmo111289');
stavesmo111289.setBegBarType(VF.Barline.type.NONE);
stavesmo111289.setContext(context);
stavesmo111289.draw();
smo111289v0.draw(context, stavesmo111289);
smo115569.setContext(context);
smo115569.draw();
smo115570.setContext(context);
smo115570.draw();
const stavesmo114049 = new VF.Stave(1253, 1657, 295);
stavesmo114049.setAttribute('id', 'stavesmo114049');
stavesmo114049.setBegBarType(VF.Barline.type.NONE);
stavesmo114049.setContext(context);
stavesmo114049.draw();
smo114049v0.draw(context, stavesmo114049);
smo115573.setContext(context);
smo115573.draw();
smo115574.setContext(context);
smo115574.draw();
const fmtsmo11130653 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo111306v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111306v0ar = [];
const smo111290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111290.setAttribute('id', 'smo111290');
smo111306v0ar.push(smo111290);
const smo111291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo111291.setAttribute('id', 'smo111291');
smo111306v0ar.push(smo111291);
const smo111292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111292.setAttribute('id', 'smo111292');
smo111306v0ar.push(smo111292);
smo111306v0.addTickables(smo111306v0ar)
fmtsmo11130653.joinVoices([smo111306v0]);
const fmtsmo11406753 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo114067v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114067v0ar = [];
const smo114050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo114050.setAttribute('id', 'smo114050');
smo114067v0ar.push(smo114050);
const smo114051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114051.setAttribute('id', 'smo114051');
smo114067v0ar.push(smo114051);
const smo114052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo114052.setAttribute('id', 'smo114052');
smo114067v0ar.push(smo114052);
const smo114053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114053.setAttribute('id', 'smo114053');
smo114067v0ar.push(smo114053);
smo114067v0.addTickables(smo114067v0ar)
fmtsmo11406753.joinVoices([smo114067v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115579 = smo114050.getStemDirection();
smo114050.setStemDirection(dirsmo115579);
smo114051.setStemDirection(dirsmo115579);
const smo115579 = new VF.Beam([smo114050,smo114051]);
 
// formatting measures in staff group smo109454
fmtsmo11130653.format([smo111306v0,smo114067v0], 281);
const stavesmo111306 = new VF.Stave(1548, 1501, 295);
stavesmo111306.setAttribute('id', 'stavesmo111306');
stavesmo111306.setBegBarType(VF.Barline.type.NONE);
stavesmo111306.setContext(context);
stavesmo111306.draw();
smo111306v0.draw(context, stavesmo111306);
const stavesmo114067 = new VF.Stave(1548, 1657, 295);
stavesmo114067.setAttribute('id', 'stavesmo114067');
stavesmo114067.setBegBarType(VF.Barline.type.NONE);
stavesmo114067.setContext(context);
stavesmo114067.draw();
smo114067v0.draw(context, stavesmo114067);
smo115579.setContext(context);
smo115579.draw();
const rightsmo109454stavesmo1113061 = new VF.StaveConnector(stavesmo111306, stavesmo114067).setType(0);
rightsmo109454stavesmo1113061.setContext(context).draw();
const fmtsmo11132654 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo111326v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111326v0ar = [];
const smo111307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo111307.setAttribute('id', 'smo111307');
smo111326v0ar.push(smo111307);
const smo111309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo111309.setAttribute('id', 'smo111309');
const smo1113090acc = new VF.Accidental('b');
smo111309.addModifier(smo1113090acc, 0);
smo111326v0ar.push(smo111309);
const smo111310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo111310.setAttribute('id', 'smo111310');
const smo1113101acc = new VF.Accidental('n');
smo111310.addModifier(smo1113101acc, 1);
smo111326v0ar.push(smo111310);
const smo111311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo111311.setAttribute('id', 'smo111311');
smo111326v0ar.push(smo111311);
const smo111312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo111312.setAttribute('id', 'smo111312');
smo111326v0ar.push(smo111312);
smo111326v0.addTickables(smo111326v0ar)
fmtsmo11132654.joinVoices([smo111326v0]);
const fmtsmo11408554 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo114085v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114085v0ar = [];
const smo114068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo114068.setAttribute('id', 'smo114068');
smo114085v0ar.push(smo114068);
const smo114069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114069.setAttribute('id', 'smo114069');
smo114085v0ar.push(smo114069);
const smo114070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114070.setAttribute('id', 'smo114070');
smo114085v0ar.push(smo114070);
const smo114071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114071.setAttribute('id', 'smo114071');
smo114085v0ar.push(smo114071);
smo114085v0.addTickables(smo114085v0ar)
fmtsmo11408554.joinVoices([smo114085v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115588 = smo111307.getStemDirection();
smo111307.setStemDirection(dirsmo115588);
smo111309.setStemDirection(dirsmo115588);
smo111310.setStemDirection(dirsmo115588);
const smo115588 = new VF.Beam([smo111307,smo111309,smo111310]);
const dirsmo115589 = smo111311.getStemDirection();
smo111311.setStemDirection(dirsmo115589);
smo111312.setStemDirection(dirsmo115589);
const smo115589 = new VF.Beam([smo111311,smo111312]);
const dirsmo115591 = smo114068.getStemDirection();
smo114068.setStemDirection(dirsmo115591);
smo114069.setStemDirection(dirsmo115591);
const smo115591 = new VF.Beam([smo114068,smo114069]);
const dirsmo115592 = smo114070.getStemDirection();
smo114070.setStemDirection(dirsmo115592);
smo114071.setStemDirection(dirsmo115592);
const smo115592 = new VF.Beam([smo114070,smo114071]);
 
// formatting measures in staff group smo109454
fmtsmo11132654.format([smo111326v0,smo114085v0], 195);
const stavesmo111326 = new VF.Stave(73, 1835, 295);
stavesmo111326.setAttribute('id', 'stavesmo111326');
stavesmo111326.setBegBarType(4);
stavesmo111326.addClef('treble');
const keysmo111326 = new VF.KeySignature('Bb');
keysmo111326.cancelKey('C');
keysmo111326.addToStave(stavesmo111326);
stavesmo111326.setContext(context);
stavesmo111326.draw();
smo111326v0.draw(context, stavesmo111326);
smo115588.setContext(context);
smo115588.draw();
smo115589.setContext(context);
smo115589.draw();
const stavesmo114085 = new VF.Stave(73, 2000, 295);
stavesmo114085.setAttribute('id', 'stavesmo114085');
stavesmo114085.setBegBarType(4);
stavesmo114085.addClef('bass');
const keysmo114085 = new VF.KeySignature('Bb');
keysmo114085.cancelKey('C');
keysmo114085.addToStave(stavesmo114085);
stavesmo114085.setContext(context);
stavesmo114085.draw();
smo114085v0.draw(context, stavesmo114085);
smo115591.setContext(context);
smo115591.draw();
smo115592.setContext(context);
smo115592.draw();
const leftsmo109454stavesmo1113261 = new VF.StaveConnector(stavesmo111326, stavesmo114085).setType(3);
leftsmo109454stavesmo1113261.setContext(context).draw();
const fmtsmo11134755 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo111347v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111347v0ar = [];
const smo111327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo111327.setAttribute('id', 'smo111327');
smo111347v0ar.push(smo111327);
smo111347v0.addTickables(smo111347v0ar)
fmtsmo11134755.joinVoices([smo111347v0]);
const smo111347v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111347v1ar = [];
const smo111328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111328.setAttribute('id', 'smo111328');
smo111328.setStyle({ fillStyle: "#115511" });
smo111347v1ar.push(smo111328);
const smo111329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo111329.setAttribute('id', 'smo111329');
smo111329.setStyle({ fillStyle: "#115511" });
smo111347v1ar.push(smo111329);
const smo111330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111330.setAttribute('id', 'smo111330');
smo111330.setStyle({ fillStyle: "#115511" });
smo111347v1ar.push(smo111330);
const smo111331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo111331.setAttribute('id', 'smo111331');
smo111331.setStyle({ fillStyle: "#115511" });
smo111347v1ar.push(smo111331);
const smo111332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111332.setAttribute('id', 'smo111332');
smo111332.setStyle({ fillStyle: "#115511" });
smo111347v1ar.push(smo111332);
const smo111333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111333.setAttribute('id', 'smo111333');
smo111333.setStyle({ fillStyle: "#115511" });
smo111347v1ar.push(smo111333);
smo111347v1.addTickables(smo111347v1ar)
fmtsmo11134755.joinVoices([smo111347v1]);
const fmtsmo11410355 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo114103v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114103v0ar = [];
const smo114086 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo114086.setAttribute('id', 'smo114086');
smo114103v0ar.push(smo114086);
const smo114087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo114087.setAttribute('id', 'smo114087');
smo114103v0ar.push(smo114087);
const smo114088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo114088.setAttribute('id', 'smo114088');
smo114103v0ar.push(smo114088);
const smo114089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo114089.setAttribute('id', 'smo114089');
smo114103v0ar.push(smo114089);
smo114103v0.addTickables(smo114103v0ar)
fmtsmo11410355.joinVoices([smo114103v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115594 = smo111329.getStemDirection();
smo111329.setStemDirection(dirsmo115594);
smo111330.setStemDirection(dirsmo115594);
const smo115594 = new VF.Beam([smo111329,smo111330]);
const dirsmo115595 = smo111331.getStemDirection();
smo111331.setStemDirection(dirsmo115595);
smo111332.setStemDirection(dirsmo115595);
smo111333.setStemDirection(dirsmo115595);
const smo115595 = new VF.Beam([smo111331,smo111332,smo111333]);
const dirsmo115598 = smo114086.getStemDirection();
smo114086.setStemDirection(dirsmo115598);
smo114087.setStemDirection(dirsmo115598);
const smo115598 = new VF.Beam([smo114086,smo114087]);
const dirsmo115599 = smo114088.getStemDirection();
smo114088.setStemDirection(dirsmo115599);
smo114089.setStemDirection(dirsmo115599);
const smo115599 = new VF.Beam([smo114088,smo114089]);
 
// formatting measures in staff group smo109454
fmtsmo11134755.format([smo111347v0,smo111347v1,smo114103v0], 281);
const stavesmo111347 = new VF.Stave(368, 1835, 295);
stavesmo111347.setAttribute('id', 'stavesmo111347');
stavesmo111347.setBegBarType(VF.Barline.type.NONE);
stavesmo111347.setContext(context);
stavesmo111347.draw();
smo111347v0.draw(context, stavesmo111347);
smo111347v1.draw(context, stavesmo111347);
smo115594.setContext(context);
smo115594.draw();
smo115595.setContext(context);
smo115595.draw();
const stavesmo114103 = new VF.Stave(368, 2000, 295);
stavesmo114103.setAttribute('id', 'stavesmo114103');
stavesmo114103.setBegBarType(VF.Barline.type.NONE);
stavesmo114103.setContext(context);
stavesmo114103.draw();
smo114103v0.draw(context, stavesmo114103);
smo115598.setContext(context);
smo115598.draw();
smo115599.setContext(context);
smo115599.draw();
const fmtsmo11136656 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo111366v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111366v0ar = [];
const smo111348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo111348.setAttribute('id', 'smo111348');
smo111366v0ar.push(smo111348);
const smo111349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111349.setAttribute('id', 'smo111349');
const smo1113490acc = new VF.Accidental('n');
smo111349.addModifier(smo1113490acc, 0);
smo111366v0ar.push(smo111349);
const smo111350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo111350.setAttribute('id', 'smo111350');
smo111366v0ar.push(smo111350);
const smo111351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo111351.setAttribute('id', 'smo111351');
smo111366v0ar.push(smo111351);
const smo111352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo111352.setAttribute('id', 'smo111352');
smo111366v0ar.push(smo111352);
smo111366v0.addTickables(smo111366v0ar)
fmtsmo11136656.joinVoices([smo111366v0]);
const fmtsmo11412156 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo114121v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114121v0ar = [];
const smo114104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo114104.setAttribute('id', 'smo114104');
smo114121v0ar.push(smo114104);
const smo114105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo114105.setAttribute('id', 'smo114105');
smo114121v0ar.push(smo114105);
const smo114106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo114106.setAttribute('id', 'smo114106');
smo114121v0ar.push(smo114106);
const smo114107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo114107.setAttribute('id', 'smo114107');
smo114121v0ar.push(smo114107);
smo114121v0.addTickables(smo114121v0ar)
fmtsmo11412156.joinVoices([smo114121v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115602 = smo111348.getStemDirection();
smo111348.setStemDirection(dirsmo115602);
smo111349.setStemDirection(dirsmo115602);
smo111350.setStemDirection(dirsmo115602);
const smo115602 = new VF.Beam([smo111348,smo111349,smo111350]);
const dirsmo115603 = smo111351.getStemDirection();
smo111351.setStemDirection(dirsmo115603);
smo111352.setStemDirection(dirsmo115603);
const smo115603 = new VF.Beam([smo111351,smo111352]);
const dirsmo115606 = smo114104.getStemDirection();
smo114104.setStemDirection(dirsmo115606);
smo114105.setStemDirection(dirsmo115606);
const smo115606 = new VF.Beam([smo114104,smo114105]);
const dirsmo115607 = smo114106.getStemDirection();
smo114106.setStemDirection(dirsmo115607);
smo114107.setStemDirection(dirsmo115607);
const smo115607 = new VF.Beam([smo114106,smo114107]);
 
// formatting measures in staff group smo109454
fmtsmo11136656.format([smo111366v0,smo114121v0], 281);
const stavesmo111366 = new VF.Stave(663, 1835, 295);
stavesmo111366.setAttribute('id', 'stavesmo111366');
stavesmo111366.setBegBarType(VF.Barline.type.NONE);
stavesmo111366.setContext(context);
stavesmo111366.draw();
smo111366v0.draw(context, stavesmo111366);
smo115602.setContext(context);
smo115602.draw();
smo115603.setContext(context);
smo115603.draw();
const stavesmo114121 = new VF.Stave(663, 2000, 295);
stavesmo114121.setAttribute('id', 'stavesmo114121');
stavesmo114121.setBegBarType(VF.Barline.type.NONE);
stavesmo114121.setContext(context);
stavesmo114121.draw();
smo114121v0.draw(context, stavesmo114121);
smo115606.setContext(context);
smo115606.draw();
smo115607.setContext(context);
smo115607.draw();
const fmtsmo11138957 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo111389v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111389v0ar = [];
const smo111367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo111367.setAttribute('id', 'smo111367');
smo111389v0ar.push(smo111367);
const smo111368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo111368.setAttribute('id', 'smo111368');
smo111368.addModifier(new VF.Dot(), 0);
smo111368.addModifier(new VF.Dot(), 1);
smo111368.addModifier(new VF.Dot(), 2);
smo111389v0ar.push(smo111368);
const smo111369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111369.setAttribute('id', 'smo111369');
smo111389v0ar.push(smo111369);
smo111389v0.addTickables(smo111389v0ar)
fmtsmo11138957.joinVoices([smo111389v0]);
const smo111389v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111389v1ar = [];
const smo111370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111370.setAttribute('id', 'smo111370');
smo111370.setStyle({ fillStyle: "#115511" });
smo111389v1ar.push(smo111370);
const smo111371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111371.setAttribute('id', 'smo111371');
smo111371.setStyle({ fillStyle: "#115511" });
smo111389v1ar.push(smo111371);
const smo111372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo111372.setAttribute('id', 'smo111372');
smo111372.setStyle({ fillStyle: "#115511" });
const smo1113720acc = new VF.Accidental('b');
smo111372.addModifier(smo1113720acc, 0);
smo111389v1ar.push(smo111372);
const smo111373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111373.setAttribute('id', 'smo111373');
smo111373.setStyle({ fillStyle: "#115511" });
const smo1113730acc = new VF.Accidental('n');
smo111373.addModifier(smo1113730acc, 0);
smo111389v1ar.push(smo111373);
const smo111374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111374.setAttribute('id', 'smo111374');
smo111374.setStyle({ fillStyle: "#115511" });
smo111389v1ar.push(smo111374);
const smo111375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo111375.setAttribute('id', 'smo111375');
smo111375.setStyle({ fillStyle: "#115511" });
smo111389v1ar.push(smo111375);
smo111389v1.addTickables(smo111389v1ar)
fmtsmo11138957.joinVoices([smo111389v1]);
const fmtsmo11413957 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo114139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114139v0ar = [];
const smo114122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114122.setAttribute('id', 'smo114122');
smo114139v0ar.push(smo114122);
const smo114123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo114123.setAttribute('id', 'smo114123');
smo114139v0ar.push(smo114123);
const smo114124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo114124.setAttribute('id', 'smo114124');
smo114139v0ar.push(smo114124);
const smo114125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo114125.setAttribute('id', 'smo114125');
smo114139v0ar.push(smo114125);
smo114139v0.addTickables(smo114139v0ar)
fmtsmo11413957.joinVoices([smo114139v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115610 = smo111368.getStemDirection();
smo111368.setStemDirection(dirsmo115610);
smo111369.setStemDirection(dirsmo115610);
const smo115610 = new VF.Beam([smo111368,smo111369]);
const dirsmo115611 = smo111371.getStemDirection();
smo111371.setStemDirection(dirsmo115611);
smo111372.setStemDirection(dirsmo115611);
const smo115611 = new VF.Beam([smo111371,smo111372]);
const dirsmo115612 = smo111373.getStemDirection();
smo111373.setStemDirection(dirsmo115612);
smo111374.setStemDirection(dirsmo115612);
smo111375.setStemDirection(dirsmo115612);
const smo115612 = new VF.Beam([smo111373,smo111374,smo111375]);
const dirsmo115615 = smo114122.getStemDirection();
smo114122.setStemDirection(dirsmo115615);
smo114123.setStemDirection(dirsmo115615);
const smo115615 = new VF.Beam([smo114122,smo114123]);
const dirsmo115616 = smo114124.getStemDirection();
smo114124.setStemDirection(dirsmo115616);
smo114125.setStemDirection(dirsmo115616);
const smo115616 = new VF.Beam([smo114124,smo114125]);
 
// formatting measures in staff group smo109454
fmtsmo11138957.format([smo111389v0,smo111389v1,smo114139v0], 281);
const stavesmo111389 = new VF.Stave(958, 1835, 295);
stavesmo111389.setAttribute('id', 'stavesmo111389');
stavesmo111389.setBegBarType(VF.Barline.type.NONE);
stavesmo111389.setContext(context);
stavesmo111389.draw();
smo111389v0.draw(context, stavesmo111389);
smo111389v1.draw(context, stavesmo111389);
smo115610.setContext(context);
smo115610.draw();
smo115611.setContext(context);
smo115611.draw();
smo115612.setContext(context);
smo115612.draw();
const stavesmo114139 = new VF.Stave(958, 2000, 295);
stavesmo114139.setAttribute('id', 'stavesmo114139');
stavesmo114139.setBegBarType(VF.Barline.type.NONE);
stavesmo114139.setContext(context);
stavesmo114139.draw();
smo114139v0.draw(context, stavesmo114139);
smo115615.setContext(context);
smo115615.draw();
smo115616.setContext(context);
smo115616.draw();
const fmtsmo11140958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo111409v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111409v0ar = [];
const smo111390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111390.setAttribute('id', 'smo111390');
smo111409v0ar.push(smo111390);
const smo111391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111391.setAttribute('id', 'smo111391');
smo111409v0ar.push(smo111391);
const smo111392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111392.setAttribute('id', 'smo111392');
smo111409v0ar.push(smo111392);
const smo111393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111393.setAttribute('id', 'smo111393');
smo111409v0ar.push(smo111393);
const smo111394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111394.setAttribute('id', 'smo111394');
smo111409v0ar.push(smo111394);
const smo111395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111395.setAttribute('id', 'smo111395');
smo111409v0ar.push(smo111395);
smo111409v0.addTickables(smo111409v0ar)
fmtsmo11140958.joinVoices([smo111409v0]);
const fmtsmo11415758 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo114157v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114157v0ar = [];
const smo114140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo114140.setAttribute('id', 'smo114140');
smo114157v0ar.push(smo114140);
const smo114141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo114141.setAttribute('id', 'smo114141');
smo114157v0ar.push(smo114141);
const smo114142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114142.setAttribute('id', 'smo114142');
smo114157v0ar.push(smo114142);
const smo114143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo114143.setAttribute('id', 'smo114143');
const smo1141430acc = new VF.Accidental('b');
smo114143.addModifier(smo1141430acc, 0);
const smo1141431acc = new VF.Accidental('b');
smo114143.addModifier(smo1141431acc, 1);
smo114157v0ar.push(smo114143);
smo114157v0.addTickables(smo114157v0ar)
fmtsmo11415758.joinVoices([smo114157v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115619 = smo111390.getStemDirection();
smo111390.setStemDirection(dirsmo115619);
smo111391.setStemDirection(dirsmo115619);
smo111392.setStemDirection(dirsmo115619);
const smo115619 = new VF.Beam([smo111390,smo111391,smo111392]);
const dirsmo115620 = smo111393.getStemDirection();
smo111393.setStemDirection(dirsmo115620);
smo111394.setStemDirection(dirsmo115620);
smo111395.setStemDirection(dirsmo115620);
const smo115620 = new VF.Beam([smo111393,smo111394,smo111395]);
const dirsmo115623 = smo114140.getStemDirection();
smo114140.setStemDirection(dirsmo115623);
smo114141.setStemDirection(dirsmo115623);
const smo115623 = new VF.Beam([smo114140,smo114141]);
const dirsmo115624 = smo114142.getStemDirection();
smo114142.setStemDirection(dirsmo115624);
smo114143.setStemDirection(dirsmo115624);
const smo115624 = new VF.Beam([smo114142,smo114143]);
 
// formatting measures in staff group smo109454
fmtsmo11140958.format([smo111409v0,smo114157v0], 281);
const stavesmo111409 = new VF.Stave(1253, 1835, 295);
stavesmo111409.setAttribute('id', 'stavesmo111409');
stavesmo111409.setBegBarType(VF.Barline.type.NONE);
stavesmo111409.setContext(context);
stavesmo111409.draw();
smo111409v0.draw(context, stavesmo111409);
smo115619.setContext(context);
smo115619.draw();
smo115620.setContext(context);
smo115620.draw();
const stavesmo114157 = new VF.Stave(1253, 2000, 295);
stavesmo114157.setAttribute('id', 'stavesmo114157');
stavesmo114157.setBegBarType(VF.Barline.type.NONE);
stavesmo114157.setContext(context);
stavesmo114157.draw();
smo114157v0.draw(context, stavesmo114157);
smo115623.setContext(context);
smo115623.draw();
smo115624.setContext(context);
smo115624.draw();
const fmtsmo11142559 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo111425v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111425v0ar = [];
const smo111410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111410.setAttribute('id', 'smo111410');
smo111425v0ar.push(smo111410);
const smo111411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo111411.setAttribute('id', 'smo111411');
smo111425v0ar.push(smo111411);
smo111425v0.addTickables(smo111425v0ar)
fmtsmo11142559.joinVoices([smo111425v0]);
const fmtsmo11417559 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo114175v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114175v0ar = [];
const smo114158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo114158.setAttribute('id', 'smo114158');
smo114175v0ar.push(smo114158);
const smo114159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114159.setAttribute('id', 'smo114159');
smo114175v0ar.push(smo114159);
const smo114160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo114160.setAttribute('id', 'smo114160');
smo114175v0ar.push(smo114160);
const smo114161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo114161.setAttribute('id', 'smo114161');
smo114175v0ar.push(smo114161);
smo114175v0.addTickables(smo114175v0ar)
fmtsmo11417559.joinVoices([smo114175v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115629 = smo114158.getStemDirection();
smo114158.setStemDirection(dirsmo115629);
smo114159.setStemDirection(dirsmo115629);
const smo115629 = new VF.Beam([smo114158,smo114159]);
const dirsmo115630 = smo114160.getStemDirection();
smo114160.setStemDirection(dirsmo115630);
smo114161.setStemDirection(dirsmo115630);
const smo115630 = new VF.Beam([smo114160,smo114161]);
 
// formatting measures in staff group smo109454
fmtsmo11142559.format([smo111425v0,smo114175v0], 281);
const stavesmo111425 = new VF.Stave(1548, 1835, 295);
stavesmo111425.setAttribute('id', 'stavesmo111425');
stavesmo111425.setBegBarType(VF.Barline.type.NONE);
stavesmo111425.setContext(context);
stavesmo111425.draw();
smo111425v0.draw(context, stavesmo111425);
const stavesmo114175 = new VF.Stave(1548, 2000, 295);
stavesmo114175.setAttribute('id', 'stavesmo114175');
stavesmo114175.setBegBarType(VF.Barline.type.NONE);
stavesmo114175.setContext(context);
stavesmo114175.draw();
smo114175v0.draw(context, stavesmo114175);
smo115629.setContext(context);
smo115629.draw();
smo115630.setContext(context);
smo115630.draw();
const rightsmo109454stavesmo1114251 = new VF.StaveConnector(stavesmo111425, stavesmo114175).setType(0);
rightsmo109454stavesmo1114251.setContext(context).draw();
// modifier from 0-32-0-2 to 0-32-0-4
const smo116541 = new VF.StaveHairpin({ first_note: smo110866, last_note: smo110866,
       firstNote: smo110866, lastNote: smo110866 });
smo116541.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116541.setContext(context).setPosition(4).draw();
// modifier from 0-34-0-1 to 0-34-0-7
const smo116542 = new VF.StaveHairpin({ first_note: smo110906, last_note: smo110906,
       firstNote: smo110906, lastNote: smo110906 });
smo116542.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116542.setContext(context).setPosition(4).draw();
// modifier from 0-37-0-2 to 0-38-0-0
const smo116543 = new VF.StaveHairpin({ first_note: smo110968, last_note: smo110968,
       firstNote: smo110968, lastNote: smo110968 });
smo116543.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116543.setContext(context).setPosition(4).draw();
// modifier from 0-39-0-2 to 0-39-0-4
const smo116544 = new VF.StaveHairpin({ first_note: smo111008, last_note: smo111008,
       firstNote: smo111008, lastNote: smo111008 });
smo116544.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116544.setContext(context).setPosition(4).draw();
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-43-0-2 to 0-44-0-0
const smo116547 = new VF.StaveHairpin({ first_note: smo111088, last_note: smo111088,
       firstNote: smo111088, lastNote: smo111088 });
smo116547.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116547.setContext(context).setPosition(4).draw();
// modifier from 0-45-0-2 to 0-46-0-0
const smo116548 = new VF.StaveHairpin({ first_note: smo111129, last_note: smo111129,
       firstNote: smo111129, lastNote: smo111129 });
smo116548.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116548.setContext(context).setPosition(4).draw();
// modifier from 0-47-0-2 to 0-47-0-4
const smo116549 = new VF.StaveHairpin({ first_note: smo111168, last_note: smo111168,
       firstNote: smo111168, lastNote: smo111168 });
smo116549.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116549.setContext(context).setPosition(4).draw();
// modifier from 0-30-0-2 to 0-30-0-3
const smo116550 = new VF.StaveTie({ first_note: smo110823, last_note: smo110824, 
          firstNote: smo110823, lastNote: smo110824, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116550.setContext(context).draw();
// modifier from 0-32-0-0 to 0-32-0-1
const smo116551 = new VF.StaveTie({ first_note: smo110864, last_note: smo110865, 
          firstNote: smo110864, lastNote: smo110865, first_indices: [0], last_indices: [0]});
smo116551.setContext(context).draw();
// modifier from 0-33-0-2 to 0-33-0-3
const smo116552 = new VF.StaveTie({ first_note: smo110886, last_note: smo110887, 
          firstNote: smo110886, lastNote: smo110887, first_indices: [0], last_indices: [0]});
smo116552.setContext(context).draw();
// modifier from 0-34-0-3 to 0-34-0-4
const smo116553 = new VF.StaveTie({ first_note: smo110908, last_note: smo110909, 
          firstNote: smo110908, lastNote: smo110909, first_indices: [0], last_indices: [0]});
smo116553.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo116554 = new VF.StaveTie({ first_note: smo110931, last_note: null, 
          firstNote: smo110931, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo116554.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo116555 = new VF.StaveTie({ first_note: null, last_note: smo110946, 
          firstNote: null, lastNote: smo110946, first_indices: [0,1], last_indices: [0,1]});
smo116555.setContext(context).draw();
// modifier from 0-36-0-0 to 0-36-0-1
const smo116556 = new VF.StaveTie({ first_note: smo110946, last_note: smo110947, 
          firstNote: smo110946, lastNote: smo110947, first_indices: [0,1], last_indices: [0,1]});
smo116556.setContext(context).draw();
// modifier from 0-37-0-0 to 0-37-0-1
const smo116557 = new VF.StaveTie({ first_note: smo110966, last_note: smo110967, 
          firstNote: smo110966, lastNote: smo110967, first_indices: [0,1], last_indices: [0,1]});
smo116557.setContext(context).draw();
// modifier from 0-38-0-5 to 0-39-0-0
const smo116558 = new VF.StaveTie({ first_note: smo110991, last_note: smo111006, 
          firstNote: smo110991, lastNote: smo111006, first_indices: [0], last_indices: [0]});
smo116558.setContext(context).draw();
// modifier from 0-39-0-0 to 0-39-0-1
const smo116559 = new VF.StaveTie({ first_note: smo111006, last_note: smo111007, 
          firstNote: smo111006, lastNote: smo111007, first_indices: [0], last_indices: [0]});
smo116559.setContext(context).draw();
// modifier from 0-40-0-3 to 0-40-0-4
const smo116560 = new VF.StaveTie({ first_note: smo111029, last_note: smo111030, 
          firstNote: smo111029, lastNote: smo111030, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116560.setContext(context).draw();
// modifier from 0-41-0-0 to 0-41-0-1
const smo116561 = new VF.StaveTie({ first_note: smo111047, last_note: smo111048, 
          firstNote: smo111047, lastNote: smo111048, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116561.setContext(context).draw();
// modifier from 0-42-0-5 to 0-43-0-0
const smo116562 = new VF.StaveTie({ first_note: smo111071, last_note: smo111086, 
          firstNote: smo111071, lastNote: smo111086, first_indices: [0], last_indices: [0]});
smo116562.setContext(context).draw();
// modifier from 0-43-0-0 to 0-43-0-1
const smo116563 = new VF.StaveTie({ first_note: smo111086, last_note: smo111087, 
          firstNote: smo111086, lastNote: smo111087, first_indices: [0], last_indices: [0]});
smo116563.setContext(context).draw();
// modifier from 0-44-0-3 to 0-44-0-4
const smo116564 = new VF.StaveTie({ first_note: smo111108, last_note: smo111109, 
          firstNote: smo111108, lastNote: smo111109, first_indices: [0,1], last_indices: [0,1]});
smo116564.setContext(context).draw();
// modifier from 0-45-0-0 to 0-45-0-1
const smo116565 = new VF.StaveTie({ first_note: smo111127, last_note: smo111128, 
          firstNote: smo111127, lastNote: smo111128, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116565.setContext(context).draw();
// modifier from 0-46-0-5 to 0-47-0-0
const smo116566 = new VF.StaveTie({ first_note: smo111151, last_note: smo111166, 
          firstNote: smo111151, lastNote: smo111166, first_indices: [0], last_indices: [0]});
smo116566.setContext(context).draw();
// modifier from 0-47-0-0 to 0-47-0-1
const smo116567 = new VF.StaveTie({ first_note: smo111166, last_note: smo111167, 
          firstNote: smo111166, lastNote: smo111167, first_indices: [0], last_indices: [0]});
smo116567.setContext(context).draw();
// modifier from 0-48-0-3 to 0-48-0-4
const smo116568 = new VF.StaveTie({ first_note: smo111189, last_note: smo111190, 
          firstNote: smo111189, lastNote: smo111190, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116568.setContext(context).draw();
// modifier from 0-49-0-0 to 0-49-0-1
const smo116569 = new VF.StaveTie({ first_note: smo111207, last_note: smo111208, 
          firstNote: smo111207, lastNote: smo111208, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116569.setContext(context).draw();
// modifier from 0-50-0-3 to 0-50-0-4
const smo116570 = new VF.StaveTie({ first_note: smo111228, last_note: smo111229, 
          firstNote: smo111228, lastNote: smo111229, first_indices: [0,1], last_indices: [0,1]});
smo116570.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo116571 = new VF.StaveTie({ first_note: smo111250, last_note: smo111251, 
          firstNote: smo111250, lastNote: smo111251, first_indices: [0,1], last_indices: [0,1]});
smo116571.setContext(context).draw();
// modifier from 0-52-0-3 to 0-52-0-4
const smo116572 = new VF.StaveTie({ first_note: smo111272, last_note: smo111273, 
          firstNote: smo111272, lastNote: smo111273, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116572.setContext(context).draw();
// modifier from 0-54-0-2 to 0-54-0-3
const smo116573 = new VF.StaveTie({ first_note: smo111310, last_note: smo111311, 
          firstNote: smo111310, lastNote: smo111311, first_indices: [0,1], last_indices: [0,1]});
smo116573.setContext(context).draw();
// modifier from 0-56-0-2 to 0-56-0-3
const smo116574 = new VF.StaveTie({ first_note: smo111350, last_note: smo111351, 
          firstNote: smo111350, lastNote: smo111351, first_indices: [0,1], last_indices: [0,1]});
smo116574.setContext(context).draw();
// modifier from 0-57-0-0 to 0-57-0-1
const smo116575 = new VF.StaveTie({ first_note: smo111367, last_note: smo111368, 
          firstNote: smo111367, lastNote: smo111368, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116575.setContext(context).draw();
// modifier from 0-58-0-2 to 0-58-0-3
const smo116576 = new VF.StaveTie({ first_note: smo111392, last_note: smo111393, 
          firstNote: smo111392, lastNote: smo111393, first_indices: [0], last_indices: [0]});
smo116576.setContext(context).draw();
const smo110952smo110965 = new VF.Volta(5, '1', 73, -55);
smo110952smo110965.setContext(context).draw(stavesmo110965, -1 * 0);
const smo110970smo110984 = new VF.Volta(5, '2', 368, 20);
smo110970smo110984.setContext(context).draw(stavesmo110984, -1 * 0);
}
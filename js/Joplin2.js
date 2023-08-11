function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo24669130 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo246691v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246691v0ar = [];
const smo246671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246671'] = smo246671;
smo246671.setAttribute('id', 'smo246671');
smo246691v0ar.push(smo246671);
const smo246672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo246672'] = smo246672;
smo246672.setAttribute('id', 'smo246672');
smo246691v0ar.push(smo246672);
const smo246673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246673'] = smo246673;
smo246673.setAttribute('id', 'smo246673');
smo246691v0ar.push(smo246673);
const smo246674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo246674'] = smo246674;
smo246674.setAttribute('id', 'smo246674');
smo246691v0ar.push(smo246674);
const smo246675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246675'] = smo246675;
smo246675.setAttribute('id', 'smo246675');
smo246691v0ar.push(smo246675);
const smo246676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246676'] = smo246676;
smo246676.setAttribute('id', 'smo246676');
smo246691v0ar.push(smo246676);
const smo246677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246677'] = smo246677;
smo246677.setAttribute('id', 'smo246677');
smo246691v0ar.push(smo246677);
smo246691v0.addTickables(smo246691v0ar)
fmtsmo24669130.joinVoices([smo246691v0]);
const fmtsmo24950130 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo249501v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249501v0ar = [];
const smo249484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249484'] = smo249484;
smo249484.setAttribute('id', 'smo249484');
smo249501v0ar.push(smo249484);
const smo249485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249485'] = smo249485;
smo249485.setAttribute('id', 'smo249485');
smo249501v0ar.push(smo249485);
const smo249486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249486'] = smo249486;
smo249486.setAttribute('id', 'smo249486');
smo249501v0ar.push(smo249486);
const smo249487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249487'] = smo249487;
smo249487.setAttribute('id', 'smo249487');
smo249501v0ar.push(smo249487);
smo249501v0.addTickables(smo249501v0ar)
fmtsmo24950130.joinVoices([smo249501v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251234 = smo246671.getStemDirection();
smo246671.setStemDirection(dirsmo251234);
smo246672.setStemDirection(dirsmo251234);
smo246673.setStemDirection(dirsmo251234);
const smo251234 = new VF.Beam([smo246671,smo246672,smo246673]);
const dirsmo251235 = smo246674.getStemDirection();
smo246674.setStemDirection(dirsmo251235);
smo246675.setStemDirection(dirsmo251235);
smo246676.setStemDirection(dirsmo251235);
smo246677.setStemDirection(dirsmo251235);
const smo251235 = new VF.Beam([smo246674,smo246675,smo246676,smo246677]);
const dirsmo251238 = smo249484.getStemDirection();
smo249484.setStemDirection(dirsmo251238);
smo249485.setStemDirection(dirsmo251238);
const smo251238 = new VF.Beam([smo249484,smo249485]);
const dirsmo251239 = smo249486.getStemDirection();
smo249486.setStemDirection(dirsmo251239);
smo249487.setStemDirection(dirsmo251239);
const smo251239 = new VF.Beam([smo249486,smo249487]);
 
// formatting measures in staff group smo245304
fmtsmo24669130.format([smo246691v0,smo249501v0], 237);
const stavesmo246691 = new VF.Stave(73, 411, 295);
stavesmo246691.setAttribute('id', 'stavesmo246691');
stavesmo246691.setBegBarType(1);
stavesmo246691.addClef('treble');
stavesmo246691.setContext(context);
stavesmo246691.draw();
smo246691v0.draw(context, stavesmo246691);
smo251234.setContext(context);
smo251234.draw();
smo251235.setContext(context);
smo251235.draw();
const stavesmo249501 = new VF.Stave(73, 561, 295);
stavesmo249501.setAttribute('id', 'stavesmo249501');
stavesmo249501.setBegBarType(1);
stavesmo249501.addClef('bass');
stavesmo249501.setContext(context);
stavesmo249501.draw();
smo249501v0.draw(context, stavesmo249501);
smo251238.setContext(context);
smo251238.draw();
smo251239.setContext(context);
smo251239.draw();
const leftsmo245304stavesmo2466911 = new VF.StaveConnector(stavesmo246691, stavesmo249501).setType(3);
leftsmo245304stavesmo2466911.setContext(context).draw();
const fmtsmo24671331 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo246713v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246713v0ar = [];
const smo246692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246692'] = smo246692;
smo246692.setAttribute('id', 'smo246692');
smo246713v0ar.push(smo246692);
const smo246693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo246693'] = smo246693;
smo246693.setAttribute('id', 'smo246693');
smo246713v0ar.push(smo246693);
const smo246694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246694'] = smo246694;
smo246694.setAttribute('id', 'smo246694');
smo246713v0ar.push(smo246694);
const smo246695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246695'] = smo246695;
smo246695.setAttribute('id', 'smo246695');
smo246713v0ar.push(smo246695);
const smo246696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246696'] = smo246696;
smo246696.setAttribute('id', 'smo246696');
smo246713v0ar.push(smo246696);
const smo246697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246697'] = smo246697;
smo246697.setAttribute('id', 'smo246697');
smo246713v0ar.push(smo246697);
const smo246698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246698'] = smo246698;
smo246698.setAttribute('id', 'smo246698');
smo246713v0ar.push(smo246698);
const smo246699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo246699'] = smo246699;
smo246699.setAttribute('id', 'smo246699');
smo246713v0ar.push(smo246699);
smo246713v0.addTickables(smo246713v0ar)
fmtsmo24671331.joinVoices([smo246713v0]);
const fmtsmo24951931 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo249519v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249519v0ar = [];
const smo249502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo249502'] = smo249502;
smo249502.setAttribute('id', 'smo249502');
smo249519v0ar.push(smo249502);
const smo249503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249503'] = smo249503;
smo249503.setAttribute('id', 'smo249503');
smo249519v0ar.push(smo249503);
const smo249504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo249504'] = smo249504;
smo249504.setAttribute('id', 'smo249504');
smo249519v0ar.push(smo249504);
const smo249505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249505'] = smo249505;
smo249505.setAttribute('id', 'smo249505');
const smo2495050acc = new VF.Accidental('b');
smo249505.addModifier(smo2495050acc, 0);
smo249519v0ar.push(smo249505);
smo249519v0.addTickables(smo249519v0ar)
fmtsmo24951931.joinVoices([smo249519v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251242 = smo246692.getStemDirection();
smo246692.setStemDirection(dirsmo251242);
smo246693.setStemDirection(dirsmo251242);
smo246694.setStemDirection(dirsmo251242);
smo246695.setStemDirection(dirsmo251242);
const smo251242 = new VF.Beam([smo246692,smo246693,smo246694,smo246695]);
const dirsmo251243 = smo246696.getStemDirection();
smo246696.setStemDirection(dirsmo251243);
smo246697.setStemDirection(dirsmo251243);
smo246698.setStemDirection(dirsmo251243);
smo246699.setStemDirection(dirsmo251243);
const smo251243 = new VF.Beam([smo246696,smo246697,smo246698,smo246699]);
const dirsmo251246 = smo249502.getStemDirection();
smo249502.setStemDirection(dirsmo251246);
smo249503.setStemDirection(dirsmo251246);
const smo251246 = new VF.Beam([smo249502,smo249503]);
const dirsmo251247 = smo249504.getStemDirection();
smo249504.setStemDirection(dirsmo251247);
smo249505.setStemDirection(dirsmo251247);
const smo251247 = new VF.Beam([smo249504,smo249505]);
 
// formatting measures in staff group smo245304
fmtsmo24671331.format([smo246713v0,smo249519v0], 281);
const stavesmo246713 = new VF.Stave(368, 411, 295);
stavesmo246713.setAttribute('id', 'stavesmo246713');
stavesmo246713.setBegBarType(VF.Barline.type.NONE);
stavesmo246713.setContext(context);
stavesmo246713.draw();
smo246713v0.draw(context, stavesmo246713);
smo251242.setContext(context);
smo251242.draw();
smo251243.setContext(context);
smo251243.draw();
const stavesmo249519 = new VF.Stave(368, 561, 295);
stavesmo249519.setAttribute('id', 'stavesmo249519');
stavesmo249519.setBegBarType(VF.Barline.type.NONE);
stavesmo249519.setContext(context);
stavesmo249519.draw();
smo249519v0.draw(context, stavesmo249519);
smo251246.setContext(context);
smo251246.draw();
smo251247.setContext(context);
smo251247.draw();
const fmtsmo24673232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo246732v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246732v0ar = [];
const smo246714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246714'] = smo246714;
smo246714.setAttribute('id', 'smo246714');
smo246732v0ar.push(smo246714);
const smo246715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246715'] = smo246715;
smo246715.setAttribute('id', 'smo246715');
smo246732v0ar.push(smo246715);
const smo246716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246716'] = smo246716;
smo246716.setAttribute('id', 'smo246716');
smo246732v0ar.push(smo246716);
const smo246717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo246717'] = smo246717;
smo246717.setAttribute('id', 'smo246717');
const smo2467170acc = new VF.Accidental('b');
smo246717.addModifier(smo2467170acc, 0);
smo246732v0ar.push(smo246717);
const smo246718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246718'] = smo246718;
smo246718.setAttribute('id', 'smo246718');
const smo2467180acc = new VF.Accidental('n');
smo246718.addModifier(smo2467180acc, 0);
smo246732v0ar.push(smo246718);
smo246732v0.addTickables(smo246732v0ar)
fmtsmo24673232.joinVoices([smo246732v0]);
const fmtsmo24953732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo249537v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249537v0ar = [];
const smo249520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo249520'] = smo249520;
smo249520.setAttribute('id', 'smo249520');
smo249537v0ar.push(smo249520);
const smo249521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249521'] = smo249521;
smo249521.setAttribute('id', 'smo249521');
smo249537v0ar.push(smo249521);
const smo249522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249522'] = smo249522;
smo249522.setAttribute('id', 'smo249522');
smo249537v0ar.push(smo249522);
const smo249523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249523'] = smo249523;
smo249523.setAttribute('id', 'smo249523');
const smo2495230acc = new VF.Accidental('b');
smo249523.addModifier(smo2495230acc, 0);
smo249537v0ar.push(smo249523);
smo249537v0.addTickables(smo249537v0ar)
fmtsmo24953732.joinVoices([smo249537v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251250 = smo246715.getStemDirection();
smo246715.setStemDirection(dirsmo251250);
smo246716.setStemDirection(dirsmo251250);
smo246717.setStemDirection(dirsmo251250);
smo246718.setStemDirection(dirsmo251250);
const smo251250 = new VF.Beam([smo246715,smo246716,smo246717,smo246718]);
const dirsmo251253 = smo249520.getStemDirection();
smo249520.setStemDirection(dirsmo251253);
smo249521.setStemDirection(dirsmo251253);
const smo251253 = new VF.Beam([smo249520,smo249521]);
const dirsmo251254 = smo249522.getStemDirection();
smo249522.setStemDirection(dirsmo251254);
smo249523.setStemDirection(dirsmo251254);
const smo251254 = new VF.Beam([smo249522,smo249523]);
 
// formatting measures in staff group smo245304
fmtsmo24673232.format([smo246732v0,smo249537v0], 281);
const stavesmo246732 = new VF.Stave(663, 411, 295);
stavesmo246732.setAttribute('id', 'stavesmo246732');
stavesmo246732.setBegBarType(VF.Barline.type.NONE);
stavesmo246732.setContext(context);
stavesmo246732.draw();
smo246732v0.draw(context, stavesmo246732);
smo251250.setContext(context);
smo251250.draw();
const stavesmo249537 = new VF.Stave(663, 561, 295);
stavesmo249537.setAttribute('id', 'stavesmo249537');
stavesmo249537.setBegBarType(VF.Barline.type.NONE);
stavesmo249537.setContext(context);
stavesmo249537.draw();
smo249537v0.draw(context, stavesmo249537);
smo251253.setContext(context);
smo251253.draw();
smo251254.setContext(context);
smo251254.draw();
const fmtsmo24675433 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo246754v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246754v0ar = [];
const smo246733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246733'] = smo246733;
smo246733.setAttribute('id', 'smo246733');
smo246754v0ar.push(smo246733);
const smo246735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246735'] = smo246735;
smo246735.setAttribute('id', 'smo246735');
smo246754v0ar.push(smo246735);
const smo246736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246736'] = smo246736;
smo246736.setAttribute('id', 'smo246736');
smo246754v0ar.push(smo246736);
const smo246737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246737'] = smo246737;
smo246737.setAttribute('id', 'smo246737');
smo246754v0ar.push(smo246737);
const smo246738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246738'] = smo246738;
smo246738.setAttribute('id', 'smo246738');
smo246754v0ar.push(smo246738);
const smo246739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246739'] = smo246739;
smo246739.setAttribute('id', 'smo246739');
smo246754v0ar.push(smo246739);
const smo246740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo246740'] = smo246740;
smo246740.setAttribute('id', 'smo246740');
smo246754v0ar.push(smo246740);
smo246754v0.addTickables(smo246754v0ar)
fmtsmo24675433.joinVoices([smo246754v0]);
const fmtsmo24955533 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo249555v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249555v0ar = [];
const smo249538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249538'] = smo249538;
smo249538.setAttribute('id', 'smo249538');
smo249555v0ar.push(smo249538);
const smo249539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249539'] = smo249539;
smo249539.setAttribute('id', 'smo249539');
smo249555v0ar.push(smo249539);
const smo249540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo249540'] = smo249540;
smo249540.setAttribute('id', 'smo249540');
const smo2495400acc = new VF.Accidental('b');
smo249540.addModifier(smo2495400acc, 0);
const smo2495403acc = new VF.Accidental('b');
smo249540.addModifier(smo2495403acc, 3);
smo249555v0ar.push(smo249540);
const smo249541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo249541'] = smo249541;
smo249541.setAttribute('id', 'smo249541');
smo249555v0ar.push(smo249541);
smo249555v0.addTickables(smo249555v0ar)
fmtsmo24955533.joinVoices([smo249555v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251257 = smo246733.getStemDirection();
smo246733.setStemDirection(dirsmo251257);
smo246735.setStemDirection(dirsmo251257);
smo246736.setStemDirection(dirsmo251257);
const smo251257 = new VF.Beam([smo246733,smo246735,smo246736]);
const dirsmo251258 = smo246737.getStemDirection();
smo246737.setStemDirection(dirsmo251258);
smo246738.setStemDirection(dirsmo251258);
smo246739.setStemDirection(dirsmo251258);
smo246740.setStemDirection(dirsmo251258);
const smo251258 = new VF.Beam([smo246737,smo246738,smo246739,smo246740]);
const dirsmo251261 = smo249538.getStemDirection();
smo249538.setStemDirection(dirsmo251261);
smo249539.setStemDirection(dirsmo251261);
const smo251261 = new VF.Beam([smo249538,smo249539]);
const dirsmo251262 = smo249540.getStemDirection();
smo249540.setStemDirection(dirsmo251262);
smo249541.setStemDirection(dirsmo251262);
const smo251262 = new VF.Beam([smo249540,smo249541]);
 
// formatting measures in staff group smo245304
fmtsmo24675433.format([smo246754v0,smo249555v0], 281);
const stavesmo246754 = new VF.Stave(958, 411, 295);
stavesmo246754.setAttribute('id', 'stavesmo246754');
stavesmo246754.setBegBarType(VF.Barline.type.NONE);
stavesmo246754.setContext(context);
stavesmo246754.draw();
smo246754v0.draw(context, stavesmo246754);
smo251257.setContext(context);
smo251257.draw();
smo251258.setContext(context);
smo251258.draw();
const stavesmo249555 = new VF.Stave(958, 561, 295);
stavesmo249555.setAttribute('id', 'stavesmo249555');
stavesmo249555.setBegBarType(VF.Barline.type.NONE);
stavesmo249555.setContext(context);
stavesmo249555.draw();
smo249555v0.draw(context, stavesmo249555);
smo251261.setContext(context);
smo251261.draw();
smo251262.setContext(context);
smo251262.draw();
const fmtsmo24677634 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo246776v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246776v0ar = [];
const smo246755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246755'] = smo246755;
smo246755.setAttribute('id', 'smo246755');
smo246776v0ar.push(smo246755);
const smo246756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246756'] = smo246756;
smo246756.setAttribute('id', 'smo246756');
smo246776v0ar.push(smo246756);
const smo246757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246757'] = smo246757;
smo246757.setAttribute('id', 'smo246757');
smo246776v0ar.push(smo246757);
const smo246758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo246758'] = smo246758;
smo246758.setAttribute('id', 'smo246758');
smo246776v0ar.push(smo246758);
const smo246759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo246759'] = smo246759;
smo246759.setAttribute('id', 'smo246759');
smo246776v0ar.push(smo246759);
const smo246760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo246760'] = smo246760;
smo246760.setAttribute('id', 'smo246760');
smo246776v0ar.push(smo246760);
const smo246761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246761'] = smo246761;
smo246761.setAttribute('id', 'smo246761');
smo246776v0ar.push(smo246761);
const smo246762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo246762'] = smo246762;
smo246762.setAttribute('id', 'smo246762');
smo246776v0ar.push(smo246762);
smo246776v0.addTickables(smo246776v0ar)
fmtsmo24677634.joinVoices([smo246776v0]);
const fmtsmo24957334 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo249573v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249573v0ar = [];
const smo249556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249556'] = smo249556;
smo249556.setAttribute('id', 'smo249556');
smo249573v0ar.push(smo249556);
const smo249557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249557'] = smo249557;
smo249557.setAttribute('id', 'smo249557');
smo249573v0ar.push(smo249557);
const smo249558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249558'] = smo249558;
smo249558.setAttribute('id', 'smo249558');
smo249573v0ar.push(smo249558);
const smo249559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249559'] = smo249559;
smo249559.setAttribute('id', 'smo249559');
smo249573v0ar.push(smo249559);
smo249573v0.addTickables(smo249573v0ar)
fmtsmo24957334.joinVoices([smo249573v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251265 = smo246755.getStemDirection();
smo246755.setStemDirection(dirsmo251265);
smo246756.setStemDirection(dirsmo251265);
smo246757.setStemDirection(dirsmo251265);
smo246758.setStemDirection(dirsmo251265);
const smo251265 = new VF.Beam([smo246755,smo246756,smo246757,smo246758]);
const dirsmo251266 = smo246759.getStemDirection();
smo246759.setStemDirection(dirsmo251266);
smo246760.setStemDirection(dirsmo251266);
smo246761.setStemDirection(dirsmo251266);
smo246762.setStemDirection(dirsmo251266);
const smo251266 = new VF.Beam([smo246759,smo246760,smo246761,smo246762]);
const dirsmo251269 = smo249556.getStemDirection();
smo249556.setStemDirection(dirsmo251269);
smo249557.setStemDirection(dirsmo251269);
const smo251269 = new VF.Beam([smo249556,smo249557]);
const dirsmo251270 = smo249558.getStemDirection();
smo249558.setStemDirection(dirsmo251270);
smo249559.setStemDirection(dirsmo251270);
const smo251270 = new VF.Beam([smo249558,smo249559]);
 
// formatting measures in staff group smo245304
fmtsmo24677634.format([smo246776v0,smo249573v0], 281);
const stavesmo246776 = new VF.Stave(1253, 411, 295);
stavesmo246776.setAttribute('id', 'stavesmo246776');
stavesmo246776.setBegBarType(VF.Barline.type.NONE);
stavesmo246776.setContext(context);
stavesmo246776.draw();
smo246776v0.draw(context, stavesmo246776);
smo251265.setContext(context);
smo251265.draw();
smo251266.setContext(context);
smo251266.draw();
const stavesmo249573 = new VF.Stave(1253, 561, 295);
stavesmo249573.setAttribute('id', 'stavesmo249573');
stavesmo249573.setBegBarType(VF.Barline.type.NONE);
stavesmo249573.setContext(context);
stavesmo249573.draw();
smo249573v0.draw(context, stavesmo249573);
smo251269.setContext(context);
smo251269.draw();
smo251270.setContext(context);
smo251270.draw();
const fmtsmo24679535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo246795v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246795v0ar = [];
const smo246777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
noteHash['smo246777'] = smo246777;
smo246777.setAttribute('id', 'smo246777');
const smo2467770acc = new VF.Accidental('b');
smo246777.addModifier(smo2467770acc, 0);
smo246795v0ar.push(smo246777);
const smo246778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
noteHash['smo246778'] = smo246778;
smo246778.setAttribute('id', 'smo246778');
smo246795v0ar.push(smo246778);
const smo246779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
noteHash['smo246779'] = smo246779;
smo246779.setAttribute('id', 'smo246779');
smo246795v0ar.push(smo246779);
const smo246780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo246780'] = smo246780;
smo246780.setAttribute('id', 'smo246780');
smo246795v0ar.push(smo246780);
const smo246781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo246781'] = smo246781;
smo246781.setAttribute('id', 'smo246781');
smo246795v0ar.push(smo246781);
smo246795v0.addTickables(smo246795v0ar)
fmtsmo24679535.joinVoices([smo246795v0]);
const fmtsmo24959135 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo249591v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249591v0ar = [];
const smo249574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo249574'] = smo249574;
smo249574.setAttribute('id', 'smo249574');
smo249591v0ar.push(smo249574);
const smo249575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
noteHash['smo249575'] = smo249575;
smo249575.setAttribute('id', 'smo249575');
smo249591v0ar.push(smo249575);
const smo249576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249576'] = smo249576;
smo249576.setAttribute('id', 'smo249576');
smo249591v0ar.push(smo249576);
const smo249577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249577'] = smo249577;
smo249577.setAttribute('id', 'smo249577');
smo249591v0ar.push(smo249577);
smo249591v0.addTickables(smo249591v0ar)
fmtsmo24959135.joinVoices([smo249591v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251273 = smo246777.getStemDirection();
smo246777.setStemDirection(dirsmo251273);
smo246778.setStemDirection(dirsmo251273);
const smo251273 = new VF.Beam([smo246777,smo246778]);
const dirsmo251274 = smo246779.getStemDirection();
smo246779.setStemDirection(dirsmo251274);
smo246780.setStemDirection(dirsmo251274);
smo246781.setStemDirection(dirsmo251274);
const smo251274 = new VF.Beam([smo246779,smo246780,smo246781]);
const dirsmo251277 = smo249574.getStemDirection();
smo249574.setStemDirection(dirsmo251277);
smo249575.setStemDirection(dirsmo251277);
const smo251277 = new VF.Beam([smo249574,smo249575]);
const dirsmo251278 = smo249576.getStemDirection();
smo249576.setStemDirection(dirsmo251278);
smo249577.setStemDirection(dirsmo251278);
const smo251278 = new VF.Beam([smo249576,smo249577]);
 
// formatting measures in staff group smo245304
fmtsmo24679535.format([smo246795v0,smo249591v0], 281);
const stavesmo246795 = new VF.Stave(1548, 411, 295);
stavesmo246795.setAttribute('id', 'stavesmo246795');
stavesmo246795.setBegBarType(VF.Barline.type.NONE);
stavesmo246795.setContext(context);
stavesmo246795.draw();
smo246795v0.draw(context, stavesmo246795);
smo251273.setContext(context);
smo251273.draw();
smo251274.setContext(context);
smo251274.draw();
const stavesmo249591 = new VF.Stave(1548, 561, 295);
stavesmo249591.setAttribute('id', 'stavesmo249591');
stavesmo249591.setBegBarType(VF.Barline.type.NONE);
stavesmo249591.setContext(context);
stavesmo249591.draw();
smo249591v0.draw(context, stavesmo249591);
smo251277.setContext(context);
smo251277.draw();
smo251278.setContext(context);
smo251278.draw();
const rightsmo245304stavesmo2467951 = new VF.StaveConnector(stavesmo246795, stavesmo249591).setType(0);
rightsmo245304stavesmo2467951.setContext(context).draw();
const fmtsmo24681536 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo246815v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246815v0ar = [];
const smo246796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo246796'] = smo246796;
smo246796.setAttribute('id', 'smo246796');
smo246815v0ar.push(smo246796);
const smo246797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo246797'] = smo246797;
smo246797.setAttribute('id', 'smo246797');
smo246815v0ar.push(smo246797);
const smo246798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
noteHash['smo246798'] = smo246798;
smo246798.setAttribute('id', 'smo246798');
smo246815v0ar.push(smo246798);
const smo246799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
noteHash['smo246799'] = smo246799;
smo246799.setAttribute('id', 'smo246799');
smo246815v0ar.push(smo246799);
const smo246800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
noteHash['smo246800'] = smo246800;
smo246800.setAttribute('id', 'smo246800');
const smo2468000acc = new VF.Accidental('b');
smo246800.addModifier(smo2468000acc, 0);
const smo2468001acc = new VF.Accidental('b');
smo246800.addModifier(smo2468001acc, 1);
const smo2468002acc = new VF.Accidental('b');
smo246800.addModifier(smo2468002acc, 2);
smo246815v0ar.push(smo246800);
smo246815v0.addTickables(smo246815v0ar)
fmtsmo24681536.joinVoices([smo246815v0]);
const fmtsmo24961036 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo249610v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249610v0ar = [];
const smo249592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo249592'] = smo249592;
smo249592.setAttribute('id', 'smo249592');
smo249610v0ar.push(smo249592);
const smo249593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249593'] = smo249593;
smo249593.setAttribute('id', 'smo249593');
smo249610v0ar.push(smo249593);
const smo249594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249594'] = smo249594;
smo249594.setAttribute('id', 'smo249594');
smo249610v0ar.push(smo249594);
const smo249595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo249595'] = smo249595;
smo249595.setAttribute('id', 'smo249595');
smo249610v0ar.push(smo249595);
smo249610v0.addTickables(smo249610v0ar)
fmtsmo24961036.joinVoices([smo249610v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251287 = smo246797.getStemDirection();
smo246797.setStemDirection(dirsmo251287);
smo246798.setStemDirection(dirsmo251287);
smo246799.setStemDirection(dirsmo251287);
smo246800.setStemDirection(dirsmo251287);
const smo251287 = new VF.Beam([smo246797,smo246798,smo246799,smo246800]);
const dirsmo251289 = smo249592.getStemDirection();
smo249592.setStemDirection(dirsmo251289);
smo249593.setStemDirection(dirsmo251289);
const smo251289 = new VF.Beam([smo249592,smo249593]);
const dirsmo251290 = smo249594.getStemDirection();
smo249594.setStemDirection(dirsmo251290);
smo249595.setStemDirection(dirsmo251290);
const smo251290 = new VF.Beam([smo249594,smo249595]);
 
// formatting measures in staff group smo245304
fmtsmo24681536.format([smo246815v0,smo249610v0], 233);
const stavesmo246815 = new VF.Stave(73, 789, 295);
stavesmo246815.setAttribute('id', 'stavesmo246815');
stavesmo246815.setBegBarType(1);
stavesmo246815.setEndBarType(5);
stavesmo246815.addClef('treble');
stavesmo246815.setContext(context);
stavesmo246815.draw();
smo246815v0.draw(context, stavesmo246815);
smo251287.setContext(context);
smo251287.draw();
const stavesmo249610 = new VF.Stave(73, 930, 295);
stavesmo249610.setAttribute('id', 'stavesmo249610');
stavesmo249610.setBegBarType(1);
stavesmo249610.setEndBarType(5);
stavesmo249610.addClef('bass');
stavesmo249610.setContext(context);
stavesmo249610.draw();
smo249610v0.draw(context, stavesmo249610);
smo251289.setContext(context);
smo251289.draw();
smo251290.setContext(context);
smo251290.draw();
const leftsmo245304stavesmo2468151 = new VF.StaveConnector(stavesmo246815, stavesmo249610).setType(3);
leftsmo245304stavesmo2468151.setContext(context).draw();
const fmtsmo24683437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo246834v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246834v0ar = [];
const smo246816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo246816'] = smo246816;
smo246816.setAttribute('id', 'smo246816');
smo246834v0ar.push(smo246816);
const smo246817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo246817'] = smo246817;
smo246817.setAttribute('id', 'smo246817');
smo246834v0ar.push(smo246817);
const smo246818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246818'] = smo246818;
smo246818.setAttribute('id', 'smo246818');
smo246834v0ar.push(smo246818);
const smo246819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246819'] = smo246819;
smo246819.setAttribute('id', 'smo246819');
const smo2468190acc = new VF.Accidental('b');
smo246819.addModifier(smo2468190acc, 0);
smo246834v0ar.push(smo246819);
smo246834v0.addTickables(smo246834v0ar)
fmtsmo24683437.joinVoices([smo246834v0]);
const fmtsmo24962937 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo249629v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249629v0ar = [];
const smo249611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo249611'] = smo249611;
smo249611.setAttribute('id', 'smo249611');
smo249629v0ar.push(smo249611);
const smo249612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249612'] = smo249612;
smo249612.setAttribute('id', 'smo249612');
smo249629v0ar.push(smo249612);
const smo249613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo249613'] = smo249613;
smo249613.setAttribute('id', 'smo249613');
smo249629v0ar.push(smo249613);
const smo249614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo249614'] = smo249614;
smo249614.setAttribute('id', 'smo249614');
smo249629v0ar.push(smo249614);
smo249629v0.addTickables(smo249629v0ar)
fmtsmo24962937.joinVoices([smo249629v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251292 = smo246817.getStemDirection();
smo246817.setStemDirection(dirsmo251292);
smo246818.setStemDirection(dirsmo251292);
smo246819.setStemDirection(dirsmo251292);
const smo251292 = new VF.Beam([smo246817,smo246818,smo246819]);
const dirsmo251295 = smo249611.getStemDirection();
smo249611.setStemDirection(dirsmo251295);
smo249612.setStemDirection(dirsmo251295);
const smo251295 = new VF.Beam([smo249611,smo249612]);
 
// formatting measures in staff group smo245304
fmtsmo24683437.format([smo246834v0,smo249629v0], 281);
const stavesmo246834 = new VF.Stave(368, 789, 295);
stavesmo246834.setAttribute('id', 'stavesmo246834');
stavesmo246834.setBegBarType(VF.Barline.type.NONE);
stavesmo246834.setContext(context);
stavesmo246834.draw();
smo246834v0.draw(context, stavesmo246834);
smo251292.setContext(context);
smo251292.draw();
const stavesmo249629 = new VF.Stave(368, 930, 295);
stavesmo249629.setAttribute('id', 'stavesmo249629');
stavesmo249629.setBegBarType(VF.Barline.type.NONE);
stavesmo249629.setContext(context);
stavesmo249629.draw();
smo249629v0.draw(context, stavesmo249629);
smo251295.setContext(context);
smo251295.draw();
const fmtsmo24685538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo246855v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246855v0ar = [];
const smo246835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246835'] = smo246835;
smo246835.setAttribute('id', 'smo246835');
smo246855v0ar.push(smo246835);
const smo246837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246837'] = smo246837;
smo246837.setAttribute('id', 'smo246837');
smo246855v0ar.push(smo246837);
const smo246838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246838'] = smo246838;
smo246838.setAttribute('id', 'smo246838');
smo246855v0ar.push(smo246838);
const smo246839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246839'] = smo246839;
smo246839.setAttribute('id', 'smo246839');
smo246855v0ar.push(smo246839);
const smo246840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246840'] = smo246840;
smo246840.setAttribute('id', 'smo246840');
smo246855v0ar.push(smo246840);
const smo246841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246841'] = smo246841;
smo246841.setAttribute('id', 'smo246841');
smo246855v0ar.push(smo246841);
smo246855v0.addTickables(smo246855v0ar)
fmtsmo24685538.joinVoices([smo246855v0]);
const fmtsmo24964738 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo249647v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249647v0ar = [];
const smo249630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249630'] = smo249630;
smo249630.setAttribute('id', 'smo249630');
smo249647v0ar.push(smo249630);
const smo249631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249631'] = smo249631;
smo249631.setAttribute('id', 'smo249631');
smo249647v0ar.push(smo249631);
const smo249632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249632'] = smo249632;
smo249632.setAttribute('id', 'smo249632');
smo249647v0ar.push(smo249632);
const smo249633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo249633'] = smo249633;
smo249633.setAttribute('id', 'smo249633');
const smo2496331acc = new VF.Accidental('b');
smo249633.addModifier(smo2496331acc, 1);
smo249647v0ar.push(smo249633);
smo249647v0.addTickables(smo249647v0ar)
fmtsmo24964738.joinVoices([smo249647v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251298 = smo246835.getStemDirection();
smo246835.setStemDirection(dirsmo251298);
smo246837.setStemDirection(dirsmo251298);
smo246838.setStemDirection(dirsmo251298);
const smo251298 = new VF.Beam([smo246835,smo246837,smo246838]);
const dirsmo251299 = smo246839.getStemDirection();
smo246839.setStemDirection(dirsmo251299);
smo246840.setStemDirection(dirsmo251299);
smo246841.setStemDirection(dirsmo251299);
const smo251299 = new VF.Beam([smo246839,smo246840,smo246841]);
const dirsmo251302 = smo249630.getStemDirection();
smo249630.setStemDirection(dirsmo251302);
smo249631.setStemDirection(dirsmo251302);
const smo251302 = new VF.Beam([smo249630,smo249631]);
const dirsmo251303 = smo249632.getStemDirection();
smo249632.setStemDirection(dirsmo251303);
smo249633.setStemDirection(dirsmo251303);
const smo251303 = new VF.Beam([smo249632,smo249633]);
 
// formatting measures in staff group smo245304
fmtsmo24685538.format([smo246855v0,smo249647v0], 281);
const stavesmo246855 = new VF.Stave(663, 789, 295);
stavesmo246855.setAttribute('id', 'stavesmo246855');
stavesmo246855.setBegBarType(VF.Barline.type.NONE);
stavesmo246855.setContext(context);
stavesmo246855.draw();
smo246855v0.draw(context, stavesmo246855);
smo251298.setContext(context);
smo251298.draw();
smo251299.setContext(context);
smo251299.draw();
const stavesmo249647 = new VF.Stave(663, 930, 295);
stavesmo249647.setAttribute('id', 'stavesmo249647');
stavesmo249647.setBegBarType(VF.Barline.type.NONE);
stavesmo249647.setContext(context);
stavesmo249647.draw();
smo249647v0.draw(context, stavesmo249647);
smo251302.setContext(context);
smo251302.draw();
smo251303.setContext(context);
smo251303.draw();
const fmtsmo24687439 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo246874v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246874v0ar = [];
const smo246856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246856'] = smo246856;
smo246856.setAttribute('id', 'smo246856');
smo246874v0ar.push(smo246856);
const smo246857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246857'] = smo246857;
smo246857.setAttribute('id', 'smo246857');
smo246874v0ar.push(smo246857);
const smo246858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246858'] = smo246858;
smo246858.setAttribute('id', 'smo246858');
smo246874v0ar.push(smo246858);
const smo246859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246859'] = smo246859;
smo246859.setAttribute('id', 'smo246859');
smo246874v0ar.push(smo246859);
const smo246860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo246860'] = smo246860;
smo246860.setAttribute('id', 'smo246860');
const smo2468600acc = new VF.Accidental('b');
smo246860.addModifier(smo2468600acc, 0);
const smo2468601acc = new VF.Accidental('b');
smo246860.addModifier(smo2468601acc, 1);
const smo2468602acc = new VF.Accidental('b');
smo246860.addModifier(smo2468602acc, 2);
smo246874v0ar.push(smo246860);
smo246874v0.addTickables(smo246874v0ar)
fmtsmo24687439.joinVoices([smo246874v0]);
const fmtsmo24966539 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo249665v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249665v0ar = [];
const smo249648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249648'] = smo249648;
smo249648.setAttribute('id', 'smo249648');
smo249665v0ar.push(smo249648);
const smo249649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo249649'] = smo249649;
smo249649.setAttribute('id', 'smo249649');
smo249665v0ar.push(smo249649);
const smo249650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249650'] = smo249650;
smo249650.setAttribute('id', 'smo249650');
smo249665v0ar.push(smo249650);
const smo249651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo249651'] = smo249651;
smo249651.setAttribute('id', 'smo249651');
smo249665v0ar.push(smo249651);
smo249665v0.addTickables(smo249665v0ar)
fmtsmo24966539.joinVoices([smo249665v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251306 = smo246857.getStemDirection();
smo246857.setStemDirection(dirsmo251306);
smo246858.setStemDirection(dirsmo251306);
smo246859.setStemDirection(dirsmo251306);
smo246860.setStemDirection(dirsmo251306);
const smo251306 = new VF.Beam([smo246857,smo246858,smo246859,smo246860]);
const dirsmo251309 = smo249648.getStemDirection();
smo249648.setStemDirection(dirsmo251309);
smo249649.setStemDirection(dirsmo251309);
const smo251309 = new VF.Beam([smo249648,smo249649]);
const dirsmo251310 = smo249650.getStemDirection();
smo249650.setStemDirection(dirsmo251310);
smo249651.setStemDirection(dirsmo251310);
const smo251310 = new VF.Beam([smo249650,smo249651]);
 
// formatting measures in staff group smo245304
fmtsmo24687439.format([smo246874v0,smo249665v0], 281);
const stavesmo246874 = new VF.Stave(958, 789, 295);
stavesmo246874.setAttribute('id', 'stavesmo246874');
stavesmo246874.setBegBarType(VF.Barline.type.NONE);
stavesmo246874.setContext(context);
stavesmo246874.draw();
smo246874v0.draw(context, stavesmo246874);
smo251306.setContext(context);
smo251306.draw();
const stavesmo249665 = new VF.Stave(958, 930, 295);
stavesmo249665.setAttribute('id', 'stavesmo249665');
stavesmo249665.setBegBarType(VF.Barline.type.NONE);
stavesmo249665.setContext(context);
stavesmo249665.draw();
smo249665v0.draw(context, stavesmo249665);
smo251309.setContext(context);
smo251309.draw();
smo251310.setContext(context);
smo251310.draw();
const fmtsmo24689640 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo246896v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246896v0ar = [];
const smo246875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246875'] = smo246875;
smo246875.setAttribute('id', 'smo246875');
smo246896v0ar.push(smo246875);
const smo246877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246877'] = smo246877;
smo246877.setAttribute('id', 'smo246877');
smo246896v0ar.push(smo246877);
const smo246878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246878'] = smo246878;
smo246878.setAttribute('id', 'smo246878');
smo246896v0ar.push(smo246878);
const smo246879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246879'] = smo246879;
smo246879.setAttribute('id', 'smo246879');
smo246896v0ar.push(smo246879);
const smo246880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo246880'] = smo246880;
smo246880.setAttribute('id', 'smo246880');
smo246896v0ar.push(smo246880);
const smo246881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo246881'] = smo246881;
smo246881.setAttribute('id', 'smo246881');
smo246896v0ar.push(smo246881);
const smo246882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246882'] = smo246882;
smo246882.setAttribute('id', 'smo246882');
smo246896v0ar.push(smo246882);
smo246896v0.addTickables(smo246896v0ar)
fmtsmo24689640.joinVoices([smo246896v0]);
const fmtsmo24968340 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo249683v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249683v0ar = [];
const smo249666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249666'] = smo249666;
smo249666.setAttribute('id', 'smo249666');
smo249683v0ar.push(smo249666);
const smo249667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249667'] = smo249667;
smo249667.setAttribute('id', 'smo249667');
smo249683v0ar.push(smo249667);
const smo249668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249668'] = smo249668;
smo249668.setAttribute('id', 'smo249668');
smo249683v0ar.push(smo249668);
const smo249669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo249669'] = smo249669;
smo249669.setAttribute('id', 'smo249669');
smo249683v0ar.push(smo249669);
smo249683v0.addTickables(smo249683v0ar)
fmtsmo24968340.joinVoices([smo249683v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251313 = smo246875.getStemDirection();
smo246875.setStemDirection(dirsmo251313);
smo246877.setStemDirection(dirsmo251313);
smo246878.setStemDirection(dirsmo251313);
smo246879.setStemDirection(dirsmo251313);
const smo251313 = new VF.Beam([smo246875,smo246877,smo246878,smo246879]);
const dirsmo251314 = smo246880.getStemDirection();
smo246880.setStemDirection(dirsmo251314);
smo246881.setStemDirection(dirsmo251314);
smo246882.setStemDirection(dirsmo251314);
const smo251314 = new VF.Beam([smo246880,smo246881,smo246882]);
const dirsmo251317 = smo249666.getStemDirection();
smo249666.setStemDirection(dirsmo251317);
smo249667.setStemDirection(dirsmo251317);
const smo251317 = new VF.Beam([smo249666,smo249667]);
const dirsmo251318 = smo249668.getStemDirection();
smo249668.setStemDirection(dirsmo251318);
smo249669.setStemDirection(dirsmo251318);
const smo251318 = new VF.Beam([smo249668,smo249669]);
 
// formatting measures in staff group smo245304
fmtsmo24689640.format([smo246896v0,smo249683v0], 281);
const stavesmo246896 = new VF.Stave(1253, 789, 295);
stavesmo246896.setAttribute('id', 'stavesmo246896');
stavesmo246896.setBegBarType(VF.Barline.type.NONE);
stavesmo246896.setContext(context);
stavesmo246896.draw();
smo246896v0.draw(context, stavesmo246896);
smo251313.setContext(context);
smo251313.draw();
smo251314.setContext(context);
smo251314.draw();
const stavesmo249683 = new VF.Stave(1253, 930, 295);
stavesmo249683.setAttribute('id', 'stavesmo249683');
stavesmo249683.setBegBarType(VF.Barline.type.NONE);
stavesmo249683.setContext(context);
stavesmo249683.draw();
smo249683v0.draw(context, stavesmo249683);
smo251317.setContext(context);
smo251317.draw();
smo251318.setContext(context);
smo251318.draw();
const fmtsmo24691441 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo246914v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246914v0ar = [];
const smo246897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246897'] = smo246897;
smo246897.setAttribute('id', 'smo246897');
smo246914v0ar.push(smo246897);
const smo246898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo246898'] = smo246898;
smo246898.setAttribute('id', 'smo246898');
smo246914v0ar.push(smo246898);
const smo246899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246899'] = smo246899;
smo246899.setAttribute('id', 'smo246899');
smo246914v0ar.push(smo246899);
const smo246900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246900'] = smo246900;
smo246900.setAttribute('id', 'smo246900');
const smo2469000acc = new VF.Accidental('b');
smo246900.addModifier(smo2469000acc, 0);
smo246914v0ar.push(smo246900);
smo246914v0.addTickables(smo246914v0ar)
fmtsmo24691441.joinVoices([smo246914v0]);
const fmtsmo24970141 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo249701v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249701v0ar = [];
const smo249684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249684'] = smo249684;
smo249684.setAttribute('id', 'smo249684');
smo249701v0ar.push(smo249684);
const smo249685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249685'] = smo249685;
smo249685.setAttribute('id', 'smo249685');
smo249701v0ar.push(smo249685);
const smo249686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249686'] = smo249686;
smo249686.setAttribute('id', 'smo249686');
smo249701v0ar.push(smo249686);
const smo249687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249687'] = smo249687;
smo249687.setAttribute('id', 'smo249687');
smo249701v0ar.push(smo249687);
smo249701v0.addTickables(smo249701v0ar)
fmtsmo24970141.joinVoices([smo249701v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251321 = smo246898.getStemDirection();
smo246898.setStemDirection(dirsmo251321);
smo246899.setStemDirection(dirsmo251321);
smo246900.setStemDirection(dirsmo251321);
const smo251321 = new VF.Beam([smo246898,smo246899,smo246900]);
const dirsmo251324 = smo249684.getStemDirection();
smo249684.setStemDirection(dirsmo251324);
smo249685.setStemDirection(dirsmo251324);
const smo251324 = new VF.Beam([smo249684,smo249685]);
const dirsmo251325 = smo249686.getStemDirection();
smo249686.setStemDirection(dirsmo251325);
smo249687.setStemDirection(dirsmo251325);
const smo251325 = new VF.Beam([smo249686,smo249687]);
 
// formatting measures in staff group smo245304
fmtsmo24691441.format([smo246914v0,smo249701v0], 281);
const stavesmo246914 = new VF.Stave(1548, 789, 295);
stavesmo246914.setAttribute('id', 'stavesmo246914');
stavesmo246914.setBegBarType(VF.Barline.type.NONE);
stavesmo246914.setContext(context);
stavesmo246914.draw();
smo246914v0.draw(context, stavesmo246914);
smo251321.setContext(context);
smo251321.draw();
const stavesmo249701 = new VF.Stave(1548, 930, 295);
stavesmo249701.setAttribute('id', 'stavesmo249701');
stavesmo249701.setBegBarType(VF.Barline.type.NONE);
stavesmo249701.setContext(context);
stavesmo249701.draw();
smo249701v0.draw(context, stavesmo249701);
smo251324.setContext(context);
smo251324.draw();
smo251325.setContext(context);
smo251325.draw();
const rightsmo245304stavesmo2469141 = new VF.StaveConnector(stavesmo246914, stavesmo249701).setType(0);
rightsmo245304stavesmo2469141.setContext(context).draw();
const fmtsmo24693542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo246935v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246935v0ar = [];
const smo246915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246915'] = smo246915;
smo246915.setAttribute('id', 'smo246915');
smo246935v0ar.push(smo246915);
const smo246917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246917'] = smo246917;
smo246917.setAttribute('id', 'smo246917');
smo246935v0ar.push(smo246917);
const smo246918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246918'] = smo246918;
smo246918.setAttribute('id', 'smo246918');
smo246935v0ar.push(smo246918);
const smo246919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246919'] = smo246919;
smo246919.setAttribute('id', 'smo246919');
smo246935v0ar.push(smo246919);
const smo246920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246920'] = smo246920;
smo246920.setAttribute('id', 'smo246920');
smo246935v0ar.push(smo246920);
const smo246921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246921'] = smo246921;
smo246921.setAttribute('id', 'smo246921');
smo246935v0ar.push(smo246921);
smo246935v0.addTickables(smo246935v0ar)
fmtsmo24693542.joinVoices([smo246935v0]);
const fmtsmo24971942 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo249719v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249719v0ar = [];
const smo249702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249702'] = smo249702;
smo249702.setAttribute('id', 'smo249702');
smo249719v0ar.push(smo249702);
const smo249703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249703'] = smo249703;
smo249703.setAttribute('id', 'smo249703');
smo249719v0ar.push(smo249703);
const smo249704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249704'] = smo249704;
smo249704.setAttribute('id', 'smo249704');
smo249719v0ar.push(smo249704);
const smo249705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo249705'] = smo249705;
smo249705.setAttribute('id', 'smo249705');
const smo2497051acc = new VF.Accidental('b');
smo249705.addModifier(smo2497051acc, 1);
smo249719v0ar.push(smo249705);
smo249719v0.addTickables(smo249719v0ar)
fmtsmo24971942.joinVoices([smo249719v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251336 = smo246915.getStemDirection();
smo246915.setStemDirection(dirsmo251336);
smo246917.setStemDirection(dirsmo251336);
smo246918.setStemDirection(dirsmo251336);
const smo251336 = new VF.Beam([smo246915,smo246917,smo246918]);
const dirsmo251337 = smo246919.getStemDirection();
smo246919.setStemDirection(dirsmo251337);
smo246920.setStemDirection(dirsmo251337);
smo246921.setStemDirection(dirsmo251337);
const smo251337 = new VF.Beam([smo246919,smo246920,smo246921]);
const dirsmo251340 = smo249702.getStemDirection();
smo249702.setStemDirection(dirsmo251340);
smo249703.setStemDirection(dirsmo251340);
const smo251340 = new VF.Beam([smo249702,smo249703]);
const dirsmo251341 = smo249704.getStemDirection();
smo249704.setStemDirection(dirsmo251341);
smo249705.setStemDirection(dirsmo251341);
const smo251341 = new VF.Beam([smo249704,smo249705]);
 
// formatting measures in staff group smo245304
fmtsmo24693542.format([smo246935v0,smo249719v0], 237);
const stavesmo246935 = new VF.Stave(73, 1148, 295);
stavesmo246935.setAttribute('id', 'stavesmo246935');
stavesmo246935.setBegBarType(1);
stavesmo246935.addClef('treble');
stavesmo246935.setContext(context);
stavesmo246935.draw();
smo246935v0.draw(context, stavesmo246935);
smo251336.setContext(context);
smo251336.draw();
smo251337.setContext(context);
smo251337.draw();
const stavesmo249719 = new VF.Stave(73, 1303, 295);
stavesmo249719.setAttribute('id', 'stavesmo249719');
stavesmo249719.setBegBarType(1);
stavesmo249719.addClef('bass');
stavesmo249719.setContext(context);
stavesmo249719.draw();
smo249719v0.draw(context, stavesmo249719);
smo251340.setContext(context);
smo251340.draw();
smo251341.setContext(context);
smo251341.draw();
const leftsmo245304stavesmo2469351 = new VF.StaveConnector(stavesmo246935, stavesmo249719).setType(3);
leftsmo245304stavesmo2469351.setContext(context).draw();
const fmtsmo24695343 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo246953v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246953v0ar = [];
const smo246936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246936'] = smo246936;
smo246936.setAttribute('id', 'smo246936');
smo246953v0ar.push(smo246936);
const smo246937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246937'] = smo246937;
smo246937.setAttribute('id', 'smo246937');
smo246953v0ar.push(smo246937);
const smo246938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
noteHash['smo246938'] = smo246938;
smo246938.setAttribute('id', 'smo246938');
smo246953v0ar.push(smo246938);
const smo246939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
noteHash['smo246939'] = smo246939;
smo246939.setAttribute('id', 'smo246939');
smo246953v0ar.push(smo246939);
smo246953v0.addTickables(smo246953v0ar)
fmtsmo24695343.joinVoices([smo246953v0]);
const fmtsmo24973743 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo249737v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249737v0ar = [];
const smo249720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249720'] = smo249720;
smo249720.setAttribute('id', 'smo249720');
smo249737v0ar.push(smo249720);
const smo249721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo249721'] = smo249721;
smo249721.setAttribute('id', 'smo249721');
smo249737v0ar.push(smo249721);
const smo249722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249722'] = smo249722;
smo249722.setAttribute('id', 'smo249722');
smo249737v0ar.push(smo249722);
const smo249723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
noteHash['smo249723'] = smo249723;
smo249723.setAttribute('id', 'smo249723');
const smo2497230acc = new VF.Accidental('b');
smo249723.addModifier(smo2497230acc, 0);
const smo2497231acc = new VF.Accidental('b');
smo249723.addModifier(smo2497231acc, 1);
smo249737v0ar.push(smo249723);
smo249737v0.addTickables(smo249737v0ar)
fmtsmo24973743.joinVoices([smo249737v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251344 = smo246937.getStemDirection();
smo246937.setStemDirection(dirsmo251344);
smo246938.setStemDirection(dirsmo251344);
smo246939.setStemDirection(dirsmo251344);
const smo251344 = new VF.Beam([smo246937,smo246938,smo246939]);
const dirsmo251347 = smo249720.getStemDirection();
smo249720.setStemDirection(dirsmo251347);
smo249721.setStemDirection(dirsmo251347);
const smo251347 = new VF.Beam([smo249720,smo249721]);
const dirsmo251348 = smo249722.getStemDirection();
smo249722.setStemDirection(dirsmo251348);
smo249723.setStemDirection(dirsmo251348);
const smo251348 = new VF.Beam([smo249722,smo249723]);
 
// formatting measures in staff group smo245304
fmtsmo24695343.format([smo246953v0,smo249737v0], 281);
const stavesmo246953 = new VF.Stave(368, 1148, 295);
stavesmo246953.setAttribute('id', 'stavesmo246953');
stavesmo246953.setBegBarType(VF.Barline.type.NONE);
stavesmo246953.setContext(context);
stavesmo246953.draw();
smo246953v0.draw(context, stavesmo246953);
smo251344.setContext(context);
smo251344.draw();
const stavesmo249737 = new VF.Stave(368, 1303, 295);
stavesmo249737.setAttribute('id', 'stavesmo249737');
stavesmo249737.setBegBarType(VF.Barline.type.NONE);
stavesmo249737.setContext(context);
stavesmo249737.draw();
smo249737v0.draw(context, stavesmo249737);
smo251347.setContext(context);
smo251347.draw();
smo251348.setContext(context);
smo251348.draw();
const fmtsmo24697644 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo246976v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246976v0ar = [];
const smo246954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
noteHash['smo246954'] = smo246954;
smo246954.setAttribute('id', 'smo246954');
const smo2469540acc = new VF.Accidental('b');
smo246954.addModifier(smo2469540acc, 0);
const smo2469542acc = new VF.Accidental('b');
smo246954.addModifier(smo2469542acc, 2);
smo246976v0ar.push(smo246954);
const smo246956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo246956'] = smo246956;
smo246956.setAttribute('id', 'smo246956');
smo246976v0ar.push(smo246956);
const smo246957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246957'] = smo246957;
smo246957.setAttribute('id', 'smo246957');
smo246976v0ar.push(smo246957);
const smo246958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246958'] = smo246958;
smo246958.setAttribute('id', 'smo246958');
smo246976v0ar.push(smo246958);
const smo246959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo246959'] = smo246959;
smo246959.setAttribute('id', 'smo246959');
smo246976v0ar.push(smo246959);
const smo246960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo246960'] = smo246960;
smo246960.setAttribute('id', 'smo246960');
smo246976v0ar.push(smo246960);
const smo246961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo246961'] = smo246961;
smo246961.setAttribute('id', 'smo246961');
smo246976v0ar.push(smo246961);
const smo246962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo246962'] = smo246962;
smo246962.setAttribute('id', 'smo246962');
smo246976v0ar.push(smo246962);
smo246976v0.addTickables(smo246976v0ar)
fmtsmo24697644.joinVoices([smo246976v0]);
const fmtsmo24975544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo249755v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249755v0ar = [];
const smo249738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo249738'] = smo249738;
smo249738.setAttribute('id', 'smo249738');
smo249755v0ar.push(smo249738);
const smo249739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo249739'] = smo249739;
smo249739.setAttribute('id', 'smo249739');
const smo2497391acc = new VF.Accidental('b');
smo249739.addModifier(smo2497391acc, 1);
smo249755v0ar.push(smo249739);
const smo249740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo249740'] = smo249740;
smo249740.setAttribute('id', 'smo249740');
smo249755v0ar.push(smo249740);
const smo249741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo249741'] = smo249741;
smo249741.setAttribute('id', 'smo249741');
smo249755v0ar.push(smo249741);
smo249755v0.addTickables(smo249755v0ar)
fmtsmo24975544.joinVoices([smo249755v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251351 = smo246954.getStemDirection();
smo246954.setStemDirection(dirsmo251351);
smo246956.setStemDirection(dirsmo251351);
smo246957.setStemDirection(dirsmo251351);
smo246958.setStemDirection(dirsmo251351);
const smo251351 = new VF.Beam([smo246954,smo246956,smo246957,smo246958]);
const dirsmo251352 = smo246959.getStemDirection();
smo246959.setStemDirection(dirsmo251352);
smo246960.setStemDirection(dirsmo251352);
smo246961.setStemDirection(dirsmo251352);
smo246962.setStemDirection(dirsmo251352);
const smo251352 = new VF.Beam([smo246959,smo246960,smo246961,smo246962]);
const dirsmo251355 = smo249738.getStemDirection();
smo249738.setStemDirection(dirsmo251355);
smo249739.setStemDirection(dirsmo251355);
const smo251355 = new VF.Beam([smo249738,smo249739]);
const dirsmo251356 = smo249740.getStemDirection();
smo249740.setStemDirection(dirsmo251356);
smo249741.setStemDirection(dirsmo251356);
const smo251356 = new VF.Beam([smo249740,smo249741]);
 
// formatting measures in staff group smo245304
fmtsmo24697644.format([smo246976v0,smo249755v0], 281);
const stavesmo246976 = new VF.Stave(663, 1148, 295);
stavesmo246976.setAttribute('id', 'stavesmo246976');
stavesmo246976.setBegBarType(VF.Barline.type.NONE);
stavesmo246976.setContext(context);
stavesmo246976.draw();
smo246976v0.draw(context, stavesmo246976);
smo251351.setContext(context);
smo251351.draw();
smo251352.setContext(context);
smo251352.draw();
const stavesmo249755 = new VF.Stave(663, 1303, 295);
stavesmo249755.setAttribute('id', 'stavesmo249755');
stavesmo249755.setBegBarType(VF.Barline.type.NONE);
stavesmo249755.setContext(context);
stavesmo249755.draw();
smo249755v0.draw(context, stavesmo249755);
smo251355.setContext(context);
smo251355.draw();
smo251356.setContext(context);
smo251356.draw();
const fmtsmo24699445 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo246994v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo246994v0ar = [];
const smo246977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246977'] = smo246977;
smo246977.setAttribute('id', 'smo246977');
smo246994v0ar.push(smo246977);
const smo246978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo246978'] = smo246978;
smo246978.setAttribute('id', 'smo246978');
smo246994v0ar.push(smo246978);
const smo246979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo246979'] = smo246979;
smo246979.setAttribute('id', 'smo246979');
smo246994v0ar.push(smo246979);
const smo246980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo246980'] = smo246980;
smo246980.setAttribute('id', 'smo246980');
const smo2469800acc = new VF.Accidental('b');
smo246980.addModifier(smo2469800acc, 0);
smo246994v0ar.push(smo246980);
smo246994v0.addTickables(smo246994v0ar)
fmtsmo24699445.joinVoices([smo246994v0]);
const fmtsmo24977345 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo249773v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249773v0ar = [];
const smo249756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249756'] = smo249756;
smo249756.setAttribute('id', 'smo249756');
smo249773v0ar.push(smo249756);
const smo249757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249757'] = smo249757;
smo249757.setAttribute('id', 'smo249757');
smo249773v0ar.push(smo249757);
const smo249758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo249758'] = smo249758;
smo249758.setAttribute('id', 'smo249758');
smo249773v0ar.push(smo249758);
const smo249759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo249759'] = smo249759;
smo249759.setAttribute('id', 'smo249759');
smo249773v0ar.push(smo249759);
smo249773v0.addTickables(smo249773v0ar)
fmtsmo24977345.joinVoices([smo249773v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251359 = smo246978.getStemDirection();
smo246978.setStemDirection(dirsmo251359);
smo246979.setStemDirection(dirsmo251359);
smo246980.setStemDirection(dirsmo251359);
const smo251359 = new VF.Beam([smo246978,smo246979,smo246980]);
const dirsmo251362 = smo249756.getStemDirection();
smo249756.setStemDirection(dirsmo251362);
smo249757.setStemDirection(dirsmo251362);
const smo251362 = new VF.Beam([smo249756,smo249757]);
const dirsmo251363 = smo249758.getStemDirection();
smo249758.setStemDirection(dirsmo251363);
smo249759.setStemDirection(dirsmo251363);
const smo251363 = new VF.Beam([smo249758,smo249759]);
 
// formatting measures in staff group smo245304
fmtsmo24699445.format([smo246994v0,smo249773v0], 281);
const stavesmo246994 = new VF.Stave(958, 1148, 295);
stavesmo246994.setAttribute('id', 'stavesmo246994');
stavesmo246994.setBegBarType(VF.Barline.type.NONE);
stavesmo246994.setContext(context);
stavesmo246994.draw();
smo246994v0.draw(context, stavesmo246994);
smo251359.setContext(context);
smo251359.draw();
const stavesmo249773 = new VF.Stave(958, 1303, 295);
stavesmo249773.setAttribute('id', 'stavesmo249773');
stavesmo249773.setBegBarType(VF.Barline.type.NONE);
stavesmo249773.setContext(context);
stavesmo249773.draw();
smo249773v0.draw(context, stavesmo249773);
smo251362.setContext(context);
smo251362.draw();
smo251363.setContext(context);
smo251363.draw();
const fmtsmo24701546 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo247015v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247015v0ar = [];
const smo246995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246995'] = smo246995;
smo246995.setAttribute('id', 'smo246995');
smo247015v0ar.push(smo246995);
const smo246997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246997'] = smo246997;
smo246997.setAttribute('id', 'smo246997');
smo247015v0ar.push(smo246997);
const smo246998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo246998'] = smo246998;
smo246998.setAttribute('id', 'smo246998');
smo247015v0ar.push(smo246998);
const smo246999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo246999'] = smo246999;
smo246999.setAttribute('id', 'smo246999');
smo247015v0ar.push(smo246999);
const smo247000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo247000'] = smo247000;
smo247000.setAttribute('id', 'smo247000');
smo247015v0ar.push(smo247000);
const smo247001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247001'] = smo247001;
smo247001.setAttribute('id', 'smo247001');
smo247015v0ar.push(smo247001);
smo247015v0.addTickables(smo247015v0ar)
fmtsmo24701546.joinVoices([smo247015v0]);
const fmtsmo24979146 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo249791v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249791v0ar = [];
const smo249774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249774'] = smo249774;
smo249774.setAttribute('id', 'smo249774');
smo249791v0ar.push(smo249774);
const smo249775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249775'] = smo249775;
smo249775.setAttribute('id', 'smo249775');
smo249791v0ar.push(smo249775);
const smo249776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249776'] = smo249776;
smo249776.setAttribute('id', 'smo249776');
smo249791v0ar.push(smo249776);
const smo249777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo249777'] = smo249777;
smo249777.setAttribute('id', 'smo249777');
const smo2497771acc = new VF.Accidental('b');
smo249777.addModifier(smo2497771acc, 1);
smo249791v0ar.push(smo249777);
smo249791v0.addTickables(smo249791v0ar)
fmtsmo24979146.joinVoices([smo249791v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251366 = smo246995.getStemDirection();
smo246995.setStemDirection(dirsmo251366);
smo246997.setStemDirection(dirsmo251366);
smo246998.setStemDirection(dirsmo251366);
const smo251366 = new VF.Beam([smo246995,smo246997,smo246998]);
const dirsmo251367 = smo246999.getStemDirection();
smo246999.setStemDirection(dirsmo251367);
smo247000.setStemDirection(dirsmo251367);
smo247001.setStemDirection(dirsmo251367);
const smo251367 = new VF.Beam([smo246999,smo247000,smo247001]);
const dirsmo251370 = smo249774.getStemDirection();
smo249774.setStemDirection(dirsmo251370);
smo249775.setStemDirection(dirsmo251370);
const smo251370 = new VF.Beam([smo249774,smo249775]);
const dirsmo251371 = smo249776.getStemDirection();
smo249776.setStemDirection(dirsmo251371);
smo249777.setStemDirection(dirsmo251371);
const smo251371 = new VF.Beam([smo249776,smo249777]);
 
// formatting measures in staff group smo245304
fmtsmo24701546.format([smo247015v0,smo249791v0], 281);
const stavesmo247015 = new VF.Stave(1253, 1148, 295);
stavesmo247015.setAttribute('id', 'stavesmo247015');
stavesmo247015.setBegBarType(VF.Barline.type.NONE);
stavesmo247015.setContext(context);
stavesmo247015.draw();
smo247015v0.draw(context, stavesmo247015);
smo251366.setContext(context);
smo251366.draw();
smo251367.setContext(context);
smo251367.draw();
const stavesmo249791 = new VF.Stave(1253, 1303, 295);
stavesmo249791.setAttribute('id', 'stavesmo249791');
stavesmo249791.setBegBarType(VF.Barline.type.NONE);
stavesmo249791.setContext(context);
stavesmo249791.draw();
smo249791v0.draw(context, stavesmo249791);
smo251370.setContext(context);
smo251370.draw();
smo251371.setContext(context);
smo251371.draw();
const fmtsmo24703447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo247034v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247034v0ar = [];
const smo247016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247016'] = smo247016;
smo247016.setAttribute('id', 'smo247016');
smo247034v0ar.push(smo247016);
const smo247017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247017'] = smo247017;
smo247017.setAttribute('id', 'smo247017');
smo247034v0ar.push(smo247017);
const smo247018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247018'] = smo247018;
smo247018.setAttribute('id', 'smo247018');
smo247034v0ar.push(smo247018);
const smo247019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo247019'] = smo247019;
smo247019.setAttribute('id', 'smo247019');
smo247034v0ar.push(smo247019);
const smo247020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo247020'] = smo247020;
smo247020.setAttribute('id', 'smo247020');
const smo2470200acc = new VF.Accidental('b');
smo247020.addModifier(smo2470200acc, 0);
const smo2470201acc = new VF.Accidental('b');
smo247020.addModifier(smo2470201acc, 1);
const smo2470202acc = new VF.Accidental('b');
smo247020.addModifier(smo2470202acc, 2);
smo247034v0ar.push(smo247020);
smo247034v0.addTickables(smo247034v0ar)
fmtsmo24703447.joinVoices([smo247034v0]);
const fmtsmo24980947 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo249809v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249809v0ar = [];
const smo249792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo249792'] = smo249792;
smo249792.setAttribute('id', 'smo249792');
smo249809v0ar.push(smo249792);
const smo249793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo249793'] = smo249793;
smo249793.setAttribute('id', 'smo249793');
smo249809v0ar.push(smo249793);
const smo249794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo249794'] = smo249794;
smo249794.setAttribute('id', 'smo249794');
smo249809v0ar.push(smo249794);
const smo249795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo249795'] = smo249795;
smo249795.setAttribute('id', 'smo249795');
smo249809v0ar.push(smo249795);
smo249809v0.addTickables(smo249809v0ar)
fmtsmo24980947.joinVoices([smo249809v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251374 = smo247017.getStemDirection();
smo247017.setStemDirection(dirsmo251374);
smo247018.setStemDirection(dirsmo251374);
smo247019.setStemDirection(dirsmo251374);
smo247020.setStemDirection(dirsmo251374);
const smo251374 = new VF.Beam([smo247017,smo247018,smo247019,smo247020]);
const dirsmo251377 = smo249792.getStemDirection();
smo249792.setStemDirection(dirsmo251377);
smo249793.setStemDirection(dirsmo251377);
const smo251377 = new VF.Beam([smo249792,smo249793]);
const dirsmo251378 = smo249794.getStemDirection();
smo249794.setStemDirection(dirsmo251378);
smo249795.setStemDirection(dirsmo251378);
const smo251378 = new VF.Beam([smo249794,smo249795]);
 
// formatting measures in staff group smo245304
fmtsmo24703447.format([smo247034v0,smo249809v0], 281);
const stavesmo247034 = new VF.Stave(1548, 1148, 295);
stavesmo247034.setAttribute('id', 'stavesmo247034');
stavesmo247034.setBegBarType(VF.Barline.type.NONE);
stavesmo247034.setContext(context);
stavesmo247034.draw();
smo247034v0.draw(context, stavesmo247034);
smo251374.setContext(context);
smo251374.draw();
const stavesmo249809 = new VF.Stave(1548, 1303, 295);
stavesmo249809.setAttribute('id', 'stavesmo249809');
stavesmo249809.setBegBarType(VF.Barline.type.NONE);
stavesmo249809.setContext(context);
stavesmo249809.draw();
smo249809v0.draw(context, stavesmo249809);
smo251377.setContext(context);
smo251377.draw();
smo251378.setContext(context);
smo251378.draw();
const rightsmo245304stavesmo2470341 = new VF.StaveConnector(stavesmo247034, stavesmo249809).setType(0);
rightsmo245304stavesmo2470341.setContext(context).draw();
const fmtsmo24705648 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo247056v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247056v0ar = [];
const smo247035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo247035'] = smo247035;
smo247035.setAttribute('id', 'smo247035');
smo247056v0ar.push(smo247035);
const smo247037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247037'] = smo247037;
smo247037.setAttribute('id', 'smo247037');
smo247056v0ar.push(smo247037);
const smo247038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo247038'] = smo247038;
smo247038.setAttribute('id', 'smo247038');
smo247056v0ar.push(smo247038);
const smo247039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo247039'] = smo247039;
smo247039.setAttribute('id', 'smo247039');
smo247056v0ar.push(smo247039);
const smo247040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo247040'] = smo247040;
smo247040.setAttribute('id', 'smo247040');
smo247056v0ar.push(smo247040);
const smo247041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo247041'] = smo247041;
smo247041.setAttribute('id', 'smo247041');
smo247056v0ar.push(smo247041);
const smo247042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo247042'] = smo247042;
smo247042.setAttribute('id', 'smo247042');
smo247056v0ar.push(smo247042);
smo247056v0.addTickables(smo247056v0ar)
fmtsmo24705648.joinVoices([smo247056v0]);
const fmtsmo24982748 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo249827v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249827v0ar = [];
const smo249810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249810'] = smo249810;
smo249810.setAttribute('id', 'smo249810');
smo249827v0ar.push(smo249810);
const smo249811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249811'] = smo249811;
smo249811.setAttribute('id', 'smo249811');
smo249827v0ar.push(smo249811);
const smo249812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249812'] = smo249812;
smo249812.setAttribute('id', 'smo249812');
smo249827v0ar.push(smo249812);
const smo249813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo249813'] = smo249813;
smo249813.setAttribute('id', 'smo249813');
smo249827v0ar.push(smo249813);
smo249827v0.addTickables(smo249827v0ar)
fmtsmo24982748.joinVoices([smo249827v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251389 = smo247035.getStemDirection();
smo247035.setStemDirection(dirsmo251389);
smo247037.setStemDirection(dirsmo251389);
smo247038.setStemDirection(dirsmo251389);
smo247039.setStemDirection(dirsmo251389);
const smo251389 = new VF.Beam([smo247035,smo247037,smo247038,smo247039]);
const dirsmo251390 = smo247040.getStemDirection();
smo247040.setStemDirection(dirsmo251390);
smo247041.setStemDirection(dirsmo251390);
smo247042.setStemDirection(dirsmo251390);
const smo251390 = new VF.Beam([smo247040,smo247041,smo247042]);
const dirsmo251393 = smo249810.getStemDirection();
smo249810.setStemDirection(dirsmo251393);
smo249811.setStemDirection(dirsmo251393);
const smo251393 = new VF.Beam([smo249810,smo249811]);
const dirsmo251394 = smo249812.getStemDirection();
smo249812.setStemDirection(dirsmo251394);
smo249813.setStemDirection(dirsmo251394);
const smo251394 = new VF.Beam([smo249812,smo249813]);
 
// formatting measures in staff group smo245304
fmtsmo24705648.format([smo247056v0,smo249827v0], 237);
const stavesmo247056 = new VF.Stave(73, 1501, 295);
stavesmo247056.setAttribute('id', 'stavesmo247056');
stavesmo247056.setBegBarType(1);
stavesmo247056.addClef('treble');
stavesmo247056.setContext(context);
stavesmo247056.draw();
smo247056v0.draw(context, stavesmo247056);
smo251389.setContext(context);
smo251389.draw();
smo251390.setContext(context);
smo251390.draw();
const stavesmo249827 = new VF.Stave(73, 1657, 295);
stavesmo249827.setAttribute('id', 'stavesmo249827');
stavesmo249827.setBegBarType(1);
stavesmo249827.addClef('bass');
stavesmo249827.setContext(context);
stavesmo249827.draw();
smo249827v0.draw(context, stavesmo249827);
smo251393.setContext(context);
smo251393.draw();
smo251394.setContext(context);
smo251394.draw();
const leftsmo245304stavesmo2470561 = new VF.StaveConnector(stavesmo247056, stavesmo249827).setType(3);
leftsmo245304stavesmo2470561.setContext(context).draw();
const fmtsmo24707449 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo247074v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247074v0ar = [];
const smo247057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247057'] = smo247057;
smo247057.setAttribute('id', 'smo247057');
smo247074v0ar.push(smo247057);
const smo247058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247058'] = smo247058;
smo247058.setAttribute('id', 'smo247058');
smo247074v0ar.push(smo247058);
const smo247059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247059'] = smo247059;
smo247059.setAttribute('id', 'smo247059');
smo247074v0ar.push(smo247059);
const smo247060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo247060'] = smo247060;
smo247060.setAttribute('id', 'smo247060');
smo247074v0ar.push(smo247060);
smo247074v0.addTickables(smo247074v0ar)
fmtsmo24707449.joinVoices([smo247074v0]);
const fmtsmo24984549 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo249845v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249845v0ar = [];
const smo249828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249828'] = smo249828;
smo249828.setAttribute('id', 'smo249828');
smo249845v0ar.push(smo249828);
const smo249829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249829'] = smo249829;
smo249829.setAttribute('id', 'smo249829');
smo249845v0ar.push(smo249829);
const smo249830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249830'] = smo249830;
smo249830.setAttribute('id', 'smo249830');
smo249845v0ar.push(smo249830);
const smo249831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo249831'] = smo249831;
smo249831.setAttribute('id', 'smo249831');
smo249845v0ar.push(smo249831);
smo249845v0.addTickables(smo249845v0ar)
fmtsmo24984549.joinVoices([smo249845v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251397 = smo247058.getStemDirection();
smo247058.setStemDirection(dirsmo251397);
smo247059.setStemDirection(dirsmo251397);
smo247060.setStemDirection(dirsmo251397);
const smo251397 = new VF.Beam([smo247058,smo247059,smo247060]);
const dirsmo251400 = smo249828.getStemDirection();
smo249828.setStemDirection(dirsmo251400);
smo249829.setStemDirection(dirsmo251400);
const smo251400 = new VF.Beam([smo249828,smo249829]);
 
// formatting measures in staff group smo245304
fmtsmo24707449.format([smo247074v0,smo249845v0], 281);
const stavesmo247074 = new VF.Stave(368, 1501, 295);
stavesmo247074.setAttribute('id', 'stavesmo247074');
stavesmo247074.setBegBarType(VF.Barline.type.NONE);
stavesmo247074.setContext(context);
stavesmo247074.draw();
smo247074v0.draw(context, stavesmo247074);
smo251397.setContext(context);
smo251397.draw();
const stavesmo249845 = new VF.Stave(368, 1657, 295);
stavesmo249845.setAttribute('id', 'stavesmo249845');
stavesmo249845.setBegBarType(VF.Barline.type.NONE);
stavesmo249845.setContext(context);
stavesmo249845.draw();
smo249845v0.draw(context, stavesmo249845);
smo251400.setContext(context);
smo251400.draw();
const fmtsmo24709650 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo247096v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247096v0ar = [];
const smo247075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo247075'] = smo247075;
smo247075.setAttribute('id', 'smo247075');
smo247096v0ar.push(smo247075);
const smo247076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247076'] = smo247076;
smo247076.setAttribute('id', 'smo247076');
smo247096v0ar.push(smo247076);
const smo247077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo247077'] = smo247077;
smo247077.setAttribute('id', 'smo247077');
smo247096v0ar.push(smo247077);
const smo247078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo247078'] = smo247078;
smo247078.setAttribute('id', 'smo247078');
smo247096v0ar.push(smo247078);
const smo247079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo247079'] = smo247079;
smo247079.setAttribute('id', 'smo247079');
smo247096v0ar.push(smo247079);
const smo247080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247080'] = smo247080;
smo247080.setAttribute('id', 'smo247080');
smo247096v0ar.push(smo247080);
const smo247081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo247081'] = smo247081;
smo247081.setAttribute('id', 'smo247081');
smo247096v0ar.push(smo247081);
const smo247082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247082'] = smo247082;
smo247082.setAttribute('id', 'smo247082');
smo247096v0ar.push(smo247082);
smo247096v0.addTickables(smo247096v0ar)
fmtsmo24709650.joinVoices([smo247096v0]);
const fmtsmo24986350 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo249863v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249863v0ar = [];
const smo249846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo249846'] = smo249846;
smo249846.setAttribute('id', 'smo249846');
smo249863v0ar.push(smo249846);
const smo249847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249847'] = smo249847;
smo249847.setAttribute('id', 'smo249847');
smo249863v0ar.push(smo249847);
const smo249848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo249848'] = smo249848;
smo249848.setAttribute('id', 'smo249848');
const smo2498480acc = new VF.Accidental('b');
smo249848.addModifier(smo2498480acc, 0);
const smo2498481acc = new VF.Accidental('b');
smo249848.addModifier(smo2498481acc, 1);
smo249863v0ar.push(smo249848);
const smo249849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249849'] = smo249849;
smo249849.setAttribute('id', 'smo249849');
smo249863v0ar.push(smo249849);
smo249863v0.addTickables(smo249863v0ar)
fmtsmo24986350.joinVoices([smo249863v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251403 = smo247075.getStemDirection();
smo247075.setStemDirection(dirsmo251403);
smo247076.setStemDirection(dirsmo251403);
smo247077.setStemDirection(dirsmo251403);
smo247078.setStemDirection(dirsmo251403);
const smo251403 = new VF.Beam([smo247075,smo247076,smo247077,smo247078]);
const dirsmo251404 = smo247079.getStemDirection();
smo247079.setStemDirection(dirsmo251404);
smo247080.setStemDirection(dirsmo251404);
smo247081.setStemDirection(dirsmo251404);
smo247082.setStemDirection(dirsmo251404);
const smo251404 = new VF.Beam([smo247079,smo247080,smo247081,smo247082]);
const dirsmo251407 = smo249846.getStemDirection();
smo249846.setStemDirection(dirsmo251407);
smo249847.setStemDirection(dirsmo251407);
const smo251407 = new VF.Beam([smo249846,smo249847]);
const dirsmo251408 = smo249848.getStemDirection();
smo249848.setStemDirection(dirsmo251408);
smo249849.setStemDirection(dirsmo251408);
const smo251408 = new VF.Beam([smo249848,smo249849]);
 
// formatting measures in staff group smo245304
fmtsmo24709650.format([smo247096v0,smo249863v0], 281);
const stavesmo247096 = new VF.Stave(663, 1501, 295);
stavesmo247096.setAttribute('id', 'stavesmo247096');
stavesmo247096.setBegBarType(VF.Barline.type.NONE);
stavesmo247096.setContext(context);
stavesmo247096.draw();
smo247096v0.draw(context, stavesmo247096);
smo251403.setContext(context);
smo251403.draw();
smo251404.setContext(context);
smo251404.draw();
const stavesmo249863 = new VF.Stave(663, 1657, 295);
stavesmo249863.setAttribute('id', 'stavesmo249863');
stavesmo249863.setBegBarType(VF.Barline.type.NONE);
stavesmo249863.setContext(context);
stavesmo249863.draw();
smo249863v0.draw(context, stavesmo249863);
smo251407.setContext(context);
smo251407.draw();
smo251408.setContext(context);
smo251408.draw();
const fmtsmo24711851 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo247118v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247118v0ar = [];
const smo247097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo247097'] = smo247097;
smo247097.setAttribute('id', 'smo247097');
smo247118v0ar.push(smo247097);
const smo247098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247098'] = smo247098;
smo247098.setAttribute('id', 'smo247098');
smo247118v0ar.push(smo247098);
const smo247099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo247099'] = smo247099;
smo247099.setAttribute('id', 'smo247099');
smo247118v0ar.push(smo247099);
const smo247100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo247100'] = smo247100;
smo247100.setAttribute('id', 'smo247100');
smo247118v0ar.push(smo247100);
const smo247101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo247101'] = smo247101;
smo247101.setAttribute('id', 'smo247101');
smo247118v0ar.push(smo247101);
const smo247102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247102'] = smo247102;
smo247102.setAttribute('id', 'smo247102');
smo247118v0ar.push(smo247102);
const smo247103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo247103'] = smo247103;
smo247103.setAttribute('id', 'smo247103');
smo247118v0ar.push(smo247103);
const smo247104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo247104'] = smo247104;
smo247104.setAttribute('id', 'smo247104');
smo247118v0ar.push(smo247104);
smo247118v0.addTickables(smo247118v0ar)
fmtsmo24711851.joinVoices([smo247118v0]);
const fmtsmo24988151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo249881v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249881v0ar = [];
const smo249864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo249864'] = smo249864;
smo249864.setAttribute('id', 'smo249864');
smo249881v0ar.push(smo249864);
const smo249865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249865'] = smo249865;
smo249865.setAttribute('id', 'smo249865');
smo249881v0ar.push(smo249865);
const smo249866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo249866'] = smo249866;
smo249866.setAttribute('id', 'smo249866');
const smo2498660acc = new VF.Accidental('b');
smo249866.addModifier(smo2498660acc, 0);
const smo2498661acc = new VF.Accidental('b');
smo249866.addModifier(smo2498661acc, 1);
smo249881v0ar.push(smo249866);
const smo249867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249867'] = smo249867;
smo249867.setAttribute('id', 'smo249867');
smo249881v0ar.push(smo249867);
smo249881v0.addTickables(smo249881v0ar)
fmtsmo24988151.joinVoices([smo249881v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251411 = smo247097.getStemDirection();
smo247097.setStemDirection(dirsmo251411);
smo247098.setStemDirection(dirsmo251411);
smo247099.setStemDirection(dirsmo251411);
smo247100.setStemDirection(dirsmo251411);
const smo251411 = new VF.Beam([smo247097,smo247098,smo247099,smo247100]);
const dirsmo251412 = smo247101.getStemDirection();
smo247101.setStemDirection(dirsmo251412);
smo247102.setStemDirection(dirsmo251412);
smo247103.setStemDirection(dirsmo251412);
smo247104.setStemDirection(dirsmo251412);
const smo251412 = new VF.Beam([smo247101,smo247102,smo247103,smo247104]);
const dirsmo251415 = smo249864.getStemDirection();
smo249864.setStemDirection(dirsmo251415);
smo249865.setStemDirection(dirsmo251415);
const smo251415 = new VF.Beam([smo249864,smo249865]);
const dirsmo251416 = smo249866.getStemDirection();
smo249866.setStemDirection(dirsmo251416);
smo249867.setStemDirection(dirsmo251416);
const smo251416 = new VF.Beam([smo249866,smo249867]);
 
// formatting measures in staff group smo245304
fmtsmo24711851.format([smo247118v0,smo249881v0], 281);
const stavesmo247118 = new VF.Stave(958, 1501, 295);
stavesmo247118.setAttribute('id', 'stavesmo247118');
stavesmo247118.setBegBarType(VF.Barline.type.NONE);
stavesmo247118.setContext(context);
stavesmo247118.draw();
smo247118v0.draw(context, stavesmo247118);
smo251411.setContext(context);
smo251411.draw();
smo251412.setContext(context);
smo251412.draw();
const stavesmo249881 = new VF.Stave(958, 1657, 295);
stavesmo249881.setAttribute('id', 'stavesmo249881');
stavesmo249881.setBegBarType(VF.Barline.type.NONE);
stavesmo249881.setContext(context);
stavesmo249881.draw();
smo249881v0.draw(context, stavesmo249881);
smo251415.setContext(context);
smo251415.draw();
smo251416.setContext(context);
smo251416.draw();
const fmtsmo24713952 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo247139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247139v0ar = [];
const smo247119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo247119'] = smo247119;
smo247119.setAttribute('id', 'smo247119');
smo247139v0ar.push(smo247119);
const smo247120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247120'] = smo247120;
smo247120.setAttribute('id', 'smo247120');
smo247139v0ar.push(smo247120);
const smo247121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo247121'] = smo247121;
smo247121.setAttribute('id', 'smo247121');
smo247139v0ar.push(smo247121);
const smo247122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo247122'] = smo247122;
smo247122.setAttribute('id', 'smo247122');
smo247139v0ar.push(smo247122);
const smo247123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo247123'] = smo247123;
smo247123.setAttribute('id', 'smo247123');
smo247139v0ar.push(smo247123);
const smo247124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo247124'] = smo247124;
smo247124.setAttribute('id', 'smo247124');
smo247139v0ar.push(smo247124);
const smo247125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo247125'] = smo247125;
smo247125.setAttribute('id', 'smo247125');
smo247139v0ar.push(smo247125);
smo247139v0.addTickables(smo247139v0ar)
fmtsmo24713952.joinVoices([smo247139v0]);
const fmtsmo24989952 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo249899v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249899v0ar = [];
const smo249882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249882'] = smo249882;
smo249882.setAttribute('id', 'smo249882');
smo249899v0ar.push(smo249882);
const smo249883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo249883'] = smo249883;
smo249883.setAttribute('id', 'smo249883');
smo249899v0ar.push(smo249883);
const smo249884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249884'] = smo249884;
smo249884.setAttribute('id', 'smo249884');
smo249899v0ar.push(smo249884);
const smo249885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo249885'] = smo249885;
smo249885.setAttribute('id', 'smo249885');
smo249899v0ar.push(smo249885);
smo249899v0.addTickables(smo249899v0ar)
fmtsmo24989952.joinVoices([smo249899v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251419 = smo247119.getStemDirection();
smo247119.setStemDirection(dirsmo251419);
smo247120.setStemDirection(dirsmo251419);
smo247121.setStemDirection(dirsmo251419);
smo247122.setStemDirection(dirsmo251419);
const smo251419 = new VF.Beam([smo247119,smo247120,smo247121,smo247122]);
const dirsmo251420 = smo247123.getStemDirection();
smo247123.setStemDirection(dirsmo251420);
smo247124.setStemDirection(dirsmo251420);
smo247125.setStemDirection(dirsmo251420);
const smo251420 = new VF.Beam([smo247123,smo247124,smo247125]);
const dirsmo251423 = smo249882.getStemDirection();
smo249882.setStemDirection(dirsmo251423);
smo249883.setStemDirection(dirsmo251423);
const smo251423 = new VF.Beam([smo249882,smo249883]);
const dirsmo251424 = smo249884.getStemDirection();
smo249884.setStemDirection(dirsmo251424);
smo249885.setStemDirection(dirsmo251424);
const smo251424 = new VF.Beam([smo249884,smo249885]);
 
// formatting measures in staff group smo245304
fmtsmo24713952.format([smo247139v0,smo249899v0], 281);
const stavesmo247139 = new VF.Stave(1253, 1501, 295);
stavesmo247139.setAttribute('id', 'stavesmo247139');
stavesmo247139.setBegBarType(VF.Barline.type.NONE);
stavesmo247139.setContext(context);
stavesmo247139.draw();
smo247139v0.draw(context, stavesmo247139);
smo251419.setContext(context);
smo251419.draw();
smo251420.setContext(context);
smo251420.draw();
const stavesmo249899 = new VF.Stave(1253, 1657, 295);
stavesmo249899.setAttribute('id', 'stavesmo249899');
stavesmo249899.setBegBarType(VF.Barline.type.NONE);
stavesmo249899.setContext(context);
stavesmo249899.draw();
smo249899v0.draw(context, stavesmo249899);
smo251423.setContext(context);
smo251423.draw();
smo251424.setContext(context);
smo251424.draw();
const fmtsmo24715653 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo247156v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247156v0ar = [];
const smo247140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247140'] = smo247140;
smo247140.setAttribute('id', 'smo247140');
smo247156v0ar.push(smo247140);
const smo247141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo247141'] = smo247141;
smo247141.setAttribute('id', 'smo247141');
smo247156v0ar.push(smo247141);
const smo247142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247142'] = smo247142;
smo247142.setAttribute('id', 'smo247142');
smo247156v0ar.push(smo247142);
smo247156v0.addTickables(smo247156v0ar)
fmtsmo24715653.joinVoices([smo247156v0]);
const fmtsmo24991753 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo249917v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249917v0ar = [];
const smo249900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo249900'] = smo249900;
smo249900.setAttribute('id', 'smo249900');
smo249917v0ar.push(smo249900);
const smo249901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249901'] = smo249901;
smo249901.setAttribute('id', 'smo249901');
smo249917v0ar.push(smo249901);
const smo249902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo249902'] = smo249902;
smo249902.setAttribute('id', 'smo249902');
smo249917v0ar.push(smo249902);
const smo249903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo249903'] = smo249903;
smo249903.setAttribute('id', 'smo249903');
smo249917v0ar.push(smo249903);
smo249917v0.addTickables(smo249917v0ar)
fmtsmo24991753.joinVoices([smo249917v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251429 = smo249900.getStemDirection();
smo249900.setStemDirection(dirsmo251429);
smo249901.setStemDirection(dirsmo251429);
const smo251429 = new VF.Beam([smo249900,smo249901]);
 
// formatting measures in staff group smo245304
fmtsmo24715653.format([smo247156v0,smo249917v0], 281);
const stavesmo247156 = new VF.Stave(1548, 1501, 295);
stavesmo247156.setAttribute('id', 'stavesmo247156');
stavesmo247156.setBegBarType(VF.Barline.type.NONE);
stavesmo247156.setContext(context);
stavesmo247156.draw();
smo247156v0.draw(context, stavesmo247156);
const stavesmo249917 = new VF.Stave(1548, 1657, 295);
stavesmo249917.setAttribute('id', 'stavesmo249917');
stavesmo249917.setBegBarType(VF.Barline.type.NONE);
stavesmo249917.setContext(context);
stavesmo249917.draw();
smo249917v0.draw(context, stavesmo249917);
smo251429.setContext(context);
smo251429.draw();
const rightsmo245304stavesmo2471561 = new VF.StaveConnector(stavesmo247156, stavesmo249917).setType(0);
rightsmo245304stavesmo2471561.setContext(context).draw();
const fmtsmo24717654 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo247176v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247176v0ar = [];
const smo247157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo247157'] = smo247157;
smo247157.setAttribute('id', 'smo247157');
smo247176v0ar.push(smo247157);
const smo247159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo247159'] = smo247159;
smo247159.setAttribute('id', 'smo247159');
const smo2471590acc = new VF.Accidental('b');
smo247159.addModifier(smo2471590acc, 0);
smo247176v0ar.push(smo247159);
const smo247160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo247160'] = smo247160;
smo247160.setAttribute('id', 'smo247160');
const smo2471601acc = new VF.Accidental('n');
smo247160.addModifier(smo2471601acc, 1);
smo247176v0ar.push(smo247160);
const smo247161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo247161'] = smo247161;
smo247161.setAttribute('id', 'smo247161');
smo247176v0ar.push(smo247161);
const smo247162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
noteHash['smo247162'] = smo247162;
smo247162.setAttribute('id', 'smo247162');
smo247176v0ar.push(smo247162);
smo247176v0.addTickables(smo247176v0ar)
fmtsmo24717654.joinVoices([smo247176v0]);
const fmtsmo24993554 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo249935v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249935v0ar = [];
const smo249918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo249918'] = smo249918;
smo249918.setAttribute('id', 'smo249918');
smo249935v0ar.push(smo249918);
const smo249919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249919'] = smo249919;
smo249919.setAttribute('id', 'smo249919');
smo249935v0ar.push(smo249919);
const smo249920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo249920'] = smo249920;
smo249920.setAttribute('id', 'smo249920');
smo249935v0ar.push(smo249920);
const smo249921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo249921'] = smo249921;
smo249921.setAttribute('id', 'smo249921');
smo249935v0ar.push(smo249921);
smo249935v0.addTickables(smo249935v0ar)
fmtsmo24993554.joinVoices([smo249935v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251438 = smo247157.getStemDirection();
smo247157.setStemDirection(dirsmo251438);
smo247159.setStemDirection(dirsmo251438);
smo247160.setStemDirection(dirsmo251438);
const smo251438 = new VF.Beam([smo247157,smo247159,smo247160]);
const dirsmo251439 = smo247161.getStemDirection();
smo247161.setStemDirection(dirsmo251439);
smo247162.setStemDirection(dirsmo251439);
const smo251439 = new VF.Beam([smo247161,smo247162]);
const dirsmo251441 = smo249918.getStemDirection();
smo249918.setStemDirection(dirsmo251441);
smo249919.setStemDirection(dirsmo251441);
const smo251441 = new VF.Beam([smo249918,smo249919]);
const dirsmo251442 = smo249920.getStemDirection();
smo249920.setStemDirection(dirsmo251442);
smo249921.setStemDirection(dirsmo251442);
const smo251442 = new VF.Beam([smo249920,smo249921]);
 
// formatting measures in staff group smo245304
fmtsmo24717654.format([smo247176v0,smo249935v0], 195);
const stavesmo247176 = new VF.Stave(73, 1835, 295);
stavesmo247176.setAttribute('id', 'stavesmo247176');
stavesmo247176.setBegBarType(4);
stavesmo247176.addClef('treble');
const keysmo247176 = new VF.KeySignature('Bb');
keysmo247176.cancelKey('C');
keysmo247176.addToStave(stavesmo247176);
stavesmo247176.setContext(context);
stavesmo247176.draw();
smo247176v0.draw(context, stavesmo247176);
smo251438.setContext(context);
smo251438.draw();
smo251439.setContext(context);
smo251439.draw();
const stavesmo249935 = new VF.Stave(73, 2000, 295);
stavesmo249935.setAttribute('id', 'stavesmo249935');
stavesmo249935.setBegBarType(4);
stavesmo249935.addClef('bass');
const keysmo249935 = new VF.KeySignature('Bb');
keysmo249935.cancelKey('C');
keysmo249935.addToStave(stavesmo249935);
stavesmo249935.setContext(context);
stavesmo249935.draw();
smo249935v0.draw(context, stavesmo249935);
smo251441.setContext(context);
smo251441.draw();
smo251442.setContext(context);
smo251442.draw();
const leftsmo245304stavesmo2471761 = new VF.StaveConnector(stavesmo247176, stavesmo249935).setType(3);
leftsmo245304stavesmo2471761.setContext(context).draw();
const fmtsmo24719755 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo247197v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247197v0ar = [];
const smo247177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
noteHash['smo247177'] = smo247177;
smo247177.setAttribute('id', 'smo247177');
smo247197v0ar.push(smo247177);
smo247197v0.addTickables(smo247197v0ar)
fmtsmo24719755.joinVoices([smo247197v0]);
const smo247197v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247197v1ar = [];
const smo247178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247178'] = smo247178;
smo247178.setAttribute('id', 'smo247178');
smo247178.setStyle({ fillStyle: "#115511" });
smo247197v1ar.push(smo247178);
const smo247179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo247179'] = smo247179;
smo247179.setAttribute('id', 'smo247179');
smo247179.setStyle({ fillStyle: "#115511" });
smo247197v1ar.push(smo247179);
const smo247180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247180'] = smo247180;
smo247180.setAttribute('id', 'smo247180');
smo247180.setStyle({ fillStyle: "#115511" });
smo247197v1ar.push(smo247180);
const smo247181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo247181'] = smo247181;
smo247181.setAttribute('id', 'smo247181');
smo247181.setStyle({ fillStyle: "#115511" });
smo247197v1ar.push(smo247181);
const smo247182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247182'] = smo247182;
smo247182.setAttribute('id', 'smo247182');
smo247182.setStyle({ fillStyle: "#115511" });
smo247197v1ar.push(smo247182);
const smo247183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247183'] = smo247183;
smo247183.setAttribute('id', 'smo247183');
smo247183.setStyle({ fillStyle: "#115511" });
smo247197v1ar.push(smo247183);
smo247197v1.addTickables(smo247197v1ar)
fmtsmo24719755.joinVoices([smo247197v1]);
const fmtsmo24995355 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo249953v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249953v0ar = [];
const smo249936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo249936'] = smo249936;
smo249936.setAttribute('id', 'smo249936');
smo249953v0ar.push(smo249936);
const smo249937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo249937'] = smo249937;
smo249937.setAttribute('id', 'smo249937');
smo249953v0ar.push(smo249937);
const smo249938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo249938'] = smo249938;
smo249938.setAttribute('id', 'smo249938');
smo249953v0ar.push(smo249938);
const smo249939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo249939'] = smo249939;
smo249939.setAttribute('id', 'smo249939');
smo249953v0ar.push(smo249939);
smo249953v0.addTickables(smo249953v0ar)
fmtsmo24995355.joinVoices([smo249953v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251444 = smo247179.getStemDirection();
smo247179.setStemDirection(dirsmo251444);
smo247180.setStemDirection(dirsmo251444);
const smo251444 = new VF.Beam([smo247179,smo247180]);
const dirsmo251445 = smo247181.getStemDirection();
smo247181.setStemDirection(dirsmo251445);
smo247182.setStemDirection(dirsmo251445);
smo247183.setStemDirection(dirsmo251445);
const smo251445 = new VF.Beam([smo247181,smo247182,smo247183]);
const dirsmo251448 = smo249936.getStemDirection();
smo249936.setStemDirection(dirsmo251448);
smo249937.setStemDirection(dirsmo251448);
const smo251448 = new VF.Beam([smo249936,smo249937]);
const dirsmo251449 = smo249938.getStemDirection();
smo249938.setStemDirection(dirsmo251449);
smo249939.setStemDirection(dirsmo251449);
const smo251449 = new VF.Beam([smo249938,smo249939]);
 
// formatting measures in staff group smo245304
fmtsmo24719755.format([smo247197v0,smo247197v1,smo249953v0], 281);
const stavesmo247197 = new VF.Stave(368, 1835, 295);
stavesmo247197.setAttribute('id', 'stavesmo247197');
stavesmo247197.setBegBarType(VF.Barline.type.NONE);
stavesmo247197.setContext(context);
stavesmo247197.draw();
smo247197v0.draw(context, stavesmo247197);
smo247197v1.draw(context, stavesmo247197);
smo251444.setContext(context);
smo251444.draw();
smo251445.setContext(context);
smo251445.draw();
const stavesmo249953 = new VF.Stave(368, 2000, 295);
stavesmo249953.setAttribute('id', 'stavesmo249953');
stavesmo249953.setBegBarType(VF.Barline.type.NONE);
stavesmo249953.setContext(context);
stavesmo249953.draw();
smo249953v0.draw(context, stavesmo249953);
smo251448.setContext(context);
smo251448.draw();
smo251449.setContext(context);
smo251449.draw();
const fmtsmo24721656 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo247216v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247216v0ar = [];
const smo247198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo247198'] = smo247198;
smo247198.setAttribute('id', 'smo247198');
smo247216v0ar.push(smo247198);
const smo247199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo247199'] = smo247199;
smo247199.setAttribute('id', 'smo247199');
const smo2471990acc = new VF.Accidental('n');
smo247199.addModifier(smo2471990acc, 0);
smo247216v0ar.push(smo247199);
const smo247200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo247200'] = smo247200;
smo247200.setAttribute('id', 'smo247200');
smo247216v0ar.push(smo247200);
const smo247201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo247201'] = smo247201;
smo247201.setAttribute('id', 'smo247201');
smo247216v0ar.push(smo247201);
const smo247202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
noteHash['smo247202'] = smo247202;
smo247202.setAttribute('id', 'smo247202');
smo247216v0ar.push(smo247202);
smo247216v0.addTickables(smo247216v0ar)
fmtsmo24721656.joinVoices([smo247216v0]);
const fmtsmo24997156 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo249971v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249971v0ar = [];
const smo249954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo249954'] = smo249954;
smo249954.setAttribute('id', 'smo249954');
smo249971v0ar.push(smo249954);
const smo249955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo249955'] = smo249955;
smo249955.setAttribute('id', 'smo249955');
smo249971v0ar.push(smo249955);
const smo249956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo249956'] = smo249956;
smo249956.setAttribute('id', 'smo249956');
smo249971v0ar.push(smo249956);
const smo249957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo249957'] = smo249957;
smo249957.setAttribute('id', 'smo249957');
smo249971v0ar.push(smo249957);
smo249971v0.addTickables(smo249971v0ar)
fmtsmo24997156.joinVoices([smo249971v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251452 = smo247198.getStemDirection();
smo247198.setStemDirection(dirsmo251452);
smo247199.setStemDirection(dirsmo251452);
smo247200.setStemDirection(dirsmo251452);
const smo251452 = new VF.Beam([smo247198,smo247199,smo247200]);
const dirsmo251453 = smo247201.getStemDirection();
smo247201.setStemDirection(dirsmo251453);
smo247202.setStemDirection(dirsmo251453);
const smo251453 = new VF.Beam([smo247201,smo247202]);
const dirsmo251456 = smo249954.getStemDirection();
smo249954.setStemDirection(dirsmo251456);
smo249955.setStemDirection(dirsmo251456);
const smo251456 = new VF.Beam([smo249954,smo249955]);
const dirsmo251457 = smo249956.getStemDirection();
smo249956.setStemDirection(dirsmo251457);
smo249957.setStemDirection(dirsmo251457);
const smo251457 = new VF.Beam([smo249956,smo249957]);
 
// formatting measures in staff group smo245304
fmtsmo24721656.format([smo247216v0,smo249971v0], 281);
const stavesmo247216 = new VF.Stave(663, 1835, 295);
stavesmo247216.setAttribute('id', 'stavesmo247216');
stavesmo247216.setBegBarType(VF.Barline.type.NONE);
stavesmo247216.setContext(context);
stavesmo247216.draw();
smo247216v0.draw(context, stavesmo247216);
smo251452.setContext(context);
smo251452.draw();
smo251453.setContext(context);
smo251453.draw();
const stavesmo249971 = new VF.Stave(663, 2000, 295);
stavesmo249971.setAttribute('id', 'stavesmo249971');
stavesmo249971.setBegBarType(VF.Barline.type.NONE);
stavesmo249971.setContext(context);
stavesmo249971.draw();
smo249971v0.draw(context, stavesmo249971);
smo251456.setContext(context);
smo251456.draw();
smo251457.setContext(context);
smo251457.draw();
const fmtsmo24723957 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo247239v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247239v0ar = [];
const smo247217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo247217'] = smo247217;
smo247217.setAttribute('id', 'smo247217');
smo247239v0ar.push(smo247217);
const smo247218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo247218'] = smo247218;
smo247218.setAttribute('id', 'smo247218');
smo247218.addModifier(new VF.Dot(), 0);
smo247218.addModifier(new VF.Dot(), 1);
smo247218.addModifier(new VF.Dot(), 2);
smo247239v0ar.push(smo247218);
const smo247219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247219'] = smo247219;
smo247219.setAttribute('id', 'smo247219');
smo247239v0ar.push(smo247219);
smo247239v0.addTickables(smo247239v0ar)
fmtsmo24723957.joinVoices([smo247239v0]);
const smo247239v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247239v1ar = [];
const smo247220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo247220'] = smo247220;
smo247220.setAttribute('id', 'smo247220');
smo247220.setStyle({ fillStyle: "#115511" });
smo247239v1ar.push(smo247220);
const smo247221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo247221'] = smo247221;
smo247221.setAttribute('id', 'smo247221');
smo247221.setStyle({ fillStyle: "#115511" });
smo247239v1ar.push(smo247221);
const smo247222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo247222'] = smo247222;
smo247222.setAttribute('id', 'smo247222');
smo247222.setStyle({ fillStyle: "#115511" });
const smo2472220acc = new VF.Accidental('b');
smo247222.addModifier(smo2472220acc, 0);
smo247239v1ar.push(smo247222);
const smo247223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo247223'] = smo247223;
smo247223.setAttribute('id', 'smo247223');
smo247223.setStyle({ fillStyle: "#115511" });
const smo2472230acc = new VF.Accidental('n');
smo247223.addModifier(smo2472230acc, 0);
smo247239v1ar.push(smo247223);
const smo247224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo247224'] = smo247224;
smo247224.setAttribute('id', 'smo247224');
smo247224.setStyle({ fillStyle: "#115511" });
smo247239v1ar.push(smo247224);
const smo247225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo247225'] = smo247225;
smo247225.setAttribute('id', 'smo247225');
smo247225.setStyle({ fillStyle: "#115511" });
smo247239v1ar.push(smo247225);
smo247239v1.addTickables(smo247239v1ar)
fmtsmo24723957.joinVoices([smo247239v1]);
const fmtsmo24998957 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo249989v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249989v0ar = [];
const smo249972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo249972'] = smo249972;
smo249972.setAttribute('id', 'smo249972');
smo249989v0ar.push(smo249972);
const smo249973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo249973'] = smo249973;
smo249973.setAttribute('id', 'smo249973');
smo249989v0ar.push(smo249973);
const smo249974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo249974'] = smo249974;
smo249974.setAttribute('id', 'smo249974');
smo249989v0ar.push(smo249974);
const smo249975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo249975'] = smo249975;
smo249975.setAttribute('id', 'smo249975');
smo249989v0ar.push(smo249975);
smo249989v0.addTickables(smo249989v0ar)
fmtsmo24998957.joinVoices([smo249989v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251460 = smo247218.getStemDirection();
smo247218.setStemDirection(dirsmo251460);
smo247219.setStemDirection(dirsmo251460);
const smo251460 = new VF.Beam([smo247218,smo247219]);
const dirsmo251461 = smo247221.getStemDirection();
smo247221.setStemDirection(dirsmo251461);
smo247222.setStemDirection(dirsmo251461);
const smo251461 = new VF.Beam([smo247221,smo247222]);
const dirsmo251462 = smo247223.getStemDirection();
smo247223.setStemDirection(dirsmo251462);
smo247224.setStemDirection(dirsmo251462);
smo247225.setStemDirection(dirsmo251462);
const smo251462 = new VF.Beam([smo247223,smo247224,smo247225]);
const dirsmo251465 = smo249972.getStemDirection();
smo249972.setStemDirection(dirsmo251465);
smo249973.setStemDirection(dirsmo251465);
const smo251465 = new VF.Beam([smo249972,smo249973]);
const dirsmo251466 = smo249974.getStemDirection();
smo249974.setStemDirection(dirsmo251466);
smo249975.setStemDirection(dirsmo251466);
const smo251466 = new VF.Beam([smo249974,smo249975]);
 
// formatting measures in staff group smo245304
fmtsmo24723957.format([smo247239v0,smo247239v1,smo249989v0], 281);
const stavesmo247239 = new VF.Stave(958, 1835, 295);
stavesmo247239.setAttribute('id', 'stavesmo247239');
stavesmo247239.setBegBarType(VF.Barline.type.NONE);
stavesmo247239.setContext(context);
stavesmo247239.draw();
smo247239v0.draw(context, stavesmo247239);
smo247239v1.draw(context, stavesmo247239);
smo251460.setContext(context);
smo251460.draw();
smo251461.setContext(context);
smo251461.draw();
smo251462.setContext(context);
smo251462.draw();
const stavesmo249989 = new VF.Stave(958, 2000, 295);
stavesmo249989.setAttribute('id', 'stavesmo249989');
stavesmo249989.setBegBarType(VF.Barline.type.NONE);
stavesmo249989.setContext(context);
stavesmo249989.draw();
smo249989v0.draw(context, stavesmo249989);
smo251465.setContext(context);
smo251465.draw();
smo251466.setContext(context);
smo251466.draw();
const fmtsmo24725958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo247259v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247259v0ar = [];
const smo247240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247240'] = smo247240;
smo247240.setAttribute('id', 'smo247240');
smo247259v0ar.push(smo247240);
const smo247241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247241'] = smo247241;
smo247241.setAttribute('id', 'smo247241');
smo247259v0ar.push(smo247241);
const smo247242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247242'] = smo247242;
smo247242.setAttribute('id', 'smo247242');
smo247259v0ar.push(smo247242);
const smo247243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247243'] = smo247243;
smo247243.setAttribute('id', 'smo247243');
smo247259v0ar.push(smo247243);
const smo247244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo247244'] = smo247244;
smo247244.setAttribute('id', 'smo247244');
smo247259v0ar.push(smo247244);
const smo247245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo247245'] = smo247245;
smo247245.setAttribute('id', 'smo247245');
smo247259v0ar.push(smo247245);
smo247259v0.addTickables(smo247259v0ar)
fmtsmo24725958.joinVoices([smo247259v0]);
const fmtsmo25000758 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo250007v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250007v0ar = [];
const smo249990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo249990'] = smo249990;
smo249990.setAttribute('id', 'smo249990');
smo250007v0ar.push(smo249990);
const smo249991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo249991'] = smo249991;
smo249991.setAttribute('id', 'smo249991');
smo250007v0ar.push(smo249991);
const smo249992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo249992'] = smo249992;
smo249992.setAttribute('id', 'smo249992');
smo250007v0ar.push(smo249992);
const smo249993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo249993'] = smo249993;
smo249993.setAttribute('id', 'smo249993');
const smo2499930acc = new VF.Accidental('b');
smo249993.addModifier(smo2499930acc, 0);
const smo2499931acc = new VF.Accidental('b');
smo249993.addModifier(smo2499931acc, 1);
smo250007v0ar.push(smo249993);
smo250007v0.addTickables(smo250007v0ar)
fmtsmo25000758.joinVoices([smo250007v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251469 = smo247240.getStemDirection();
smo247240.setStemDirection(dirsmo251469);
smo247241.setStemDirection(dirsmo251469);
smo247242.setStemDirection(dirsmo251469);
const smo251469 = new VF.Beam([smo247240,smo247241,smo247242]);
const dirsmo251470 = smo247243.getStemDirection();
smo247243.setStemDirection(dirsmo251470);
smo247244.setStemDirection(dirsmo251470);
smo247245.setStemDirection(dirsmo251470);
const smo251470 = new VF.Beam([smo247243,smo247244,smo247245]);
const dirsmo251473 = smo249990.getStemDirection();
smo249990.setStemDirection(dirsmo251473);
smo249991.setStemDirection(dirsmo251473);
const smo251473 = new VF.Beam([smo249990,smo249991]);
const dirsmo251474 = smo249992.getStemDirection();
smo249992.setStemDirection(dirsmo251474);
smo249993.setStemDirection(dirsmo251474);
const smo251474 = new VF.Beam([smo249992,smo249993]);
 
// formatting measures in staff group smo245304
fmtsmo24725958.format([smo247259v0,smo250007v0], 281);
const stavesmo247259 = new VF.Stave(1253, 1835, 295);
stavesmo247259.setAttribute('id', 'stavesmo247259');
stavesmo247259.setBegBarType(VF.Barline.type.NONE);
stavesmo247259.setContext(context);
stavesmo247259.draw();
smo247259v0.draw(context, stavesmo247259);
smo251469.setContext(context);
smo251469.draw();
smo251470.setContext(context);
smo251470.draw();
const stavesmo250007 = new VF.Stave(1253, 2000, 295);
stavesmo250007.setAttribute('id', 'stavesmo250007');
stavesmo250007.setBegBarType(VF.Barline.type.NONE);
stavesmo250007.setContext(context);
stavesmo250007.draw();
smo250007v0.draw(context, stavesmo250007);
smo251473.setContext(context);
smo251473.draw();
smo251474.setContext(context);
smo251474.draw();
const fmtsmo24727559 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo247275v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo247275v0ar = [];
const smo247260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo247260'] = smo247260;
smo247260.setAttribute('id', 'smo247260');
smo247275v0ar.push(smo247260);
const smo247261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo247261'] = smo247261;
smo247261.setAttribute('id', 'smo247261');
smo247275v0ar.push(smo247261);
smo247275v0.addTickables(smo247275v0ar)
fmtsmo24727559.joinVoices([smo247275v0]);
const fmtsmo25002559 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo250025v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250025v0ar = [];
const smo250008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo250008'] = smo250008;
smo250008.setAttribute('id', 'smo250008');
smo250025v0ar.push(smo250008);
const smo250009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo250009'] = smo250009;
smo250009.setAttribute('id', 'smo250009');
smo250025v0ar.push(smo250009);
const smo250010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo250010'] = smo250010;
smo250010.setAttribute('id', 'smo250010');
smo250025v0ar.push(smo250010);
const smo250011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo250011'] = smo250011;
smo250011.setAttribute('id', 'smo250011');
smo250025v0ar.push(smo250011);
smo250025v0.addTickables(smo250025v0ar)
fmtsmo25002559.joinVoices([smo250025v0]);
// create beam groups and tuplets for format grp smo245304 before formatting
const dirsmo251479 = smo250008.getStemDirection();
smo250008.setStemDirection(dirsmo251479);
smo250009.setStemDirection(dirsmo251479);
const smo251479 = new VF.Beam([smo250008,smo250009]);
const dirsmo251480 = smo250010.getStemDirection();
smo250010.setStemDirection(dirsmo251480);
smo250011.setStemDirection(dirsmo251480);
const smo251480 = new VF.Beam([smo250010,smo250011]);
 
// formatting measures in staff group smo245304
fmtsmo24727559.format([smo247275v0,smo250025v0], 281);
const stavesmo247275 = new VF.Stave(1548, 1835, 295);
stavesmo247275.setAttribute('id', 'stavesmo247275');
stavesmo247275.setBegBarType(VF.Barline.type.NONE);
stavesmo247275.setContext(context);
stavesmo247275.draw();
smo247275v0.draw(context, stavesmo247275);
const stavesmo250025 = new VF.Stave(1548, 2000, 295);
stavesmo250025.setAttribute('id', 'stavesmo250025');
stavesmo250025.setBegBarType(VF.Barline.type.NONE);
stavesmo250025.setContext(context);
stavesmo250025.draw();
smo250025v0.draw(context, stavesmo250025);
smo251479.setContext(context);
smo251479.draw();
smo251480.setContext(context);
smo251480.draw();
const rightsmo245304stavesmo2472751 = new VF.StaveConnector(stavesmo247275, stavesmo250025).setType(0);
rightsmo245304stavesmo2472751.setContext(context).draw();
const smo252538 = new VF.StaveHairpin({ first_note: smo246716, last_note: smo246716,
       firstNote: smo246716, lastNote: smo246716 });
smo252538.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252538.setContext(context).setPosition(4).draw();
const smo252539 = new VF.StaveHairpin({ first_note: smo246756, last_note: smo246756,
       firstNote: smo246756, lastNote: smo246756 });
smo252539.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252539.setContext(context).setPosition(4).draw();
const smo252540 = new VF.StaveHairpin({ first_note: smo246818, last_note: smo246818,
       firstNote: smo246818, lastNote: smo246818 });
smo252540.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252540.setContext(context).setPosition(4).draw();
const smo252541 = new VF.StaveHairpin({ first_note: smo246858, last_note: smo246858,
       firstNote: smo246858, lastNote: smo246858 });
smo252541.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252541.setContext(context).setPosition(4).draw();
const smo252544 = new VF.StaveHairpin({ first_note: smo246938, last_note: smo246938,
       firstNote: smo246938, lastNote: smo246938 });
smo252544.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252544.setContext(context).setPosition(4).draw();
const smo252545 = new VF.StaveHairpin({ first_note: smo246979, last_note: smo246979,
       firstNote: smo246979, lastNote: smo246979 });
smo252545.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252545.setContext(context).setPosition(4).draw();
const smo252546 = new VF.StaveHairpin({ first_note: smo247018, last_note: smo247018,
       firstNote: smo247018, lastNote: smo247018 });
smo252546.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo252546.setContext(context).setPosition(4).draw();
const smo252547 = new VF.StaveTie({ first_note: smo246673, last_note: smo246674, 
          firstNote: smo246673, lastNote: smo246674, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252547.setContext(context).draw();
const smo252548 = new VF.StaveTie({ first_note: smo246714, last_note: smo246715, 
          firstNote: smo246714, lastNote: smo246715, first_indices: [0], last_indices: [0]});
smo252548.setContext(context).draw();
const smo252549 = new VF.StaveTie({ first_note: smo246736, last_note: smo246737, 
          firstNote: smo246736, lastNote: smo246737, first_indices: [0], last_indices: [0]});
smo252549.setContext(context).draw();
const smo252550 = new VF.StaveTie({ first_note: smo246758, last_note: smo246759, 
          firstNote: smo246758, lastNote: smo246759, first_indices: [0], last_indices: [0]});
smo252550.setContext(context).draw();
const smo252551 = new VF.StaveTie({ first_note: smo246781, last_note: null, 
          firstNote: smo246781, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo252551.setContext(context).draw();
const smo252552 = new VF.StaveTie({ first_note: null, last_note: smo246796, 
          firstNote: null, lastNote: smo246796, first_indices: [0,1], last_indices: [0,1]});
smo252552.setContext(context).draw();
const smo252553 = new VF.StaveTie({ first_note: smo246796, last_note: smo246797, 
          firstNote: smo246796, lastNote: smo246797, first_indices: [0,1], last_indices: [0,1]});
smo252553.setContext(context).draw();
const smo252554 = new VF.StaveTie({ first_note: smo246816, last_note: smo246817, 
          firstNote: smo246816, lastNote: smo246817, first_indices: [0,1], last_indices: [0,1]});
smo252554.setContext(context).draw();
const smo252555 = new VF.StaveTie({ first_note: smo246841, last_note: smo246856, 
          firstNote: smo246841, lastNote: smo246856, first_indices: [0], last_indices: [0]});
smo252555.setContext(context).draw();
const smo252556 = new VF.StaveTie({ first_note: smo246856, last_note: smo246857, 
          firstNote: smo246856, lastNote: smo246857, first_indices: [0], last_indices: [0]});
smo252556.setContext(context).draw();
const smo252557 = new VF.StaveTie({ first_note: smo246879, last_note: smo246880, 
          firstNote: smo246879, lastNote: smo246880, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252557.setContext(context).draw();
const smo252558 = new VF.StaveTie({ first_note: smo246897, last_note: smo246898, 
          firstNote: smo246897, lastNote: smo246898, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252558.setContext(context).draw();
const smo252559 = new VF.StaveTie({ first_note: smo246921, last_note: smo246936, 
          firstNote: smo246921, lastNote: smo246936, first_indices: [0], last_indices: [0]});
smo252559.setContext(context).draw();
const smo252560 = new VF.StaveTie({ first_note: smo246936, last_note: smo246937, 
          firstNote: smo246936, lastNote: smo246937, first_indices: [0], last_indices: [0]});
smo252560.setContext(context).draw();
const smo252561 = new VF.StaveTie({ first_note: smo246958, last_note: smo246959, 
          firstNote: smo246958, lastNote: smo246959, first_indices: [0,1], last_indices: [0,1]});
smo252561.setContext(context).draw();
const smo252562 = new VF.StaveTie({ first_note: smo246977, last_note: smo246978, 
          firstNote: smo246977, lastNote: smo246978, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252562.setContext(context).draw();
const smo252563 = new VF.StaveTie({ first_note: smo247001, last_note: smo247016, 
          firstNote: smo247001, lastNote: smo247016, first_indices: [0], last_indices: [0]});
smo252563.setContext(context).draw();
const smo252564 = new VF.StaveTie({ first_note: smo247016, last_note: smo247017, 
          firstNote: smo247016, lastNote: smo247017, first_indices: [0], last_indices: [0]});
smo252564.setContext(context).draw();
const smo252565 = new VF.StaveTie({ first_note: smo247039, last_note: smo247040, 
          firstNote: smo247039, lastNote: smo247040, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252565.setContext(context).draw();
const smo252566 = new VF.StaveTie({ first_note: smo247057, last_note: smo247058, 
          firstNote: smo247057, lastNote: smo247058, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252566.setContext(context).draw();
const smo252567 = new VF.StaveTie({ first_note: smo247078, last_note: smo247079, 
          firstNote: smo247078, lastNote: smo247079, first_indices: [0,1], last_indices: [0,1]});
smo252567.setContext(context).draw();
const smo252568 = new VF.StaveTie({ first_note: smo247100, last_note: smo247101, 
          firstNote: smo247100, lastNote: smo247101, first_indices: [0,1], last_indices: [0,1]});
smo252568.setContext(context).draw();
const smo252569 = new VF.StaveTie({ first_note: smo247122, last_note: smo247123, 
          firstNote: smo247122, lastNote: smo247123, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252569.setContext(context).draw();
const smo252570 = new VF.StaveTie({ first_note: smo247160, last_note: smo247161, 
          firstNote: smo247160, lastNote: smo247161, first_indices: [0,1], last_indices: [0,1]});
smo252570.setContext(context).draw();
const smo252571 = new VF.StaveTie({ first_note: smo247200, last_note: smo247201, 
          firstNote: smo247200, lastNote: smo247201, first_indices: [0,1], last_indices: [0,1]});
smo252571.setContext(context).draw();
const smo252572 = new VF.StaveTie({ first_note: smo247217, last_note: smo247218, 
          firstNote: smo247217, lastNote: smo247218, first_indices: [0,1,2], last_indices: [0,1,2]});
smo252572.setContext(context).draw();
const smo252573 = new VF.StaveTie({ first_note: smo247242, last_note: smo247243, 
          firstNote: smo247242, lastNote: smo247243, first_indices: [0], last_indices: [0]});
smo252573.setContext(context).draw();
const smo246802smo246815 = new VF.Volta(5, '1', 73, -55);
smo246802smo246815.setContext(context).draw(stavesmo246815, -1 * 0);
const smo246820smo246834 = new VF.Volta(5, '2', 368, 20);
smo246820smo246834.setContext(context).draw(stavesmo246834, -1 * 0);
}
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
const fmtsmo36172530 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo361725v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361725v0ar = [];
const smo361703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361703'] = smo361703;
smo361703.setAttribute('id', 'smo361703');
smo361725v0ar.push(smo361703);
const smo361704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo361704'] = smo361704;
smo361704.setAttribute('id', 'smo361704');
smo361725v0ar.push(smo361704);
const smo361705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361705'] = smo361705;
smo361705.setAttribute('id', 'smo361705');
smo361725v0ar.push(smo361705);
const smo361706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361706'] = smo361706;
smo361706.setAttribute('id', 'smo361706');
smo361725v0ar.push(smo361706);
const smo361707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361707'] = smo361707;
smo361707.setAttribute('id', 'smo361707');
smo361725v0ar.push(smo361707);
const smo361708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361708'] = smo361708;
smo361708.setAttribute('id', 'smo361708');
smo361725v0ar.push(smo361708);
const smo361709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361709'] = smo361709;
smo361709.setAttribute('id', 'smo361709');
smo361725v0ar.push(smo361709);
smo361725v0.addTickables(smo361725v0ar)
fmtsmo36172530.joinVoices([smo361725v0]);
const fmtsmo36379730 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo363797v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363797v0ar = [];
const smo363778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363778'] = smo363778;
smo363778.setAttribute('id', 'smo363778');
smo363797v0ar.push(smo363778);
const smo363779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363779'] = smo363779;
smo363779.setAttribute('id', 'smo363779');
smo363797v0ar.push(smo363779);
const smo363780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363780'] = smo363780;
smo363780.setAttribute('id', 'smo363780');
smo363797v0ar.push(smo363780);
const smo363781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363781'] = smo363781;
smo363781.setAttribute('id', 'smo363781');
smo363797v0ar.push(smo363781);
smo363797v0.addTickables(smo363797v0ar)
fmtsmo36379730.joinVoices([smo363797v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393862 = smo361703.getStemDirection();
smo361703.setStemDirection(dirsmo393862);
smo361704.setStemDirection(dirsmo393862);
smo361705.setStemDirection(dirsmo393862);
const smo393862 = new VF.Beam([smo361703,smo361704,smo361705]);
const dirsmo393863 = smo361706.getStemDirection();
smo361706.setStemDirection(dirsmo393863);
smo361707.setStemDirection(dirsmo393863);
smo361708.setStemDirection(dirsmo393863);
smo361709.setStemDirection(dirsmo393863);
const smo393863 = new VF.Beam([smo361706,smo361707,smo361708,smo361709]);
const dirsmo393866 = smo363778.getStemDirection();
smo363778.setStemDirection(dirsmo393866);
smo363779.setStemDirection(dirsmo393866);
const smo393866 = new VF.Beam([smo363778,smo363779]);
const dirsmo393867 = smo363780.getStemDirection();
smo363780.setStemDirection(dirsmo393867);
smo363781.setStemDirection(dirsmo393867);
const smo393867 = new VF.Beam([smo363780,smo363781]);
 
// formatting measures in staff group smo365028
fmtsmo36172530.format([smo361725v0,smo363797v0], 237);
const stavesmo361725 = new VF.Stave(73, 411, 295);
stavesmo361725.setAttribute('id', 'stavesmo361725');
stavesmo361725.setBegBarType(1);
stavesmo361725.addClef('treble');
stavesmo361725.setContext(context);
stavesmo361725.draw();
smo361725v0.draw(context, stavesmo361725);
smo393862.setContext(context);
smo393862.draw();
smo393863.setContext(context);
smo393863.draw();
const stavesmo363797 = new VF.Stave(73, 561, 295);
stavesmo363797.setAttribute('id', 'stavesmo363797');
stavesmo363797.setBegBarType(1);
stavesmo363797.addClef('bass');
stavesmo363797.setContext(context);
stavesmo363797.draw();
smo363797v0.draw(context, stavesmo363797);
smo393866.setContext(context);
smo393866.draw();
smo393867.setContext(context);
smo393867.draw();
const leftsmo365028stavesmo3617251 = new VF.StaveConnector(stavesmo361725, stavesmo363797).setType(3);
leftsmo365028stavesmo3617251.setContext(context).draw();
const fmtsmo36174931 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo361749v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361749v0ar = [];
const smo361726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361726'] = smo361726;
smo361726.setAttribute('id', 'smo361726');
smo361749v0ar.push(smo361726);
const smo361727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo361727'] = smo361727;
smo361727.setAttribute('id', 'smo361727');
smo361749v0ar.push(smo361727);
const smo361728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361728'] = smo361728;
smo361728.setAttribute('id', 'smo361728');
smo361749v0ar.push(smo361728);
const smo361729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361729'] = smo361729;
smo361729.setAttribute('id', 'smo361729');
smo361749v0ar.push(smo361729);
const smo361730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361730'] = smo361730;
smo361730.setAttribute('id', 'smo361730');
smo361749v0ar.push(smo361730);
const smo361731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361731'] = smo361731;
smo361731.setAttribute('id', 'smo361731');
smo361749v0ar.push(smo361731);
const smo361732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361732'] = smo361732;
smo361732.setAttribute('id', 'smo361732');
smo361749v0ar.push(smo361732);
const smo361733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361733'] = smo361733;
smo361733.setAttribute('id', 'smo361733');
smo361749v0ar.push(smo361733);
smo361749v0.addTickables(smo361749v0ar)
fmtsmo36174931.joinVoices([smo361749v0]);
const fmtsmo36381731 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo363817v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363817v0ar = [];
const smo363798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo363798'] = smo363798;
smo363798.setAttribute('id', 'smo363798');
smo363817v0ar.push(smo363798);
const smo363799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363799'] = smo363799;
smo363799.setAttribute('id', 'smo363799');
smo363817v0ar.push(smo363799);
const smo363800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo363800'] = smo363800;
smo363800.setAttribute('id', 'smo363800');
smo363817v0ar.push(smo363800);
const smo363801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363801'] = smo363801;
smo363801.setAttribute('id', 'smo363801');
const smo3638010acc = new VF.Accidental('b');
smo363801.addModifier(smo3638010acc, 0);
smo363817v0ar.push(smo363801);
smo363817v0.addTickables(smo363817v0ar)
fmtsmo36381731.joinVoices([smo363817v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393870 = smo361726.getStemDirection();
smo361726.setStemDirection(dirsmo393870);
smo361727.setStemDirection(dirsmo393870);
smo361728.setStemDirection(dirsmo393870);
smo361729.setStemDirection(dirsmo393870);
const smo393870 = new VF.Beam([smo361726,smo361727,smo361728,smo361729]);
const dirsmo393871 = smo361730.getStemDirection();
smo361730.setStemDirection(dirsmo393871);
smo361731.setStemDirection(dirsmo393871);
smo361732.setStemDirection(dirsmo393871);
smo361733.setStemDirection(dirsmo393871);
const smo393871 = new VF.Beam([smo361730,smo361731,smo361732,smo361733]);
const dirsmo393874 = smo363798.getStemDirection();
smo363798.setStemDirection(dirsmo393874);
smo363799.setStemDirection(dirsmo393874);
const smo393874 = new VF.Beam([smo363798,smo363799]);
const dirsmo393875 = smo363800.getStemDirection();
smo363800.setStemDirection(dirsmo393875);
smo363801.setStemDirection(dirsmo393875);
const smo393875 = new VF.Beam([smo363800,smo363801]);
 
// formatting measures in staff group smo365028
fmtsmo36174931.format([smo361749v0,smo363817v0], 281);
const stavesmo361749 = new VF.Stave(368, 411, 295);
stavesmo361749.setAttribute('id', 'stavesmo361749');
stavesmo361749.setBegBarType(VF.Barline.type.NONE);
stavesmo361749.setContext(context);
stavesmo361749.draw();
smo361749v0.draw(context, stavesmo361749);
smo393870.setContext(context);
smo393870.draw();
smo393871.setContext(context);
smo393871.draw();
const stavesmo363817 = new VF.Stave(368, 561, 295);
stavesmo363817.setAttribute('id', 'stavesmo363817');
stavesmo363817.setBegBarType(VF.Barline.type.NONE);
stavesmo363817.setContext(context);
stavesmo363817.draw();
smo363817v0.draw(context, stavesmo363817);
smo393874.setContext(context);
smo393874.draw();
smo393875.setContext(context);
smo393875.draw();
const fmtsmo36177032 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo361770v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361770v0ar = [];
const smo361750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361750'] = smo361750;
smo361750.setAttribute('id', 'smo361750');
smo361770v0ar.push(smo361750);
const smo361751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361751'] = smo361751;
smo361751.setAttribute('id', 'smo361751');
smo361770v0ar.push(smo361751);
const smo361752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361752'] = smo361752;
smo361752.setAttribute('id', 'smo361752');
smo361770v0ar.push(smo361752);
const smo361753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo361753'] = smo361753;
smo361753.setAttribute('id', 'smo361753');
const smo3617530acc = new VF.Accidental('b');
smo361753.addModifier(smo3617530acc, 0);
smo361770v0ar.push(smo361753);
const smo361754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361754'] = smo361754;
smo361754.setAttribute('id', 'smo361754');
const smo3617540acc = new VF.Accidental('n');
smo361754.addModifier(smo3617540acc, 0);
smo361770v0ar.push(smo361754);
smo361770v0.addTickables(smo361770v0ar)
fmtsmo36177032.joinVoices([smo361770v0]);
const fmtsmo36383732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo363837v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363837v0ar = [];
const smo363818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo363818'] = smo363818;
smo363818.setAttribute('id', 'smo363818');
smo363837v0ar.push(smo363818);
const smo363819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363819'] = smo363819;
smo363819.setAttribute('id', 'smo363819');
smo363837v0ar.push(smo363819);
const smo363820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363820'] = smo363820;
smo363820.setAttribute('id', 'smo363820');
smo363837v0ar.push(smo363820);
const smo363821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363821'] = smo363821;
smo363821.setAttribute('id', 'smo363821');
const smo3638210acc = new VF.Accidental('b');
smo363821.addModifier(smo3638210acc, 0);
smo363837v0ar.push(smo363821);
smo363837v0.addTickables(smo363837v0ar)
fmtsmo36383732.joinVoices([smo363837v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393878 = smo361751.getStemDirection();
smo361751.setStemDirection(dirsmo393878);
smo361752.setStemDirection(dirsmo393878);
smo361753.setStemDirection(dirsmo393878);
smo361754.setStemDirection(dirsmo393878);
const smo393878 = new VF.Beam([smo361751,smo361752,smo361753,smo361754]);
const dirsmo393881 = smo363818.getStemDirection();
smo363818.setStemDirection(dirsmo393881);
smo363819.setStemDirection(dirsmo393881);
const smo393881 = new VF.Beam([smo363818,smo363819]);
const dirsmo393882 = smo363820.getStemDirection();
smo363820.setStemDirection(dirsmo393882);
smo363821.setStemDirection(dirsmo393882);
const smo393882 = new VF.Beam([smo363820,smo363821]);
 
// formatting measures in staff group smo365028
fmtsmo36177032.format([smo361770v0,smo363837v0], 281);
const stavesmo361770 = new VF.Stave(663, 411, 295);
stavesmo361770.setAttribute('id', 'stavesmo361770');
stavesmo361770.setBegBarType(VF.Barline.type.NONE);
stavesmo361770.setContext(context);
stavesmo361770.draw();
smo361770v0.draw(context, stavesmo361770);
smo393878.setContext(context);
smo393878.draw();
const stavesmo363837 = new VF.Stave(663, 561, 295);
stavesmo363837.setAttribute('id', 'stavesmo363837');
stavesmo363837.setBegBarType(VF.Barline.type.NONE);
stavesmo363837.setContext(context);
stavesmo363837.draw();
smo363837v0.draw(context, stavesmo363837);
smo393881.setContext(context);
smo393881.draw();
smo393882.setContext(context);
smo393882.draw();
const fmtsmo36179433 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo361794v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361794v0ar = [];
const smo361771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361771'] = smo361771;
smo361771.setAttribute('id', 'smo361771');
smo361794v0ar.push(smo361771);
const smo361773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361773'] = smo361773;
smo361773.setAttribute('id', 'smo361773');
smo361794v0ar.push(smo361773);
const smo361774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361774'] = smo361774;
smo361774.setAttribute('id', 'smo361774');
smo361794v0ar.push(smo361774);
const smo361775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361775'] = smo361775;
smo361775.setAttribute('id', 'smo361775');
smo361794v0ar.push(smo361775);
const smo361776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361776'] = smo361776;
smo361776.setAttribute('id', 'smo361776');
smo361794v0ar.push(smo361776);
const smo361777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361777'] = smo361777;
smo361777.setAttribute('id', 'smo361777');
smo361794v0ar.push(smo361777);
const smo361778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361778'] = smo361778;
smo361778.setAttribute('id', 'smo361778');
smo361794v0ar.push(smo361778);
smo361794v0.addTickables(smo361794v0ar)
fmtsmo36179433.joinVoices([smo361794v0]);
const fmtsmo36385733 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo363857v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363857v0ar = [];
const smo363838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363838'] = smo363838;
smo363838.setAttribute('id', 'smo363838');
smo363857v0ar.push(smo363838);
const smo363839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363839'] = smo363839;
smo363839.setAttribute('id', 'smo363839');
smo363857v0ar.push(smo363839);
const smo363840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo363840'] = smo363840;
smo363840.setAttribute('id', 'smo363840');
const smo3638400acc = new VF.Accidental('b');
smo363840.addModifier(smo3638400acc, 0);
const smo3638403acc = new VF.Accidental('b');
smo363840.addModifier(smo3638403acc, 3);
smo363857v0ar.push(smo363840);
const smo363841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo363841'] = smo363841;
smo363841.setAttribute('id', 'smo363841');
smo363857v0ar.push(smo363841);
smo363857v0.addTickables(smo363857v0ar)
fmtsmo36385733.joinVoices([smo363857v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393885 = smo361771.getStemDirection();
smo361771.setStemDirection(dirsmo393885);
smo361773.setStemDirection(dirsmo393885);
smo361774.setStemDirection(dirsmo393885);
const smo393885 = new VF.Beam([smo361771,smo361773,smo361774]);
const dirsmo393886 = smo361775.getStemDirection();
smo361775.setStemDirection(dirsmo393886);
smo361776.setStemDirection(dirsmo393886);
smo361777.setStemDirection(dirsmo393886);
smo361778.setStemDirection(dirsmo393886);
const smo393886 = new VF.Beam([smo361775,smo361776,smo361777,smo361778]);
const dirsmo393889 = smo363838.getStemDirection();
smo363838.setStemDirection(dirsmo393889);
smo363839.setStemDirection(dirsmo393889);
const smo393889 = new VF.Beam([smo363838,smo363839]);
const dirsmo393890 = smo363840.getStemDirection();
smo363840.setStemDirection(dirsmo393890);
smo363841.setStemDirection(dirsmo393890);
const smo393890 = new VF.Beam([smo363840,smo363841]);
 
// formatting measures in staff group smo365028
fmtsmo36179433.format([smo361794v0,smo363857v0], 281);
const stavesmo361794 = new VF.Stave(958, 411, 295);
stavesmo361794.setAttribute('id', 'stavesmo361794');
stavesmo361794.setBegBarType(VF.Barline.type.NONE);
stavesmo361794.setContext(context);
stavesmo361794.draw();
smo361794v0.draw(context, stavesmo361794);
smo393885.setContext(context);
smo393885.draw();
smo393886.setContext(context);
smo393886.draw();
const stavesmo363857 = new VF.Stave(958, 561, 295);
stavesmo363857.setAttribute('id', 'stavesmo363857');
stavesmo363857.setBegBarType(VF.Barline.type.NONE);
stavesmo363857.setContext(context);
stavesmo363857.draw();
smo363857v0.draw(context, stavesmo363857);
smo393889.setContext(context);
smo393889.draw();
smo393890.setContext(context);
smo393890.draw();
const fmtsmo36181834 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo361818v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361818v0ar = [];
const smo361795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361795'] = smo361795;
smo361795.setAttribute('id', 'smo361795');
smo361818v0ar.push(smo361795);
const smo361796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361796'] = smo361796;
smo361796.setAttribute('id', 'smo361796');
smo361818v0ar.push(smo361796);
const smo361797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361797'] = smo361797;
smo361797.setAttribute('id', 'smo361797');
smo361818v0ar.push(smo361797);
const smo361798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo361798'] = smo361798;
smo361798.setAttribute('id', 'smo361798');
smo361818v0ar.push(smo361798);
const smo361799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo361799'] = smo361799;
smo361799.setAttribute('id', 'smo361799');
smo361818v0ar.push(smo361799);
const smo361800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361800'] = smo361800;
smo361800.setAttribute('id', 'smo361800');
smo361818v0ar.push(smo361800);
const smo361801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361801'] = smo361801;
smo361801.setAttribute('id', 'smo361801');
smo361818v0ar.push(smo361801);
const smo361802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361802'] = smo361802;
smo361802.setAttribute('id', 'smo361802');
smo361818v0ar.push(smo361802);
smo361818v0.addTickables(smo361818v0ar)
fmtsmo36181834.joinVoices([smo361818v0]);
const fmtsmo36387734 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo363877v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363877v0ar = [];
const smo363858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363858'] = smo363858;
smo363858.setAttribute('id', 'smo363858');
smo363877v0ar.push(smo363858);
const smo363859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363859'] = smo363859;
smo363859.setAttribute('id', 'smo363859');
smo363877v0ar.push(smo363859);
const smo363860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363860'] = smo363860;
smo363860.setAttribute('id', 'smo363860');
smo363877v0ar.push(smo363860);
const smo363861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363861'] = smo363861;
smo363861.setAttribute('id', 'smo363861');
smo363877v0ar.push(smo363861);
smo363877v0.addTickables(smo363877v0ar)
fmtsmo36387734.joinVoices([smo363877v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393893 = smo361795.getStemDirection();
smo361795.setStemDirection(dirsmo393893);
smo361796.setStemDirection(dirsmo393893);
smo361797.setStemDirection(dirsmo393893);
smo361798.setStemDirection(dirsmo393893);
const smo393893 = new VF.Beam([smo361795,smo361796,smo361797,smo361798]);
const dirsmo393894 = smo361799.getStemDirection();
smo361799.setStemDirection(dirsmo393894);
smo361800.setStemDirection(dirsmo393894);
smo361801.setStemDirection(dirsmo393894);
smo361802.setStemDirection(dirsmo393894);
const smo393894 = new VF.Beam([smo361799,smo361800,smo361801,smo361802]);
const dirsmo393897 = smo363858.getStemDirection();
smo363858.setStemDirection(dirsmo393897);
smo363859.setStemDirection(dirsmo393897);
const smo393897 = new VF.Beam([smo363858,smo363859]);
const dirsmo393898 = smo363860.getStemDirection();
smo363860.setStemDirection(dirsmo393898);
smo363861.setStemDirection(dirsmo393898);
const smo393898 = new VF.Beam([smo363860,smo363861]);
 
// formatting measures in staff group smo365028
fmtsmo36181834.format([smo361818v0,smo363877v0], 281);
const stavesmo361818 = new VF.Stave(1253, 411, 295);
stavesmo361818.setAttribute('id', 'stavesmo361818');
stavesmo361818.setBegBarType(VF.Barline.type.NONE);
stavesmo361818.setContext(context);
stavesmo361818.draw();
smo361818v0.draw(context, stavesmo361818);
smo393893.setContext(context);
smo393893.draw();
smo393894.setContext(context);
smo393894.draw();
const stavesmo363877 = new VF.Stave(1253, 561, 295);
stavesmo363877.setAttribute('id', 'stavesmo363877');
stavesmo363877.setBegBarType(VF.Barline.type.NONE);
stavesmo363877.setContext(context);
stavesmo363877.draw();
smo363877v0.draw(context, stavesmo363877);
smo393897.setContext(context);
smo393897.draw();
smo393898.setContext(context);
smo393898.draw();
const fmtsmo36183935 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo361839v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361839v0ar = [];
const smo361819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
noteHash['smo361819'] = smo361819;
smo361819.setAttribute('id', 'smo361819');
const smo3618190acc = new VF.Accidental('b');
smo361819.addModifier(smo3618190acc, 0);
smo361839v0ar.push(smo361819);
const smo361820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
noteHash['smo361820'] = smo361820;
smo361820.setAttribute('id', 'smo361820');
smo361839v0ar.push(smo361820);
const smo361821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
noteHash['smo361821'] = smo361821;
smo361821.setAttribute('id', 'smo361821');
smo361839v0ar.push(smo361821);
const smo361822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo361822'] = smo361822;
smo361822.setAttribute('id', 'smo361822');
smo361839v0ar.push(smo361822);
const smo361823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo361823'] = smo361823;
smo361823.setAttribute('id', 'smo361823');
smo361839v0ar.push(smo361823);
smo361839v0.addTickables(smo361839v0ar)
fmtsmo36183935.joinVoices([smo361839v0]);
const fmtsmo36389735 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo363897v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363897v0ar = [];
const smo363878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo363878'] = smo363878;
smo363878.setAttribute('id', 'smo363878');
smo363897v0ar.push(smo363878);
const smo363879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
noteHash['smo363879'] = smo363879;
smo363879.setAttribute('id', 'smo363879');
smo363897v0ar.push(smo363879);
const smo363880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo363880'] = smo363880;
smo363880.setAttribute('id', 'smo363880');
smo363897v0ar.push(smo363880);
const smo363881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo363881'] = smo363881;
smo363881.setAttribute('id', 'smo363881');
smo363897v0ar.push(smo363881);
smo363897v0.addTickables(smo363897v0ar)
fmtsmo36389735.joinVoices([smo363897v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393901 = smo361819.getStemDirection();
smo361819.setStemDirection(dirsmo393901);
smo361820.setStemDirection(dirsmo393901);
const smo393901 = new VF.Beam([smo361819,smo361820]);
const dirsmo393902 = smo361821.getStemDirection();
smo361821.setStemDirection(dirsmo393902);
smo361822.setStemDirection(dirsmo393902);
smo361823.setStemDirection(dirsmo393902);
const smo393902 = new VF.Beam([smo361821,smo361822,smo361823]);
const dirsmo393905 = smo363878.getStemDirection();
smo363878.setStemDirection(dirsmo393905);
smo363879.setStemDirection(dirsmo393905);
const smo393905 = new VF.Beam([smo363878,smo363879]);
const dirsmo393906 = smo363880.getStemDirection();
smo363880.setStemDirection(dirsmo393906);
smo363881.setStemDirection(dirsmo393906);
const smo393906 = new VF.Beam([smo363880,smo363881]);
 
// formatting measures in staff group smo365028
fmtsmo36183935.format([smo361839v0,smo363897v0], 281);
const stavesmo361839 = new VF.Stave(1548, 411, 295);
stavesmo361839.setAttribute('id', 'stavesmo361839');
stavesmo361839.setBegBarType(VF.Barline.type.NONE);
stavesmo361839.setContext(context);
stavesmo361839.draw();
smo361839v0.draw(context, stavesmo361839);
smo393901.setContext(context);
smo393901.draw();
smo393902.setContext(context);
smo393902.draw();
const stavesmo363897 = new VF.Stave(1548, 561, 295);
stavesmo363897.setAttribute('id', 'stavesmo363897');
stavesmo363897.setBegBarType(VF.Barline.type.NONE);
stavesmo363897.setContext(context);
stavesmo363897.draw();
smo363897v0.draw(context, stavesmo363897);
smo393905.setContext(context);
smo393905.draw();
smo393906.setContext(context);
smo393906.draw();
const rightsmo365028stavesmo3618391 = new VF.StaveConnector(stavesmo361839, stavesmo363897).setType(0);
rightsmo365028stavesmo3618391.setContext(context).draw();
const fmtsmo36186136 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo361861v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361861v0ar = [];
const smo361840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo361840'] = smo361840;
smo361840.setAttribute('id', 'smo361840');
smo361861v0ar.push(smo361840);
const smo361841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo361841'] = smo361841;
smo361841.setAttribute('id', 'smo361841');
smo361861v0ar.push(smo361841);
const smo361842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
noteHash['smo361842'] = smo361842;
smo361842.setAttribute('id', 'smo361842');
smo361861v0ar.push(smo361842);
const smo361843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
noteHash['smo361843'] = smo361843;
smo361843.setAttribute('id', 'smo361843');
smo361861v0ar.push(smo361843);
const smo361844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
noteHash['smo361844'] = smo361844;
smo361844.setAttribute('id', 'smo361844');
const smo3618440acc = new VF.Accidental('b');
smo361844.addModifier(smo3618440acc, 0);
const smo3618441acc = new VF.Accidental('b');
smo361844.addModifier(smo3618441acc, 1);
const smo3618442acc = new VF.Accidental('b');
smo361844.addModifier(smo3618442acc, 2);
smo361861v0ar.push(smo361844);
smo361861v0.addTickables(smo361861v0ar)
fmtsmo36186136.joinVoices([smo361861v0]);
const fmtsmo36391836 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo363918v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363918v0ar = [];
const smo363898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo363898'] = smo363898;
smo363898.setAttribute('id', 'smo363898');
smo363918v0ar.push(smo363898);
const smo363899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363899'] = smo363899;
smo363899.setAttribute('id', 'smo363899');
smo363918v0ar.push(smo363899);
const smo363900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo363900'] = smo363900;
smo363900.setAttribute('id', 'smo363900');
smo363918v0ar.push(smo363900);
const smo363901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo363901'] = smo363901;
smo363901.setAttribute('id', 'smo363901');
smo363918v0ar.push(smo363901);
smo363918v0.addTickables(smo363918v0ar)
fmtsmo36391836.joinVoices([smo363918v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393914 = smo361841.getStemDirection();
smo361841.setStemDirection(dirsmo393914);
smo361842.setStemDirection(dirsmo393914);
smo361843.setStemDirection(dirsmo393914);
smo361844.setStemDirection(dirsmo393914);
const smo393914 = new VF.Beam([smo361841,smo361842,smo361843,smo361844]);
const dirsmo393916 = smo363898.getStemDirection();
smo363898.setStemDirection(dirsmo393916);
smo363899.setStemDirection(dirsmo393916);
const smo393916 = new VF.Beam([smo363898,smo363899]);
const dirsmo393917 = smo363900.getStemDirection();
smo363900.setStemDirection(dirsmo393917);
smo363901.setStemDirection(dirsmo393917);
const smo393917 = new VF.Beam([smo363900,smo363901]);
 
// formatting measures in staff group smo365028
fmtsmo36186136.format([smo361861v0,smo363918v0], 233);
const stavesmo361861 = new VF.Stave(73, 789, 295);
stavesmo361861.setAttribute('id', 'stavesmo361861');
stavesmo361861.setBegBarType(1);
stavesmo361861.setEndBarType(5);
stavesmo361861.addClef('treble');
stavesmo361861.setContext(context);
stavesmo361861.draw();
smo361861v0.draw(context, stavesmo361861);
smo393914.setContext(context);
smo393914.draw();
const stavesmo363918 = new VF.Stave(73, 930, 295);
stavesmo363918.setAttribute('id', 'stavesmo363918');
stavesmo363918.setBegBarType(1);
stavesmo363918.setEndBarType(5);
stavesmo363918.addClef('bass');
stavesmo363918.setContext(context);
stavesmo363918.draw();
smo363918v0.draw(context, stavesmo363918);
smo393916.setContext(context);
smo393916.draw();
smo393917.setContext(context);
smo393917.draw();
const leftsmo365028stavesmo3618611 = new VF.StaveConnector(stavesmo361861, stavesmo363918).setType(3);
leftsmo365028stavesmo3618611.setContext(context).draw();
const fmtsmo36188237 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo361882v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361882v0ar = [];
const smo361862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo361862'] = smo361862;
smo361862.setAttribute('id', 'smo361862');
smo361882v0ar.push(smo361862);
const smo361863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo361863'] = smo361863;
smo361863.setAttribute('id', 'smo361863');
smo361882v0ar.push(smo361863);
const smo361864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361864'] = smo361864;
smo361864.setAttribute('id', 'smo361864');
smo361882v0ar.push(smo361864);
const smo361865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo361865'] = smo361865;
smo361865.setAttribute('id', 'smo361865');
const smo3618650acc = new VF.Accidental('b');
smo361865.addModifier(smo3618650acc, 0);
smo361882v0ar.push(smo361865);
smo361882v0.addTickables(smo361882v0ar)
fmtsmo36188237.joinVoices([smo361882v0]);
const fmtsmo36393937 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo363939v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363939v0ar = [];
const smo363919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo363919'] = smo363919;
smo363919.setAttribute('id', 'smo363919');
smo363939v0ar.push(smo363919);
const smo363920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363920'] = smo363920;
smo363920.setAttribute('id', 'smo363920');
smo363939v0ar.push(smo363920);
const smo363921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo363921'] = smo363921;
smo363921.setAttribute('id', 'smo363921');
smo363939v0ar.push(smo363921);
const smo363922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo363922'] = smo363922;
smo363922.setAttribute('id', 'smo363922');
smo363939v0ar.push(smo363922);
smo363939v0.addTickables(smo363939v0ar)
fmtsmo36393937.joinVoices([smo363939v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393919 = smo361863.getStemDirection();
smo361863.setStemDirection(dirsmo393919);
smo361864.setStemDirection(dirsmo393919);
smo361865.setStemDirection(dirsmo393919);
const smo393919 = new VF.Beam([smo361863,smo361864,smo361865]);
const dirsmo393922 = smo363919.getStemDirection();
smo363919.setStemDirection(dirsmo393922);
smo363920.setStemDirection(dirsmo393922);
const smo393922 = new VF.Beam([smo363919,smo363920]);
 
// formatting measures in staff group smo365028
fmtsmo36188237.format([smo361882v0,smo363939v0], 281);
const stavesmo361882 = new VF.Stave(368, 789, 295);
stavesmo361882.setAttribute('id', 'stavesmo361882');
stavesmo361882.setBegBarType(VF.Barline.type.NONE);
stavesmo361882.setContext(context);
stavesmo361882.draw();
smo361882v0.draw(context, stavesmo361882);
smo393919.setContext(context);
smo393919.draw();
const stavesmo363939 = new VF.Stave(368, 930, 295);
stavesmo363939.setAttribute('id', 'stavesmo363939');
stavesmo363939.setBegBarType(VF.Barline.type.NONE);
stavesmo363939.setContext(context);
stavesmo363939.draw();
smo363939v0.draw(context, stavesmo363939);
smo393922.setContext(context);
smo393922.draw();
const fmtsmo36190538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo361905v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361905v0ar = [];
const smo361883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361883'] = smo361883;
smo361883.setAttribute('id', 'smo361883');
smo361905v0ar.push(smo361883);
const smo361885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361885'] = smo361885;
smo361885.setAttribute('id', 'smo361885');
smo361905v0ar.push(smo361885);
const smo361886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361886'] = smo361886;
smo361886.setAttribute('id', 'smo361886');
smo361905v0ar.push(smo361886);
const smo361887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361887'] = smo361887;
smo361887.setAttribute('id', 'smo361887');
smo361905v0ar.push(smo361887);
const smo361888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361888'] = smo361888;
smo361888.setAttribute('id', 'smo361888');
smo361905v0ar.push(smo361888);
const smo361889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361889'] = smo361889;
smo361889.setAttribute('id', 'smo361889');
smo361905v0ar.push(smo361889);
smo361905v0.addTickables(smo361905v0ar)
fmtsmo36190538.joinVoices([smo361905v0]);
const fmtsmo36395938 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo363959v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363959v0ar = [];
const smo363940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363940'] = smo363940;
smo363940.setAttribute('id', 'smo363940');
smo363959v0ar.push(smo363940);
const smo363941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363941'] = smo363941;
smo363941.setAttribute('id', 'smo363941');
smo363959v0ar.push(smo363941);
const smo363942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363942'] = smo363942;
smo363942.setAttribute('id', 'smo363942');
smo363959v0ar.push(smo363942);
const smo363943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo363943'] = smo363943;
smo363943.setAttribute('id', 'smo363943');
const smo3639431acc = new VF.Accidental('b');
smo363943.addModifier(smo3639431acc, 1);
smo363959v0ar.push(smo363943);
smo363959v0.addTickables(smo363959v0ar)
fmtsmo36395938.joinVoices([smo363959v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393925 = smo361883.getStemDirection();
smo361883.setStemDirection(dirsmo393925);
smo361885.setStemDirection(dirsmo393925);
smo361886.setStemDirection(dirsmo393925);
const smo393925 = new VF.Beam([smo361883,smo361885,smo361886]);
const dirsmo393926 = smo361887.getStemDirection();
smo361887.setStemDirection(dirsmo393926);
smo361888.setStemDirection(dirsmo393926);
smo361889.setStemDirection(dirsmo393926);
const smo393926 = new VF.Beam([smo361887,smo361888,smo361889]);
const dirsmo393929 = smo363940.getStemDirection();
smo363940.setStemDirection(dirsmo393929);
smo363941.setStemDirection(dirsmo393929);
const smo393929 = new VF.Beam([smo363940,smo363941]);
const dirsmo393930 = smo363942.getStemDirection();
smo363942.setStemDirection(dirsmo393930);
smo363943.setStemDirection(dirsmo393930);
const smo393930 = new VF.Beam([smo363942,smo363943]);
 
// formatting measures in staff group smo365028
fmtsmo36190538.format([smo361905v0,smo363959v0], 281);
const stavesmo361905 = new VF.Stave(663, 789, 295);
stavesmo361905.setAttribute('id', 'stavesmo361905');
stavesmo361905.setBegBarType(VF.Barline.type.NONE);
stavesmo361905.setContext(context);
stavesmo361905.draw();
smo361905v0.draw(context, stavesmo361905);
smo393925.setContext(context);
smo393925.draw();
smo393926.setContext(context);
smo393926.draw();
const stavesmo363959 = new VF.Stave(663, 930, 295);
stavesmo363959.setAttribute('id', 'stavesmo363959');
stavesmo363959.setBegBarType(VF.Barline.type.NONE);
stavesmo363959.setContext(context);
stavesmo363959.draw();
smo363959v0.draw(context, stavesmo363959);
smo393929.setContext(context);
smo393929.draw();
smo393930.setContext(context);
smo393930.draw();
const fmtsmo36192639 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo361926v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361926v0ar = [];
const smo361906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361906'] = smo361906;
smo361906.setAttribute('id', 'smo361906');
smo361926v0ar.push(smo361906);
const smo361907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361907'] = smo361907;
smo361907.setAttribute('id', 'smo361907');
smo361926v0ar.push(smo361907);
const smo361908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361908'] = smo361908;
smo361908.setAttribute('id', 'smo361908');
smo361926v0ar.push(smo361908);
const smo361909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361909'] = smo361909;
smo361909.setAttribute('id', 'smo361909');
smo361926v0ar.push(smo361909);
const smo361910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo361910'] = smo361910;
smo361910.setAttribute('id', 'smo361910');
const smo3619100acc = new VF.Accidental('b');
smo361910.addModifier(smo3619100acc, 0);
const smo3619101acc = new VF.Accidental('b');
smo361910.addModifier(smo3619101acc, 1);
const smo3619102acc = new VF.Accidental('b');
smo361910.addModifier(smo3619102acc, 2);
smo361926v0ar.push(smo361910);
smo361926v0.addTickables(smo361926v0ar)
fmtsmo36192639.joinVoices([smo361926v0]);
const fmtsmo36397939 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo363979v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363979v0ar = [];
const smo363960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo363960'] = smo363960;
smo363960.setAttribute('id', 'smo363960');
smo363979v0ar.push(smo363960);
const smo363961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo363961'] = smo363961;
smo363961.setAttribute('id', 'smo363961');
smo363979v0ar.push(smo363961);
const smo363962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo363962'] = smo363962;
smo363962.setAttribute('id', 'smo363962');
smo363979v0ar.push(smo363962);
const smo363963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo363963'] = smo363963;
smo363963.setAttribute('id', 'smo363963');
smo363979v0ar.push(smo363963);
smo363979v0.addTickables(smo363979v0ar)
fmtsmo36397939.joinVoices([smo363979v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393933 = smo361907.getStemDirection();
smo361907.setStemDirection(dirsmo393933);
smo361908.setStemDirection(dirsmo393933);
smo361909.setStemDirection(dirsmo393933);
smo361910.setStemDirection(dirsmo393933);
const smo393933 = new VF.Beam([smo361907,smo361908,smo361909,smo361910]);
const dirsmo393936 = smo363960.getStemDirection();
smo363960.setStemDirection(dirsmo393936);
smo363961.setStemDirection(dirsmo393936);
const smo393936 = new VF.Beam([smo363960,smo363961]);
const dirsmo393937 = smo363962.getStemDirection();
smo363962.setStemDirection(dirsmo393937);
smo363963.setStemDirection(dirsmo393937);
const smo393937 = new VF.Beam([smo363962,smo363963]);
 
// formatting measures in staff group smo365028
fmtsmo36192639.format([smo361926v0,smo363979v0], 281);
const stavesmo361926 = new VF.Stave(958, 789, 295);
stavesmo361926.setAttribute('id', 'stavesmo361926');
stavesmo361926.setBegBarType(VF.Barline.type.NONE);
stavesmo361926.setContext(context);
stavesmo361926.draw();
smo361926v0.draw(context, stavesmo361926);
smo393933.setContext(context);
smo393933.draw();
const stavesmo363979 = new VF.Stave(958, 930, 295);
stavesmo363979.setAttribute('id', 'stavesmo363979');
stavesmo363979.setBegBarType(VF.Barline.type.NONE);
stavesmo363979.setContext(context);
stavesmo363979.draw();
smo363979v0.draw(context, stavesmo363979);
smo393936.setContext(context);
smo393936.draw();
smo393937.setContext(context);
smo393937.draw();
const fmtsmo36195040 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo361950v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361950v0ar = [];
const smo361927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361927'] = smo361927;
smo361927.setAttribute('id', 'smo361927');
smo361950v0ar.push(smo361927);
const smo361929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361929'] = smo361929;
smo361929.setAttribute('id', 'smo361929');
smo361950v0ar.push(smo361929);
const smo361930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361930'] = smo361930;
smo361930.setAttribute('id', 'smo361930');
smo361950v0ar.push(smo361930);
const smo361931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361931'] = smo361931;
smo361931.setAttribute('id', 'smo361931');
smo361950v0ar.push(smo361931);
const smo361932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361932'] = smo361932;
smo361932.setAttribute('id', 'smo361932');
smo361950v0ar.push(smo361932);
const smo361933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo361933'] = smo361933;
smo361933.setAttribute('id', 'smo361933');
smo361950v0ar.push(smo361933);
const smo361934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361934'] = smo361934;
smo361934.setAttribute('id', 'smo361934');
smo361950v0ar.push(smo361934);
smo361950v0.addTickables(smo361950v0ar)
fmtsmo36195040.joinVoices([smo361950v0]);
const fmtsmo36399940 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo363999v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363999v0ar = [];
const smo363980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363980'] = smo363980;
smo363980.setAttribute('id', 'smo363980');
smo363999v0ar.push(smo363980);
const smo363981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363981'] = smo363981;
smo363981.setAttribute('id', 'smo363981');
smo363999v0ar.push(smo363981);
const smo363982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363982'] = smo363982;
smo363982.setAttribute('id', 'smo363982');
smo363999v0ar.push(smo363982);
const smo363983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo363983'] = smo363983;
smo363983.setAttribute('id', 'smo363983');
smo363999v0ar.push(smo363983);
smo363999v0.addTickables(smo363999v0ar)
fmtsmo36399940.joinVoices([smo363999v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393940 = smo361927.getStemDirection();
smo361927.setStemDirection(dirsmo393940);
smo361929.setStemDirection(dirsmo393940);
smo361930.setStemDirection(dirsmo393940);
smo361931.setStemDirection(dirsmo393940);
const smo393940 = new VF.Beam([smo361927,smo361929,smo361930,smo361931]);
const dirsmo393941 = smo361932.getStemDirection();
smo361932.setStemDirection(dirsmo393941);
smo361933.setStemDirection(dirsmo393941);
smo361934.setStemDirection(dirsmo393941);
const smo393941 = new VF.Beam([smo361932,smo361933,smo361934]);
const dirsmo393944 = smo363980.getStemDirection();
smo363980.setStemDirection(dirsmo393944);
smo363981.setStemDirection(dirsmo393944);
const smo393944 = new VF.Beam([smo363980,smo363981]);
const dirsmo393945 = smo363982.getStemDirection();
smo363982.setStemDirection(dirsmo393945);
smo363983.setStemDirection(dirsmo393945);
const smo393945 = new VF.Beam([smo363982,smo363983]);
 
// formatting measures in staff group smo365028
fmtsmo36195040.format([smo361950v0,smo363999v0], 281);
const stavesmo361950 = new VF.Stave(1253, 789, 295);
stavesmo361950.setAttribute('id', 'stavesmo361950');
stavesmo361950.setBegBarType(VF.Barline.type.NONE);
stavesmo361950.setContext(context);
stavesmo361950.draw();
smo361950v0.draw(context, stavesmo361950);
smo393940.setContext(context);
smo393940.draw();
smo393941.setContext(context);
smo393941.draw();
const stavesmo363999 = new VF.Stave(1253, 930, 295);
stavesmo363999.setAttribute('id', 'stavesmo363999');
stavesmo363999.setBegBarType(VF.Barline.type.NONE);
stavesmo363999.setContext(context);
stavesmo363999.draw();
smo363999v0.draw(context, stavesmo363999);
smo393944.setContext(context);
smo393944.draw();
smo393945.setContext(context);
smo393945.draw();
const fmtsmo36197041 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo361970v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361970v0ar = [];
const smo361951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361951'] = smo361951;
smo361951.setAttribute('id', 'smo361951');
smo361970v0ar.push(smo361951);
const smo361952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361952'] = smo361952;
smo361952.setAttribute('id', 'smo361952');
smo361970v0ar.push(smo361952);
const smo361953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361953'] = smo361953;
smo361953.setAttribute('id', 'smo361953');
smo361970v0ar.push(smo361953);
const smo361954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo361954'] = smo361954;
smo361954.setAttribute('id', 'smo361954');
const smo3619540acc = new VF.Accidental('b');
smo361954.addModifier(smo3619540acc, 0);
smo361970v0ar.push(smo361954);
smo361970v0.addTickables(smo361970v0ar)
fmtsmo36197041.joinVoices([smo361970v0]);
const fmtsmo36401941 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo364019v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364019v0ar = [];
const smo364000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364000'] = smo364000;
smo364000.setAttribute('id', 'smo364000');
smo364019v0ar.push(smo364000);
const smo364001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364001'] = smo364001;
smo364001.setAttribute('id', 'smo364001');
smo364019v0ar.push(smo364001);
const smo364002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364002'] = smo364002;
smo364002.setAttribute('id', 'smo364002');
smo364019v0ar.push(smo364002);
const smo364003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo364003'] = smo364003;
smo364003.setAttribute('id', 'smo364003');
smo364019v0ar.push(smo364003);
smo364019v0.addTickables(smo364019v0ar)
fmtsmo36401941.joinVoices([smo364019v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393948 = smo361952.getStemDirection();
smo361952.setStemDirection(dirsmo393948);
smo361953.setStemDirection(dirsmo393948);
smo361954.setStemDirection(dirsmo393948);
const smo393948 = new VF.Beam([smo361952,smo361953,smo361954]);
const dirsmo393951 = smo364000.getStemDirection();
smo364000.setStemDirection(dirsmo393951);
smo364001.setStemDirection(dirsmo393951);
const smo393951 = new VF.Beam([smo364000,smo364001]);
const dirsmo393952 = smo364002.getStemDirection();
smo364002.setStemDirection(dirsmo393952);
smo364003.setStemDirection(dirsmo393952);
const smo393952 = new VF.Beam([smo364002,smo364003]);
 
// formatting measures in staff group smo365028
fmtsmo36197041.format([smo361970v0,smo364019v0], 281);
const stavesmo361970 = new VF.Stave(1548, 789, 295);
stavesmo361970.setAttribute('id', 'stavesmo361970');
stavesmo361970.setBegBarType(VF.Barline.type.NONE);
stavesmo361970.setContext(context);
stavesmo361970.draw();
smo361970v0.draw(context, stavesmo361970);
smo393948.setContext(context);
smo393948.draw();
const stavesmo364019 = new VF.Stave(1548, 930, 295);
stavesmo364019.setAttribute('id', 'stavesmo364019');
stavesmo364019.setBegBarType(VF.Barline.type.NONE);
stavesmo364019.setContext(context);
stavesmo364019.draw();
smo364019v0.draw(context, stavesmo364019);
smo393951.setContext(context);
smo393951.draw();
smo393952.setContext(context);
smo393952.draw();
const rightsmo365028stavesmo3619701 = new VF.StaveConnector(stavesmo361970, stavesmo364019).setType(0);
rightsmo365028stavesmo3619701.setContext(context).draw();
const fmtsmo36199342 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo361993v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361993v0ar = [];
const smo361971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361971'] = smo361971;
smo361971.setAttribute('id', 'smo361971');
smo361993v0ar.push(smo361971);
const smo361973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361973'] = smo361973;
smo361973.setAttribute('id', 'smo361973');
smo361993v0ar.push(smo361973);
const smo361974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361974'] = smo361974;
smo361974.setAttribute('id', 'smo361974');
smo361993v0ar.push(smo361974);
const smo361975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361975'] = smo361975;
smo361975.setAttribute('id', 'smo361975');
smo361993v0ar.push(smo361975);
const smo361976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361976'] = smo361976;
smo361976.setAttribute('id', 'smo361976');
smo361993v0ar.push(smo361976);
const smo361977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361977'] = smo361977;
smo361977.setAttribute('id', 'smo361977');
smo361993v0ar.push(smo361977);
smo361993v0.addTickables(smo361993v0ar)
fmtsmo36199342.joinVoices([smo361993v0]);
const fmtsmo36403942 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo364039v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364039v0ar = [];
const smo364020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364020'] = smo364020;
smo364020.setAttribute('id', 'smo364020');
smo364039v0ar.push(smo364020);
const smo364021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364021'] = smo364021;
smo364021.setAttribute('id', 'smo364021');
smo364039v0ar.push(smo364021);
const smo364022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364022'] = smo364022;
smo364022.setAttribute('id', 'smo364022');
smo364039v0ar.push(smo364022);
const smo364023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo364023'] = smo364023;
smo364023.setAttribute('id', 'smo364023');
const smo3640231acc = new VF.Accidental('b');
smo364023.addModifier(smo3640231acc, 1);
smo364039v0ar.push(smo364023);
smo364039v0.addTickables(smo364039v0ar)
fmtsmo36403942.joinVoices([smo364039v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393963 = smo361971.getStemDirection();
smo361971.setStemDirection(dirsmo393963);
smo361973.setStemDirection(dirsmo393963);
smo361974.setStemDirection(dirsmo393963);
const smo393963 = new VF.Beam([smo361971,smo361973,smo361974]);
const dirsmo393964 = smo361975.getStemDirection();
smo361975.setStemDirection(dirsmo393964);
smo361976.setStemDirection(dirsmo393964);
smo361977.setStemDirection(dirsmo393964);
const smo393964 = new VF.Beam([smo361975,smo361976,smo361977]);
const dirsmo393967 = smo364020.getStemDirection();
smo364020.setStemDirection(dirsmo393967);
smo364021.setStemDirection(dirsmo393967);
const smo393967 = new VF.Beam([smo364020,smo364021]);
const dirsmo393968 = smo364022.getStemDirection();
smo364022.setStemDirection(dirsmo393968);
smo364023.setStemDirection(dirsmo393968);
const smo393968 = new VF.Beam([smo364022,smo364023]);
 
// formatting measures in staff group smo365028
fmtsmo36199342.format([smo361993v0,smo364039v0], 237);
const stavesmo361993 = new VF.Stave(73, 1148, 295);
stavesmo361993.setAttribute('id', 'stavesmo361993');
stavesmo361993.setBegBarType(1);
stavesmo361993.addClef('treble');
stavesmo361993.setContext(context);
stavesmo361993.draw();
smo361993v0.draw(context, stavesmo361993);
smo393963.setContext(context);
smo393963.draw();
smo393964.setContext(context);
smo393964.draw();
const stavesmo364039 = new VF.Stave(73, 1303, 295);
stavesmo364039.setAttribute('id', 'stavesmo364039');
stavesmo364039.setBegBarType(1);
stavesmo364039.addClef('bass');
stavesmo364039.setContext(context);
stavesmo364039.draw();
smo364039v0.draw(context, stavesmo364039);
smo393967.setContext(context);
smo393967.draw();
smo393968.setContext(context);
smo393968.draw();
const leftsmo365028stavesmo3619931 = new VF.StaveConnector(stavesmo361993, stavesmo364039).setType(3);
leftsmo365028stavesmo3619931.setContext(context).draw();
const fmtsmo36201343 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo362013v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362013v0ar = [];
const smo361994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361994'] = smo361994;
smo361994.setAttribute('id', 'smo361994');
smo362013v0ar.push(smo361994);
const smo361995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361995'] = smo361995;
smo361995.setAttribute('id', 'smo361995');
smo362013v0ar.push(smo361995);
const smo361996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
noteHash['smo361996'] = smo361996;
smo361996.setAttribute('id', 'smo361996');
smo362013v0ar.push(smo361996);
const smo361997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
noteHash['smo361997'] = smo361997;
smo361997.setAttribute('id', 'smo361997');
smo362013v0ar.push(smo361997);
smo362013v0.addTickables(smo362013v0ar)
fmtsmo36201343.joinVoices([smo362013v0]);
const fmtsmo36405943 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo364059v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364059v0ar = [];
const smo364040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364040'] = smo364040;
smo364040.setAttribute('id', 'smo364040');
smo364059v0ar.push(smo364040);
const smo364041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo364041'] = smo364041;
smo364041.setAttribute('id', 'smo364041');
smo364059v0ar.push(smo364041);
const smo364042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo364042'] = smo364042;
smo364042.setAttribute('id', 'smo364042');
smo364059v0ar.push(smo364042);
const smo364043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
noteHash['smo364043'] = smo364043;
smo364043.setAttribute('id', 'smo364043');
const smo3640430acc = new VF.Accidental('b');
smo364043.addModifier(smo3640430acc, 0);
const smo3640431acc = new VF.Accidental('b');
smo364043.addModifier(smo3640431acc, 1);
smo364059v0ar.push(smo364043);
smo364059v0.addTickables(smo364059v0ar)
fmtsmo36405943.joinVoices([smo364059v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393971 = smo361995.getStemDirection();
smo361995.setStemDirection(dirsmo393971);
smo361996.setStemDirection(dirsmo393971);
smo361997.setStemDirection(dirsmo393971);
const smo393971 = new VF.Beam([smo361995,smo361996,smo361997]);
const dirsmo393974 = smo364040.getStemDirection();
smo364040.setStemDirection(dirsmo393974);
smo364041.setStemDirection(dirsmo393974);
const smo393974 = new VF.Beam([smo364040,smo364041]);
const dirsmo393975 = smo364042.getStemDirection();
smo364042.setStemDirection(dirsmo393975);
smo364043.setStemDirection(dirsmo393975);
const smo393975 = new VF.Beam([smo364042,smo364043]);
 
// formatting measures in staff group smo365028
fmtsmo36201343.format([smo362013v0,smo364059v0], 281);
const stavesmo362013 = new VF.Stave(368, 1148, 295);
stavesmo362013.setAttribute('id', 'stavesmo362013');
stavesmo362013.setBegBarType(VF.Barline.type.NONE);
stavesmo362013.setContext(context);
stavesmo362013.draw();
smo362013v0.draw(context, stavesmo362013);
smo393971.setContext(context);
smo393971.draw();
const stavesmo364059 = new VF.Stave(368, 1303, 295);
stavesmo364059.setAttribute('id', 'stavesmo364059');
stavesmo364059.setBegBarType(VF.Barline.type.NONE);
stavesmo364059.setContext(context);
stavesmo364059.draw();
smo364059v0.draw(context, stavesmo364059);
smo393974.setContext(context);
smo393974.draw();
smo393975.setContext(context);
smo393975.draw();
const fmtsmo36203844 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo362038v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362038v0ar = [];
const smo362014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
noteHash['smo362014'] = smo362014;
smo362014.setAttribute('id', 'smo362014');
const smo3620140acc = new VF.Accidental('b');
smo362014.addModifier(smo3620140acc, 0);
const smo3620142acc = new VF.Accidental('b');
smo362014.addModifier(smo3620142acc, 2);
smo362038v0ar.push(smo362014);
const smo362016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo362016'] = smo362016;
smo362016.setAttribute('id', 'smo362016');
smo362038v0ar.push(smo362016);
const smo362017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362017'] = smo362017;
smo362017.setAttribute('id', 'smo362017');
smo362038v0ar.push(smo362017);
const smo362018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362018'] = smo362018;
smo362018.setAttribute('id', 'smo362018');
smo362038v0ar.push(smo362018);
const smo362019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362019'] = smo362019;
smo362019.setAttribute('id', 'smo362019');
smo362038v0ar.push(smo362019);
const smo362020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo362020'] = smo362020;
smo362020.setAttribute('id', 'smo362020');
smo362038v0ar.push(smo362020);
const smo362021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362021'] = smo362021;
smo362021.setAttribute('id', 'smo362021');
smo362038v0ar.push(smo362021);
const smo362022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo362022'] = smo362022;
smo362022.setAttribute('id', 'smo362022');
smo362038v0ar.push(smo362022);
smo362038v0.addTickables(smo362038v0ar)
fmtsmo36203844.joinVoices([smo362038v0]);
const fmtsmo36407944 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo364079v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364079v0ar = [];
const smo364060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo364060'] = smo364060;
smo364060.setAttribute('id', 'smo364060');
smo364079v0ar.push(smo364060);
const smo364061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo364061'] = smo364061;
smo364061.setAttribute('id', 'smo364061');
const smo3640611acc = new VF.Accidental('b');
smo364061.addModifier(smo3640611acc, 1);
smo364079v0ar.push(smo364061);
const smo364062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo364062'] = smo364062;
smo364062.setAttribute('id', 'smo364062');
smo364079v0ar.push(smo364062);
const smo364063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo364063'] = smo364063;
smo364063.setAttribute('id', 'smo364063');
smo364079v0ar.push(smo364063);
smo364079v0.addTickables(smo364079v0ar)
fmtsmo36407944.joinVoices([smo364079v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393978 = smo362014.getStemDirection();
smo362014.setStemDirection(dirsmo393978);
smo362016.setStemDirection(dirsmo393978);
smo362017.setStemDirection(dirsmo393978);
smo362018.setStemDirection(dirsmo393978);
const smo393978 = new VF.Beam([smo362014,smo362016,smo362017,smo362018]);
const dirsmo393979 = smo362019.getStemDirection();
smo362019.setStemDirection(dirsmo393979);
smo362020.setStemDirection(dirsmo393979);
smo362021.setStemDirection(dirsmo393979);
smo362022.setStemDirection(dirsmo393979);
const smo393979 = new VF.Beam([smo362019,smo362020,smo362021,smo362022]);
const dirsmo393982 = smo364060.getStemDirection();
smo364060.setStemDirection(dirsmo393982);
smo364061.setStemDirection(dirsmo393982);
const smo393982 = new VF.Beam([smo364060,smo364061]);
const dirsmo393983 = smo364062.getStemDirection();
smo364062.setStemDirection(dirsmo393983);
smo364063.setStemDirection(dirsmo393983);
const smo393983 = new VF.Beam([smo364062,smo364063]);
 
// formatting measures in staff group smo365028
fmtsmo36203844.format([smo362038v0,smo364079v0], 281);
const stavesmo362038 = new VF.Stave(663, 1148, 295);
stavesmo362038.setAttribute('id', 'stavesmo362038');
stavesmo362038.setBegBarType(VF.Barline.type.NONE);
stavesmo362038.setContext(context);
stavesmo362038.draw();
smo362038v0.draw(context, stavesmo362038);
smo393978.setContext(context);
smo393978.draw();
smo393979.setContext(context);
smo393979.draw();
const stavesmo364079 = new VF.Stave(663, 1303, 295);
stavesmo364079.setAttribute('id', 'stavesmo364079');
stavesmo364079.setBegBarType(VF.Barline.type.NONE);
stavesmo364079.setContext(context);
stavesmo364079.draw();
smo364079v0.draw(context, stavesmo364079);
smo393982.setContext(context);
smo393982.draw();
smo393983.setContext(context);
smo393983.draw();
const fmtsmo36205845 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo362058v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362058v0ar = [];
const smo362039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362039'] = smo362039;
smo362039.setAttribute('id', 'smo362039');
smo362058v0ar.push(smo362039);
const smo362040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362040'] = smo362040;
smo362040.setAttribute('id', 'smo362040');
smo362058v0ar.push(smo362040);
const smo362041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo362041'] = smo362041;
smo362041.setAttribute('id', 'smo362041');
smo362058v0ar.push(smo362041);
const smo362042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo362042'] = smo362042;
smo362042.setAttribute('id', 'smo362042');
const smo3620420acc = new VF.Accidental('b');
smo362042.addModifier(smo3620420acc, 0);
smo362058v0ar.push(smo362042);
smo362058v0.addTickables(smo362058v0ar)
fmtsmo36205845.joinVoices([smo362058v0]);
const fmtsmo36409945 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo364099v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364099v0ar = [];
const smo364080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo364080'] = smo364080;
smo364080.setAttribute('id', 'smo364080');
smo364099v0ar.push(smo364080);
const smo364081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364081'] = smo364081;
smo364081.setAttribute('id', 'smo364081');
smo364099v0ar.push(smo364081);
const smo364082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo364082'] = smo364082;
smo364082.setAttribute('id', 'smo364082');
smo364099v0ar.push(smo364082);
const smo364083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo364083'] = smo364083;
smo364083.setAttribute('id', 'smo364083');
smo364099v0ar.push(smo364083);
smo364099v0.addTickables(smo364099v0ar)
fmtsmo36409945.joinVoices([smo364099v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393986 = smo362040.getStemDirection();
smo362040.setStemDirection(dirsmo393986);
smo362041.setStemDirection(dirsmo393986);
smo362042.setStemDirection(dirsmo393986);
const smo393986 = new VF.Beam([smo362040,smo362041,smo362042]);
const dirsmo393989 = smo364080.getStemDirection();
smo364080.setStemDirection(dirsmo393989);
smo364081.setStemDirection(dirsmo393989);
const smo393989 = new VF.Beam([smo364080,smo364081]);
const dirsmo393990 = smo364082.getStemDirection();
smo364082.setStemDirection(dirsmo393990);
smo364083.setStemDirection(dirsmo393990);
const smo393990 = new VF.Beam([smo364082,smo364083]);
 
// formatting measures in staff group smo365028
fmtsmo36205845.format([smo362058v0,smo364099v0], 281);
const stavesmo362058 = new VF.Stave(958, 1148, 295);
stavesmo362058.setAttribute('id', 'stavesmo362058');
stavesmo362058.setBegBarType(VF.Barline.type.NONE);
stavesmo362058.setContext(context);
stavesmo362058.draw();
smo362058v0.draw(context, stavesmo362058);
smo393986.setContext(context);
smo393986.draw();
const stavesmo364099 = new VF.Stave(958, 1303, 295);
stavesmo364099.setAttribute('id', 'stavesmo364099');
stavesmo364099.setBegBarType(VF.Barline.type.NONE);
stavesmo364099.setContext(context);
stavesmo364099.draw();
smo364099v0.draw(context, stavesmo364099);
smo393989.setContext(context);
smo393989.draw();
smo393990.setContext(context);
smo393990.draw();
const fmtsmo36208146 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo362081v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362081v0ar = [];
const smo362059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo362059'] = smo362059;
smo362059.setAttribute('id', 'smo362059');
smo362081v0ar.push(smo362059);
const smo362061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362061'] = smo362061;
smo362061.setAttribute('id', 'smo362061');
smo362081v0ar.push(smo362061);
const smo362062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo362062'] = smo362062;
smo362062.setAttribute('id', 'smo362062');
smo362081v0ar.push(smo362062);
const smo362063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362063'] = smo362063;
smo362063.setAttribute('id', 'smo362063');
smo362081v0ar.push(smo362063);
const smo362064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo362064'] = smo362064;
smo362064.setAttribute('id', 'smo362064');
smo362081v0ar.push(smo362064);
const smo362065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362065'] = smo362065;
smo362065.setAttribute('id', 'smo362065');
smo362081v0ar.push(smo362065);
smo362081v0.addTickables(smo362081v0ar)
fmtsmo36208146.joinVoices([smo362081v0]);
const fmtsmo36411946 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo364119v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364119v0ar = [];
const smo364100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364100'] = smo364100;
smo364100.setAttribute('id', 'smo364100');
smo364119v0ar.push(smo364100);
const smo364101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364101'] = smo364101;
smo364101.setAttribute('id', 'smo364101');
smo364119v0ar.push(smo364101);
const smo364102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364102'] = smo364102;
smo364102.setAttribute('id', 'smo364102');
smo364119v0ar.push(smo364102);
const smo364103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo364103'] = smo364103;
smo364103.setAttribute('id', 'smo364103');
const smo3641031acc = new VF.Accidental('b');
smo364103.addModifier(smo3641031acc, 1);
smo364119v0ar.push(smo364103);
smo364119v0.addTickables(smo364119v0ar)
fmtsmo36411946.joinVoices([smo364119v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo393993 = smo362059.getStemDirection();
smo362059.setStemDirection(dirsmo393993);
smo362061.setStemDirection(dirsmo393993);
smo362062.setStemDirection(dirsmo393993);
const smo393993 = new VF.Beam([smo362059,smo362061,smo362062]);
const dirsmo393994 = smo362063.getStemDirection();
smo362063.setStemDirection(dirsmo393994);
smo362064.setStemDirection(dirsmo393994);
smo362065.setStemDirection(dirsmo393994);
const smo393994 = new VF.Beam([smo362063,smo362064,smo362065]);
const dirsmo393997 = smo364100.getStemDirection();
smo364100.setStemDirection(dirsmo393997);
smo364101.setStemDirection(dirsmo393997);
const smo393997 = new VF.Beam([smo364100,smo364101]);
const dirsmo393998 = smo364102.getStemDirection();
smo364102.setStemDirection(dirsmo393998);
smo364103.setStemDirection(dirsmo393998);
const smo393998 = new VF.Beam([smo364102,smo364103]);
 
// formatting measures in staff group smo365028
fmtsmo36208146.format([smo362081v0,smo364119v0], 281);
const stavesmo362081 = new VF.Stave(1253, 1148, 295);
stavesmo362081.setAttribute('id', 'stavesmo362081');
stavesmo362081.setBegBarType(VF.Barline.type.NONE);
stavesmo362081.setContext(context);
stavesmo362081.draw();
smo362081v0.draw(context, stavesmo362081);
smo393993.setContext(context);
smo393993.draw();
smo393994.setContext(context);
smo393994.draw();
const stavesmo364119 = new VF.Stave(1253, 1303, 295);
stavesmo364119.setAttribute('id', 'stavesmo364119');
stavesmo364119.setBegBarType(VF.Barline.type.NONE);
stavesmo364119.setContext(context);
stavesmo364119.draw();
smo364119v0.draw(context, stavesmo364119);
smo393997.setContext(context);
smo393997.draw();
smo393998.setContext(context);
smo393998.draw();
const fmtsmo36210247 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo362102v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362102v0ar = [];
const smo362082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362082'] = smo362082;
smo362082.setAttribute('id', 'smo362082');
smo362102v0ar.push(smo362082);
const smo362083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362083'] = smo362083;
smo362083.setAttribute('id', 'smo362083');
smo362102v0ar.push(smo362083);
const smo362084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362084'] = smo362084;
smo362084.setAttribute('id', 'smo362084');
smo362102v0ar.push(smo362084);
const smo362085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362085'] = smo362085;
smo362085.setAttribute('id', 'smo362085');
smo362102v0ar.push(smo362085);
const smo362086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo362086'] = smo362086;
smo362086.setAttribute('id', 'smo362086');
const smo3620860acc = new VF.Accidental('b');
smo362086.addModifier(smo3620860acc, 0);
const smo3620861acc = new VF.Accidental('b');
smo362086.addModifier(smo3620861acc, 1);
const smo3620862acc = new VF.Accidental('b');
smo362086.addModifier(smo3620862acc, 2);
smo362102v0ar.push(smo362086);
smo362102v0.addTickables(smo362102v0ar)
fmtsmo36210247.joinVoices([smo362102v0]);
const fmtsmo36413947 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo364139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364139v0ar = [];
const smo364120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364120'] = smo364120;
smo364120.setAttribute('id', 'smo364120');
smo364139v0ar.push(smo364120);
const smo364121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo364121'] = smo364121;
smo364121.setAttribute('id', 'smo364121');
smo364139v0ar.push(smo364121);
const smo364122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo364122'] = smo364122;
smo364122.setAttribute('id', 'smo364122');
smo364139v0ar.push(smo364122);
const smo364123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo364123'] = smo364123;
smo364123.setAttribute('id', 'smo364123');
smo364139v0ar.push(smo364123);
smo364139v0.addTickables(smo364139v0ar)
fmtsmo36413947.joinVoices([smo364139v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394001 = smo362083.getStemDirection();
smo362083.setStemDirection(dirsmo394001);
smo362084.setStemDirection(dirsmo394001);
smo362085.setStemDirection(dirsmo394001);
smo362086.setStemDirection(dirsmo394001);
const smo394001 = new VF.Beam([smo362083,smo362084,smo362085,smo362086]);
const dirsmo394004 = smo364120.getStemDirection();
smo364120.setStemDirection(dirsmo394004);
smo364121.setStemDirection(dirsmo394004);
const smo394004 = new VF.Beam([smo364120,smo364121]);
const dirsmo394005 = smo364122.getStemDirection();
smo364122.setStemDirection(dirsmo394005);
smo364123.setStemDirection(dirsmo394005);
const smo394005 = new VF.Beam([smo364122,smo364123]);
 
// formatting measures in staff group smo365028
fmtsmo36210247.format([smo362102v0,smo364139v0], 281);
const stavesmo362102 = new VF.Stave(1548, 1148, 295);
stavesmo362102.setAttribute('id', 'stavesmo362102');
stavesmo362102.setBegBarType(VF.Barline.type.NONE);
stavesmo362102.setContext(context);
stavesmo362102.draw();
smo362102v0.draw(context, stavesmo362102);
smo394001.setContext(context);
smo394001.draw();
const stavesmo364139 = new VF.Stave(1548, 1303, 295);
stavesmo364139.setAttribute('id', 'stavesmo364139');
stavesmo364139.setBegBarType(VF.Barline.type.NONE);
stavesmo364139.setContext(context);
stavesmo364139.draw();
smo364139v0.draw(context, stavesmo364139);
smo394004.setContext(context);
smo394004.draw();
smo394005.setContext(context);
smo394005.draw();
const rightsmo365028stavesmo3621021 = new VF.StaveConnector(stavesmo362102, stavesmo364139).setType(0);
rightsmo365028stavesmo3621021.setContext(context).draw();
const fmtsmo36212648 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo362126v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362126v0ar = [];
const smo362103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo362103'] = smo362103;
smo362103.setAttribute('id', 'smo362103');
smo362126v0ar.push(smo362103);
const smo362105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362105'] = smo362105;
smo362105.setAttribute('id', 'smo362105');
smo362126v0ar.push(smo362105);
const smo362106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362106'] = smo362106;
smo362106.setAttribute('id', 'smo362106');
smo362126v0ar.push(smo362106);
const smo362107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo362107'] = smo362107;
smo362107.setAttribute('id', 'smo362107');
smo362126v0ar.push(smo362107);
const smo362108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo362108'] = smo362108;
smo362108.setAttribute('id', 'smo362108');
smo362126v0ar.push(smo362108);
const smo362109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo362109'] = smo362109;
smo362109.setAttribute('id', 'smo362109');
smo362126v0ar.push(smo362109);
const smo362110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362110'] = smo362110;
smo362110.setAttribute('id', 'smo362110');
smo362126v0ar.push(smo362110);
smo362126v0.addTickables(smo362126v0ar)
fmtsmo36212648.joinVoices([smo362126v0]);
const fmtsmo36415948 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo364159v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364159v0ar = [];
const smo364140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364140'] = smo364140;
smo364140.setAttribute('id', 'smo364140');
smo364159v0ar.push(smo364140);
const smo364141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364141'] = smo364141;
smo364141.setAttribute('id', 'smo364141');
smo364159v0ar.push(smo364141);
const smo364142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364142'] = smo364142;
smo364142.setAttribute('id', 'smo364142');
smo364159v0ar.push(smo364142);
const smo364143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo364143'] = smo364143;
smo364143.setAttribute('id', 'smo364143');
smo364159v0ar.push(smo364143);
smo364159v0.addTickables(smo364159v0ar)
fmtsmo36415948.joinVoices([smo364159v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394016 = smo362103.getStemDirection();
smo362103.setStemDirection(dirsmo394016);
smo362105.setStemDirection(dirsmo394016);
smo362106.setStemDirection(dirsmo394016);
smo362107.setStemDirection(dirsmo394016);
const smo394016 = new VF.Beam([smo362103,smo362105,smo362106,smo362107]);
const dirsmo394017 = smo362108.getStemDirection();
smo362108.setStemDirection(dirsmo394017);
smo362109.setStemDirection(dirsmo394017);
smo362110.setStemDirection(dirsmo394017);
const smo394017 = new VF.Beam([smo362108,smo362109,smo362110]);
const dirsmo394020 = smo364140.getStemDirection();
smo364140.setStemDirection(dirsmo394020);
smo364141.setStemDirection(dirsmo394020);
const smo394020 = new VF.Beam([smo364140,smo364141]);
const dirsmo394021 = smo364142.getStemDirection();
smo364142.setStemDirection(dirsmo394021);
smo364143.setStemDirection(dirsmo394021);
const smo394021 = new VF.Beam([smo364142,smo364143]);
 
// formatting measures in staff group smo365028
fmtsmo36212648.format([smo362126v0,smo364159v0], 237);
const stavesmo362126 = new VF.Stave(73, 1501, 295);
stavesmo362126.setAttribute('id', 'stavesmo362126');
stavesmo362126.setBegBarType(1);
stavesmo362126.addClef('treble');
stavesmo362126.setContext(context);
stavesmo362126.draw();
smo362126v0.draw(context, stavesmo362126);
smo394016.setContext(context);
smo394016.draw();
smo394017.setContext(context);
smo394017.draw();
const stavesmo364159 = new VF.Stave(73, 1657, 295);
stavesmo364159.setAttribute('id', 'stavesmo364159');
stavesmo364159.setBegBarType(1);
stavesmo364159.addClef('bass');
stavesmo364159.setContext(context);
stavesmo364159.draw();
smo364159v0.draw(context, stavesmo364159);
smo394020.setContext(context);
smo394020.draw();
smo394021.setContext(context);
smo394021.draw();
const leftsmo365028stavesmo3621261 = new VF.StaveConnector(stavesmo362126, stavesmo364159).setType(3);
leftsmo365028stavesmo3621261.setContext(context).draw();
const fmtsmo36214649 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo362146v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362146v0ar = [];
const smo362127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362127'] = smo362127;
smo362127.setAttribute('id', 'smo362127');
smo362146v0ar.push(smo362127);
const smo362128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362128'] = smo362128;
smo362128.setAttribute('id', 'smo362128');
smo362146v0ar.push(smo362128);
const smo362129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362129'] = smo362129;
smo362129.setAttribute('id', 'smo362129');
smo362146v0ar.push(smo362129);
const smo362130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo362130'] = smo362130;
smo362130.setAttribute('id', 'smo362130');
smo362146v0ar.push(smo362130);
smo362146v0.addTickables(smo362146v0ar)
fmtsmo36214649.joinVoices([smo362146v0]);
const fmtsmo36417949 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo364179v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364179v0ar = [];
const smo364160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364160'] = smo364160;
smo364160.setAttribute('id', 'smo364160');
smo364179v0ar.push(smo364160);
const smo364161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364161'] = smo364161;
smo364161.setAttribute('id', 'smo364161');
smo364179v0ar.push(smo364161);
const smo364162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364162'] = smo364162;
smo364162.setAttribute('id', 'smo364162');
smo364179v0ar.push(smo364162);
const smo364163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364163'] = smo364163;
smo364163.setAttribute('id', 'smo364163');
smo364179v0ar.push(smo364163);
smo364179v0.addTickables(smo364179v0ar)
fmtsmo36417949.joinVoices([smo364179v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394024 = smo362128.getStemDirection();
smo362128.setStemDirection(dirsmo394024);
smo362129.setStemDirection(dirsmo394024);
smo362130.setStemDirection(dirsmo394024);
const smo394024 = new VF.Beam([smo362128,smo362129,smo362130]);
const dirsmo394027 = smo364160.getStemDirection();
smo364160.setStemDirection(dirsmo394027);
smo364161.setStemDirection(dirsmo394027);
const smo394027 = new VF.Beam([smo364160,smo364161]);
 
// formatting measures in staff group smo365028
fmtsmo36214649.format([smo362146v0,smo364179v0], 281);
const stavesmo362146 = new VF.Stave(368, 1501, 295);
stavesmo362146.setAttribute('id', 'stavesmo362146');
stavesmo362146.setBegBarType(VF.Barline.type.NONE);
stavesmo362146.setContext(context);
stavesmo362146.draw();
smo362146v0.draw(context, stavesmo362146);
smo394024.setContext(context);
smo394024.draw();
const stavesmo364179 = new VF.Stave(368, 1657, 295);
stavesmo364179.setAttribute('id', 'stavesmo364179');
stavesmo364179.setBegBarType(VF.Barline.type.NONE);
stavesmo364179.setContext(context);
stavesmo364179.draw();
smo364179v0.draw(context, stavesmo364179);
smo394027.setContext(context);
smo394027.draw();
const fmtsmo36217050 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo362170v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362170v0ar = [];
const smo362147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362147'] = smo362147;
smo362147.setAttribute('id', 'smo362147');
smo362170v0ar.push(smo362147);
const smo362148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362148'] = smo362148;
smo362148.setAttribute('id', 'smo362148');
smo362170v0ar.push(smo362148);
const smo362149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo362149'] = smo362149;
smo362149.setAttribute('id', 'smo362149');
smo362170v0ar.push(smo362149);
const smo362150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362150'] = smo362150;
smo362150.setAttribute('id', 'smo362150');
smo362170v0ar.push(smo362150);
const smo362151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362151'] = smo362151;
smo362151.setAttribute('id', 'smo362151');
smo362170v0ar.push(smo362151);
const smo362152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362152'] = smo362152;
smo362152.setAttribute('id', 'smo362152');
smo362170v0ar.push(smo362152);
const smo362153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo362153'] = smo362153;
smo362153.setAttribute('id', 'smo362153');
smo362170v0ar.push(smo362153);
const smo362154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362154'] = smo362154;
smo362154.setAttribute('id', 'smo362154');
smo362170v0ar.push(smo362154);
smo362170v0.addTickables(smo362170v0ar)
fmtsmo36217050.joinVoices([smo362170v0]);
const fmtsmo36419950 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo364199v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364199v0ar = [];
const smo364180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo364180'] = smo364180;
smo364180.setAttribute('id', 'smo364180');
smo364199v0ar.push(smo364180);
const smo364181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364181'] = smo364181;
smo364181.setAttribute('id', 'smo364181');
smo364199v0ar.push(smo364181);
const smo364182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo364182'] = smo364182;
smo364182.setAttribute('id', 'smo364182');
const smo3641820acc = new VF.Accidental('b');
smo364182.addModifier(smo3641820acc, 0);
const smo3641821acc = new VF.Accidental('b');
smo364182.addModifier(smo3641821acc, 1);
smo364199v0ar.push(smo364182);
const smo364183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364183'] = smo364183;
smo364183.setAttribute('id', 'smo364183');
smo364199v0ar.push(smo364183);
smo364199v0.addTickables(smo364199v0ar)
fmtsmo36419950.joinVoices([smo364199v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394030 = smo362147.getStemDirection();
smo362147.setStemDirection(dirsmo394030);
smo362148.setStemDirection(dirsmo394030);
smo362149.setStemDirection(dirsmo394030);
smo362150.setStemDirection(dirsmo394030);
const smo394030 = new VF.Beam([smo362147,smo362148,smo362149,smo362150]);
const dirsmo394031 = smo362151.getStemDirection();
smo362151.setStemDirection(dirsmo394031);
smo362152.setStemDirection(dirsmo394031);
smo362153.setStemDirection(dirsmo394031);
smo362154.setStemDirection(dirsmo394031);
const smo394031 = new VF.Beam([smo362151,smo362152,smo362153,smo362154]);
const dirsmo394034 = smo364180.getStemDirection();
smo364180.setStemDirection(dirsmo394034);
smo364181.setStemDirection(dirsmo394034);
const smo394034 = new VF.Beam([smo364180,smo364181]);
const dirsmo394035 = smo364182.getStemDirection();
smo364182.setStemDirection(dirsmo394035);
smo364183.setStemDirection(dirsmo394035);
const smo394035 = new VF.Beam([smo364182,smo364183]);
 
// formatting measures in staff group smo365028
fmtsmo36217050.format([smo362170v0,smo364199v0], 281);
const stavesmo362170 = new VF.Stave(663, 1501, 295);
stavesmo362170.setAttribute('id', 'stavesmo362170');
stavesmo362170.setBegBarType(VF.Barline.type.NONE);
stavesmo362170.setContext(context);
stavesmo362170.draw();
smo362170v0.draw(context, stavesmo362170);
smo394030.setContext(context);
smo394030.draw();
smo394031.setContext(context);
smo394031.draw();
const stavesmo364199 = new VF.Stave(663, 1657, 295);
stavesmo364199.setAttribute('id', 'stavesmo364199');
stavesmo364199.setBegBarType(VF.Barline.type.NONE);
stavesmo364199.setContext(context);
stavesmo364199.draw();
smo364199v0.draw(context, stavesmo364199);
smo394034.setContext(context);
smo394034.draw();
smo394035.setContext(context);
smo394035.draw();
const fmtsmo36219451 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo362194v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362194v0ar = [];
const smo362171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362171'] = smo362171;
smo362171.setAttribute('id', 'smo362171');
smo362194v0ar.push(smo362171);
const smo362172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362172'] = smo362172;
smo362172.setAttribute('id', 'smo362172');
smo362194v0ar.push(smo362172);
const smo362173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo362173'] = smo362173;
smo362173.setAttribute('id', 'smo362173');
smo362194v0ar.push(smo362173);
const smo362174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362174'] = smo362174;
smo362174.setAttribute('id', 'smo362174');
smo362194v0ar.push(smo362174);
const smo362175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo362175'] = smo362175;
smo362175.setAttribute('id', 'smo362175');
smo362194v0ar.push(smo362175);
const smo362176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362176'] = smo362176;
smo362176.setAttribute('id', 'smo362176');
smo362194v0ar.push(smo362176);
const smo362177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo362177'] = smo362177;
smo362177.setAttribute('id', 'smo362177');
smo362194v0ar.push(smo362177);
const smo362178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362178'] = smo362178;
smo362178.setAttribute('id', 'smo362178');
smo362194v0ar.push(smo362178);
smo362194v0.addTickables(smo362194v0ar)
fmtsmo36219451.joinVoices([smo362194v0]);
const fmtsmo36421951 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo364219v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364219v0ar = [];
const smo364200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo364200'] = smo364200;
smo364200.setAttribute('id', 'smo364200');
smo364219v0ar.push(smo364200);
const smo364201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364201'] = smo364201;
smo364201.setAttribute('id', 'smo364201');
smo364219v0ar.push(smo364201);
const smo364202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo364202'] = smo364202;
smo364202.setAttribute('id', 'smo364202');
const smo3642020acc = new VF.Accidental('b');
smo364202.addModifier(smo3642020acc, 0);
const smo3642021acc = new VF.Accidental('b');
smo364202.addModifier(smo3642021acc, 1);
smo364219v0ar.push(smo364202);
const smo364203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364203'] = smo364203;
smo364203.setAttribute('id', 'smo364203');
smo364219v0ar.push(smo364203);
smo364219v0.addTickables(smo364219v0ar)
fmtsmo36421951.joinVoices([smo364219v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394038 = smo362171.getStemDirection();
smo362171.setStemDirection(dirsmo394038);
smo362172.setStemDirection(dirsmo394038);
smo362173.setStemDirection(dirsmo394038);
smo362174.setStemDirection(dirsmo394038);
const smo394038 = new VF.Beam([smo362171,smo362172,smo362173,smo362174]);
const dirsmo394039 = smo362175.getStemDirection();
smo362175.setStemDirection(dirsmo394039);
smo362176.setStemDirection(dirsmo394039);
smo362177.setStemDirection(dirsmo394039);
smo362178.setStemDirection(dirsmo394039);
const smo394039 = new VF.Beam([smo362175,smo362176,smo362177,smo362178]);
const dirsmo394042 = smo364200.getStemDirection();
smo364200.setStemDirection(dirsmo394042);
smo364201.setStemDirection(dirsmo394042);
const smo394042 = new VF.Beam([smo364200,smo364201]);
const dirsmo394043 = smo364202.getStemDirection();
smo364202.setStemDirection(dirsmo394043);
smo364203.setStemDirection(dirsmo394043);
const smo394043 = new VF.Beam([smo364202,smo364203]);
 
// formatting measures in staff group smo365028
fmtsmo36219451.format([smo362194v0,smo364219v0], 281);
const stavesmo362194 = new VF.Stave(958, 1501, 295);
stavesmo362194.setAttribute('id', 'stavesmo362194');
stavesmo362194.setBegBarType(VF.Barline.type.NONE);
stavesmo362194.setContext(context);
stavesmo362194.draw();
smo362194v0.draw(context, stavesmo362194);
smo394038.setContext(context);
smo394038.draw();
smo394039.setContext(context);
smo394039.draw();
const stavesmo364219 = new VF.Stave(958, 1657, 295);
stavesmo364219.setAttribute('id', 'stavesmo364219');
stavesmo364219.setBegBarType(VF.Barline.type.NONE);
stavesmo364219.setContext(context);
stavesmo364219.draw();
smo364219v0.draw(context, stavesmo364219);
smo394042.setContext(context);
smo394042.draw();
smo394043.setContext(context);
smo394043.draw();
const fmtsmo36221752 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo362217v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362217v0ar = [];
const smo362195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo362195'] = smo362195;
smo362195.setAttribute('id', 'smo362195');
smo362217v0ar.push(smo362195);
const smo362196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362196'] = smo362196;
smo362196.setAttribute('id', 'smo362196');
smo362217v0ar.push(smo362196);
const smo362197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362197'] = smo362197;
smo362197.setAttribute('id', 'smo362197');
smo362217v0ar.push(smo362197);
const smo362198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo362198'] = smo362198;
smo362198.setAttribute('id', 'smo362198');
smo362217v0ar.push(smo362198);
const smo362199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo362199'] = smo362199;
smo362199.setAttribute('id', 'smo362199');
smo362217v0ar.push(smo362199);
const smo362200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo362200'] = smo362200;
smo362200.setAttribute('id', 'smo362200');
smo362217v0ar.push(smo362200);
const smo362201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo362201'] = smo362201;
smo362201.setAttribute('id', 'smo362201');
smo362217v0ar.push(smo362201);
smo362217v0.addTickables(smo362217v0ar)
fmtsmo36221752.joinVoices([smo362217v0]);
const fmtsmo36423952 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo364239v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364239v0ar = [];
const smo364220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364220'] = smo364220;
smo364220.setAttribute('id', 'smo364220');
smo364239v0ar.push(smo364220);
const smo364221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364221'] = smo364221;
smo364221.setAttribute('id', 'smo364221');
smo364239v0ar.push(smo364221);
const smo364222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364222'] = smo364222;
smo364222.setAttribute('id', 'smo364222');
smo364239v0ar.push(smo364222);
const smo364223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo364223'] = smo364223;
smo364223.setAttribute('id', 'smo364223');
smo364239v0ar.push(smo364223);
smo364239v0.addTickables(smo364239v0ar)
fmtsmo36423952.joinVoices([smo364239v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394046 = smo362195.getStemDirection();
smo362195.setStemDirection(dirsmo394046);
smo362196.setStemDirection(dirsmo394046);
smo362197.setStemDirection(dirsmo394046);
smo362198.setStemDirection(dirsmo394046);
const smo394046 = new VF.Beam([smo362195,smo362196,smo362197,smo362198]);
const dirsmo394047 = smo362199.getStemDirection();
smo362199.setStemDirection(dirsmo394047);
smo362200.setStemDirection(dirsmo394047);
smo362201.setStemDirection(dirsmo394047);
const smo394047 = new VF.Beam([smo362199,smo362200,smo362201]);
const dirsmo394050 = smo364220.getStemDirection();
smo364220.setStemDirection(dirsmo394050);
smo364221.setStemDirection(dirsmo394050);
const smo394050 = new VF.Beam([smo364220,smo364221]);
const dirsmo394051 = smo364222.getStemDirection();
smo364222.setStemDirection(dirsmo394051);
smo364223.setStemDirection(dirsmo394051);
const smo394051 = new VF.Beam([smo364222,smo364223]);
 
// formatting measures in staff group smo365028
fmtsmo36221752.format([smo362217v0,smo364239v0], 281);
const stavesmo362217 = new VF.Stave(1253, 1501, 295);
stavesmo362217.setAttribute('id', 'stavesmo362217');
stavesmo362217.setBegBarType(VF.Barline.type.NONE);
stavesmo362217.setContext(context);
stavesmo362217.draw();
smo362217v0.draw(context, stavesmo362217);
smo394046.setContext(context);
smo394046.draw();
smo394047.setContext(context);
smo394047.draw();
const stavesmo364239 = new VF.Stave(1253, 1657, 295);
stavesmo364239.setAttribute('id', 'stavesmo364239');
stavesmo364239.setBegBarType(VF.Barline.type.NONE);
stavesmo364239.setContext(context);
stavesmo364239.draw();
smo364239v0.draw(context, stavesmo364239);
smo394050.setContext(context);
smo394050.draw();
smo394051.setContext(context);
smo394051.draw();
const fmtsmo36223653 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo362236v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362236v0ar = [];
const smo362218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362218'] = smo362218;
smo362218.setAttribute('id', 'smo362218');
smo362236v0ar.push(smo362218);
const smo362219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo362219'] = smo362219;
smo362219.setAttribute('id', 'smo362219');
smo362236v0ar.push(smo362219);
const smo362220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362220'] = smo362220;
smo362220.setAttribute('id', 'smo362220');
smo362236v0ar.push(smo362220);
smo362236v0.addTickables(smo362236v0ar)
fmtsmo36223653.joinVoices([smo362236v0]);
const fmtsmo36425953 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo364259v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364259v0ar = [];
const smo364240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364240'] = smo364240;
smo364240.setAttribute('id', 'smo364240');
smo364259v0ar.push(smo364240);
const smo364241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364241'] = smo364241;
smo364241.setAttribute('id', 'smo364241');
smo364259v0ar.push(smo364241);
const smo364242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo364242'] = smo364242;
smo364242.setAttribute('id', 'smo364242');
smo364259v0ar.push(smo364242);
const smo364243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364243'] = smo364243;
smo364243.setAttribute('id', 'smo364243');
smo364259v0ar.push(smo364243);
smo364259v0.addTickables(smo364259v0ar)
fmtsmo36425953.joinVoices([smo364259v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394056 = smo364240.getStemDirection();
smo364240.setStemDirection(dirsmo394056);
smo364241.setStemDirection(dirsmo394056);
const smo394056 = new VF.Beam([smo364240,smo364241]);
 
// formatting measures in staff group smo365028
fmtsmo36223653.format([smo362236v0,smo364259v0], 281);
const stavesmo362236 = new VF.Stave(1548, 1501, 295);
stavesmo362236.setAttribute('id', 'stavesmo362236');
stavesmo362236.setBegBarType(VF.Barline.type.NONE);
stavesmo362236.setContext(context);
stavesmo362236.draw();
smo362236v0.draw(context, stavesmo362236);
const stavesmo364259 = new VF.Stave(1548, 1657, 295);
stavesmo364259.setAttribute('id', 'stavesmo364259');
stavesmo364259.setBegBarType(VF.Barline.type.NONE);
stavesmo364259.setContext(context);
stavesmo364259.draw();
smo364259v0.draw(context, stavesmo364259);
smo394056.setContext(context);
smo394056.draw();
const rightsmo365028stavesmo3622361 = new VF.StaveConnector(stavesmo362236, stavesmo364259).setType(0);
rightsmo365028stavesmo3622361.setContext(context).draw();
const fmtsmo36225854 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo362258v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362258v0ar = [];
const smo362237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo362237'] = smo362237;
smo362237.setAttribute('id', 'smo362237');
smo362258v0ar.push(smo362237);
const smo362239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo362239'] = smo362239;
smo362239.setAttribute('id', 'smo362239');
const smo3622390acc = new VF.Accidental('b');
smo362239.addModifier(smo3622390acc, 0);
smo362258v0ar.push(smo362239);
const smo362240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo362240'] = smo362240;
smo362240.setAttribute('id', 'smo362240');
const smo3622401acc = new VF.Accidental('n');
smo362240.addModifier(smo3622401acc, 1);
smo362258v0ar.push(smo362240);
const smo362241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo362241'] = smo362241;
smo362241.setAttribute('id', 'smo362241');
smo362258v0ar.push(smo362241);
const smo362242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
noteHash['smo362242'] = smo362242;
smo362242.setAttribute('id', 'smo362242');
smo362258v0ar.push(smo362242);
smo362258v0.addTickables(smo362258v0ar)
fmtsmo36225854.joinVoices([smo362258v0]);
const fmtsmo36427954 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo364279v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364279v0ar = [];
const smo364260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo364260'] = smo364260;
smo364260.setAttribute('id', 'smo364260');
smo364279v0ar.push(smo364260);
const smo364261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364261'] = smo364261;
smo364261.setAttribute('id', 'smo364261');
smo364279v0ar.push(smo364261);
const smo364262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364262'] = smo364262;
smo364262.setAttribute('id', 'smo364262');
smo364279v0ar.push(smo364262);
const smo364263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364263'] = smo364263;
smo364263.setAttribute('id', 'smo364263');
smo364279v0ar.push(smo364263);
smo364279v0.addTickables(smo364279v0ar)
fmtsmo36427954.joinVoices([smo364279v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394065 = smo362237.getStemDirection();
smo362237.setStemDirection(dirsmo394065);
smo362239.setStemDirection(dirsmo394065);
smo362240.setStemDirection(dirsmo394065);
const smo394065 = new VF.Beam([smo362237,smo362239,smo362240]);
const dirsmo394066 = smo362241.getStemDirection();
smo362241.setStemDirection(dirsmo394066);
smo362242.setStemDirection(dirsmo394066);
const smo394066 = new VF.Beam([smo362241,smo362242]);
const dirsmo394068 = smo364260.getStemDirection();
smo364260.setStemDirection(dirsmo394068);
smo364261.setStemDirection(dirsmo394068);
const smo394068 = new VF.Beam([smo364260,smo364261]);
const dirsmo394069 = smo364262.getStemDirection();
smo364262.setStemDirection(dirsmo394069);
smo364263.setStemDirection(dirsmo394069);
const smo394069 = new VF.Beam([smo364262,smo364263]);
 
// formatting measures in staff group smo365028
fmtsmo36225854.format([smo362258v0,smo364279v0], 195);
const stavesmo362258 = new VF.Stave(73, 1860, 295);
stavesmo362258.setAttribute('id', 'stavesmo362258');
stavesmo362258.setBegBarType(4);
stavesmo362258.addClef('treble');
const keysmo362258 = new VF.KeySignature('Bb');
keysmo362258.cancelKey('C');
keysmo362258.addToStave(stavesmo362258);
stavesmo362258.setContext(context);
stavesmo362258.draw();
smo362258v0.draw(context, stavesmo362258);
smo394065.setContext(context);
smo394065.draw();
smo394066.setContext(context);
smo394066.draw();
const stavesmo364279 = new VF.Stave(73, 2009, 295);
stavesmo364279.setAttribute('id', 'stavesmo364279');
stavesmo364279.setBegBarType(4);
stavesmo364279.addClef('bass');
const keysmo364279 = new VF.KeySignature('Bb');
keysmo364279.cancelKey('C');
keysmo364279.addToStave(stavesmo364279);
stavesmo364279.setContext(context);
stavesmo364279.draw();
smo364279v0.draw(context, stavesmo364279);
smo394068.setContext(context);
smo394068.draw();
smo394069.setContext(context);
smo394069.draw();
const leftsmo365028stavesmo3622581 = new VF.StaveConnector(stavesmo362258, stavesmo364279).setType(3);
leftsmo365028stavesmo3622581.setContext(context).draw();
const fmtsmo36228155 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo362281v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362281v0ar = [];
const smo362259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
noteHash['smo362259'] = smo362259;
smo362259.setAttribute('id', 'smo362259');
smo362281v0ar.push(smo362259);
smo362281v0.addTickables(smo362281v0ar)
fmtsmo36228155.joinVoices([smo362281v0]);
const smo362281v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362281v1ar = [];
const smo362260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362260'] = smo362260;
smo362260.setAttribute('id', 'smo362260');
smo362281v1ar.push(smo362260);
const smo362261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo362261'] = smo362261;
smo362261.setAttribute('id', 'smo362261');
smo362281v1ar.push(smo362261);
const smo362262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362262'] = smo362262;
smo362262.setAttribute('id', 'smo362262');
smo362281v1ar.push(smo362262);
const smo362263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo362263'] = smo362263;
smo362263.setAttribute('id', 'smo362263');
smo362281v1ar.push(smo362263);
const smo362264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362264'] = smo362264;
smo362264.setAttribute('id', 'smo362264');
smo362281v1ar.push(smo362264);
const smo362265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362265'] = smo362265;
smo362265.setAttribute('id', 'smo362265');
smo362281v1ar.push(smo362265);
smo362281v1.addTickables(smo362281v1ar)
fmtsmo36228155.joinVoices([smo362281v1]);
const fmtsmo36429955 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo364299v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364299v0ar = [];
const smo364280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo364280'] = smo364280;
smo364280.setAttribute('id', 'smo364280');
smo364299v0ar.push(smo364280);
const smo364281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364281'] = smo364281;
smo364281.setAttribute('id', 'smo364281');
smo364299v0ar.push(smo364281);
const smo364282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo364282'] = smo364282;
smo364282.setAttribute('id', 'smo364282');
smo364299v0ar.push(smo364282);
const smo364283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364283'] = smo364283;
smo364283.setAttribute('id', 'smo364283');
smo364299v0ar.push(smo364283);
smo364299v0.addTickables(smo364299v0ar)
fmtsmo36429955.joinVoices([smo364299v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394071 = smo362261.getStemDirection();
smo362261.setStemDirection(dirsmo394071);
smo362262.setStemDirection(dirsmo394071);
const smo394071 = new VF.Beam([smo362261,smo362262]);
const dirsmo394072 = smo362263.getStemDirection();
smo362263.setStemDirection(dirsmo394072);
smo362264.setStemDirection(dirsmo394072);
smo362265.setStemDirection(dirsmo394072);
const smo394072 = new VF.Beam([smo362263,smo362264,smo362265]);
const dirsmo394075 = smo364280.getStemDirection();
smo364280.setStemDirection(dirsmo394075);
smo364281.setStemDirection(dirsmo394075);
const smo394075 = new VF.Beam([smo364280,smo364281]);
const dirsmo394076 = smo364282.getStemDirection();
smo364282.setStemDirection(dirsmo394076);
smo364283.setStemDirection(dirsmo394076);
const smo394076 = new VF.Beam([smo364282,smo364283]);
 
// formatting measures in staff group smo365028
fmtsmo36228155.format([smo362281v0,smo362281v1,smo364299v0], 281);
const stavesmo362281 = new VF.Stave(368, 1860, 295);
stavesmo362281.setAttribute('id', 'stavesmo362281');
stavesmo362281.setBegBarType(VF.Barline.type.NONE);
stavesmo362281.setContext(context);
stavesmo362281.draw();
smo362281v0.draw(context, stavesmo362281);
smo362281v1.draw(context, stavesmo362281);
smo394071.setContext(context);
smo394071.draw();
smo394072.setContext(context);
smo394072.draw();
const stavesmo364299 = new VF.Stave(368, 2009, 295);
stavesmo364299.setAttribute('id', 'stavesmo364299');
stavesmo364299.setBegBarType(VF.Barline.type.NONE);
stavesmo364299.setContext(context);
stavesmo364299.draw();
smo364299v0.draw(context, stavesmo364299);
smo394075.setContext(context);
smo394075.draw();
smo394076.setContext(context);
smo394076.draw();
const fmtsmo36230256 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo362302v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362302v0ar = [];
const smo362282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo362282'] = smo362282;
smo362282.setAttribute('id', 'smo362282');
smo362302v0ar.push(smo362282);
const smo362283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362283'] = smo362283;
smo362283.setAttribute('id', 'smo362283');
const smo3622830acc = new VF.Accidental('n');
smo362283.addModifier(smo3622830acc, 0);
smo362302v0ar.push(smo362283);
const smo362284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo362284'] = smo362284;
smo362284.setAttribute('id', 'smo362284');
smo362302v0ar.push(smo362284);
const smo362285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo362285'] = smo362285;
smo362285.setAttribute('id', 'smo362285');
smo362302v0ar.push(smo362285);
const smo362286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
noteHash['smo362286'] = smo362286;
smo362286.setAttribute('id', 'smo362286');
smo362302v0ar.push(smo362286);
smo362302v0.addTickables(smo362302v0ar)
fmtsmo36230256.joinVoices([smo362302v0]);
const fmtsmo36431956 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo364319v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364319v0ar = [];
const smo364300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo364300'] = smo364300;
smo364300.setAttribute('id', 'smo364300');
smo364319v0ar.push(smo364300);
const smo364301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364301'] = smo364301;
smo364301.setAttribute('id', 'smo364301');
smo364319v0ar.push(smo364301);
const smo364302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo364302'] = smo364302;
smo364302.setAttribute('id', 'smo364302');
smo364319v0ar.push(smo364302);
const smo364303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364303'] = smo364303;
smo364303.setAttribute('id', 'smo364303');
smo364319v0ar.push(smo364303);
smo364319v0.addTickables(smo364319v0ar)
fmtsmo36431956.joinVoices([smo364319v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394079 = smo362282.getStemDirection();
smo362282.setStemDirection(dirsmo394079);
smo362283.setStemDirection(dirsmo394079);
smo362284.setStemDirection(dirsmo394079);
const smo394079 = new VF.Beam([smo362282,smo362283,smo362284]);
const dirsmo394080 = smo362285.getStemDirection();
smo362285.setStemDirection(dirsmo394080);
smo362286.setStemDirection(dirsmo394080);
const smo394080 = new VF.Beam([smo362285,smo362286]);
const dirsmo394083 = smo364300.getStemDirection();
smo364300.setStemDirection(dirsmo394083);
smo364301.setStemDirection(dirsmo394083);
const smo394083 = new VF.Beam([smo364300,smo364301]);
const dirsmo394084 = smo364302.getStemDirection();
smo364302.setStemDirection(dirsmo394084);
smo364303.setStemDirection(dirsmo394084);
const smo394084 = new VF.Beam([smo364302,smo364303]);
 
// formatting measures in staff group smo365028
fmtsmo36230256.format([smo362302v0,smo364319v0], 281);
const stavesmo362302 = new VF.Stave(663, 1860, 295);
stavesmo362302.setAttribute('id', 'stavesmo362302');
stavesmo362302.setBegBarType(VF.Barline.type.NONE);
stavesmo362302.setContext(context);
stavesmo362302.draw();
smo362302v0.draw(context, stavesmo362302);
smo394079.setContext(context);
smo394079.draw();
smo394080.setContext(context);
smo394080.draw();
const stavesmo364319 = new VF.Stave(663, 2009, 295);
stavesmo364319.setAttribute('id', 'stavesmo364319');
stavesmo364319.setBegBarType(VF.Barline.type.NONE);
stavesmo364319.setContext(context);
stavesmo364319.draw();
smo364319v0.draw(context, stavesmo364319);
smo394083.setContext(context);
smo394083.draw();
smo394084.setContext(context);
smo394084.draw();
const fmtsmo36232757 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo362327v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362327v0ar = [];
const smo362303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo362303'] = smo362303;
smo362303.setAttribute('id', 'smo362303');
smo362327v0ar.push(smo362303);
const smo362304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo362304'] = smo362304;
smo362304.setAttribute('id', 'smo362304');
smo362304.addModifier(new VF.Dot(), 0);
smo362304.addModifier(new VF.Dot(), 1);
smo362304.addModifier(new VF.Dot(), 2);
smo362327v0ar.push(smo362304);
const smo362305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo362305'] = smo362305;
smo362305.setAttribute('id', 'smo362305');
smo362327v0ar.push(smo362305);
smo362327v0.addTickables(smo362327v0ar)
fmtsmo36232757.joinVoices([smo362327v0]);
const smo362327v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362327v1ar = [];
const smo362306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362306'] = smo362306;
smo362306.setAttribute('id', 'smo362306');
smo362327v1ar.push(smo362306);
const smo362307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo362307'] = smo362307;
smo362307.setAttribute('id', 'smo362307');
smo362327v1ar.push(smo362307);
const smo362308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo362308'] = smo362308;
smo362308.setAttribute('id', 'smo362308');
const smo3623080acc = new VF.Accidental('b');
smo362308.addModifier(smo3623080acc, 0);
smo362327v1ar.push(smo362308);
const smo362309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo362309'] = smo362309;
smo362309.setAttribute('id', 'smo362309');
const smo3623090acc = new VF.Accidental('n');
smo362309.addModifier(smo3623090acc, 0);
smo362327v1ar.push(smo362309);
const smo362310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362310'] = smo362310;
smo362310.setAttribute('id', 'smo362310');
smo362327v1ar.push(smo362310);
const smo362311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo362311'] = smo362311;
smo362311.setAttribute('id', 'smo362311');
smo362327v1ar.push(smo362311);
smo362327v1.addTickables(smo362327v1ar)
fmtsmo36232757.joinVoices([smo362327v1]);
const fmtsmo36433957 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo364339v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364339v0ar = [];
const smo364320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364320'] = smo364320;
smo364320.setAttribute('id', 'smo364320');
smo364339v0ar.push(smo364320);
const smo364321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo364321'] = smo364321;
smo364321.setAttribute('id', 'smo364321');
smo364339v0ar.push(smo364321);
const smo364322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo364322'] = smo364322;
smo364322.setAttribute('id', 'smo364322');
smo364339v0ar.push(smo364322);
const smo364323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo364323'] = smo364323;
smo364323.setAttribute('id', 'smo364323');
smo364339v0ar.push(smo364323);
smo364339v0.addTickables(smo364339v0ar)
fmtsmo36433957.joinVoices([smo364339v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394087 = smo362304.getStemDirection();
smo362304.setStemDirection(dirsmo394087);
smo362305.setStemDirection(dirsmo394087);
const smo394087 = new VF.Beam([smo362304,smo362305]);
const dirsmo394088 = smo362307.getStemDirection();
smo362307.setStemDirection(dirsmo394088);
smo362308.setStemDirection(dirsmo394088);
const smo394088 = new VF.Beam([smo362307,smo362308]);
const dirsmo394089 = smo362309.getStemDirection();
smo362309.setStemDirection(dirsmo394089);
smo362310.setStemDirection(dirsmo394089);
smo362311.setStemDirection(dirsmo394089);
const smo394089 = new VF.Beam([smo362309,smo362310,smo362311]);
const dirsmo394092 = smo364320.getStemDirection();
smo364320.setStemDirection(dirsmo394092);
smo364321.setStemDirection(dirsmo394092);
const smo394092 = new VF.Beam([smo364320,smo364321]);
const dirsmo394093 = smo364322.getStemDirection();
smo364322.setStemDirection(dirsmo394093);
smo364323.setStemDirection(dirsmo394093);
const smo394093 = new VF.Beam([smo364322,smo364323]);
 
// formatting measures in staff group smo365028
fmtsmo36232757.format([smo362327v0,smo362327v1,smo364339v0], 281);
const stavesmo362327 = new VF.Stave(958, 1860, 295);
stavesmo362327.setAttribute('id', 'stavesmo362327');
stavesmo362327.setBegBarType(VF.Barline.type.NONE);
stavesmo362327.setContext(context);
stavesmo362327.draw();
smo362327v0.draw(context, stavesmo362327);
smo362327v1.draw(context, stavesmo362327);
smo394087.setContext(context);
smo394087.draw();
smo394088.setContext(context);
smo394088.draw();
smo394089.setContext(context);
smo394089.draw();
const stavesmo364339 = new VF.Stave(958, 2009, 295);
stavesmo364339.setAttribute('id', 'stavesmo364339');
stavesmo364339.setBegBarType(VF.Barline.type.NONE);
stavesmo364339.setContext(context);
stavesmo364339.draw();
smo364339v0.draw(context, stavesmo364339);
smo394092.setContext(context);
smo394092.draw();
smo394093.setContext(context);
smo394093.draw();
const fmtsmo36234958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo362349v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362349v0ar = [];
const smo362328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362328'] = smo362328;
smo362328.setAttribute('id', 'smo362328');
smo362349v0ar.push(smo362328);
const smo362329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362329'] = smo362329;
smo362329.setAttribute('id', 'smo362329');
smo362349v0ar.push(smo362329);
const smo362330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362330'] = smo362330;
smo362330.setAttribute('id', 'smo362330');
smo362349v0ar.push(smo362330);
const smo362331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362331'] = smo362331;
smo362331.setAttribute('id', 'smo362331');
smo362349v0ar.push(smo362331);
const smo362332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362332'] = smo362332;
smo362332.setAttribute('id', 'smo362332');
smo362349v0ar.push(smo362332);
const smo362333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362333'] = smo362333;
smo362333.setAttribute('id', 'smo362333');
smo362349v0ar.push(smo362333);
smo362349v0.addTickables(smo362349v0ar)
fmtsmo36234958.joinVoices([smo362349v0]);
const fmtsmo36435958 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo364359v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364359v0ar = [];
const smo364340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo364340'] = smo364340;
smo364340.setAttribute('id', 'smo364340');
smo364359v0ar.push(smo364340);
const smo364341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo364341'] = smo364341;
smo364341.setAttribute('id', 'smo364341');
smo364359v0ar.push(smo364341);
const smo364342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364342'] = smo364342;
smo364342.setAttribute('id', 'smo364342');
smo364359v0ar.push(smo364342);
const smo364343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo364343'] = smo364343;
smo364343.setAttribute('id', 'smo364343');
const smo3643430acc = new VF.Accidental('b');
smo364343.addModifier(smo3643430acc, 0);
const smo3643431acc = new VF.Accidental('b');
smo364343.addModifier(smo3643431acc, 1);
smo364359v0ar.push(smo364343);
smo364359v0.addTickables(smo364359v0ar)
fmtsmo36435958.joinVoices([smo364359v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394096 = smo362328.getStemDirection();
smo362328.setStemDirection(dirsmo394096);
smo362329.setStemDirection(dirsmo394096);
smo362330.setStemDirection(dirsmo394096);
const smo394096 = new VF.Beam([smo362328,smo362329,smo362330]);
const dirsmo394097 = smo362331.getStemDirection();
smo362331.setStemDirection(dirsmo394097);
smo362332.setStemDirection(dirsmo394097);
smo362333.setStemDirection(dirsmo394097);
const smo394097 = new VF.Beam([smo362331,smo362332,smo362333]);
const dirsmo394100 = smo364340.getStemDirection();
smo364340.setStemDirection(dirsmo394100);
smo364341.setStemDirection(dirsmo394100);
const smo394100 = new VF.Beam([smo364340,smo364341]);
const dirsmo394101 = smo364342.getStemDirection();
smo364342.setStemDirection(dirsmo394101);
smo364343.setStemDirection(dirsmo394101);
const smo394101 = new VF.Beam([smo364342,smo364343]);
 
// formatting measures in staff group smo365028
fmtsmo36234958.format([smo362349v0,smo364359v0], 281);
const stavesmo362349 = new VF.Stave(1253, 1860, 295);
stavesmo362349.setAttribute('id', 'stavesmo362349');
stavesmo362349.setBegBarType(VF.Barline.type.NONE);
stavesmo362349.setContext(context);
stavesmo362349.draw();
smo362349v0.draw(context, stavesmo362349);
smo394096.setContext(context);
smo394096.draw();
smo394097.setContext(context);
smo394097.draw();
const stavesmo364359 = new VF.Stave(1253, 2009, 295);
stavesmo364359.setAttribute('id', 'stavesmo364359');
stavesmo364359.setBegBarType(VF.Barline.type.NONE);
stavesmo364359.setContext(context);
stavesmo364359.draw();
smo364359v0.draw(context, stavesmo364359);
smo394100.setContext(context);
smo394100.draw();
smo394101.setContext(context);
smo394101.draw();
const fmtsmo36236759 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo362367v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362367v0ar = [];
const smo362350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362350'] = smo362350;
smo362350.setAttribute('id', 'smo362350');
smo362367v0ar.push(smo362350);
const smo362351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo362351'] = smo362351;
smo362351.setAttribute('id', 'smo362351');
smo362367v0ar.push(smo362351);
smo362367v0.addTickables(smo362367v0ar)
fmtsmo36236759.joinVoices([smo362367v0]);
const fmtsmo36437959 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo364379v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364379v0ar = [];
const smo364360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo364360'] = smo364360;
smo364360.setAttribute('id', 'smo364360');
smo364379v0ar.push(smo364360);
const smo364361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364361'] = smo364361;
smo364361.setAttribute('id', 'smo364361');
smo364379v0ar.push(smo364361);
const smo364362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo364362'] = smo364362;
smo364362.setAttribute('id', 'smo364362');
smo364379v0ar.push(smo364362);
const smo364363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364363'] = smo364363;
smo364363.setAttribute('id', 'smo364363');
smo364379v0ar.push(smo364363);
smo364379v0.addTickables(smo364379v0ar)
fmtsmo36437959.joinVoices([smo364379v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo394106 = smo364360.getStemDirection();
smo364360.setStemDirection(dirsmo394106);
smo364361.setStemDirection(dirsmo394106);
const smo394106 = new VF.Beam([smo364360,smo364361]);
const dirsmo394107 = smo364362.getStemDirection();
smo364362.setStemDirection(dirsmo394107);
smo364363.setStemDirection(dirsmo394107);
const smo394107 = new VF.Beam([smo364362,smo364363]);
 
// formatting measures in staff group smo365028
fmtsmo36236759.format([smo362367v0,smo364379v0], 281);
const stavesmo362367 = new VF.Stave(1548, 1860, 295);
stavesmo362367.setAttribute('id', 'stavesmo362367');
stavesmo362367.setBegBarType(VF.Barline.type.NONE);
stavesmo362367.setContext(context);
stavesmo362367.draw();
smo362367v0.draw(context, stavesmo362367);
const stavesmo364379 = new VF.Stave(1548, 2009, 295);
stavesmo364379.setAttribute('id', 'stavesmo364379');
stavesmo364379.setBegBarType(VF.Barline.type.NONE);
stavesmo364379.setContext(context);
stavesmo364379.draw();
smo364379v0.draw(context, stavesmo364379);
smo394106.setContext(context);
smo394106.draw();
smo394107.setContext(context);
smo394107.draw();
const rightsmo365028stavesmo3623671 = new VF.StaveConnector(stavesmo362367, stavesmo364379).setType(0);
rightsmo365028stavesmo3623671.setContext(context).draw();
const smo396222 = new VF.StaveHairpin({ first_note: smo361752, last_note: smo361752 });
smo396222.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396222.setContext(context).setPosition(4).draw();
const smo396223 = new VF.StaveHairpin({ first_note: smo361796, last_note: smo361796 });
smo396223.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396223.setContext(context).setPosition(4).draw();
const smo396224 = new VF.StaveHairpin({ first_note: smo361864, last_note: smo361864 });
smo396224.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396224.setContext(context).setPosition(4).draw();
const smo396225 = new VF.StaveHairpin({ first_note: smo361908, last_note: smo361908 });
smo396225.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396225.setContext(context).setPosition(4).draw();
const smo396228 = new VF.StaveHairpin({ first_note: smo361996, last_note: smo361996 });
smo396228.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396228.setContext(context).setPosition(4).draw();
const smo396229 = new VF.StaveHairpin({ first_note: smo362041, last_note: smo362041 });
smo396229.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396229.setContext(context).setPosition(4).draw();
const smo396230 = new VF.StaveHairpin({ first_note: smo362084, last_note: smo362084 });
smo396230.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo396230.setContext(context).setPosition(4).draw();
const smo396231 = new VF.StaveTie({ first_note: smo361705, last_note: smo361706, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396231.setContext(context).draw();
const smo396232 = new VF.StaveTie({ first_note: smo361750, last_note: smo361751, first_indices: [0], last_indices: [0]});
smo396232.setContext(context).draw();
const smo396233 = new VF.StaveTie({ first_note: smo361774, last_note: smo361775, first_indices: [0], last_indices: [0]});
smo396233.setContext(context).draw();
const smo396234 = new VF.StaveTie({ first_note: smo361798, last_note: smo361799, first_indices: [0], last_indices: [0]});
smo396234.setContext(context).draw();
const smo396235 = new VF.StaveTie({ first_note: smo361823, last_note: null, first_indices: [0,1], last_indices: [0,1]});
smo396235.setContext(context).draw();
const smo396236 = new VF.StaveTie({ first_note: null, last_note: smo361840, first_indices: [0,1], last_indices: [0,1]});
smo396236.setContext(context).draw();
const smo396237 = new VF.StaveTie({ first_note: smo361840, last_note: smo361841, first_indices: [0,1], last_indices: [0,1]});
smo396237.setContext(context).draw();
const smo396238 = new VF.StaveTie({ first_note: smo361862, last_note: smo361863, first_indices: [0,1], last_indices: [0,1]});
smo396238.setContext(context).draw();
const smo396239 = new VF.StaveTie({ first_note: smo361889, last_note: smo361906, first_indices: [0], last_indices: [0]});
smo396239.setContext(context).draw();
const smo396240 = new VF.StaveTie({ first_note: smo361906, last_note: smo361907, first_indices: [0], last_indices: [0]});
smo396240.setContext(context).draw();
const smo396241 = new VF.StaveTie({ first_note: smo361931, last_note: smo361932, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396241.setContext(context).draw();
const smo396242 = new VF.StaveTie({ first_note: smo361951, last_note: smo361952, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396242.setContext(context).draw();
const smo396243 = new VF.StaveTie({ first_note: smo361977, last_note: smo361994, first_indices: [0], last_indices: [0]});
smo396243.setContext(context).draw();
const smo396244 = new VF.StaveTie({ first_note: smo361994, last_note: smo361995, first_indices: [0], last_indices: [0]});
smo396244.setContext(context).draw();
const smo396245 = new VF.StaveTie({ first_note: smo362018, last_note: smo362019, first_indices: [0,1], last_indices: [0,1]});
smo396245.setContext(context).draw();
const smo396246 = new VF.StaveTie({ first_note: smo362039, last_note: smo362040, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396246.setContext(context).draw();
const smo396247 = new VF.StaveTie({ first_note: smo362065, last_note: smo362082, first_indices: [0], last_indices: [0]});
smo396247.setContext(context).draw();
const smo396248 = new VF.StaveTie({ first_note: smo362082, last_note: smo362083, first_indices: [0], last_indices: [0]});
smo396248.setContext(context).draw();
const smo396249 = new VF.StaveTie({ first_note: smo362107, last_note: smo362108, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396249.setContext(context).draw();
const smo396250 = new VF.StaveTie({ first_note: smo362127, last_note: smo362128, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396250.setContext(context).draw();
const smo396251 = new VF.StaveTie({ first_note: smo362150, last_note: smo362151, first_indices: [0,1], last_indices: [0,1]});
smo396251.setContext(context).draw();
const smo396252 = new VF.StaveTie({ first_note: smo362174, last_note: smo362175, first_indices: [0,1], last_indices: [0,1]});
smo396252.setContext(context).draw();
const smo396253 = new VF.StaveTie({ first_note: smo362198, last_note: smo362199, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396253.setContext(context).draw();
const smo396254 = new VF.StaveTie({ first_note: smo362240, last_note: smo362241, first_indices: [0,1], last_indices: [0,1]});
smo396254.setContext(context).draw();
const smo396255 = new VF.StaveTie({ first_note: smo362284, last_note: smo362285, first_indices: [0,1], last_indices: [0,1]});
smo396255.setContext(context).draw();
const smo396256 = new VF.StaveTie({ first_note: smo362303, last_note: smo362304, first_indices: [0,1,2], last_indices: [0,1,2]});
smo396256.setContext(context).draw();
const smo396257 = new VF.StaveTie({ first_note: smo362330, last_note: smo362331, first_indices: [0], last_indices: [0]});
smo396257.setContext(context).draw();
const smo384944smo361861 = new VF.Volta(5, '1', 73, -55);
smo384944smo361861.setContext(context).draw(stavesmo361861, -1 * 0);
const smo361866smo361882 = new VF.Volta(5, '2', 368, 20);
smo361866smo361882.setContext(context).draw(stavesmo361882, -1 * 0);
}
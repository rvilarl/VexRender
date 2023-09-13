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
const fmtsmo10460330 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo104603v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104603v0ar = [];
const smo104583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104583.setAttribute('id', 'smo104583');
smo104603v0ar.push(smo104583);
const smo104584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo104584.setAttribute('id', 'smo104584');
smo104603v0ar.push(smo104584);
const smo104585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104585.setAttribute('id', 'smo104585');
smo104603v0ar.push(smo104585);
const smo104586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo104586.setAttribute('id', 'smo104586');
smo104603v0ar.push(smo104586);
const smo104587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104587.setAttribute('id', 'smo104587');
smo104603v0ar.push(smo104587);
const smo104588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104588.setAttribute('id', 'smo104588');
smo104603v0ar.push(smo104588);
const smo104589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104589.setAttribute('id', 'smo104589');
smo104603v0ar.push(smo104589);
smo104603v0.addTickables(smo104603v0ar)
fmtsmo10460330.joinVoices([smo104603v0]);
const fmtsmo10741330 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo107413v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107413v0ar = [];
const smo107396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107396.setAttribute('id', 'smo107396');
smo107413v0ar.push(smo107396);
const smo107397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107397.setAttribute('id', 'smo107397');
smo107413v0ar.push(smo107397);
const smo107398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107398.setAttribute('id', 'smo107398');
smo107413v0ar.push(smo107398);
const smo107399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107399.setAttribute('id', 'smo107399');
smo107413v0ar.push(smo107399);
smo107413v0.addTickables(smo107413v0ar)
fmtsmo10741330.joinVoices([smo107413v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109146 = smo104583.getStemDirection();
smo104583.setStemDirection(dirsmo109146);
smo104584.setStemDirection(dirsmo109146);
smo104585.setStemDirection(dirsmo109146);
const smo109146 = new VF.Beam([smo104583,smo104584,smo104585]);
const dirsmo109147 = smo104586.getStemDirection();
smo104586.setStemDirection(dirsmo109147);
smo104587.setStemDirection(dirsmo109147);
smo104588.setStemDirection(dirsmo109147);
smo104589.setStemDirection(dirsmo109147);
const smo109147 = new VF.Beam([smo104586,smo104587,smo104588,smo104589]);
const dirsmo109150 = smo107396.getStemDirection();
smo107396.setStemDirection(dirsmo109150);
smo107397.setStemDirection(dirsmo109150);
const smo109150 = new VF.Beam([smo107396,smo107397]);
const dirsmo109151 = smo107398.getStemDirection();
smo107398.setStemDirection(dirsmo109151);
smo107399.setStemDirection(dirsmo109151);
const smo109151 = new VF.Beam([smo107398,smo107399]);
 
// formatting measures in staff group smo103216
fmtsmo10460330.format([smo104603v0,smo107413v0], 237);
const stavesmo104603 = new VF.Stave(73, 411, 295);
stavesmo104603.setAttribute('id', 'stavesmo104603');
stavesmo104603.setBegBarType(1);
stavesmo104603.addClef('treble');
stavesmo104603.setContext(context);
stavesmo104603.draw();
smo104603v0.draw(context, stavesmo104603);
smo109146.setContext(context);
smo109146.draw();
smo109147.setContext(context);
smo109147.draw();
const stavesmo107413 = new VF.Stave(73, 561, 295);
stavesmo107413.setAttribute('id', 'stavesmo107413');
stavesmo107413.setBegBarType(1);
stavesmo107413.addClef('bass');
stavesmo107413.setContext(context);
stavesmo107413.draw();
smo107413v0.draw(context, stavesmo107413);
smo109150.setContext(context);
smo109150.draw();
smo109151.setContext(context);
smo109151.draw();
const leftsmo103216stavesmo1046031 = new VF.StaveConnector(stavesmo104603, stavesmo107413).setType(3);
leftsmo103216stavesmo1046031.setContext(context).draw();
const fmtsmo10462531 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo104625v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104625v0ar = [];
const smo104604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo104604.setAttribute('id', 'smo104604');
smo104625v0ar.push(smo104604);
const smo104605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo104605.setAttribute('id', 'smo104605');
smo104625v0ar.push(smo104605);
const smo104606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104606.setAttribute('id', 'smo104606');
smo104625v0ar.push(smo104606);
const smo104607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104607.setAttribute('id', 'smo104607');
smo104625v0ar.push(smo104607);
const smo104608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104608.setAttribute('id', 'smo104608');
smo104625v0ar.push(smo104608);
const smo104609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104609.setAttribute('id', 'smo104609');
smo104625v0ar.push(smo104609);
const smo104610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104610.setAttribute('id', 'smo104610');
smo104625v0ar.push(smo104610);
const smo104611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo104611.setAttribute('id', 'smo104611');
smo104625v0ar.push(smo104611);
smo104625v0.addTickables(smo104625v0ar)
fmtsmo10462531.joinVoices([smo104625v0]);
const fmtsmo10743131 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo107431v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107431v0ar = [];
const smo107414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo107414.setAttribute('id', 'smo107414');
smo107431v0ar.push(smo107414);
const smo107415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107415.setAttribute('id', 'smo107415');
smo107431v0ar.push(smo107415);
const smo107416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo107416.setAttribute('id', 'smo107416');
smo107431v0ar.push(smo107416);
const smo107417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo107417.setAttribute('id', 'smo107417');
const smo1074170acc = new VF.Accidental('b');
smo107417.addModifier(smo1074170acc, 0);
smo107431v0ar.push(smo107417);
smo107431v0.addTickables(smo107431v0ar)
fmtsmo10743131.joinVoices([smo107431v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109154 = smo104604.getStemDirection();
smo104604.setStemDirection(dirsmo109154);
smo104605.setStemDirection(dirsmo109154);
smo104606.setStemDirection(dirsmo109154);
smo104607.setStemDirection(dirsmo109154);
const smo109154 = new VF.Beam([smo104604,smo104605,smo104606,smo104607]);
const dirsmo109155 = smo104608.getStemDirection();
smo104608.setStemDirection(dirsmo109155);
smo104609.setStemDirection(dirsmo109155);
smo104610.setStemDirection(dirsmo109155);
smo104611.setStemDirection(dirsmo109155);
const smo109155 = new VF.Beam([smo104608,smo104609,smo104610,smo104611]);
const dirsmo109158 = smo107414.getStemDirection();
smo107414.setStemDirection(dirsmo109158);
smo107415.setStemDirection(dirsmo109158);
const smo109158 = new VF.Beam([smo107414,smo107415]);
const dirsmo109159 = smo107416.getStemDirection();
smo107416.setStemDirection(dirsmo109159);
smo107417.setStemDirection(dirsmo109159);
const smo109159 = new VF.Beam([smo107416,smo107417]);
 
// formatting measures in staff group smo103216
fmtsmo10462531.format([smo104625v0,smo107431v0], 281);
const stavesmo104625 = new VF.Stave(368, 411, 295);
stavesmo104625.setAttribute('id', 'stavesmo104625');
stavesmo104625.setBegBarType(VF.Barline.type.NONE);
stavesmo104625.setContext(context);
stavesmo104625.draw();
smo104625v0.draw(context, stavesmo104625);
smo109154.setContext(context);
smo109154.draw();
smo109155.setContext(context);
smo109155.draw();
const stavesmo107431 = new VF.Stave(368, 561, 295);
stavesmo107431.setAttribute('id', 'stavesmo107431');
stavesmo107431.setBegBarType(VF.Barline.type.NONE);
stavesmo107431.setContext(context);
stavesmo107431.draw();
smo107431v0.draw(context, stavesmo107431);
smo109158.setContext(context);
smo109158.draw();
smo109159.setContext(context);
smo109159.draw();
const fmtsmo10464432 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo104644v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104644v0ar = [];
const smo104626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104626.setAttribute('id', 'smo104626');
smo104644v0ar.push(smo104626);
const smo104627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104627.setAttribute('id', 'smo104627');
smo104644v0ar.push(smo104627);
const smo104628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104628.setAttribute('id', 'smo104628');
smo104644v0ar.push(smo104628);
const smo104629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo104629.setAttribute('id', 'smo104629');
const smo1046290acc = new VF.Accidental('b');
smo104629.addModifier(smo1046290acc, 0);
smo104644v0ar.push(smo104629);
const smo104630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104630.setAttribute('id', 'smo104630');
const smo1046300acc = new VF.Accidental('n');
smo104630.addModifier(smo1046300acc, 0);
smo104644v0ar.push(smo104630);
smo104644v0.addTickables(smo104644v0ar)
fmtsmo10464432.joinVoices([smo104644v0]);
const fmtsmo10744932 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo107449v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107449v0ar = [];
const smo107432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo107432.setAttribute('id', 'smo107432');
smo107449v0ar.push(smo107432);
const smo107433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107433.setAttribute('id', 'smo107433');
smo107449v0ar.push(smo107433);
const smo107434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107434.setAttribute('id', 'smo107434');
smo107449v0ar.push(smo107434);
const smo107435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
smo107435.setAttribute('id', 'smo107435');
const smo1074350acc = new VF.Accidental('b');
smo107435.addModifier(smo1074350acc, 0);
smo107449v0ar.push(smo107435);
smo107449v0.addTickables(smo107449v0ar)
fmtsmo10744932.joinVoices([smo107449v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109162 = smo104627.getStemDirection();
smo104627.setStemDirection(dirsmo109162);
smo104628.setStemDirection(dirsmo109162);
smo104629.setStemDirection(dirsmo109162);
smo104630.setStemDirection(dirsmo109162);
const smo109162 = new VF.Beam([smo104627,smo104628,smo104629,smo104630]);
const dirsmo109165 = smo107432.getStemDirection();
smo107432.setStemDirection(dirsmo109165);
smo107433.setStemDirection(dirsmo109165);
const smo109165 = new VF.Beam([smo107432,smo107433]);
const dirsmo109166 = smo107434.getStemDirection();
smo107434.setStemDirection(dirsmo109166);
smo107435.setStemDirection(dirsmo109166);
const smo109166 = new VF.Beam([smo107434,smo107435]);
 
// formatting measures in staff group smo103216
fmtsmo10464432.format([smo104644v0,smo107449v0], 281);
const stavesmo104644 = new VF.Stave(663, 411, 295);
stavesmo104644.setAttribute('id', 'stavesmo104644');
stavesmo104644.setBegBarType(VF.Barline.type.NONE);
stavesmo104644.setContext(context);
stavesmo104644.draw();
smo104644v0.draw(context, stavesmo104644);
smo109162.setContext(context);
smo109162.draw();
const stavesmo107449 = new VF.Stave(663, 561, 295);
stavesmo107449.setAttribute('id', 'stavesmo107449');
stavesmo107449.setBegBarType(VF.Barline.type.NONE);
stavesmo107449.setContext(context);
stavesmo107449.draw();
smo107449v0.draw(context, stavesmo107449);
smo109165.setContext(context);
smo109165.draw();
smo109166.setContext(context);
smo109166.draw();
const fmtsmo10466633 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo104666v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104666v0ar = [];
const smo104645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104645.setAttribute('id', 'smo104645');
smo104666v0ar.push(smo104645);
const smo104647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo104647.setAttribute('id', 'smo104647');
smo104666v0ar.push(smo104647);
const smo104648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104648.setAttribute('id', 'smo104648');
smo104666v0ar.push(smo104648);
const smo104649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104649.setAttribute('id', 'smo104649');
smo104666v0ar.push(smo104649);
const smo104650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo104650.setAttribute('id', 'smo104650');
smo104666v0ar.push(smo104650);
const smo104651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104651.setAttribute('id', 'smo104651');
smo104666v0ar.push(smo104651);
const smo104652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo104652.setAttribute('id', 'smo104652');
smo104666v0ar.push(smo104652);
smo104666v0.addTickables(smo104666v0ar)
fmtsmo10466633.joinVoices([smo104666v0]);
const fmtsmo10746733 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo107467v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107467v0ar = [];
const smo107450 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo107450.setAttribute('id', 'smo107450');
smo107467v0ar.push(smo107450);
const smo107451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo107451.setAttribute('id', 'smo107451');
smo107467v0ar.push(smo107451);
const smo107452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo107452.setAttribute('id', 'smo107452');
const smo1074520acc = new VF.Accidental('b');
smo107452.addModifier(smo1074520acc, 0);
const smo1074523acc = new VF.Accidental('b');
smo107452.addModifier(smo1074523acc, 3);
smo107467v0ar.push(smo107452);
const smo107453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo107453.setAttribute('id', 'smo107453');
smo107467v0ar.push(smo107453);
smo107467v0.addTickables(smo107467v0ar)
fmtsmo10746733.joinVoices([smo107467v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109169 = smo104645.getStemDirection();
smo104645.setStemDirection(dirsmo109169);
smo104647.setStemDirection(dirsmo109169);
smo104648.setStemDirection(dirsmo109169);
const smo109169 = new VF.Beam([smo104645,smo104647,smo104648]);
const dirsmo109170 = smo104649.getStemDirection();
smo104649.setStemDirection(dirsmo109170);
smo104650.setStemDirection(dirsmo109170);
smo104651.setStemDirection(dirsmo109170);
smo104652.setStemDirection(dirsmo109170);
const smo109170 = new VF.Beam([smo104649,smo104650,smo104651,smo104652]);
const dirsmo109173 = smo107450.getStemDirection();
smo107450.setStemDirection(dirsmo109173);
smo107451.setStemDirection(dirsmo109173);
const smo109173 = new VF.Beam([smo107450,smo107451]);
const dirsmo109174 = smo107452.getStemDirection();
smo107452.setStemDirection(dirsmo109174);
smo107453.setStemDirection(dirsmo109174);
const smo109174 = new VF.Beam([smo107452,smo107453]);
 
// formatting measures in staff group smo103216
fmtsmo10466633.format([smo104666v0,smo107467v0], 281);
const stavesmo104666 = new VF.Stave(958, 411, 295);
stavesmo104666.setAttribute('id', 'stavesmo104666');
stavesmo104666.setBegBarType(VF.Barline.type.NONE);
stavesmo104666.setContext(context);
stavesmo104666.draw();
smo104666v0.draw(context, stavesmo104666);
smo109169.setContext(context);
smo109169.draw();
smo109170.setContext(context);
smo109170.draw();
const stavesmo107467 = new VF.Stave(958, 561, 295);
stavesmo107467.setAttribute('id', 'stavesmo107467');
stavesmo107467.setBegBarType(VF.Barline.type.NONE);
stavesmo107467.setContext(context);
stavesmo107467.draw();
smo107467v0.draw(context, stavesmo107467);
smo109173.setContext(context);
smo109173.draw();
smo109174.setContext(context);
smo109174.draw();
const fmtsmo10468834 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo104688v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104688v0ar = [];
const smo104667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104667.setAttribute('id', 'smo104667');
smo104688v0ar.push(smo104667);
const smo104668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104668.setAttribute('id', 'smo104668');
smo104688v0ar.push(smo104668);
const smo104669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104669.setAttribute('id', 'smo104669');
smo104688v0ar.push(smo104669);
const smo104670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo104670.setAttribute('id', 'smo104670');
smo104688v0ar.push(smo104670);
const smo104671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo104671.setAttribute('id', 'smo104671');
smo104688v0ar.push(smo104671);
const smo104672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo104672.setAttribute('id', 'smo104672');
smo104688v0ar.push(smo104672);
const smo104673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104673.setAttribute('id', 'smo104673');
smo104688v0ar.push(smo104673);
const smo104674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo104674.setAttribute('id', 'smo104674');
smo104688v0ar.push(smo104674);
smo104688v0.addTickables(smo104688v0ar)
fmtsmo10468834.joinVoices([smo104688v0]);
const fmtsmo10748534 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo107485v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107485v0ar = [];
const smo107468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107468.setAttribute('id', 'smo107468');
smo107485v0ar.push(smo107468);
const smo107469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107469.setAttribute('id', 'smo107469');
smo107485v0ar.push(smo107469);
const smo107470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107470.setAttribute('id', 'smo107470');
smo107485v0ar.push(smo107470);
const smo107471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107471.setAttribute('id', 'smo107471');
smo107485v0ar.push(smo107471);
smo107485v0.addTickables(smo107485v0ar)
fmtsmo10748534.joinVoices([smo107485v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109177 = smo104667.getStemDirection();
smo104667.setStemDirection(dirsmo109177);
smo104668.setStemDirection(dirsmo109177);
smo104669.setStemDirection(dirsmo109177);
smo104670.setStemDirection(dirsmo109177);
const smo109177 = new VF.Beam([smo104667,smo104668,smo104669,smo104670]);
const dirsmo109178 = smo104671.getStemDirection();
smo104671.setStemDirection(dirsmo109178);
smo104672.setStemDirection(dirsmo109178);
smo104673.setStemDirection(dirsmo109178);
smo104674.setStemDirection(dirsmo109178);
const smo109178 = new VF.Beam([smo104671,smo104672,smo104673,smo104674]);
const dirsmo109181 = smo107468.getStemDirection();
smo107468.setStemDirection(dirsmo109181);
smo107469.setStemDirection(dirsmo109181);
const smo109181 = new VF.Beam([smo107468,smo107469]);
const dirsmo109182 = smo107470.getStemDirection();
smo107470.setStemDirection(dirsmo109182);
smo107471.setStemDirection(dirsmo109182);
const smo109182 = new VF.Beam([smo107470,smo107471]);
 
// formatting measures in staff group smo103216
fmtsmo10468834.format([smo104688v0,smo107485v0], 281);
const stavesmo104688 = new VF.Stave(1253, 411, 295);
stavesmo104688.setAttribute('id', 'stavesmo104688');
stavesmo104688.setBegBarType(VF.Barline.type.NONE);
stavesmo104688.setContext(context);
stavesmo104688.draw();
smo104688v0.draw(context, stavesmo104688);
smo109177.setContext(context);
smo109177.draw();
smo109178.setContext(context);
smo109178.draw();
const stavesmo107485 = new VF.Stave(1253, 561, 295);
stavesmo107485.setAttribute('id', 'stavesmo107485');
stavesmo107485.setBegBarType(VF.Barline.type.NONE);
stavesmo107485.setContext(context);
stavesmo107485.draw();
smo107485v0.draw(context, stavesmo107485);
smo109181.setContext(context);
smo109181.draw();
smo109182.setContext(context);
smo109182.draw();
const fmtsmo10470735 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo104707v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104707v0ar = [];
const smo104689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
smo104689.setAttribute('id', 'smo104689');
const smo1046890acc = new VF.Accidental('b');
smo104689.addModifier(smo1046890acc, 0);
smo104707v0ar.push(smo104689);
const smo104690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo104690.setAttribute('id', 'smo104690');
smo104707v0ar.push(smo104690);
const smo104691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
smo104691.setAttribute('id', 'smo104691');
smo104707v0ar.push(smo104691);
const smo104692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo104692.setAttribute('id', 'smo104692');
smo104707v0ar.push(smo104692);
const smo104693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo104693.setAttribute('id', 'smo104693');
smo104707v0ar.push(smo104693);
smo104707v0.addTickables(smo104707v0ar)
fmtsmo10470735.joinVoices([smo104707v0]);
const fmtsmo10750335 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo107503v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107503v0ar = [];
const smo107486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo107486.setAttribute('id', 'smo107486');
smo107503v0ar.push(smo107486);
const smo107487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo107487.setAttribute('id', 'smo107487');
smo107503v0ar.push(smo107487);
const smo107488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107488.setAttribute('id', 'smo107488');
smo107503v0ar.push(smo107488);
const smo107489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107489.setAttribute('id', 'smo107489');
smo107503v0ar.push(smo107489);
smo107503v0.addTickables(smo107503v0ar)
fmtsmo10750335.joinVoices([smo107503v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109185 = smo104689.getStemDirection();
smo104689.setStemDirection(dirsmo109185);
smo104690.setStemDirection(dirsmo109185);
const smo109185 = new VF.Beam([smo104689,smo104690]);
const dirsmo109186 = smo104691.getStemDirection();
smo104691.setStemDirection(dirsmo109186);
smo104692.setStemDirection(dirsmo109186);
smo104693.setStemDirection(dirsmo109186);
const smo109186 = new VF.Beam([smo104691,smo104692,smo104693]);
const dirsmo109189 = smo107486.getStemDirection();
smo107486.setStemDirection(dirsmo109189);
smo107487.setStemDirection(dirsmo109189);
const smo109189 = new VF.Beam([smo107486,smo107487]);
const dirsmo109190 = smo107488.getStemDirection();
smo107488.setStemDirection(dirsmo109190);
smo107489.setStemDirection(dirsmo109190);
const smo109190 = new VF.Beam([smo107488,smo107489]);
 
// formatting measures in staff group smo103216
fmtsmo10470735.format([smo104707v0,smo107503v0], 281);
const stavesmo104707 = new VF.Stave(1548, 411, 295);
stavesmo104707.setAttribute('id', 'stavesmo104707');
stavesmo104707.setBegBarType(VF.Barline.type.NONE);
stavesmo104707.setContext(context);
stavesmo104707.draw();
smo104707v0.draw(context, stavesmo104707);
smo109185.setContext(context);
smo109185.draw();
smo109186.setContext(context);
smo109186.draw();
const stavesmo107503 = new VF.Stave(1548, 561, 295);
stavesmo107503.setAttribute('id', 'stavesmo107503');
stavesmo107503.setBegBarType(VF.Barline.type.NONE);
stavesmo107503.setContext(context);
stavesmo107503.draw();
smo107503v0.draw(context, stavesmo107503);
smo109189.setContext(context);
smo109189.draw();
smo109190.setContext(context);
smo109190.draw();
const rightsmo103216stavesmo1047071 = new VF.StaveConnector(stavesmo104707, stavesmo107503).setType(0);
rightsmo103216stavesmo1047071.setContext(context).draw();
const fmtsmo10472736 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo104727v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104727v0ar = [];
const smo104708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo104708.setAttribute('id', 'smo104708');
smo104727v0ar.push(smo104708);
const smo104709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo104709.setAttribute('id', 'smo104709');
smo104727v0ar.push(smo104709);
const smo104710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
smo104710.setAttribute('id', 'smo104710');
smo104727v0ar.push(smo104710);
const smo104711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
smo104711.setAttribute('id', 'smo104711');
smo104727v0ar.push(smo104711);
const smo104712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
smo104712.setAttribute('id', 'smo104712');
const smo1047120acc = new VF.Accidental('b');
smo104712.addModifier(smo1047120acc, 0);
const smo1047121acc = new VF.Accidental('b');
smo104712.addModifier(smo1047121acc, 1);
const smo1047122acc = new VF.Accidental('b');
smo104712.addModifier(smo1047122acc, 2);
smo104727v0ar.push(smo104712);
smo104727v0.addTickables(smo104727v0ar)
fmtsmo10472736.joinVoices([smo104727v0]);
const fmtsmo10752236 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo107522v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107522v0ar = [];
const smo107504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo107504.setAttribute('id', 'smo107504');
smo107522v0ar.push(smo107504);
const smo107505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107505.setAttribute('id', 'smo107505');
smo107522v0ar.push(smo107505);
const smo107506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107506.setAttribute('id', 'smo107506');
smo107522v0ar.push(smo107506);
const smo107507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo107507.setAttribute('id', 'smo107507');
smo107522v0ar.push(smo107507);
smo107522v0.addTickables(smo107522v0ar)
fmtsmo10752236.joinVoices([smo107522v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109199 = smo104709.getStemDirection();
smo104709.setStemDirection(dirsmo109199);
smo104710.setStemDirection(dirsmo109199);
smo104711.setStemDirection(dirsmo109199);
smo104712.setStemDirection(dirsmo109199);
const smo109199 = new VF.Beam([smo104709,smo104710,smo104711,smo104712]);
const dirsmo109201 = smo107504.getStemDirection();
smo107504.setStemDirection(dirsmo109201);
smo107505.setStemDirection(dirsmo109201);
const smo109201 = new VF.Beam([smo107504,smo107505]);
const dirsmo109202 = smo107506.getStemDirection();
smo107506.setStemDirection(dirsmo109202);
smo107507.setStemDirection(dirsmo109202);
const smo109202 = new VF.Beam([smo107506,smo107507]);
 
// formatting measures in staff group smo103216
fmtsmo10472736.format([smo104727v0,smo107522v0], 233);
const stavesmo104727 = new VF.Stave(73, 789, 295);
stavesmo104727.setAttribute('id', 'stavesmo104727');
stavesmo104727.setBegBarType(1);
stavesmo104727.setEndBarType(5);
stavesmo104727.addClef('treble');
stavesmo104727.setContext(context);
stavesmo104727.draw();
smo104727v0.draw(context, stavesmo104727);
smo109199.setContext(context);
smo109199.draw();
const stavesmo107522 = new VF.Stave(73, 930, 295);
stavesmo107522.setAttribute('id', 'stavesmo107522');
stavesmo107522.setBegBarType(1);
stavesmo107522.setEndBarType(5);
stavesmo107522.addClef('bass');
stavesmo107522.setContext(context);
stavesmo107522.draw();
smo107522v0.draw(context, stavesmo107522);
smo109201.setContext(context);
smo109201.draw();
smo109202.setContext(context);
smo109202.draw();
const leftsmo103216stavesmo1047271 = new VF.StaveConnector(stavesmo104727, stavesmo107522).setType(3);
leftsmo103216stavesmo1047271.setContext(context).draw();
const fmtsmo10474637 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo104746v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104746v0ar = [];
const smo104728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo104728.setAttribute('id', 'smo104728');
smo104746v0ar.push(smo104728);
const smo104729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo104729.setAttribute('id', 'smo104729');
smo104746v0ar.push(smo104729);
const smo104730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104730.setAttribute('id', 'smo104730');
smo104746v0ar.push(smo104730);
const smo104731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104731.setAttribute('id', 'smo104731');
const smo1047310acc = new VF.Accidental('b');
smo104731.addModifier(smo1047310acc, 0);
smo104746v0ar.push(smo104731);
smo104746v0.addTickables(smo104746v0ar)
fmtsmo10474637.joinVoices([smo104746v0]);
const fmtsmo10754137 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo107541v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107541v0ar = [];
const smo107523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo107523.setAttribute('id', 'smo107523');
smo107541v0ar.push(smo107523);
const smo107524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107524.setAttribute('id', 'smo107524');
smo107541v0ar.push(smo107524);
const smo107525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo107525.setAttribute('id', 'smo107525');
smo107541v0ar.push(smo107525);
const smo107526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo107526.setAttribute('id', 'smo107526');
smo107541v0ar.push(smo107526);
smo107541v0.addTickables(smo107541v0ar)
fmtsmo10754137.joinVoices([smo107541v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109204 = smo104729.getStemDirection();
smo104729.setStemDirection(dirsmo109204);
smo104730.setStemDirection(dirsmo109204);
smo104731.setStemDirection(dirsmo109204);
const smo109204 = new VF.Beam([smo104729,smo104730,smo104731]);
const dirsmo109207 = smo107523.getStemDirection();
smo107523.setStemDirection(dirsmo109207);
smo107524.setStemDirection(dirsmo109207);
const smo109207 = new VF.Beam([smo107523,smo107524]);
 
// formatting measures in staff group smo103216
fmtsmo10474637.format([smo104746v0,smo107541v0], 281);
const stavesmo104746 = new VF.Stave(368, 789, 295);
stavesmo104746.setAttribute('id', 'stavesmo104746');
stavesmo104746.setBegBarType(VF.Barline.type.NONE);
stavesmo104746.setContext(context);
stavesmo104746.draw();
smo104746v0.draw(context, stavesmo104746);
smo109204.setContext(context);
smo109204.draw();
const stavesmo107541 = new VF.Stave(368, 930, 295);
stavesmo107541.setAttribute('id', 'stavesmo107541');
stavesmo107541.setBegBarType(VF.Barline.type.NONE);
stavesmo107541.setContext(context);
stavesmo107541.draw();
smo107541v0.draw(context, stavesmo107541);
smo109207.setContext(context);
smo109207.draw();
const fmtsmo10476738 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo104767v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104767v0ar = [];
const smo104747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104747.setAttribute('id', 'smo104747');
smo104767v0ar.push(smo104747);
const smo104749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104749.setAttribute('id', 'smo104749');
smo104767v0ar.push(smo104749);
const smo104750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104750.setAttribute('id', 'smo104750');
smo104767v0ar.push(smo104750);
const smo104751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104751.setAttribute('id', 'smo104751');
smo104767v0ar.push(smo104751);
const smo104752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104752.setAttribute('id', 'smo104752');
smo104767v0ar.push(smo104752);
const smo104753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104753.setAttribute('id', 'smo104753');
smo104767v0ar.push(smo104753);
smo104767v0.addTickables(smo104767v0ar)
fmtsmo10476738.joinVoices([smo104767v0]);
const fmtsmo10755938 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo107559v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107559v0ar = [];
const smo107542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107542.setAttribute('id', 'smo107542');
smo107559v0ar.push(smo107542);
const smo107543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107543.setAttribute('id', 'smo107543');
smo107559v0ar.push(smo107543);
const smo107544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107544.setAttribute('id', 'smo107544');
smo107559v0ar.push(smo107544);
const smo107545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo107545.setAttribute('id', 'smo107545');
const smo1075451acc = new VF.Accidental('b');
smo107545.addModifier(smo1075451acc, 1);
smo107559v0ar.push(smo107545);
smo107559v0.addTickables(smo107559v0ar)
fmtsmo10755938.joinVoices([smo107559v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109210 = smo104747.getStemDirection();
smo104747.setStemDirection(dirsmo109210);
smo104749.setStemDirection(dirsmo109210);
smo104750.setStemDirection(dirsmo109210);
const smo109210 = new VF.Beam([smo104747,smo104749,smo104750]);
const dirsmo109211 = smo104751.getStemDirection();
smo104751.setStemDirection(dirsmo109211);
smo104752.setStemDirection(dirsmo109211);
smo104753.setStemDirection(dirsmo109211);
const smo109211 = new VF.Beam([smo104751,smo104752,smo104753]);
const dirsmo109214 = smo107542.getStemDirection();
smo107542.setStemDirection(dirsmo109214);
smo107543.setStemDirection(dirsmo109214);
const smo109214 = new VF.Beam([smo107542,smo107543]);
const dirsmo109215 = smo107544.getStemDirection();
smo107544.setStemDirection(dirsmo109215);
smo107545.setStemDirection(dirsmo109215);
const smo109215 = new VF.Beam([smo107544,smo107545]);
 
// formatting measures in staff group smo103216
fmtsmo10476738.format([smo104767v0,smo107559v0], 281);
const stavesmo104767 = new VF.Stave(663, 789, 295);
stavesmo104767.setAttribute('id', 'stavesmo104767');
stavesmo104767.setBegBarType(VF.Barline.type.NONE);
stavesmo104767.setContext(context);
stavesmo104767.draw();
smo104767v0.draw(context, stavesmo104767);
smo109210.setContext(context);
smo109210.draw();
smo109211.setContext(context);
smo109211.draw();
const stavesmo107559 = new VF.Stave(663, 930, 295);
stavesmo107559.setAttribute('id', 'stavesmo107559');
stavesmo107559.setBegBarType(VF.Barline.type.NONE);
stavesmo107559.setContext(context);
stavesmo107559.draw();
smo107559v0.draw(context, stavesmo107559);
smo109214.setContext(context);
smo109214.draw();
smo109215.setContext(context);
smo109215.draw();
const fmtsmo10478639 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo104786v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104786v0ar = [];
const smo104768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104768.setAttribute('id', 'smo104768');
smo104786v0ar.push(smo104768);
const smo104769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104769.setAttribute('id', 'smo104769');
smo104786v0ar.push(smo104769);
const smo104770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104770.setAttribute('id', 'smo104770');
smo104786v0ar.push(smo104770);
const smo104771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104771.setAttribute('id', 'smo104771');
smo104786v0ar.push(smo104771);
const smo104772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo104772.setAttribute('id', 'smo104772');
const smo1047720acc = new VF.Accidental('b');
smo104772.addModifier(smo1047720acc, 0);
const smo1047721acc = new VF.Accidental('b');
smo104772.addModifier(smo1047721acc, 1);
const smo1047722acc = new VF.Accidental('b');
smo104772.addModifier(smo1047722acc, 2);
smo104786v0ar.push(smo104772);
smo104786v0.addTickables(smo104786v0ar)
fmtsmo10478639.joinVoices([smo104786v0]);
const fmtsmo10757739 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo107577v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107577v0ar = [];
const smo107560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo107560.setAttribute('id', 'smo107560');
smo107577v0ar.push(smo107560);
const smo107561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo107561.setAttribute('id', 'smo107561');
smo107577v0ar.push(smo107561);
const smo107562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107562.setAttribute('id', 'smo107562');
smo107577v0ar.push(smo107562);
const smo107563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo107563.setAttribute('id', 'smo107563');
smo107577v0ar.push(smo107563);
smo107577v0.addTickables(smo107577v0ar)
fmtsmo10757739.joinVoices([smo107577v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109218 = smo104769.getStemDirection();
smo104769.setStemDirection(dirsmo109218);
smo104770.setStemDirection(dirsmo109218);
smo104771.setStemDirection(dirsmo109218);
smo104772.setStemDirection(dirsmo109218);
const smo109218 = new VF.Beam([smo104769,smo104770,smo104771,smo104772]);
const dirsmo109221 = smo107560.getStemDirection();
smo107560.setStemDirection(dirsmo109221);
smo107561.setStemDirection(dirsmo109221);
const smo109221 = new VF.Beam([smo107560,smo107561]);
const dirsmo109222 = smo107562.getStemDirection();
smo107562.setStemDirection(dirsmo109222);
smo107563.setStemDirection(dirsmo109222);
const smo109222 = new VF.Beam([smo107562,smo107563]);
 
// formatting measures in staff group smo103216
fmtsmo10478639.format([smo104786v0,smo107577v0], 281);
const stavesmo104786 = new VF.Stave(958, 789, 295);
stavesmo104786.setAttribute('id', 'stavesmo104786');
stavesmo104786.setBegBarType(VF.Barline.type.NONE);
stavesmo104786.setContext(context);
stavesmo104786.draw();
smo104786v0.draw(context, stavesmo104786);
smo109218.setContext(context);
smo109218.draw();
const stavesmo107577 = new VF.Stave(958, 930, 295);
stavesmo107577.setAttribute('id', 'stavesmo107577');
stavesmo107577.setBegBarType(VF.Barline.type.NONE);
stavesmo107577.setContext(context);
stavesmo107577.draw();
smo107577v0.draw(context, stavesmo107577);
smo109221.setContext(context);
smo109221.draw();
smo109222.setContext(context);
smo109222.draw();
const fmtsmo10480840 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo104808v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104808v0ar = [];
const smo104787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104787.setAttribute('id', 'smo104787');
smo104808v0ar.push(smo104787);
const smo104789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104789.setAttribute('id', 'smo104789');
smo104808v0ar.push(smo104789);
const smo104790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104790.setAttribute('id', 'smo104790');
smo104808v0ar.push(smo104790);
const smo104791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104791.setAttribute('id', 'smo104791');
smo104808v0ar.push(smo104791);
const smo104792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104792.setAttribute('id', 'smo104792');
smo104808v0ar.push(smo104792);
const smo104793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo104793.setAttribute('id', 'smo104793');
smo104808v0ar.push(smo104793);
const smo104794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104794.setAttribute('id', 'smo104794');
smo104808v0ar.push(smo104794);
smo104808v0.addTickables(smo104808v0ar)
fmtsmo10480840.joinVoices([smo104808v0]);
const fmtsmo10759540 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo107595v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107595v0ar = [];
const smo107578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107578.setAttribute('id', 'smo107578');
smo107595v0ar.push(smo107578);
const smo107579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107579.setAttribute('id', 'smo107579');
smo107595v0ar.push(smo107579);
const smo107580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107580.setAttribute('id', 'smo107580');
smo107595v0ar.push(smo107580);
const smo107581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo107581.setAttribute('id', 'smo107581');
smo107595v0ar.push(smo107581);
smo107595v0.addTickables(smo107595v0ar)
fmtsmo10759540.joinVoices([smo107595v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109225 = smo104787.getStemDirection();
smo104787.setStemDirection(dirsmo109225);
smo104789.setStemDirection(dirsmo109225);
smo104790.setStemDirection(dirsmo109225);
smo104791.setStemDirection(dirsmo109225);
const smo109225 = new VF.Beam([smo104787,smo104789,smo104790,smo104791]);
const dirsmo109226 = smo104792.getStemDirection();
smo104792.setStemDirection(dirsmo109226);
smo104793.setStemDirection(dirsmo109226);
smo104794.setStemDirection(dirsmo109226);
const smo109226 = new VF.Beam([smo104792,smo104793,smo104794]);
const dirsmo109229 = smo107578.getStemDirection();
smo107578.setStemDirection(dirsmo109229);
smo107579.setStemDirection(dirsmo109229);
const smo109229 = new VF.Beam([smo107578,smo107579]);
const dirsmo109230 = smo107580.getStemDirection();
smo107580.setStemDirection(dirsmo109230);
smo107581.setStemDirection(dirsmo109230);
const smo109230 = new VF.Beam([smo107580,smo107581]);
 
// formatting measures in staff group smo103216
fmtsmo10480840.format([smo104808v0,smo107595v0], 281);
const stavesmo104808 = new VF.Stave(1253, 789, 295);
stavesmo104808.setAttribute('id', 'stavesmo104808');
stavesmo104808.setBegBarType(VF.Barline.type.NONE);
stavesmo104808.setContext(context);
stavesmo104808.draw();
smo104808v0.draw(context, stavesmo104808);
smo109225.setContext(context);
smo109225.draw();
smo109226.setContext(context);
smo109226.draw();
const stavesmo107595 = new VF.Stave(1253, 930, 295);
stavesmo107595.setAttribute('id', 'stavesmo107595');
stavesmo107595.setBegBarType(VF.Barline.type.NONE);
stavesmo107595.setContext(context);
stavesmo107595.draw();
smo107595v0.draw(context, stavesmo107595);
smo109229.setContext(context);
smo109229.draw();
smo109230.setContext(context);
smo109230.draw();
const fmtsmo10482641 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo104826v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104826v0ar = [];
const smo104809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104809.setAttribute('id', 'smo104809');
smo104826v0ar.push(smo104809);
const smo104810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104810.setAttribute('id', 'smo104810');
smo104826v0ar.push(smo104810);
const smo104811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104811.setAttribute('id', 'smo104811');
smo104826v0ar.push(smo104811);
const smo104812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104812.setAttribute('id', 'smo104812');
const smo1048120acc = new VF.Accidental('b');
smo104812.addModifier(smo1048120acc, 0);
smo104826v0ar.push(smo104812);
smo104826v0.addTickables(smo104826v0ar)
fmtsmo10482641.joinVoices([smo104826v0]);
const fmtsmo10761341 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo107613v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107613v0ar = [];
const smo107596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107596.setAttribute('id', 'smo107596');
smo107613v0ar.push(smo107596);
const smo107597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107597.setAttribute('id', 'smo107597');
smo107613v0ar.push(smo107597);
const smo107598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107598.setAttribute('id', 'smo107598');
smo107613v0ar.push(smo107598);
const smo107599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107599.setAttribute('id', 'smo107599');
smo107613v0ar.push(smo107599);
smo107613v0.addTickables(smo107613v0ar)
fmtsmo10761341.joinVoices([smo107613v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109233 = smo104810.getStemDirection();
smo104810.setStemDirection(dirsmo109233);
smo104811.setStemDirection(dirsmo109233);
smo104812.setStemDirection(dirsmo109233);
const smo109233 = new VF.Beam([smo104810,smo104811,smo104812]);
const dirsmo109236 = smo107596.getStemDirection();
smo107596.setStemDirection(dirsmo109236);
smo107597.setStemDirection(dirsmo109236);
const smo109236 = new VF.Beam([smo107596,smo107597]);
const dirsmo109237 = smo107598.getStemDirection();
smo107598.setStemDirection(dirsmo109237);
smo107599.setStemDirection(dirsmo109237);
const smo109237 = new VF.Beam([smo107598,smo107599]);
 
// formatting measures in staff group smo103216
fmtsmo10482641.format([smo104826v0,smo107613v0], 281);
const stavesmo104826 = new VF.Stave(1548, 789, 295);
stavesmo104826.setAttribute('id', 'stavesmo104826');
stavesmo104826.setBegBarType(VF.Barline.type.NONE);
stavesmo104826.setContext(context);
stavesmo104826.draw();
smo104826v0.draw(context, stavesmo104826);
smo109233.setContext(context);
smo109233.draw();
const stavesmo107613 = new VF.Stave(1548, 930, 295);
stavesmo107613.setAttribute('id', 'stavesmo107613');
stavesmo107613.setBegBarType(VF.Barline.type.NONE);
stavesmo107613.setContext(context);
stavesmo107613.draw();
smo107613v0.draw(context, stavesmo107613);
smo109236.setContext(context);
smo109236.draw();
smo109237.setContext(context);
smo109237.draw();
const rightsmo103216stavesmo1048261 = new VF.StaveConnector(stavesmo104826, stavesmo107613).setType(0);
rightsmo103216stavesmo1048261.setContext(context).draw();
const fmtsmo10484742 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo104847v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104847v0ar = [];
const smo104827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104827.setAttribute('id', 'smo104827');
smo104847v0ar.push(smo104827);
const smo104829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104829.setAttribute('id', 'smo104829');
smo104847v0ar.push(smo104829);
const smo104830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104830.setAttribute('id', 'smo104830');
smo104847v0ar.push(smo104830);
const smo104831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104831.setAttribute('id', 'smo104831');
smo104847v0ar.push(smo104831);
const smo104832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104832.setAttribute('id', 'smo104832');
smo104847v0ar.push(smo104832);
const smo104833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104833.setAttribute('id', 'smo104833');
smo104847v0ar.push(smo104833);
smo104847v0.addTickables(smo104847v0ar)
fmtsmo10484742.joinVoices([smo104847v0]);
const fmtsmo10763142 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo107631v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107631v0ar = [];
const smo107614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107614.setAttribute('id', 'smo107614');
smo107631v0ar.push(smo107614);
const smo107615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107615.setAttribute('id', 'smo107615');
smo107631v0ar.push(smo107615);
const smo107616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107616.setAttribute('id', 'smo107616');
smo107631v0ar.push(smo107616);
const smo107617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo107617.setAttribute('id', 'smo107617');
const smo1076171acc = new VF.Accidental('b');
smo107617.addModifier(smo1076171acc, 1);
smo107631v0ar.push(smo107617);
smo107631v0.addTickables(smo107631v0ar)
fmtsmo10763142.joinVoices([smo107631v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109248 = smo104827.getStemDirection();
smo104827.setStemDirection(dirsmo109248);
smo104829.setStemDirection(dirsmo109248);
smo104830.setStemDirection(dirsmo109248);
const smo109248 = new VF.Beam([smo104827,smo104829,smo104830]);
const dirsmo109249 = smo104831.getStemDirection();
smo104831.setStemDirection(dirsmo109249);
smo104832.setStemDirection(dirsmo109249);
smo104833.setStemDirection(dirsmo109249);
const smo109249 = new VF.Beam([smo104831,smo104832,smo104833]);
const dirsmo109252 = smo107614.getStemDirection();
smo107614.setStemDirection(dirsmo109252);
smo107615.setStemDirection(dirsmo109252);
const smo109252 = new VF.Beam([smo107614,smo107615]);
const dirsmo109253 = smo107616.getStemDirection();
smo107616.setStemDirection(dirsmo109253);
smo107617.setStemDirection(dirsmo109253);
const smo109253 = new VF.Beam([smo107616,smo107617]);
 
// formatting measures in staff group smo103216
fmtsmo10484742.format([smo104847v0,smo107631v0], 237);
const stavesmo104847 = new VF.Stave(73, 1148, 295);
stavesmo104847.setAttribute('id', 'stavesmo104847');
stavesmo104847.setBegBarType(1);
stavesmo104847.addClef('treble');
stavesmo104847.setContext(context);
stavesmo104847.draw();
smo104847v0.draw(context, stavesmo104847);
smo109248.setContext(context);
smo109248.draw();
smo109249.setContext(context);
smo109249.draw();
const stavesmo107631 = new VF.Stave(73, 1303, 295);
stavesmo107631.setAttribute('id', 'stavesmo107631');
stavesmo107631.setBegBarType(1);
stavesmo107631.addClef('bass');
stavesmo107631.setContext(context);
stavesmo107631.draw();
smo107631v0.draw(context, stavesmo107631);
smo109252.setContext(context);
smo109252.draw();
smo109253.setContext(context);
smo109253.draw();
const leftsmo103216stavesmo1048471 = new VF.StaveConnector(stavesmo104847, stavesmo107631).setType(3);
leftsmo103216stavesmo1048471.setContext(context).draw();
const fmtsmo10486543 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo104865v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104865v0ar = [];
const smo104848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104848.setAttribute('id', 'smo104848');
smo104865v0ar.push(smo104848);
const smo104849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104849.setAttribute('id', 'smo104849');
smo104865v0ar.push(smo104849);
const smo104850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo104850.setAttribute('id', 'smo104850');
smo104865v0ar.push(smo104850);
const smo104851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo104851.setAttribute('id', 'smo104851');
smo104865v0ar.push(smo104851);
smo104865v0.addTickables(smo104865v0ar)
fmtsmo10486543.joinVoices([smo104865v0]);
const fmtsmo10764943 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo107649v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107649v0ar = [];
const smo107632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo107632.setAttribute('id', 'smo107632');
smo107649v0ar.push(smo107632);
const smo107633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo107633.setAttribute('id', 'smo107633');
smo107649v0ar.push(smo107633);
const smo107634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107634.setAttribute('id', 'smo107634');
smo107649v0ar.push(smo107634);
const smo107635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo107635.setAttribute('id', 'smo107635');
const smo1076350acc = new VF.Accidental('b');
smo107635.addModifier(smo1076350acc, 0);
const smo1076351acc = new VF.Accidental('b');
smo107635.addModifier(smo1076351acc, 1);
smo107649v0ar.push(smo107635);
smo107649v0.addTickables(smo107649v0ar)
fmtsmo10764943.joinVoices([smo107649v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109256 = smo104849.getStemDirection();
smo104849.setStemDirection(dirsmo109256);
smo104850.setStemDirection(dirsmo109256);
smo104851.setStemDirection(dirsmo109256);
const smo109256 = new VF.Beam([smo104849,smo104850,smo104851]);
const dirsmo109259 = smo107632.getStemDirection();
smo107632.setStemDirection(dirsmo109259);
smo107633.setStemDirection(dirsmo109259);
const smo109259 = new VF.Beam([smo107632,smo107633]);
const dirsmo109260 = smo107634.getStemDirection();
smo107634.setStemDirection(dirsmo109260);
smo107635.setStemDirection(dirsmo109260);
const smo109260 = new VF.Beam([smo107634,smo107635]);
 
// formatting measures in staff group smo103216
fmtsmo10486543.format([smo104865v0,smo107649v0], 281);
const stavesmo104865 = new VF.Stave(368, 1148, 295);
stavesmo104865.setAttribute('id', 'stavesmo104865');
stavesmo104865.setBegBarType(VF.Barline.type.NONE);
stavesmo104865.setContext(context);
stavesmo104865.draw();
smo104865v0.draw(context, stavesmo104865);
smo109256.setContext(context);
smo109256.draw();
const stavesmo107649 = new VF.Stave(368, 1303, 295);
stavesmo107649.setAttribute('id', 'stavesmo107649');
stavesmo107649.setBegBarType(VF.Barline.type.NONE);
stavesmo107649.setContext(context);
stavesmo107649.draw();
smo107649v0.draw(context, stavesmo107649);
smo109259.setContext(context);
smo109259.draw();
smo109260.setContext(context);
smo109260.draw();
const fmtsmo10488844 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo104888v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104888v0ar = [];
const smo104866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo104866.setAttribute('id', 'smo104866');
const smo1048660acc = new VF.Accidental('b');
smo104866.addModifier(smo1048660acc, 0);
const smo1048662acc = new VF.Accidental('b');
smo104866.addModifier(smo1048662acc, 2);
smo104888v0ar.push(smo104866);
const smo104868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo104868.setAttribute('id', 'smo104868');
smo104888v0ar.push(smo104868);
const smo104869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104869.setAttribute('id', 'smo104869');
smo104888v0ar.push(smo104869);
const smo104870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104870.setAttribute('id', 'smo104870');
smo104888v0ar.push(smo104870);
const smo104871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104871.setAttribute('id', 'smo104871');
smo104888v0ar.push(smo104871);
const smo104872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104872.setAttribute('id', 'smo104872');
smo104888v0ar.push(smo104872);
const smo104873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104873.setAttribute('id', 'smo104873');
smo104888v0ar.push(smo104873);
const smo104874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo104874.setAttribute('id', 'smo104874');
smo104888v0ar.push(smo104874);
smo104888v0.addTickables(smo104888v0ar)
fmtsmo10488844.joinVoices([smo104888v0]);
const fmtsmo10766744 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo107667v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107667v0ar = [];
const smo107650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo107650.setAttribute('id', 'smo107650');
smo107667v0ar.push(smo107650);
const smo107651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo107651.setAttribute('id', 'smo107651');
const smo1076511acc = new VF.Accidental('b');
smo107651.addModifier(smo1076511acc, 1);
smo107667v0ar.push(smo107651);
const smo107652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo107652.setAttribute('id', 'smo107652');
smo107667v0ar.push(smo107652);
const smo107653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo107653.setAttribute('id', 'smo107653');
smo107667v0ar.push(smo107653);
smo107667v0.addTickables(smo107667v0ar)
fmtsmo10766744.joinVoices([smo107667v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109263 = smo104866.getStemDirection();
smo104866.setStemDirection(dirsmo109263);
smo104868.setStemDirection(dirsmo109263);
smo104869.setStemDirection(dirsmo109263);
smo104870.setStemDirection(dirsmo109263);
const smo109263 = new VF.Beam([smo104866,smo104868,smo104869,smo104870]);
const dirsmo109264 = smo104871.getStemDirection();
smo104871.setStemDirection(dirsmo109264);
smo104872.setStemDirection(dirsmo109264);
smo104873.setStemDirection(dirsmo109264);
smo104874.setStemDirection(dirsmo109264);
const smo109264 = new VF.Beam([smo104871,smo104872,smo104873,smo104874]);
const dirsmo109267 = smo107650.getStemDirection();
smo107650.setStemDirection(dirsmo109267);
smo107651.setStemDirection(dirsmo109267);
const smo109267 = new VF.Beam([smo107650,smo107651]);
const dirsmo109268 = smo107652.getStemDirection();
smo107652.setStemDirection(dirsmo109268);
smo107653.setStemDirection(dirsmo109268);
const smo109268 = new VF.Beam([smo107652,smo107653]);
 
// formatting measures in staff group smo103216
fmtsmo10488844.format([smo104888v0,smo107667v0], 281);
const stavesmo104888 = new VF.Stave(663, 1148, 295);
stavesmo104888.setAttribute('id', 'stavesmo104888');
stavesmo104888.setBegBarType(VF.Barline.type.NONE);
stavesmo104888.setContext(context);
stavesmo104888.draw();
smo104888v0.draw(context, stavesmo104888);
smo109263.setContext(context);
smo109263.draw();
smo109264.setContext(context);
smo109264.draw();
const stavesmo107667 = new VF.Stave(663, 1303, 295);
stavesmo107667.setAttribute('id', 'stavesmo107667');
stavesmo107667.setBegBarType(VF.Barline.type.NONE);
stavesmo107667.setContext(context);
stavesmo107667.draw();
smo107667v0.draw(context, stavesmo107667);
smo109267.setContext(context);
smo109267.draw();
smo109268.setContext(context);
smo109268.draw();
const fmtsmo10490645 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo104906v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104906v0ar = [];
const smo104889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104889.setAttribute('id', 'smo104889');
smo104906v0ar.push(smo104889);
const smo104890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104890.setAttribute('id', 'smo104890');
smo104906v0ar.push(smo104890);
const smo104891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo104891.setAttribute('id', 'smo104891');
smo104906v0ar.push(smo104891);
const smo104892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo104892.setAttribute('id', 'smo104892');
const smo1048920acc = new VF.Accidental('b');
smo104892.addModifier(smo1048920acc, 0);
smo104906v0ar.push(smo104892);
smo104906v0.addTickables(smo104906v0ar)
fmtsmo10490645.joinVoices([smo104906v0]);
const fmtsmo10768545 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo107685v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107685v0ar = [];
const smo107668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107668.setAttribute('id', 'smo107668');
smo107685v0ar.push(smo107668);
const smo107669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107669.setAttribute('id', 'smo107669');
smo107685v0ar.push(smo107669);
const smo107670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo107670.setAttribute('id', 'smo107670');
smo107685v0ar.push(smo107670);
const smo107671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo107671.setAttribute('id', 'smo107671');
smo107685v0ar.push(smo107671);
smo107685v0.addTickables(smo107685v0ar)
fmtsmo10768545.joinVoices([smo107685v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109271 = smo104890.getStemDirection();
smo104890.setStemDirection(dirsmo109271);
smo104891.setStemDirection(dirsmo109271);
smo104892.setStemDirection(dirsmo109271);
const smo109271 = new VF.Beam([smo104890,smo104891,smo104892]);
const dirsmo109274 = smo107668.getStemDirection();
smo107668.setStemDirection(dirsmo109274);
smo107669.setStemDirection(dirsmo109274);
const smo109274 = new VF.Beam([smo107668,smo107669]);
const dirsmo109275 = smo107670.getStemDirection();
smo107670.setStemDirection(dirsmo109275);
smo107671.setStemDirection(dirsmo109275);
const smo109275 = new VF.Beam([smo107670,smo107671]);
 
// formatting measures in staff group smo103216
fmtsmo10490645.format([smo104906v0,smo107685v0], 281);
const stavesmo104906 = new VF.Stave(958, 1148, 295);
stavesmo104906.setAttribute('id', 'stavesmo104906');
stavesmo104906.setBegBarType(VF.Barline.type.NONE);
stavesmo104906.setContext(context);
stavesmo104906.draw();
smo104906v0.draw(context, stavesmo104906);
smo109271.setContext(context);
smo109271.draw();
const stavesmo107685 = new VF.Stave(958, 1303, 295);
stavesmo107685.setAttribute('id', 'stavesmo107685');
stavesmo107685.setBegBarType(VF.Barline.type.NONE);
stavesmo107685.setContext(context);
stavesmo107685.draw();
smo107685v0.draw(context, stavesmo107685);
smo109274.setContext(context);
smo109274.draw();
smo109275.setContext(context);
smo109275.draw();
const fmtsmo10492746 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo104927v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104927v0ar = [];
const smo104907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104907.setAttribute('id', 'smo104907');
smo104927v0ar.push(smo104907);
const smo104909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104909.setAttribute('id', 'smo104909');
smo104927v0ar.push(smo104909);
const smo104910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104910.setAttribute('id', 'smo104910');
smo104927v0ar.push(smo104910);
const smo104911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104911.setAttribute('id', 'smo104911');
smo104927v0ar.push(smo104911);
const smo104912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo104912.setAttribute('id', 'smo104912');
smo104927v0ar.push(smo104912);
const smo104913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104913.setAttribute('id', 'smo104913');
smo104927v0ar.push(smo104913);
smo104927v0.addTickables(smo104927v0ar)
fmtsmo10492746.joinVoices([smo104927v0]);
const fmtsmo10770346 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo107703v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107703v0ar = [];
const smo107686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107686.setAttribute('id', 'smo107686');
smo107703v0ar.push(smo107686);
const smo107687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107687.setAttribute('id', 'smo107687');
smo107703v0ar.push(smo107687);
const smo107688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107688.setAttribute('id', 'smo107688');
smo107703v0ar.push(smo107688);
const smo107689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo107689.setAttribute('id', 'smo107689');
const smo1076891acc = new VF.Accidental('b');
smo107689.addModifier(smo1076891acc, 1);
smo107703v0ar.push(smo107689);
smo107703v0.addTickables(smo107703v0ar)
fmtsmo10770346.joinVoices([smo107703v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109278 = smo104907.getStemDirection();
smo104907.setStemDirection(dirsmo109278);
smo104909.setStemDirection(dirsmo109278);
smo104910.setStemDirection(dirsmo109278);
const smo109278 = new VF.Beam([smo104907,smo104909,smo104910]);
const dirsmo109279 = smo104911.getStemDirection();
smo104911.setStemDirection(dirsmo109279);
smo104912.setStemDirection(dirsmo109279);
smo104913.setStemDirection(dirsmo109279);
const smo109279 = new VF.Beam([smo104911,smo104912,smo104913]);
const dirsmo109282 = smo107686.getStemDirection();
smo107686.setStemDirection(dirsmo109282);
smo107687.setStemDirection(dirsmo109282);
const smo109282 = new VF.Beam([smo107686,smo107687]);
const dirsmo109283 = smo107688.getStemDirection();
smo107688.setStemDirection(dirsmo109283);
smo107689.setStemDirection(dirsmo109283);
const smo109283 = new VF.Beam([smo107688,smo107689]);
 
// formatting measures in staff group smo103216
fmtsmo10492746.format([smo104927v0,smo107703v0], 281);
const stavesmo104927 = new VF.Stave(1253, 1148, 295);
stavesmo104927.setAttribute('id', 'stavesmo104927');
stavesmo104927.setBegBarType(VF.Barline.type.NONE);
stavesmo104927.setContext(context);
stavesmo104927.draw();
smo104927v0.draw(context, stavesmo104927);
smo109278.setContext(context);
smo109278.draw();
smo109279.setContext(context);
smo109279.draw();
const stavesmo107703 = new VF.Stave(1253, 1303, 295);
stavesmo107703.setAttribute('id', 'stavesmo107703');
stavesmo107703.setBegBarType(VF.Barline.type.NONE);
stavesmo107703.setContext(context);
stavesmo107703.draw();
smo107703v0.draw(context, stavesmo107703);
smo109282.setContext(context);
smo109282.draw();
smo109283.setContext(context);
smo109283.draw();
const fmtsmo10494647 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo104946v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104946v0ar = [];
const smo104928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104928.setAttribute('id', 'smo104928');
smo104946v0ar.push(smo104928);
const smo104929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo104929.setAttribute('id', 'smo104929');
smo104946v0ar.push(smo104929);
const smo104930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104930.setAttribute('id', 'smo104930');
smo104946v0ar.push(smo104930);
const smo104931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104931.setAttribute('id', 'smo104931');
smo104946v0ar.push(smo104931);
const smo104932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo104932.setAttribute('id', 'smo104932');
const smo1049320acc = new VF.Accidental('b');
smo104932.addModifier(smo1049320acc, 0);
const smo1049321acc = new VF.Accidental('b');
smo104932.addModifier(smo1049321acc, 1);
const smo1049322acc = new VF.Accidental('b');
smo104932.addModifier(smo1049322acc, 2);
smo104946v0ar.push(smo104932);
smo104946v0.addTickables(smo104946v0ar)
fmtsmo10494647.joinVoices([smo104946v0]);
const fmtsmo10772147 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo107721v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107721v0ar = [];
const smo107704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo107704.setAttribute('id', 'smo107704');
smo107721v0ar.push(smo107704);
const smo107705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo107705.setAttribute('id', 'smo107705');
smo107721v0ar.push(smo107705);
const smo107706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo107706.setAttribute('id', 'smo107706');
smo107721v0ar.push(smo107706);
const smo107707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo107707.setAttribute('id', 'smo107707');
smo107721v0ar.push(smo107707);
smo107721v0.addTickables(smo107721v0ar)
fmtsmo10772147.joinVoices([smo107721v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109286 = smo104929.getStemDirection();
smo104929.setStemDirection(dirsmo109286);
smo104930.setStemDirection(dirsmo109286);
smo104931.setStemDirection(dirsmo109286);
smo104932.setStemDirection(dirsmo109286);
const smo109286 = new VF.Beam([smo104929,smo104930,smo104931,smo104932]);
const dirsmo109289 = smo107704.getStemDirection();
smo107704.setStemDirection(dirsmo109289);
smo107705.setStemDirection(dirsmo109289);
const smo109289 = new VF.Beam([smo107704,smo107705]);
const dirsmo109290 = smo107706.getStemDirection();
smo107706.setStemDirection(dirsmo109290);
smo107707.setStemDirection(dirsmo109290);
const smo109290 = new VF.Beam([smo107706,smo107707]);
 
// formatting measures in staff group smo103216
fmtsmo10494647.format([smo104946v0,smo107721v0], 281);
const stavesmo104946 = new VF.Stave(1548, 1148, 295);
stavesmo104946.setAttribute('id', 'stavesmo104946');
stavesmo104946.setBegBarType(VF.Barline.type.NONE);
stavesmo104946.setContext(context);
stavesmo104946.draw();
smo104946v0.draw(context, stavesmo104946);
smo109286.setContext(context);
smo109286.draw();
const stavesmo107721 = new VF.Stave(1548, 1303, 295);
stavesmo107721.setAttribute('id', 'stavesmo107721');
stavesmo107721.setBegBarType(VF.Barline.type.NONE);
stavesmo107721.setContext(context);
stavesmo107721.draw();
smo107721v0.draw(context, stavesmo107721);
smo109289.setContext(context);
smo109289.draw();
smo109290.setContext(context);
smo109290.draw();
const rightsmo103216stavesmo1049461 = new VF.StaveConnector(stavesmo104946, stavesmo107721).setType(0);
rightsmo103216stavesmo1049461.setContext(context).draw();
const fmtsmo10496848 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo104968v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104968v0ar = [];
const smo104947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104947.setAttribute('id', 'smo104947');
smo104968v0ar.push(smo104947);
const smo104949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104949.setAttribute('id', 'smo104949');
smo104968v0ar.push(smo104949);
const smo104950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104950.setAttribute('id', 'smo104950');
smo104968v0ar.push(smo104950);
const smo104951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104951.setAttribute('id', 'smo104951');
smo104968v0ar.push(smo104951);
const smo104952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo104952.setAttribute('id', 'smo104952');
smo104968v0ar.push(smo104952);
const smo104953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo104953.setAttribute('id', 'smo104953');
smo104968v0ar.push(smo104953);
const smo104954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo104954.setAttribute('id', 'smo104954');
smo104968v0ar.push(smo104954);
smo104968v0.addTickables(smo104968v0ar)
fmtsmo10496848.joinVoices([smo104968v0]);
const fmtsmo10773948 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo107739v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107739v0ar = [];
const smo107722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107722.setAttribute('id', 'smo107722');
smo107739v0ar.push(smo107722);
const smo107723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107723.setAttribute('id', 'smo107723');
smo107739v0ar.push(smo107723);
const smo107724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107724.setAttribute('id', 'smo107724');
smo107739v0ar.push(smo107724);
const smo107725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo107725.setAttribute('id', 'smo107725');
smo107739v0ar.push(smo107725);
smo107739v0.addTickables(smo107739v0ar)
fmtsmo10773948.joinVoices([smo107739v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109301 = smo104947.getStemDirection();
smo104947.setStemDirection(dirsmo109301);
smo104949.setStemDirection(dirsmo109301);
smo104950.setStemDirection(dirsmo109301);
smo104951.setStemDirection(dirsmo109301);
const smo109301 = new VF.Beam([smo104947,smo104949,smo104950,smo104951]);
const dirsmo109302 = smo104952.getStemDirection();
smo104952.setStemDirection(dirsmo109302);
smo104953.setStemDirection(dirsmo109302);
smo104954.setStemDirection(dirsmo109302);
const smo109302 = new VF.Beam([smo104952,smo104953,smo104954]);
const dirsmo109305 = smo107722.getStemDirection();
smo107722.setStemDirection(dirsmo109305);
smo107723.setStemDirection(dirsmo109305);
const smo109305 = new VF.Beam([smo107722,smo107723]);
const dirsmo109306 = smo107724.getStemDirection();
smo107724.setStemDirection(dirsmo109306);
smo107725.setStemDirection(dirsmo109306);
const smo109306 = new VF.Beam([smo107724,smo107725]);
 
// formatting measures in staff group smo103216
fmtsmo10496848.format([smo104968v0,smo107739v0], 237);
const stavesmo104968 = new VF.Stave(73, 1501, 295);
stavesmo104968.setAttribute('id', 'stavesmo104968');
stavesmo104968.setBegBarType(1);
stavesmo104968.addClef('treble');
stavesmo104968.setContext(context);
stavesmo104968.draw();
smo104968v0.draw(context, stavesmo104968);
smo109301.setContext(context);
smo109301.draw();
smo109302.setContext(context);
smo109302.draw();
const stavesmo107739 = new VF.Stave(73, 1657, 295);
stavesmo107739.setAttribute('id', 'stavesmo107739');
stavesmo107739.setBegBarType(1);
stavesmo107739.addClef('bass');
stavesmo107739.setContext(context);
stavesmo107739.draw();
smo107739v0.draw(context, stavesmo107739);
smo109305.setContext(context);
smo109305.draw();
smo109306.setContext(context);
smo109306.draw();
const leftsmo103216stavesmo1049681 = new VF.StaveConnector(stavesmo104968, stavesmo107739).setType(3);
leftsmo103216stavesmo1049681.setContext(context).draw();
const fmtsmo10498649 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo104986v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104986v0ar = [];
const smo104969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104969.setAttribute('id', 'smo104969');
smo104986v0ar.push(smo104969);
const smo104970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo104970.setAttribute('id', 'smo104970');
smo104986v0ar.push(smo104970);
const smo104971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104971.setAttribute('id', 'smo104971');
smo104986v0ar.push(smo104971);
const smo104972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104972.setAttribute('id', 'smo104972');
smo104986v0ar.push(smo104972);
smo104986v0.addTickables(smo104986v0ar)
fmtsmo10498649.joinVoices([smo104986v0]);
const fmtsmo10775749 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo107757v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107757v0ar = [];
const smo107740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107740.setAttribute('id', 'smo107740');
smo107757v0ar.push(smo107740);
const smo107741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo107741.setAttribute('id', 'smo107741');
smo107757v0ar.push(smo107741);
const smo107742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107742.setAttribute('id', 'smo107742');
smo107757v0ar.push(smo107742);
const smo107743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo107743.setAttribute('id', 'smo107743');
smo107757v0ar.push(smo107743);
smo107757v0.addTickables(smo107757v0ar)
fmtsmo10775749.joinVoices([smo107757v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109309 = smo104970.getStemDirection();
smo104970.setStemDirection(dirsmo109309);
smo104971.setStemDirection(dirsmo109309);
smo104972.setStemDirection(dirsmo109309);
const smo109309 = new VF.Beam([smo104970,smo104971,smo104972]);
const dirsmo109312 = smo107740.getStemDirection();
smo107740.setStemDirection(dirsmo109312);
smo107741.setStemDirection(dirsmo109312);
const smo109312 = new VF.Beam([smo107740,smo107741]);
 
// formatting measures in staff group smo103216
fmtsmo10498649.format([smo104986v0,smo107757v0], 281);
const stavesmo104986 = new VF.Stave(368, 1501, 295);
stavesmo104986.setAttribute('id', 'stavesmo104986');
stavesmo104986.setBegBarType(VF.Barline.type.NONE);
stavesmo104986.setContext(context);
stavesmo104986.draw();
smo104986v0.draw(context, stavesmo104986);
smo109309.setContext(context);
smo109309.draw();
const stavesmo107757 = new VF.Stave(368, 1657, 295);
stavesmo107757.setAttribute('id', 'stavesmo107757');
stavesmo107757.setBegBarType(VF.Barline.type.NONE);
stavesmo107757.setContext(context);
stavesmo107757.draw();
smo107757v0.draw(context, stavesmo107757);
smo109312.setContext(context);
smo109312.draw();
const fmtsmo10500850 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo105008v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105008v0ar = [];
const smo104987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104987.setAttribute('id', 'smo104987');
smo105008v0ar.push(smo104987);
const smo104988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104988.setAttribute('id', 'smo104988');
smo105008v0ar.push(smo104988);
const smo104989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104989.setAttribute('id', 'smo104989');
smo105008v0ar.push(smo104989);
const smo104990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104990.setAttribute('id', 'smo104990');
smo105008v0ar.push(smo104990);
const smo104991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo104991.setAttribute('id', 'smo104991');
smo105008v0ar.push(smo104991);
const smo104992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104992.setAttribute('id', 'smo104992');
smo105008v0ar.push(smo104992);
const smo104993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo104993.setAttribute('id', 'smo104993');
smo105008v0ar.push(smo104993);
const smo104994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo104994.setAttribute('id', 'smo104994');
smo105008v0ar.push(smo104994);
smo105008v0.addTickables(smo105008v0ar)
fmtsmo10500850.joinVoices([smo105008v0]);
const fmtsmo10777550 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo107775v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107775v0ar = [];
const smo107758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo107758.setAttribute('id', 'smo107758');
smo107775v0ar.push(smo107758);
const smo107759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107759.setAttribute('id', 'smo107759');
smo107775v0ar.push(smo107759);
const smo107760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo107760.setAttribute('id', 'smo107760');
const smo1077600acc = new VF.Accidental('b');
smo107760.addModifier(smo1077600acc, 0);
const smo1077601acc = new VF.Accidental('b');
smo107760.addModifier(smo1077601acc, 1);
smo107775v0ar.push(smo107760);
const smo107761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107761.setAttribute('id', 'smo107761');
smo107775v0ar.push(smo107761);
smo107775v0.addTickables(smo107775v0ar)
fmtsmo10777550.joinVoices([smo107775v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109315 = smo104987.getStemDirection();
smo104987.setStemDirection(dirsmo109315);
smo104988.setStemDirection(dirsmo109315);
smo104989.setStemDirection(dirsmo109315);
smo104990.setStemDirection(dirsmo109315);
const smo109315 = new VF.Beam([smo104987,smo104988,smo104989,smo104990]);
const dirsmo109316 = smo104991.getStemDirection();
smo104991.setStemDirection(dirsmo109316);
smo104992.setStemDirection(dirsmo109316);
smo104993.setStemDirection(dirsmo109316);
smo104994.setStemDirection(dirsmo109316);
const smo109316 = new VF.Beam([smo104991,smo104992,smo104993,smo104994]);
const dirsmo109319 = smo107758.getStemDirection();
smo107758.setStemDirection(dirsmo109319);
smo107759.setStemDirection(dirsmo109319);
const smo109319 = new VF.Beam([smo107758,smo107759]);
const dirsmo109320 = smo107760.getStemDirection();
smo107760.setStemDirection(dirsmo109320);
smo107761.setStemDirection(dirsmo109320);
const smo109320 = new VF.Beam([smo107760,smo107761]);
 
// formatting measures in staff group smo103216
fmtsmo10500850.format([smo105008v0,smo107775v0], 281);
const stavesmo105008 = new VF.Stave(663, 1501, 295);
stavesmo105008.setAttribute('id', 'stavesmo105008');
stavesmo105008.setBegBarType(VF.Barline.type.NONE);
stavesmo105008.setContext(context);
stavesmo105008.draw();
smo105008v0.draw(context, stavesmo105008);
smo109315.setContext(context);
smo109315.draw();
smo109316.setContext(context);
smo109316.draw();
const stavesmo107775 = new VF.Stave(663, 1657, 295);
stavesmo107775.setAttribute('id', 'stavesmo107775');
stavesmo107775.setBegBarType(VF.Barline.type.NONE);
stavesmo107775.setContext(context);
stavesmo107775.draw();
smo107775v0.draw(context, stavesmo107775);
smo109319.setContext(context);
smo109319.draw();
smo109320.setContext(context);
smo109320.draw();
const fmtsmo10503051 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo105030v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105030v0ar = [];
const smo105009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo105009.setAttribute('id', 'smo105009');
smo105030v0ar.push(smo105009);
const smo105010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105010.setAttribute('id', 'smo105010');
smo105030v0ar.push(smo105010);
const smo105011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo105011.setAttribute('id', 'smo105011');
smo105030v0ar.push(smo105011);
const smo105012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo105012.setAttribute('id', 'smo105012');
smo105030v0ar.push(smo105012);
const smo105013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo105013.setAttribute('id', 'smo105013');
smo105030v0ar.push(smo105013);
const smo105014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105014.setAttribute('id', 'smo105014');
smo105030v0ar.push(smo105014);
const smo105015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo105015.setAttribute('id', 'smo105015');
smo105030v0ar.push(smo105015);
const smo105016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105016.setAttribute('id', 'smo105016');
smo105030v0ar.push(smo105016);
smo105030v0.addTickables(smo105030v0ar)
fmtsmo10503051.joinVoices([smo105030v0]);
const fmtsmo10779351 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo107793v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107793v0ar = [];
const smo107776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo107776.setAttribute('id', 'smo107776');
smo107793v0ar.push(smo107776);
const smo107777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107777.setAttribute('id', 'smo107777');
smo107793v0ar.push(smo107777);
const smo107778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo107778.setAttribute('id', 'smo107778');
const smo1077780acc = new VF.Accidental('b');
smo107778.addModifier(smo1077780acc, 0);
const smo1077781acc = new VF.Accidental('b');
smo107778.addModifier(smo1077781acc, 1);
smo107793v0ar.push(smo107778);
const smo107779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo107779.setAttribute('id', 'smo107779');
smo107793v0ar.push(smo107779);
smo107793v0.addTickables(smo107793v0ar)
fmtsmo10779351.joinVoices([smo107793v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109323 = smo105009.getStemDirection();
smo105009.setStemDirection(dirsmo109323);
smo105010.setStemDirection(dirsmo109323);
smo105011.setStemDirection(dirsmo109323);
smo105012.setStemDirection(dirsmo109323);
const smo109323 = new VF.Beam([smo105009,smo105010,smo105011,smo105012]);
const dirsmo109324 = smo105013.getStemDirection();
smo105013.setStemDirection(dirsmo109324);
smo105014.setStemDirection(dirsmo109324);
smo105015.setStemDirection(dirsmo109324);
smo105016.setStemDirection(dirsmo109324);
const smo109324 = new VF.Beam([smo105013,smo105014,smo105015,smo105016]);
const dirsmo109327 = smo107776.getStemDirection();
smo107776.setStemDirection(dirsmo109327);
smo107777.setStemDirection(dirsmo109327);
const smo109327 = new VF.Beam([smo107776,smo107777]);
const dirsmo109328 = smo107778.getStemDirection();
smo107778.setStemDirection(dirsmo109328);
smo107779.setStemDirection(dirsmo109328);
const smo109328 = new VF.Beam([smo107778,smo107779]);
 
// formatting measures in staff group smo103216
fmtsmo10503051.format([smo105030v0,smo107793v0], 281);
const stavesmo105030 = new VF.Stave(958, 1501, 295);
stavesmo105030.setAttribute('id', 'stavesmo105030');
stavesmo105030.setBegBarType(VF.Barline.type.NONE);
stavesmo105030.setContext(context);
stavesmo105030.draw();
smo105030v0.draw(context, stavesmo105030);
smo109323.setContext(context);
smo109323.draw();
smo109324.setContext(context);
smo109324.draw();
const stavesmo107793 = new VF.Stave(958, 1657, 295);
stavesmo107793.setAttribute('id', 'stavesmo107793');
stavesmo107793.setBegBarType(VF.Barline.type.NONE);
stavesmo107793.setContext(context);
stavesmo107793.draw();
smo107793v0.draw(context, stavesmo107793);
smo109327.setContext(context);
smo109327.draw();
smo109328.setContext(context);
smo109328.draw();
const fmtsmo10505152 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo105051v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105051v0ar = [];
const smo105031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo105031.setAttribute('id', 'smo105031');
smo105051v0ar.push(smo105031);
const smo105032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo105032.setAttribute('id', 'smo105032');
smo105051v0ar.push(smo105032);
const smo105033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo105033.setAttribute('id', 'smo105033');
smo105051v0ar.push(smo105033);
const smo105034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo105034.setAttribute('id', 'smo105034');
smo105051v0ar.push(smo105034);
const smo105035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo105035.setAttribute('id', 'smo105035');
smo105051v0ar.push(smo105035);
const smo105036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo105036.setAttribute('id', 'smo105036');
smo105051v0ar.push(smo105036);
const smo105037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo105037.setAttribute('id', 'smo105037');
smo105051v0ar.push(smo105037);
smo105051v0.addTickables(smo105051v0ar)
fmtsmo10505152.joinVoices([smo105051v0]);
const fmtsmo10781152 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo107811v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107811v0ar = [];
const smo107794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107794.setAttribute('id', 'smo107794');
smo107811v0ar.push(smo107794);
const smo107795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107795.setAttribute('id', 'smo107795');
smo107811v0ar.push(smo107795);
const smo107796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107796.setAttribute('id', 'smo107796');
smo107811v0ar.push(smo107796);
const smo107797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo107797.setAttribute('id', 'smo107797');
smo107811v0ar.push(smo107797);
smo107811v0.addTickables(smo107811v0ar)
fmtsmo10781152.joinVoices([smo107811v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109331 = smo105031.getStemDirection();
smo105031.setStemDirection(dirsmo109331);
smo105032.setStemDirection(dirsmo109331);
smo105033.setStemDirection(dirsmo109331);
smo105034.setStemDirection(dirsmo109331);
const smo109331 = new VF.Beam([smo105031,smo105032,smo105033,smo105034]);
const dirsmo109332 = smo105035.getStemDirection();
smo105035.setStemDirection(dirsmo109332);
smo105036.setStemDirection(dirsmo109332);
smo105037.setStemDirection(dirsmo109332);
const smo109332 = new VF.Beam([smo105035,smo105036,smo105037]);
const dirsmo109335 = smo107794.getStemDirection();
smo107794.setStemDirection(dirsmo109335);
smo107795.setStemDirection(dirsmo109335);
const smo109335 = new VF.Beam([smo107794,smo107795]);
const dirsmo109336 = smo107796.getStemDirection();
smo107796.setStemDirection(dirsmo109336);
smo107797.setStemDirection(dirsmo109336);
const smo109336 = new VF.Beam([smo107796,smo107797]);
 
// formatting measures in staff group smo103216
fmtsmo10505152.format([smo105051v0,smo107811v0], 281);
const stavesmo105051 = new VF.Stave(1253, 1501, 295);
stavesmo105051.setAttribute('id', 'stavesmo105051');
stavesmo105051.setBegBarType(VF.Barline.type.NONE);
stavesmo105051.setContext(context);
stavesmo105051.draw();
smo105051v0.draw(context, stavesmo105051);
smo109331.setContext(context);
smo109331.draw();
smo109332.setContext(context);
smo109332.draw();
const stavesmo107811 = new VF.Stave(1253, 1657, 295);
stavesmo107811.setAttribute('id', 'stavesmo107811');
stavesmo107811.setBegBarType(VF.Barline.type.NONE);
stavesmo107811.setContext(context);
stavesmo107811.draw();
smo107811v0.draw(context, stavesmo107811);
smo109335.setContext(context);
smo109335.draw();
smo109336.setContext(context);
smo109336.draw();
const fmtsmo10506853 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo105068v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105068v0ar = [];
const smo105052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo105052.setAttribute('id', 'smo105052');
smo105068v0ar.push(smo105052);
const smo105053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo105053.setAttribute('id', 'smo105053');
smo105068v0ar.push(smo105053);
const smo105054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105054.setAttribute('id', 'smo105054');
smo105068v0ar.push(smo105054);
smo105068v0.addTickables(smo105068v0ar)
fmtsmo10506853.joinVoices([smo105068v0]);
const fmtsmo10782953 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo107829v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107829v0ar = [];
const smo107812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo107812.setAttribute('id', 'smo107812');
smo107829v0ar.push(smo107812);
const smo107813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107813.setAttribute('id', 'smo107813');
smo107829v0ar.push(smo107813);
const smo107814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo107814.setAttribute('id', 'smo107814');
smo107829v0ar.push(smo107814);
const smo107815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo107815.setAttribute('id', 'smo107815');
smo107829v0ar.push(smo107815);
smo107829v0.addTickables(smo107829v0ar)
fmtsmo10782953.joinVoices([smo107829v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109341 = smo107812.getStemDirection();
smo107812.setStemDirection(dirsmo109341);
smo107813.setStemDirection(dirsmo109341);
const smo109341 = new VF.Beam([smo107812,smo107813]);
 
// formatting measures in staff group smo103216
fmtsmo10506853.format([smo105068v0,smo107829v0], 281);
const stavesmo105068 = new VF.Stave(1548, 1501, 295);
stavesmo105068.setAttribute('id', 'stavesmo105068');
stavesmo105068.setBegBarType(VF.Barline.type.NONE);
stavesmo105068.setContext(context);
stavesmo105068.draw();
smo105068v0.draw(context, stavesmo105068);
const stavesmo107829 = new VF.Stave(1548, 1657, 295);
stavesmo107829.setAttribute('id', 'stavesmo107829');
stavesmo107829.setBegBarType(VF.Barline.type.NONE);
stavesmo107829.setContext(context);
stavesmo107829.draw();
smo107829v0.draw(context, stavesmo107829);
smo109341.setContext(context);
smo109341.draw();
const rightsmo103216stavesmo1050681 = new VF.StaveConnector(stavesmo105068, stavesmo107829).setType(0);
rightsmo103216stavesmo1050681.setContext(context).draw();
const fmtsmo10508854 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo105088v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105088v0ar = [];
const smo105069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo105069.setAttribute('id', 'smo105069');
smo105088v0ar.push(smo105069);
const smo105071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo105071.setAttribute('id', 'smo105071');
const smo1050710acc = new VF.Accidental('b');
smo105071.addModifier(smo1050710acc, 0);
smo105088v0ar.push(smo105071);
const smo105072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo105072.setAttribute('id', 'smo105072');
const smo1050721acc = new VF.Accidental('n');
smo105072.addModifier(smo1050721acc, 1);
smo105088v0ar.push(smo105072);
const smo105073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo105073.setAttribute('id', 'smo105073');
smo105088v0ar.push(smo105073);
const smo105074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo105074.setAttribute('id', 'smo105074');
smo105088v0ar.push(smo105074);
smo105088v0.addTickables(smo105088v0ar)
fmtsmo10508854.joinVoices([smo105088v0]);
const fmtsmo10784754 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo107847v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107847v0ar = [];
const smo107830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo107830.setAttribute('id', 'smo107830');
smo107847v0ar.push(smo107830);
const smo107831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107831.setAttribute('id', 'smo107831');
smo107847v0ar.push(smo107831);
const smo107832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107832.setAttribute('id', 'smo107832');
smo107847v0ar.push(smo107832);
const smo107833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107833.setAttribute('id', 'smo107833');
smo107847v0ar.push(smo107833);
smo107847v0.addTickables(smo107847v0ar)
fmtsmo10784754.joinVoices([smo107847v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109350 = smo105069.getStemDirection();
smo105069.setStemDirection(dirsmo109350);
smo105071.setStemDirection(dirsmo109350);
smo105072.setStemDirection(dirsmo109350);
const smo109350 = new VF.Beam([smo105069,smo105071,smo105072]);
const dirsmo109351 = smo105073.getStemDirection();
smo105073.setStemDirection(dirsmo109351);
smo105074.setStemDirection(dirsmo109351);
const smo109351 = new VF.Beam([smo105073,smo105074]);
const dirsmo109353 = smo107830.getStemDirection();
smo107830.setStemDirection(dirsmo109353);
smo107831.setStemDirection(dirsmo109353);
const smo109353 = new VF.Beam([smo107830,smo107831]);
const dirsmo109354 = smo107832.getStemDirection();
smo107832.setStemDirection(dirsmo109354);
smo107833.setStemDirection(dirsmo109354);
const smo109354 = new VF.Beam([smo107832,smo107833]);
 
// formatting measures in staff group smo103216
fmtsmo10508854.format([smo105088v0,smo107847v0], 195);
const stavesmo105088 = new VF.Stave(73, 1835, 295);
stavesmo105088.setAttribute('id', 'stavesmo105088');
stavesmo105088.setBegBarType(4);
stavesmo105088.addClef('treble');
const keysmo105088 = new VF.KeySignature('Bb');
keysmo105088.cancelKey('C');
keysmo105088.addToStave(stavesmo105088);
stavesmo105088.setContext(context);
stavesmo105088.draw();
smo105088v0.draw(context, stavesmo105088);
smo109350.setContext(context);
smo109350.draw();
smo109351.setContext(context);
smo109351.draw();
const stavesmo107847 = new VF.Stave(73, 2000, 295);
stavesmo107847.setAttribute('id', 'stavesmo107847');
stavesmo107847.setBegBarType(4);
stavesmo107847.addClef('bass');
const keysmo107847 = new VF.KeySignature('Bb');
keysmo107847.cancelKey('C');
keysmo107847.addToStave(stavesmo107847);
stavesmo107847.setContext(context);
stavesmo107847.draw();
smo107847v0.draw(context, stavesmo107847);
smo109353.setContext(context);
smo109353.draw();
smo109354.setContext(context);
smo109354.draw();
const leftsmo103216stavesmo1050881 = new VF.StaveConnector(stavesmo105088, stavesmo107847).setType(3);
leftsmo103216stavesmo1050881.setContext(context).draw();
const fmtsmo10510955 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo105109v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105109v0ar = [];
const smo105089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo105089.setAttribute('id', 'smo105089');
smo105109v0ar.push(smo105089);
smo105109v0.addTickables(smo105109v0ar)
fmtsmo10510955.joinVoices([smo105109v0]);
const smo105109v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105109v1ar = [];
const smo105090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105090.setAttribute('id', 'smo105090');
smo105090.setStyle({ fillStyle: "#115511" });
smo105109v1ar.push(smo105090);
const smo105091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo105091.setAttribute('id', 'smo105091');
smo105091.setStyle({ fillStyle: "#115511" });
smo105109v1ar.push(smo105091);
const smo105092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105092.setAttribute('id', 'smo105092');
smo105092.setStyle({ fillStyle: "#115511" });
smo105109v1ar.push(smo105092);
const smo105093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo105093.setAttribute('id', 'smo105093');
smo105093.setStyle({ fillStyle: "#115511" });
smo105109v1ar.push(smo105093);
const smo105094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105094.setAttribute('id', 'smo105094');
smo105094.setStyle({ fillStyle: "#115511" });
smo105109v1ar.push(smo105094);
const smo105095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105095.setAttribute('id', 'smo105095');
smo105095.setStyle({ fillStyle: "#115511" });
smo105109v1ar.push(smo105095);
smo105109v1.addTickables(smo105109v1ar)
fmtsmo10510955.joinVoices([smo105109v1]);
const fmtsmo10786555 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo107865v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107865v0ar = [];
const smo107848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo107848.setAttribute('id', 'smo107848');
smo107865v0ar.push(smo107848);
const smo107849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo107849.setAttribute('id', 'smo107849');
smo107865v0ar.push(smo107849);
const smo107850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo107850.setAttribute('id', 'smo107850');
smo107865v0ar.push(smo107850);
const smo107851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo107851.setAttribute('id', 'smo107851');
smo107865v0ar.push(smo107851);
smo107865v0.addTickables(smo107865v0ar)
fmtsmo10786555.joinVoices([smo107865v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109356 = smo105091.getStemDirection();
smo105091.setStemDirection(dirsmo109356);
smo105092.setStemDirection(dirsmo109356);
const smo109356 = new VF.Beam([smo105091,smo105092]);
const dirsmo109357 = smo105093.getStemDirection();
smo105093.setStemDirection(dirsmo109357);
smo105094.setStemDirection(dirsmo109357);
smo105095.setStemDirection(dirsmo109357);
const smo109357 = new VF.Beam([smo105093,smo105094,smo105095]);
const dirsmo109360 = smo107848.getStemDirection();
smo107848.setStemDirection(dirsmo109360);
smo107849.setStemDirection(dirsmo109360);
const smo109360 = new VF.Beam([smo107848,smo107849]);
const dirsmo109361 = smo107850.getStemDirection();
smo107850.setStemDirection(dirsmo109361);
smo107851.setStemDirection(dirsmo109361);
const smo109361 = new VF.Beam([smo107850,smo107851]);
 
// formatting measures in staff group smo103216
fmtsmo10510955.format([smo105109v0,smo105109v1,smo107865v0], 281);
const stavesmo105109 = new VF.Stave(368, 1835, 295);
stavesmo105109.setAttribute('id', 'stavesmo105109');
stavesmo105109.setBegBarType(VF.Barline.type.NONE);
stavesmo105109.setContext(context);
stavesmo105109.draw();
smo105109v0.draw(context, stavesmo105109);
smo105109v1.draw(context, stavesmo105109);
smo109356.setContext(context);
smo109356.draw();
smo109357.setContext(context);
smo109357.draw();
const stavesmo107865 = new VF.Stave(368, 2000, 295);
stavesmo107865.setAttribute('id', 'stavesmo107865');
stavesmo107865.setBegBarType(VF.Barline.type.NONE);
stavesmo107865.setContext(context);
stavesmo107865.draw();
smo107865v0.draw(context, stavesmo107865);
smo109360.setContext(context);
smo109360.draw();
smo109361.setContext(context);
smo109361.draw();
const fmtsmo10512856 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo105128v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105128v0ar = [];
const smo105110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo105110.setAttribute('id', 'smo105110');
smo105128v0ar.push(smo105110);
const smo105111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105111.setAttribute('id', 'smo105111');
const smo1051110acc = new VF.Accidental('n');
smo105111.addModifier(smo1051110acc, 0);
smo105128v0ar.push(smo105111);
const smo105112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo105112.setAttribute('id', 'smo105112');
smo105128v0ar.push(smo105112);
const smo105113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo105113.setAttribute('id', 'smo105113');
smo105128v0ar.push(smo105113);
const smo105114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo105114.setAttribute('id', 'smo105114');
smo105128v0ar.push(smo105114);
smo105128v0.addTickables(smo105128v0ar)
fmtsmo10512856.joinVoices([smo105128v0]);
const fmtsmo10788356 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo107883v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107883v0ar = [];
const smo107866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo107866.setAttribute('id', 'smo107866');
smo107883v0ar.push(smo107866);
const smo107867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo107867.setAttribute('id', 'smo107867');
smo107883v0ar.push(smo107867);
const smo107868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo107868.setAttribute('id', 'smo107868');
smo107883v0ar.push(smo107868);
const smo107869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo107869.setAttribute('id', 'smo107869');
smo107883v0ar.push(smo107869);
smo107883v0.addTickables(smo107883v0ar)
fmtsmo10788356.joinVoices([smo107883v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109364 = smo105110.getStemDirection();
smo105110.setStemDirection(dirsmo109364);
smo105111.setStemDirection(dirsmo109364);
smo105112.setStemDirection(dirsmo109364);
const smo109364 = new VF.Beam([smo105110,smo105111,smo105112]);
const dirsmo109365 = smo105113.getStemDirection();
smo105113.setStemDirection(dirsmo109365);
smo105114.setStemDirection(dirsmo109365);
const smo109365 = new VF.Beam([smo105113,smo105114]);
const dirsmo109368 = smo107866.getStemDirection();
smo107866.setStemDirection(dirsmo109368);
smo107867.setStemDirection(dirsmo109368);
const smo109368 = new VF.Beam([smo107866,smo107867]);
const dirsmo109369 = smo107868.getStemDirection();
smo107868.setStemDirection(dirsmo109369);
smo107869.setStemDirection(dirsmo109369);
const smo109369 = new VF.Beam([smo107868,smo107869]);
 
// formatting measures in staff group smo103216
fmtsmo10512856.format([smo105128v0,smo107883v0], 281);
const stavesmo105128 = new VF.Stave(663, 1835, 295);
stavesmo105128.setAttribute('id', 'stavesmo105128');
stavesmo105128.setBegBarType(VF.Barline.type.NONE);
stavesmo105128.setContext(context);
stavesmo105128.draw();
smo105128v0.draw(context, stavesmo105128);
smo109364.setContext(context);
smo109364.draw();
smo109365.setContext(context);
smo109365.draw();
const stavesmo107883 = new VF.Stave(663, 2000, 295);
stavesmo107883.setAttribute('id', 'stavesmo107883');
stavesmo107883.setBegBarType(VF.Barline.type.NONE);
stavesmo107883.setContext(context);
stavesmo107883.draw();
smo107883v0.draw(context, stavesmo107883);
smo109368.setContext(context);
smo109368.draw();
smo109369.setContext(context);
smo109369.draw();
const fmtsmo10515157 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo105151v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105151v0ar = [];
const smo105129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo105129.setAttribute('id', 'smo105129');
smo105151v0ar.push(smo105129);
const smo105130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo105130.setAttribute('id', 'smo105130');
smo105130.addModifier(new VF.Dot(), 0);
smo105130.addModifier(new VF.Dot(), 1);
smo105130.addModifier(new VF.Dot(), 2);
smo105151v0ar.push(smo105130);
const smo105131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105131.setAttribute('id', 'smo105131');
smo105151v0ar.push(smo105131);
smo105151v0.addTickables(smo105151v0ar)
fmtsmo10515157.joinVoices([smo105151v0]);
const smo105151v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105151v1ar = [];
const smo105132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105132.setAttribute('id', 'smo105132');
smo105132.setStyle({ fillStyle: "#115511" });
smo105151v1ar.push(smo105132);
const smo105133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo105133.setAttribute('id', 'smo105133');
smo105133.setStyle({ fillStyle: "#115511" });
smo105151v1ar.push(smo105133);
const smo105134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo105134.setAttribute('id', 'smo105134');
smo105134.setStyle({ fillStyle: "#115511" });
const smo1051340acc = new VF.Accidental('b');
smo105134.addModifier(smo1051340acc, 0);
smo105151v1ar.push(smo105134);
const smo105135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo105135.setAttribute('id', 'smo105135');
smo105135.setStyle({ fillStyle: "#115511" });
const smo1051350acc = new VF.Accidental('n');
smo105135.addModifier(smo1051350acc, 0);
smo105151v1ar.push(smo105135);
const smo105136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105136.setAttribute('id', 'smo105136');
smo105136.setStyle({ fillStyle: "#115511" });
smo105151v1ar.push(smo105136);
const smo105137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo105137.setAttribute('id', 'smo105137');
smo105137.setStyle({ fillStyle: "#115511" });
smo105151v1ar.push(smo105137);
smo105151v1.addTickables(smo105151v1ar)
fmtsmo10515157.joinVoices([smo105151v1]);
const fmtsmo10790157 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo107901v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107901v0ar = [];
const smo107884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo107884.setAttribute('id', 'smo107884');
smo107901v0ar.push(smo107884);
const smo107885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo107885.setAttribute('id', 'smo107885');
smo107901v0ar.push(smo107885);
const smo107886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo107886.setAttribute('id', 'smo107886');
smo107901v0ar.push(smo107886);
const smo107887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo107887.setAttribute('id', 'smo107887');
smo107901v0ar.push(smo107887);
smo107901v0.addTickables(smo107901v0ar)
fmtsmo10790157.joinVoices([smo107901v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109372 = smo105130.getStemDirection();
smo105130.setStemDirection(dirsmo109372);
smo105131.setStemDirection(dirsmo109372);
const smo109372 = new VF.Beam([smo105130,smo105131]);
const dirsmo109373 = smo105133.getStemDirection();
smo105133.setStemDirection(dirsmo109373);
smo105134.setStemDirection(dirsmo109373);
const smo109373 = new VF.Beam([smo105133,smo105134]);
const dirsmo109374 = smo105135.getStemDirection();
smo105135.setStemDirection(dirsmo109374);
smo105136.setStemDirection(dirsmo109374);
smo105137.setStemDirection(dirsmo109374);
const smo109374 = new VF.Beam([smo105135,smo105136,smo105137]);
const dirsmo109377 = smo107884.getStemDirection();
smo107884.setStemDirection(dirsmo109377);
smo107885.setStemDirection(dirsmo109377);
const smo109377 = new VF.Beam([smo107884,smo107885]);
const dirsmo109378 = smo107886.getStemDirection();
smo107886.setStemDirection(dirsmo109378);
smo107887.setStemDirection(dirsmo109378);
const smo109378 = new VF.Beam([smo107886,smo107887]);
 
// formatting measures in staff group smo103216
fmtsmo10515157.format([smo105151v0,smo105151v1,smo107901v0], 281);
const stavesmo105151 = new VF.Stave(958, 1835, 295);
stavesmo105151.setAttribute('id', 'stavesmo105151');
stavesmo105151.setBegBarType(VF.Barline.type.NONE);
stavesmo105151.setContext(context);
stavesmo105151.draw();
smo105151v0.draw(context, stavesmo105151);
smo105151v1.draw(context, stavesmo105151);
smo109372.setContext(context);
smo109372.draw();
smo109373.setContext(context);
smo109373.draw();
smo109374.setContext(context);
smo109374.draw();
const stavesmo107901 = new VF.Stave(958, 2000, 295);
stavesmo107901.setAttribute('id', 'stavesmo107901');
stavesmo107901.setBegBarType(VF.Barline.type.NONE);
stavesmo107901.setContext(context);
stavesmo107901.draw();
smo107901v0.draw(context, stavesmo107901);
smo109377.setContext(context);
smo109377.draw();
smo109378.setContext(context);
smo109378.draw();
const fmtsmo10517158 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo105171v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105171v0ar = [];
const smo105152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105152.setAttribute('id', 'smo105152');
smo105171v0ar.push(smo105152);
const smo105153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105153.setAttribute('id', 'smo105153');
smo105171v0ar.push(smo105153);
const smo105154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105154.setAttribute('id', 'smo105154');
smo105171v0ar.push(smo105154);
const smo105155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105155.setAttribute('id', 'smo105155');
smo105171v0ar.push(smo105155);
const smo105156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105156.setAttribute('id', 'smo105156');
smo105171v0ar.push(smo105156);
const smo105157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105157.setAttribute('id', 'smo105157');
smo105171v0ar.push(smo105157);
smo105171v0.addTickables(smo105171v0ar)
fmtsmo10517158.joinVoices([smo105171v0]);
const fmtsmo10791958 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo107919v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107919v0ar = [];
const smo107902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo107902.setAttribute('id', 'smo107902');
smo107919v0ar.push(smo107902);
const smo107903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo107903.setAttribute('id', 'smo107903');
smo107919v0ar.push(smo107903);
const smo107904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo107904.setAttribute('id', 'smo107904');
smo107919v0ar.push(smo107904);
const smo107905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo107905.setAttribute('id', 'smo107905');
const smo1079050acc = new VF.Accidental('b');
smo107905.addModifier(smo1079050acc, 0);
const smo1079051acc = new VF.Accidental('b');
smo107905.addModifier(smo1079051acc, 1);
smo107919v0ar.push(smo107905);
smo107919v0.addTickables(smo107919v0ar)
fmtsmo10791958.joinVoices([smo107919v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109381 = smo105152.getStemDirection();
smo105152.setStemDirection(dirsmo109381);
smo105153.setStemDirection(dirsmo109381);
smo105154.setStemDirection(dirsmo109381);
const smo109381 = new VF.Beam([smo105152,smo105153,smo105154]);
const dirsmo109382 = smo105155.getStemDirection();
smo105155.setStemDirection(dirsmo109382);
smo105156.setStemDirection(dirsmo109382);
smo105157.setStemDirection(dirsmo109382);
const smo109382 = new VF.Beam([smo105155,smo105156,smo105157]);
const dirsmo109385 = smo107902.getStemDirection();
smo107902.setStemDirection(dirsmo109385);
smo107903.setStemDirection(dirsmo109385);
const smo109385 = new VF.Beam([smo107902,smo107903]);
const dirsmo109386 = smo107904.getStemDirection();
smo107904.setStemDirection(dirsmo109386);
smo107905.setStemDirection(dirsmo109386);
const smo109386 = new VF.Beam([smo107904,smo107905]);
 
// formatting measures in staff group smo103216
fmtsmo10517158.format([smo105171v0,smo107919v0], 281);
const stavesmo105171 = new VF.Stave(1253, 1835, 295);
stavesmo105171.setAttribute('id', 'stavesmo105171');
stavesmo105171.setBegBarType(VF.Barline.type.NONE);
stavesmo105171.setContext(context);
stavesmo105171.draw();
smo105171v0.draw(context, stavesmo105171);
smo109381.setContext(context);
smo109381.draw();
smo109382.setContext(context);
smo109382.draw();
const stavesmo107919 = new VF.Stave(1253, 2000, 295);
stavesmo107919.setAttribute('id', 'stavesmo107919');
stavesmo107919.setBegBarType(VF.Barline.type.NONE);
stavesmo107919.setContext(context);
stavesmo107919.draw();
smo107919v0.draw(context, stavesmo107919);
smo109385.setContext(context);
smo109385.draw();
smo109386.setContext(context);
smo109386.draw();
const fmtsmo10518759 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo105187v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105187v0ar = [];
const smo105172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105172.setAttribute('id', 'smo105172');
smo105187v0ar.push(smo105172);
const smo105173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo105173.setAttribute('id', 'smo105173');
smo105187v0ar.push(smo105173);
smo105187v0.addTickables(smo105187v0ar)
fmtsmo10518759.joinVoices([smo105187v0]);
const fmtsmo10793759 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo107937v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107937v0ar = [];
const smo107920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo107920.setAttribute('id', 'smo107920');
smo107937v0ar.push(smo107920);
const smo107921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107921.setAttribute('id', 'smo107921');
smo107937v0ar.push(smo107921);
const smo107922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo107922.setAttribute('id', 'smo107922');
smo107937v0ar.push(smo107922);
const smo107923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo107923.setAttribute('id', 'smo107923');
smo107937v0ar.push(smo107923);
smo107937v0.addTickables(smo107937v0ar)
fmtsmo10793759.joinVoices([smo107937v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109391 = smo107920.getStemDirection();
smo107920.setStemDirection(dirsmo109391);
smo107921.setStemDirection(dirsmo109391);
const smo109391 = new VF.Beam([smo107920,smo107921]);
const dirsmo109392 = smo107922.getStemDirection();
smo107922.setStemDirection(dirsmo109392);
smo107923.setStemDirection(dirsmo109392);
const smo109392 = new VF.Beam([smo107922,smo107923]);
 
// formatting measures in staff group smo103216
fmtsmo10518759.format([smo105187v0,smo107937v0], 281);
const stavesmo105187 = new VF.Stave(1548, 1835, 295);
stavesmo105187.setAttribute('id', 'stavesmo105187');
stavesmo105187.setBegBarType(VF.Barline.type.NONE);
stavesmo105187.setContext(context);
stavesmo105187.draw();
smo105187v0.draw(context, stavesmo105187);
const stavesmo107937 = new VF.Stave(1548, 2000, 295);
stavesmo107937.setAttribute('id', 'stavesmo107937');
stavesmo107937.setBegBarType(VF.Barline.type.NONE);
stavesmo107937.setContext(context);
stavesmo107937.draw();
smo107937v0.draw(context, stavesmo107937);
smo109391.setContext(context);
smo109391.draw();
smo109392.setContext(context);
smo109392.draw();
const rightsmo103216stavesmo1051871 = new VF.StaveConnector(stavesmo105187, stavesmo107937).setType(0);
rightsmo103216stavesmo1051871.setContext(context).draw();
// modifier from 0-32-0-2 to 0-32-0-4
const smo110303 = new VF.StaveHairpin({ first_note: smo104628, last_note: smo104628,
       firstNote: smo104628, lastNote: smo104628 });
smo110303.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110303.setContext(context).setPosition(4).draw();
// modifier from 0-34-0-1 to 0-34-0-7
const smo110304 = new VF.StaveHairpin({ first_note: smo104668, last_note: smo104668,
       firstNote: smo104668, lastNote: smo104668 });
smo110304.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110304.setContext(context).setPosition(4).draw();
// modifier from 0-37-0-2 to 0-38-0-0
const smo110305 = new VF.StaveHairpin({ first_note: smo104730, last_note: smo104730,
       firstNote: smo104730, lastNote: smo104730 });
smo110305.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110305.setContext(context).setPosition(4).draw();
// modifier from 0-39-0-2 to 0-39-0-4
const smo110306 = new VF.StaveHairpin({ first_note: smo104770, last_note: smo104770,
       firstNote: smo104770, lastNote: smo104770 });
smo110306.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110306.setContext(context).setPosition(4).draw();
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-43-0-2 to 0-44-0-0
const smo110309 = new VF.StaveHairpin({ first_note: smo104850, last_note: smo104850,
       firstNote: smo104850, lastNote: smo104850 });
smo110309.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110309.setContext(context).setPosition(4).draw();
// modifier from 0-45-0-2 to 0-46-0-0
const smo110310 = new VF.StaveHairpin({ first_note: smo104891, last_note: smo104891,
       firstNote: smo104891, lastNote: smo104891 });
smo110310.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110310.setContext(context).setPosition(4).draw();
// modifier from 0-47-0-2 to 0-47-0-4
const smo110311 = new VF.StaveHairpin({ first_note: smo104930, last_note: smo104930,
       firstNote: smo104930, lastNote: smo104930 });
smo110311.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110311.setContext(context).setPosition(4).draw();
// modifier from 0-30-0-2 to 0-30-0-3
const smo110312 = new VF.StaveTie({ first_note: smo104585, last_note: smo104586, 
          firstNote: smo104585, lastNote: smo104586, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110312.setContext(context).draw();
// modifier from 0-32-0-0 to 0-32-0-1
const smo110313 = new VF.StaveTie({ first_note: smo104626, last_note: smo104627, 
          firstNote: smo104626, lastNote: smo104627, first_indices: [0], last_indices: [0]});
smo110313.setContext(context).draw();
// modifier from 0-33-0-2 to 0-33-0-3
const smo110314 = new VF.StaveTie({ first_note: smo104648, last_note: smo104649, 
          firstNote: smo104648, lastNote: smo104649, first_indices: [0], last_indices: [0]});
smo110314.setContext(context).draw();
// modifier from 0-34-0-3 to 0-34-0-4
const smo110315 = new VF.StaveTie({ first_note: smo104670, last_note: smo104671, 
          firstNote: smo104670, lastNote: smo104671, first_indices: [0], last_indices: [0]});
smo110315.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo110316 = new VF.StaveTie({ first_note: smo104693, last_note: null, 
          firstNote: smo104693, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo110316.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo110317 = new VF.StaveTie({ first_note: null, last_note: smo104708, 
          firstNote: null, lastNote: smo104708, first_indices: [0,1], last_indices: [0,1]});
smo110317.setContext(context).draw();
// modifier from 0-36-0-0 to 0-36-0-1
const smo110318 = new VF.StaveTie({ first_note: smo104708, last_note: smo104709, 
          firstNote: smo104708, lastNote: smo104709, first_indices: [0,1], last_indices: [0,1]});
smo110318.setContext(context).draw();
// modifier from 0-37-0-0 to 0-37-0-1
const smo110319 = new VF.StaveTie({ first_note: smo104728, last_note: smo104729, 
          firstNote: smo104728, lastNote: smo104729, first_indices: [0,1], last_indices: [0,1]});
smo110319.setContext(context).draw();
// modifier from 0-38-0-5 to 0-39-0-0
const smo110320 = new VF.StaveTie({ first_note: smo104753, last_note: smo104768, 
          firstNote: smo104753, lastNote: smo104768, first_indices: [0], last_indices: [0]});
smo110320.setContext(context).draw();
// modifier from 0-39-0-0 to 0-39-0-1
const smo110321 = new VF.StaveTie({ first_note: smo104768, last_note: smo104769, 
          firstNote: smo104768, lastNote: smo104769, first_indices: [0], last_indices: [0]});
smo110321.setContext(context).draw();
// modifier from 0-40-0-3 to 0-40-0-4
const smo110322 = new VF.StaveTie({ first_note: smo104791, last_note: smo104792, 
          firstNote: smo104791, lastNote: smo104792, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110322.setContext(context).draw();
// modifier from 0-41-0-0 to 0-41-0-1
const smo110323 = new VF.StaveTie({ first_note: smo104809, last_note: smo104810, 
          firstNote: smo104809, lastNote: smo104810, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110323.setContext(context).draw();
// modifier from 0-42-0-5 to 0-43-0-0
const smo110324 = new VF.StaveTie({ first_note: smo104833, last_note: smo104848, 
          firstNote: smo104833, lastNote: smo104848, first_indices: [0], last_indices: [0]});
smo110324.setContext(context).draw();
// modifier from 0-43-0-0 to 0-43-0-1
const smo110325 = new VF.StaveTie({ first_note: smo104848, last_note: smo104849, 
          firstNote: smo104848, lastNote: smo104849, first_indices: [0], last_indices: [0]});
smo110325.setContext(context).draw();
// modifier from 0-44-0-3 to 0-44-0-4
const smo110326 = new VF.StaveTie({ first_note: smo104870, last_note: smo104871, 
          firstNote: smo104870, lastNote: smo104871, first_indices: [0,1], last_indices: [0,1]});
smo110326.setContext(context).draw();
// modifier from 0-45-0-0 to 0-45-0-1
const smo110327 = new VF.StaveTie({ first_note: smo104889, last_note: smo104890, 
          firstNote: smo104889, lastNote: smo104890, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110327.setContext(context).draw();
// modifier from 0-46-0-5 to 0-47-0-0
const smo110328 = new VF.StaveTie({ first_note: smo104913, last_note: smo104928, 
          firstNote: smo104913, lastNote: smo104928, first_indices: [0], last_indices: [0]});
smo110328.setContext(context).draw();
// modifier from 0-47-0-0 to 0-47-0-1
const smo110329 = new VF.StaveTie({ first_note: smo104928, last_note: smo104929, 
          firstNote: smo104928, lastNote: smo104929, first_indices: [0], last_indices: [0]});
smo110329.setContext(context).draw();
// modifier from 0-48-0-3 to 0-48-0-4
const smo110330 = new VF.StaveTie({ first_note: smo104951, last_note: smo104952, 
          firstNote: smo104951, lastNote: smo104952, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110330.setContext(context).draw();
// modifier from 0-49-0-0 to 0-49-0-1
const smo110331 = new VF.StaveTie({ first_note: smo104969, last_note: smo104970, 
          firstNote: smo104969, lastNote: smo104970, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110331.setContext(context).draw();
// modifier from 0-50-0-3 to 0-50-0-4
const smo110332 = new VF.StaveTie({ first_note: smo104990, last_note: smo104991, 
          firstNote: smo104990, lastNote: smo104991, first_indices: [0,1], last_indices: [0,1]});
smo110332.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo110333 = new VF.StaveTie({ first_note: smo105012, last_note: smo105013, 
          firstNote: smo105012, lastNote: smo105013, first_indices: [0,1], last_indices: [0,1]});
smo110333.setContext(context).draw();
// modifier from 0-52-0-3 to 0-52-0-4
const smo110334 = new VF.StaveTie({ first_note: smo105034, last_note: smo105035, 
          firstNote: smo105034, lastNote: smo105035, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110334.setContext(context).draw();
// modifier from 0-54-0-2 to 0-54-0-3
const smo110335 = new VF.StaveTie({ first_note: smo105072, last_note: smo105073, 
          firstNote: smo105072, lastNote: smo105073, first_indices: [0,1], last_indices: [0,1]});
smo110335.setContext(context).draw();
// modifier from 0-56-0-2 to 0-56-0-3
const smo110336 = new VF.StaveTie({ first_note: smo105112, last_note: smo105113, 
          firstNote: smo105112, lastNote: smo105113, first_indices: [0,1], last_indices: [0,1]});
smo110336.setContext(context).draw();
// modifier from 0-57-0-0 to 0-57-0-1
const smo110337 = new VF.StaveTie({ first_note: smo105129, last_note: smo105130, 
          firstNote: smo105129, lastNote: smo105130, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110337.setContext(context).draw();
// modifier from 0-58-0-2 to 0-58-0-3
const smo110338 = new VF.StaveTie({ first_note: smo105154, last_note: smo105155, 
          firstNote: smo105154, lastNote: smo105155, first_indices: [0], last_indices: [0]});
smo110338.setContext(context).draw();
const smo104714smo104727 = new VF.Volta(5, '1', 73, -55);
smo104714smo104727.setContext(context).draw(stavesmo104727, -1 * 0);
const smo104732smo104746 = new VF.Volta(5, '2', 368, 20);
smo104732smo104746.setContext(context).draw(stavesmo104746, -1 * 0);
}
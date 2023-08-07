function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo3376626 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo33766v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33766v0ar = [];
const smo33738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33738'] = smo33738;
smo33738.setAttribute('id', 'smo33738');
const smo33739 = new VF.Annotation('Со');
smo33739.setAttribute('id', 'smo33739');
smo33739.setFont('Merriweather', 12.1, 'normal');
smo33739.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33738.addModifier(smo33739);
smo33739.addClass('lyric lyric-0');
smo33766v0ar.push(smo33738);
const smo33740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33740'] = smo33740;
smo33740.setAttribute('id', 'smo33740');
const smo33741 = new VF.Annotation('-');
smo33741.setAttribute('id', 'smo33741');
smo33741.setFont('Merriweather', 12.1, 'normal');
smo33741.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33740.addModifier(smo33741);
smo33741.addClass('lyric lyric-0 lyric-hyphen');
smo33766v0ar.push(smo33740);
const smo33742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33742'] = smo33742;
smo33742.setAttribute('id', 'smo33742');
const smo33743 = new VF.Annotation('-');
smo33743.setAttribute('id', 'smo33743');
smo33743.setFont('Merriweather', 12.1, 'normal');
smo33743.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33742.addModifier(smo33743);
smo33743.addClass('lyric lyric-0 lyric-hyphen');
smo33766v0ar.push(smo33742);
const smo33744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo33744'] = smo33744;
smo33744.setAttribute('id', 'smo33744');
const smo337440acc = new VF.Accidental('#');
smo33744.addModifier(smo337440acc, 0);
const smo33745 = new VF.Annotation('-');
smo33745.setAttribute('id', 'smo33745');
smo33745.setFont('Merriweather', 12.1, 'normal');
smo33745.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33744.addModifier(smo33745);
smo33745.addClass('lyric lyric-0 lyric-hyphen');
smo33766v0ar.push(smo33744);
const smo33746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33746'] = smo33746;
smo33746.setAttribute('id', 'smo33746');
smo33766v0ar.push(smo33746);
const smo33747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33747'] = smo33747;
smo33747.setAttribute('id', 'smo33747');
const smo33748 = new VF.Annotation('ло');
smo33748.setAttribute('id', 'smo33748');
smo33748.setFont('Merriweather', 12.1, 'normal');
smo33748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33747.addModifier(smo33748);
smo33748.addClass('lyric lyric-0');
smo33766v0ar.push(smo33747);
const smo33749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33749'] = smo33749;
smo33749.setAttribute('id', 'smo33749');
const smo33750 = new VF.Annotation('-');
smo33750.setAttribute('id', 'smo33750');
smo33750.setFont('Merriweather', 12.1, 'normal');
smo33750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33749.addModifier(smo33750);
smo33750.addClass('lyric lyric-0 lyric-hyphen');
smo33766v0ar.push(smo33749);
smo33766v0.addTickables(smo33766v0ar)
fmtsmo3376626.joinVoices([smo33766v0]);
const fmtsmo3475126 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo34751v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34751v0ar = [];
const smo34732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34732'] = smo34732;
smo34732.setAttribute('id', 'smo34732');
smo34751v0ar.push(smo34732);
const smo34733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34733'] = smo34733;
smo34733.setAttribute('id', 'smo34733');
smo34751v0ar.push(smo34733);
const smo34734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo34734'] = smo34734;
smo34734.setAttribute('id', 'smo34734');
const smo347340acc = new VF.Accidental('#');
smo34734.addModifier(smo347340acc, 0);
smo34751v0ar.push(smo34734);
const smo34735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34735'] = smo34735;
smo34735.setAttribute('id', 'smo34735');
smo34751v0ar.push(smo34735);
smo34751v0.addTickables(smo34751v0ar)
fmtsmo3475126.joinVoices([smo34751v0]);
const fmtsmo3573026 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo35730v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35730v0ar = [];
const smo35714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35714'] = smo35714;
smo35714.setAttribute('id', 'smo35714');
smo35730v0ar.push(smo35714);
smo35730v0.addTickables(smo35730v0ar)
fmtsmo3573026.joinVoices([smo35730v0]);
const fmtsmo3668426 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo36684v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36684v0ar = [];
const smo36667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36667'] = smo36667;
smo36667.setAttribute('id', 'smo36667');
smo36684v0ar.push(smo36667);
const smo36668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36668'] = smo36668;
smo36668.setAttribute('id', 'smo36668');
smo36684v0ar.push(smo36668);
smo36684v0.addTickables(smo36684v0ar)
fmtsmo3668426.joinVoices([smo36684v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43639 = smo33740.getStemDirection();
smo33740.setStemDirection(dirsmo43639);
smo33742.setStemDirection(dirsmo43639);
smo33744.setStemDirection(dirsmo43639);
smo33746.setStemDirection(dirsmo43639);
const smo43639 = new VF.Beam([smo33740,smo33742,smo33744,smo33746]);
 
// formatting measures in staff group smo37130
fmtsmo3376626.format([smo33766v0,smo34751v0,smo35730v0,smo36684v0], 249);
const stavesmo33766 = new VF.Stave(55, 219, 323);
stavesmo33766.setAttribute('id', 'stavesmo33766');
stavesmo33766.setBegBarType(1);
stavesmo33766.addClef('treble');
const keysmo33766 = new VF.KeySignature('F');
keysmo33766.addToStave(stavesmo33766);
stavesmo33766.setContext(context);
stavesmo33766.draw();
smo33766v0.draw(context, stavesmo33766);
smo43639.setContext(context);
smo43639.draw();
const stavesmo34751 = new VF.Stave(55, 311, 323);
stavesmo34751.setAttribute('id', 'stavesmo34751');
stavesmo34751.setBegBarType(1);
stavesmo34751.addClef('treble');
const keysmo34751 = new VF.KeySignature('F');
keysmo34751.addToStave(stavesmo34751);
stavesmo34751.setContext(context);
stavesmo34751.draw();
smo34751v0.draw(context, stavesmo34751);
const stavesmo35730 = new VF.Stave(55, 389, 323);
stavesmo35730.setAttribute('id', 'stavesmo35730');
stavesmo35730.setBegBarType(1);
stavesmo35730.addClef('treble');
const keysmo35730 = new VF.KeySignature('F');
keysmo35730.addToStave(stavesmo35730);
stavesmo35730.setContext(context);
stavesmo35730.draw();
smo35730v0.draw(context, stavesmo35730);
const stavesmo36684 = new VF.Stave(55, 473, 323);
stavesmo36684.setAttribute('id', 'stavesmo36684');
stavesmo36684.setBegBarType(1);
stavesmo36684.addClef('bass');
const keysmo36684 = new VF.KeySignature('F');
keysmo36684.addToStave(stavesmo36684);
stavesmo36684.setContext(context);
stavesmo36684.draw();
smo36684v0.draw(context, stavesmo36684);
const leftsmo37130stavesmo337663 = new VF.StaveConnector(stavesmo33766, stavesmo36684).setType(1);
leftsmo37130stavesmo337663.setContext(context).draw();
const fmtsmo3378527 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo33785v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33785v0ar = [];
const smo33767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33767'] = smo33767;
smo33767.setAttribute('id', 'smo33767');
const smo33768 = new VF.Annotation('вей');
smo33768.setAttribute('id', 'smo33768');
smo33768.setFont('Merriweather', 12.1, 'normal');
smo33768.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33767.addModifier(smo33768);
smo33768.addClass('lyric lyric-0');
smo33785v0ar.push(smo33767);
const smo33769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33769'] = smo33769;
smo33769.setAttribute('id', 'smo33769');
smo33785v0ar.push(smo33769);
smo33785v0.addTickables(smo33785v0ar)
fmtsmo3378527.joinVoices([smo33785v0]);
const fmtsmo3477127 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo34771v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34771v0ar = [];
const smo34752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34752'] = smo34752;
smo34752.setAttribute('id', 'smo34752');
smo34771v0ar.push(smo34752);
const smo34753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34753'] = smo34753;
smo34753.setAttribute('id', 'smo34753');
smo34771v0ar.push(smo34753);
const smo34754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34754'] = smo34754;
smo34754.setAttribute('id', 'smo34754');
smo34771v0ar.push(smo34754);
const smo34755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34755'] = smo34755;
smo34755.setAttribute('id', 'smo34755');
smo34771v0ar.push(smo34755);
smo34771v0.addTickables(smo34771v0ar)
fmtsmo3477127.joinVoices([smo34771v0]);
const fmtsmo3574727 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo35747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35747v0ar = [];
const smo35731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35731'] = smo35731;
smo35731.setAttribute('id', 'smo35731');
smo35747v0ar.push(smo35731);
smo35747v0.addTickables(smo35747v0ar)
fmtsmo3574727.joinVoices([smo35747v0]);
const fmtsmo3670227 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo36702v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36702v0ar = [];
const smo36685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36685'] = smo36685;
smo36685.setAttribute('id', 'smo36685');
smo36702v0ar.push(smo36685);
const smo36686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36686'] = smo36686;
smo36686.setAttribute('id', 'smo36686');
smo36702v0ar.push(smo36686);
smo36702v0.addTickables(smo36702v0ar)
fmtsmo3670227.joinVoices([smo36702v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3378527.format([smo33785v0,smo34771v0,smo35747v0,smo36702v0], 147);
const stavesmo33785 = new VF.Stave(378, 219, 161);
stavesmo33785.setAttribute('id', 'stavesmo33785');
stavesmo33785.setBegBarType(VF.Barline.type.NONE);
stavesmo33785.setContext(context);
stavesmo33785.draw();
smo33785v0.draw(context, stavesmo33785);
const stavesmo34771 = new VF.Stave(378, 311, 161);
stavesmo34771.setAttribute('id', 'stavesmo34771');
stavesmo34771.setBegBarType(VF.Barline.type.NONE);
stavesmo34771.setContext(context);
stavesmo34771.draw();
smo34771v0.draw(context, stavesmo34771);
const stavesmo35747 = new VF.Stave(378, 389, 161);
stavesmo35747.setAttribute('id', 'stavesmo35747');
stavesmo35747.setBegBarType(VF.Barline.type.NONE);
stavesmo35747.setContext(context);
stavesmo35747.draw();
smo35747v0.draw(context, stavesmo35747);
const stavesmo36702 = new VF.Stave(378, 473, 161);
stavesmo36702.setAttribute('id', 'stavesmo36702');
stavesmo36702.setBegBarType(VF.Barline.type.NONE);
stavesmo36702.setContext(context);
stavesmo36702.draw();
smo36702v0.draw(context, stavesmo36702);
const fmtsmo3380728 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo33807v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33807v0ar = [];
const smo33786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33786'] = smo33786;
smo33786.setAttribute('id', 'smo33786');
const smo33787 = new VF.Annotation('цо');
smo33787.setAttribute('id', 'smo33787');
smo33787.setFont('Merriweather', 12.1, 'normal');
smo33787.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33786.addModifier(smo33787);
smo33787.addClass('lyric lyric-0 lyric-hyphen');
smo33807v0ar.push(smo33786);
const smo33788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33788'] = smo33788;
smo33788.setAttribute('id', 'smo33788');
const smo33789 = new VF.Annotation('ло');
smo33789.setAttribute('id', 'smo33789');
smo33789.setFont('Merriweather', 12.1, 'normal');
smo33789.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33788.addModifier(smo33789);
smo33789.addClass('lyric lyric-0');
smo33807v0ar.push(smo33788);
const smo33790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo33790'] = smo33790;
smo33790.setAttribute('id', 'smo33790');
const smo33791 = new VF.Annotation('-');
smo33791.setAttribute('id', 'smo33791');
smo33791.setFont('Merriweather', 12.1, 'normal');
smo33791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33790.addModifier(smo33791);
smo33791.addClass('lyric lyric-0 lyric-hyphen');
smo33807v0ar.push(smo33790);
smo33807v0.addTickables(smo33807v0ar)
fmtsmo3380728.joinVoices([smo33807v0]);
const fmtsmo3479128 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo34791v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34791v0ar = [];
const smo34772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34772'] = smo34772;
smo34772.setAttribute('id', 'smo34772');
smo34791v0ar.push(smo34772);
const smo34773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34773'] = smo34773;
smo34773.setAttribute('id', 'smo34773');
smo34791v0ar.push(smo34773);
const smo34774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34774'] = smo34774;
smo34774.setAttribute('id', 'smo34774');
smo34791v0ar.push(smo34774);
const smo34775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34775'] = smo34775;
smo34775.setAttribute('id', 'smo34775');
smo34791v0ar.push(smo34775);
smo34791v0.addTickables(smo34791v0ar)
fmtsmo3479128.joinVoices([smo34791v0]);
const fmtsmo3576528 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo35765v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35765v0ar = [];
const smo35748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35748'] = smo35748;
smo35748.setAttribute('id', 'smo35748');
smo35765v0ar.push(smo35748);
const smo35749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35749'] = smo35749;
smo35749.setAttribute('id', 'smo35749');
smo35765v0ar.push(smo35749);
smo35765v0.addTickables(smo35765v0ar)
fmtsmo3576528.joinVoices([smo35765v0]);
const fmtsmo3672028 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo36720v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36720v0ar = [];
const smo36703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36703'] = smo36703;
smo36703.setAttribute('id', 'smo36703');
smo36720v0ar.push(smo36703);
const smo36704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36704'] = smo36704;
smo36704.setAttribute('id', 'smo36704');
smo36720v0ar.push(smo36704);
smo36720v0.addTickables(smo36720v0ar)
fmtsmo3672028.joinVoices([smo36720v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3380728.format([smo33807v0,smo34791v0,smo35765v0,smo36720v0], 146);
const stavesmo33807 = new VF.Stave(539, 219, 160);
stavesmo33807.setAttribute('id', 'stavesmo33807');
stavesmo33807.setBegBarType(VF.Barline.type.NONE);
stavesmo33807.setContext(context);
stavesmo33807.draw();
smo33807v0.draw(context, stavesmo33807);
const stavesmo34791 = new VF.Stave(539, 311, 160);
stavesmo34791.setAttribute('id', 'stavesmo34791');
stavesmo34791.setBegBarType(VF.Barline.type.NONE);
stavesmo34791.setContext(context);
stavesmo34791.draw();
smo34791v0.draw(context, stavesmo34791);
const stavesmo35765 = new VF.Stave(539, 389, 160);
stavesmo35765.setAttribute('id', 'stavesmo35765');
stavesmo35765.setBegBarType(VF.Barline.type.NONE);
stavesmo35765.setContext(context);
stavesmo35765.draw();
smo35765v0.draw(context, stavesmo35765);
const stavesmo36720 = new VF.Stave(539, 473, 160);
stavesmo36720.setAttribute('id', 'stavesmo36720');
stavesmo36720.setBegBarType(VF.Barline.type.NONE);
stavesmo36720.setContext(context);
stavesmo36720.draw();
smo36720v0.draw(context, stavesmo36720);
const fmtsmo3382929 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo33829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33829v0ar = [];
const smo33808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33808'] = smo33808;
smo33808.setAttribute('id', 'smo33808');
const smo33809 = new VF.Annotation('си');
smo33809.setAttribute('id', 'smo33809');
smo33809.setFont('Merriweather', 12.1, 'normal');
smo33809.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33808.addModifier(smo33809);
smo33809.addClass('lyric lyric-0 lyric-hyphen');
smo33829v0ar.push(smo33808);
const smo33810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33810'] = smo33810;
smo33810.setAttribute('id', 'smo33810');
const smo33811 = new VF.Annotation('стый');
smo33811.setAttribute('id', 'smo33811');
smo33811.setFont('Merriweather', 12.1, 'normal');
smo33811.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33810.addModifier(smo33811);
smo33811.addClass('lyric lyric-0');
smo33829v0ar.push(smo33810);
const smo33812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo33812'] = smo33812;
smo33812.setAttribute('id', 'smo33812');
const smo33813 = new VF.Annotation('-');
smo33813.setAttribute('id', 'smo33813');
smo33813.setFont('Merriweather', 12.1, 'normal');
smo33813.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33812.addModifier(smo33813);
smo33813.addClass('lyric lyric-0 lyric-hyphen');
smo33829v0ar.push(smo33812);
smo33829v0.addTickables(smo33829v0ar)
fmtsmo3382929.joinVoices([smo33829v0]);
const fmtsmo3481129 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo34811v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34811v0ar = [];
const smo34792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34792'] = smo34792;
smo34792.setAttribute('id', 'smo34792');
smo34811v0ar.push(smo34792);
const smo34793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34793'] = smo34793;
smo34793.setAttribute('id', 'smo34793');
smo34811v0ar.push(smo34793);
const smo34794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34794'] = smo34794;
smo34794.setAttribute('id', 'smo34794');
smo34811v0ar.push(smo34794);
const smo34795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34795'] = smo34795;
smo34795.setAttribute('id', 'smo34795');
smo34811v0ar.push(smo34795);
smo34811v0.addTickables(smo34811v0ar)
fmtsmo3481129.joinVoices([smo34811v0]);
const fmtsmo3578329 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo35783v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35783v0ar = [];
const smo35766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35766'] = smo35766;
smo35766.setAttribute('id', 'smo35766');
smo35783v0ar.push(smo35766);
const smo35767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35767'] = smo35767;
smo35767.setAttribute('id', 'smo35767');
smo35783v0ar.push(smo35767);
smo35783v0.addTickables(smo35783v0ar)
fmtsmo3578329.joinVoices([smo35783v0]);
const fmtsmo3673829 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo36738v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36738v0ar = [];
const smo36721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36721'] = smo36721;
smo36721.setAttribute('id', 'smo36721');
smo36738v0ar.push(smo36721);
const smo36722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36722'] = smo36722;
smo36722.setAttribute('id', 'smo36722');
smo36738v0ar.push(smo36722);
smo36738v0.addTickables(smo36738v0ar)
fmtsmo3673829.joinVoices([smo36738v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3382929.format([smo33829v0,smo34811v0,smo35783v0,smo36738v0], 174);
const stavesmo33829 = new VF.Stave(699, 219, 188);
stavesmo33829.setAttribute('id', 'stavesmo33829');
stavesmo33829.setBegBarType(VF.Barline.type.NONE);
stavesmo33829.setContext(context);
stavesmo33829.draw();
smo33829v0.draw(context, stavesmo33829);
const stavesmo34811 = new VF.Stave(699, 311, 188);
stavesmo34811.setAttribute('id', 'stavesmo34811');
stavesmo34811.setBegBarType(VF.Barline.type.NONE);
stavesmo34811.setContext(context);
stavesmo34811.draw();
smo34811v0.draw(context, stavesmo34811);
const stavesmo35783 = new VF.Stave(699, 389, 188);
stavesmo35783.setAttribute('id', 'stavesmo35783');
stavesmo35783.setBegBarType(VF.Barline.type.NONE);
stavesmo35783.setContext(context);
stavesmo35783.draw();
smo35783v0.draw(context, stavesmo35783);
const stavesmo36738 = new VF.Stave(699, 473, 188);
stavesmo36738.setAttribute('id', 'stavesmo36738');
stavesmo36738.setBegBarType(VF.Barline.type.NONE);
stavesmo36738.setContext(context);
stavesmo36738.draw();
smo36738v0.draw(context, stavesmo36738);
const fmtsmo3385830 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo33858v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33858v0ar = [];
const smo33830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33830'] = smo33830;
smo33830.setAttribute('id', 'smo33830');
const smo33831 = new VF.Annotation('со');
smo33831.setAttribute('id', 'smo33831');
smo33831.setFont('Merriweather', 12.1, 'normal');
smo33831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33830.addModifier(smo33831);
smo33831.addClass('lyric lyric-0');
smo33858v0ar.push(smo33830);
const smo33832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo33832'] = smo33832;
smo33832.setAttribute('id', 'smo33832');
const smo33833 = new VF.Annotation('-');
smo33833.setAttribute('id', 'smo33833');
smo33833.setFont('Merriweather', 12.1, 'normal');
smo33833.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33832.addModifier(smo33833);
smo33833.addClass('lyric lyric-0 lyric-hyphen');
smo33858v0ar.push(smo33832);
const smo33834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo33834'] = smo33834;
smo33834.setAttribute('id', 'smo33834');
const smo33835 = new VF.Annotation('-');
smo33835.setAttribute('id', 'smo33835');
smo33835.setFont('Merriweather', 12.1, 'normal');
smo33835.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33834.addModifier(smo33835);
smo33835.addClass('lyric lyric-0 lyric-hyphen');
smo33858v0ar.push(smo33834);
const smo33836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo33836'] = smo33836;
smo33836.setAttribute('id', 'smo33836');
const smo338360acc = new VF.Accidental('#');
smo33836.addModifier(smo338360acc, 0);
const smo33837 = new VF.Annotation('-');
smo33837.setAttribute('id', 'smo33837');
smo33837.setFont('Merriweather', 12.1, 'normal');
smo33837.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33836.addModifier(smo33837);
smo33837.addClass('lyric lyric-0 lyric-hyphen');
smo33858v0ar.push(smo33836);
const smo33838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33838'] = smo33838;
smo33838.setAttribute('id', 'smo33838');
const smo33839 = new VF.Annotation('ло');
smo33839.setAttribute('id', 'smo33839');
smo33839.setFont('Merriweather', 12.1, 'normal');
smo33839.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33838.addModifier(smo33839);
smo33839.addClass('lyric lyric-0');
smo33858v0ar.push(smo33838);
const smo33840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33840'] = smo33840;
smo33840.setAttribute('id', 'smo33840');
const smo33841 = new VF.Annotation('-');
smo33841.setAttribute('id', 'smo33841');
smo33841.setFont('Merriweather', 12.1, 'normal');
smo33841.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33840.addModifier(smo33841);
smo33841.addClass('lyric lyric-0 lyric-hyphen');
smo33858v0ar.push(smo33840);
smo33858v0.addTickables(smo33858v0ar)
fmtsmo3385830.joinVoices([smo33858v0]);
const fmtsmo3483130 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo34831v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34831v0ar = [];
const smo34812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34812'] = smo34812;
smo34812.setAttribute('id', 'smo34812');
smo34831v0ar.push(smo34812);
const smo34813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34813'] = smo34813;
smo34813.setAttribute('id', 'smo34813');
smo34831v0ar.push(smo34813);
const smo34814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34814'] = smo34814;
smo34814.setAttribute('id', 'smo34814');
smo34831v0ar.push(smo34814);
const smo34815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34815'] = smo34815;
smo34815.setAttribute('id', 'smo34815');
smo34831v0ar.push(smo34815);
smo34831v0.addTickables(smo34831v0ar)
fmtsmo3483130.joinVoices([smo34831v0]);
const fmtsmo3580130 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo35801v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35801v0ar = [];
const smo35784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35784'] = smo35784;
smo35784.setAttribute('id', 'smo35784');
smo35801v0ar.push(smo35784);
const smo35785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35785'] = smo35785;
smo35785.setAttribute('id', 'smo35785');
smo35801v0ar.push(smo35785);
smo35801v0.addTickables(smo35801v0ar)
fmtsmo3580130.joinVoices([smo35801v0]);
const fmtsmo3675630 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo36756v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36756v0ar = [];
const smo36739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36739'] = smo36739;
smo36739.setAttribute('id', 'smo36739');
smo36756v0ar.push(smo36739);
const smo36740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36740'] = smo36740;
smo36740.setAttribute('id', 'smo36740');
smo36756v0ar.push(smo36740);
smo36756v0.addTickables(smo36756v0ar)
fmtsmo3675630.joinVoices([smo36756v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43672 = smo33832.getStemDirection();
smo33832.setStemDirection(dirsmo43672);
smo33834.setStemDirection(dirsmo43672);
smo33836.setStemDirection(dirsmo43672);
const smo43672 = new VF.Beam([smo33832,smo33834,smo33836]);
const smo33842 = new VF.Tuplet([smo33832,smo33834,smo33836], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo37130
fmtsmo3385830.format([smo33858v0,smo34831v0,smo35801v0,smo36756v0], 217);
const stavesmo33858 = new VF.Stave(887, 219, 231);
stavesmo33858.setAttribute('id', 'stavesmo33858');
stavesmo33858.setBegBarType(VF.Barline.type.NONE);
stavesmo33858.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo33858.setContext(context);
stavesmo33858.draw();
smo33858v0.draw(context, stavesmo33858);
smo43672.setContext(context);
smo43672.draw();
smo33842.setContext(context).draw();
const stavesmo34831 = new VF.Stave(887, 311, 231);
stavesmo34831.setAttribute('id', 'stavesmo34831');
stavesmo34831.setBegBarType(VF.Barline.type.NONE);
stavesmo34831.setContext(context);
stavesmo34831.draw();
smo34831v0.draw(context, stavesmo34831);
const stavesmo35801 = new VF.Stave(887, 389, 231);
stavesmo35801.setAttribute('id', 'stavesmo35801');
stavesmo35801.setBegBarType(VF.Barline.type.NONE);
stavesmo35801.setContext(context);
stavesmo35801.draw();
smo35801v0.draw(context, stavesmo35801);
const stavesmo36756 = new VF.Stave(887, 473, 231);
stavesmo36756.setAttribute('id', 'stavesmo36756');
stavesmo36756.setBegBarType(VF.Barline.type.NONE);
stavesmo36756.setContext(context);
stavesmo36756.draw();
smo36756v0.draw(context, stavesmo36756);
const fmtsmo3387731 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo33877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33877v0ar = [];
const smo33859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33859'] = smo33859;
smo33859.setAttribute('id', 'smo33859');
const smo33860 = new VF.Annotation('вей');
smo33860.setAttribute('id', 'smo33860');
smo33860.setFont('Merriweather', 12.1, 'normal');
smo33860.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33859.addModifier(smo33860);
smo33860.addClass('lyric lyric-0');
smo33877v0ar.push(smo33859);
const smo33861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33861'] = smo33861;
smo33861.setAttribute('id', 'smo33861');
smo33877v0ar.push(smo33861);
smo33877v0.addTickables(smo33877v0ar)
fmtsmo3387731.joinVoices([smo33877v0]);
const fmtsmo3485231 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo34852v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34852v0ar = [];
const smo34832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34832'] = smo34832;
smo34832.setAttribute('id', 'smo34832');
smo34852v0ar.push(smo34832);
const smo34833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34833'] = smo34833;
smo34833.setAttribute('id', 'smo34833');
smo34852v0ar.push(smo34833);
const smo34834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34834'] = smo34834;
smo34834.setAttribute('id', 'smo34834');
smo34852v0ar.push(smo34834);
const smo34835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34835'] = smo34835;
smo34835.setAttribute('id', 'smo34835');
smo34852v0ar.push(smo34835);
const smo34836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34836'] = smo34836;
smo34836.setAttribute('id', 'smo34836');
smo34852v0ar.push(smo34836);
smo34852v0.addTickables(smo34852v0ar)
fmtsmo3485231.joinVoices([smo34852v0]);
const fmtsmo3581931 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo35819v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35819v0ar = [];
const smo35802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35802'] = smo35802;
smo35802.setAttribute('id', 'smo35802');
smo35819v0ar.push(smo35802);
const smo35803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35803'] = smo35803;
smo35803.setAttribute('id', 'smo35803');
smo35819v0ar.push(smo35803);
smo35819v0.addTickables(smo35819v0ar)
fmtsmo3581931.joinVoices([smo35819v0]);
const fmtsmo3677831 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo36778v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36778v0ar = [];
const smo36757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36757'] = smo36757;
smo36757.setAttribute('id', 'smo36757');
smo36778v0ar.push(smo36757);
const smo36758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36758'] = smo36758;
smo36758.setAttribute('id', 'smo36758');
smo36778v0ar.push(smo36758);
const smo36759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36759'] = smo36759;
smo36759.setAttribute('id', 'smo36759');
smo36778v0ar.push(smo36759);
const smo36760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36760'] = smo36760;
smo36760.setAttribute('id', 'smo36760');
smo36778v0ar.push(smo36760);
const smo36761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36761'] = smo36761;
smo36761.setAttribute('id', 'smo36761');
smo36778v0ar.push(smo36761);
const smo36762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36762'] = smo36762;
smo36762.setAttribute('id', 'smo36762');
smo36778v0ar.push(smo36762);
smo36778v0.addTickables(smo36778v0ar)
fmtsmo3677831.joinVoices([smo36778v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43683 = smo34833.getStemDirection();
smo34833.setStemDirection(dirsmo43683);
smo34834.setStemDirection(dirsmo43683);
const smo43683 = new VF.Beam([smo34833,smo34834]);
const dirsmo43684 = smo34835.getStemDirection();
smo34835.setStemDirection(dirsmo43684);
smo34836.setStemDirection(dirsmo43684);
const smo43684 = new VF.Beam([smo34835,smo34836]);
const dirsmo43689 = smo36757.getStemDirection();
smo36757.setStemDirection(dirsmo43689);
smo36758.setStemDirection(dirsmo43689);
const smo43689 = new VF.Beam([smo36757,smo36758]);
const dirsmo43690 = smo36759.getStemDirection();
smo36759.setStemDirection(dirsmo43690);
smo36760.setStemDirection(dirsmo43690);
const smo43690 = new VF.Beam([smo36759,smo36760]);
 
// formatting measures in staff group smo37130
fmtsmo3387731.format([smo33877v0,smo34852v0,smo35819v0,smo36778v0], 245);
const stavesmo33877 = new VF.Stave(1118, 219, 259);
stavesmo33877.setAttribute('id', 'stavesmo33877');
stavesmo33877.setBegBarType(VF.Barline.type.NONE);
stavesmo33877.setContext(context);
stavesmo33877.draw();
smo33877v0.draw(context, stavesmo33877);
const stavesmo34852 = new VF.Stave(1118, 311, 259);
stavesmo34852.setAttribute('id', 'stavesmo34852');
stavesmo34852.setBegBarType(VF.Barline.type.NONE);
stavesmo34852.setContext(context);
stavesmo34852.draw();
smo34852v0.draw(context, stavesmo34852);
smo43683.setContext(context);
smo43683.draw();
smo43684.setContext(context);
smo43684.draw();
const stavesmo35819 = new VF.Stave(1118, 389, 259);
stavesmo35819.setAttribute('id', 'stavesmo35819');
stavesmo35819.setBegBarType(VF.Barline.type.NONE);
stavesmo35819.setContext(context);
stavesmo35819.draw();
smo35819v0.draw(context, stavesmo35819);
const stavesmo36778 = new VF.Stave(1118, 473, 259);
stavesmo36778.setAttribute('id', 'stavesmo36778');
stavesmo36778.setBegBarType(VF.Barline.type.NONE);
stavesmo36778.setContext(context);
stavesmo36778.draw();
smo36778v0.draw(context, stavesmo36778);
smo43689.setContext(context);
smo43689.draw();
smo43690.setContext(context);
smo43690.draw();
const rightsmo37130stavesmo338773 = new VF.StaveConnector(stavesmo33877, stavesmo36778).setType(0);
rightsmo37130stavesmo338773.setContext(context).draw();
const fmtsmo3390432 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo33904v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33904v0ar = [];
const smo33878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33878'] = smo33878;
smo33878.setAttribute('id', 'smo33878');
const smo33880 = new VF.Ornament('mordent');
smo33878.addModifier(smo33880, 0);
const smo33879 = new VF.Annotation('Со');
smo33879.setAttribute('id', 'smo33879');
smo33879.setFont('Merriweather', 12.1, 'normal');
smo33879.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33878.addModifier(smo33879);
smo33879.addClass('lyric lyric-0');
smo33904v0ar.push(smo33878);
const smo33881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33881'] = smo33881;
smo33881.setAttribute('id', 'smo33881');
const smo33882 = new VF.Annotation('-');
smo33882.setAttribute('id', 'smo33882');
smo33882.setFont('Merriweather', 12.1, 'normal');
smo33882.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33881.addModifier(smo33882);
smo33882.addClass('lyric lyric-0 lyric-hyphen');
smo33904v0ar.push(smo33881);
const smo33883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33883'] = smo33883;
smo33883.setAttribute('id', 'smo33883');
const smo33884 = new VF.Annotation('-');
smo33884.setAttribute('id', 'smo33884');
smo33884.setFont('Merriweather', 12.1, 'normal');
smo33884.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33883.addModifier(smo33884);
smo33884.addClass('lyric lyric-0 lyric-hyphen');
smo33904v0ar.push(smo33883);
const smo33885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33885'] = smo33885;
smo33885.setAttribute('id', 'smo33885');
const smo33886 = new VF.Annotation('ло');
smo33886.setAttribute('id', 'smo33886');
smo33886.setFont('Merriweather', 12.1, 'normal');
smo33886.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33885.addModifier(smo33886);
smo33886.addClass('lyric lyric-0');
smo33904v0ar.push(smo33885);
const smo33887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33887'] = smo33887;
smo33887.setAttribute('id', 'smo33887');
const smo33888 = new VF.Annotation('-');
smo33888.setAttribute('id', 'smo33888');
smo33888.setFont('Merriweather', 12.1, 'normal');
smo33888.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33887.addModifier(smo33888);
smo33888.addClass('lyric lyric-0 lyric-hyphen');
smo33904v0ar.push(smo33887);
smo33904v0.addTickables(smo33904v0ar)
fmtsmo3390432.joinVoices([smo33904v0]);
const fmtsmo3487432 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo34874v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34874v0ar = [];
const smo34853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34853'] = smo34853;
smo34853.setAttribute('id', 'smo34853');
smo34874v0ar.push(smo34853);
const smo34854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34854'] = smo34854;
smo34854.setAttribute('id', 'smo34854');
const  smo44514 = new VF.Articulation('ao').setPosition(3);
smo34854.addModifier(smo44514, 0);
smo34874v0ar.push(smo34854);
const smo34856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34856'] = smo34856;
smo34856.setAttribute('id', 'smo34856');
smo34874v0ar.push(smo34856);
const smo34857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34857'] = smo34857;
smo34857.setAttribute('id', 'smo34857');
const  smo44515 = new VF.Articulation('ao').setPosition(3);
smo34857.addModifier(smo44515, 0);
smo34874v0ar.push(smo34857);
smo34874v0.addTickables(smo34874v0ar)
fmtsmo3487432.joinVoices([smo34874v0]);
const fmtsmo3583632 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo35836v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35836v0ar = [];
const smo35820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35820'] = smo35820;
smo35820.setAttribute('id', 'smo35820');
smo35836v0ar.push(smo35820);
smo35836v0.addTickables(smo35836v0ar)
fmtsmo3583632.joinVoices([smo35836v0]);
const fmtsmo3680032 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo36800v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36800v0ar = [];
const smo36779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36779'] = smo36779;
smo36779.setAttribute('id', 'smo36779');
const  smo44516 = new VF.Articulation('ao').setPosition(3);
smo36779.addModifier(smo44516, 0);
smo36800v0ar.push(smo36779);
const smo36781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36781'] = smo36781;
smo36781.setAttribute('id', 'smo36781');
smo36800v0ar.push(smo36781);
const smo36782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo36782'] = smo36782;
smo36782.setAttribute('id', 'smo36782');
const  smo44517 = new VF.Articulation('ao').setPosition(3);
smo36782.addModifier(smo44517, 0);
smo36800v0ar.push(smo36782);
const smo36784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36784'] = smo36784;
smo36784.setAttribute('id', 'smo36784');
smo36800v0ar.push(smo36784);
smo36800v0.addTickables(smo36800v0ar)
fmtsmo3680032.joinVoices([smo36800v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43703 = smo33881.getStemDirection();
smo33881.setStemDirection(dirsmo43703);
smo33883.setStemDirection(dirsmo43703);
const smo43703 = new VF.Beam([smo33881,smo33883]);
 
// formatting measures in staff group smo37130
fmtsmo3390432.format([smo33904v0,smo34874v0,smo35836v0,smo36800v0], 173);
const stavesmo33904 = new VF.Stave(55, 627, 248);
stavesmo33904.setAttribute('id', 'stavesmo33904');
stavesmo33904.setBegBarType(1);
stavesmo33904.addClef('treble');
const keysmo33904 = new VF.KeySignature('F');
keysmo33904.addToStave(stavesmo33904);
stavesmo33904.setContext(context);
stavesmo33904.draw();
smo33904v0.draw(context, stavesmo33904);
smo43703.setContext(context);
smo43703.draw();
const stavesmo34874 = new VF.Stave(55, 730, 248);
stavesmo34874.setAttribute('id', 'stavesmo34874');
stavesmo34874.setBegBarType(1);
stavesmo34874.addClef('treble');
const keysmo34874 = new VF.KeySignature('F');
keysmo34874.addToStave(stavesmo34874);
stavesmo34874.setContext(context);
stavesmo34874.draw();
smo34874v0.draw(context, stavesmo34874);
const stavesmo35836 = new VF.Stave(55, 813, 248);
stavesmo35836.setAttribute('id', 'stavesmo35836');
stavesmo35836.setBegBarType(1);
stavesmo35836.addClef('treble');
const keysmo35836 = new VF.KeySignature('F');
keysmo35836.addToStave(stavesmo35836);
stavesmo35836.setContext(context);
stavesmo35836.draw();
smo35836v0.draw(context, stavesmo35836);
const stavesmo36800 = new VF.Stave(55, 922, 248);
stavesmo36800.setAttribute('id', 'stavesmo36800');
stavesmo36800.setBegBarType(1);
stavesmo36800.addClef('bass');
const keysmo36800 = new VF.KeySignature('F');
keysmo36800.addToStave(stavesmo36800);
stavesmo36800.setContext(context);
stavesmo36800.draw();
smo36800v0.draw(context, stavesmo36800);
const leftsmo37130stavesmo339043 = new VF.StaveConnector(stavesmo33904, stavesmo36800).setType(1);
leftsmo37130stavesmo339043.setContext(context).draw();
const fmtsmo3392733 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo33927v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33927v0ar = [];
const smo33905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33905'] = smo33905;
smo33905.setAttribute('id', 'smo33905');
const smo33906 = new VF.Annotation('вей');
smo33906.setAttribute('id', 'smo33906');
smo33906.setFont('Merriweather', 12.1, 'normal');
smo33906.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33905.addModifier(smo33906);
smo33906.addClass('lyric lyric-0');
smo33927v0ar.push(smo33905);
const smo33907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo33907'] = smo33907;
smo33907.setAttribute('id', 'smo33907');
const smo33908 = new VF.Annotation('-');
smo33908.setAttribute('id', 'smo33908');
smo33908.setFont('Merriweather', 12.1, 'normal');
smo33908.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33907.addModifier(smo33908);
smo33908.addClass('lyric lyric-0 lyric-hyphen');
smo33927v0ar.push(smo33907);
const smo33909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo33909'] = smo33909;
smo33909.setAttribute('id', 'smo33909');
const smo33910 = new VF.Annotation('-');
smo33910.setAttribute('id', 'smo33910');
smo33910.setFont('Merriweather', 12.1, 'normal');
smo33910.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33909.addModifier(smo33910);
smo33910.addClass('lyric lyric-0 lyric-hyphen');
smo33927v0ar.push(smo33909);
const smo33911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33911'] = smo33911;
smo33911.setAttribute('id', 'smo33911');
smo33927v0ar.push(smo33911);
smo33927v0.addTickables(smo33927v0ar)
fmtsmo3392733.joinVoices([smo33927v0]);
const fmtsmo3489433 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo34894v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34894v0ar = [];
const smo34875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34875'] = smo34875;
smo34875.setAttribute('id', 'smo34875');
smo34894v0ar.push(smo34875);
const smo34876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34876'] = smo34876;
smo34876.setAttribute('id', 'smo34876');
smo34894v0ar.push(smo34876);
const smo34877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34877'] = smo34877;
smo34877.setAttribute('id', 'smo34877');
smo34894v0ar.push(smo34877);
const smo34878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34878'] = smo34878;
smo34878.setAttribute('id', 'smo34878');
smo34894v0ar.push(smo34878);
smo34894v0.addTickables(smo34894v0ar)
fmtsmo3489433.joinVoices([smo34894v0]);
const fmtsmo3585333 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo35853v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35853v0ar = [];
const smo35837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35837'] = smo35837;
smo35837.setAttribute('id', 'smo35837');
smo35853v0ar.push(smo35837);
smo35853v0.addTickables(smo35853v0ar)
fmtsmo3585333.joinVoices([smo35853v0]);
const fmtsmo3682033 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo36820v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36820v0ar = [];
const smo36801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36801'] = smo36801;
smo36801.setAttribute('id', 'smo36801');
smo36820v0ar.push(smo36801);
const smo36802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36802'] = smo36802;
smo36802.setAttribute('id', 'smo36802');
smo36820v0ar.push(smo36802);
const smo36803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36803'] = smo36803;
smo36803.setAttribute('id', 'smo36803');
smo36820v0ar.push(smo36803);
const smo36804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36804'] = smo36804;
smo36804.setAttribute('id', 'smo36804');
smo36820v0ar.push(smo36804);
smo36820v0.addTickables(smo36820v0ar)
fmtsmo3682033.joinVoices([smo36820v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3392733.format([smo33927v0,smo34894v0,smo35853v0,smo36820v0], 144);
const stavesmo33927 = new VF.Stave(303, 627, 158);
stavesmo33927.setAttribute('id', 'stavesmo33927');
stavesmo33927.setBegBarType(VF.Barline.type.NONE);
stavesmo33927.setContext(context);
stavesmo33927.draw();
smo33927v0.draw(context, stavesmo33927);
const stavesmo34894 = new VF.Stave(303, 730, 158);
stavesmo34894.setAttribute('id', 'stavesmo34894');
stavesmo34894.setBegBarType(VF.Barline.type.NONE);
stavesmo34894.setContext(context);
stavesmo34894.draw();
smo34894v0.draw(context, stavesmo34894);
const stavesmo35853 = new VF.Stave(303, 813, 158);
stavesmo35853.setAttribute('id', 'stavesmo35853');
stavesmo35853.setBegBarType(VF.Barline.type.NONE);
stavesmo35853.setContext(context);
stavesmo35853.draw();
smo35853v0.draw(context, stavesmo35853);
const stavesmo36820 = new VF.Stave(303, 922, 158);
stavesmo36820.setAttribute('id', 'stavesmo36820');
stavesmo36820.setBegBarType(VF.Barline.type.NONE);
stavesmo36820.setContext(context);
stavesmo36820.draw();
smo36820v0.draw(context, stavesmo36820);
const fmtsmo3395434 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo33954v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33954v0ar = [];
const smo33928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33928'] = smo33928;
smo33928.setAttribute('id', 'smo33928');
const smo33930 = new VF.Ornament('mordent');
smo33928.addModifier(smo33930, 0);
const smo33929 = new VF.Annotation('Со');
smo33929.setAttribute('id', 'smo33929');
smo33929.setFont('Merriweather', 12.1, 'normal');
smo33929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33928.addModifier(smo33929);
smo33929.addClass('lyric lyric-0');
smo33954v0ar.push(smo33928);
const smo33931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33931'] = smo33931;
smo33931.setAttribute('id', 'smo33931');
const smo33932 = new VF.Annotation('-');
smo33932.setAttribute('id', 'smo33932');
smo33932.setFont('Merriweather', 12.1, 'normal');
smo33932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33931.addModifier(smo33932);
smo33932.addClass('lyric lyric-0 lyric-hyphen');
smo33954v0ar.push(smo33931);
const smo33933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33933'] = smo33933;
smo33933.setAttribute('id', 'smo33933');
const smo33934 = new VF.Annotation('-');
smo33934.setAttribute('id', 'smo33934');
smo33934.setFont('Merriweather', 12.1, 'normal');
smo33934.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33933.addModifier(smo33934);
smo33934.addClass('lyric lyric-0 lyric-hyphen');
smo33954v0ar.push(smo33933);
const smo33935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33935'] = smo33935;
smo33935.setAttribute('id', 'smo33935');
const smo33936 = new VF.Annotation('ло');
smo33936.setAttribute('id', 'smo33936');
smo33936.setFont('Merriweather', 12.1, 'normal');
smo33936.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33935.addModifier(smo33936);
smo33936.addClass('lyric lyric-0');
smo33954v0ar.push(smo33935);
const smo33937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33937'] = smo33937;
smo33937.setAttribute('id', 'smo33937');
const smo33938 = new VF.Annotation('-');
smo33938.setAttribute('id', 'smo33938');
smo33938.setFont('Merriweather', 12.1, 'normal');
smo33938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33937.addModifier(smo33938);
smo33938.addClass('lyric lyric-0 lyric-hyphen');
smo33954v0ar.push(smo33937);
smo33954v0.addTickables(smo33954v0ar)
fmtsmo3395434.joinVoices([smo33954v0]);
const fmtsmo3491434 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo34914v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34914v0ar = [];
const smo34895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34895'] = smo34895;
smo34895.setAttribute('id', 'smo34895');
smo34914v0ar.push(smo34895);
const smo34896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34896'] = smo34896;
smo34896.setAttribute('id', 'smo34896');
smo34914v0ar.push(smo34896);
const smo34897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34897'] = smo34897;
smo34897.setAttribute('id', 'smo34897');
smo34914v0ar.push(smo34897);
const smo34898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34898'] = smo34898;
smo34898.setAttribute('id', 'smo34898');
smo34914v0ar.push(smo34898);
smo34914v0.addTickables(smo34914v0ar)
fmtsmo3491434.joinVoices([smo34914v0]);
const fmtsmo3587034 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo35870v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35870v0ar = [];
const smo35854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35854'] = smo35854;
smo35854.setAttribute('id', 'smo35854');
smo35870v0ar.push(smo35854);
smo35870v0.addTickables(smo35870v0ar)
fmtsmo3587034.joinVoices([smo35870v0]);
const fmtsmo3684034 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo36840v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36840v0ar = [];
const smo36821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36821'] = smo36821;
smo36821.setAttribute('id', 'smo36821');
smo36840v0ar.push(smo36821);
const smo36822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36822'] = smo36822;
smo36822.setAttribute('id', 'smo36822');
smo36840v0ar.push(smo36822);
const smo36823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo36823'] = smo36823;
smo36823.setAttribute('id', 'smo36823');
smo36840v0ar.push(smo36823);
const smo36824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36824'] = smo36824;
smo36824.setAttribute('id', 'smo36824');
smo36840v0ar.push(smo36824);
smo36840v0.addTickables(smo36840v0ar)
fmtsmo3684034.joinVoices([smo36840v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43720 = smo33931.getStemDirection();
smo33931.setStemDirection(dirsmo43720);
smo33933.setStemDirection(dirsmo43720);
const smo43720 = new VF.Beam([smo33931,smo33933]);
 
// formatting measures in staff group smo37130
fmtsmo3395434.format([smo33954v0,smo34914v0,smo35870v0,smo36840v0], 172);
const stavesmo33954 = new VF.Stave(461, 627, 186);
stavesmo33954.setAttribute('id', 'stavesmo33954');
stavesmo33954.setBegBarType(VF.Barline.type.NONE);
stavesmo33954.setContext(context);
stavesmo33954.draw();
smo33954v0.draw(context, stavesmo33954);
smo43720.setContext(context);
smo43720.draw();
const stavesmo34914 = new VF.Stave(461, 730, 186);
stavesmo34914.setAttribute('id', 'stavesmo34914');
stavesmo34914.setBegBarType(VF.Barline.type.NONE);
stavesmo34914.setContext(context);
stavesmo34914.draw();
smo34914v0.draw(context, stavesmo34914);
const stavesmo35870 = new VF.Stave(461, 813, 186);
stavesmo35870.setAttribute('id', 'stavesmo35870');
stavesmo35870.setBegBarType(VF.Barline.type.NONE);
stavesmo35870.setContext(context);
stavesmo35870.draw();
smo35870v0.draw(context, stavesmo35870);
const stavesmo36840 = new VF.Stave(461, 922, 186);
stavesmo36840.setAttribute('id', 'stavesmo36840');
stavesmo36840.setBegBarType(VF.Barline.type.NONE);
stavesmo36840.setContext(context);
stavesmo36840.draw();
smo36840v0.draw(context, stavesmo36840);
const fmtsmo3397635 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo33976v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33976v0ar = [];
const smo33955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33955'] = smo33955;
smo33955.setAttribute('id', 'smo33955');
const smo33956 = new VF.Annotation('вей');
smo33956.setAttribute('id', 'smo33956');
smo33956.setFont('Merriweather', 12.1, 'normal');
smo33956.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33955.addModifier(smo33956);
smo33956.addClass('lyric lyric-0');
smo33976v0ar.push(smo33955);
const smo33957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo33957'] = smo33957;
smo33957.setAttribute('id', 'smo33957');
const smo33958 = new VF.Annotation('-');
smo33958.setAttribute('id', 'smo33958');
smo33958.setFont('Merriweather', 12.1, 'normal');
smo33958.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33957.addModifier(smo33958);
smo33958.addClass('lyric lyric-0 lyric-hyphen');
smo33976v0ar.push(smo33957);
const smo33959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo33959'] = smo33959;
smo33959.setAttribute('id', 'smo33959');
const smo33960 = new VF.Annotation('-');
smo33960.setAttribute('id', 'smo33960');
smo33960.setFont('Merriweather', 12.1, 'normal');
smo33960.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33959.addModifier(smo33960);
smo33960.addClass('lyric lyric-0 lyric-hyphen');
smo33976v0ar.push(smo33959);
smo33976v0.addTickables(smo33976v0ar)
fmtsmo3397635.joinVoices([smo33976v0]);
const fmtsmo3493435 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo34934v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34934v0ar = [];
const smo34915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34915'] = smo34915;
smo34915.setAttribute('id', 'smo34915');
smo34934v0ar.push(smo34915);
const smo34916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34916'] = smo34916;
smo34916.setAttribute('id', 'smo34916');
smo34934v0ar.push(smo34916);
const smo34917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34917'] = smo34917;
smo34917.setAttribute('id', 'smo34917');
smo34934v0ar.push(smo34917);
const smo34918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34918'] = smo34918;
smo34918.setAttribute('id', 'smo34918');
smo34934v0ar.push(smo34918);
smo34934v0.addTickables(smo34934v0ar)
fmtsmo3493435.joinVoices([smo34934v0]);
const fmtsmo3588735 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo35887v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35887v0ar = [];
const smo35871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35871'] = smo35871;
smo35871.setAttribute('id', 'smo35871');
smo35887v0ar.push(smo35871);
smo35887v0.addTickables(smo35887v0ar)
fmtsmo3588735.joinVoices([smo35887v0]);
const fmtsmo3686035 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo36860v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36860v0ar = [];
const smo36841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36841'] = smo36841;
smo36841.setAttribute('id', 'smo36841');
smo36860v0ar.push(smo36841);
const smo36842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36842'] = smo36842;
smo36842.setAttribute('id', 'smo36842');
smo36860v0ar.push(smo36842);
const smo36843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36843'] = smo36843;
smo36843.setAttribute('id', 'smo36843');
smo36860v0ar.push(smo36843);
const smo36844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36844'] = smo36844;
smo36844.setAttribute('id', 'smo36844');
smo36860v0ar.push(smo36844);
smo36860v0.addTickables(smo36860v0ar)
fmtsmo3686035.joinVoices([smo36860v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3397635.format([smo33976v0,smo34934v0,smo35887v0,smo36860v0], 136);
const stavesmo33976 = new VF.Stave(647, 627, 150);
stavesmo33976.setAttribute('id', 'stavesmo33976');
stavesmo33976.setBegBarType(VF.Barline.type.NONE);
stavesmo33976.setContext(context);
stavesmo33976.draw();
smo33976v0.draw(context, stavesmo33976);
const stavesmo34934 = new VF.Stave(647, 730, 150);
stavesmo34934.setAttribute('id', 'stavesmo34934');
stavesmo34934.setBegBarType(VF.Barline.type.NONE);
stavesmo34934.setContext(context);
stavesmo34934.draw();
smo34934v0.draw(context, stavesmo34934);
const stavesmo35887 = new VF.Stave(647, 813, 150);
stavesmo35887.setAttribute('id', 'stavesmo35887');
stavesmo35887.setBegBarType(VF.Barline.type.NONE);
stavesmo35887.setContext(context);
stavesmo35887.draw();
smo35887v0.draw(context, stavesmo35887);
const stavesmo36860 = new VF.Stave(647, 922, 150);
stavesmo36860.setAttribute('id', 'stavesmo36860');
stavesmo36860.setBegBarType(VF.Barline.type.NONE);
stavesmo36860.setContext(context);
stavesmo36860.draw();
smo36860v0.draw(context, stavesmo36860);
const fmtsmo3400236 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo34002v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34002v0ar = [];
const smo33977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33977'] = smo33977;
smo33977.setAttribute('id', 'smo33977');
const smo33978 = new VF.Annotation('го');
smo33978.setAttribute('id', 'smo33978');
smo33978.setFont('Merriweather', 12.1, 'normal');
smo33978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33977.addModifier(smo33978);
smo33978.addClass('lyric lyric-0');
smo34002v0ar.push(smo33977);
const smo33979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33979'] = smo33979;
smo33979.setAttribute('id', 'smo33979');
const smo33980 = new VF.Annotation('-');
smo33980.setAttribute('id', 'smo33980');
smo33980.setFont('Merriweather', 12.1, 'normal');
smo33980.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33979.addModifier(smo33980);
smo33980.addClass('lyric lyric-0 lyric-hyphen');
smo34002v0ar.push(smo33979);
const smo33981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33981'] = smo33981;
smo33981.setAttribute('id', 'smo33981');
const smo33982 = new VF.Annotation('-');
smo33982.setAttribute('id', 'smo33982');
smo33982.setFont('Merriweather', 12.1, 'normal');
smo33982.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33981.addModifier(smo33982);
smo33982.addClass('lyric lyric-0 lyric-hyphen');
smo34002v0ar.push(smo33981);
const smo33983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo33983'] = smo33983;
smo33983.setAttribute('id', 'smo33983');
const smo339830acc = new VF.Accidental('#');
smo33983.addModifier(smo339830acc, 0);
const smo33984 = new VF.Annotation('-');
smo33984.setAttribute('id', 'smo33984');
smo33984.setFont('Merriweather', 12.1, 'normal');
smo33984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33983.addModifier(smo33984);
smo33984.addClass('lyric lyric-0 lyric-hyphen');
smo34002v0ar.push(smo33983);
const smo33985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33985'] = smo33985;
smo33985.setAttribute('id', 'smo33985');
const smo33986 = new VF.Annotation('ло');
smo33986.setAttribute('id', 'smo33986');
smo33986.setFont('Merriweather', 12.1, 'normal');
smo33986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33985.addModifier(smo33986);
smo33986.addClass('lyric lyric-0 lyric-hyphen');
smo34002v0ar.push(smo33985);
smo34002v0.addTickables(smo34002v0ar)
fmtsmo3400236.joinVoices([smo34002v0]);
const fmtsmo3495436 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo34954v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34954v0ar = [];
const smo34935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34935'] = smo34935;
smo34935.setAttribute('id', 'smo34935');
smo34954v0ar.push(smo34935);
const smo34936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34936'] = smo34936;
smo34936.setAttribute('id', 'smo34936');
smo34954v0ar.push(smo34936);
const smo34937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34937'] = smo34937;
smo34937.setAttribute('id', 'smo34937');
smo34954v0ar.push(smo34937);
const smo34938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34938'] = smo34938;
smo34938.setAttribute('id', 'smo34938');
smo34954v0ar.push(smo34938);
smo34954v0.addTickables(smo34954v0ar)
fmtsmo3495436.joinVoices([smo34954v0]);
const fmtsmo3590536 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo35905v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35905v0ar = [];
const smo35888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35888'] = smo35888;
smo35888.setAttribute('id', 'smo35888');
smo35905v0ar.push(smo35888);
const smo35889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35889'] = smo35889;
smo35889.setAttribute('id', 'smo35889');
smo35905v0ar.push(smo35889);
smo35905v0.addTickables(smo35905v0ar)
fmtsmo3590536.joinVoices([smo35905v0]);
const fmtsmo3688036 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo36880v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36880v0ar = [];
const smo36861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36861'] = smo36861;
smo36861.setAttribute('id', 'smo36861');
smo36880v0ar.push(smo36861);
const smo36862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36862'] = smo36862;
smo36862.setAttribute('id', 'smo36862');
smo36880v0ar.push(smo36862);
const smo36863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36863'] = smo36863;
smo36863.setAttribute('id', 'smo36863');
smo36880v0ar.push(smo36863);
const smo36864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36864'] = smo36864;
smo36864.setAttribute('id', 'smo36864');
smo36880v0ar.push(smo36864);
smo36880v0.addTickables(smo36880v0ar)
fmtsmo3688036.joinVoices([smo36880v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43737 = smo33979.getStemDirection();
smo33979.setStemDirection(dirsmo43737);
smo33981.setStemDirection(dirsmo43737);
const smo43737 = new VF.Beam([smo33979,smo33981]);
 
// formatting measures in staff group smo37130
fmtsmo3400236.format([smo34002v0,smo34954v0,smo35905v0,smo36880v0], 174);
const stavesmo34002 = new VF.Stave(797, 627, 188);
stavesmo34002.setAttribute('id', 'stavesmo34002');
stavesmo34002.setBegBarType(VF.Barline.type.NONE);
stavesmo34002.setContext(context);
stavesmo34002.draw();
smo34002v0.draw(context, stavesmo34002);
smo43737.setContext(context);
smo43737.draw();
const stavesmo34954 = new VF.Stave(797, 730, 188);
stavesmo34954.setAttribute('id', 'stavesmo34954');
stavesmo34954.setBegBarType(VF.Barline.type.NONE);
stavesmo34954.setContext(context);
stavesmo34954.draw();
smo34954v0.draw(context, stavesmo34954);
const stavesmo35905 = new VF.Stave(797, 813, 188);
stavesmo35905.setAttribute('id', 'stavesmo35905');
stavesmo35905.setBegBarType(VF.Barline.type.NONE);
stavesmo35905.setContext(context);
stavesmo35905.draw();
smo35905v0.draw(context, stavesmo35905);
const stavesmo36880 = new VF.Stave(797, 922, 188);
stavesmo36880.setAttribute('id', 'stavesmo36880');
stavesmo36880.setBegBarType(VF.Barline.type.NONE);
stavesmo36880.setContext(context);
stavesmo36880.draw();
smo36880v0.draw(context, stavesmo36880);
const fmtsmo3402437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo34024v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34024v0ar = [];
const smo34003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34003'] = smo34003;
smo34003.setAttribute('id', 'smo34003');
const smo34004 = new VF.Annotation('си');
smo34004.setAttribute('id', 'smo34004');
smo34004.setFont('Merriweather', 12.1, 'normal');
smo34004.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34003.addModifier(smo34004);
smo34004.addClass('lyric lyric-0 lyric-hyphen');
smo34024v0ar.push(smo34003);
const smo34005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34005'] = smo34005;
smo34005.setAttribute('id', 'smo34005');
const smo34006 = new VF.Annotation('ст');
smo34006.setAttribute('id', 'smo34006');
smo34006.setFont('Merriweather', 12.1, 'normal');
smo34006.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34005.addModifier(smo34006);
smo34006.addClass('lyric lyric-0');
smo34024v0ar.push(smo34005);
const smo34007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34007'] = smo34007;
smo34007.setAttribute('id', 'smo34007');
const smo34008 = new VF.Annotation('ый');
smo34008.setAttribute('id', 'smo34008');
smo34008.setFont('Merriweather', 12.1, 'normal');
smo34008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34007.addModifier(smo34008);
smo34008.addClass('lyric lyric-0');
smo34024v0ar.push(smo34007);
smo34024v0.addTickables(smo34024v0ar)
fmtsmo3402437.joinVoices([smo34024v0]);
const fmtsmo3497237 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo34972v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34972v0ar = [];
const smo34955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34955'] = smo34955;
smo34955.setAttribute('id', 'smo34955');
smo34972v0ar.push(smo34955);
const smo34956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34956'] = smo34956;
smo34956.setAttribute('id', 'smo34956');
smo34972v0ar.push(smo34956);
smo34972v0.addTickables(smo34972v0ar)
fmtsmo3497237.joinVoices([smo34972v0]);
const fmtsmo3592337 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo35923v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35923v0ar = [];
const smo35906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo35906'] = smo35906;
smo35906.setAttribute('id', 'smo35906');
smo35923v0ar.push(smo35906);
const smo35907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35907'] = smo35907;
smo35907.setAttribute('id', 'smo35907');
smo35923v0ar.push(smo35907);
smo35923v0.addTickables(smo35923v0ar)
fmtsmo3592337.joinVoices([smo35923v0]);
const fmtsmo3689837 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo36898v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36898v0ar = [];
const smo36881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36881'] = smo36881;
smo36881.setAttribute('id', 'smo36881');
smo36898v0ar.push(smo36881);
const smo36882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36882'] = smo36882;
smo36882.setAttribute('id', 'smo36882');
smo36898v0ar.push(smo36882);
smo36898v0.addTickables(smo36898v0ar)
fmtsmo3689837.joinVoices([smo36898v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3402437.format([smo34024v0,smo34972v0,smo35923v0,smo36898v0], 143);
const stavesmo34024 = new VF.Stave(985, 627, 157);
stavesmo34024.setAttribute('id', 'stavesmo34024');
stavesmo34024.setBegBarType(VF.Barline.type.NONE);
stavesmo34024.setContext(context);
stavesmo34024.draw();
smo34024v0.draw(context, stavesmo34024);
const stavesmo34972 = new VF.Stave(985, 730, 157);
stavesmo34972.setAttribute('id', 'stavesmo34972');
stavesmo34972.setBegBarType(VF.Barline.type.NONE);
stavesmo34972.setContext(context);
stavesmo34972.draw();
smo34972v0.draw(context, stavesmo34972);
const stavesmo35923 = new VF.Stave(985, 813, 157);
stavesmo35923.setAttribute('id', 'stavesmo35923');
stavesmo35923.setBegBarType(VF.Barline.type.NONE);
stavesmo35923.setContext(context);
stavesmo35923.draw();
smo35923v0.draw(context, stavesmo35923);
const stavesmo36898 = new VF.Stave(985, 922, 157);
stavesmo36898.setAttribute('id', 'stavesmo36898');
stavesmo36898.setBegBarType(VF.Barline.type.NONE);
stavesmo36898.setContext(context);
stavesmo36898.draw();
smo36898v0.draw(context, stavesmo36898);
const fmtsmo3404738 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo34047v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34047v0ar = [];
const smo34025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34025'] = smo34025;
smo34025.setAttribute('id', 'smo34025');
smo34025.addModifier(new VF.Dot(), 0);
const  smo44566 = new VF.Articulation('a@a').setPosition(3);
smo34025.addModifier(smo44566, 0);
const smo34026 = new VF.Annotation('со');
smo34026.setAttribute('id', 'smo34026');
smo34026.setFont('Merriweather', 12.1, 'normal');
smo34026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34025.addModifier(smo34026);
smo34026.addClass('lyric lyric-0');
smo34047v0ar.push(smo34025);
const smo34028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo34028'] = smo34028;
smo34028.setAttribute('id', 'smo34028');
const smo340280acc = new VF.Accidental('#');
smo34028.addModifier(smo340280acc, 0);
const smo34029 = new VF.Annotation('-');
smo34029.setAttribute('id', 'smo34029');
smo34029.setFont('Merriweather', 12.1, 'normal');
smo34029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34028.addModifier(smo34029);
smo34029.addClass('lyric lyric-0 lyric-hyphen');
smo34047v0ar.push(smo34028);
const smo34030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34030'] = smo34030;
smo34030.setAttribute('id', 'smo34030');
smo34047v0ar.push(smo34030);
smo34047v0.addTickables(smo34047v0ar)
fmtsmo3404738.joinVoices([smo34047v0]);
const fmtsmo3499038 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo34990v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34990v0ar = [];
const smo34973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34973'] = smo34973;
smo34973.setAttribute('id', 'smo34973');
smo34973.addModifier(new VF.Dot(), 0);
smo34990v0ar.push(smo34973);
const smo34974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34974'] = smo34974;
smo34974.setAttribute('id', 'smo34974');
smo34990v0ar.push(smo34974);
smo34990v0.addTickables(smo34990v0ar)
fmtsmo3499038.joinVoices([smo34990v0]);
const fmtsmo3594138 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo35941v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35941v0ar = [];
const smo35924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35924'] = smo35924;
smo35924.setAttribute('id', 'smo35924');
smo35924.addModifier(new VF.Dot(), 0);
smo35941v0ar.push(smo35924);
const smo35925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35925'] = smo35925;
smo35925.setAttribute('id', 'smo35925');
smo35941v0ar.push(smo35925);
smo35941v0.addTickables(smo35941v0ar)
fmtsmo3594138.joinVoices([smo35941v0]);
const fmtsmo3691638 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo36916v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36916v0ar = [];
const smo36899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36899'] = smo36899;
smo36899.setAttribute('id', 'smo36899');
smo36899.addModifier(new VF.Dot(), 0);
smo36916v0ar.push(smo36899);
const smo36900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36900'] = smo36900;
smo36900.setAttribute('id', 'smo36900');
smo36916v0ar.push(smo36900);
smo36916v0.addTickables(smo36916v0ar)
fmtsmo3691638.joinVoices([smo36916v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43754 = smo34028.getStemDirection();
smo34028.setStemDirection(dirsmo43754);
smo34030.setStemDirection(dirsmo43754);
const smo43754 = new VF.Beam([smo34028,smo34030]);
 
// formatting measures in staff group smo37130
fmtsmo3404738.format([smo34047v0,smo34990v0,smo35941v0,smo36916v0], 100);
const stavesmo34047 = new VF.Stave(1142, 627, 114);
stavesmo34047.setAttribute('id', 'stavesmo34047');
stavesmo34047.setBegBarType(VF.Barline.type.NONE);
stavesmo34047.setContext(context);
stavesmo34047.draw();
smo34047v0.draw(context, stavesmo34047);
smo43754.setContext(context);
smo43754.draw();
const stavesmo34990 = new VF.Stave(1142, 730, 114);
stavesmo34990.setAttribute('id', 'stavesmo34990');
stavesmo34990.setBegBarType(VF.Barline.type.NONE);
stavesmo34990.setContext(context);
stavesmo34990.draw();
smo34990v0.draw(context, stavesmo34990);
const stavesmo35941 = new VF.Stave(1142, 813, 114);
stavesmo35941.setAttribute('id', 'stavesmo35941');
stavesmo35941.setBegBarType(VF.Barline.type.NONE);
stavesmo35941.setContext(context);
stavesmo35941.draw();
smo35941v0.draw(context, stavesmo35941);
const stavesmo36916 = new VF.Stave(1142, 922, 114);
stavesmo36916.setAttribute('id', 'stavesmo36916');
stavesmo36916.setBegBarType(VF.Barline.type.NONE);
stavesmo36916.setContext(context);
stavesmo36916.draw();
smo36916v0.draw(context, stavesmo36916);
const fmtsmo3406739 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo34067v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34067v0ar = [];
const smo34048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34048'] = smo34048;
smo34048.setAttribute('id', 'smo34048');
smo34048.addModifier(new VF.Dot(), 0);
const smo34049 = new VF.Annotation('ло');
smo34049.setAttribute('id', 'smo34049');
smo34049.setFont('Merriweather', 12.1, 'normal');
smo34049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34048.addModifier(smo34049);
smo34049.addClass('lyric lyric-0');
smo34067v0ar.push(smo34048);
const smo34050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34050'] = smo34050;
smo34050.setAttribute('id', 'smo34050');
const smo34051 = new VF.Annotation('-');
smo34051.setAttribute('id', 'smo34051');
smo34051.setFont('Merriweather', 12.1, 'normal');
smo34051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34050.addModifier(smo34051);
smo34051.addClass('lyric lyric-0 lyric-hyphen');
smo34067v0ar.push(smo34050);
smo34067v0.addTickables(smo34067v0ar)
fmtsmo3406739.joinVoices([smo34067v0]);
const fmtsmo3500939 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo35009v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35009v0ar = [];
const smo34991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34991'] = smo34991;
smo34991.setAttribute('id', 'smo34991');
smo35009v0ar.push(smo34991);
const smo34992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34992'] = smo34992;
smo34992.setAttribute('id', 'smo34992');
smo35009v0ar.push(smo34992);
const smo34993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34993'] = smo34993;
smo34993.setAttribute('id', 'smo34993');
smo35009v0ar.push(smo34993);
smo35009v0.addTickables(smo35009v0ar)
fmtsmo3500939.joinVoices([smo35009v0]);
const fmtsmo3596039 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo35960v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35960v0ar = [];
const smo35942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35942'] = smo35942;
smo35942.setAttribute('id', 'smo35942');
smo35960v0ar.push(smo35942);
const smo35943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35943'] = smo35943;
smo35943.setAttribute('id', 'smo35943');
smo35960v0ar.push(smo35943);
const smo35944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo35944'] = smo35944;
smo35944.setAttribute('id', 'smo35944');
const smo359440acc = new VF.Accidental('#');
smo35944.addModifier(smo359440acc, 0);
smo35960v0ar.push(smo35944);
smo35960v0.addTickables(smo35960v0ar)
fmtsmo3596039.joinVoices([smo35960v0]);
const fmtsmo3693539 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo36935v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36935v0ar = [];
const smo36917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36917'] = smo36917;
smo36917.setAttribute('id', 'smo36917');
smo36935v0ar.push(smo36917);
const smo36918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36918'] = smo36918;
smo36918.setAttribute('id', 'smo36918');
smo36935v0ar.push(smo36918);
const smo36919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo36919'] = smo36919;
smo36919.setAttribute('id', 'smo36919');
smo36935v0ar.push(smo36919);
smo36935v0.addTickables(smo36935v0ar)
fmtsmo3693539.joinVoices([smo36935v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3406739.format([smo34067v0,smo35009v0,smo35960v0,smo36935v0], 106);
const stavesmo34067 = new VF.Stave(1256, 627, 120);
stavesmo34067.setAttribute('id', 'stavesmo34067');
stavesmo34067.setBegBarType(VF.Barline.type.NONE);
stavesmo34067.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo34067.setContext(context);
stavesmo34067.draw();
smo34067v0.draw(context, stavesmo34067);
const stavesmo35009 = new VF.Stave(1256, 730, 120);
stavesmo35009.setAttribute('id', 'stavesmo35009');
stavesmo35009.setBegBarType(VF.Barline.type.NONE);
stavesmo35009.setContext(context);
stavesmo35009.draw();
smo35009v0.draw(context, stavesmo35009);
const stavesmo35960 = new VF.Stave(1256, 813, 120);
stavesmo35960.setAttribute('id', 'stavesmo35960');
stavesmo35960.setBegBarType(VF.Barline.type.NONE);
stavesmo35960.setContext(context);
stavesmo35960.draw();
smo35960v0.draw(context, stavesmo35960);
const stavesmo36935 = new VF.Stave(1256, 922, 120);
stavesmo36935.setAttribute('id', 'stavesmo36935');
stavesmo36935.setBegBarType(VF.Barline.type.NONE);
stavesmo36935.setContext(context);
stavesmo36935.draw();
smo36935v0.draw(context, stavesmo36935);
const rightsmo37130stavesmo340673 = new VF.StaveConnector(stavesmo34067, stavesmo36935).setType(0);
rightsmo37130stavesmo340673.setContext(context).draw();
const fmtsmo3408740 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo34087v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34087v0ar = [];
const smo34068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34068'] = smo34068;
smo34068.setAttribute('id', 'smo34068');
const smo34069 = new VF.Annotation('вей');
smo34069.setAttribute('id', 'smo34069');
smo34069.setFont('Merriweather', 12.1, 'normal');
smo34069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34068.addModifier(smo34069);
smo34069.addClass('lyric lyric-0');
smo34087v0ar.push(smo34068);
const smo34070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34070'] = smo34070;
smo34070.setAttribute('id', 'smo34070');
smo34087v0ar.push(smo34070);
const smo34071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34071'] = smo34071;
smo34071.setAttribute('id', 'smo34071');
smo34087v0ar.push(smo34071);
smo34087v0.addTickables(smo34087v0ar)
fmtsmo3408740.joinVoices([smo34087v0]);
const fmtsmo3503140 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo35031v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35031v0ar = [];
const smo35010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo35011 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo35011.setAttribute('id', 'smo35011');
const ggrpsmo35010 = new VF.GraceNoteGroup([smo35011]);
ggrpsmo35010.beamNotes();
smo35010.addModifier(ggrpsmo35010, 0);
noteHash['smo35010'] = smo35010;
smo35010.setAttribute('id', 'smo35010');
smo35031v0ar.push(smo35010);
const smo35012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35012'] = smo35012;
smo35012.setAttribute('id', 'smo35012');
smo35031v0ar.push(smo35012);
const smo35013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
const smo35014 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo35014.setAttribute('id', 'smo35014');
const ggrpsmo35013 = new VF.GraceNoteGroup([smo35014]);
ggrpsmo35013.beamNotes();
smo35013.addModifier(ggrpsmo35013, 0);
noteHash['smo35013'] = smo35013;
smo35013.setAttribute('id', 'smo35013');
smo35031v0ar.push(smo35013);
const smo35015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35015'] = smo35015;
smo35015.setAttribute('id', 'smo35015');
smo35031v0ar.push(smo35015);
smo35031v0.addTickables(smo35031v0ar)
fmtsmo3503140.joinVoices([smo35031v0]);
const fmtsmo3598040 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo35980v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35980v0ar = [];
const smo35961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35961'] = smo35961;
smo35961.setAttribute('id', 'smo35961');
smo35980v0ar.push(smo35961);
const smo35962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35962'] = smo35962;
smo35962.setAttribute('id', 'smo35962');
smo35980v0ar.push(smo35962);
const smo35963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35963'] = smo35963;
smo35963.setAttribute('id', 'smo35963');
smo35980v0ar.push(smo35963);
const smo35964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35964'] = smo35964;
smo35964.setAttribute('id', 'smo35964');
smo35980v0ar.push(smo35964);
smo35980v0.addTickables(smo35980v0ar)
fmtsmo3598040.joinVoices([smo35980v0]);
const fmtsmo3695540 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo36955v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36955v0ar = [];
const smo36936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36936'] = smo36936;
smo36936.setAttribute('id', 'smo36936');
smo36955v0ar.push(smo36936);
const smo36937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36937'] = smo36937;
smo36937.setAttribute('id', 'smo36937');
smo36955v0ar.push(smo36937);
const smo36938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36938'] = smo36938;
smo36938.setAttribute('id', 'smo36938');
smo36955v0ar.push(smo36938);
const smo36939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36939'] = smo36939;
smo36939.setAttribute('id', 'smo36939');
smo36955v0ar.push(smo36939);
smo36955v0.addTickables(smo36955v0ar)
fmtsmo3695540.joinVoices([smo36955v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3408740.format([smo34087v0,smo35031v0,smo35980v0,smo36955v0], 170);
const stavesmo34087 = new VF.Stave(55, 1040, 244);
stavesmo34087.setAttribute('id', 'stavesmo34087');
stavesmo34087.setBegBarType(1);
stavesmo34087.addClef('treble');
const keysmo34087 = new VF.KeySignature('F');
keysmo34087.addToStave(stavesmo34087);
stavesmo34087.setContext(context);
stavesmo34087.draw();
smo34087v0.draw(context, stavesmo34087);
const stavesmo35031 = new VF.Stave(55, 1165, 244);
stavesmo35031.setAttribute('id', 'stavesmo35031');
stavesmo35031.setBegBarType(1);
stavesmo35031.addClef('treble');
const keysmo35031 = new VF.KeySignature('F');
keysmo35031.addToStave(stavesmo35031);
stavesmo35031.setContext(context);
stavesmo35031.draw();
smo35031v0.draw(context, stavesmo35031);
const stavesmo35980 = new VF.Stave(55, 1253, 244);
stavesmo35980.setAttribute('id', 'stavesmo35980');
stavesmo35980.setBegBarType(1);
stavesmo35980.addClef('treble');
const keysmo35980 = new VF.KeySignature('F');
keysmo35980.addToStave(stavesmo35980);
stavesmo35980.setContext(context);
stavesmo35980.draw();
smo35980v0.draw(context, stavesmo35980);
const stavesmo36955 = new VF.Stave(55, 1366, 244);
stavesmo36955.setAttribute('id', 'stavesmo36955');
stavesmo36955.setBegBarType(1);
stavesmo36955.addClef('bass');
const keysmo36955 = new VF.KeySignature('F');
keysmo36955.addToStave(stavesmo36955);
stavesmo36955.setContext(context);
stavesmo36955.draw();
smo36955v0.draw(context, stavesmo36955);
const leftsmo37130stavesmo340873 = new VF.StaveConnector(stavesmo34087, stavesmo36955).setType(1);
leftsmo37130stavesmo340873.setContext(context).draw();
const fmtsmo3410441 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo34104v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34104v0ar = [];
const smo34088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34088'] = smo34088;
smo34088.setAttribute('id', 'smo34088');
smo34104v0ar.push(smo34088);
smo34104v0.addTickables(smo34104v0ar)
fmtsmo3410441.joinVoices([smo34104v0]);
const fmtsmo3505141 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo35051v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35051v0ar = [];
const smo35032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
const smo35033 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo35033.setAttribute('id', 'smo35033');
const ggrpsmo35032 = new VF.GraceNoteGroup([smo35033]);
ggrpsmo35032.beamNotes();
smo35032.addModifier(ggrpsmo35032, 0);
noteHash['smo35032'] = smo35032;
smo35032.setAttribute('id', 'smo35032');
smo35032.addModifier(new VF.Dot(), 0);
smo35051v0ar.push(smo35032);
const smo35034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35034'] = smo35034;
smo35034.setAttribute('id', 'smo35034');
smo35051v0ar.push(smo35034);
const smo35035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo35035'] = smo35035;
smo35035.setAttribute('id', 'smo35035');
smo35051v0ar.push(smo35035);
smo35051v0.addTickables(smo35051v0ar)
fmtsmo3505141.joinVoices([smo35051v0]);
const fmtsmo3600041 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo36000v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36000v0ar = [];
const smo35981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35981'] = smo35981;
smo35981.setAttribute('id', 'smo35981');
smo36000v0ar.push(smo35981);
const smo35982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35982'] = smo35982;
smo35982.setAttribute('id', 'smo35982');
smo36000v0ar.push(smo35982);
const smo35983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35983'] = smo35983;
smo35983.setAttribute('id', 'smo35983');
smo36000v0ar.push(smo35983);
const smo35984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo35984'] = smo35984;
smo35984.setAttribute('id', 'smo35984');
smo36000v0ar.push(smo35984);
smo36000v0.addTickables(smo36000v0ar)
fmtsmo3600041.joinVoices([smo36000v0]);
const fmtsmo3697541 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo36975v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36975v0ar = [];
const smo36956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36956'] = smo36956;
smo36956.setAttribute('id', 'smo36956');
smo36975v0ar.push(smo36956);
const smo36957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36957'] = smo36957;
smo36957.setAttribute('id', 'smo36957');
smo36975v0ar.push(smo36957);
const smo36958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36958'] = smo36958;
smo36958.setAttribute('id', 'smo36958');
smo36975v0ar.push(smo36958);
const smo36959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36959'] = smo36959;
smo36959.setAttribute('id', 'smo36959');
smo36975v0ar.push(smo36959);
smo36975v0.addTickables(smo36975v0ar)
fmtsmo3697541.joinVoices([smo36975v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43789 = smo35034.getStemDirection();
smo35034.setStemDirection(dirsmo43789);
smo35035.setStemDirection(dirsmo43789);
const smo43789 = new VF.Beam([smo35034,smo35035]);
 
// formatting measures in staff group smo37130
fmtsmo3410441.format([smo34104v0,smo35051v0,smo36000v0,smo36975v0], 153);
const stavesmo34104 = new VF.Stave(299, 1040, 167);
stavesmo34104.setAttribute('id', 'stavesmo34104');
stavesmo34104.setBegBarType(VF.Barline.type.NONE);
stavesmo34104.setContext(context);
stavesmo34104.draw();
smo34104v0.draw(context, stavesmo34104);
const stavesmo35051 = new VF.Stave(299, 1165, 167);
stavesmo35051.setAttribute('id', 'stavesmo35051');
stavesmo35051.setBegBarType(VF.Barline.type.NONE);
stavesmo35051.setContext(context);
stavesmo35051.draw();
smo35051v0.draw(context, stavesmo35051);
smo43789.setContext(context);
smo43789.draw();
const stavesmo36000 = new VF.Stave(299, 1253, 167);
stavesmo36000.setAttribute('id', 'stavesmo36000');
stavesmo36000.setBegBarType(VF.Barline.type.NONE);
stavesmo36000.setContext(context);
stavesmo36000.draw();
smo36000v0.draw(context, stavesmo36000);
const stavesmo36975 = new VF.Stave(299, 1366, 167);
stavesmo36975.setAttribute('id', 'stavesmo36975');
stavesmo36975.setBegBarType(VF.Barline.type.NONE);
stavesmo36975.setContext(context);
stavesmo36975.draw();
smo36975v0.draw(context, stavesmo36975);
const fmtsmo3412142 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo34121v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34121v0ar = [];
const smo34105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34105'] = smo34105;
smo34105.setAttribute('id', 'smo34105');
smo34121v0ar.push(smo34105);
smo34121v0.addTickables(smo34121v0ar)
fmtsmo3412142.joinVoices([smo34121v0]);
const fmtsmo3507342 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo35073v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35073v0ar = [];
const smo35052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35052'] = smo35052;
smo35052.setAttribute('id', 'smo35052');
smo35073v0ar.push(smo35052);
const smo35053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35053'] = smo35053;
smo35053.setAttribute('id', 'smo35053');
smo35073v0ar.push(smo35053);
const smo35054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo35054'] = smo35054;
smo35054.setAttribute('id', 'smo35054');
smo35073v0ar.push(smo35054);
const smo35055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35055'] = smo35055;
smo35055.setAttribute('id', 'smo35055');
smo35073v0ar.push(smo35055);
const smo35056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35056'] = smo35056;
smo35056.setAttribute('id', 'smo35056');
smo35073v0ar.push(smo35056);
const smo35057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo35057'] = smo35057;
smo35057.setAttribute('id', 'smo35057');
smo35073v0ar.push(smo35057);
smo35073v0.addTickables(smo35073v0ar)
fmtsmo3507342.joinVoices([smo35073v0]);
const fmtsmo3602042 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo36020v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36020v0ar = [];
const smo36001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36001'] = smo36001;
smo36001.setAttribute('id', 'smo36001');
smo36020v0ar.push(smo36001);
const smo36002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36002'] = smo36002;
smo36002.setAttribute('id', 'smo36002');
smo36020v0ar.push(smo36002);
const smo36003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36003'] = smo36003;
smo36003.setAttribute('id', 'smo36003');
smo36020v0ar.push(smo36003);
const smo36004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36004'] = smo36004;
smo36004.setAttribute('id', 'smo36004');
smo36020v0ar.push(smo36004);
smo36020v0.addTickables(smo36020v0ar)
fmtsmo3602042.joinVoices([smo36020v0]);
const fmtsmo3699542 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo36995v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36995v0ar = [];
const smo36976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36976'] = smo36976;
smo36976.setAttribute('id', 'smo36976');
smo36995v0ar.push(smo36976);
const smo36977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36977'] = smo36977;
smo36977.setAttribute('id', 'smo36977');
smo36995v0ar.push(smo36977);
const smo36978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36978'] = smo36978;
smo36978.setAttribute('id', 'smo36978');
smo36995v0ar.push(smo36978);
const smo36979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36979'] = smo36979;
smo36979.setAttribute('id', 'smo36979');
smo36995v0ar.push(smo36979);
smo36995v0.addTickables(smo36995v0ar)
fmtsmo3699542.joinVoices([smo36995v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43798 = smo35053.getStemDirection();
smo35053.setStemDirection(dirsmo43798);
smo35054.setStemDirection(dirsmo43798);
const smo43798 = new VF.Beam([smo35053,smo35054]);
const dirsmo43799 = smo35056.getStemDirection();
smo35056.setStemDirection(dirsmo43799);
smo35057.setStemDirection(dirsmo43799);
const smo43799 = new VF.Beam([smo35056,smo35057]);
 
// formatting measures in staff group smo37130
fmtsmo3412142.format([smo34121v0,smo35073v0,smo36020v0,smo36995v0], 147);
const stavesmo34121 = new VF.Stave(466, 1040, 161);
stavesmo34121.setAttribute('id', 'stavesmo34121');
stavesmo34121.setBegBarType(VF.Barline.type.NONE);
stavesmo34121.setContext(context);
stavesmo34121.draw();
smo34121v0.draw(context, stavesmo34121);
const stavesmo35073 = new VF.Stave(466, 1165, 161);
stavesmo35073.setAttribute('id', 'stavesmo35073');
stavesmo35073.setBegBarType(VF.Barline.type.NONE);
stavesmo35073.setContext(context);
stavesmo35073.draw();
smo35073v0.draw(context, stavesmo35073);
smo43798.setContext(context);
smo43798.draw();
smo43799.setContext(context);
smo43799.draw();
const stavesmo36020 = new VF.Stave(466, 1253, 161);
stavesmo36020.setAttribute('id', 'stavesmo36020');
stavesmo36020.setBegBarType(VF.Barline.type.NONE);
stavesmo36020.setContext(context);
stavesmo36020.draw();
smo36020v0.draw(context, stavesmo36020);
const stavesmo36995 = new VF.Stave(466, 1366, 161);
stavesmo36995.setAttribute('id', 'stavesmo36995');
stavesmo36995.setBegBarType(VF.Barline.type.NONE);
stavesmo36995.setContext(context);
stavesmo36995.draw();
smo36995v0.draw(context, stavesmo36995);
const fmtsmo3413843 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo34138v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34138v0ar = [];
const smo34122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34122'] = smo34122;
smo34122.setAttribute('id', 'smo34122');
smo34138v0ar.push(smo34122);
smo34138v0.addTickables(smo34138v0ar)
fmtsmo3413843.joinVoices([smo34138v0]);
const fmtsmo3509243 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo35092v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35092v0ar = [];
const smo35074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35074'] = smo35074;
smo35074.setAttribute('id', 'smo35074');
smo35092v0ar.push(smo35074);
const smo35075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo35075'] = smo35075;
smo35075.setAttribute('id', 'smo35075');
smo35092v0ar.push(smo35075);
const smo35076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo35076'] = smo35076;
smo35076.setAttribute('id', 'smo35076');
smo35092v0ar.push(smo35076);
smo35092v0.addTickables(smo35092v0ar)
fmtsmo3509243.joinVoices([smo35092v0]);
const fmtsmo3604043 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo36040v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36040v0ar = [];
const smo36021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36021'] = smo36021;
smo36021.setAttribute('id', 'smo36021');
smo36040v0ar.push(smo36021);
const smo36022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36022'] = smo36022;
smo36022.setAttribute('id', 'smo36022');
smo36040v0ar.push(smo36022);
const smo36023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36023'] = smo36023;
smo36023.setAttribute('id', 'smo36023');
smo36040v0ar.push(smo36023);
const smo36024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36024'] = smo36024;
smo36024.setAttribute('id', 'smo36024');
smo36040v0ar.push(smo36024);
smo36040v0.addTickables(smo36040v0ar)
fmtsmo3604043.joinVoices([smo36040v0]);
const fmtsmo3701543 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo37015v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37015v0ar = [];
const smo36996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36996'] = smo36996;
smo36996.setAttribute('id', 'smo36996');
smo37015v0ar.push(smo36996);
const smo36997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36997'] = smo36997;
smo36997.setAttribute('id', 'smo36997');
smo37015v0ar.push(smo36997);
const smo36998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36998'] = smo36998;
smo36998.setAttribute('id', 'smo36998');
smo37015v0ar.push(smo36998);
const smo36999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36999'] = smo36999;
smo36999.setAttribute('id', 'smo36999');
smo37015v0ar.push(smo36999);
smo37015v0.addTickables(smo37015v0ar)
fmtsmo3701543.joinVoices([smo37015v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3413843.format([smo34138v0,smo35092v0,smo36040v0,smo37015v0], 95);
const stavesmo34138 = new VF.Stave(627, 1040, 109);
stavesmo34138.setAttribute('id', 'stavesmo34138');
stavesmo34138.setBegBarType(VF.Barline.type.NONE);
stavesmo34138.setContext(context);
stavesmo34138.draw();
smo34138v0.draw(context, stavesmo34138);
const stavesmo35092 = new VF.Stave(627, 1165, 109);
stavesmo35092.setAttribute('id', 'stavesmo35092');
stavesmo35092.setBegBarType(VF.Barline.type.NONE);
stavesmo35092.setContext(context);
stavesmo35092.draw();
smo35092v0.draw(context, stavesmo35092);
const stavesmo36040 = new VF.Stave(627, 1253, 109);
stavesmo36040.setAttribute('id', 'stavesmo36040');
stavesmo36040.setBegBarType(VF.Barline.type.NONE);
stavesmo36040.setContext(context);
stavesmo36040.draw();
smo36040v0.draw(context, stavesmo36040);
const stavesmo37015 = new VF.Stave(627, 1366, 109);
stavesmo37015.setAttribute('id', 'stavesmo37015');
stavesmo37015.setBegBarType(VF.Barline.type.NONE);
stavesmo37015.setContext(context);
stavesmo37015.draw();
smo37015v0.draw(context, stavesmo37015);
const fmtsmo3415544 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo34155v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34155v0ar = [];
const smo34139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34139'] = smo34139;
smo34139.setAttribute('id', 'smo34139');
smo34155v0ar.push(smo34139);
smo34155v0.addTickables(smo34155v0ar)
fmtsmo3415544.joinVoices([smo34155v0]);
const fmtsmo3511244 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo35112v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35112v0ar = [];
const smo35093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35093'] = smo35093;
smo35093.setAttribute('id', 'smo35093');
smo35112v0ar.push(smo35093);
const smo35094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo35094'] = smo35094;
smo35094.setAttribute('id', 'smo35094');
smo35112v0ar.push(smo35094);
const smo35095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35095'] = smo35095;
smo35095.setAttribute('id', 'smo35095');
smo35112v0ar.push(smo35095);
const smo35096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35096'] = smo35096;
smo35096.setAttribute('id', 'smo35096');
smo35112v0ar.push(smo35096);
smo35112v0.addTickables(smo35112v0ar)
fmtsmo3511244.joinVoices([smo35112v0]);
const fmtsmo3606044 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo36060v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36060v0ar = [];
const smo36041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36041'] = smo36041;
smo36041.setAttribute('id', 'smo36041');
smo36060v0ar.push(smo36041);
const smo36042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36042'] = smo36042;
smo36042.setAttribute('id', 'smo36042');
smo36060v0ar.push(smo36042);
const smo36043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36043'] = smo36043;
smo36043.setAttribute('id', 'smo36043');
smo36060v0ar.push(smo36043);
const smo36044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36044'] = smo36044;
smo36044.setAttribute('id', 'smo36044');
smo36060v0ar.push(smo36044);
smo36060v0.addTickables(smo36060v0ar)
fmtsmo3606044.joinVoices([smo36060v0]);
const fmtsmo3703544 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo37035v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37035v0ar = [];
const smo37016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo37016'] = smo37016;
smo37016.setAttribute('id', 'smo37016');
smo37035v0ar.push(smo37016);
const smo37017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo37017'] = smo37017;
smo37017.setAttribute('id', 'smo37017');
smo37035v0ar.push(smo37017);
const smo37018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo37018'] = smo37018;
smo37018.setAttribute('id', 'smo37018');
smo37035v0ar.push(smo37018);
const smo37019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo37019'] = smo37019;
smo37019.setAttribute('id', 'smo37019');
smo37035v0ar.push(smo37019);
smo37035v0.addTickables(smo37035v0ar)
fmtsmo3703544.joinVoices([smo37035v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43816 = smo35093.getStemDirection();
smo35093.setStemDirection(dirsmo43816);
smo35094.setStemDirection(dirsmo43816);
const smo43816 = new VF.Beam([smo35093,smo35094]);
 
// formatting measures in staff group smo37130
fmtsmo3415544.format([smo34155v0,smo35112v0,smo36060v0,smo37035v0], 121);
const stavesmo34155 = new VF.Stave(736, 1040, 135);
stavesmo34155.setAttribute('id', 'stavesmo34155');
stavesmo34155.setBegBarType(VF.Barline.type.NONE);
stavesmo34155.setContext(context);
stavesmo34155.draw();
smo34155v0.draw(context, stavesmo34155);
const stavesmo35112 = new VF.Stave(736, 1165, 135);
stavesmo35112.setAttribute('id', 'stavesmo35112');
stavesmo35112.setBegBarType(VF.Barline.type.NONE);
stavesmo35112.setContext(context);
stavesmo35112.draw();
smo35112v0.draw(context, stavesmo35112);
smo43816.setContext(context);
smo43816.draw();
const stavesmo36060 = new VF.Stave(736, 1253, 135);
stavesmo36060.setAttribute('id', 'stavesmo36060');
stavesmo36060.setBegBarType(VF.Barline.type.NONE);
stavesmo36060.setContext(context);
stavesmo36060.draw();
smo36060v0.draw(context, stavesmo36060);
const stavesmo37035 = new VF.Stave(736, 1366, 135);
stavesmo37035.setAttribute('id', 'stavesmo37035');
stavesmo37035.setBegBarType(VF.Barline.type.NONE);
stavesmo37035.setContext(context);
stavesmo37035.draw();
smo37035v0.draw(context, stavesmo37035);
const fmtsmo3417245 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo34172v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34172v0ar = [];
const smo34156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34156'] = smo34156;
smo34156.setAttribute('id', 'smo34156');
smo34172v0ar.push(smo34156);
smo34172v0.addTickables(smo34172v0ar)
fmtsmo3417245.joinVoices([smo34172v0]);
const fmtsmo3513245 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo35132v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35132v0ar = [];
const smo35113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35113'] = smo35113;
smo35113.setAttribute('id', 'smo35113');
smo35132v0ar.push(smo35113);
const smo35114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35114'] = smo35114;
smo35114.setAttribute('id', 'smo35114');
smo35132v0ar.push(smo35114);
const smo35115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35115'] = smo35115;
smo35115.setAttribute('id', 'smo35115');
smo35132v0ar.push(smo35115);
const smo35116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35116'] = smo35116;
smo35116.setAttribute('id', 'smo35116');
smo35132v0ar.push(smo35116);
smo35132v0.addTickables(smo35132v0ar)
fmtsmo3513245.joinVoices([smo35132v0]);
const fmtsmo3608045 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo36080v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36080v0ar = [];
const smo36061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36061'] = smo36061;
smo36061.setAttribute('id', 'smo36061');
smo36080v0ar.push(smo36061);
const smo36062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36062'] = smo36062;
smo36062.setAttribute('id', 'smo36062');
smo36080v0ar.push(smo36062);
const smo36063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36063'] = smo36063;
smo36063.setAttribute('id', 'smo36063');
smo36080v0ar.push(smo36063);
const smo36064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36064'] = smo36064;
smo36064.setAttribute('id', 'smo36064');
smo36080v0ar.push(smo36064);
smo36080v0.addTickables(smo36080v0ar)
fmtsmo3608045.joinVoices([smo36080v0]);
const fmtsmo3705545 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo37055v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37055v0ar = [];
const smo37036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo37036'] = smo37036;
smo37036.setAttribute('id', 'smo37036');
smo37055v0ar.push(smo37036);
const smo37037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo37037'] = smo37037;
smo37037.setAttribute('id', 'smo37037');
smo37055v0ar.push(smo37037);
const smo37038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo37038'] = smo37038;
smo37038.setAttribute('id', 'smo37038');
smo37055v0ar.push(smo37038);
const smo37039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo37039'] = smo37039;
smo37039.setAttribute('id', 'smo37039');
smo37055v0ar.push(smo37039);
smo37055v0.addTickables(smo37055v0ar)
fmtsmo3705545.joinVoices([smo37055v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43825 = smo35113.getStemDirection();
smo35113.setStemDirection(dirsmo43825);
smo35114.setStemDirection(dirsmo43825);
const smo43825 = new VF.Beam([smo35113,smo35114]);
 
// formatting measures in staff group smo37130
fmtsmo3417245.format([smo34172v0,smo35132v0,smo36080v0,smo37055v0], 121);
const stavesmo34172 = new VF.Stave(871, 1040, 135);
stavesmo34172.setAttribute('id', 'stavesmo34172');
stavesmo34172.setBegBarType(VF.Barline.type.NONE);
stavesmo34172.setContext(context);
stavesmo34172.draw();
smo34172v0.draw(context, stavesmo34172);
const stavesmo35132 = new VF.Stave(871, 1165, 135);
stavesmo35132.setAttribute('id', 'stavesmo35132');
stavesmo35132.setBegBarType(VF.Barline.type.NONE);
stavesmo35132.setContext(context);
stavesmo35132.draw();
smo35132v0.draw(context, stavesmo35132);
smo43825.setContext(context);
smo43825.draw();
const stavesmo36080 = new VF.Stave(871, 1253, 135);
stavesmo36080.setAttribute('id', 'stavesmo36080');
stavesmo36080.setBegBarType(VF.Barline.type.NONE);
stavesmo36080.setContext(context);
stavesmo36080.draw();
smo36080v0.draw(context, stavesmo36080);
const stavesmo37055 = new VF.Stave(871, 1366, 135);
stavesmo37055.setAttribute('id', 'stavesmo37055');
stavesmo37055.setBegBarType(VF.Barline.type.NONE);
stavesmo37055.setContext(context);
stavesmo37055.draw();
smo37055v0.draw(context, stavesmo37055);
const fmtsmo3418946 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo34189v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34189v0ar = [];
const smo34173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34173'] = smo34173;
smo34173.setAttribute('id', 'smo34173');
smo34189v0ar.push(smo34173);
smo34189v0.addTickables(smo34189v0ar)
fmtsmo3418946.joinVoices([smo34189v0]);
const fmtsmo3515446 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo35154v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35154v0ar = [];
const smo35133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35133'] = smo35133;
smo35133.setAttribute('id', 'smo35133');
smo35154v0ar.push(smo35133);
const smo35134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35134'] = smo35134;
smo35134.setAttribute('id', 'smo35134');
smo35154v0ar.push(smo35134);
const smo35135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35135'] = smo35135;
smo35135.setAttribute('id', 'smo35135');
smo35154v0ar.push(smo35135);
const smo35136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35136'] = smo35136;
smo35136.setAttribute('id', 'smo35136');
smo35154v0ar.push(smo35136);
const smo35137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35137'] = smo35137;
smo35137.setAttribute('id', 'smo35137');
smo35154v0ar.push(smo35137);
const smo35138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35138'] = smo35138;
smo35138.setAttribute('id', 'smo35138');
smo35154v0ar.push(smo35138);
smo35154v0.addTickables(smo35154v0ar)
fmtsmo3515446.joinVoices([smo35154v0]);
const fmtsmo3610046 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo36100v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36100v0ar = [];
const smo36081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36081'] = smo36081;
smo36081.setAttribute('id', 'smo36081');
smo36100v0ar.push(smo36081);
const smo36082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36082'] = smo36082;
smo36082.setAttribute('id', 'smo36082');
smo36100v0ar.push(smo36082);
const smo36083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36083'] = smo36083;
smo36083.setAttribute('id', 'smo36083');
smo36100v0ar.push(smo36083);
const smo36084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36084'] = smo36084;
smo36084.setAttribute('id', 'smo36084');
smo36100v0ar.push(smo36084);
smo36100v0.addTickables(smo36100v0ar)
fmtsmo3610046.joinVoices([smo36100v0]);
const fmtsmo3707546 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo37075v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37075v0ar = [];
const smo37056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo37056'] = smo37056;
smo37056.setAttribute('id', 'smo37056');
smo37075v0ar.push(smo37056);
const smo37057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo37057'] = smo37057;
smo37057.setAttribute('id', 'smo37057');
smo37075v0ar.push(smo37057);
const smo37058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo37058'] = smo37058;
smo37058.setAttribute('id', 'smo37058');
smo37075v0ar.push(smo37058);
const smo37059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo37059'] = smo37059;
smo37059.setAttribute('id', 'smo37059');
smo37075v0ar.push(smo37059);
smo37075v0.addTickables(smo37075v0ar)
fmtsmo3707546.joinVoices([smo37075v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43834 = smo35133.getStemDirection();
smo35133.setStemDirection(dirsmo43834);
smo35134.setStemDirection(dirsmo43834);
const smo43834 = new VF.Beam([smo35133,smo35134]);
const dirsmo43835 = smo35136.getStemDirection();
smo35136.setStemDirection(dirsmo43835);
smo35137.setStemDirection(dirsmo43835);
const smo43835 = new VF.Beam([smo35136,smo35137]);
 
// formatting measures in staff group smo37130
fmtsmo3418946.format([smo34189v0,smo35154v0,smo36100v0,smo37075v0], 147);
const stavesmo34189 = new VF.Stave(1006, 1040, 161);
stavesmo34189.setAttribute('id', 'stavesmo34189');
stavesmo34189.setBegBarType(VF.Barline.type.NONE);
stavesmo34189.setContext(context);
stavesmo34189.draw();
smo34189v0.draw(context, stavesmo34189);
const stavesmo35154 = new VF.Stave(1006, 1165, 161);
stavesmo35154.setAttribute('id', 'stavesmo35154');
stavesmo35154.setBegBarType(VF.Barline.type.NONE);
stavesmo35154.setContext(context);
stavesmo35154.draw();
smo35154v0.draw(context, stavesmo35154);
smo43834.setContext(context);
smo43834.draw();
smo43835.setContext(context);
smo43835.draw();
const stavesmo36100 = new VF.Stave(1006, 1253, 161);
stavesmo36100.setAttribute('id', 'stavesmo36100');
stavesmo36100.setBegBarType(VF.Barline.type.NONE);
stavesmo36100.setContext(context);
stavesmo36100.draw();
smo36100v0.draw(context, stavesmo36100);
const stavesmo37075 = new VF.Stave(1006, 1366, 161);
stavesmo37075.setAttribute('id', 'stavesmo37075');
stavesmo37075.setBegBarType(VF.Barline.type.NONE);
stavesmo37075.setContext(context);
stavesmo37075.draw();
smo37075v0.draw(context, stavesmo37075);
const fmtsmo3420647 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo34206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34206v0ar = [];
const smo34190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34190'] = smo34190;
smo34190.setAttribute('id', 'smo34190');
smo34206v0ar.push(smo34190);
smo34206v0.addTickables(smo34206v0ar)
fmtsmo3420647.joinVoices([smo34206v0]);
const fmtsmo3517447 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo35174v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35174v0ar = [];
const smo35155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35155'] = smo35155;
smo35155.setAttribute('id', 'smo35155');
smo35174v0ar.push(smo35155);
const smo35156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo35156'] = smo35156;
smo35156.setAttribute('id', 'smo35156');
const smo35157 = new VF.Ornament('scoop');
smo35156.addModifier(smo35157, 0);
smo35174v0ar.push(smo35156);
const smo35158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35158'] = smo35158;
smo35158.setAttribute('id', 'smo35158');
smo35174v0ar.push(smo35158);
smo35174v0.addTickables(smo35174v0ar)
fmtsmo3517447.joinVoices([smo35174v0]);
const fmtsmo3612047 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo36120v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36120v0ar = [];
const smo36101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36101'] = smo36101;
smo36101.setAttribute('id', 'smo36101');
smo36120v0ar.push(smo36101);
const smo36102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36102'] = smo36102;
smo36102.setAttribute('id', 'smo36102');
const smo36103 = new VF.Ornament('scoop');
smo36102.addModifier(smo36103, 0);
smo36120v0ar.push(smo36102);
const smo36104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo36104'] = smo36104;
smo36104.setAttribute('id', 'smo36104');
smo36120v0ar.push(smo36104);
smo36120v0.addTickables(smo36120v0ar)
fmtsmo3612047.joinVoices([smo36120v0]);
const fmtsmo3709447 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo37094v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo37094v0ar = [];
const smo37076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo37076'] = smo37076;
smo37076.setAttribute('id', 'smo37076');
smo37094v0ar.push(smo37076);
const smo37077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo37077'] = smo37077;
smo37077.setAttribute('id', 'smo37077');
smo37094v0ar.push(smo37077);
const smo37078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo37078'] = smo37078;
smo37078.setAttribute('id', 'smo37078');
smo37094v0ar.push(smo37078);
smo37094v0.addTickables(smo37094v0ar)
fmtsmo3709447.joinVoices([smo37094v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3420647.format([smo34206v0,smo35174v0,smo36120v0,smo37094v0], 74);
const stavesmo34206 = new VF.Stave(1167, 1040, 92);
stavesmo34206.setAttribute('id', 'stavesmo34206');
stavesmo34206.setBegBarType(VF.Barline.type.NONE);
stavesmo34206.setEndBarType(5);
stavesmo34206.setContext(context);
stavesmo34206.draw();
smo34206v0.draw(context, stavesmo34206);
const stavesmo35174 = new VF.Stave(1167, 1165, 92);
stavesmo35174.setAttribute('id', 'stavesmo35174');
stavesmo35174.setBegBarType(VF.Barline.type.NONE);
stavesmo35174.setEndBarType(5);
stavesmo35174.setContext(context);
stavesmo35174.draw();
smo35174v0.draw(context, stavesmo35174);
const stavesmo36120 = new VF.Stave(1167, 1253, 92);
stavesmo36120.setAttribute('id', 'stavesmo36120');
stavesmo36120.setBegBarType(VF.Barline.type.NONE);
stavesmo36120.setEndBarType(5);
stavesmo36120.setContext(context);
stavesmo36120.draw();
smo36120v0.draw(context, stavesmo36120);
const stavesmo37094 = new VF.Stave(1167, 1366, 92);
stavesmo37094.setAttribute('id', 'stavesmo37094');
stavesmo37094.setBegBarType(VF.Barline.type.NONE);
stavesmo37094.setEndBarType(5);
stavesmo37094.setContext(context);
stavesmo37094.draw();
smo37094v0.draw(context, stavesmo37094);
const smo34208 = new VF.TextBracket({ start: smo33786, stop: smo33812, text: 'accelerando', position: 1 });
smo34208.setLine(1).setContext(context).draw();
const smo36122 = new VF.StaveTie({ first_note: smo35714, last_note: smo35731, first_indices: [0], last_indices: [0]});
smo36122.setContext(context).draw();
const smo36124 = new VF.StaveTie({ first_note: smo35820, last_note: smo35837, first_indices: [0], last_indices: [0]});
smo36124.setContext(context).draw();
const smo36125 = new VF.StaveTie({ first_note: smo35837, last_note: smo35854, first_indices: [0], last_indices: [0]});
smo36125.setContext(context).draw();
const smo36126 = new VF.StaveTie({ first_note: smo35871, last_note: smo35888, first_indices: [0], last_indices: [0]});
smo36126.setContext(context).draw();
const smo37095 = new VF.StaveTie({ first_note: smo36760, last_note: smo36761, first_indices: [0], last_indices: [0]});
smo37095.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo33739').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33741').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33743').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33745').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33748').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33750').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33768').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33787').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33789').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33809').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33811').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33831').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33833').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33835').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33837').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33839').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33841').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33860').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33882').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33884').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33886').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33888').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33906').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33908').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33910').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33932').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33934').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33936').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33938').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33956').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33958').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33960').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33978').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33980').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33982').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33984').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33986').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34004').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo34006').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo34008').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34026').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo34029').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo34049').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo34051').setAttributeNS('', 'transform', 'translate(0 20)');
}
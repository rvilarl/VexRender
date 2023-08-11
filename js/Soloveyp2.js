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
const fmtsmo6073926 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo60739v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60739v0ar = [];
const smo60711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60711'] = smo60711;
smo60711.setAttribute('id', 'smo60711');
const smo60712 = new VF.Annotation('Со');
smo60712.setAttribute('id', 'smo60712');
smo60712.setFont('Merriweather', 12.1, 'normal');
smo60712.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60711.addModifier(smo60712);
smo60712.addClass('lyric lyric-0');
smo60739v0ar.push(smo60711);
const smo60713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60713'] = smo60713;
smo60713.setAttribute('id', 'smo60713');
const smo60714 = new VF.Annotation('-');
smo60714.setAttribute('id', 'smo60714');
smo60714.setFont('Merriweather', 12.1, 'normal');
smo60714.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60713.addModifier(smo60714);
smo60714.addClass('lyric lyric-0 lyric-hyphen');
smo60739v0ar.push(smo60713);
const smo60715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60715'] = smo60715;
smo60715.setAttribute('id', 'smo60715');
const smo60716 = new VF.Annotation('-');
smo60716.setAttribute('id', 'smo60716');
smo60716.setFont('Merriweather', 12.1, 'normal');
smo60716.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60715.addModifier(smo60716);
smo60716.addClass('lyric lyric-0 lyric-hyphen');
smo60739v0ar.push(smo60715);
const smo60717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo60717'] = smo60717;
smo60717.setAttribute('id', 'smo60717');
const smo607170acc = new VF.Accidental('#');
smo60717.addModifier(smo607170acc, 0);
const smo60718 = new VF.Annotation('-');
smo60718.setAttribute('id', 'smo60718');
smo60718.setFont('Merriweather', 12.1, 'normal');
smo60718.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60717.addModifier(smo60718);
smo60718.addClass('lyric lyric-0 lyric-hyphen');
smo60739v0ar.push(smo60717);
const smo60719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60719'] = smo60719;
smo60719.setAttribute('id', 'smo60719');
smo60739v0ar.push(smo60719);
const smo60720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60720'] = smo60720;
smo60720.setAttribute('id', 'smo60720');
const smo60721 = new VF.Annotation('ло');
smo60721.setAttribute('id', 'smo60721');
smo60721.setFont('Merriweather', 12.1, 'normal');
smo60721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60720.addModifier(smo60721);
smo60721.addClass('lyric lyric-0');
smo60739v0ar.push(smo60720);
const smo60722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60722'] = smo60722;
smo60722.setAttribute('id', 'smo60722');
const smo60723 = new VF.Annotation('-');
smo60723.setAttribute('id', 'smo60723');
smo60723.setFont('Merriweather', 12.1, 'normal');
smo60723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60722.addModifier(smo60723);
smo60723.addClass('lyric lyric-0 lyric-hyphen');
smo60739v0ar.push(smo60722);
smo60739v0.addTickables(smo60739v0ar)
fmtsmo6073926.joinVoices([smo60739v0]);
const fmtsmo6172426 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo61724v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61724v0ar = [];
const smo61705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61705'] = smo61705;
smo61705.setAttribute('id', 'smo61705');
smo61724v0ar.push(smo61705);
const smo61706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61706'] = smo61706;
smo61706.setAttribute('id', 'smo61706');
smo61724v0ar.push(smo61706);
const smo61707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo61707'] = smo61707;
smo61707.setAttribute('id', 'smo61707');
const smo617070acc = new VF.Accidental('#');
smo61707.addModifier(smo617070acc, 0);
smo61724v0ar.push(smo61707);
const smo61708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61708'] = smo61708;
smo61708.setAttribute('id', 'smo61708');
smo61724v0ar.push(smo61708);
smo61724v0.addTickables(smo61724v0ar)
fmtsmo6172426.joinVoices([smo61724v0]);
const fmtsmo6270326 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo62703v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62703v0ar = [];
const smo62687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62687'] = smo62687;
smo62687.setAttribute('id', 'smo62687');
smo62703v0ar.push(smo62687);
smo62703v0.addTickables(smo62703v0ar)
fmtsmo6270326.joinVoices([smo62703v0]);
const fmtsmo6365726 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo63657v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63657v0ar = [];
const smo63640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63640'] = smo63640;
smo63640.setAttribute('id', 'smo63640');
smo63657v0ar.push(smo63640);
const smo63641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63641'] = smo63641;
smo63641.setAttribute('id', 'smo63641');
smo63657v0ar.push(smo63641);
smo63657v0.addTickables(smo63657v0ar)
fmtsmo6365726.joinVoices([smo63657v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70612 = smo60713.getStemDirection();
smo60713.setStemDirection(dirsmo70612);
smo60715.setStemDirection(dirsmo70612);
smo60717.setStemDirection(dirsmo70612);
smo60719.setStemDirection(dirsmo70612);
const smo70612 = new VF.Beam([smo60713,smo60715,smo60717,smo60719]);
 
// formatting measures in staff group smo64103
fmtsmo6073926.format([smo60739v0,smo61724v0,smo62703v0,smo63657v0], 249);
const stavesmo60739 = new VF.Stave(55, 219, 323);
stavesmo60739.setAttribute('id', 'stavesmo60739');
stavesmo60739.setBegBarType(1);
stavesmo60739.addClef('treble');
const keysmo60739 = new VF.KeySignature('F');
keysmo60739.addToStave(stavesmo60739);
stavesmo60739.setContext(context);
stavesmo60739.draw();
smo60739v0.draw(context, stavesmo60739);
smo70612.setContext(context);
smo70612.draw();
const stavesmo61724 = new VF.Stave(55, 311, 323);
stavesmo61724.setAttribute('id', 'stavesmo61724');
stavesmo61724.setBegBarType(1);
stavesmo61724.addClef('treble');
const keysmo61724 = new VF.KeySignature('F');
keysmo61724.addToStave(stavesmo61724);
stavesmo61724.setContext(context);
stavesmo61724.draw();
smo61724v0.draw(context, stavesmo61724);
const stavesmo62703 = new VF.Stave(55, 389, 323);
stavesmo62703.setAttribute('id', 'stavesmo62703');
stavesmo62703.setBegBarType(1);
stavesmo62703.addClef('treble');
const keysmo62703 = new VF.KeySignature('F');
keysmo62703.addToStave(stavesmo62703);
stavesmo62703.setContext(context);
stavesmo62703.draw();
smo62703v0.draw(context, stavesmo62703);
const stavesmo63657 = new VF.Stave(55, 473, 323);
stavesmo63657.setAttribute('id', 'stavesmo63657');
stavesmo63657.setBegBarType(1);
stavesmo63657.addClef('bass');
const keysmo63657 = new VF.KeySignature('F');
keysmo63657.addToStave(stavesmo63657);
stavesmo63657.setContext(context);
stavesmo63657.draw();
smo63657v0.draw(context, stavesmo63657);
const leftsmo64103stavesmo607393 = new VF.StaveConnector(stavesmo60739, stavesmo63657).setType(1);
leftsmo64103stavesmo607393.setContext(context).draw();
const fmtsmo6075827 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo60758v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60758v0ar = [];
const smo60740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60740'] = smo60740;
smo60740.setAttribute('id', 'smo60740');
const smo60741 = new VF.Annotation('вей');
smo60741.setAttribute('id', 'smo60741');
smo60741.setFont('Merriweather', 12.1, 'normal');
smo60741.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60740.addModifier(smo60741);
smo60741.addClass('lyric lyric-0');
smo60758v0ar.push(smo60740);
const smo60742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60742'] = smo60742;
smo60742.setAttribute('id', 'smo60742');
smo60758v0ar.push(smo60742);
smo60758v0.addTickables(smo60758v0ar)
fmtsmo6075827.joinVoices([smo60758v0]);
const fmtsmo6174427 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo61744v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61744v0ar = [];
const smo61725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61725'] = smo61725;
smo61725.setAttribute('id', 'smo61725');
smo61744v0ar.push(smo61725);
const smo61726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61726'] = smo61726;
smo61726.setAttribute('id', 'smo61726');
smo61744v0ar.push(smo61726);
const smo61727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61727'] = smo61727;
smo61727.setAttribute('id', 'smo61727');
smo61744v0ar.push(smo61727);
const smo61728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61728'] = smo61728;
smo61728.setAttribute('id', 'smo61728');
smo61744v0ar.push(smo61728);
smo61744v0.addTickables(smo61744v0ar)
fmtsmo6174427.joinVoices([smo61744v0]);
const fmtsmo6272027 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo62720v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62720v0ar = [];
const smo62704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62704'] = smo62704;
smo62704.setAttribute('id', 'smo62704');
smo62720v0ar.push(smo62704);
smo62720v0.addTickables(smo62720v0ar)
fmtsmo6272027.joinVoices([smo62720v0]);
const fmtsmo6367527 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo63675v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63675v0ar = [];
const smo63658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63658'] = smo63658;
smo63658.setAttribute('id', 'smo63658');
smo63675v0ar.push(smo63658);
const smo63659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63659'] = smo63659;
smo63659.setAttribute('id', 'smo63659');
smo63675v0ar.push(smo63659);
smo63675v0.addTickables(smo63675v0ar)
fmtsmo6367527.joinVoices([smo63675v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6075827.format([smo60758v0,smo61744v0,smo62720v0,smo63675v0], 147);
const stavesmo60758 = new VF.Stave(378, 219, 161);
stavesmo60758.setAttribute('id', 'stavesmo60758');
stavesmo60758.setBegBarType(VF.Barline.type.NONE);
stavesmo60758.setContext(context);
stavesmo60758.draw();
smo60758v0.draw(context, stavesmo60758);
const stavesmo61744 = new VF.Stave(378, 311, 161);
stavesmo61744.setAttribute('id', 'stavesmo61744');
stavesmo61744.setBegBarType(VF.Barline.type.NONE);
stavesmo61744.setContext(context);
stavesmo61744.draw();
smo61744v0.draw(context, stavesmo61744);
const stavesmo62720 = new VF.Stave(378, 389, 161);
stavesmo62720.setAttribute('id', 'stavesmo62720');
stavesmo62720.setBegBarType(VF.Barline.type.NONE);
stavesmo62720.setContext(context);
stavesmo62720.draw();
smo62720v0.draw(context, stavesmo62720);
const stavesmo63675 = new VF.Stave(378, 473, 161);
stavesmo63675.setAttribute('id', 'stavesmo63675');
stavesmo63675.setBegBarType(VF.Barline.type.NONE);
stavesmo63675.setContext(context);
stavesmo63675.draw();
smo63675v0.draw(context, stavesmo63675);
const fmtsmo6078028 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo60780v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60780v0ar = [];
const smo60759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60759'] = smo60759;
smo60759.setAttribute('id', 'smo60759');
const smo60760 = new VF.Annotation('цо');
smo60760.setAttribute('id', 'smo60760');
smo60760.setFont('Merriweather', 12.1, 'normal');
smo60760.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60759.addModifier(smo60760);
smo60760.addClass('lyric lyric-0 lyric-hyphen');
smo60780v0ar.push(smo60759);
const smo60761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60761'] = smo60761;
smo60761.setAttribute('id', 'smo60761');
const smo60762 = new VF.Annotation('ло');
smo60762.setAttribute('id', 'smo60762');
smo60762.setFont('Merriweather', 12.1, 'normal');
smo60762.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60761.addModifier(smo60762);
smo60762.addClass('lyric lyric-0');
smo60780v0ar.push(smo60761);
const smo60763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo60763'] = smo60763;
smo60763.setAttribute('id', 'smo60763');
const smo60764 = new VF.Annotation('-');
smo60764.setAttribute('id', 'smo60764');
smo60764.setFont('Merriweather', 12.1, 'normal');
smo60764.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60763.addModifier(smo60764);
smo60764.addClass('lyric lyric-0 lyric-hyphen');
smo60780v0ar.push(smo60763);
smo60780v0.addTickables(smo60780v0ar)
fmtsmo6078028.joinVoices([smo60780v0]);
const fmtsmo6176428 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo61764v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61764v0ar = [];
const smo61745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61745'] = smo61745;
smo61745.setAttribute('id', 'smo61745');
smo61764v0ar.push(smo61745);
const smo61746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61746'] = smo61746;
smo61746.setAttribute('id', 'smo61746');
smo61764v0ar.push(smo61746);
const smo61747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61747'] = smo61747;
smo61747.setAttribute('id', 'smo61747');
smo61764v0ar.push(smo61747);
const smo61748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61748'] = smo61748;
smo61748.setAttribute('id', 'smo61748');
smo61764v0ar.push(smo61748);
smo61764v0.addTickables(smo61764v0ar)
fmtsmo6176428.joinVoices([smo61764v0]);
const fmtsmo6273828 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo62738v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62738v0ar = [];
const smo62721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62721'] = smo62721;
smo62721.setAttribute('id', 'smo62721');
smo62738v0ar.push(smo62721);
const smo62722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62722'] = smo62722;
smo62722.setAttribute('id', 'smo62722');
smo62738v0ar.push(smo62722);
smo62738v0.addTickables(smo62738v0ar)
fmtsmo6273828.joinVoices([smo62738v0]);
const fmtsmo6369328 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo63693v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63693v0ar = [];
const smo63676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63676'] = smo63676;
smo63676.setAttribute('id', 'smo63676');
smo63693v0ar.push(smo63676);
const smo63677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63677'] = smo63677;
smo63677.setAttribute('id', 'smo63677');
smo63693v0ar.push(smo63677);
smo63693v0.addTickables(smo63693v0ar)
fmtsmo6369328.joinVoices([smo63693v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6078028.format([smo60780v0,smo61764v0,smo62738v0,smo63693v0], 146);
const stavesmo60780 = new VF.Stave(539, 219, 160);
stavesmo60780.setAttribute('id', 'stavesmo60780');
stavesmo60780.setBegBarType(VF.Barline.type.NONE);
stavesmo60780.setContext(context);
stavesmo60780.draw();
smo60780v0.draw(context, stavesmo60780);
const stavesmo61764 = new VF.Stave(539, 311, 160);
stavesmo61764.setAttribute('id', 'stavesmo61764');
stavesmo61764.setBegBarType(VF.Barline.type.NONE);
stavesmo61764.setContext(context);
stavesmo61764.draw();
smo61764v0.draw(context, stavesmo61764);
const stavesmo62738 = new VF.Stave(539, 389, 160);
stavesmo62738.setAttribute('id', 'stavesmo62738');
stavesmo62738.setBegBarType(VF.Barline.type.NONE);
stavesmo62738.setContext(context);
stavesmo62738.draw();
smo62738v0.draw(context, stavesmo62738);
const stavesmo63693 = new VF.Stave(539, 473, 160);
stavesmo63693.setAttribute('id', 'stavesmo63693');
stavesmo63693.setBegBarType(VF.Barline.type.NONE);
stavesmo63693.setContext(context);
stavesmo63693.draw();
smo63693v0.draw(context, stavesmo63693);
const fmtsmo6080229 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo60802v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60802v0ar = [];
const smo60781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60781'] = smo60781;
smo60781.setAttribute('id', 'smo60781');
const smo60782 = new VF.Annotation('си');
smo60782.setAttribute('id', 'smo60782');
smo60782.setFont('Merriweather', 12.1, 'normal');
smo60782.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60781.addModifier(smo60782);
smo60782.addClass('lyric lyric-0 lyric-hyphen');
smo60802v0ar.push(smo60781);
const smo60783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60783'] = smo60783;
smo60783.setAttribute('id', 'smo60783');
const smo60784 = new VF.Annotation('стый');
smo60784.setAttribute('id', 'smo60784');
smo60784.setFont('Merriweather', 12.1, 'normal');
smo60784.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60783.addModifier(smo60784);
smo60784.addClass('lyric lyric-0');
smo60802v0ar.push(smo60783);
const smo60785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo60785'] = smo60785;
smo60785.setAttribute('id', 'smo60785');
const smo60786 = new VF.Annotation('-');
smo60786.setAttribute('id', 'smo60786');
smo60786.setFont('Merriweather', 12.1, 'normal');
smo60786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60785.addModifier(smo60786);
smo60786.addClass('lyric lyric-0 lyric-hyphen');
smo60802v0ar.push(smo60785);
smo60802v0.addTickables(smo60802v0ar)
fmtsmo6080229.joinVoices([smo60802v0]);
const fmtsmo6178429 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo61784v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61784v0ar = [];
const smo61765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61765'] = smo61765;
smo61765.setAttribute('id', 'smo61765');
smo61784v0ar.push(smo61765);
const smo61766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61766'] = smo61766;
smo61766.setAttribute('id', 'smo61766');
smo61784v0ar.push(smo61766);
const smo61767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61767'] = smo61767;
smo61767.setAttribute('id', 'smo61767');
smo61784v0ar.push(smo61767);
const smo61768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61768'] = smo61768;
smo61768.setAttribute('id', 'smo61768');
smo61784v0ar.push(smo61768);
smo61784v0.addTickables(smo61784v0ar)
fmtsmo6178429.joinVoices([smo61784v0]);
const fmtsmo6275629 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo62756v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62756v0ar = [];
const smo62739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62739'] = smo62739;
smo62739.setAttribute('id', 'smo62739');
smo62756v0ar.push(smo62739);
const smo62740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62740'] = smo62740;
smo62740.setAttribute('id', 'smo62740');
smo62756v0ar.push(smo62740);
smo62756v0.addTickables(smo62756v0ar)
fmtsmo6275629.joinVoices([smo62756v0]);
const fmtsmo6371129 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo63711v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63711v0ar = [];
const smo63694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63694'] = smo63694;
smo63694.setAttribute('id', 'smo63694');
smo63711v0ar.push(smo63694);
const smo63695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63695'] = smo63695;
smo63695.setAttribute('id', 'smo63695');
smo63711v0ar.push(smo63695);
smo63711v0.addTickables(smo63711v0ar)
fmtsmo6371129.joinVoices([smo63711v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6080229.format([smo60802v0,smo61784v0,smo62756v0,smo63711v0], 174);
const stavesmo60802 = new VF.Stave(699, 219, 188);
stavesmo60802.setAttribute('id', 'stavesmo60802');
stavesmo60802.setBegBarType(VF.Barline.type.NONE);
stavesmo60802.setContext(context);
stavesmo60802.draw();
smo60802v0.draw(context, stavesmo60802);
const stavesmo61784 = new VF.Stave(699, 311, 188);
stavesmo61784.setAttribute('id', 'stavesmo61784');
stavesmo61784.setBegBarType(VF.Barline.type.NONE);
stavesmo61784.setContext(context);
stavesmo61784.draw();
smo61784v0.draw(context, stavesmo61784);
const stavesmo62756 = new VF.Stave(699, 389, 188);
stavesmo62756.setAttribute('id', 'stavesmo62756');
stavesmo62756.setBegBarType(VF.Barline.type.NONE);
stavesmo62756.setContext(context);
stavesmo62756.draw();
smo62756v0.draw(context, stavesmo62756);
const stavesmo63711 = new VF.Stave(699, 473, 188);
stavesmo63711.setAttribute('id', 'stavesmo63711');
stavesmo63711.setBegBarType(VF.Barline.type.NONE);
stavesmo63711.setContext(context);
stavesmo63711.draw();
smo63711v0.draw(context, stavesmo63711);
const fmtsmo6083130 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo60831v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60831v0ar = [];
const smo60803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60803'] = smo60803;
smo60803.setAttribute('id', 'smo60803');
const smo60804 = new VF.Annotation('со');
smo60804.setAttribute('id', 'smo60804');
smo60804.setFont('Merriweather', 12.1, 'normal');
smo60804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60803.addModifier(smo60804);
smo60804.addClass('lyric lyric-0');
smo60831v0ar.push(smo60803);
const smo60805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
noteHash['smo60805'] = smo60805;
smo60805.setAttribute('id', 'smo60805');
const smo60806 = new VF.Annotation('-');
smo60806.setAttribute('id', 'smo60806');
smo60806.setFont('Merriweather', 12.1, 'normal');
smo60806.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60805.addModifier(smo60806);
smo60806.addClass('lyric lyric-0 lyric-hyphen');
smo60831v0ar.push(smo60805);
const smo60807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo60807'] = smo60807;
smo60807.setAttribute('id', 'smo60807');
const smo60808 = new VF.Annotation('-');
smo60808.setAttribute('id', 'smo60808');
smo60808.setFont('Merriweather', 12.1, 'normal');
smo60808.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60807.addModifier(smo60808);
smo60808.addClass('lyric lyric-0 lyric-hyphen');
smo60831v0ar.push(smo60807);
const smo60809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo60809'] = smo60809;
smo60809.setAttribute('id', 'smo60809');
const smo608090acc = new VF.Accidental('#');
smo60809.addModifier(smo608090acc, 0);
const smo60810 = new VF.Annotation('-');
smo60810.setAttribute('id', 'smo60810');
smo60810.setFont('Merriweather', 12.1, 'normal');
smo60810.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60809.addModifier(smo60810);
smo60810.addClass('lyric lyric-0 lyric-hyphen');
smo60831v0ar.push(smo60809);
const smo60811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60811'] = smo60811;
smo60811.setAttribute('id', 'smo60811');
const smo60812 = new VF.Annotation('ло');
smo60812.setAttribute('id', 'smo60812');
smo60812.setFont('Merriweather', 12.1, 'normal');
smo60812.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60811.addModifier(smo60812);
smo60812.addClass('lyric lyric-0');
smo60831v0ar.push(smo60811);
const smo60813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60813'] = smo60813;
smo60813.setAttribute('id', 'smo60813');
const smo60814 = new VF.Annotation('-');
smo60814.setAttribute('id', 'smo60814');
smo60814.setFont('Merriweather', 12.1, 'normal');
smo60814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60813.addModifier(smo60814);
smo60814.addClass('lyric lyric-0 lyric-hyphen');
smo60831v0ar.push(smo60813);
smo60831v0.addTickables(smo60831v0ar)
fmtsmo6083130.joinVoices([smo60831v0]);
const fmtsmo6180430 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo61804v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61804v0ar = [];
const smo61785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61785'] = smo61785;
smo61785.setAttribute('id', 'smo61785');
smo61804v0ar.push(smo61785);
const smo61786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61786'] = smo61786;
smo61786.setAttribute('id', 'smo61786');
smo61804v0ar.push(smo61786);
const smo61787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61787'] = smo61787;
smo61787.setAttribute('id', 'smo61787');
smo61804v0ar.push(smo61787);
const smo61788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61788'] = smo61788;
smo61788.setAttribute('id', 'smo61788');
smo61804v0ar.push(smo61788);
smo61804v0.addTickables(smo61804v0ar)
fmtsmo6180430.joinVoices([smo61804v0]);
const fmtsmo6277430 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo62774v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62774v0ar = [];
const smo62757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62757'] = smo62757;
smo62757.setAttribute('id', 'smo62757');
smo62774v0ar.push(smo62757);
const smo62758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62758'] = smo62758;
smo62758.setAttribute('id', 'smo62758');
smo62774v0ar.push(smo62758);
smo62774v0.addTickables(smo62774v0ar)
fmtsmo6277430.joinVoices([smo62774v0]);
const fmtsmo6372930 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo63729v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63729v0ar = [];
const smo63712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63712'] = smo63712;
smo63712.setAttribute('id', 'smo63712');
smo63729v0ar.push(smo63712);
const smo63713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63713'] = smo63713;
smo63713.setAttribute('id', 'smo63713');
smo63729v0ar.push(smo63713);
smo63729v0.addTickables(smo63729v0ar)
fmtsmo6372930.joinVoices([smo63729v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70645 = smo60805.getStemDirection();
smo60805.setStemDirection(dirsmo70645);
smo60807.setStemDirection(dirsmo70645);
smo60809.setStemDirection(dirsmo70645);
const smo70645 = new VF.Beam([smo60805,smo60807,smo60809]);
const smo60815 = new VF.Tuplet([smo60805,smo60807,smo60809], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo64103
fmtsmo6083130.format([smo60831v0,smo61804v0,smo62774v0,smo63729v0], 217);
const stavesmo60831 = new VF.Stave(887, 219, 231);
stavesmo60831.setAttribute('id', 'stavesmo60831');
stavesmo60831.setBegBarType(VF.Barline.type.NONE);
stavesmo60831.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo60831.setContext(context);
stavesmo60831.draw();
smo60831v0.draw(context, stavesmo60831);
smo70645.setContext(context);
smo70645.draw();
smo60815.setContext(context).draw();
const stavesmo61804 = new VF.Stave(887, 311, 231);
stavesmo61804.setAttribute('id', 'stavesmo61804');
stavesmo61804.setBegBarType(VF.Barline.type.NONE);
stavesmo61804.setContext(context);
stavesmo61804.draw();
smo61804v0.draw(context, stavesmo61804);
const stavesmo62774 = new VF.Stave(887, 389, 231);
stavesmo62774.setAttribute('id', 'stavesmo62774');
stavesmo62774.setBegBarType(VF.Barline.type.NONE);
stavesmo62774.setContext(context);
stavesmo62774.draw();
smo62774v0.draw(context, stavesmo62774);
const stavesmo63729 = new VF.Stave(887, 473, 231);
stavesmo63729.setAttribute('id', 'stavesmo63729');
stavesmo63729.setBegBarType(VF.Barline.type.NONE);
stavesmo63729.setContext(context);
stavesmo63729.draw();
smo63729v0.draw(context, stavesmo63729);
const fmtsmo6085031 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo60850v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60850v0ar = [];
const smo60832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60832'] = smo60832;
smo60832.setAttribute('id', 'smo60832');
const smo60833 = new VF.Annotation('вей');
smo60833.setAttribute('id', 'smo60833');
smo60833.setFont('Merriweather', 12.1, 'normal');
smo60833.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60832.addModifier(smo60833);
smo60833.addClass('lyric lyric-0');
smo60850v0ar.push(smo60832);
const smo60834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60834'] = smo60834;
smo60834.setAttribute('id', 'smo60834');
smo60850v0ar.push(smo60834);
smo60850v0.addTickables(smo60850v0ar)
fmtsmo6085031.joinVoices([smo60850v0]);
const fmtsmo6182531 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo61825v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61825v0ar = [];
const smo61805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61805'] = smo61805;
smo61805.setAttribute('id', 'smo61805');
smo61825v0ar.push(smo61805);
const smo61806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo61806'] = smo61806;
smo61806.setAttribute('id', 'smo61806');
smo61825v0ar.push(smo61806);
const smo61807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61807'] = smo61807;
smo61807.setAttribute('id', 'smo61807');
smo61825v0ar.push(smo61807);
const smo61808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61808'] = smo61808;
smo61808.setAttribute('id', 'smo61808');
smo61825v0ar.push(smo61808);
const smo61809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61809'] = smo61809;
smo61809.setAttribute('id', 'smo61809');
smo61825v0ar.push(smo61809);
smo61825v0.addTickables(smo61825v0ar)
fmtsmo6182531.joinVoices([smo61825v0]);
const fmtsmo6279231 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo62792v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62792v0ar = [];
const smo62775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62775'] = smo62775;
smo62775.setAttribute('id', 'smo62775');
smo62792v0ar.push(smo62775);
const smo62776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62776'] = smo62776;
smo62776.setAttribute('id', 'smo62776');
smo62792v0ar.push(smo62776);
smo62792v0.addTickables(smo62792v0ar)
fmtsmo6279231.joinVoices([smo62792v0]);
const fmtsmo6375131 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo63751v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63751v0ar = [];
const smo63730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63730'] = smo63730;
smo63730.setAttribute('id', 'smo63730');
smo63751v0ar.push(smo63730);
const smo63731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63731'] = smo63731;
smo63731.setAttribute('id', 'smo63731');
smo63751v0ar.push(smo63731);
const smo63732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63732'] = smo63732;
smo63732.setAttribute('id', 'smo63732');
smo63751v0ar.push(smo63732);
const smo63733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63733'] = smo63733;
smo63733.setAttribute('id', 'smo63733');
smo63751v0ar.push(smo63733);
const smo63734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63734'] = smo63734;
smo63734.setAttribute('id', 'smo63734');
smo63751v0ar.push(smo63734);
const smo63735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63735'] = smo63735;
smo63735.setAttribute('id', 'smo63735');
smo63751v0ar.push(smo63735);
smo63751v0.addTickables(smo63751v0ar)
fmtsmo6375131.joinVoices([smo63751v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70656 = smo61806.getStemDirection();
smo61806.setStemDirection(dirsmo70656);
smo61807.setStemDirection(dirsmo70656);
const smo70656 = new VF.Beam([smo61806,smo61807]);
const dirsmo70657 = smo61808.getStemDirection();
smo61808.setStemDirection(dirsmo70657);
smo61809.setStemDirection(dirsmo70657);
const smo70657 = new VF.Beam([smo61808,smo61809]);
const dirsmo70662 = smo63730.getStemDirection();
smo63730.setStemDirection(dirsmo70662);
smo63731.setStemDirection(dirsmo70662);
const smo70662 = new VF.Beam([smo63730,smo63731]);
const dirsmo70663 = smo63732.getStemDirection();
smo63732.setStemDirection(dirsmo70663);
smo63733.setStemDirection(dirsmo70663);
const smo70663 = new VF.Beam([smo63732,smo63733]);
 
// formatting measures in staff group smo64103
fmtsmo6085031.format([smo60850v0,smo61825v0,smo62792v0,smo63751v0], 245);
const stavesmo60850 = new VF.Stave(1118, 219, 259);
stavesmo60850.setAttribute('id', 'stavesmo60850');
stavesmo60850.setBegBarType(VF.Barline.type.NONE);
stavesmo60850.setContext(context);
stavesmo60850.draw();
smo60850v0.draw(context, stavesmo60850);
const stavesmo61825 = new VF.Stave(1118, 311, 259);
stavesmo61825.setAttribute('id', 'stavesmo61825');
stavesmo61825.setBegBarType(VF.Barline.type.NONE);
stavesmo61825.setContext(context);
stavesmo61825.draw();
smo61825v0.draw(context, stavesmo61825);
smo70656.setContext(context);
smo70656.draw();
smo70657.setContext(context);
smo70657.draw();
const stavesmo62792 = new VF.Stave(1118, 389, 259);
stavesmo62792.setAttribute('id', 'stavesmo62792');
stavesmo62792.setBegBarType(VF.Barline.type.NONE);
stavesmo62792.setContext(context);
stavesmo62792.draw();
smo62792v0.draw(context, stavesmo62792);
const stavesmo63751 = new VF.Stave(1118, 473, 259);
stavesmo63751.setAttribute('id', 'stavesmo63751');
stavesmo63751.setBegBarType(VF.Barline.type.NONE);
stavesmo63751.setContext(context);
stavesmo63751.draw();
smo63751v0.draw(context, stavesmo63751);
smo70662.setContext(context);
smo70662.draw();
smo70663.setContext(context);
smo70663.draw();
const rightsmo64103stavesmo608503 = new VF.StaveConnector(stavesmo60850, stavesmo63751).setType(0);
rightsmo64103stavesmo608503.setContext(context).draw();
const fmtsmo6087732 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo60877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60877v0ar = [];
const smo60851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60851'] = smo60851;
smo60851.setAttribute('id', 'smo60851');
const smo60853 = new VF.Ornament('mordent');
smo60851.addModifier(smo60853, 0);
const smo60852 = new VF.Annotation('Со');
smo60852.setAttribute('id', 'smo60852');
smo60852.setFont('Merriweather', 12.1, 'normal');
smo60852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60851.addModifier(smo60852);
smo60852.addClass('lyric lyric-0');
smo60877v0ar.push(smo60851);
const smo60854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60854'] = smo60854;
smo60854.setAttribute('id', 'smo60854');
const smo60855 = new VF.Annotation('-');
smo60855.setAttribute('id', 'smo60855');
smo60855.setFont('Merriweather', 12.1, 'normal');
smo60855.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60854.addModifier(smo60855);
smo60855.addClass('lyric lyric-0 lyric-hyphen');
smo60877v0ar.push(smo60854);
const smo60856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60856'] = smo60856;
smo60856.setAttribute('id', 'smo60856');
const smo60857 = new VF.Annotation('-');
smo60857.setAttribute('id', 'smo60857');
smo60857.setFont('Merriweather', 12.1, 'normal');
smo60857.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60856.addModifier(smo60857);
smo60857.addClass('lyric lyric-0 lyric-hyphen');
smo60877v0ar.push(smo60856);
const smo60858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60858'] = smo60858;
smo60858.setAttribute('id', 'smo60858');
const smo60859 = new VF.Annotation('ло');
smo60859.setAttribute('id', 'smo60859');
smo60859.setFont('Merriweather', 12.1, 'normal');
smo60859.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60858.addModifier(smo60859);
smo60859.addClass('lyric lyric-0');
smo60877v0ar.push(smo60858);
const smo60860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60860'] = smo60860;
smo60860.setAttribute('id', 'smo60860');
const smo60861 = new VF.Annotation('-');
smo60861.setAttribute('id', 'smo60861');
smo60861.setFont('Merriweather', 12.1, 'normal');
smo60861.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60860.addModifier(smo60861);
smo60861.addClass('lyric lyric-0 lyric-hyphen');
smo60877v0ar.push(smo60860);
smo60877v0.addTickables(smo60877v0ar)
fmtsmo6087732.joinVoices([smo60877v0]);
const fmtsmo6184732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo61847v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61847v0ar = [];
const smo61826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61826'] = smo61826;
smo61826.setAttribute('id', 'smo61826');
smo61847v0ar.push(smo61826);
const smo61827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61827'] = smo61827;
smo61827.setAttribute('id', 'smo61827');
const  smo71490 = new VF.Articulation('ao').setPosition(3);
smo61827.addModifier(smo71490, 0);
smo61847v0ar.push(smo61827);
const smo61829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61829'] = smo61829;
smo61829.setAttribute('id', 'smo61829');
smo61847v0ar.push(smo61829);
const smo61830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61830'] = smo61830;
smo61830.setAttribute('id', 'smo61830');
const  smo71491 = new VF.Articulation('ao').setPosition(3);
smo61830.addModifier(smo71491, 0);
smo61847v0ar.push(smo61830);
smo61847v0.addTickables(smo61847v0ar)
fmtsmo6184732.joinVoices([smo61847v0]);
const fmtsmo6280932 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo62809v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62809v0ar = [];
const smo62793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62793'] = smo62793;
smo62793.setAttribute('id', 'smo62793');
smo62809v0ar.push(smo62793);
smo62809v0.addTickables(smo62809v0ar)
fmtsmo6280932.joinVoices([smo62809v0]);
const fmtsmo6377332 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo63773v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63773v0ar = [];
const smo63752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63752'] = smo63752;
smo63752.setAttribute('id', 'smo63752');
const  smo71492 = new VF.Articulation('ao').setPosition(3);
smo63752.addModifier(smo71492, 0);
smo63773v0ar.push(smo63752);
const smo63754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63754'] = smo63754;
smo63754.setAttribute('id', 'smo63754');
smo63773v0ar.push(smo63754);
const smo63755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo63755'] = smo63755;
smo63755.setAttribute('id', 'smo63755');
const  smo71493 = new VF.Articulation('ao').setPosition(3);
smo63755.addModifier(smo71493, 0);
smo63773v0ar.push(smo63755);
const smo63757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63757'] = smo63757;
smo63757.setAttribute('id', 'smo63757');
smo63773v0ar.push(smo63757);
smo63773v0.addTickables(smo63773v0ar)
fmtsmo6377332.joinVoices([smo63773v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70676 = smo60854.getStemDirection();
smo60854.setStemDirection(dirsmo70676);
smo60856.setStemDirection(dirsmo70676);
const smo70676 = new VF.Beam([smo60854,smo60856]);
 
// formatting measures in staff group smo64103
fmtsmo6087732.format([smo60877v0,smo61847v0,smo62809v0,smo63773v0], 173);
const stavesmo60877 = new VF.Stave(55, 627, 248);
stavesmo60877.setAttribute('id', 'stavesmo60877');
stavesmo60877.setBegBarType(1);
stavesmo60877.addClef('treble');
const keysmo60877 = new VF.KeySignature('F');
keysmo60877.addToStave(stavesmo60877);
stavesmo60877.setContext(context);
stavesmo60877.draw();
smo60877v0.draw(context, stavesmo60877);
smo70676.setContext(context);
smo70676.draw();
const stavesmo61847 = new VF.Stave(55, 730, 248);
stavesmo61847.setAttribute('id', 'stavesmo61847');
stavesmo61847.setBegBarType(1);
stavesmo61847.addClef('treble');
const keysmo61847 = new VF.KeySignature('F');
keysmo61847.addToStave(stavesmo61847);
stavesmo61847.setContext(context);
stavesmo61847.draw();
smo61847v0.draw(context, stavesmo61847);
const stavesmo62809 = new VF.Stave(55, 813, 248);
stavesmo62809.setAttribute('id', 'stavesmo62809');
stavesmo62809.setBegBarType(1);
stavesmo62809.addClef('treble');
const keysmo62809 = new VF.KeySignature('F');
keysmo62809.addToStave(stavesmo62809);
stavesmo62809.setContext(context);
stavesmo62809.draw();
smo62809v0.draw(context, stavesmo62809);
const stavesmo63773 = new VF.Stave(55, 922, 248);
stavesmo63773.setAttribute('id', 'stavesmo63773');
stavesmo63773.setBegBarType(1);
stavesmo63773.addClef('bass');
const keysmo63773 = new VF.KeySignature('F');
keysmo63773.addToStave(stavesmo63773);
stavesmo63773.setContext(context);
stavesmo63773.draw();
smo63773v0.draw(context, stavesmo63773);
const leftsmo64103stavesmo608773 = new VF.StaveConnector(stavesmo60877, stavesmo63773).setType(1);
leftsmo64103stavesmo608773.setContext(context).draw();
const fmtsmo6090033 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo60900v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60900v0ar = [];
const smo60878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60878'] = smo60878;
smo60878.setAttribute('id', 'smo60878');
const smo60879 = new VF.Annotation('вей');
smo60879.setAttribute('id', 'smo60879');
smo60879.setFont('Merriweather', 12.1, 'normal');
smo60879.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60878.addModifier(smo60879);
smo60879.addClass('lyric lyric-0');
smo60900v0ar.push(smo60878);
const smo60880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo60880'] = smo60880;
smo60880.setAttribute('id', 'smo60880');
const smo60881 = new VF.Annotation('-');
smo60881.setAttribute('id', 'smo60881');
smo60881.setFont('Merriweather', 12.1, 'normal');
smo60881.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60880.addModifier(smo60881);
smo60881.addClass('lyric lyric-0 lyric-hyphen');
smo60900v0ar.push(smo60880);
const smo60882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo60882'] = smo60882;
smo60882.setAttribute('id', 'smo60882');
const smo60883 = new VF.Annotation('-');
smo60883.setAttribute('id', 'smo60883');
smo60883.setFont('Merriweather', 12.1, 'normal');
smo60883.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60882.addModifier(smo60883);
smo60883.addClass('lyric lyric-0 lyric-hyphen');
smo60900v0ar.push(smo60882);
const smo60884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60884'] = smo60884;
smo60884.setAttribute('id', 'smo60884');
smo60900v0ar.push(smo60884);
smo60900v0.addTickables(smo60900v0ar)
fmtsmo6090033.joinVoices([smo60900v0]);
const fmtsmo6186733 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo61867v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61867v0ar = [];
const smo61848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61848'] = smo61848;
smo61848.setAttribute('id', 'smo61848');
smo61867v0ar.push(smo61848);
const smo61849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61849'] = smo61849;
smo61849.setAttribute('id', 'smo61849');
smo61867v0ar.push(smo61849);
const smo61850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61850'] = smo61850;
smo61850.setAttribute('id', 'smo61850');
smo61867v0ar.push(smo61850);
const smo61851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61851'] = smo61851;
smo61851.setAttribute('id', 'smo61851');
smo61867v0ar.push(smo61851);
smo61867v0.addTickables(smo61867v0ar)
fmtsmo6186733.joinVoices([smo61867v0]);
const fmtsmo6282633 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo62826v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62826v0ar = [];
const smo62810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62810'] = smo62810;
smo62810.setAttribute('id', 'smo62810');
smo62826v0ar.push(smo62810);
smo62826v0.addTickables(smo62826v0ar)
fmtsmo6282633.joinVoices([smo62826v0]);
const fmtsmo6379333 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo63793v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63793v0ar = [];
const smo63774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63774'] = smo63774;
smo63774.setAttribute('id', 'smo63774');
smo63793v0ar.push(smo63774);
const smo63775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63775'] = smo63775;
smo63775.setAttribute('id', 'smo63775');
smo63793v0ar.push(smo63775);
const smo63776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63776'] = smo63776;
smo63776.setAttribute('id', 'smo63776');
smo63793v0ar.push(smo63776);
const smo63777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63777'] = smo63777;
smo63777.setAttribute('id', 'smo63777');
smo63793v0ar.push(smo63777);
smo63793v0.addTickables(smo63793v0ar)
fmtsmo6379333.joinVoices([smo63793v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6090033.format([smo60900v0,smo61867v0,smo62826v0,smo63793v0], 144);
const stavesmo60900 = new VF.Stave(303, 627, 158);
stavesmo60900.setAttribute('id', 'stavesmo60900');
stavesmo60900.setBegBarType(VF.Barline.type.NONE);
stavesmo60900.setContext(context);
stavesmo60900.draw();
smo60900v0.draw(context, stavesmo60900);
const stavesmo61867 = new VF.Stave(303, 730, 158);
stavesmo61867.setAttribute('id', 'stavesmo61867');
stavesmo61867.setBegBarType(VF.Barline.type.NONE);
stavesmo61867.setContext(context);
stavesmo61867.draw();
smo61867v0.draw(context, stavesmo61867);
const stavesmo62826 = new VF.Stave(303, 813, 158);
stavesmo62826.setAttribute('id', 'stavesmo62826');
stavesmo62826.setBegBarType(VF.Barline.type.NONE);
stavesmo62826.setContext(context);
stavesmo62826.draw();
smo62826v0.draw(context, stavesmo62826);
const stavesmo63793 = new VF.Stave(303, 922, 158);
stavesmo63793.setAttribute('id', 'stavesmo63793');
stavesmo63793.setBegBarType(VF.Barline.type.NONE);
stavesmo63793.setContext(context);
stavesmo63793.draw();
smo63793v0.draw(context, stavesmo63793);
const fmtsmo6092734 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo60927v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60927v0ar = [];
const smo60901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60901'] = smo60901;
smo60901.setAttribute('id', 'smo60901');
const smo60903 = new VF.Ornament('mordent');
smo60901.addModifier(smo60903, 0);
const smo60902 = new VF.Annotation('Со');
smo60902.setAttribute('id', 'smo60902');
smo60902.setFont('Merriweather', 12.1, 'normal');
smo60902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60901.addModifier(smo60902);
smo60902.addClass('lyric lyric-0');
smo60927v0ar.push(smo60901);
const smo60904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60904'] = smo60904;
smo60904.setAttribute('id', 'smo60904');
const smo60905 = new VF.Annotation('-');
smo60905.setAttribute('id', 'smo60905');
smo60905.setFont('Merriweather', 12.1, 'normal');
smo60905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60904.addModifier(smo60905);
smo60905.addClass('lyric lyric-0 lyric-hyphen');
smo60927v0ar.push(smo60904);
const smo60906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60906'] = smo60906;
smo60906.setAttribute('id', 'smo60906');
const smo60907 = new VF.Annotation('-');
smo60907.setAttribute('id', 'smo60907');
smo60907.setFont('Merriweather', 12.1, 'normal');
smo60907.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60906.addModifier(smo60907);
smo60907.addClass('lyric lyric-0 lyric-hyphen');
smo60927v0ar.push(smo60906);
const smo60908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60908'] = smo60908;
smo60908.setAttribute('id', 'smo60908');
const smo60909 = new VF.Annotation('ло');
smo60909.setAttribute('id', 'smo60909');
smo60909.setFont('Merriweather', 12.1, 'normal');
smo60909.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60908.addModifier(smo60909);
smo60909.addClass('lyric lyric-0');
smo60927v0ar.push(smo60908);
const smo60910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60910'] = smo60910;
smo60910.setAttribute('id', 'smo60910');
const smo60911 = new VF.Annotation('-');
smo60911.setAttribute('id', 'smo60911');
smo60911.setFont('Merriweather', 12.1, 'normal');
smo60911.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60910.addModifier(smo60911);
smo60911.addClass('lyric lyric-0 lyric-hyphen');
smo60927v0ar.push(smo60910);
smo60927v0.addTickables(smo60927v0ar)
fmtsmo6092734.joinVoices([smo60927v0]);
const fmtsmo6188734 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo61887v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61887v0ar = [];
const smo61868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61868'] = smo61868;
smo61868.setAttribute('id', 'smo61868');
smo61887v0ar.push(smo61868);
const smo61869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61869'] = smo61869;
smo61869.setAttribute('id', 'smo61869');
smo61887v0ar.push(smo61869);
const smo61870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61870'] = smo61870;
smo61870.setAttribute('id', 'smo61870');
smo61887v0ar.push(smo61870);
const smo61871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61871'] = smo61871;
smo61871.setAttribute('id', 'smo61871');
smo61887v0ar.push(smo61871);
smo61887v0.addTickables(smo61887v0ar)
fmtsmo6188734.joinVoices([smo61887v0]);
const fmtsmo6284334 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo62843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62843v0ar = [];
const smo62827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62827'] = smo62827;
smo62827.setAttribute('id', 'smo62827');
smo62843v0ar.push(smo62827);
smo62843v0.addTickables(smo62843v0ar)
fmtsmo6284334.joinVoices([smo62843v0]);
const fmtsmo6381334 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo63813v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63813v0ar = [];
const smo63794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63794'] = smo63794;
smo63794.setAttribute('id', 'smo63794');
smo63813v0ar.push(smo63794);
const smo63795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63795'] = smo63795;
smo63795.setAttribute('id', 'smo63795');
smo63813v0ar.push(smo63795);
const smo63796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo63796'] = smo63796;
smo63796.setAttribute('id', 'smo63796');
smo63813v0ar.push(smo63796);
const smo63797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63797'] = smo63797;
smo63797.setAttribute('id', 'smo63797');
smo63813v0ar.push(smo63797);
smo63813v0.addTickables(smo63813v0ar)
fmtsmo6381334.joinVoices([smo63813v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70693 = smo60904.getStemDirection();
smo60904.setStemDirection(dirsmo70693);
smo60906.setStemDirection(dirsmo70693);
const smo70693 = new VF.Beam([smo60904,smo60906]);
 
// formatting measures in staff group smo64103
fmtsmo6092734.format([smo60927v0,smo61887v0,smo62843v0,smo63813v0], 172);
const stavesmo60927 = new VF.Stave(461, 627, 186);
stavesmo60927.setAttribute('id', 'stavesmo60927');
stavesmo60927.setBegBarType(VF.Barline.type.NONE);
stavesmo60927.setContext(context);
stavesmo60927.draw();
smo60927v0.draw(context, stavesmo60927);
smo70693.setContext(context);
smo70693.draw();
const stavesmo61887 = new VF.Stave(461, 730, 186);
stavesmo61887.setAttribute('id', 'stavesmo61887');
stavesmo61887.setBegBarType(VF.Barline.type.NONE);
stavesmo61887.setContext(context);
stavesmo61887.draw();
smo61887v0.draw(context, stavesmo61887);
const stavesmo62843 = new VF.Stave(461, 813, 186);
stavesmo62843.setAttribute('id', 'stavesmo62843');
stavesmo62843.setBegBarType(VF.Barline.type.NONE);
stavesmo62843.setContext(context);
stavesmo62843.draw();
smo62843v0.draw(context, stavesmo62843);
const stavesmo63813 = new VF.Stave(461, 922, 186);
stavesmo63813.setAttribute('id', 'stavesmo63813');
stavesmo63813.setBegBarType(VF.Barline.type.NONE);
stavesmo63813.setContext(context);
stavesmo63813.draw();
smo63813v0.draw(context, stavesmo63813);
const fmtsmo6094935 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo60949v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60949v0ar = [];
const smo60928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60928'] = smo60928;
smo60928.setAttribute('id', 'smo60928');
const smo60929 = new VF.Annotation('вей');
smo60929.setAttribute('id', 'smo60929');
smo60929.setFont('Merriweather', 12.1, 'normal');
smo60929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60928.addModifier(smo60929);
smo60929.addClass('lyric lyric-0');
smo60949v0ar.push(smo60928);
const smo60930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo60930'] = smo60930;
smo60930.setAttribute('id', 'smo60930');
const smo60931 = new VF.Annotation('-');
smo60931.setAttribute('id', 'smo60931');
smo60931.setFont('Merriweather', 12.1, 'normal');
smo60931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60930.addModifier(smo60931);
smo60931.addClass('lyric lyric-0 lyric-hyphen');
smo60949v0ar.push(smo60930);
const smo60932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo60932'] = smo60932;
smo60932.setAttribute('id', 'smo60932');
const smo60933 = new VF.Annotation('-');
smo60933.setAttribute('id', 'smo60933');
smo60933.setFont('Merriweather', 12.1, 'normal');
smo60933.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60932.addModifier(smo60933);
smo60933.addClass('lyric lyric-0 lyric-hyphen');
smo60949v0ar.push(smo60932);
smo60949v0.addTickables(smo60949v0ar)
fmtsmo6094935.joinVoices([smo60949v0]);
const fmtsmo6190735 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo61907v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61907v0ar = [];
const smo61888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61888'] = smo61888;
smo61888.setAttribute('id', 'smo61888');
smo61907v0ar.push(smo61888);
const smo61889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61889'] = smo61889;
smo61889.setAttribute('id', 'smo61889');
smo61907v0ar.push(smo61889);
const smo61890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61890'] = smo61890;
smo61890.setAttribute('id', 'smo61890');
smo61907v0ar.push(smo61890);
const smo61891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61891'] = smo61891;
smo61891.setAttribute('id', 'smo61891');
smo61907v0ar.push(smo61891);
smo61907v0.addTickables(smo61907v0ar)
fmtsmo6190735.joinVoices([smo61907v0]);
const fmtsmo6286035 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo62860v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62860v0ar = [];
const smo62844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62844'] = smo62844;
smo62844.setAttribute('id', 'smo62844');
smo62860v0ar.push(smo62844);
smo62860v0.addTickables(smo62860v0ar)
fmtsmo6286035.joinVoices([smo62860v0]);
const fmtsmo6383335 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo63833v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63833v0ar = [];
const smo63814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63814'] = smo63814;
smo63814.setAttribute('id', 'smo63814');
smo63833v0ar.push(smo63814);
const smo63815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63815'] = smo63815;
smo63815.setAttribute('id', 'smo63815');
smo63833v0ar.push(smo63815);
const smo63816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63816'] = smo63816;
smo63816.setAttribute('id', 'smo63816');
smo63833v0ar.push(smo63816);
const smo63817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63817'] = smo63817;
smo63817.setAttribute('id', 'smo63817');
smo63833v0ar.push(smo63817);
smo63833v0.addTickables(smo63833v0ar)
fmtsmo6383335.joinVoices([smo63833v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6094935.format([smo60949v0,smo61907v0,smo62860v0,smo63833v0], 136);
const stavesmo60949 = new VF.Stave(647, 627, 150);
stavesmo60949.setAttribute('id', 'stavesmo60949');
stavesmo60949.setBegBarType(VF.Barline.type.NONE);
stavesmo60949.setContext(context);
stavesmo60949.draw();
smo60949v0.draw(context, stavesmo60949);
const stavesmo61907 = new VF.Stave(647, 730, 150);
stavesmo61907.setAttribute('id', 'stavesmo61907');
stavesmo61907.setBegBarType(VF.Barline.type.NONE);
stavesmo61907.setContext(context);
stavesmo61907.draw();
smo61907v0.draw(context, stavesmo61907);
const stavesmo62860 = new VF.Stave(647, 813, 150);
stavesmo62860.setAttribute('id', 'stavesmo62860');
stavesmo62860.setBegBarType(VF.Barline.type.NONE);
stavesmo62860.setContext(context);
stavesmo62860.draw();
smo62860v0.draw(context, stavesmo62860);
const stavesmo63833 = new VF.Stave(647, 922, 150);
stavesmo63833.setAttribute('id', 'stavesmo63833');
stavesmo63833.setBegBarType(VF.Barline.type.NONE);
stavesmo63833.setContext(context);
stavesmo63833.draw();
smo63833v0.draw(context, stavesmo63833);
const fmtsmo6097536 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo60975v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60975v0ar = [];
const smo60950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60950'] = smo60950;
smo60950.setAttribute('id', 'smo60950');
const smo60951 = new VF.Annotation('го');
smo60951.setAttribute('id', 'smo60951');
smo60951.setFont('Merriweather', 12.1, 'normal');
smo60951.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60950.addModifier(smo60951);
smo60951.addClass('lyric lyric-0');
smo60975v0ar.push(smo60950);
const smo60952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60952'] = smo60952;
smo60952.setAttribute('id', 'smo60952');
const smo60953 = new VF.Annotation('-');
smo60953.setAttribute('id', 'smo60953');
smo60953.setFont('Merriweather', 12.1, 'normal');
smo60953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60952.addModifier(smo60953);
smo60953.addClass('lyric lyric-0 lyric-hyphen');
smo60975v0ar.push(smo60952);
const smo60954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60954'] = smo60954;
smo60954.setAttribute('id', 'smo60954');
const smo60955 = new VF.Annotation('-');
smo60955.setAttribute('id', 'smo60955');
smo60955.setFont('Merriweather', 12.1, 'normal');
smo60955.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60954.addModifier(smo60955);
smo60955.addClass('lyric lyric-0 lyric-hyphen');
smo60975v0ar.push(smo60954);
const smo60956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo60956'] = smo60956;
smo60956.setAttribute('id', 'smo60956');
const smo609560acc = new VF.Accidental('#');
smo60956.addModifier(smo609560acc, 0);
const smo60957 = new VF.Annotation('-');
smo60957.setAttribute('id', 'smo60957');
smo60957.setFont('Merriweather', 12.1, 'normal');
smo60957.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60956.addModifier(smo60957);
smo60957.addClass('lyric lyric-0 lyric-hyphen');
smo60975v0ar.push(smo60956);
const smo60958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60958'] = smo60958;
smo60958.setAttribute('id', 'smo60958');
const smo60959 = new VF.Annotation('ло');
smo60959.setAttribute('id', 'smo60959');
smo60959.setFont('Merriweather', 12.1, 'normal');
smo60959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60958.addModifier(smo60959);
smo60959.addClass('lyric lyric-0 lyric-hyphen');
smo60975v0ar.push(smo60958);
smo60975v0.addTickables(smo60975v0ar)
fmtsmo6097536.joinVoices([smo60975v0]);
const fmtsmo6192736 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo61927v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61927v0ar = [];
const smo61908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61908'] = smo61908;
smo61908.setAttribute('id', 'smo61908');
smo61927v0ar.push(smo61908);
const smo61909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61909'] = smo61909;
smo61909.setAttribute('id', 'smo61909');
smo61927v0ar.push(smo61909);
const smo61910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61910'] = smo61910;
smo61910.setAttribute('id', 'smo61910');
smo61927v0ar.push(smo61910);
const smo61911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61911'] = smo61911;
smo61911.setAttribute('id', 'smo61911');
smo61927v0ar.push(smo61911);
smo61927v0.addTickables(smo61927v0ar)
fmtsmo6192736.joinVoices([smo61927v0]);
const fmtsmo6287836 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo62878v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62878v0ar = [];
const smo62861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62861'] = smo62861;
smo62861.setAttribute('id', 'smo62861');
smo62878v0ar.push(smo62861);
const smo62862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62862'] = smo62862;
smo62862.setAttribute('id', 'smo62862');
smo62878v0ar.push(smo62862);
smo62878v0.addTickables(smo62878v0ar)
fmtsmo6287836.joinVoices([smo62878v0]);
const fmtsmo6385336 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo63853v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63853v0ar = [];
const smo63834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63834'] = smo63834;
smo63834.setAttribute('id', 'smo63834');
smo63853v0ar.push(smo63834);
const smo63835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63835'] = smo63835;
smo63835.setAttribute('id', 'smo63835');
smo63853v0ar.push(smo63835);
const smo63836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63836'] = smo63836;
smo63836.setAttribute('id', 'smo63836');
smo63853v0ar.push(smo63836);
const smo63837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63837'] = smo63837;
smo63837.setAttribute('id', 'smo63837');
smo63853v0ar.push(smo63837);
smo63853v0.addTickables(smo63853v0ar)
fmtsmo6385336.joinVoices([smo63853v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70710 = smo60952.getStemDirection();
smo60952.setStemDirection(dirsmo70710);
smo60954.setStemDirection(dirsmo70710);
const smo70710 = new VF.Beam([smo60952,smo60954]);
 
// formatting measures in staff group smo64103
fmtsmo6097536.format([smo60975v0,smo61927v0,smo62878v0,smo63853v0], 174);
const stavesmo60975 = new VF.Stave(797, 627, 188);
stavesmo60975.setAttribute('id', 'stavesmo60975');
stavesmo60975.setBegBarType(VF.Barline.type.NONE);
stavesmo60975.setContext(context);
stavesmo60975.draw();
smo60975v0.draw(context, stavesmo60975);
smo70710.setContext(context);
smo70710.draw();
const stavesmo61927 = new VF.Stave(797, 730, 188);
stavesmo61927.setAttribute('id', 'stavesmo61927');
stavesmo61927.setBegBarType(VF.Barline.type.NONE);
stavesmo61927.setContext(context);
stavesmo61927.draw();
smo61927v0.draw(context, stavesmo61927);
const stavesmo62878 = new VF.Stave(797, 813, 188);
stavesmo62878.setAttribute('id', 'stavesmo62878');
stavesmo62878.setBegBarType(VF.Barline.type.NONE);
stavesmo62878.setContext(context);
stavesmo62878.draw();
smo62878v0.draw(context, stavesmo62878);
const stavesmo63853 = new VF.Stave(797, 922, 188);
stavesmo63853.setAttribute('id', 'stavesmo63853');
stavesmo63853.setBegBarType(VF.Barline.type.NONE);
stavesmo63853.setContext(context);
stavesmo63853.draw();
smo63853v0.draw(context, stavesmo63853);
const fmtsmo6099737 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo60997v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60997v0ar = [];
const smo60976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60976'] = smo60976;
smo60976.setAttribute('id', 'smo60976');
const smo60977 = new VF.Annotation('си');
smo60977.setAttribute('id', 'smo60977');
smo60977.setFont('Merriweather', 12.1, 'normal');
smo60977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60976.addModifier(smo60977);
smo60977.addClass('lyric lyric-0 lyric-hyphen');
smo60997v0ar.push(smo60976);
const smo60978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60978'] = smo60978;
smo60978.setAttribute('id', 'smo60978');
const smo60979 = new VF.Annotation('ст');
smo60979.setAttribute('id', 'smo60979');
smo60979.setFont('Merriweather', 12.1, 'normal');
smo60979.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60978.addModifier(smo60979);
smo60979.addClass('lyric lyric-0');
smo60997v0ar.push(smo60978);
const smo60980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60980'] = smo60980;
smo60980.setAttribute('id', 'smo60980');
const smo60981 = new VF.Annotation('ый');
smo60981.setAttribute('id', 'smo60981');
smo60981.setFont('Merriweather', 12.1, 'normal');
smo60981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60980.addModifier(smo60981);
smo60981.addClass('lyric lyric-0');
smo60997v0ar.push(smo60980);
smo60997v0.addTickables(smo60997v0ar)
fmtsmo6099737.joinVoices([smo60997v0]);
const fmtsmo6194537 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo61945v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61945v0ar = [];
const smo61928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo61928'] = smo61928;
smo61928.setAttribute('id', 'smo61928');
smo61945v0ar.push(smo61928);
const smo61929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61929'] = smo61929;
smo61929.setAttribute('id', 'smo61929');
smo61945v0ar.push(smo61929);
smo61945v0.addTickables(smo61945v0ar)
fmtsmo6194537.joinVoices([smo61945v0]);
const fmtsmo6289637 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo62896v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62896v0ar = [];
const smo62879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo62879'] = smo62879;
smo62879.setAttribute('id', 'smo62879');
smo62896v0ar.push(smo62879);
const smo62880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62880'] = smo62880;
smo62880.setAttribute('id', 'smo62880');
smo62896v0ar.push(smo62880);
smo62896v0.addTickables(smo62896v0ar)
fmtsmo6289637.joinVoices([smo62896v0]);
const fmtsmo6387137 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo63871v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63871v0ar = [];
const smo63854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo63854'] = smo63854;
smo63854.setAttribute('id', 'smo63854');
smo63871v0ar.push(smo63854);
const smo63855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63855'] = smo63855;
smo63855.setAttribute('id', 'smo63855');
smo63871v0ar.push(smo63855);
smo63871v0.addTickables(smo63871v0ar)
fmtsmo6387137.joinVoices([smo63871v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6099737.format([smo60997v0,smo61945v0,smo62896v0,smo63871v0], 143);
const stavesmo60997 = new VF.Stave(985, 627, 157);
stavesmo60997.setAttribute('id', 'stavesmo60997');
stavesmo60997.setBegBarType(VF.Barline.type.NONE);
stavesmo60997.setContext(context);
stavesmo60997.draw();
smo60997v0.draw(context, stavesmo60997);
const stavesmo61945 = new VF.Stave(985, 730, 157);
stavesmo61945.setAttribute('id', 'stavesmo61945');
stavesmo61945.setBegBarType(VF.Barline.type.NONE);
stavesmo61945.setContext(context);
stavesmo61945.draw();
smo61945v0.draw(context, stavesmo61945);
const stavesmo62896 = new VF.Stave(985, 813, 157);
stavesmo62896.setAttribute('id', 'stavesmo62896');
stavesmo62896.setBegBarType(VF.Barline.type.NONE);
stavesmo62896.setContext(context);
stavesmo62896.draw();
smo62896v0.draw(context, stavesmo62896);
const stavesmo63871 = new VF.Stave(985, 922, 157);
stavesmo63871.setAttribute('id', 'stavesmo63871');
stavesmo63871.setBegBarType(VF.Barline.type.NONE);
stavesmo63871.setContext(context);
stavesmo63871.draw();
smo63871v0.draw(context, stavesmo63871);
const fmtsmo6102038 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo61020v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61020v0ar = [];
const smo60998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60998'] = smo60998;
smo60998.setAttribute('id', 'smo60998');
smo60998.addModifier(new VF.Dot(), 0);
const  smo71542 = new VF.Articulation('a@a').setPosition(3);
smo60998.addModifier(smo71542, 0);
const smo60999 = new VF.Annotation('со');
smo60999.setAttribute('id', 'smo60999');
smo60999.setFont('Merriweather', 12.1, 'normal');
smo60999.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60998.addModifier(smo60999);
smo60999.addClass('lyric lyric-0');
smo61020v0ar.push(smo60998);
const smo61001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo61001'] = smo61001;
smo61001.setAttribute('id', 'smo61001');
const smo610010acc = new VF.Accidental('#');
smo61001.addModifier(smo610010acc, 0);
const smo61002 = new VF.Annotation('-');
smo61002.setAttribute('id', 'smo61002');
smo61002.setFont('Merriweather', 12.1, 'normal');
smo61002.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo61001.addModifier(smo61002);
smo61002.addClass('lyric lyric-0 lyric-hyphen');
smo61020v0ar.push(smo61001);
const smo61003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61003'] = smo61003;
smo61003.setAttribute('id', 'smo61003');
smo61020v0ar.push(smo61003);
smo61020v0.addTickables(smo61020v0ar)
fmtsmo6102038.joinVoices([smo61020v0]);
const fmtsmo6196338 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo61963v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61963v0ar = [];
const smo61946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61946'] = smo61946;
smo61946.setAttribute('id', 'smo61946');
smo61946.addModifier(new VF.Dot(), 0);
smo61963v0ar.push(smo61946);
const smo61947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61947'] = smo61947;
smo61947.setAttribute('id', 'smo61947');
smo61963v0ar.push(smo61947);
smo61963v0.addTickables(smo61963v0ar)
fmtsmo6196338.joinVoices([smo61963v0]);
const fmtsmo6291438 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo62914v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62914v0ar = [];
const smo62897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62897'] = smo62897;
smo62897.setAttribute('id', 'smo62897');
smo62897.addModifier(new VF.Dot(), 0);
smo62914v0ar.push(smo62897);
const smo62898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62898'] = smo62898;
smo62898.setAttribute('id', 'smo62898');
smo62914v0ar.push(smo62898);
smo62914v0.addTickables(smo62914v0ar)
fmtsmo6291438.joinVoices([smo62914v0]);
const fmtsmo6388938 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo63889v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63889v0ar = [];
const smo63872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63872'] = smo63872;
smo63872.setAttribute('id', 'smo63872');
smo63872.addModifier(new VF.Dot(), 0);
smo63889v0ar.push(smo63872);
const smo63873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63873'] = smo63873;
smo63873.setAttribute('id', 'smo63873');
smo63889v0ar.push(smo63873);
smo63889v0.addTickables(smo63889v0ar)
fmtsmo6388938.joinVoices([smo63889v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70727 = smo61001.getStemDirection();
smo61001.setStemDirection(dirsmo70727);
smo61003.setStemDirection(dirsmo70727);
const smo70727 = new VF.Beam([smo61001,smo61003]);
 
// formatting measures in staff group smo64103
fmtsmo6102038.format([smo61020v0,smo61963v0,smo62914v0,smo63889v0], 100);
const stavesmo61020 = new VF.Stave(1142, 627, 114);
stavesmo61020.setAttribute('id', 'stavesmo61020');
stavesmo61020.setBegBarType(VF.Barline.type.NONE);
stavesmo61020.setContext(context);
stavesmo61020.draw();
smo61020v0.draw(context, stavesmo61020);
smo70727.setContext(context);
smo70727.draw();
const stavesmo61963 = new VF.Stave(1142, 730, 114);
stavesmo61963.setAttribute('id', 'stavesmo61963');
stavesmo61963.setBegBarType(VF.Barline.type.NONE);
stavesmo61963.setContext(context);
stavesmo61963.draw();
smo61963v0.draw(context, stavesmo61963);
const stavesmo62914 = new VF.Stave(1142, 813, 114);
stavesmo62914.setAttribute('id', 'stavesmo62914');
stavesmo62914.setBegBarType(VF.Barline.type.NONE);
stavesmo62914.setContext(context);
stavesmo62914.draw();
smo62914v0.draw(context, stavesmo62914);
const stavesmo63889 = new VF.Stave(1142, 922, 114);
stavesmo63889.setAttribute('id', 'stavesmo63889');
stavesmo63889.setBegBarType(VF.Barline.type.NONE);
stavesmo63889.setContext(context);
stavesmo63889.draw();
smo63889v0.draw(context, stavesmo63889);
const fmtsmo6104039 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo61040v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61040v0ar = [];
const smo61021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo61021'] = smo61021;
smo61021.setAttribute('id', 'smo61021');
smo61021.addModifier(new VF.Dot(), 0);
const smo61022 = new VF.Annotation('ло');
smo61022.setAttribute('id', 'smo61022');
smo61022.setFont('Merriweather', 12.1, 'normal');
smo61022.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo61021.addModifier(smo61022);
smo61022.addClass('lyric lyric-0');
smo61040v0ar.push(smo61021);
const smo61023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61023'] = smo61023;
smo61023.setAttribute('id', 'smo61023');
const smo61024 = new VF.Annotation('-');
smo61024.setAttribute('id', 'smo61024');
smo61024.setFont('Merriweather', 12.1, 'normal');
smo61024.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo61023.addModifier(smo61024);
smo61024.addClass('lyric lyric-0 lyric-hyphen');
smo61040v0ar.push(smo61023);
smo61040v0.addTickables(smo61040v0ar)
fmtsmo6104039.joinVoices([smo61040v0]);
const fmtsmo6198239 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo61982v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61982v0ar = [];
const smo61964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61964'] = smo61964;
smo61964.setAttribute('id', 'smo61964');
smo61982v0ar.push(smo61964);
const smo61965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61965'] = smo61965;
smo61965.setAttribute('id', 'smo61965');
smo61982v0ar.push(smo61965);
const smo61966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61966'] = smo61966;
smo61966.setAttribute('id', 'smo61966');
smo61982v0ar.push(smo61966);
smo61982v0.addTickables(smo61982v0ar)
fmtsmo6198239.joinVoices([smo61982v0]);
const fmtsmo6293339 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo62933v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62933v0ar = [];
const smo62915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62915'] = smo62915;
smo62915.setAttribute('id', 'smo62915');
smo62933v0ar.push(smo62915);
const smo62916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62916'] = smo62916;
smo62916.setAttribute('id', 'smo62916');
smo62933v0ar.push(smo62916);
const smo62917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo62917'] = smo62917;
smo62917.setAttribute('id', 'smo62917');
const smo629170acc = new VF.Accidental('#');
smo62917.addModifier(smo629170acc, 0);
smo62933v0ar.push(smo62917);
smo62933v0.addTickables(smo62933v0ar)
fmtsmo6293339.joinVoices([smo62933v0]);
const fmtsmo6390839 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo63908v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63908v0ar = [];
const smo63890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63890'] = smo63890;
smo63890.setAttribute('id', 'smo63890');
smo63908v0ar.push(smo63890);
const smo63891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63891'] = smo63891;
smo63891.setAttribute('id', 'smo63891');
smo63908v0ar.push(smo63891);
const smo63892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo63892'] = smo63892;
smo63892.setAttribute('id', 'smo63892');
smo63908v0ar.push(smo63892);
smo63908v0.addTickables(smo63908v0ar)
fmtsmo6390839.joinVoices([smo63908v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6104039.format([smo61040v0,smo61982v0,smo62933v0,smo63908v0], 106);
const stavesmo61040 = new VF.Stave(1256, 627, 120);
stavesmo61040.setAttribute('id', 'stavesmo61040');
stavesmo61040.setBegBarType(VF.Barline.type.NONE);
stavesmo61040.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo61040.setContext(context);
stavesmo61040.draw();
smo61040v0.draw(context, stavesmo61040);
const stavesmo61982 = new VF.Stave(1256, 730, 120);
stavesmo61982.setAttribute('id', 'stavesmo61982');
stavesmo61982.setBegBarType(VF.Barline.type.NONE);
stavesmo61982.setContext(context);
stavesmo61982.draw();
smo61982v0.draw(context, stavesmo61982);
const stavesmo62933 = new VF.Stave(1256, 813, 120);
stavesmo62933.setAttribute('id', 'stavesmo62933');
stavesmo62933.setBegBarType(VF.Barline.type.NONE);
stavesmo62933.setContext(context);
stavesmo62933.draw();
smo62933v0.draw(context, stavesmo62933);
const stavesmo63908 = new VF.Stave(1256, 922, 120);
stavesmo63908.setAttribute('id', 'stavesmo63908');
stavesmo63908.setBegBarType(VF.Barline.type.NONE);
stavesmo63908.setContext(context);
stavesmo63908.draw();
smo63908v0.draw(context, stavesmo63908);
const rightsmo64103stavesmo610403 = new VF.StaveConnector(stavesmo61040, stavesmo63908).setType(0);
rightsmo64103stavesmo610403.setContext(context).draw();
const fmtsmo6106040 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo61060v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61060v0ar = [];
const smo61041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61041'] = smo61041;
smo61041.setAttribute('id', 'smo61041');
const smo61042 = new VF.Annotation('вей');
smo61042.setAttribute('id', 'smo61042');
smo61042.setFont('Merriweather', 12.1, 'normal');
smo61042.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo61041.addModifier(smo61042);
smo61042.addClass('lyric lyric-0');
smo61060v0ar.push(smo61041);
const smo61043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61043'] = smo61043;
smo61043.setAttribute('id', 'smo61043');
smo61060v0ar.push(smo61043);
const smo61044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61044'] = smo61044;
smo61044.setAttribute('id', 'smo61044');
smo61060v0ar.push(smo61044);
smo61060v0.addTickables(smo61060v0ar)
fmtsmo6106040.joinVoices([smo61060v0]);
const fmtsmo6200440 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo62004v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62004v0ar = [];
const smo61983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo61984 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo61984.setAttribute('id', 'smo61984');
const ggrpsmo61983 = new VF.GraceNoteGroup([smo61984]);
ggrpsmo61983.beamNotes();
smo61983.addModifier(ggrpsmo61983, 0);
noteHash['smo61983'] = smo61983;
smo61983.setAttribute('id', 'smo61983');
smo62004v0ar.push(smo61983);
const smo61985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61985'] = smo61985;
smo61985.setAttribute('id', 'smo61985');
smo62004v0ar.push(smo61985);
const smo61986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
const smo61987 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo61987.setAttribute('id', 'smo61987');
const ggrpsmo61986 = new VF.GraceNoteGroup([smo61987]);
ggrpsmo61986.beamNotes();
smo61986.addModifier(ggrpsmo61986, 0);
noteHash['smo61986'] = smo61986;
smo61986.setAttribute('id', 'smo61986');
smo62004v0ar.push(smo61986);
const smo61988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61988'] = smo61988;
smo61988.setAttribute('id', 'smo61988');
smo62004v0ar.push(smo61988);
smo62004v0.addTickables(smo62004v0ar)
fmtsmo6200440.joinVoices([smo62004v0]);
const fmtsmo6295340 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo62953v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62953v0ar = [];
const smo62934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62934'] = smo62934;
smo62934.setAttribute('id', 'smo62934');
smo62953v0ar.push(smo62934);
const smo62935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62935'] = smo62935;
smo62935.setAttribute('id', 'smo62935');
smo62953v0ar.push(smo62935);
const smo62936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62936'] = smo62936;
smo62936.setAttribute('id', 'smo62936');
smo62953v0ar.push(smo62936);
const smo62937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62937'] = smo62937;
smo62937.setAttribute('id', 'smo62937');
smo62953v0ar.push(smo62937);
smo62953v0.addTickables(smo62953v0ar)
fmtsmo6295340.joinVoices([smo62953v0]);
const fmtsmo6392840 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo63928v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63928v0ar = [];
const smo63909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63909'] = smo63909;
smo63909.setAttribute('id', 'smo63909');
smo63928v0ar.push(smo63909);
const smo63910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63910'] = smo63910;
smo63910.setAttribute('id', 'smo63910');
smo63928v0ar.push(smo63910);
const smo63911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63911'] = smo63911;
smo63911.setAttribute('id', 'smo63911');
smo63928v0ar.push(smo63911);
const smo63912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63912'] = smo63912;
smo63912.setAttribute('id', 'smo63912');
smo63928v0ar.push(smo63912);
smo63928v0.addTickables(smo63928v0ar)
fmtsmo6392840.joinVoices([smo63928v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6106040.format([smo61060v0,smo62004v0,smo62953v0,smo63928v0], 170);
const stavesmo61060 = new VF.Stave(55, 1040, 244);
stavesmo61060.setAttribute('id', 'stavesmo61060');
stavesmo61060.setBegBarType(1);
stavesmo61060.addClef('treble');
const keysmo61060 = new VF.KeySignature('F');
keysmo61060.addToStave(stavesmo61060);
stavesmo61060.setContext(context);
stavesmo61060.draw();
smo61060v0.draw(context, stavesmo61060);
const stavesmo62004 = new VF.Stave(55, 1165, 244);
stavesmo62004.setAttribute('id', 'stavesmo62004');
stavesmo62004.setBegBarType(1);
stavesmo62004.addClef('treble');
const keysmo62004 = new VF.KeySignature('F');
keysmo62004.addToStave(stavesmo62004);
stavesmo62004.setContext(context);
stavesmo62004.draw();
smo62004v0.draw(context, stavesmo62004);
const stavesmo62953 = new VF.Stave(55, 1253, 244);
stavesmo62953.setAttribute('id', 'stavesmo62953');
stavesmo62953.setBegBarType(1);
stavesmo62953.addClef('treble');
const keysmo62953 = new VF.KeySignature('F');
keysmo62953.addToStave(stavesmo62953);
stavesmo62953.setContext(context);
stavesmo62953.draw();
smo62953v0.draw(context, stavesmo62953);
const stavesmo63928 = new VF.Stave(55, 1366, 244);
stavesmo63928.setAttribute('id', 'stavesmo63928');
stavesmo63928.setBegBarType(1);
stavesmo63928.addClef('bass');
const keysmo63928 = new VF.KeySignature('F');
keysmo63928.addToStave(stavesmo63928);
stavesmo63928.setContext(context);
stavesmo63928.draw();
smo63928v0.draw(context, stavesmo63928);
const leftsmo64103stavesmo610603 = new VF.StaveConnector(stavesmo61060, stavesmo63928).setType(1);
leftsmo64103stavesmo610603.setContext(context).draw();
const fmtsmo6107741 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo61077v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61077v0ar = [];
const smo61061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61061'] = smo61061;
smo61061.setAttribute('id', 'smo61061');
smo61077v0ar.push(smo61061);
smo61077v0.addTickables(smo61077v0ar)
fmtsmo6107741.joinVoices([smo61077v0]);
const fmtsmo6202441 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo62024v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62024v0ar = [];
const smo62005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
const smo62006 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo62006.setAttribute('id', 'smo62006');
const ggrpsmo62005 = new VF.GraceNoteGroup([smo62006]);
ggrpsmo62005.beamNotes();
smo62005.addModifier(ggrpsmo62005, 0);
noteHash['smo62005'] = smo62005;
smo62005.setAttribute('id', 'smo62005');
smo62005.addModifier(new VF.Dot(), 0);
smo62024v0ar.push(smo62005);
const smo62007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62007'] = smo62007;
smo62007.setAttribute('id', 'smo62007');
smo62024v0ar.push(smo62007);
const smo62008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo62008'] = smo62008;
smo62008.setAttribute('id', 'smo62008');
smo62024v0ar.push(smo62008);
smo62024v0.addTickables(smo62024v0ar)
fmtsmo6202441.joinVoices([smo62024v0]);
const fmtsmo6297341 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo62973v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62973v0ar = [];
const smo62954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62954'] = smo62954;
smo62954.setAttribute('id', 'smo62954');
smo62973v0ar.push(smo62954);
const smo62955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62955'] = smo62955;
smo62955.setAttribute('id', 'smo62955');
smo62973v0ar.push(smo62955);
const smo62956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62956'] = smo62956;
smo62956.setAttribute('id', 'smo62956');
smo62973v0ar.push(smo62956);
const smo62957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62957'] = smo62957;
smo62957.setAttribute('id', 'smo62957');
smo62973v0ar.push(smo62957);
smo62973v0.addTickables(smo62973v0ar)
fmtsmo6297341.joinVoices([smo62973v0]);
const fmtsmo6394841 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo63948v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63948v0ar = [];
const smo63929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63929'] = smo63929;
smo63929.setAttribute('id', 'smo63929');
smo63948v0ar.push(smo63929);
const smo63930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63930'] = smo63930;
smo63930.setAttribute('id', 'smo63930');
smo63948v0ar.push(smo63930);
const smo63931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63931'] = smo63931;
smo63931.setAttribute('id', 'smo63931');
smo63948v0ar.push(smo63931);
const smo63932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63932'] = smo63932;
smo63932.setAttribute('id', 'smo63932');
smo63948v0ar.push(smo63932);
smo63948v0.addTickables(smo63948v0ar)
fmtsmo6394841.joinVoices([smo63948v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70762 = smo62007.getStemDirection();
smo62007.setStemDirection(dirsmo70762);
smo62008.setStemDirection(dirsmo70762);
const smo70762 = new VF.Beam([smo62007,smo62008]);
 
// formatting measures in staff group smo64103
fmtsmo6107741.format([smo61077v0,smo62024v0,smo62973v0,smo63948v0], 153);
const stavesmo61077 = new VF.Stave(299, 1040, 167);
stavesmo61077.setAttribute('id', 'stavesmo61077');
stavesmo61077.setBegBarType(VF.Barline.type.NONE);
stavesmo61077.setContext(context);
stavesmo61077.draw();
smo61077v0.draw(context, stavesmo61077);
const stavesmo62024 = new VF.Stave(299, 1165, 167);
stavesmo62024.setAttribute('id', 'stavesmo62024');
stavesmo62024.setBegBarType(VF.Barline.type.NONE);
stavesmo62024.setContext(context);
stavesmo62024.draw();
smo62024v0.draw(context, stavesmo62024);
smo70762.setContext(context);
smo70762.draw();
const stavesmo62973 = new VF.Stave(299, 1253, 167);
stavesmo62973.setAttribute('id', 'stavesmo62973');
stavesmo62973.setBegBarType(VF.Barline.type.NONE);
stavesmo62973.setContext(context);
stavesmo62973.draw();
smo62973v0.draw(context, stavesmo62973);
const stavesmo63948 = new VF.Stave(299, 1366, 167);
stavesmo63948.setAttribute('id', 'stavesmo63948');
stavesmo63948.setBegBarType(VF.Barline.type.NONE);
stavesmo63948.setContext(context);
stavesmo63948.draw();
smo63948v0.draw(context, stavesmo63948);
const fmtsmo6109442 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo61094v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61094v0ar = [];
const smo61078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61078'] = smo61078;
smo61078.setAttribute('id', 'smo61078');
smo61094v0ar.push(smo61078);
smo61094v0.addTickables(smo61094v0ar)
fmtsmo6109442.joinVoices([smo61094v0]);
const fmtsmo6204642 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo62046v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62046v0ar = [];
const smo62025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62025'] = smo62025;
smo62025.setAttribute('id', 'smo62025');
smo62046v0ar.push(smo62025);
const smo62026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62026'] = smo62026;
smo62026.setAttribute('id', 'smo62026');
smo62046v0ar.push(smo62026);
const smo62027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo62027'] = smo62027;
smo62027.setAttribute('id', 'smo62027');
smo62046v0ar.push(smo62027);
const smo62028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62028'] = smo62028;
smo62028.setAttribute('id', 'smo62028');
smo62046v0ar.push(smo62028);
const smo62029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62029'] = smo62029;
smo62029.setAttribute('id', 'smo62029');
smo62046v0ar.push(smo62029);
const smo62030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo62030'] = smo62030;
smo62030.setAttribute('id', 'smo62030');
smo62046v0ar.push(smo62030);
smo62046v0.addTickables(smo62046v0ar)
fmtsmo6204642.joinVoices([smo62046v0]);
const fmtsmo6299342 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo62993v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62993v0ar = [];
const smo62974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62974'] = smo62974;
smo62974.setAttribute('id', 'smo62974');
smo62993v0ar.push(smo62974);
const smo62975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62975'] = smo62975;
smo62975.setAttribute('id', 'smo62975');
smo62993v0ar.push(smo62975);
const smo62976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62976'] = smo62976;
smo62976.setAttribute('id', 'smo62976');
smo62993v0ar.push(smo62976);
const smo62977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62977'] = smo62977;
smo62977.setAttribute('id', 'smo62977');
smo62993v0ar.push(smo62977);
smo62993v0.addTickables(smo62993v0ar)
fmtsmo6299342.joinVoices([smo62993v0]);
const fmtsmo6396842 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo63968v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63968v0ar = [];
const smo63949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63949'] = smo63949;
smo63949.setAttribute('id', 'smo63949');
smo63968v0ar.push(smo63949);
const smo63950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63950'] = smo63950;
smo63950.setAttribute('id', 'smo63950');
smo63968v0ar.push(smo63950);
const smo63951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63951'] = smo63951;
smo63951.setAttribute('id', 'smo63951');
smo63968v0ar.push(smo63951);
const smo63952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63952'] = smo63952;
smo63952.setAttribute('id', 'smo63952');
smo63968v0ar.push(smo63952);
smo63968v0.addTickables(smo63968v0ar)
fmtsmo6396842.joinVoices([smo63968v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70771 = smo62026.getStemDirection();
smo62026.setStemDirection(dirsmo70771);
smo62027.setStemDirection(dirsmo70771);
const smo70771 = new VF.Beam([smo62026,smo62027]);
const dirsmo70772 = smo62029.getStemDirection();
smo62029.setStemDirection(dirsmo70772);
smo62030.setStemDirection(dirsmo70772);
const smo70772 = new VF.Beam([smo62029,smo62030]);
 
// formatting measures in staff group smo64103
fmtsmo6109442.format([smo61094v0,smo62046v0,smo62993v0,smo63968v0], 147);
const stavesmo61094 = new VF.Stave(466, 1040, 161);
stavesmo61094.setAttribute('id', 'stavesmo61094');
stavesmo61094.setBegBarType(VF.Barline.type.NONE);
stavesmo61094.setContext(context);
stavesmo61094.draw();
smo61094v0.draw(context, stavesmo61094);
const stavesmo62046 = new VF.Stave(466, 1165, 161);
stavesmo62046.setAttribute('id', 'stavesmo62046');
stavesmo62046.setBegBarType(VF.Barline.type.NONE);
stavesmo62046.setContext(context);
stavesmo62046.draw();
smo62046v0.draw(context, stavesmo62046);
smo70771.setContext(context);
smo70771.draw();
smo70772.setContext(context);
smo70772.draw();
const stavesmo62993 = new VF.Stave(466, 1253, 161);
stavesmo62993.setAttribute('id', 'stavesmo62993');
stavesmo62993.setBegBarType(VF.Barline.type.NONE);
stavesmo62993.setContext(context);
stavesmo62993.draw();
smo62993v0.draw(context, stavesmo62993);
const stavesmo63968 = new VF.Stave(466, 1366, 161);
stavesmo63968.setAttribute('id', 'stavesmo63968');
stavesmo63968.setBegBarType(VF.Barline.type.NONE);
stavesmo63968.setContext(context);
stavesmo63968.draw();
smo63968v0.draw(context, stavesmo63968);
const fmtsmo6111143 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo61111v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61111v0ar = [];
const smo61095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61095'] = smo61095;
smo61095.setAttribute('id', 'smo61095');
smo61111v0ar.push(smo61095);
smo61111v0.addTickables(smo61111v0ar)
fmtsmo6111143.joinVoices([smo61111v0]);
const fmtsmo6206543 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo62065v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62065v0ar = [];
const smo62047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62047'] = smo62047;
smo62047.setAttribute('id', 'smo62047');
smo62065v0ar.push(smo62047);
const smo62048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo62048'] = smo62048;
smo62048.setAttribute('id', 'smo62048');
smo62065v0ar.push(smo62048);
const smo62049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo62049'] = smo62049;
smo62049.setAttribute('id', 'smo62049');
smo62065v0ar.push(smo62049);
smo62065v0.addTickables(smo62065v0ar)
fmtsmo6206543.joinVoices([smo62065v0]);
const fmtsmo6301343 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo63013v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63013v0ar = [];
const smo62994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62994'] = smo62994;
smo62994.setAttribute('id', 'smo62994');
smo63013v0ar.push(smo62994);
const smo62995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62995'] = smo62995;
smo62995.setAttribute('id', 'smo62995');
smo63013v0ar.push(smo62995);
const smo62996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62996'] = smo62996;
smo62996.setAttribute('id', 'smo62996');
smo63013v0ar.push(smo62996);
const smo62997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo62997'] = smo62997;
smo62997.setAttribute('id', 'smo62997');
smo63013v0ar.push(smo62997);
smo63013v0.addTickables(smo63013v0ar)
fmtsmo6301343.joinVoices([smo63013v0]);
const fmtsmo6398843 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo63988v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63988v0ar = [];
const smo63969 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63969'] = smo63969;
smo63969.setAttribute('id', 'smo63969');
smo63988v0ar.push(smo63969);
const smo63970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63970'] = smo63970;
smo63970.setAttribute('id', 'smo63970');
smo63988v0ar.push(smo63970);
const smo63971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63971'] = smo63971;
smo63971.setAttribute('id', 'smo63971');
smo63988v0ar.push(smo63971);
const smo63972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63972'] = smo63972;
smo63972.setAttribute('id', 'smo63972');
smo63988v0ar.push(smo63972);
smo63988v0.addTickables(smo63988v0ar)
fmtsmo6398843.joinVoices([smo63988v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6111143.format([smo61111v0,smo62065v0,smo63013v0,smo63988v0], 95);
const stavesmo61111 = new VF.Stave(627, 1040, 109);
stavesmo61111.setAttribute('id', 'stavesmo61111');
stavesmo61111.setBegBarType(VF.Barline.type.NONE);
stavesmo61111.setContext(context);
stavesmo61111.draw();
smo61111v0.draw(context, stavesmo61111);
const stavesmo62065 = new VF.Stave(627, 1165, 109);
stavesmo62065.setAttribute('id', 'stavesmo62065');
stavesmo62065.setBegBarType(VF.Barline.type.NONE);
stavesmo62065.setContext(context);
stavesmo62065.draw();
smo62065v0.draw(context, stavesmo62065);
const stavesmo63013 = new VF.Stave(627, 1253, 109);
stavesmo63013.setAttribute('id', 'stavesmo63013');
stavesmo63013.setBegBarType(VF.Barline.type.NONE);
stavesmo63013.setContext(context);
stavesmo63013.draw();
smo63013v0.draw(context, stavesmo63013);
const stavesmo63988 = new VF.Stave(627, 1366, 109);
stavesmo63988.setAttribute('id', 'stavesmo63988');
stavesmo63988.setBegBarType(VF.Barline.type.NONE);
stavesmo63988.setContext(context);
stavesmo63988.draw();
smo63988v0.draw(context, stavesmo63988);
const fmtsmo6112844 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo61128v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61128v0ar = [];
const smo61112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61112'] = smo61112;
smo61112.setAttribute('id', 'smo61112');
smo61128v0ar.push(smo61112);
smo61128v0.addTickables(smo61128v0ar)
fmtsmo6112844.joinVoices([smo61128v0]);
const fmtsmo6208544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo62085v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62085v0ar = [];
const smo62066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62066'] = smo62066;
smo62066.setAttribute('id', 'smo62066');
smo62085v0ar.push(smo62066);
const smo62067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo62067'] = smo62067;
smo62067.setAttribute('id', 'smo62067');
smo62085v0ar.push(smo62067);
const smo62068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo62068'] = smo62068;
smo62068.setAttribute('id', 'smo62068');
smo62085v0ar.push(smo62068);
const smo62069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo62069'] = smo62069;
smo62069.setAttribute('id', 'smo62069');
smo62085v0ar.push(smo62069);
smo62085v0.addTickables(smo62085v0ar)
fmtsmo6208544.joinVoices([smo62085v0]);
const fmtsmo6303344 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo63033v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63033v0ar = [];
const smo63014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo63014'] = smo63014;
smo63014.setAttribute('id', 'smo63014');
smo63033v0ar.push(smo63014);
const smo63015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo63015'] = smo63015;
smo63015.setAttribute('id', 'smo63015');
smo63033v0ar.push(smo63015);
const smo63016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo63016'] = smo63016;
smo63016.setAttribute('id', 'smo63016');
smo63033v0ar.push(smo63016);
const smo63017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo63017'] = smo63017;
smo63017.setAttribute('id', 'smo63017');
smo63033v0ar.push(smo63017);
smo63033v0.addTickables(smo63033v0ar)
fmtsmo6303344.joinVoices([smo63033v0]);
const fmtsmo6400844 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo64008v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64008v0ar = [];
const smo63989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63989'] = smo63989;
smo63989.setAttribute('id', 'smo63989');
smo64008v0ar.push(smo63989);
const smo63990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63990'] = smo63990;
smo63990.setAttribute('id', 'smo63990');
smo64008v0ar.push(smo63990);
const smo63991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63991'] = smo63991;
smo63991.setAttribute('id', 'smo63991');
smo64008v0ar.push(smo63991);
const smo63992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63992'] = smo63992;
smo63992.setAttribute('id', 'smo63992');
smo64008v0ar.push(smo63992);
smo64008v0.addTickables(smo64008v0ar)
fmtsmo6400844.joinVoices([smo64008v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70789 = smo62066.getStemDirection();
smo62066.setStemDirection(dirsmo70789);
smo62067.setStemDirection(dirsmo70789);
const smo70789 = new VF.Beam([smo62066,smo62067]);
 
// formatting measures in staff group smo64103
fmtsmo6112844.format([smo61128v0,smo62085v0,smo63033v0,smo64008v0], 121);
const stavesmo61128 = new VF.Stave(736, 1040, 135);
stavesmo61128.setAttribute('id', 'stavesmo61128');
stavesmo61128.setBegBarType(VF.Barline.type.NONE);
stavesmo61128.setContext(context);
stavesmo61128.draw();
smo61128v0.draw(context, stavesmo61128);
const stavesmo62085 = new VF.Stave(736, 1165, 135);
stavesmo62085.setAttribute('id', 'stavesmo62085');
stavesmo62085.setBegBarType(VF.Barline.type.NONE);
stavesmo62085.setContext(context);
stavesmo62085.draw();
smo62085v0.draw(context, stavesmo62085);
smo70789.setContext(context);
smo70789.draw();
const stavesmo63033 = new VF.Stave(736, 1253, 135);
stavesmo63033.setAttribute('id', 'stavesmo63033');
stavesmo63033.setBegBarType(VF.Barline.type.NONE);
stavesmo63033.setContext(context);
stavesmo63033.draw();
smo63033v0.draw(context, stavesmo63033);
const stavesmo64008 = new VF.Stave(736, 1366, 135);
stavesmo64008.setAttribute('id', 'stavesmo64008');
stavesmo64008.setBegBarType(VF.Barline.type.NONE);
stavesmo64008.setContext(context);
stavesmo64008.draw();
smo64008v0.draw(context, stavesmo64008);
const fmtsmo6114545 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo61145v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61145v0ar = [];
const smo61129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61129'] = smo61129;
smo61129.setAttribute('id', 'smo61129');
smo61145v0ar.push(smo61129);
smo61145v0.addTickables(smo61145v0ar)
fmtsmo6114545.joinVoices([smo61145v0]);
const fmtsmo6210545 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo62105v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62105v0ar = [];
const smo62086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo62086'] = smo62086;
smo62086.setAttribute('id', 'smo62086');
smo62105v0ar.push(smo62086);
const smo62087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62087'] = smo62087;
smo62087.setAttribute('id', 'smo62087');
smo62105v0ar.push(smo62087);
const smo62088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo62088'] = smo62088;
smo62088.setAttribute('id', 'smo62088');
smo62105v0ar.push(smo62088);
const smo62089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo62089'] = smo62089;
smo62089.setAttribute('id', 'smo62089');
smo62105v0ar.push(smo62089);
smo62105v0.addTickables(smo62105v0ar)
fmtsmo6210545.joinVoices([smo62105v0]);
const fmtsmo6305345 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo63053v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63053v0ar = [];
const smo63034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63034'] = smo63034;
smo63034.setAttribute('id', 'smo63034');
smo63053v0ar.push(smo63034);
const smo63035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63035'] = smo63035;
smo63035.setAttribute('id', 'smo63035');
smo63053v0ar.push(smo63035);
const smo63036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63036'] = smo63036;
smo63036.setAttribute('id', 'smo63036');
smo63053v0ar.push(smo63036);
const smo63037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63037'] = smo63037;
smo63037.setAttribute('id', 'smo63037');
smo63053v0ar.push(smo63037);
smo63053v0.addTickables(smo63053v0ar)
fmtsmo6305345.joinVoices([smo63053v0]);
const fmtsmo6402845 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo64028v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64028v0ar = [];
const smo64009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo64009'] = smo64009;
smo64009.setAttribute('id', 'smo64009');
smo64028v0ar.push(smo64009);
const smo64010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo64010'] = smo64010;
smo64010.setAttribute('id', 'smo64010');
smo64028v0ar.push(smo64010);
const smo64011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo64011'] = smo64011;
smo64011.setAttribute('id', 'smo64011');
smo64028v0ar.push(smo64011);
const smo64012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo64012'] = smo64012;
smo64012.setAttribute('id', 'smo64012');
smo64028v0ar.push(smo64012);
smo64028v0.addTickables(smo64028v0ar)
fmtsmo6402845.joinVoices([smo64028v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70798 = smo62086.getStemDirection();
smo62086.setStemDirection(dirsmo70798);
smo62087.setStemDirection(dirsmo70798);
const smo70798 = new VF.Beam([smo62086,smo62087]);
 
// formatting measures in staff group smo64103
fmtsmo6114545.format([smo61145v0,smo62105v0,smo63053v0,smo64028v0], 121);
const stavesmo61145 = new VF.Stave(871, 1040, 135);
stavesmo61145.setAttribute('id', 'stavesmo61145');
stavesmo61145.setBegBarType(VF.Barline.type.NONE);
stavesmo61145.setContext(context);
stavesmo61145.draw();
smo61145v0.draw(context, stavesmo61145);
const stavesmo62105 = new VF.Stave(871, 1165, 135);
stavesmo62105.setAttribute('id', 'stavesmo62105');
stavesmo62105.setBegBarType(VF.Barline.type.NONE);
stavesmo62105.setContext(context);
stavesmo62105.draw();
smo62105v0.draw(context, stavesmo62105);
smo70798.setContext(context);
smo70798.draw();
const stavesmo63053 = new VF.Stave(871, 1253, 135);
stavesmo63053.setAttribute('id', 'stavesmo63053');
stavesmo63053.setBegBarType(VF.Barline.type.NONE);
stavesmo63053.setContext(context);
stavesmo63053.draw();
smo63053v0.draw(context, stavesmo63053);
const stavesmo64028 = new VF.Stave(871, 1366, 135);
stavesmo64028.setAttribute('id', 'stavesmo64028');
stavesmo64028.setBegBarType(VF.Barline.type.NONE);
stavesmo64028.setContext(context);
stavesmo64028.draw();
smo64028v0.draw(context, stavesmo64028);
const fmtsmo6116246 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo61162v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61162v0ar = [];
const smo61146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61146'] = smo61146;
smo61146.setAttribute('id', 'smo61146');
smo61162v0ar.push(smo61146);
smo61162v0.addTickables(smo61162v0ar)
fmtsmo6116246.joinVoices([smo61162v0]);
const fmtsmo6212746 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo62127v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62127v0ar = [];
const smo62106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo62106'] = smo62106;
smo62106.setAttribute('id', 'smo62106');
smo62127v0ar.push(smo62106);
const smo62107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo62107'] = smo62107;
smo62107.setAttribute('id', 'smo62107');
smo62127v0ar.push(smo62107);
const smo62108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo62108'] = smo62108;
smo62108.setAttribute('id', 'smo62108');
smo62127v0ar.push(smo62108);
const smo62109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo62109'] = smo62109;
smo62109.setAttribute('id', 'smo62109');
smo62127v0ar.push(smo62109);
const smo62110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo62110'] = smo62110;
smo62110.setAttribute('id', 'smo62110');
smo62127v0ar.push(smo62110);
const smo62111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62111'] = smo62111;
smo62111.setAttribute('id', 'smo62111');
smo62127v0ar.push(smo62111);
smo62127v0.addTickables(smo62127v0ar)
fmtsmo6212746.joinVoices([smo62127v0]);
const fmtsmo6307346 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo63073v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63073v0ar = [];
const smo63054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63054'] = smo63054;
smo63054.setAttribute('id', 'smo63054');
smo63073v0ar.push(smo63054);
const smo63055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63055'] = smo63055;
smo63055.setAttribute('id', 'smo63055');
smo63073v0ar.push(smo63055);
const smo63056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63056'] = smo63056;
smo63056.setAttribute('id', 'smo63056');
smo63073v0ar.push(smo63056);
const smo63057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63057'] = smo63057;
smo63057.setAttribute('id', 'smo63057');
smo63073v0ar.push(smo63057);
smo63073v0.addTickables(smo63073v0ar)
fmtsmo6307346.joinVoices([smo63073v0]);
const fmtsmo6404846 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo64048v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64048v0ar = [];
const smo64029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo64029'] = smo64029;
smo64029.setAttribute('id', 'smo64029');
smo64048v0ar.push(smo64029);
const smo64030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo64030'] = smo64030;
smo64030.setAttribute('id', 'smo64030');
smo64048v0ar.push(smo64030);
const smo64031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo64031'] = smo64031;
smo64031.setAttribute('id', 'smo64031');
smo64048v0ar.push(smo64031);
const smo64032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo64032'] = smo64032;
smo64032.setAttribute('id', 'smo64032');
smo64048v0ar.push(smo64032);
smo64048v0.addTickables(smo64048v0ar)
fmtsmo6404846.joinVoices([smo64048v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70807 = smo62106.getStemDirection();
smo62106.setStemDirection(dirsmo70807);
smo62107.setStemDirection(dirsmo70807);
const smo70807 = new VF.Beam([smo62106,smo62107]);
const dirsmo70808 = smo62109.getStemDirection();
smo62109.setStemDirection(dirsmo70808);
smo62110.setStemDirection(dirsmo70808);
const smo70808 = new VF.Beam([smo62109,smo62110]);
 
// formatting measures in staff group smo64103
fmtsmo6116246.format([smo61162v0,smo62127v0,smo63073v0,smo64048v0], 147);
const stavesmo61162 = new VF.Stave(1006, 1040, 161);
stavesmo61162.setAttribute('id', 'stavesmo61162');
stavesmo61162.setBegBarType(VF.Barline.type.NONE);
stavesmo61162.setContext(context);
stavesmo61162.draw();
smo61162v0.draw(context, stavesmo61162);
const stavesmo62127 = new VF.Stave(1006, 1165, 161);
stavesmo62127.setAttribute('id', 'stavesmo62127');
stavesmo62127.setBegBarType(VF.Barline.type.NONE);
stavesmo62127.setContext(context);
stavesmo62127.draw();
smo62127v0.draw(context, stavesmo62127);
smo70807.setContext(context);
smo70807.draw();
smo70808.setContext(context);
smo70808.draw();
const stavesmo63073 = new VF.Stave(1006, 1253, 161);
stavesmo63073.setAttribute('id', 'stavesmo63073');
stavesmo63073.setBegBarType(VF.Barline.type.NONE);
stavesmo63073.setContext(context);
stavesmo63073.draw();
smo63073v0.draw(context, stavesmo63073);
const stavesmo64048 = new VF.Stave(1006, 1366, 161);
stavesmo64048.setAttribute('id', 'stavesmo64048');
stavesmo64048.setBegBarType(VF.Barline.type.NONE);
stavesmo64048.setContext(context);
stavesmo64048.draw();
smo64048v0.draw(context, stavesmo64048);
const fmtsmo6117947 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo61179v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61179v0ar = [];
const smo61163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61163'] = smo61163;
smo61163.setAttribute('id', 'smo61163');
smo61179v0ar.push(smo61163);
smo61179v0.addTickables(smo61179v0ar)
fmtsmo6117947.joinVoices([smo61179v0]);
const fmtsmo6214747 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo62147v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62147v0ar = [];
const smo62128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62128'] = smo62128;
smo62128.setAttribute('id', 'smo62128');
smo62147v0ar.push(smo62128);
const smo62129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo62129'] = smo62129;
smo62129.setAttribute('id', 'smo62129');
const smo62130 = new VF.Ornament('scoop');
smo62129.addModifier(smo62130, 0);
smo62147v0ar.push(smo62129);
const smo62131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62131'] = smo62131;
smo62131.setAttribute('id', 'smo62131');
smo62147v0ar.push(smo62131);
smo62147v0.addTickables(smo62147v0ar)
fmtsmo6214747.joinVoices([smo62147v0]);
const fmtsmo6309347 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo63093v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63093v0ar = [];
const smo63074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63074'] = smo63074;
smo63074.setAttribute('id', 'smo63074');
smo63093v0ar.push(smo63074);
const smo63075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo63075'] = smo63075;
smo63075.setAttribute('id', 'smo63075');
const smo63076 = new VF.Ornament('scoop');
smo63075.addModifier(smo63076, 0);
smo63093v0ar.push(smo63075);
const smo63077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo63077'] = smo63077;
smo63077.setAttribute('id', 'smo63077');
smo63093v0ar.push(smo63077);
smo63093v0.addTickables(smo63093v0ar)
fmtsmo6309347.joinVoices([smo63093v0]);
const fmtsmo6406747 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo64067v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64067v0ar = [];
const smo64049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo64049'] = smo64049;
smo64049.setAttribute('id', 'smo64049');
smo64067v0ar.push(smo64049);
const smo64050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo64050'] = smo64050;
smo64050.setAttribute('id', 'smo64050');
smo64067v0ar.push(smo64050);
const smo64051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo64051'] = smo64051;
smo64051.setAttribute('id', 'smo64051');
smo64067v0ar.push(smo64051);
smo64067v0.addTickables(smo64067v0ar)
fmtsmo6406747.joinVoices([smo64067v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6117947.format([smo61179v0,smo62147v0,smo63093v0,smo64067v0], 74);
const stavesmo61179 = new VF.Stave(1167, 1040, 92);
stavesmo61179.setAttribute('id', 'stavesmo61179');
stavesmo61179.setBegBarType(VF.Barline.type.NONE);
stavesmo61179.setEndBarType(5);
stavesmo61179.setContext(context);
stavesmo61179.draw();
smo61179v0.draw(context, stavesmo61179);
const stavesmo62147 = new VF.Stave(1167, 1165, 92);
stavesmo62147.setAttribute('id', 'stavesmo62147');
stavesmo62147.setBegBarType(VF.Barline.type.NONE);
stavesmo62147.setEndBarType(5);
stavesmo62147.setContext(context);
stavesmo62147.draw();
smo62147v0.draw(context, stavesmo62147);
const stavesmo63093 = new VF.Stave(1167, 1253, 92);
stavesmo63093.setAttribute('id', 'stavesmo63093');
stavesmo63093.setBegBarType(VF.Barline.type.NONE);
stavesmo63093.setEndBarType(5);
stavesmo63093.setContext(context);
stavesmo63093.draw();
smo63093v0.draw(context, stavesmo63093);
const stavesmo64067 = new VF.Stave(1167, 1366, 92);
stavesmo64067.setAttribute('id', 'stavesmo64067');
stavesmo64067.setBegBarType(VF.Barline.type.NONE);
stavesmo64067.setEndBarType(5);
stavesmo64067.setContext(context);
stavesmo64067.draw();
smo64067v0.draw(context, stavesmo64067);
const smo71619 = new VF.TextBracket({ start: smo60759, stop: smo60785, text: 'accelerando', position: 1 });
smo71619.setLine(1).setContext(context).draw();
const smo71620 = new VF.StaveTie({ first_note: smo62687, last_note: smo62704, 
          firstNote: smo62687, lastNote: smo62704, first_indices: [0], last_indices: [0]});
smo71620.setContext(context).draw();
const smo71621 = new VF.StaveTie({ first_note: smo62793, last_note: smo62810, 
          firstNote: smo62793, lastNote: smo62810, first_indices: [0], last_indices: [0]});
smo71621.setContext(context).draw();
const smo71622 = new VF.StaveTie({ first_note: smo62810, last_note: smo62827, 
          firstNote: smo62810, lastNote: smo62827, first_indices: [0], last_indices: [0]});
smo71622.setContext(context).draw();
const smo71623 = new VF.StaveTie({ first_note: smo62844, last_note: smo62861, 
          firstNote: smo62844, lastNote: smo62861, first_indices: [0], last_indices: [0]});
smo71623.setContext(context).draw();
const smo71624 = new VF.StaveTie({ first_note: smo63733, last_note: smo63734, 
          firstNote: smo63733, lastNote: smo63734, first_indices: [0], last_indices: [0]});
smo71624.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo60712').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60714').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60716').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60718').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60721').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60723').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60741').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60760').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60762').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60782').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60784').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60804').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60806').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60808').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60810').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60812').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60814').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60833').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60855').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60857').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60859').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60861').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60879').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60881').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60883').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60905').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60907').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60909').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60911').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60929').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60931').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60933').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60951').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60953').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60955').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60957').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60959').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60977').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60979').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60981').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60999').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo61002').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo61022').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo61024').setAttributeNS('', 'transform', 'translate(0 20)');
}
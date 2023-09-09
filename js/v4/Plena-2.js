// @@ Plena para tres ninos p 3/14  by Newman
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1569.9999999999998');
svg.setAttributeNS('', 'height', '1212.8945249597423');
svg.setAttributeNS('', 'viewBox', '0 0 2574 1989');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo10926013 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo109260v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109260v0ar = [];
const smo109236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109236.setAttribute('id', 'smo109236');
smo109260v0ar.push(smo109236);
const smo109237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109237.setAttribute('id', 'smo109237');
smo109260v0ar.push(smo109237);
const smo109238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo109238.setAttribute('id', 'smo109238');
smo109260v0ar.push(smo109238);
const smo109239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109239.setAttribute('id', 'smo109239');
smo109260v0ar.push(smo109239);
const smo109240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109240.setAttribute('id', 'smo109240');
smo109260v0ar.push(smo109240);
const smo109241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo109241.setAttribute('id', 'smo109241');
smo109260v0ar.push(smo109241);
const smo109242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109242.setAttribute('id', 'smo109242');
smo109260v0ar.push(smo109242);
const smo109243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109243.setAttribute('id', 'smo109243');
smo109260v0ar.push(smo109243);
const smo109244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo109244.setAttribute('id', 'smo109244');
smo109260v0ar.push(smo109244);
smo109260v0.addTickables(smo109260v0ar)
fmtsmo10926013.joinVoices([smo109260v0]);
const fmtsmo11168713 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo111687v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111687v0ar = [];
const smo111663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111663.setAttribute('id', 'smo111663');
smo111687v0ar.push(smo111663);
const smo111664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111664.setAttribute('id', 'smo111664');
smo111687v0ar.push(smo111664);
const smo111665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111665.setAttribute('id', 'smo111665');
smo111687v0ar.push(smo111665);
const smo111666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo111666.setAttribute('id', 'smo111666');
smo111687v0ar.push(smo111666);
const smo111667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo111667.setAttribute('id', 'smo111667');
smo111687v0ar.push(smo111667);
const smo111668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111668.setAttribute('id', 'smo111668');
smo111687v0ar.push(smo111668);
const smo111669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111669.setAttribute('id', 'smo111669');
smo111687v0ar.push(smo111669);
const smo111670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111670.setAttribute('id', 'smo111670');
smo111687v0ar.push(smo111670);
const smo111671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111671.setAttribute('id', 'smo111671');
smo111687v0ar.push(smo111671);
smo111687v0.addTickables(smo111687v0ar)
fmtsmo11168713.joinVoices([smo111687v0]);
const fmtsmo11410513 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo114105v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114105v0ar = [];
const smo114081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114081.setAttribute('id', 'smo114081');
smo114105v0ar.push(smo114081);
const smo114082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114082.setAttribute('id', 'smo114082');
smo114105v0ar.push(smo114082);
const smo114083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114083.setAttribute('id', 'smo114083');
smo114105v0ar.push(smo114083);
const smo114084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo114084.setAttribute('id', 'smo114084');
smo114105v0ar.push(smo114084);
const smo114085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo114085.setAttribute('id', 'smo114085');
smo114105v0ar.push(smo114085);
const smo114086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo114086.setAttribute('id', 'smo114086');
smo114105v0ar.push(smo114086);
const smo114087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114087.setAttribute('id', 'smo114087');
smo114105v0ar.push(smo114087);
const smo114088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114088.setAttribute('id', 'smo114088');
smo114105v0ar.push(smo114088);
const smo114089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114089.setAttribute('id', 'smo114089');
smo114105v0ar.push(smo114089);
smo114105v0.addTickables(smo114105v0ar)
fmtsmo11410513.joinVoices([smo114105v0]);
const fmtsmo11647913 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo116479v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116479v0ar = [];
const smo116455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116455.setAttribute('id', 'smo116455');
smo116479v0ar.push(smo116455);
const smo116456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116456.setAttribute('id', 'smo116456');
smo116479v0ar.push(smo116456);
const smo116457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116457.setAttribute('id', 'smo116457');
smo116479v0ar.push(smo116457);
const smo116458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo116458.setAttribute('id', 'smo116458');
smo116479v0ar.push(smo116458);
const smo116459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo116459.setAttribute('id', 'smo116459');
smo116479v0ar.push(smo116459);
const smo116460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo116460.setAttribute('id', 'smo116460');
smo116479v0ar.push(smo116460);
const smo116461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116461.setAttribute('id', 'smo116461');
smo116479v0ar.push(smo116461);
const smo116462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116462.setAttribute('id', 'smo116462');
smo116479v0ar.push(smo116462);
const smo116463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116463.setAttribute('id', 'smo116463');
smo116479v0ar.push(smo116463);
smo116479v0.addTickables(smo116479v0ar)
fmtsmo11647913.joinVoices([smo116479v0]);
const fmtsmo11883913 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo118839v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118839v0ar = [];
const smo118820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo118820.setAttribute('id', 'smo118820');
const  smo224160 = new VF.Articulation('a.').setPosition(3);
smo118820.addModifier(smo224160, 0);
smo118839v0ar.push(smo118820);
const smo118822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo118822.setAttribute('id', 'smo118822');
smo118839v0ar.push(smo118822);
const smo118823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo118823.setAttribute('id', 'smo118823');
smo118839v0ar.push(smo118823);
smo118839v0.addTickables(smo118839v0ar)
fmtsmo11883913.joinVoices([smo118839v0]);
const fmtsmo12113913 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo121139v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121139v0ar = [];
const smo121116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121116.setAttribute('id', 'smo121116');
smo121139v0ar.push(smo121116);
const smo121117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121117.setAttribute('id', 'smo121117');
smo121139v0ar.push(smo121117);
const smo121118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121118.setAttribute('id', 'smo121118');
smo121139v0ar.push(smo121118);
const smo121119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo121119.setAttribute('id', 'smo121119');
smo121139v0ar.push(smo121119);
const smo121120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121120.setAttribute('id', 'smo121120');
smo121139v0ar.push(smo121120);
const smo121121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo121121.setAttribute('id', 'smo121121');
smo121139v0ar.push(smo121121);
const smo121122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121122.setAttribute('id', 'smo121122');
smo121139v0ar.push(smo121122);
const smo121123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo121123.setAttribute('id', 'smo121123');
smo121139v0ar.push(smo121123);
smo121139v0.addTickables(smo121139v0ar)
fmtsmo12113913.joinVoices([smo121139v0]);
const fmtsmo12354513 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo123545v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123545v0ar = [];
const smo123522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123522.setAttribute('id', 'smo123522');
smo123545v0ar.push(smo123522);
const smo123523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123523.setAttribute('id', 'smo123523');
smo123545v0ar.push(smo123523);
const smo123524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123524.setAttribute('id', 'smo123524');
smo123545v0ar.push(smo123524);
const smo123525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo123525.setAttribute('id', 'smo123525');
smo123545v0ar.push(smo123525);
const smo123526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo123526.setAttribute('id', 'smo123526');
smo123545v0ar.push(smo123526);
const smo123527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo123527.setAttribute('id', 'smo123527');
smo123545v0ar.push(smo123527);
const smo123528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo123528.setAttribute('id', 'smo123528');
smo123545v0ar.push(smo123528);
const smo123529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123529.setAttribute('id', 'smo123529');
smo123545v0ar.push(smo123529);
smo123545v0.addTickables(smo123545v0ar)
fmtsmo12354513.joinVoices([smo123545v0]);
const fmtsmo12588813 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo125888v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125888v0ar = [];
const smo125872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125872.setAttribute('id', 'smo125872');
smo125888v0ar.push(smo125872);
smo125888v0.addTickables(smo125888v0ar)
fmtsmo12588813.joinVoices([smo125888v0]);
const fmtsmo12823813 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo128238v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128238v0ar = [];
const smo128222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128222.setAttribute('id', 'smo128222');
smo128238v0ar.push(smo128222);
smo128238v0.addTickables(smo128238v0ar)
fmtsmo12823813.joinVoices([smo128238v0]);
const fmtsmo13064413 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo130644v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130644v0ar = [];
const smo130621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo130621.setAttribute('id', 'smo130621');
smo130644v0ar.push(smo130621);
const smo130622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo130622.setAttribute('id', 'smo130622');
smo130644v0ar.push(smo130622);
const smo130623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo130623.setAttribute('id', 'smo130623');
smo130644v0ar.push(smo130623);
const smo130624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo130624.setAttribute('id', 'smo130624');
smo130644v0ar.push(smo130624);
const smo130625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo130625.setAttribute('id', 'smo130625');
smo130644v0ar.push(smo130625);
const smo130626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo130626.setAttribute('id', 'smo130626');
smo130644v0ar.push(smo130626);
const smo130627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130627.setAttribute('id', 'smo130627');
smo130644v0ar.push(smo130627);
const smo130628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo130628.setAttribute('id', 'smo130628');
smo130644v0ar.push(smo130628);
smo130644v0.addTickables(smo130644v0ar)
fmtsmo13064413.joinVoices([smo130644v0]);
const fmtsmo13301713 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo133017v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133017v0ar = [];
const smo132994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo132994.setAttribute('id', 'smo132994');
smo133017v0ar.push(smo132994);
const smo132995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo132995.setAttribute('id', 'smo132995');
smo133017v0ar.push(smo132995);
const smo132996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo132996.setAttribute('id', 'smo132996');
smo133017v0ar.push(smo132996);
const smo132997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo132997.setAttribute('id', 'smo132997');
smo133017v0ar.push(smo132997);
const smo132998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo132998.setAttribute('id', 'smo132998');
smo133017v0ar.push(smo132998);
const smo132999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo132999.setAttribute('id', 'smo132999');
smo133017v0ar.push(smo132999);
const smo133000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo133000.setAttribute('id', 'smo133000');
smo133017v0ar.push(smo133000);
const smo133001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo133001.setAttribute('id', 'smo133001');
smo133017v0ar.push(smo133001);
smo133017v0.addTickables(smo133017v0ar)
fmtsmo13301713.joinVoices([smo133017v0]);
const fmtsmo13536313 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo135363v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135363v0ar = [];
const smo135340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo135340.setAttribute('id', 'smo135340');
smo135363v0ar.push(smo135340);
const smo135341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo135341.setAttribute('id', 'smo135341');
smo135363v0ar.push(smo135341);
const smo135342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo135342.setAttribute('id', 'smo135342');
smo135363v0ar.push(smo135342);
const smo135343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo135343.setAttribute('id', 'smo135343');
smo135363v0ar.push(smo135343);
const smo135344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo135344.setAttribute('id', 'smo135344');
smo135363v0ar.push(smo135344);
const smo135345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo135345.setAttribute('id', 'smo135345');
smo135363v0ar.push(smo135345);
const smo135346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo135346.setAttribute('id', 'smo135346');
smo135363v0ar.push(smo135346);
const smo135347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo135347.setAttribute('id', 'smo135347');
smo135363v0ar.push(smo135347);
smo135363v0.addTickables(smo135363v0ar)
fmtsmo13536313.joinVoices([smo135363v0]);
const fmtsmo13769813 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo137698v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137698v0ar = [];
const smo137679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo137679.setAttribute('id', 'smo137679');
const  smo224161 = new VF.Articulation('a.').setPosition(3);
smo137679.addModifier(smo224161, 0);
smo137698v0ar.push(smo137679);
const smo137681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo137681.setAttribute('id', 'smo137681');
smo137698v0ar.push(smo137681);
const smo137682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo137682.setAttribute('id', 'smo137682');
smo137698v0ar.push(smo137682);
smo137698v0.addTickables(smo137698v0ar)
fmtsmo13769813.joinVoices([smo137698v0]);
const fmtsmo14002513 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo140025v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140025v0ar = [];
const smo140002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140002.setAttribute('id', 'smo140002');
smo140025v0ar.push(smo140002);
const smo140003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo140003.setAttribute('id', 'smo140003');
smo140025v0ar.push(smo140003);
const smo140004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo140004.setAttribute('id', 'smo140004');
smo140025v0ar.push(smo140004);
const smo140005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo140005.setAttribute('id', 'smo140005');
smo140025v0ar.push(smo140005);
const smo140006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo140006.setAttribute('id', 'smo140006');
smo140025v0ar.push(smo140006);
const smo140007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo140007.setAttribute('id', 'smo140007');
smo140025v0ar.push(smo140007);
const smo140008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140008.setAttribute('id', 'smo140008');
smo140025v0ar.push(smo140008);
const smo140009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo140009.setAttribute('id', 'smo140009');
smo140025v0ar.push(smo140009);
smo140025v0.addTickables(smo140025v0ar)
fmtsmo14002513.joinVoices([smo140025v0]);
const fmtsmo14246713 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo142467v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142467v0ar = [];
const smo142451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142451.setAttribute('id', 'smo142451');
smo142467v0ar.push(smo142451);
smo142467v0.addTickables(smo142467v0ar)
fmtsmo14246713.joinVoices([smo142467v0]);
const fmtsmo14497613 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo144976v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144976v0ar = [];
const smo144957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144957.setAttribute('id', 'smo144957');
const  smo224162 = new VF.Articulation('a.').setPosition(3);
smo144957.addModifier(smo224162, 0);
smo144976v0ar.push(smo144957);
const smo144959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144959.setAttribute('id', 'smo144959');
smo144976v0ar.push(smo144959);
const smo144960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo144960.setAttribute('id', 'smo144960');
smo144976v0ar.push(smo144960);
smo144976v0.addTickables(smo144976v0ar)
fmtsmo14497613.joinVoices([smo144976v0]);
const fmtsmo14742013 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo147420v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147420v0ar = [];
const smo147394 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147394.setAttribute('id', 'smo147394');
const smo1473940acc = new VF.Accidental('n');
smo147394.addModifier(smo1473940acc, 0);
smo147420v0ar.push(smo147394);
const smo147395 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147395.setAttribute('id', 'smo147395');
smo147420v0ar.push(smo147395);
const smo147396 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147396.setAttribute('id', 'smo147396');
smo147420v0ar.push(smo147396);
const smo147397 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147397.setAttribute('id', 'smo147397');
smo147420v0ar.push(smo147397);
const smo147398 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147398.setAttribute('id', 'smo147398');
smo147420v0ar.push(smo147398);
const smo147399 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147399.setAttribute('id', 'smo147399');
smo147420v0ar.push(smo147399);
const smo147400 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147400.setAttribute('id', 'smo147400');
smo147420v0ar.push(smo147400);
const smo147401 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147401.setAttribute('id', 'smo147401');
smo147420v0ar.push(smo147401);
const smo147402 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147402.setAttribute('id', 'smo147402');
smo147420v0ar.push(smo147402);
const smo147403 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147403.setAttribute('id', 'smo147403');
smo147420v0ar.push(smo147403);
smo147420v0.addTickables(smo147420v0ar)
fmtsmo14742013.joinVoices([smo147420v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
const dirsmo215937 = smo109236.getStemDirection();
smo109236.setStemDirection(dirsmo215937);
smo109237.setStemDirection(dirsmo215937);
smo109238.setStemDirection(dirsmo215937);
const smo215937 = new VF.Beam([smo109236,smo109237,smo109238]);
const dirsmo215938 = smo109239.getStemDirection();
smo109239.setStemDirection(dirsmo215938);
smo109240.setStemDirection(dirsmo215938);
const smo215938 = new VF.Beam([smo109239,smo109240]);
const dirsmo215939 = smo109242.getStemDirection();
smo109242.setStemDirection(dirsmo215939);
smo109243.setStemDirection(dirsmo215939);
const smo215939 = new VF.Beam([smo109242,smo109243]);
const dirsmo215942 = smo111663.getStemDirection();
smo111663.setStemDirection(dirsmo215942);
smo111664.setStemDirection(dirsmo215942);
smo111665.setStemDirection(dirsmo215942);
const smo215942 = new VF.Beam([smo111663,smo111664,smo111665]);
const dirsmo215943 = smo111666.getStemDirection();
smo111666.setStemDirection(dirsmo215943);
smo111667.setStemDirection(dirsmo215943);
const smo215943 = new VF.Beam([smo111666,smo111667]);
const dirsmo215944 = smo111669.getStemDirection();
smo111669.setStemDirection(dirsmo215944);
smo111670.setStemDirection(dirsmo215944);
const smo215944 = new VF.Beam([smo111669,smo111670]);
const dirsmo215947 = smo114081.getStemDirection();
smo114081.setStemDirection(dirsmo215947);
smo114082.setStemDirection(dirsmo215947);
smo114083.setStemDirection(dirsmo215947);
const smo215947 = new VF.Beam([smo114081,smo114082,smo114083]);
const dirsmo215948 = smo114084.getStemDirection();
smo114084.setStemDirection(dirsmo215948);
smo114085.setStemDirection(dirsmo215948);
const smo215948 = new VF.Beam([smo114084,smo114085]);
const dirsmo215949 = smo114087.getStemDirection();
smo114087.setStemDirection(dirsmo215949);
smo114088.setStemDirection(dirsmo215949);
const smo215949 = new VF.Beam([smo114087,smo114088]);
const dirsmo215952 = smo116455.getStemDirection();
smo116455.setStemDirection(dirsmo215952);
smo116456.setStemDirection(dirsmo215952);
smo116457.setStemDirection(dirsmo215952);
const smo215952 = new VF.Beam([smo116455,smo116456,smo116457]);
const dirsmo215953 = smo116458.getStemDirection();
smo116458.setStemDirection(dirsmo215953);
smo116459.setStemDirection(dirsmo215953);
const smo215953 = new VF.Beam([smo116458,smo116459]);
const dirsmo215954 = smo116461.getStemDirection();
smo116461.setStemDirection(dirsmo215954);
smo116462.setStemDirection(dirsmo215954);
const smo215954 = new VF.Beam([smo116461,smo116462]);
 
// formatting measures in staff group smo149769
fmtsmo10926013.format([smo109260v0,smo111687v0,smo114105v0,smo116479v0,smo118839v0], 352);
const stavesmo109260 = new VF.Stave(138, 183.2253035909339, 440);
stavesmo109260.setAttribute('id', 'stavesmo109260');
stavesmo109260.setBegBarType(1);
stavesmo109260.addClef('treble');
const keysmo109260 = new VF.KeySignature('D');
keysmo109260.addToStave(stavesmo109260);
stavesmo109260.setContext(context);
stavesmo109260.draw();
smo109260v0.draw(context, stavesmo109260);
smo215937.setContext(context);
smo215937.draw();
smo215938.setContext(context);
smo215938.draw();
smo215939.setContext(context);
smo215939.draw();
const stavesmo111687 = new VF.Stave(138, 288.2253035909339, 440);
stavesmo111687.setAttribute('id', 'stavesmo111687');
stavesmo111687.setBegBarType(1);
stavesmo111687.addClef('treble');
const keysmo111687 = new VF.KeySignature('D');
keysmo111687.addToStave(stavesmo111687);
stavesmo111687.setContext(context);
stavesmo111687.draw();
smo111687v0.draw(context, stavesmo111687);
smo215942.setContext(context);
smo215942.draw();
smo215943.setContext(context);
smo215943.draw();
smo215944.setContext(context);
smo215944.draw();
const stavesmo114105 = new VF.Stave(138, 379.2253035909339, 440);
stavesmo114105.setAttribute('id', 'stavesmo114105');
stavesmo114105.setBegBarType(1);
stavesmo114105.addClef('treble');
const keysmo114105 = new VF.KeySignature('G');
keysmo114105.addToStave(stavesmo114105);
stavesmo114105.setContext(context);
stavesmo114105.draw();
smo114105v0.draw(context, stavesmo114105);
smo215947.setContext(context);
smo215947.draw();
smo215948.setContext(context);
smo215948.draw();
smo215949.setContext(context);
smo215949.draw();
const stavesmo116479 = new VF.Stave(138, 479.2253035909339, 440);
stavesmo116479.setAttribute('id', 'stavesmo116479');
stavesmo116479.setBegBarType(1);
stavesmo116479.addClef('treble');
const keysmo116479 = new VF.KeySignature('G');
keysmo116479.addToStave(stavesmo116479);
stavesmo116479.setContext(context);
stavesmo116479.draw();
smo116479v0.draw(context, stavesmo116479);
smo215952.setContext(context);
smo215952.draw();
smo215953.setContext(context);
smo215953.draw();
smo215954.setContext(context);
smo215954.draw();
const stavesmo118839 = new VF.Stave(138, 549.2253035909339, 440);
stavesmo118839.setAttribute('id', 'stavesmo118839');
stavesmo118839.setBegBarType(1);
stavesmo118839.addClef('treble');
const keysmo118839 = new VF.KeySignature('D');
keysmo118839.addToStave(stavesmo118839);
stavesmo118839.setContext(context);
stavesmo118839.draw();
smo118839v0.draw(context, stavesmo118839);
// create beam groups and tuplets for format grp smo149771 before formatting
const dirsmo215959 = smo121117.getStemDirection();
smo121117.setStemDirection(dirsmo215959);
smo121118.setStemDirection(dirsmo215959);
const smo215959 = new VF.Beam([smo121117,smo121118]);
const dirsmo215960 = smo121120.getStemDirection();
smo121120.setStemDirection(dirsmo215960);
smo121121.setStemDirection(dirsmo215960);
smo121122.setStemDirection(dirsmo215960);
smo121123.setStemDirection(dirsmo215960);
const smo215960 = new VF.Beam([smo121120,smo121121,smo121122,smo121123]);
const dirsmo215963 = smo123523.getStemDirection();
smo123523.setStemDirection(dirsmo215963);
smo123524.setStemDirection(dirsmo215963);
const smo215963 = new VF.Beam([smo123523,smo123524]);
const dirsmo215964 = smo123526.getStemDirection();
smo123526.setStemDirection(dirsmo215964);
smo123527.setStemDirection(dirsmo215964);
smo123528.setStemDirection(dirsmo215964);
smo123529.setStemDirection(dirsmo215964);
const smo215964 = new VF.Beam([smo123526,smo123527,smo123528,smo123529]);
 
// formatting measures in staff group smo149771
fmtsmo12113913.format([smo121139v0,smo123545v0,smo125888v0,smo128238v0], 364);
const stavesmo121139 = new VF.Stave(138, 630.2253035909339, 440);
stavesmo121139.setAttribute('id', 'stavesmo121139');
stavesmo121139.setBegBarType(1);
stavesmo121139.addClef('treble');
const keysmo121139 = new VF.KeySignature('G');
keysmo121139.addToStave(stavesmo121139);
stavesmo121139.setContext(context);
stavesmo121139.draw();
smo121139v0.draw(context, stavesmo121139);
smo215959.setContext(context);
smo215959.draw();
smo215960.setContext(context);
smo215960.draw();
const stavesmo123545 = new VF.Stave(138, 700.2253035909339, 440);
stavesmo123545.setAttribute('id', 'stavesmo123545');
stavesmo123545.setBegBarType(1);
stavesmo123545.addClef('treble');
const keysmo123545 = new VF.KeySignature('G');
keysmo123545.addToStave(stavesmo123545);
stavesmo123545.setContext(context);
stavesmo123545.draw();
smo123545v0.draw(context, stavesmo123545);
smo215963.setContext(context);
smo215963.draw();
smo215964.setContext(context);
smo215964.draw();
const stavesmo125888 = new VF.Stave(138, 761.2253035909339, 440);
stavesmo125888.setAttribute('id', 'stavesmo125888');
stavesmo125888.setBegBarType(1);
stavesmo125888.addClef('treble');
const keysmo125888 = new VF.KeySignature('G');
keysmo125888.addToStave(stavesmo125888);
stavesmo125888.setContext(context);
stavesmo125888.draw();
smo125888v0.draw(context, stavesmo125888);
const stavesmo128238 = new VF.Stave(138, 831.2253035909339, 440);
stavesmo128238.setAttribute('id', 'stavesmo128238');
stavesmo128238.setBegBarType(1);
stavesmo128238.addClef('treble');
const keysmo128238 = new VF.KeySignature('G');
keysmo128238.addToStave(stavesmo128238);
stavesmo128238.setContext(context);
stavesmo128238.draw();
smo128238v0.draw(context, stavesmo128238);
// create beam groups and tuplets for format grp smo149773 before formatting
const dirsmo215971 = smo130622.getStemDirection();
smo130622.setStemDirection(dirsmo215971);
smo130623.setStemDirection(dirsmo215971);
const smo215971 = new VF.Beam([smo130622,smo130623]);
const dirsmo215972 = smo130625.getStemDirection();
smo130625.setStemDirection(dirsmo215972);
smo130626.setStemDirection(dirsmo215972);
smo130627.setStemDirection(dirsmo215972);
smo130628.setStemDirection(dirsmo215972);
const smo215972 = new VF.Beam([smo130625,smo130626,smo130627,smo130628]);
const dirsmo215975 = smo132995.getStemDirection();
smo132995.setStemDirection(dirsmo215975);
smo132996.setStemDirection(dirsmo215975);
const smo215975 = new VF.Beam([smo132995,smo132996]);
const dirsmo215976 = smo132998.getStemDirection();
smo132998.setStemDirection(dirsmo215976);
smo132999.setStemDirection(dirsmo215976);
smo133000.setStemDirection(dirsmo215976);
smo133001.setStemDirection(dirsmo215976);
const smo215976 = new VF.Beam([smo132998,smo132999,smo133000,smo133001]);
const dirsmo215979 = smo135341.getStemDirection();
smo135341.setStemDirection(dirsmo215979);
smo135342.setStemDirection(dirsmo215979);
const smo215979 = new VF.Beam([smo135341,smo135342]);
const dirsmo215980 = smo135344.getStemDirection();
smo135344.setStemDirection(dirsmo215980);
smo135345.setStemDirection(dirsmo215980);
smo135346.setStemDirection(dirsmo215980);
smo135347.setStemDirection(dirsmo215980);
const smo215980 = new VF.Beam([smo135344,smo135345,smo135346,smo135347]);
 
// formatting measures in staff group smo149773
fmtsmo13064413.format([smo130644v0,smo133017v0,smo135363v0,smo137698v0], 364);
const stavesmo130644 = new VF.Stave(138, 936.2253035909339, 440);
stavesmo130644.setAttribute('id', 'stavesmo130644');
stavesmo130644.setBegBarType(1);
stavesmo130644.addClef('bass');
const keysmo130644 = new VF.KeySignature('F');
keysmo130644.addToStave(stavesmo130644);
stavesmo130644.setContext(context);
stavesmo130644.draw();
smo130644v0.draw(context, stavesmo130644);
smo215971.setContext(context);
smo215971.draw();
smo215972.setContext(context);
smo215972.draw();
const stavesmo133017 = new VF.Stave(138, 1023.2253035909339, 440);
stavesmo133017.setAttribute('id', 'stavesmo133017');
stavesmo133017.setBegBarType(1);
stavesmo133017.addClef('bass');
const keysmo133017 = new VF.KeySignature('F');
keysmo133017.addToStave(stavesmo133017);
stavesmo133017.setContext(context);
stavesmo133017.draw();
smo133017v0.draw(context, stavesmo133017);
smo215975.setContext(context);
smo215975.draw();
smo215976.setContext(context);
smo215976.draw();
const stavesmo135363 = new VF.Stave(138, 1128.225303590934, 440);
stavesmo135363.setAttribute('id', 'stavesmo135363');
stavesmo135363.setBegBarType(1);
stavesmo135363.addClef('bass');
const keysmo135363 = new VF.KeySignature('F');
keysmo135363.addToStave(stavesmo135363);
stavesmo135363.setContext(context);
stavesmo135363.draw();
smo135363v0.draw(context, stavesmo135363);
smo215979.setContext(context);
smo215979.draw();
smo215980.setContext(context);
smo215980.draw();
const stavesmo137698 = new VF.Stave(138, 1213.225303590934, 440);
stavesmo137698.setAttribute('id', 'stavesmo137698');
stavesmo137698.setBegBarType(1);
stavesmo137698.addClef('bass');
const keysmo137698 = new VF.KeySignature('F');
keysmo137698.addToStave(stavesmo137698);
stavesmo137698.setContext(context);
stavesmo137698.draw();
smo137698v0.draw(context, stavesmo137698);
// create beam groups and tuplets for format grp smo142224 before formatting
const dirsmo215985 = smo140003.getStemDirection();
smo140003.setStemDirection(dirsmo215985);
smo140004.setStemDirection(dirsmo215985);
const smo215985 = new VF.Beam([smo140003,smo140004]);
const dirsmo215986 = smo140006.getStemDirection();
smo140006.setStemDirection(dirsmo215986);
smo140007.setStemDirection(dirsmo215986);
smo140008.setStemDirection(dirsmo215986);
smo140009.setStemDirection(dirsmo215986);
const smo215986 = new VF.Beam([smo140006,smo140007,smo140008,smo140009]);
 
// formatting measures in staff group smo142224
fmtsmo14002513.format([smo140025v0], 365);
const stavesmo140025 = new VF.Stave(138, 1290.225303590934, 440);
stavesmo140025.setAttribute('id', 'stavesmo140025');
stavesmo140025.setBegBarType(1);
stavesmo140025.addClef('treble');
const keysmo140025 = new VF.KeySignature('F');
keysmo140025.addToStave(stavesmo140025);
stavesmo140025.setContext(context);
stavesmo140025.draw();
smo140025v0.draw(context, stavesmo140025);
smo215985.setContext(context);
smo215985.draw();
smo215986.setContext(context);
smo215986.draw();
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14246713.format([smo142467v0], 365);
const stavesmo142467 = new VF.Stave(138, 1373.225303590934, 440);
stavesmo142467.setAttribute('id', 'stavesmo142467');
stavesmo142467.setBegBarType(1);
stavesmo142467.addClef('treble');
const keysmo142467 = new VF.KeySignature('F');
keysmo142467.addToStave(stavesmo142467);
stavesmo142467.setContext(context);
stavesmo142467.draw();
smo142467v0.draw(context, stavesmo142467);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14497613.format([smo144976v0], 364);
const stavesmo144976 = new VF.Stave(138, 1478.225303590934, 440);
stavesmo144976.setAttribute('id', 'stavesmo144976');
stavesmo144976.setBegBarType(1);
stavesmo144976.addClef('bass');
const keysmo144976 = new VF.KeySignature('F');
keysmo144976.addToStave(stavesmo144976);
stavesmo144976.setContext(context);
stavesmo144976.draw();
smo144976v0.draw(context, stavesmo144976);
// create beam groups and tuplets for format grp smo149763 before formatting
const dirsmo215993 = smo147394.getStemDirection();
smo147394.setStemDirection(dirsmo215993);
smo147395.setStemDirection(dirsmo215993);
smo147396.setStemDirection(dirsmo215993);
smo147397.setStemDirection(dirsmo215993);
const smo215993 = new VF.Beam([smo147394,smo147395,smo147396,smo147397]);
const dirsmo215994 = smo147398.getStemDirection();
smo147398.setStemDirection(dirsmo215994);
smo147399.setStemDirection(dirsmo215994);
const smo215994 = new VF.Beam([smo147398,smo147399]);
const smo147404 = new VF.Tuplet([smo147395,smo147396,smo147397], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo149763
fmtsmo14742013.format([smo147420v0], 373);
const stavesmo147420 = new VF.Stave(138, 1555.225303590934, 440);
stavesmo147420.setAttribute('id', 'stavesmo147420');
stavesmo147420.setBegBarType(1);
stavesmo147420.addClef('percussion');
const keysmo147420 = new VF.KeySignature('F');
keysmo147420.addToStave(stavesmo147420);
stavesmo147420.setContext(context);
stavesmo147420.draw();
smo147420v0.draw(context, stavesmo147420);
smo215993.setContext(context);
smo215993.draw();
smo215994.setContext(context);
smo215994.draw();
smo147404.setContext(context).draw();
const leftsmo149763stavesmo10926016 = new VF.StaveConnector(stavesmo109260, stavesmo118839).setType(3);
leftsmo149763stavesmo10926016.setContext(context).draw();
const leftsmo149763stavesmo12113916 = new VF.StaveConnector(stavesmo121139, stavesmo128238).setType(3);
leftsmo149763stavesmo12113916.setContext(context).draw();
const leftsmo149763stavesmo13064416 = new VF.StaveConnector(stavesmo130644, stavesmo137698).setType(3);
leftsmo149763stavesmo13064416.setContext(context).draw();
const fmtsmo10928314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo109283v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109283v0ar = [];
const smo109261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo109261.setAttribute('id', 'smo109261');
smo109283v0ar.push(smo109261);
const smo109262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo109262.setAttribute('id', 'smo109262');
const  smo224197 = new VF.Articulation('a.').setPosition(3);
smo109262.addModifier(smo224197, 0);
smo109283v0ar.push(smo109262);
const smo109264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo109264.setAttribute('id', 'smo109264');
const  smo224198 = new VF.Articulation('a.').setPosition(3);
smo109264.addModifier(smo224198, 0);
smo109283v0ar.push(smo109264);
const smo109266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo109266.setAttribute('id', 'smo109266');
const  smo224199 = new VF.Articulation('a.').setPosition(3);
smo109266.addModifier(smo224199, 0);
smo109283v0ar.push(smo109266);
smo109283v0.addTickables(smo109283v0ar)
fmtsmo10928314.joinVoices([smo109283v0]);
const fmtsmo11171014 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo111710v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111710v0ar = [];
const smo111688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111688.setAttribute('id', 'smo111688');
smo111710v0ar.push(smo111688);
const smo111689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111689.setAttribute('id', 'smo111689');
const  smo224200 = new VF.Articulation('a.').setPosition(3);
smo111689.addModifier(smo224200, 0);
smo111710v0ar.push(smo111689);
const smo111691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111691.setAttribute('id', 'smo111691');
const  smo224201 = new VF.Articulation('a.').setPosition(3);
smo111691.addModifier(smo224201, 0);
smo111710v0ar.push(smo111691);
const smo111693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111693.setAttribute('id', 'smo111693');
const  smo224202 = new VF.Articulation('a.').setPosition(3);
smo111693.addModifier(smo224202, 0);
smo111710v0ar.push(smo111693);
smo111710v0.addTickables(smo111710v0ar)
fmtsmo11171014.joinVoices([smo111710v0]);
const fmtsmo11412814 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo114128v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114128v0ar = [];
const smo114106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo114106.setAttribute('id', 'smo114106');
smo114128v0ar.push(smo114106);
const smo114107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114107.setAttribute('id', 'smo114107');
const  smo224203 = new VF.Articulation('a.').setPosition(3);
smo114107.addModifier(smo224203, 0);
smo114128v0ar.push(smo114107);
const smo114109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114109.setAttribute('id', 'smo114109');
const  smo224204 = new VF.Articulation('a.').setPosition(3);
smo114109.addModifier(smo224204, 0);
smo114128v0ar.push(smo114109);
const smo114111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo114111.setAttribute('id', 'smo114111');
const  smo224205 = new VF.Articulation('a.').setPosition(3);
smo114111.addModifier(smo224205, 0);
smo114128v0ar.push(smo114111);
smo114128v0.addTickables(smo114128v0ar)
fmtsmo11412814.joinVoices([smo114128v0]);
const fmtsmo11650214 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo116502v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116502v0ar = [];
const smo116480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo116480.setAttribute('id', 'smo116480');
smo116502v0ar.push(smo116480);
const smo116481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116481.setAttribute('id', 'smo116481');
const  smo224206 = new VF.Articulation('a.').setPosition(3);
smo116481.addModifier(smo224206, 0);
smo116502v0ar.push(smo116481);
const smo116483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116483.setAttribute('id', 'smo116483');
const  smo224207 = new VF.Articulation('a.').setPosition(3);
smo116483.addModifier(smo224207, 0);
smo116502v0ar.push(smo116483);
const smo116485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo116485.setAttribute('id', 'smo116485');
const  smo224208 = new VF.Articulation('a.').setPosition(3);
smo116485.addModifier(smo224208, 0);
smo116502v0ar.push(smo116485);
smo116502v0.addTickables(smo116502v0ar)
fmtsmo11650214.joinVoices([smo116502v0]);
const fmtsmo11885914 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo118859v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118859v0ar = [];
const smo118840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo118840.setAttribute('id', 'smo118840');
smo118859v0ar.push(smo118840);
const smo118841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo118841.setAttribute('id', 'smo118841');
smo118859v0ar.push(smo118841);
const smo118842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo118842.setAttribute('id', 'smo118842');
smo118859v0ar.push(smo118842);
const smo118843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo118843.setAttribute('id', 'smo118843');
smo118859v0ar.push(smo118843);
smo118859v0.addTickables(smo118859v0ar)
fmtsmo11885914.joinVoices([smo118859v0]);
const fmtsmo12116114 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo121161v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121161v0ar = [];
const smo121140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo121140.setAttribute('id', 'smo121140');
smo121161v0ar.push(smo121140);
const smo121141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo121141.setAttribute('id', 'smo121141');
smo121161v0ar.push(smo121141);
const smo121142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121142.setAttribute('id', 'smo121142');
smo121161v0ar.push(smo121142);
const smo121143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121143.setAttribute('id', 'smo121143');
smo121161v0ar.push(smo121143);
const smo121144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121144.setAttribute('id', 'smo121144');
smo121161v0ar.push(smo121144);
const smo121145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121145.setAttribute('id', 'smo121145');
smo121161v0ar.push(smo121145);
smo121161v0.addTickables(smo121161v0ar)
fmtsmo12116114.joinVoices([smo121161v0]);
const fmtsmo12356714 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo123567v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123567v0ar = [];
const smo123546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo123546.setAttribute('id', 'smo123546');
smo123567v0ar.push(smo123546);
const smo123547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo123547.setAttribute('id', 'smo123547');
smo123567v0ar.push(smo123547);
const smo123548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo123548.setAttribute('id', 'smo123548');
smo123567v0ar.push(smo123548);
const smo123549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123549.setAttribute('id', 'smo123549');
smo123567v0ar.push(smo123549);
const smo123550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123550.setAttribute('id', 'smo123550');
smo123567v0ar.push(smo123550);
const smo123551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo123551.setAttribute('id', 'smo123551');
smo123567v0ar.push(smo123551);
smo123567v0.addTickables(smo123567v0ar)
fmtsmo12356714.joinVoices([smo123567v0]);
const fmtsmo12590514 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo125905v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125905v0ar = [];
const smo125889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125889.setAttribute('id', 'smo125889');
smo125905v0ar.push(smo125889);
smo125905v0.addTickables(smo125905v0ar)
fmtsmo12590514.joinVoices([smo125905v0]);
const fmtsmo12825514 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo128255v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128255v0ar = [];
const smo128239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128239.setAttribute('id', 'smo128239');
smo128255v0ar.push(smo128239);
smo128255v0.addTickables(smo128255v0ar)
fmtsmo12825514.joinVoices([smo128255v0]);
const fmtsmo13066614 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo130666v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130666v0ar = [];
const smo130645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130645.setAttribute('id', 'smo130645');
smo130666v0ar.push(smo130645);
const smo130646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130646.setAttribute('id', 'smo130646');
smo130666v0ar.push(smo130646);
const smo130647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo130647.setAttribute('id', 'smo130647');
smo130666v0ar.push(smo130647);
const smo130648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo130648.setAttribute('id', 'smo130648');
smo130666v0ar.push(smo130648);
const smo130649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo130649.setAttribute('id', 'smo130649');
smo130666v0ar.push(smo130649);
const smo130650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo130650.setAttribute('id', 'smo130650');
smo130666v0ar.push(smo130650);
smo130666v0.addTickables(smo130666v0ar)
fmtsmo13066614.joinVoices([smo130666v0]);
const fmtsmo13303914 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo133039v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133039v0ar = [];
const smo133018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo133018.setAttribute('id', 'smo133018');
smo133039v0ar.push(smo133018);
const smo133019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo133019.setAttribute('id', 'smo133019');
smo133039v0ar.push(smo133019);
const smo133020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo133020.setAttribute('id', 'smo133020');
smo133039v0ar.push(smo133020);
const smo133021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo133021.setAttribute('id', 'smo133021');
smo133039v0ar.push(smo133021);
const smo133022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo133022.setAttribute('id', 'smo133022');
smo133039v0ar.push(smo133022);
const smo133023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo133023.setAttribute('id', 'smo133023');
smo133039v0ar.push(smo133023);
smo133039v0.addTickables(smo133039v0ar)
fmtsmo13303914.joinVoices([smo133039v0]);
const fmtsmo13538514 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo135385v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135385v0ar = [];
const smo135364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135364.setAttribute('id', 'smo135364');
smo135385v0ar.push(smo135364);
const smo135365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135365.setAttribute('id', 'smo135365');
smo135385v0ar.push(smo135365);
const smo135366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo135366.setAttribute('id', 'smo135366');
smo135385v0ar.push(smo135366);
const smo135367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo135367.setAttribute('id', 'smo135367');
smo135385v0ar.push(smo135367);
const smo135368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135368.setAttribute('id', 'smo135368');
smo135385v0ar.push(smo135368);
const smo135369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135369.setAttribute('id', 'smo135369');
smo135385v0ar.push(smo135369);
smo135385v0.addTickables(smo135385v0ar)
fmtsmo13538514.joinVoices([smo135385v0]);
const fmtsmo13771814 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo137718v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137718v0ar = [];
const smo137699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo137699.setAttribute('id', 'smo137699');
smo137718v0ar.push(smo137699);
const smo137700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo137700.setAttribute('id', 'smo137700');
smo137718v0ar.push(smo137700);
const smo137701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo137701.setAttribute('id', 'smo137701');
smo137718v0ar.push(smo137701);
const smo137702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo137702.setAttribute('id', 'smo137702');
smo137718v0ar.push(smo137702);
smo137718v0.addTickables(smo137718v0ar)
fmtsmo13771814.joinVoices([smo137718v0]);
const fmtsmo14004714 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo140047v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140047v0ar = [];
const smo140026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo140026.setAttribute('id', 'smo140026');
smo140047v0ar.push(smo140026);
const smo140027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo140027.setAttribute('id', 'smo140027');
smo140047v0ar.push(smo140027);
const smo140028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140028.setAttribute('id', 'smo140028');
smo140047v0ar.push(smo140028);
const smo140029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140029.setAttribute('id', 'smo140029');
smo140047v0ar.push(smo140029);
const smo140030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140030.setAttribute('id', 'smo140030');
smo140047v0ar.push(smo140030);
const smo140031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140031.setAttribute('id', 'smo140031');
smo140047v0ar.push(smo140031);
smo140047v0.addTickables(smo140047v0ar)
fmtsmo14004714.joinVoices([smo140047v0]);
const fmtsmo14248414 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo142484v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142484v0ar = [];
const smo142468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142468.setAttribute('id', 'smo142468');
smo142484v0ar.push(smo142468);
smo142484v0.addTickables(smo142484v0ar)
fmtsmo14248414.joinVoices([smo142484v0]);
const fmtsmo14499614 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo144996v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144996v0ar = [];
const smo144977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144977.setAttribute('id', 'smo144977');
smo144996v0ar.push(smo144977);
const smo144978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144978.setAttribute('id', 'smo144978');
smo144996v0ar.push(smo144978);
const smo144979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144979.setAttribute('id', 'smo144979');
smo144996v0ar.push(smo144979);
const smo144980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo144980.setAttribute('id', 'smo144980');
smo144996v0ar.push(smo144980);
smo144996v0.addTickables(smo144996v0ar)
fmtsmo14499614.joinVoices([smo144996v0]);
const fmtsmo14744714 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo147447v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147447v0ar = [];
const smo147421 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147421.setAttribute('id', 'smo147421');
const smo1474210acc = new VF.Accidental('n');
smo147421.addModifier(smo1474210acc, 0);
smo147447v0ar.push(smo147421);
const smo147422 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147422.setAttribute('id', 'smo147422');
smo147447v0ar.push(smo147422);
const smo147423 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147423.setAttribute('id', 'smo147423');
smo147447v0ar.push(smo147423);
const smo147424 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147424.setAttribute('id', 'smo147424');
smo147447v0ar.push(smo147424);
const smo147425 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147425.setAttribute('id', 'smo147425');
smo147447v0ar.push(smo147425);
const smo147426 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147426.setAttribute('id', 'smo147426');
smo147447v0ar.push(smo147426);
const smo147427 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147427.setAttribute('id', 'smo147427');
smo147447v0ar.push(smo147427);
const smo147428 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147428.setAttribute('id', 'smo147428');
smo147447v0ar.push(smo147428);
const smo147429 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147429.setAttribute('id', 'smo147429');
smo147447v0ar.push(smo147429);
const smo147430 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147430.setAttribute('id', 'smo147430');
smo147447v0ar.push(smo147430);
smo147447v0.addTickables(smo147447v0ar)
fmtsmo14744714.joinVoices([smo147447v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
 
// formatting measures in staff group smo149769
fmtsmo10928314.format([smo109283v0,smo111710v0,smo114128v0,smo116502v0,smo118859v0], 323);
const stavesmo109283 = new VF.Stave(578, 183.2253035909339, 337);
stavesmo109283.setAttribute('id', 'stavesmo109283');
stavesmo109283.setBegBarType(VF.Barline.type.NONE);
stavesmo109283.setContext(context);
stavesmo109283.draw();
smo109283v0.draw(context, stavesmo109283);
const stavesmo111710 = new VF.Stave(578, 288.2253035909339, 337);
stavesmo111710.setAttribute('id', 'stavesmo111710');
stavesmo111710.setBegBarType(VF.Barline.type.NONE);
stavesmo111710.setContext(context);
stavesmo111710.draw();
smo111710v0.draw(context, stavesmo111710);
const stavesmo114128 = new VF.Stave(578, 379.2253035909339, 337);
stavesmo114128.setAttribute('id', 'stavesmo114128');
stavesmo114128.setBegBarType(VF.Barline.type.NONE);
stavesmo114128.setContext(context);
stavesmo114128.draw();
smo114128v0.draw(context, stavesmo114128);
const stavesmo116502 = new VF.Stave(578, 479.2253035909339, 337);
stavesmo116502.setAttribute('id', 'stavesmo116502');
stavesmo116502.setBegBarType(VF.Barline.type.NONE);
stavesmo116502.setContext(context);
stavesmo116502.draw();
smo116502v0.draw(context, stavesmo116502);
const stavesmo118859 = new VF.Stave(578, 549.2253035909339, 337);
stavesmo118859.setAttribute('id', 'stavesmo118859');
stavesmo118859.setBegBarType(VF.Barline.type.NONE);
stavesmo118859.setContext(context);
stavesmo118859.draw();
smo118859v0.draw(context, stavesmo118859);
// create beam groups and tuplets for format grp smo149771 before formatting
const dirsmo216007 = smo121141.getStemDirection();
smo121141.setStemDirection(dirsmo216007);
smo121142.setStemDirection(dirsmo216007);
const smo216007 = new VF.Beam([smo121141,smo121142]);
const dirsmo216008 = smo121143.getStemDirection();
smo121143.setStemDirection(dirsmo216008);
smo121144.setStemDirection(dirsmo216008);
const smo216008 = new VF.Beam([smo121143,smo121144]);
const dirsmo216011 = smo123547.getStemDirection();
smo123547.setStemDirection(dirsmo216011);
smo123548.setStemDirection(dirsmo216011);
const smo216011 = new VF.Beam([smo123547,smo123548]);
const dirsmo216012 = smo123549.getStemDirection();
smo123549.setStemDirection(dirsmo216012);
smo123550.setStemDirection(dirsmo216012);
const smo216012 = new VF.Beam([smo123549,smo123550]);
 
// formatting measures in staff group smo149771
fmtsmo12116114.format([smo121161v0,smo123567v0,smo125905v0,smo128255v0], 323);
const stavesmo121161 = new VF.Stave(578, 630.2253035909339, 337);
stavesmo121161.setAttribute('id', 'stavesmo121161');
stavesmo121161.setBegBarType(VF.Barline.type.NONE);
stavesmo121161.setContext(context);
stavesmo121161.draw();
smo121161v0.draw(context, stavesmo121161);
smo216007.setContext(context);
smo216007.draw();
smo216008.setContext(context);
smo216008.draw();
const stavesmo123567 = new VF.Stave(578, 700.2253035909339, 337);
stavesmo123567.setAttribute('id', 'stavesmo123567');
stavesmo123567.setBegBarType(VF.Barline.type.NONE);
stavesmo123567.setContext(context);
stavesmo123567.draw();
smo123567v0.draw(context, stavesmo123567);
smo216011.setContext(context);
smo216011.draw();
smo216012.setContext(context);
smo216012.draw();
const stavesmo125905 = new VF.Stave(578, 761.2253035909339, 337);
stavesmo125905.setAttribute('id', 'stavesmo125905');
stavesmo125905.setBegBarType(VF.Barline.type.NONE);
stavesmo125905.setContext(context);
stavesmo125905.draw();
smo125905v0.draw(context, stavesmo125905);
const stavesmo128255 = new VF.Stave(578, 831.2253035909339, 337);
stavesmo128255.setAttribute('id', 'stavesmo128255');
stavesmo128255.setBegBarType(VF.Barline.type.NONE);
stavesmo128255.setContext(context);
stavesmo128255.draw();
smo128255v0.draw(context, stavesmo128255);
// create beam groups and tuplets for format grp smo149773 before formatting
const dirsmo216019 = smo130646.getStemDirection();
smo130646.setStemDirection(dirsmo216019);
smo130647.setStemDirection(dirsmo216019);
const smo216019 = new VF.Beam([smo130646,smo130647]);
const dirsmo216020 = smo130648.getStemDirection();
smo130648.setStemDirection(dirsmo216020);
smo130649.setStemDirection(dirsmo216020);
const smo216020 = new VF.Beam([smo130648,smo130649]);
const dirsmo216023 = smo133019.getStemDirection();
smo133019.setStemDirection(dirsmo216023);
smo133020.setStemDirection(dirsmo216023);
const smo216023 = new VF.Beam([smo133019,smo133020]);
const dirsmo216024 = smo133021.getStemDirection();
smo133021.setStemDirection(dirsmo216024);
smo133022.setStemDirection(dirsmo216024);
const smo216024 = new VF.Beam([smo133021,smo133022]);
const dirsmo216027 = smo135365.getStemDirection();
smo135365.setStemDirection(dirsmo216027);
smo135366.setStemDirection(dirsmo216027);
const smo216027 = new VF.Beam([smo135365,smo135366]);
const dirsmo216028 = smo135367.getStemDirection();
smo135367.setStemDirection(dirsmo216028);
smo135368.setStemDirection(dirsmo216028);
const smo216028 = new VF.Beam([smo135367,smo135368]);
 
// formatting measures in staff group smo149773
fmtsmo13066614.format([smo130666v0,smo133039v0,smo135385v0,smo137718v0], 323);
const stavesmo130666 = new VF.Stave(578, 936.2253035909339, 337);
stavesmo130666.setAttribute('id', 'stavesmo130666');
stavesmo130666.setBegBarType(VF.Barline.type.NONE);
stavesmo130666.setContext(context);
stavesmo130666.draw();
smo130666v0.draw(context, stavesmo130666);
smo216019.setContext(context);
smo216019.draw();
smo216020.setContext(context);
smo216020.draw();
const stavesmo133039 = new VF.Stave(578, 1023.2253035909339, 337);
stavesmo133039.setAttribute('id', 'stavesmo133039');
stavesmo133039.setBegBarType(VF.Barline.type.NONE);
stavesmo133039.setContext(context);
stavesmo133039.draw();
smo133039v0.draw(context, stavesmo133039);
smo216023.setContext(context);
smo216023.draw();
smo216024.setContext(context);
smo216024.draw();
const stavesmo135385 = new VF.Stave(578, 1128.225303590934, 337);
stavesmo135385.setAttribute('id', 'stavesmo135385');
stavesmo135385.setBegBarType(VF.Barline.type.NONE);
stavesmo135385.setContext(context);
stavesmo135385.draw();
smo135385v0.draw(context, stavesmo135385);
smo216027.setContext(context);
smo216027.draw();
smo216028.setContext(context);
smo216028.draw();
const stavesmo137718 = new VF.Stave(578, 1213.225303590934, 337);
stavesmo137718.setAttribute('id', 'stavesmo137718');
stavesmo137718.setBegBarType(VF.Barline.type.NONE);
stavesmo137718.setContext(context);
stavesmo137718.draw();
smo137718v0.draw(context, stavesmo137718);
// create beam groups and tuplets for format grp smo142224 before formatting
const dirsmo216033 = smo140027.getStemDirection();
smo140027.setStemDirection(dirsmo216033);
smo140028.setStemDirection(dirsmo216033);
const smo216033 = new VF.Beam([smo140027,smo140028]);
const dirsmo216034 = smo140029.getStemDirection();
smo140029.setStemDirection(dirsmo216034);
smo140030.setStemDirection(dirsmo216034);
const smo216034 = new VF.Beam([smo140029,smo140030]);
 
// formatting measures in staff group smo142224
fmtsmo14004714.format([smo140047v0], 323);
const stavesmo140047 = new VF.Stave(578, 1290.225303590934, 337);
stavesmo140047.setAttribute('id', 'stavesmo140047');
stavesmo140047.setBegBarType(VF.Barline.type.NONE);
stavesmo140047.setContext(context);
stavesmo140047.draw();
smo140047v0.draw(context, stavesmo140047);
smo216033.setContext(context);
smo216033.draw();
smo216034.setContext(context);
smo216034.draw();
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14248414.format([smo142484v0], 323);
const stavesmo142484 = new VF.Stave(578, 1373.225303590934, 337);
stavesmo142484.setAttribute('id', 'stavesmo142484');
stavesmo142484.setBegBarType(VF.Barline.type.NONE);
stavesmo142484.setContext(context);
stavesmo142484.draw();
smo142484v0.draw(context, stavesmo142484);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14499614.format([smo144996v0], 323);
const stavesmo144996 = new VF.Stave(578, 1478.225303590934, 337);
stavesmo144996.setAttribute('id', 'stavesmo144996');
stavesmo144996.setBegBarType(VF.Barline.type.NONE);
stavesmo144996.setContext(context);
stavesmo144996.draw();
smo144996v0.draw(context, stavesmo144996);
// create beam groups and tuplets for format grp smo149763 before formatting
const dirsmo216041 = smo147421.getStemDirection();
smo147421.setStemDirection(dirsmo216041);
smo147422.setStemDirection(dirsmo216041);
smo147423.setStemDirection(dirsmo216041);
smo147424.setStemDirection(dirsmo216041);
const smo216041 = new VF.Beam([smo147421,smo147422,smo147423,smo147424]);
const dirsmo216042 = smo147425.getStemDirection();
smo147425.setStemDirection(dirsmo216042);
smo147426.setStemDirection(dirsmo216042);
const smo216042 = new VF.Beam([smo147425,smo147426]);
const smo147431 = new VF.Tuplet([smo147422,smo147423,smo147424], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo149763
fmtsmo14744714.format([smo147447v0], 323);
const stavesmo147447 = new VF.Stave(578, 1555.225303590934, 337);
stavesmo147447.setAttribute('id', 'stavesmo147447');
stavesmo147447.setBegBarType(VF.Barline.type.NONE);
stavesmo147447.setContext(context);
stavesmo147447.draw();
smo147447v0.draw(context, stavesmo147447);
smo216041.setContext(context);
smo216041.draw();
smo216042.setContext(context);
smo216042.draw();
smo147431.setContext(context).draw();
const fmtsmo10931015 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo109310v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109310v0ar = [];
const smo109284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109284.setAttribute('id', 'smo109284');
smo109310v0ar.push(smo109284);
const smo109285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo109285.setAttribute('id', 'smo109285');
smo109310v0ar.push(smo109285);
const smo109286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo109286.setAttribute('id', 'smo109286');
smo109310v0ar.push(smo109286);
const smo109287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo109287.setAttribute('id', 'smo109287');
smo109310v0ar.push(smo109287);
const smo109288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo109288.setAttribute('id', 'smo109288');
smo109310v0ar.push(smo109288);
const smo109289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo109289.setAttribute('id', 'smo109289');
smo109310v0ar.push(smo109289);
const smo109290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo109290.setAttribute('id', 'smo109290');
smo109310v0ar.push(smo109290);
const smo109291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo109291.setAttribute('id', 'smo109291');
smo109310v0ar.push(smo109291);
const smo109292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo109292.setAttribute('id', 'smo109292');
smo109310v0ar.push(smo109292);
const smo109293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo109293.setAttribute('id', 'smo109293');
smo109310v0ar.push(smo109293);
const smo109294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo109294.setAttribute('id', 'smo109294');
smo109310v0ar.push(smo109294);
smo109310v0.addTickables(smo109310v0ar)
fmtsmo10931015.joinVoices([smo109310v0]);
const fmtsmo11173715 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo111737v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111737v0ar = [];
const smo111711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111711.setAttribute('id', 'smo111711');
smo111737v0ar.push(smo111711);
const smo111712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111712.setAttribute('id', 'smo111712');
smo111737v0ar.push(smo111712);
const smo111713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111713.setAttribute('id', 'smo111713');
smo111737v0ar.push(smo111713);
const smo111714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111714.setAttribute('id', 'smo111714');
smo111737v0ar.push(smo111714);
const smo111715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111715.setAttribute('id', 'smo111715');
smo111737v0ar.push(smo111715);
const smo111716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111716.setAttribute('id', 'smo111716');
smo111737v0ar.push(smo111716);
const smo111717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111717.setAttribute('id', 'smo111717');
smo111737v0ar.push(smo111717);
const smo111718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111718.setAttribute('id', 'smo111718');
smo111737v0ar.push(smo111718);
const smo111719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo111719.setAttribute('id', 'smo111719');
smo111737v0ar.push(smo111719);
const smo111720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111720.setAttribute('id', 'smo111720');
smo111737v0ar.push(smo111720);
const smo111721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111721.setAttribute('id', 'smo111721');
smo111737v0ar.push(smo111721);
smo111737v0.addTickables(smo111737v0ar)
fmtsmo11173715.joinVoices([smo111737v0]);
const fmtsmo11415315 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo114153v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114153v0ar = [];
const smo114129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114129.setAttribute('id', 'smo114129');
smo114153v0ar.push(smo114129);
const smo114130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114130.setAttribute('id', 'smo114130');
smo114153v0ar.push(smo114130);
const smo114131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114131.setAttribute('id', 'smo114131');
smo114153v0ar.push(smo114131);
const smo114132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo114132.setAttribute('id', 'smo114132');
smo114153v0ar.push(smo114132);
const smo114133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo114133.setAttribute('id', 'smo114133');
smo114153v0ar.push(smo114133);
const smo114134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo114134.setAttribute('id', 'smo114134');
smo114153v0ar.push(smo114134);
const smo114135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114135.setAttribute('id', 'smo114135');
smo114153v0ar.push(smo114135);
const smo114136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo114136.setAttribute('id', 'smo114136');
smo114153v0ar.push(smo114136);
const smo114137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114137.setAttribute('id', 'smo114137');
smo114153v0ar.push(smo114137);
smo114153v0.addTickables(smo114153v0ar)
fmtsmo11415315.joinVoices([smo114153v0]);
const fmtsmo11652715 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo116527v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116527v0ar = [];
const smo116503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116503.setAttribute('id', 'smo116503');
smo116527v0ar.push(smo116503);
const smo116504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116504.setAttribute('id', 'smo116504');
smo116527v0ar.push(smo116504);
const smo116505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116505.setAttribute('id', 'smo116505');
smo116527v0ar.push(smo116505);
const smo116506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo116506.setAttribute('id', 'smo116506');
smo116527v0ar.push(smo116506);
const smo116507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo116507.setAttribute('id', 'smo116507');
smo116527v0ar.push(smo116507);
const smo116508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo116508.setAttribute('id', 'smo116508');
smo116527v0ar.push(smo116508);
const smo116509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116509.setAttribute('id', 'smo116509');
smo116527v0ar.push(smo116509);
const smo116510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo116510.setAttribute('id', 'smo116510');
smo116527v0ar.push(smo116510);
const smo116511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116511.setAttribute('id', 'smo116511');
smo116527v0ar.push(smo116511);
smo116527v0.addTickables(smo116527v0ar)
fmtsmo11652715.joinVoices([smo116527v0]);
const fmtsmo11887915 = new VF.Formatter();
//
// voices and notes for stave 4 15
const smo118879v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118879v0ar = [];
const smo118860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo118860.setAttribute('id', 'smo118860');
const  smo224243 = new VF.Articulation('a.').setPosition(3);
smo118860.addModifier(smo224243, 0);
smo118879v0ar.push(smo118860);
const smo118862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo118862.setAttribute('id', 'smo118862');
smo118879v0ar.push(smo118862);
const smo118863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo118863.setAttribute('id', 'smo118863');
smo118879v0ar.push(smo118863);
smo118879v0.addTickables(smo118879v0ar)
fmtsmo11887915.joinVoices([smo118879v0]);
const fmtsmo12118515 = new VF.Formatter();
//
// voices and notes for stave 5 15
const smo121185v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121185v0ar = [];
const smo121162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121162.setAttribute('id', 'smo121162');
smo121185v0ar.push(smo121162);
const smo121163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121163.setAttribute('id', 'smo121163');
smo121185v0ar.push(smo121163);
const smo121164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121164.setAttribute('id', 'smo121164');
smo121185v0ar.push(smo121164);
const smo121165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo121165.setAttribute('id', 'smo121165');
smo121185v0ar.push(smo121165);
const smo121166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121166.setAttribute('id', 'smo121166');
smo121185v0ar.push(smo121166);
const smo121167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo121167.setAttribute('id', 'smo121167');
smo121185v0ar.push(smo121167);
const smo121168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121168.setAttribute('id', 'smo121168');
smo121185v0ar.push(smo121168);
const smo121169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo121169.setAttribute('id', 'smo121169');
smo121185v0ar.push(smo121169);
smo121185v0.addTickables(smo121185v0ar)
fmtsmo12118515.joinVoices([smo121185v0]);
const fmtsmo12359115 = new VF.Formatter();
//
// voices and notes for stave 6 15
const smo123591v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123591v0ar = [];
const smo123568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123568.setAttribute('id', 'smo123568');
smo123591v0ar.push(smo123568);
const smo123569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123569.setAttribute('id', 'smo123569');
smo123591v0ar.push(smo123569);
const smo123570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123570.setAttribute('id', 'smo123570');
smo123591v0ar.push(smo123570);
const smo123571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo123571.setAttribute('id', 'smo123571');
smo123591v0ar.push(smo123571);
const smo123572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo123572.setAttribute('id', 'smo123572');
smo123591v0ar.push(smo123572);
const smo123573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo123573.setAttribute('id', 'smo123573');
smo123591v0ar.push(smo123573);
const smo123574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo123574.setAttribute('id', 'smo123574');
smo123591v0ar.push(smo123574);
const smo123575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123575.setAttribute('id', 'smo123575');
smo123591v0ar.push(smo123575);
smo123591v0.addTickables(smo123591v0ar)
fmtsmo12359115.joinVoices([smo123591v0]);
const fmtsmo12592215 = new VF.Formatter();
//
// voices and notes for stave 7 15
const smo125922v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125922v0ar = [];
const smo125906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125906.setAttribute('id', 'smo125906');
smo125922v0ar.push(smo125906);
smo125922v0.addTickables(smo125922v0ar)
fmtsmo12592215.joinVoices([smo125922v0]);
const fmtsmo12827215 = new VF.Formatter();
//
// voices and notes for stave 8 15
const smo128272v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128272v0ar = [];
const smo128256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128256.setAttribute('id', 'smo128256');
smo128272v0ar.push(smo128256);
smo128272v0.addTickables(smo128272v0ar)
fmtsmo12827215.joinVoices([smo128272v0]);
const fmtsmo13069015 = new VF.Formatter();
//
// voices and notes for stave 9 15
const smo130690v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130690v0ar = [];
const smo130667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo130667.setAttribute('id', 'smo130667');
smo130690v0ar.push(smo130667);
const smo130668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo130668.setAttribute('id', 'smo130668');
smo130690v0ar.push(smo130668);
const smo130669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo130669.setAttribute('id', 'smo130669');
smo130690v0ar.push(smo130669);
const smo130670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo130670.setAttribute('id', 'smo130670');
smo130690v0ar.push(smo130670);
const smo130671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo130671.setAttribute('id', 'smo130671');
smo130690v0ar.push(smo130671);
const smo130672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo130672.setAttribute('id', 'smo130672');
smo130690v0ar.push(smo130672);
const smo130673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130673.setAttribute('id', 'smo130673');
smo130690v0ar.push(smo130673);
const smo130674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo130674.setAttribute('id', 'smo130674');
smo130690v0ar.push(smo130674);
smo130690v0.addTickables(smo130690v0ar)
fmtsmo13069015.joinVoices([smo130690v0]);
const fmtsmo13306315 = new VF.Formatter();
//
// voices and notes for stave 10 15
const smo133063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133063v0ar = [];
const smo133040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo133040.setAttribute('id', 'smo133040');
smo133063v0ar.push(smo133040);
const smo133041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo133041.setAttribute('id', 'smo133041');
smo133063v0ar.push(smo133041);
const smo133042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo133042.setAttribute('id', 'smo133042');
smo133063v0ar.push(smo133042);
const smo133043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo133043.setAttribute('id', 'smo133043');
smo133063v0ar.push(smo133043);
const smo133044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo133044.setAttribute('id', 'smo133044');
smo133063v0ar.push(smo133044);
const smo133045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo133045.setAttribute('id', 'smo133045');
smo133063v0ar.push(smo133045);
const smo133046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo133046.setAttribute('id', 'smo133046');
smo133063v0ar.push(smo133046);
const smo133047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo133047.setAttribute('id', 'smo133047');
smo133063v0ar.push(smo133047);
smo133063v0.addTickables(smo133063v0ar)
fmtsmo13306315.joinVoices([smo133063v0]);
const fmtsmo13540915 = new VF.Formatter();
//
// voices and notes for stave 11 15
const smo135409v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135409v0ar = [];
const smo135386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo135386.setAttribute('id', 'smo135386');
smo135409v0ar.push(smo135386);
const smo135387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo135387.setAttribute('id', 'smo135387');
smo135409v0ar.push(smo135387);
const smo135388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo135388.setAttribute('id', 'smo135388');
smo135409v0ar.push(smo135388);
const smo135389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo135389.setAttribute('id', 'smo135389');
smo135409v0ar.push(smo135389);
const smo135390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo135390.setAttribute('id', 'smo135390');
smo135409v0ar.push(smo135390);
const smo135391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo135391.setAttribute('id', 'smo135391');
smo135409v0ar.push(smo135391);
const smo135392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135392.setAttribute('id', 'smo135392');
smo135409v0ar.push(smo135392);
const smo135393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo135393.setAttribute('id', 'smo135393');
smo135409v0ar.push(smo135393);
smo135409v0.addTickables(smo135409v0ar)
fmtsmo13540915.joinVoices([smo135409v0]);
const fmtsmo13773815 = new VF.Formatter();
//
// voices and notes for stave 12 15
const smo137738v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137738v0ar = [];
const smo137719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo137719.setAttribute('id', 'smo137719');
const  smo224244 = new VF.Articulation('a.').setPosition(3);
smo137719.addModifier(smo224244, 0);
smo137738v0ar.push(smo137719);
const smo137721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo137721.setAttribute('id', 'smo137721');
smo137738v0ar.push(smo137721);
const smo137722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo137722.setAttribute('id', 'smo137722');
smo137738v0ar.push(smo137722);
smo137738v0.addTickables(smo137738v0ar)
fmtsmo13773815.joinVoices([smo137738v0]);
const fmtsmo14007115 = new VF.Formatter();
//
// voices and notes for stave 13 15
const smo140071v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140071v0ar = [];
const smo140048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140048.setAttribute('id', 'smo140048');
smo140071v0ar.push(smo140048);
const smo140049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo140049.setAttribute('id', 'smo140049');
smo140071v0ar.push(smo140049);
const smo140050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo140050.setAttribute('id', 'smo140050');
smo140071v0ar.push(smo140050);
const smo140051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo140051.setAttribute('id', 'smo140051');
smo140071v0ar.push(smo140051);
const smo140052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo140052.setAttribute('id', 'smo140052');
smo140071v0ar.push(smo140052);
const smo140053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo140053.setAttribute('id', 'smo140053');
smo140071v0ar.push(smo140053);
const smo140054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140054.setAttribute('id', 'smo140054');
smo140071v0ar.push(smo140054);
const smo140055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo140055.setAttribute('id', 'smo140055');
smo140071v0ar.push(smo140055);
smo140071v0.addTickables(smo140071v0ar)
fmtsmo14007115.joinVoices([smo140071v0]);
const fmtsmo14250115 = new VF.Formatter();
//
// voices and notes for stave 14 15
const smo142501v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142501v0ar = [];
const smo142485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142485.setAttribute('id', 'smo142485');
smo142501v0ar.push(smo142485);
smo142501v0.addTickables(smo142501v0ar)
fmtsmo14250115.joinVoices([smo142501v0]);
const fmtsmo14501615 = new VF.Formatter();
//
// voices and notes for stave 15 15
const smo145016v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145016v0ar = [];
const smo144997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144997.setAttribute('id', 'smo144997');
const  smo224245 = new VF.Articulation('a.').setPosition(3);
smo144997.addModifier(smo224245, 0);
smo145016v0ar.push(smo144997);
const smo144999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144999.setAttribute('id', 'smo144999');
smo145016v0ar.push(smo144999);
const smo145000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo145000.setAttribute('id', 'smo145000');
smo145016v0ar.push(smo145000);
smo145016v0.addTickables(smo145016v0ar)
fmtsmo14501615.joinVoices([smo145016v0]);
const fmtsmo14747415 = new VF.Formatter();
//
// voices and notes for stave 16 15
const smo147474v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147474v0ar = [];
const smo147448 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147448.setAttribute('id', 'smo147448');
const smo1474480acc = new VF.Accidental('n');
smo147448.addModifier(smo1474480acc, 0);
smo147474v0ar.push(smo147448);
const smo147449 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147449.setAttribute('id', 'smo147449');
smo147474v0ar.push(smo147449);
const smo147450 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147450.setAttribute('id', 'smo147450');
smo147474v0ar.push(smo147450);
const smo147451 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147451.setAttribute('id', 'smo147451');
smo147474v0ar.push(smo147451);
const smo147452 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147452.setAttribute('id', 'smo147452');
smo147474v0ar.push(smo147452);
const smo147453 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147453.setAttribute('id', 'smo147453');
smo147474v0ar.push(smo147453);
const smo147454 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147454.setAttribute('id', 'smo147454');
smo147474v0ar.push(smo147454);
const smo147455 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147455.setAttribute('id', 'smo147455');
smo147474v0ar.push(smo147455);
const smo147456 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147456.setAttribute('id', 'smo147456');
smo147474v0ar.push(smo147456);
const smo147457 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147457.setAttribute('id', 'smo147457');
smo147474v0ar.push(smo147457);
smo147474v0.addTickables(smo147474v0ar)
fmtsmo14747415.joinVoices([smo147474v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
const dirsmo216045 = smo109284.getStemDirection();
smo109284.setStemDirection(dirsmo216045);
smo109285.setStemDirection(dirsmo216045);
smo109286.setStemDirection(dirsmo216045);
const smo216045 = new VF.Beam([smo109284,smo109285,smo109286]);
const dirsmo216046 = smo109287.getStemDirection();
smo109287.setStemDirection(dirsmo216046);
smo109288.setStemDirection(dirsmo216046);
const smo216046 = new VF.Beam([smo109287,smo109288]);
const dirsmo216047 = smo109289.getStemDirection();
smo109289.setStemDirection(dirsmo216047);
smo109290.setStemDirection(dirsmo216047);
smo109291.setStemDirection(dirsmo216047);
const smo216047 = new VF.Beam([smo109289,smo109290,smo109291]);
const dirsmo216048 = smo109292.getStemDirection();
smo109292.setStemDirection(dirsmo216048);
smo109293.setStemDirection(dirsmo216048);
smo109294.setStemDirection(dirsmo216048);
const smo216048 = new VF.Beam([smo109292,smo109293,smo109294]);
const dirsmo216051 = smo111711.getStemDirection();
smo111711.setStemDirection(dirsmo216051);
smo111712.setStemDirection(dirsmo216051);
smo111713.setStemDirection(dirsmo216051);
const smo216051 = new VF.Beam([smo111711,smo111712,smo111713]);
const dirsmo216052 = smo111714.getStemDirection();
smo111714.setStemDirection(dirsmo216052);
smo111715.setStemDirection(dirsmo216052);
const smo216052 = new VF.Beam([smo111714,smo111715]);
const dirsmo216053 = smo111716.getStemDirection();
smo111716.setStemDirection(dirsmo216053);
smo111717.setStemDirection(dirsmo216053);
smo111718.setStemDirection(dirsmo216053);
const smo216053 = new VF.Beam([smo111716,smo111717,smo111718]);
const dirsmo216054 = smo111719.getStemDirection();
smo111719.setStemDirection(dirsmo216054);
smo111720.setStemDirection(dirsmo216054);
smo111721.setStemDirection(dirsmo216054);
const smo216054 = new VF.Beam([smo111719,smo111720,smo111721]);
const dirsmo216057 = smo114129.getStemDirection();
smo114129.setStemDirection(dirsmo216057);
smo114130.setStemDirection(dirsmo216057);
smo114131.setStemDirection(dirsmo216057);
const smo216057 = new VF.Beam([smo114129,smo114130,smo114131]);
const dirsmo216058 = smo114132.getStemDirection();
smo114132.setStemDirection(dirsmo216058);
smo114133.setStemDirection(dirsmo216058);
const smo216058 = new VF.Beam([smo114132,smo114133]);
const dirsmo216059 = smo114135.getStemDirection();
smo114135.setStemDirection(dirsmo216059);
smo114136.setStemDirection(dirsmo216059);
const smo216059 = new VF.Beam([smo114135,smo114136]);
const dirsmo216062 = smo116503.getStemDirection();
smo116503.setStemDirection(dirsmo216062);
smo116504.setStemDirection(dirsmo216062);
smo116505.setStemDirection(dirsmo216062);
const smo216062 = new VF.Beam([smo116503,smo116504,smo116505]);
const dirsmo216063 = smo116506.getStemDirection();
smo116506.setStemDirection(dirsmo216063);
smo116507.setStemDirection(dirsmo216063);
const smo216063 = new VF.Beam([smo116506,smo116507]);
const dirsmo216064 = smo116509.getStemDirection();
smo116509.setStemDirection(dirsmo216064);
smo116510.setStemDirection(dirsmo216064);
const smo216064 = new VF.Beam([smo116509,smo116510]);
 
// formatting measures in staff group smo149769
fmtsmo10931015.format([smo109310v0,smo111737v0,smo114153v0,smo116527v0,smo118879v0], 402);
const stavesmo109310 = new VF.Stave(915, 183.2253035909339, 416);
stavesmo109310.setAttribute('id', 'stavesmo109310');
stavesmo109310.setBegBarType(VF.Barline.type.NONE);
stavesmo109310.setContext(context);
stavesmo109310.draw();
smo109310v0.draw(context, stavesmo109310);
smo216045.setContext(context);
smo216045.draw();
smo216046.setContext(context);
smo216046.draw();
smo216047.setContext(context);
smo216047.draw();
smo216048.setContext(context);
smo216048.draw();
const stavesmo111737 = new VF.Stave(915, 288.2253035909339, 416);
stavesmo111737.setAttribute('id', 'stavesmo111737');
stavesmo111737.setBegBarType(VF.Barline.type.NONE);
stavesmo111737.setContext(context);
stavesmo111737.draw();
smo111737v0.draw(context, stavesmo111737);
smo216051.setContext(context);
smo216051.draw();
smo216052.setContext(context);
smo216052.draw();
smo216053.setContext(context);
smo216053.draw();
smo216054.setContext(context);
smo216054.draw();
const stavesmo114153 = new VF.Stave(915, 379.2253035909339, 416);
stavesmo114153.setAttribute('id', 'stavesmo114153');
stavesmo114153.setBegBarType(VF.Barline.type.NONE);
stavesmo114153.setContext(context);
stavesmo114153.draw();
smo114153v0.draw(context, stavesmo114153);
smo216057.setContext(context);
smo216057.draw();
smo216058.setContext(context);
smo216058.draw();
smo216059.setContext(context);
smo216059.draw();
const stavesmo116527 = new VF.Stave(915, 479.2253035909339, 416);
stavesmo116527.setAttribute('id', 'stavesmo116527');
stavesmo116527.setBegBarType(VF.Barline.type.NONE);
stavesmo116527.setContext(context);
stavesmo116527.draw();
smo116527v0.draw(context, stavesmo116527);
smo216062.setContext(context);
smo216062.draw();
smo216063.setContext(context);
smo216063.draw();
smo216064.setContext(context);
smo216064.draw();
const stavesmo118879 = new VF.Stave(915, 549.2253035909339, 416);
stavesmo118879.setAttribute('id', 'stavesmo118879');
stavesmo118879.setBegBarType(VF.Barline.type.NONE);
stavesmo118879.setContext(context);
stavesmo118879.draw();
smo118879v0.draw(context, stavesmo118879);
// create beam groups and tuplets for format grp smo149771 before formatting
const dirsmo216069 = smo121163.getStemDirection();
smo121163.setStemDirection(dirsmo216069);
smo121164.setStemDirection(dirsmo216069);
const smo216069 = new VF.Beam([smo121163,smo121164]);
const dirsmo216070 = smo121166.getStemDirection();
smo121166.setStemDirection(dirsmo216070);
smo121167.setStemDirection(dirsmo216070);
smo121168.setStemDirection(dirsmo216070);
smo121169.setStemDirection(dirsmo216070);
const smo216070 = new VF.Beam([smo121166,smo121167,smo121168,smo121169]);
const dirsmo216073 = smo123569.getStemDirection();
smo123569.setStemDirection(dirsmo216073);
smo123570.setStemDirection(dirsmo216073);
const smo216073 = new VF.Beam([smo123569,smo123570]);
const dirsmo216074 = smo123572.getStemDirection();
smo123572.setStemDirection(dirsmo216074);
smo123573.setStemDirection(dirsmo216074);
smo123574.setStemDirection(dirsmo216074);
smo123575.setStemDirection(dirsmo216074);
const smo216074 = new VF.Beam([smo123572,smo123573,smo123574,smo123575]);
 
// formatting measures in staff group smo149771
fmtsmo12118515.format([smo121185v0,smo123591v0,smo125922v0,smo128272v0], 402);
const stavesmo121185 = new VF.Stave(915, 630.2253035909339, 416);
stavesmo121185.setAttribute('id', 'stavesmo121185');
stavesmo121185.setBegBarType(VF.Barline.type.NONE);
stavesmo121185.setContext(context);
stavesmo121185.draw();
smo121185v0.draw(context, stavesmo121185);
smo216069.setContext(context);
smo216069.draw();
smo216070.setContext(context);
smo216070.draw();
const stavesmo123591 = new VF.Stave(915, 700.2253035909339, 416);
stavesmo123591.setAttribute('id', 'stavesmo123591');
stavesmo123591.setBegBarType(VF.Barline.type.NONE);
stavesmo123591.setContext(context);
stavesmo123591.draw();
smo123591v0.draw(context, stavesmo123591);
smo216073.setContext(context);
smo216073.draw();
smo216074.setContext(context);
smo216074.draw();
const stavesmo125922 = new VF.Stave(915, 761.2253035909339, 416);
stavesmo125922.setAttribute('id', 'stavesmo125922');
stavesmo125922.setBegBarType(VF.Barline.type.NONE);
stavesmo125922.setContext(context);
stavesmo125922.draw();
smo125922v0.draw(context, stavesmo125922);
const stavesmo128272 = new VF.Stave(915, 831.2253035909339, 416);
stavesmo128272.setAttribute('id', 'stavesmo128272');
stavesmo128272.setBegBarType(VF.Barline.type.NONE);
stavesmo128272.setContext(context);
stavesmo128272.draw();
smo128272v0.draw(context, stavesmo128272);
// create beam groups and tuplets for format grp smo149773 before formatting
const dirsmo216081 = smo130668.getStemDirection();
smo130668.setStemDirection(dirsmo216081);
smo130669.setStemDirection(dirsmo216081);
const smo216081 = new VF.Beam([smo130668,smo130669]);
const dirsmo216082 = smo130671.getStemDirection();
smo130671.setStemDirection(dirsmo216082);
smo130672.setStemDirection(dirsmo216082);
smo130673.setStemDirection(dirsmo216082);
smo130674.setStemDirection(dirsmo216082);
const smo216082 = new VF.Beam([smo130671,smo130672,smo130673,smo130674]);
const dirsmo216085 = smo133041.getStemDirection();
smo133041.setStemDirection(dirsmo216085);
smo133042.setStemDirection(dirsmo216085);
const smo216085 = new VF.Beam([smo133041,smo133042]);
const dirsmo216086 = smo133044.getStemDirection();
smo133044.setStemDirection(dirsmo216086);
smo133045.setStemDirection(dirsmo216086);
smo133046.setStemDirection(dirsmo216086);
smo133047.setStemDirection(dirsmo216086);
const smo216086 = new VF.Beam([smo133044,smo133045,smo133046,smo133047]);
const dirsmo216089 = smo135387.getStemDirection();
smo135387.setStemDirection(dirsmo216089);
smo135388.setStemDirection(dirsmo216089);
const smo216089 = new VF.Beam([smo135387,smo135388]);
const dirsmo216090 = smo135390.getStemDirection();
smo135390.setStemDirection(dirsmo216090);
smo135391.setStemDirection(dirsmo216090);
smo135392.setStemDirection(dirsmo216090);
smo135393.setStemDirection(dirsmo216090);
const smo216090 = new VF.Beam([smo135390,smo135391,smo135392,smo135393]);
 
// formatting measures in staff group smo149773
fmtsmo13069015.format([smo130690v0,smo133063v0,smo135409v0,smo137738v0], 402);
const stavesmo130690 = new VF.Stave(915, 936.2253035909339, 416);
stavesmo130690.setAttribute('id', 'stavesmo130690');
stavesmo130690.setBegBarType(VF.Barline.type.NONE);
stavesmo130690.setContext(context);
stavesmo130690.draw();
smo130690v0.draw(context, stavesmo130690);
smo216081.setContext(context);
smo216081.draw();
smo216082.setContext(context);
smo216082.draw();
const stavesmo133063 = new VF.Stave(915, 1023.2253035909339, 416);
stavesmo133063.setAttribute('id', 'stavesmo133063');
stavesmo133063.setBegBarType(VF.Barline.type.NONE);
stavesmo133063.setContext(context);
stavesmo133063.draw();
smo133063v0.draw(context, stavesmo133063);
smo216085.setContext(context);
smo216085.draw();
smo216086.setContext(context);
smo216086.draw();
const stavesmo135409 = new VF.Stave(915, 1128.225303590934, 416);
stavesmo135409.setAttribute('id', 'stavesmo135409');
stavesmo135409.setBegBarType(VF.Barline.type.NONE);
stavesmo135409.setContext(context);
stavesmo135409.draw();
smo135409v0.draw(context, stavesmo135409);
smo216089.setContext(context);
smo216089.draw();
smo216090.setContext(context);
smo216090.draw();
const stavesmo137738 = new VF.Stave(915, 1213.225303590934, 416);
stavesmo137738.setAttribute('id', 'stavesmo137738');
stavesmo137738.setBegBarType(VF.Barline.type.NONE);
stavesmo137738.setContext(context);
stavesmo137738.draw();
smo137738v0.draw(context, stavesmo137738);
// create beam groups and tuplets for format grp smo142224 before formatting
const dirsmo216095 = smo140049.getStemDirection();
smo140049.setStemDirection(dirsmo216095);
smo140050.setStemDirection(dirsmo216095);
const smo216095 = new VF.Beam([smo140049,smo140050]);
const dirsmo216096 = smo140052.getStemDirection();
smo140052.setStemDirection(dirsmo216096);
smo140053.setStemDirection(dirsmo216096);
smo140054.setStemDirection(dirsmo216096);
smo140055.setStemDirection(dirsmo216096);
const smo216096 = new VF.Beam([smo140052,smo140053,smo140054,smo140055]);
 
// formatting measures in staff group smo142224
fmtsmo14007115.format([smo140071v0], 402);
const stavesmo140071 = new VF.Stave(915, 1290.225303590934, 416);
stavesmo140071.setAttribute('id', 'stavesmo140071');
stavesmo140071.setBegBarType(VF.Barline.type.NONE);
stavesmo140071.setContext(context);
stavesmo140071.draw();
smo140071v0.draw(context, stavesmo140071);
smo216095.setContext(context);
smo216095.draw();
smo216096.setContext(context);
smo216096.draw();
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14250115.format([smo142501v0], 402);
const stavesmo142501 = new VF.Stave(915, 1373.225303590934, 416);
stavesmo142501.setAttribute('id', 'stavesmo142501');
stavesmo142501.setBegBarType(VF.Barline.type.NONE);
stavesmo142501.setContext(context);
stavesmo142501.draw();
smo142501v0.draw(context, stavesmo142501);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14501615.format([smo145016v0], 402);
const stavesmo145016 = new VF.Stave(915, 1478.225303590934, 416);
stavesmo145016.setAttribute('id', 'stavesmo145016');
stavesmo145016.setBegBarType(VF.Barline.type.NONE);
stavesmo145016.setContext(context);
stavesmo145016.draw();
smo145016v0.draw(context, stavesmo145016);
// create beam groups and tuplets for format grp smo149763 before formatting
const dirsmo216103 = smo147448.getStemDirection();
smo147448.setStemDirection(dirsmo216103);
smo147449.setStemDirection(dirsmo216103);
smo147450.setStemDirection(dirsmo216103);
smo147451.setStemDirection(dirsmo216103);
const smo216103 = new VF.Beam([smo147448,smo147449,smo147450,smo147451]);
const dirsmo216104 = smo147452.getStemDirection();
smo147452.setStemDirection(dirsmo216104);
smo147453.setStemDirection(dirsmo216104);
const smo216104 = new VF.Beam([smo147452,smo147453]);
const smo147458 = new VF.Tuplet([smo147449,smo147450,smo147451], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo149763
fmtsmo14747415.format([smo147474v0], 402);
const stavesmo147474 = new VF.Stave(915, 1555.225303590934, 416);
stavesmo147474.setAttribute('id', 'stavesmo147474');
stavesmo147474.setBegBarType(VF.Barline.type.NONE);
stavesmo147474.setContext(context);
stavesmo147474.draw();
smo147474v0.draw(context, stavesmo147474);
smo216103.setContext(context);
smo216103.draw();
smo216104.setContext(context);
smo216104.draw();
smo147458.setContext(context).draw();
const fmtsmo10933116 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo109331v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109331v0ar = [];
const smo109311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo109311.setAttribute('id', 'smo109311');
smo109331v0ar.push(smo109311);
const smo109312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo109312.setAttribute('id', 'smo109312');
smo109331v0ar.push(smo109312);
const smo109313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo109313.setAttribute('id', 'smo109313');
smo109331v0ar.push(smo109313);
const smo109314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo109314.setAttribute('id', 'smo109314');
const smo1093140acc = new VF.Accidental('n');
smo109314.addModifier(smo1093140acc, 0);
smo109331v0ar.push(smo109314);
const smo109315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo109315.setAttribute('id', 'smo109315');
smo109331v0ar.push(smo109315);
smo109331v0.addTickables(smo109331v0ar)
fmtsmo10933116.joinVoices([smo109331v0]);
const fmtsmo11175816 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo111758v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111758v0ar = [];
const smo111738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111738.setAttribute('id', 'smo111738');
smo111758v0ar.push(smo111738);
const smo111739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111739.setAttribute('id', 'smo111739');
smo111758v0ar.push(smo111739);
const smo111740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo111740.setAttribute('id', 'smo111740');
smo111758v0ar.push(smo111740);
const smo111741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo111741.setAttribute('id', 'smo111741');
const smo1117410acc = new VF.Accidental('n');
smo111741.addModifier(smo1117410acc, 0);
smo111758v0ar.push(smo111741);
const smo111742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo111742.setAttribute('id', 'smo111742');
const smo1117420acc = new VF.Accidental('b');
smo111742.addModifier(smo1117420acc, 0);
smo111758v0ar.push(smo111742);
smo111758v0.addTickables(smo111758v0ar)
fmtsmo11175816.joinVoices([smo111758v0]);
const fmtsmo11417416 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo114174v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114174v0ar = [];
const smo114154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo114154.setAttribute('id', 'smo114154');
smo114174v0ar.push(smo114154);
const smo114155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo114155.setAttribute('id', 'smo114155');
smo114174v0ar.push(smo114155);
const smo114156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo114156.setAttribute('id', 'smo114156');
smo114174v0ar.push(smo114156);
const smo114157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo114157.setAttribute('id', 'smo114157');
const smo1141570acc = new VF.Accidental('n');
smo114157.addModifier(smo1141570acc, 0);
smo114174v0ar.push(smo114157);
const smo114158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo114158.setAttribute('id', 'smo114158');
const smo1141580acc = new VF.Accidental('b');
smo114158.addModifier(smo1141580acc, 0);
smo114174v0ar.push(smo114158);
smo114174v0.addTickables(smo114174v0ar)
fmtsmo11417416.joinVoices([smo114174v0]);
const fmtsmo11654816 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo116548v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116548v0ar = [];
const smo116528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo116528.setAttribute('id', 'smo116528');
smo116548v0ar.push(smo116528);
const smo116529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo116529.setAttribute('id', 'smo116529');
smo116548v0ar.push(smo116529);
const smo116530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo116530.setAttribute('id', 'smo116530');
smo116548v0ar.push(smo116530);
const smo116531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo116531.setAttribute('id', 'smo116531');
const smo1165310acc = new VF.Accidental('n');
smo116531.addModifier(smo1165310acc, 0);
smo116548v0ar.push(smo116531);
const smo116532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo116532.setAttribute('id', 'smo116532');
const smo1165320acc = new VF.Accidental('#');
smo116532.addModifier(smo1165320acc, 0);
smo116548v0ar.push(smo116532);
smo116548v0.addTickables(smo116548v0ar)
fmtsmo11654816.joinVoices([smo116548v0]);
const fmtsmo11889916 = new VF.Formatter();
//
// voices and notes for stave 4 16
const smo118899v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118899v0ar = [];
const smo118880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo118880.setAttribute('id', 'smo118880');
smo118899v0ar.push(smo118880);
const smo118881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo118881.setAttribute('id', 'smo118881');
smo118899v0ar.push(smo118881);
const smo118882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo118882.setAttribute('id', 'smo118882');
smo118899v0ar.push(smo118882);
const smo118883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["a#/4/n"]}'))
smo118883.setAttribute('id', 'smo118883');
const smo1188830acc = new VF.Accidental('#');
smo118883.addModifier(smo1188830acc, 0);
smo118899v0ar.push(smo118883);
smo118899v0.addTickables(smo118899v0ar)
fmtsmo11889916.joinVoices([smo118899v0]);
const fmtsmo12120616 = new VF.Formatter();
//
// voices and notes for stave 5 16
const smo121206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121206v0ar = [];
const smo121186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121186.setAttribute('id', 'smo121186');
smo121206v0ar.push(smo121186);
const smo121187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo121187.setAttribute('id', 'smo121187');
smo121206v0ar.push(smo121187);
const smo121188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo121188.setAttribute('id', 'smo121188');
smo121206v0ar.push(smo121188);
const smo121189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo121189.setAttribute('id', 'smo121189');
smo121206v0ar.push(smo121189);
const smo121190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo121190.setAttribute('id', 'smo121190');
smo121206v0ar.push(smo121190);
smo121206v0.addTickables(smo121206v0ar)
fmtsmo12120616.joinVoices([smo121206v0]);
const fmtsmo12361216 = new VF.Formatter();
//
// voices and notes for stave 6 16
const smo123612v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123612v0ar = [];
const smo123592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo123592.setAttribute('id', 'smo123592');
smo123612v0ar.push(smo123592);
const smo123593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123593.setAttribute('id', 'smo123593');
smo123612v0ar.push(smo123593);
const smo123594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo123594.setAttribute('id', 'smo123594');
smo123612v0ar.push(smo123594);
const smo123595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo123595.setAttribute('id', 'smo123595');
const smo1235950acc = new VF.Accidental('b');
smo123595.addModifier(smo1235950acc, 0);
smo123612v0ar.push(smo123595);
const smo123596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo123596.setAttribute('id', 'smo123596');
const smo1235960acc = new VF.Accidental('b');
smo123596.addModifier(smo1235960acc, 0);
smo123612v0ar.push(smo123596);
smo123612v0.addTickables(smo123612v0ar)
fmtsmo12361216.joinVoices([smo123612v0]);
const fmtsmo12593916 = new VF.Formatter();
//
// voices and notes for stave 7 16
const smo125939v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125939v0ar = [];
const smo125923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125923.setAttribute('id', 'smo125923');
smo125939v0ar.push(smo125923);
smo125939v0.addTickables(smo125939v0ar)
fmtsmo12593916.joinVoices([smo125939v0]);
const fmtsmo12828916 = new VF.Formatter();
//
// voices and notes for stave 8 16
const smo128289v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128289v0ar = [];
const smo128273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128273.setAttribute('id', 'smo128273');
smo128289v0ar.push(smo128273);
smo128289v0.addTickables(smo128289v0ar)
fmtsmo12828916.joinVoices([smo128289v0]);
const fmtsmo13071116 = new VF.Formatter();
//
// voices and notes for stave 9 16
const smo130711v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130711v0ar = [];
const smo130691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130691.setAttribute('id', 'smo130691');
smo130711v0ar.push(smo130691);
const smo130692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo130692.setAttribute('id', 'smo130692');
smo130711v0ar.push(smo130692);
const smo130693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo130693.setAttribute('id', 'smo130693');
smo130711v0ar.push(smo130693);
const smo130694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo130694.setAttribute('id', 'smo130694');
const smo1306940acc = new VF.Accidental('b');
smo130694.addModifier(smo1306940acc, 0);
smo130711v0ar.push(smo130694);
const smo130695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo130695.setAttribute('id', 'smo130695');
smo130711v0ar.push(smo130695);
smo130711v0.addTickables(smo130711v0ar)
fmtsmo13071116.joinVoices([smo130711v0]);
const fmtsmo13308416 = new VF.Formatter();
//
// voices and notes for stave 10 16
const smo133084v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133084v0ar = [];
const smo133064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo133064.setAttribute('id', 'smo133064');
smo133084v0ar.push(smo133064);
const smo133065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo133065.setAttribute('id', 'smo133065');
smo133084v0ar.push(smo133065);
const smo133066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo133066.setAttribute('id', 'smo133066');
smo133084v0ar.push(smo133066);
const smo133067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo133067.setAttribute('id', 'smo133067');
smo133084v0ar.push(smo133067);
const smo133068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo133068.setAttribute('id', 'smo133068');
smo133084v0ar.push(smo133068);
smo133084v0.addTickables(smo133084v0ar)
fmtsmo13308416.joinVoices([smo133084v0]);
const fmtsmo13543016 = new VF.Formatter();
//
// voices and notes for stave 11 16
const smo135430v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135430v0ar = [];
const smo135410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo135410.setAttribute('id', 'smo135410');
smo135430v0ar.push(smo135410);
const smo135411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo135411.setAttribute('id', 'smo135411');
smo135430v0ar.push(smo135411);
const smo135412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135412.setAttribute('id', 'smo135412');
smo135430v0ar.push(smo135412);
const smo135413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo135413.setAttribute('id', 'smo135413');
const smo1354130acc = new VF.Accidental('b');
smo135413.addModifier(smo1354130acc, 0);
smo135430v0ar.push(smo135413);
const smo135414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo135414.setAttribute('id', 'smo135414');
const smo1354140acc = new VF.Accidental('n');
smo135414.addModifier(smo1354140acc, 0);
smo135430v0ar.push(smo135414);
smo135430v0.addTickables(smo135430v0ar)
fmtsmo13543016.joinVoices([smo135430v0]);
const fmtsmo13775816 = new VF.Formatter();
//
// voices and notes for stave 12 16
const smo137758v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137758v0ar = [];
const smo137739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo137739.setAttribute('id', 'smo137739');
smo137758v0ar.push(smo137739);
const smo137740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo137740.setAttribute('id', 'smo137740');
smo137758v0ar.push(smo137740);
const smo137741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo137741.setAttribute('id', 'smo137741');
smo137758v0ar.push(smo137741);
const smo137742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo137742.setAttribute('id', 'smo137742');
const smo1377420acc = new VF.Accidental('#');
smo137742.addModifier(smo1377420acc, 0);
smo137758v0ar.push(smo137742);
smo137758v0.addTickables(smo137758v0ar)
fmtsmo13775816.joinVoices([smo137758v0]);
const fmtsmo14009216 = new VF.Formatter();
//
// voices and notes for stave 13 16
const smo140092v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140092v0ar = [];
const smo140072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo140072.setAttribute('id', 'smo140072');
smo140092v0ar.push(smo140072);
const smo140073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo140073.setAttribute('id', 'smo140073');
smo140092v0ar.push(smo140073);
const smo140074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo140074.setAttribute('id', 'smo140074');
smo140092v0ar.push(smo140074);
const smo140075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo140075.setAttribute('id', 'smo140075');
smo140092v0ar.push(smo140075);
const smo140076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo140076.setAttribute('id', 'smo140076');
smo140092v0ar.push(smo140076);
smo140092v0.addTickables(smo140092v0ar)
fmtsmo14009216.joinVoices([smo140092v0]);
const fmtsmo14251816 = new VF.Formatter();
//
// voices and notes for stave 14 16
const smo142518v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142518v0ar = [];
const smo142502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142502.setAttribute('id', 'smo142502');
smo142518v0ar.push(smo142502);
smo142518v0.addTickables(smo142518v0ar)
fmtsmo14251816.joinVoices([smo142518v0]);
const fmtsmo14503616 = new VF.Formatter();
//
// voices and notes for stave 15 16
const smo145036v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145036v0ar = [];
const smo145017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145017.setAttribute('id', 'smo145017');
smo145036v0ar.push(smo145017);
const smo145018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145018.setAttribute('id', 'smo145018');
smo145036v0ar.push(smo145018);
const smo145019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo145019.setAttribute('id', 'smo145019');
smo145036v0ar.push(smo145019);
const smo145020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo145020.setAttribute('id', 'smo145020');
const smo1450200acc = new VF.Accidental('#');
smo145020.addModifier(smo1450200acc, 0);
smo145036v0ar.push(smo145020);
smo145036v0.addTickables(smo145036v0ar)
fmtsmo14503616.joinVoices([smo145036v0]);
const fmtsmo14749516 = new VF.Formatter();
//
// voices and notes for stave 16 16
const smo147495v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147495v0ar = [];
const smo147475 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147475.setAttribute('id', 'smo147475');
smo147495v0ar.push(smo147475);
const smo147476 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147476.setAttribute('id', 'smo147476');
const smo1474760acc = new VF.Accidental('n');
smo147476.addModifier(smo1474760acc, 0);
smo147495v0ar.push(smo147476);
const smo147477 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147477.setAttribute('id', 'smo147477');
smo147495v0ar.push(smo147477);
const smo147478 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147478.setAttribute('id', 'smo147478');
smo147495v0ar.push(smo147478);
const smo147479 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147479.setAttribute('id', 'smo147479');
smo147495v0ar.push(smo147479);
smo147495v0.addTickables(smo147495v0ar)
fmtsmo14749516.joinVoices([smo147495v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
const dirsmo216107 = smo109311.getStemDirection();
smo109311.setStemDirection(dirsmo216107);
smo109312.setStemDirection(dirsmo216107);
const smo216107 = new VF.Beam([smo109311,smo109312]);
const dirsmo216109 = smo111738.getStemDirection();
smo111738.setStemDirection(dirsmo216109);
smo111739.setStemDirection(dirsmo216109);
const smo216109 = new VF.Beam([smo111738,smo111739]);
const dirsmo216111 = smo114154.getStemDirection();
smo114154.setStemDirection(dirsmo216111);
smo114155.setStemDirection(dirsmo216111);
const smo216111 = new VF.Beam([smo114154,smo114155]);
const dirsmo216113 = smo116528.getStemDirection();
smo116528.setStemDirection(dirsmo216113);
smo116529.setStemDirection(dirsmo216113);
const smo216113 = new VF.Beam([smo116528,smo116529]);
 
// formatting measures in staff group smo149769
fmtsmo10933116.format([smo109331v0,smo111758v0,smo114174v0,smo116548v0,smo118899v0], 140);
const stavesmo109331 = new VF.Stave(1331, 183.2253035909339, 155);
stavesmo109331.setAttribute('id', 'stavesmo109331');
stavesmo109331.setBegBarType(VF.Barline.type.NONE);
stavesmo109331.setEndBarType(2);
stavesmo109331.setContext(context);
stavesmo109331.draw();
smo109331v0.draw(context, stavesmo109331);
smo216107.setContext(context);
smo216107.draw();
const stavesmo111758 = new VF.Stave(1331, 288.2253035909339, 155);
stavesmo111758.setAttribute('id', 'stavesmo111758');
stavesmo111758.setBegBarType(VF.Barline.type.NONE);
stavesmo111758.setEndBarType(2);
stavesmo111758.setContext(context);
stavesmo111758.draw();
smo111758v0.draw(context, stavesmo111758);
smo216109.setContext(context);
smo216109.draw();
const stavesmo114174 = new VF.Stave(1331, 379.2253035909339, 155);
stavesmo114174.setAttribute('id', 'stavesmo114174');
stavesmo114174.setBegBarType(VF.Barline.type.NONE);
stavesmo114174.setEndBarType(2);
stavesmo114174.setContext(context);
stavesmo114174.draw();
smo114174v0.draw(context, stavesmo114174);
smo216111.setContext(context);
smo216111.draw();
const stavesmo116548 = new VF.Stave(1331, 479.2253035909339, 155);
stavesmo116548.setAttribute('id', 'stavesmo116548');
stavesmo116548.setBegBarType(VF.Barline.type.NONE);
stavesmo116548.setEndBarType(2);
stavesmo116548.setContext(context);
stavesmo116548.draw();
smo116548v0.draw(context, stavesmo116548);
smo216113.setContext(context);
smo216113.draw();
const stavesmo118899 = new VF.Stave(1331, 549.2253035909339, 155);
stavesmo118899.setAttribute('id', 'stavesmo118899');
stavesmo118899.setBegBarType(VF.Barline.type.NONE);
stavesmo118899.setEndBarType(2);
stavesmo118899.setContext(context);
stavesmo118899.draw();
smo118899v0.draw(context, stavesmo118899);
// create beam groups and tuplets for format grp smo149771 before formatting
const dirsmo216116 = smo121186.getStemDirection();
smo121186.setStemDirection(dirsmo216116);
smo121187.setStemDirection(dirsmo216116);
const smo216116 = new VF.Beam([smo121186,smo121187]);
const dirsmo216118 = smo123592.getStemDirection();
smo123592.setStemDirection(dirsmo216118);
smo123593.setStemDirection(dirsmo216118);
const smo216118 = new VF.Beam([smo123592,smo123593]);
 
// formatting measures in staff group smo149771
fmtsmo12120616.format([smo121206v0,smo123612v0,smo125939v0,smo128289v0], 140);
const stavesmo121206 = new VF.Stave(1331, 630.2253035909339, 155);
stavesmo121206.setAttribute('id', 'stavesmo121206');
stavesmo121206.setBegBarType(VF.Barline.type.NONE);
stavesmo121206.setEndBarType(2);
stavesmo121206.setContext(context);
stavesmo121206.draw();
smo121206v0.draw(context, stavesmo121206);
smo216116.setContext(context);
smo216116.draw();
const stavesmo123612 = new VF.Stave(1331, 700.2253035909339, 155);
stavesmo123612.setAttribute('id', 'stavesmo123612');
stavesmo123612.setBegBarType(VF.Barline.type.NONE);
stavesmo123612.setEndBarType(2);
stavesmo123612.setContext(context);
stavesmo123612.draw();
smo123612v0.draw(context, stavesmo123612);
smo216118.setContext(context);
smo216118.draw();
const stavesmo125939 = new VF.Stave(1331, 761.2253035909339, 155);
stavesmo125939.setAttribute('id', 'stavesmo125939');
stavesmo125939.setBegBarType(VF.Barline.type.NONE);
stavesmo125939.setEndBarType(2);
stavesmo125939.setContext(context);
stavesmo125939.draw();
smo125939v0.draw(context, stavesmo125939);
const stavesmo128289 = new VF.Stave(1331, 831.2253035909339, 155);
stavesmo128289.setAttribute('id', 'stavesmo128289');
stavesmo128289.setBegBarType(VF.Barline.type.NONE);
stavesmo128289.setEndBarType(2);
stavesmo128289.setContext(context);
stavesmo128289.draw();
smo128289v0.draw(context, stavesmo128289);
// create beam groups and tuplets for format grp smo149773 before formatting
const dirsmo216122 = smo130691.getStemDirection();
smo130691.setStemDirection(dirsmo216122);
smo130692.setStemDirection(dirsmo216122);
const smo216122 = new VF.Beam([smo130691,smo130692]);
const dirsmo216124 = smo133064.getStemDirection();
smo133064.setStemDirection(dirsmo216124);
smo133065.setStemDirection(dirsmo216124);
const smo216124 = new VF.Beam([smo133064,smo133065]);
const dirsmo216126 = smo135410.getStemDirection();
smo135410.setStemDirection(dirsmo216126);
smo135411.setStemDirection(dirsmo216126);
const smo216126 = new VF.Beam([smo135410,smo135411]);
 
// formatting measures in staff group smo149773
fmtsmo13071116.format([smo130711v0,smo133084v0,smo135430v0,smo137758v0], 140);
const stavesmo130711 = new VF.Stave(1331, 936.2253035909339, 155);
stavesmo130711.setAttribute('id', 'stavesmo130711');
stavesmo130711.setBegBarType(VF.Barline.type.NONE);
stavesmo130711.setEndBarType(2);
stavesmo130711.setContext(context);
stavesmo130711.draw();
smo130711v0.draw(context, stavesmo130711);
smo216122.setContext(context);
smo216122.draw();
const stavesmo133084 = new VF.Stave(1331, 1023.2253035909339, 155);
stavesmo133084.setAttribute('id', 'stavesmo133084');
stavesmo133084.setBegBarType(VF.Barline.type.NONE);
stavesmo133084.setEndBarType(2);
stavesmo133084.setContext(context);
stavesmo133084.draw();
smo133084v0.draw(context, stavesmo133084);
smo216124.setContext(context);
smo216124.draw();
const stavesmo135430 = new VF.Stave(1331, 1128.225303590934, 155);
stavesmo135430.setAttribute('id', 'stavesmo135430');
stavesmo135430.setBegBarType(VF.Barline.type.NONE);
stavesmo135430.setEndBarType(2);
stavesmo135430.setContext(context);
stavesmo135430.draw();
smo135430v0.draw(context, stavesmo135430);
smo216126.setContext(context);
smo216126.draw();
const stavesmo137758 = new VF.Stave(1331, 1213.225303590934, 155);
stavesmo137758.setAttribute('id', 'stavesmo137758');
stavesmo137758.setBegBarType(VF.Barline.type.NONE);
stavesmo137758.setEndBarType(2);
stavesmo137758.setContext(context);
stavesmo137758.draw();
smo137758v0.draw(context, stavesmo137758);
// create beam groups and tuplets for format grp smo142224 before formatting
const dirsmo216129 = smo140072.getStemDirection();
smo140072.setStemDirection(dirsmo216129);
smo140073.setStemDirection(dirsmo216129);
const smo216129 = new VF.Beam([smo140072,smo140073]);
 
// formatting measures in staff group smo142224
fmtsmo14009216.format([smo140092v0], 140);
const stavesmo140092 = new VF.Stave(1331, 1290.225303590934, 155);
stavesmo140092.setAttribute('id', 'stavesmo140092');
stavesmo140092.setBegBarType(VF.Barline.type.NONE);
stavesmo140092.setEndBarType(2);
stavesmo140092.setContext(context);
stavesmo140092.draw();
smo140092v0.draw(context, stavesmo140092);
smo216129.setContext(context);
smo216129.draw();
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14251816.format([smo142518v0], 140);
const stavesmo142518 = new VF.Stave(1331, 1373.225303590934, 155);
stavesmo142518.setAttribute('id', 'stavesmo142518');
stavesmo142518.setBegBarType(VF.Barline.type.NONE);
stavesmo142518.setEndBarType(2);
stavesmo142518.setContext(context);
stavesmo142518.draw();
smo142518v0.draw(context, stavesmo142518);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14503616.format([smo145036v0], 140);
const stavesmo145036 = new VF.Stave(1331, 1478.225303590934, 155);
stavesmo145036.setAttribute('id', 'stavesmo145036');
stavesmo145036.setBegBarType(VF.Barline.type.NONE);
stavesmo145036.setEndBarType(2);
stavesmo145036.setContext(context);
stavesmo145036.draw();
smo145036v0.draw(context, stavesmo145036);
// create beam groups and tuplets for format grp smo149763 before formatting
 
// formatting measures in staff group smo149763
fmtsmo14749516.format([smo147495v0], 140);
const stavesmo147495 = new VF.Stave(1331, 1555.225303590934, 155);
stavesmo147495.setAttribute('id', 'stavesmo147495');
stavesmo147495.setBegBarType(VF.Barline.type.NONE);
stavesmo147495.setEndBarType(2);
stavesmo147495.setContext(context);
stavesmo147495.draw();
smo147495v0.draw(context, stavesmo147495);
const fmtsmo10934817 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo109348v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo109348v0ar = [];
const smo109332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo109332.setAttribute('id', 'smo109332');
smo109348v0ar.push(smo109332);
smo109348v0.addTickables(smo109348v0ar)
fmtsmo10934817.joinVoices([smo109348v0]);
const fmtsmo11177517 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo111775v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111775v0ar = [];
const smo111759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo111759.setAttribute('id', 'smo111759');
smo111775v0ar.push(smo111759);
smo111775v0.addTickables(smo111775v0ar)
fmtsmo11177517.joinVoices([smo111775v0]);
const fmtsmo11419117 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo114191v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114191v0ar = [];
const smo114175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo114175.setAttribute('id', 'smo114175');
smo114191v0ar.push(smo114175);
smo114191v0.addTickables(smo114191v0ar)
fmtsmo11419117.joinVoices([smo114191v0]);
const fmtsmo11656517 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo116565v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116565v0ar = [];
const smo116549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo116549.setAttribute('id', 'smo116549');
smo116565v0ar.push(smo116549);
smo116565v0.addTickables(smo116565v0ar)
fmtsmo11656517.joinVoices([smo116565v0]);
const fmtsmo11891617 = new VF.Formatter();
//
// voices and notes for stave 4 17
const smo118916v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118916v0ar = [];
const smo118900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo118900.setAttribute('id', 'smo118900');
smo118916v0ar.push(smo118900);
smo118916v0.addTickables(smo118916v0ar)
fmtsmo11891617.joinVoices([smo118916v0]);
const fmtsmo12122317 = new VF.Formatter();
//
// voices and notes for stave 5 17
const smo121223v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121223v0ar = [];
const smo121207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo121207.setAttribute('id', 'smo121207');
smo121223v0ar.push(smo121207);
smo121223v0.addTickables(smo121223v0ar)
fmtsmo12122317.joinVoices([smo121223v0]);
const fmtsmo12362917 = new VF.Formatter();
//
// voices and notes for stave 6 17
const smo123629v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123629v0ar = [];
const smo123613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo123613.setAttribute('id', 'smo123613');
smo123629v0ar.push(smo123613);
smo123629v0.addTickables(smo123629v0ar)
fmtsmo12362917.joinVoices([smo123629v0]);
const fmtsmo12595617 = new VF.Formatter();
//
// voices and notes for stave 7 17
const smo125956v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125956v0ar = [];
const smo125940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125940.setAttribute('id', 'smo125940');
smo125956v0ar.push(smo125940);
smo125956v0.addTickables(smo125956v0ar)
fmtsmo12595617.joinVoices([smo125956v0]);
const fmtsmo12830617 = new VF.Formatter();
//
// voices and notes for stave 8 17
const smo128306v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128306v0ar = [];
const smo128290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128290.setAttribute('id', 'smo128290');
smo128306v0ar.push(smo128290);
smo128306v0.addTickables(smo128306v0ar)
fmtsmo12830617.joinVoices([smo128306v0]);
const fmtsmo13072817 = new VF.Formatter();
//
// voices and notes for stave 9 17
const smo130728v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130728v0ar = [];
const smo130712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130712.setAttribute('id', 'smo130712');
smo130728v0ar.push(smo130712);
smo130728v0.addTickables(smo130728v0ar)
fmtsmo13072817.joinVoices([smo130728v0]);
const fmtsmo13310117 = new VF.Formatter();
//
// voices and notes for stave 10 17
const smo133101v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133101v0ar = [];
const smo133085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo133085.setAttribute('id', 'smo133085');
smo133101v0ar.push(smo133085);
smo133101v0.addTickables(smo133101v0ar)
fmtsmo13310117.joinVoices([smo133101v0]);
const fmtsmo13544717 = new VF.Formatter();
//
// voices and notes for stave 11 17
const smo135447v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135447v0ar = [];
const smo135431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135431.setAttribute('id', 'smo135431');
smo135447v0ar.push(smo135431);
smo135447v0.addTickables(smo135447v0ar)
fmtsmo13544717.joinVoices([smo135447v0]);
const fmtsmo13777517 = new VF.Formatter();
//
// voices and notes for stave 12 17
const smo137775v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137775v0ar = [];
const smo137759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo137759.setAttribute('id', 'smo137759');
smo137775v0ar.push(smo137759);
smo137775v0.addTickables(smo137775v0ar)
fmtsmo13777517.joinVoices([smo137775v0]);
const fmtsmo14010917 = new VF.Formatter();
//
// voices and notes for stave 13 17
const smo140109v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140109v0ar = [];
const smo140093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140093.setAttribute('id', 'smo140093');
smo140109v0ar.push(smo140093);
smo140109v0.addTickables(smo140109v0ar)
fmtsmo14010917.joinVoices([smo140109v0]);
const fmtsmo14253517 = new VF.Formatter();
//
// voices and notes for stave 14 17
const smo142535v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142535v0ar = [];
const smo142519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142519.setAttribute('id', 'smo142519');
smo142535v0ar.push(smo142519);
smo142535v0.addTickables(smo142535v0ar)
fmtsmo14253517.joinVoices([smo142535v0]);
const fmtsmo14505517 = new VF.Formatter();
//
// voices and notes for stave 15 17
const smo145055v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145055v0ar = [];
const smo145037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo145037.setAttribute('id', 'smo145037');
smo145055v0ar.push(smo145037);
const smo145038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145038.setAttribute('id', 'smo145038');
smo145055v0ar.push(smo145038);
const smo145039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo145039.setAttribute('id', 'smo145039');
smo145055v0ar.push(smo145039);
smo145055v0.addTickables(smo145055v0ar)
fmtsmo14505517.joinVoices([smo145055v0]);
const fmtsmo14751517 = new VF.Formatter();
//
// voices and notes for stave 16 17
const smo147515v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147515v0ar = [];
const smo147496 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147496.setAttribute('id', 'smo147496');
const smo1474960acc = new VF.Accidental('n');
smo147496.addModifier(smo1474960acc, 0);
smo147515v0ar.push(smo147496);
const smo147497 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147497.setAttribute('id', 'smo147497');
smo147515v0ar.push(smo147497);
const smo147498 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147498.setAttribute('id', 'smo147498');
smo147515v0ar.push(smo147498);
const smo147499 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147499.setAttribute('id', 'smo147499');
smo147515v0ar.push(smo147499);
smo147515v0.addTickables(smo147515v0ar)
fmtsmo14751517.joinVoices([smo147515v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
 
// formatting measures in staff group smo149769
fmtsmo10934817.format([smo109348v0,smo111775v0,smo114191v0,smo116565v0,smo118916v0], 108);
const stavesmo109348 = new VF.Stave(1486, 183.2253035909339, 146);
stavesmo109348.setAttribute('id', 'stavesmo109348');
stavesmo109348.setBegBarType(VF.Barline.type.NONE);
stavesmo109348.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":256}'), -1 * 0);
stavesmo109348.addTimeSignature('2/2');
stavesmo109348.setContext(context);
stavesmo109348.draw();
smo109348v0.draw(context, stavesmo109348);
const stavesmo111775 = new VF.Stave(1486, 288.2253035909339, 146);
stavesmo111775.setAttribute('id', 'stavesmo111775');
stavesmo111775.setBegBarType(VF.Barline.type.NONE);
stavesmo111775.addTimeSignature('2/2');
stavesmo111775.setContext(context);
stavesmo111775.draw();
smo111775v0.draw(context, stavesmo111775);
const stavesmo114191 = new VF.Stave(1486, 379.2253035909339, 146);
stavesmo114191.setAttribute('id', 'stavesmo114191');
stavesmo114191.setBegBarType(VF.Barline.type.NONE);
stavesmo114191.addTimeSignature('2/2');
stavesmo114191.setContext(context);
stavesmo114191.draw();
smo114191v0.draw(context, stavesmo114191);
const stavesmo116565 = new VF.Stave(1486, 479.2253035909339, 146);
stavesmo116565.setAttribute('id', 'stavesmo116565');
stavesmo116565.setBegBarType(VF.Barline.type.NONE);
stavesmo116565.addTimeSignature('2/2');
stavesmo116565.setContext(context);
stavesmo116565.draw();
smo116565v0.draw(context, stavesmo116565);
const stavesmo118916 = new VF.Stave(1486, 549.2253035909339, 146);
stavesmo118916.setAttribute('id', 'stavesmo118916');
stavesmo118916.setBegBarType(VF.Barline.type.NONE);
stavesmo118916.addTimeSignature('2/2');
stavesmo118916.setContext(context);
stavesmo118916.draw();
smo118916v0.draw(context, stavesmo118916);
// create beam groups and tuplets for format grp smo149771 before formatting
 
// formatting measures in staff group smo149771
fmtsmo12122317.format([smo121223v0,smo123629v0,smo125956v0,smo128306v0], 108);
const stavesmo121223 = new VF.Stave(1486, 630.2253035909339, 146);
stavesmo121223.setAttribute('id', 'stavesmo121223');
stavesmo121223.setBegBarType(VF.Barline.type.NONE);
stavesmo121223.addTimeSignature('2/2');
stavesmo121223.setContext(context);
stavesmo121223.draw();
smo121223v0.draw(context, stavesmo121223);
const stavesmo123629 = new VF.Stave(1486, 700.2253035909339, 146);
stavesmo123629.setAttribute('id', 'stavesmo123629');
stavesmo123629.setBegBarType(VF.Barline.type.NONE);
stavesmo123629.addTimeSignature('2/2');
stavesmo123629.setContext(context);
stavesmo123629.draw();
smo123629v0.draw(context, stavesmo123629);
const stavesmo125956 = new VF.Stave(1486, 761.2253035909339, 146);
stavesmo125956.setAttribute('id', 'stavesmo125956');
stavesmo125956.setBegBarType(VF.Barline.type.NONE);
stavesmo125956.addTimeSignature('2/2');
stavesmo125956.setContext(context);
stavesmo125956.draw();
smo125956v0.draw(context, stavesmo125956);
const stavesmo128306 = new VF.Stave(1486, 831.2253035909339, 146);
stavesmo128306.setAttribute('id', 'stavesmo128306');
stavesmo128306.setBegBarType(VF.Barline.type.NONE);
stavesmo128306.addTimeSignature('2/2');
stavesmo128306.setContext(context);
stavesmo128306.draw();
smo128306v0.draw(context, stavesmo128306);
// create beam groups and tuplets for format grp smo149773 before formatting
 
// formatting measures in staff group smo149773
fmtsmo13072817.format([smo130728v0,smo133101v0,smo135447v0,smo137775v0], 108);
const stavesmo130728 = new VF.Stave(1486, 936.2253035909339, 146);
stavesmo130728.setAttribute('id', 'stavesmo130728');
stavesmo130728.setBegBarType(VF.Barline.type.NONE);
stavesmo130728.addTimeSignature('2/2');
stavesmo130728.setContext(context);
stavesmo130728.draw();
smo130728v0.draw(context, stavesmo130728);
const stavesmo133101 = new VF.Stave(1486, 1023.2253035909339, 146);
stavesmo133101.setAttribute('id', 'stavesmo133101');
stavesmo133101.setBegBarType(VF.Barline.type.NONE);
stavesmo133101.addTimeSignature('2/2');
stavesmo133101.setContext(context);
stavesmo133101.draw();
smo133101v0.draw(context, stavesmo133101);
const stavesmo135447 = new VF.Stave(1486, 1128.225303590934, 146);
stavesmo135447.setAttribute('id', 'stavesmo135447');
stavesmo135447.setBegBarType(VF.Barline.type.NONE);
stavesmo135447.addTimeSignature('2/2');
stavesmo135447.setContext(context);
stavesmo135447.draw();
smo135447v0.draw(context, stavesmo135447);
const stavesmo137775 = new VF.Stave(1486, 1213.225303590934, 146);
stavesmo137775.setAttribute('id', 'stavesmo137775');
stavesmo137775.setBegBarType(VF.Barline.type.NONE);
stavesmo137775.addTimeSignature('2/2');
stavesmo137775.setContext(context);
stavesmo137775.draw();
smo137775v0.draw(context, stavesmo137775);
// create beam groups and tuplets for format grp smo142224 before formatting
 
// formatting measures in staff group smo142224
fmtsmo14010917.format([smo140109v0], 108);
const stavesmo140109 = new VF.Stave(1486, 1290.225303590934, 146);
stavesmo140109.setAttribute('id', 'stavesmo140109');
stavesmo140109.setBegBarType(VF.Barline.type.NONE);
stavesmo140109.addTimeSignature('2/2');
stavesmo140109.setContext(context);
stavesmo140109.draw();
smo140109v0.draw(context, stavesmo140109);
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14253517.format([smo142535v0], 108);
const stavesmo142535 = new VF.Stave(1486, 1373.225303590934, 146);
stavesmo142535.setAttribute('id', 'stavesmo142535');
stavesmo142535.setBegBarType(VF.Barline.type.NONE);
stavesmo142535.addTimeSignature('2/2');
stavesmo142535.setContext(context);
stavesmo142535.draw();
smo142535v0.draw(context, stavesmo142535);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14505517.format([smo145055v0], 108);
const stavesmo145055 = new VF.Stave(1486, 1478.225303590934, 146);
stavesmo145055.setAttribute('id', 'stavesmo145055');
stavesmo145055.setBegBarType(VF.Barline.type.NONE);
stavesmo145055.addTimeSignature('2/2');
stavesmo145055.setContext(context);
stavesmo145055.draw();
smo145055v0.draw(context, stavesmo145055);
// create beam groups and tuplets for format grp smo149763 before formatting
 
// formatting measures in staff group smo149763
fmtsmo14751517.format([smo147515v0], 108);
const stavesmo147515 = new VF.Stave(1486, 1555.225303590934, 146);
stavesmo147515.setAttribute('id', 'stavesmo147515');
stavesmo147515.setBegBarType(VF.Barline.type.NONE);
stavesmo147515.addTimeSignature('2/2');
stavesmo147515.setContext(context);
stavesmo147515.draw();
smo147515v0.draw(context, stavesmo147515);
const fmtsmo10936518 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo109365v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo109365v0ar = [];
const smo109349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo109349.setAttribute('id', 'smo109349');
smo109365v0ar.push(smo109349);
smo109365v0.addTickables(smo109365v0ar)
fmtsmo10936518.joinVoices([smo109365v0]);
const fmtsmo11179218 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo111792v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111792v0ar = [];
const smo111776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo111776.setAttribute('id', 'smo111776');
smo111792v0ar.push(smo111776);
smo111792v0.addTickables(smo111792v0ar)
fmtsmo11179218.joinVoices([smo111792v0]);
const fmtsmo11420818 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo114208v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114208v0ar = [];
const smo114192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo114192.setAttribute('id', 'smo114192');
smo114208v0ar.push(smo114192);
smo114208v0.addTickables(smo114208v0ar)
fmtsmo11420818.joinVoices([smo114208v0]);
const fmtsmo11658218 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo116582v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116582v0ar = [];
const smo116566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo116566.setAttribute('id', 'smo116566');
smo116582v0ar.push(smo116566);
smo116582v0.addTickables(smo116582v0ar)
fmtsmo11658218.joinVoices([smo116582v0]);
const fmtsmo11893318 = new VF.Formatter();
//
// voices and notes for stave 4 18
const smo118933v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118933v0ar = [];
const smo118917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo118917.setAttribute('id', 'smo118917');
smo118933v0ar.push(smo118917);
smo118933v0.addTickables(smo118933v0ar)
fmtsmo11893318.joinVoices([smo118933v0]);
const fmtsmo12124018 = new VF.Formatter();
//
// voices and notes for stave 5 18
const smo121240v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121240v0ar = [];
const smo121224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo121224.setAttribute('id', 'smo121224');
smo121240v0ar.push(smo121224);
smo121240v0.addTickables(smo121240v0ar)
fmtsmo12124018.joinVoices([smo121240v0]);
const fmtsmo12364618 = new VF.Formatter();
//
// voices and notes for stave 6 18
const smo123646v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123646v0ar = [];
const smo123630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo123630.setAttribute('id', 'smo123630');
smo123646v0ar.push(smo123630);
smo123646v0.addTickables(smo123646v0ar)
fmtsmo12364618.joinVoices([smo123646v0]);
const fmtsmo12597318 = new VF.Formatter();
//
// voices and notes for stave 7 18
const smo125973v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125973v0ar = [];
const smo125957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125957.setAttribute('id', 'smo125957');
smo125973v0ar.push(smo125957);
smo125973v0.addTickables(smo125973v0ar)
fmtsmo12597318.joinVoices([smo125973v0]);
const fmtsmo12832318 = new VF.Formatter();
//
// voices and notes for stave 8 18
const smo128323v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128323v0ar = [];
const smo128307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128307.setAttribute('id', 'smo128307');
smo128323v0ar.push(smo128307);
smo128323v0.addTickables(smo128323v0ar)
fmtsmo12832318.joinVoices([smo128323v0]);
const fmtsmo13074518 = new VF.Formatter();
//
// voices and notes for stave 9 18
const smo130745v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130745v0ar = [];
const smo130729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo130729.setAttribute('id', 'smo130729');
smo130745v0ar.push(smo130729);
smo130745v0.addTickables(smo130745v0ar)
fmtsmo13074518.joinVoices([smo130745v0]);
const fmtsmo13311818 = new VF.Formatter();
//
// voices and notes for stave 10 18
const smo133118v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133118v0ar = [];
const smo133102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo133102.setAttribute('id', 'smo133102');
smo133118v0ar.push(smo133102);
smo133118v0.addTickables(smo133118v0ar)
fmtsmo13311818.joinVoices([smo133118v0]);
const fmtsmo13546418 = new VF.Formatter();
//
// voices and notes for stave 11 18
const smo135464v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135464v0ar = [];
const smo135448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo135448.setAttribute('id', 'smo135448');
smo135464v0ar.push(smo135448);
smo135464v0.addTickables(smo135464v0ar)
fmtsmo13546418.joinVoices([smo135464v0]);
const fmtsmo13779218 = new VF.Formatter();
//
// voices and notes for stave 12 18
const smo137792v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137792v0ar = [];
const smo137776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo137776.setAttribute('id', 'smo137776');
smo137792v0ar.push(smo137776);
smo137792v0.addTickables(smo137792v0ar)
fmtsmo13779218.joinVoices([smo137792v0]);
const fmtsmo14012618 = new VF.Formatter();
//
// voices and notes for stave 13 18
const smo140126v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140126v0ar = [];
const smo140110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140110.setAttribute('id', 'smo140110');
smo140126v0ar.push(smo140110);
smo140126v0.addTickables(smo140126v0ar)
fmtsmo14012618.joinVoices([smo140126v0]);
const fmtsmo14255218 = new VF.Formatter();
//
// voices and notes for stave 14 18
const smo142552v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142552v0ar = [];
const smo142536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142536.setAttribute('id', 'smo142536');
smo142552v0ar.push(smo142536);
smo142552v0.addTickables(smo142552v0ar)
fmtsmo14255218.joinVoices([smo142552v0]);
const fmtsmo14507418 = new VF.Formatter();
//
// voices and notes for stave 15 18
const smo145074v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145074v0ar = [];
const smo145056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo145056.setAttribute('id', 'smo145056');
smo145074v0ar.push(smo145056);
const smo145057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145057.setAttribute('id', 'smo145057');
smo145074v0ar.push(smo145057);
const smo145058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo145058.setAttribute('id', 'smo145058');
smo145074v0ar.push(smo145058);
smo145074v0.addTickables(smo145074v0ar)
fmtsmo14507418.joinVoices([smo145074v0]);
const fmtsmo14753718 = new VF.Formatter();
//
// voices and notes for stave 16 18
const smo147537v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147537v0ar = [];
const smo147516 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147516.setAttribute('id', 'smo147516');
const smo1475160acc = new VF.Accidental('n');
smo147516.addModifier(smo1475160acc, 0);
smo147537v0ar.push(smo147516);
const smo147517 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147517.setAttribute('id', 'smo147517');
smo147537v0ar.push(smo147517);
const smo147518 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147518.setAttribute('id', 'smo147518');
smo147537v0ar.push(smo147518);
const smo147519 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147519.setAttribute('id', 'smo147519');
smo147537v0ar.push(smo147519);
const smo147520 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147520.setAttribute('id', 'smo147520');
smo147537v0ar.push(smo147520);
const smo147521 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147521.setAttribute('id', 'smo147521');
smo147537v0ar.push(smo147521);
smo147537v0.addTickables(smo147537v0ar)
fmtsmo14753718.joinVoices([smo147537v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
 
// formatting measures in staff group smo149769
fmtsmo10936518.format([smo109365v0,smo111792v0,smo114208v0,smo116582v0,smo118933v0], 174);
const stavesmo109365 = new VF.Stave(1632, 183.2253035909339, 188);
stavesmo109365.setAttribute('id', 'stavesmo109365');
stavesmo109365.setBegBarType(VF.Barline.type.NONE);
stavesmo109365.setContext(context);
stavesmo109365.draw();
smo109365v0.draw(context, stavesmo109365);
const stavesmo111792 = new VF.Stave(1632, 288.2253035909339, 188);
stavesmo111792.setAttribute('id', 'stavesmo111792');
stavesmo111792.setBegBarType(VF.Barline.type.NONE);
stavesmo111792.setContext(context);
stavesmo111792.draw();
smo111792v0.draw(context, stavesmo111792);
const stavesmo114208 = new VF.Stave(1632, 379.2253035909339, 188);
stavesmo114208.setAttribute('id', 'stavesmo114208');
stavesmo114208.setBegBarType(VF.Barline.type.NONE);
stavesmo114208.setContext(context);
stavesmo114208.draw();
smo114208v0.draw(context, stavesmo114208);
const stavesmo116582 = new VF.Stave(1632, 479.2253035909339, 188);
stavesmo116582.setAttribute('id', 'stavesmo116582');
stavesmo116582.setBegBarType(VF.Barline.type.NONE);
stavesmo116582.setContext(context);
stavesmo116582.draw();
smo116582v0.draw(context, stavesmo116582);
const stavesmo118933 = new VF.Stave(1632, 549.2253035909339, 188);
stavesmo118933.setAttribute('id', 'stavesmo118933');
stavesmo118933.setBegBarType(VF.Barline.type.NONE);
stavesmo118933.setContext(context);
stavesmo118933.draw();
smo118933v0.draw(context, stavesmo118933);
// create beam groups and tuplets for format grp smo149771 before formatting
 
// formatting measures in staff group smo149771
fmtsmo12124018.format([smo121240v0,smo123646v0,smo125973v0,smo128323v0], 174);
const stavesmo121240 = new VF.Stave(1632, 630.2253035909339, 188);
stavesmo121240.setAttribute('id', 'stavesmo121240');
stavesmo121240.setBegBarType(VF.Barline.type.NONE);
stavesmo121240.setContext(context);
stavesmo121240.draw();
smo121240v0.draw(context, stavesmo121240);
const stavesmo123646 = new VF.Stave(1632, 700.2253035909339, 188);
stavesmo123646.setAttribute('id', 'stavesmo123646');
stavesmo123646.setBegBarType(VF.Barline.type.NONE);
stavesmo123646.setContext(context);
stavesmo123646.draw();
smo123646v0.draw(context, stavesmo123646);
const stavesmo125973 = new VF.Stave(1632, 761.2253035909339, 188);
stavesmo125973.setAttribute('id', 'stavesmo125973');
stavesmo125973.setBegBarType(VF.Barline.type.NONE);
stavesmo125973.setContext(context);
stavesmo125973.draw();
smo125973v0.draw(context, stavesmo125973);
const stavesmo128323 = new VF.Stave(1632, 831.2253035909339, 188);
stavesmo128323.setAttribute('id', 'stavesmo128323');
stavesmo128323.setBegBarType(VF.Barline.type.NONE);
stavesmo128323.setContext(context);
stavesmo128323.draw();
smo128323v0.draw(context, stavesmo128323);
// create beam groups and tuplets for format grp smo149773 before formatting
 
// formatting measures in staff group smo149773
fmtsmo13074518.format([smo130745v0,smo133118v0,smo135464v0,smo137792v0], 174);
const stavesmo130745 = new VF.Stave(1632, 936.2253035909339, 188);
stavesmo130745.setAttribute('id', 'stavesmo130745');
stavesmo130745.setBegBarType(VF.Barline.type.NONE);
stavesmo130745.setContext(context);
stavesmo130745.draw();
smo130745v0.draw(context, stavesmo130745);
const stavesmo133118 = new VF.Stave(1632, 1023.2253035909339, 188);
stavesmo133118.setAttribute('id', 'stavesmo133118');
stavesmo133118.setBegBarType(VF.Barline.type.NONE);
stavesmo133118.setContext(context);
stavesmo133118.draw();
smo133118v0.draw(context, stavesmo133118);
const stavesmo135464 = new VF.Stave(1632, 1128.225303590934, 188);
stavesmo135464.setAttribute('id', 'stavesmo135464');
stavesmo135464.setBegBarType(VF.Barline.type.NONE);
stavesmo135464.setContext(context);
stavesmo135464.draw();
smo135464v0.draw(context, stavesmo135464);
const stavesmo137792 = new VF.Stave(1632, 1213.225303590934, 188);
stavesmo137792.setAttribute('id', 'stavesmo137792');
stavesmo137792.setBegBarType(VF.Barline.type.NONE);
stavesmo137792.setContext(context);
stavesmo137792.draw();
smo137792v0.draw(context, stavesmo137792);
// create beam groups and tuplets for format grp smo142224 before formatting
 
// formatting measures in staff group smo142224
fmtsmo14012618.format([smo140126v0], 174);
const stavesmo140126 = new VF.Stave(1632, 1290.225303590934, 188);
stavesmo140126.setAttribute('id', 'stavesmo140126');
stavesmo140126.setBegBarType(VF.Barline.type.NONE);
stavesmo140126.setContext(context);
stavesmo140126.draw();
smo140126v0.draw(context, stavesmo140126);
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14255218.format([smo142552v0], 174);
const stavesmo142552 = new VF.Stave(1632, 1373.225303590934, 188);
stavesmo142552.setAttribute('id', 'stavesmo142552');
stavesmo142552.setBegBarType(VF.Barline.type.NONE);
stavesmo142552.setContext(context);
stavesmo142552.draw();
smo142552v0.draw(context, stavesmo142552);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14507418.format([smo145074v0], 174);
const stavesmo145074 = new VF.Stave(1632, 1478.225303590934, 188);
stavesmo145074.setAttribute('id', 'stavesmo145074');
stavesmo145074.setBegBarType(VF.Barline.type.NONE);
stavesmo145074.setContext(context);
stavesmo145074.draw();
smo145074v0.draw(context, stavesmo145074);
// create beam groups and tuplets for format grp smo149763 before formatting
const dirsmo216200 = smo147516.getStemDirection();
smo147516.setStemDirection(dirsmo216200);
smo147517.setStemDirection(dirsmo216200);
const smo216200 = new VF.Beam([smo147516,smo147517]);
 
// formatting measures in staff group smo149763
fmtsmo14753718.format([smo147537v0], 174);
const stavesmo147537 = new VF.Stave(1632, 1555.225303590934, 188);
stavesmo147537.setAttribute('id', 'stavesmo147537');
stavesmo147537.setBegBarType(VF.Barline.type.NONE);
stavesmo147537.setContext(context);
stavesmo147537.draw();
smo147537v0.draw(context, stavesmo147537);
smo216200.setContext(context);
smo216200.draw();
const fmtsmo10938219 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo109382v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo109382v0ar = [];
const smo109366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo109366.setAttribute('id', 'smo109366');
smo109382v0ar.push(smo109366);
smo109382v0.addTickables(smo109382v0ar)
fmtsmo10938219.joinVoices([smo109382v0]);
const fmtsmo11180919 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo111809v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111809v0ar = [];
const smo111793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111793.setAttribute('id', 'smo111793');
smo111809v0ar.push(smo111793);
smo111809v0.addTickables(smo111809v0ar)
fmtsmo11180919.joinVoices([smo111809v0]);
const fmtsmo11422519 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo114225v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114225v0ar = [];
const smo114209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo114209.setAttribute('id', 'smo114209');
smo114225v0ar.push(smo114209);
smo114225v0.addTickables(smo114225v0ar)
fmtsmo11422519.joinVoices([smo114225v0]);
const fmtsmo11659919 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo116599v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116599v0ar = [];
const smo116583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo116583.setAttribute('id', 'smo116583');
smo116599v0ar.push(smo116583);
smo116599v0.addTickables(smo116599v0ar)
fmtsmo11659919.joinVoices([smo116599v0]);
const fmtsmo11895019 = new VF.Formatter();
//
// voices and notes for stave 4 19
const smo118950v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118950v0ar = [];
const smo118934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo118934.setAttribute('id', 'smo118934');
smo118950v0ar.push(smo118934);
smo118950v0.addTickables(smo118950v0ar)
fmtsmo11895019.joinVoices([smo118950v0]);
const fmtsmo12125719 = new VF.Formatter();
//
// voices and notes for stave 5 19
const smo121257v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121257v0ar = [];
const smo121241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121241.setAttribute('id', 'smo121241');
smo121257v0ar.push(smo121241);
smo121257v0.addTickables(smo121257v0ar)
fmtsmo12125719.joinVoices([smo121257v0]);
const fmtsmo12366319 = new VF.Formatter();
//
// voices and notes for stave 6 19
const smo123663v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123663v0ar = [];
const smo123647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123647.setAttribute('id', 'smo123647');
smo123663v0ar.push(smo123647);
smo123663v0.addTickables(smo123663v0ar)
fmtsmo12366319.joinVoices([smo123663v0]);
const fmtsmo12599019 = new VF.Formatter();
//
// voices and notes for stave 7 19
const smo125990v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125990v0ar = [];
const smo125974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125974.setAttribute('id', 'smo125974');
smo125990v0ar.push(smo125974);
smo125990v0.addTickables(smo125990v0ar)
fmtsmo12599019.joinVoices([smo125990v0]);
const fmtsmo12834019 = new VF.Formatter();
//
// voices and notes for stave 8 19
const smo128340v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128340v0ar = [];
const smo128324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128324.setAttribute('id', 'smo128324');
smo128340v0ar.push(smo128324);
smo128340v0.addTickables(smo128340v0ar)
fmtsmo12834019.joinVoices([smo128340v0]);
const fmtsmo13076219 = new VF.Formatter();
//
// voices and notes for stave 9 19
const smo130762v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130762v0ar = [];
const smo130746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo130746.setAttribute('id', 'smo130746');
smo130762v0ar.push(smo130746);
smo130762v0.addTickables(smo130762v0ar)
fmtsmo13076219.joinVoices([smo130762v0]);
const fmtsmo13313519 = new VF.Formatter();
//
// voices and notes for stave 10 19
const smo133135v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133135v0ar = [];
const smo133119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo133119.setAttribute('id', 'smo133119');
smo133135v0ar.push(smo133119);
smo133135v0.addTickables(smo133135v0ar)
fmtsmo13313519.joinVoices([smo133135v0]);
const fmtsmo13548119 = new VF.Formatter();
//
// voices and notes for stave 11 19
const smo135481v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135481v0ar = [];
const smo135465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo135465.setAttribute('id', 'smo135465');
smo135481v0ar.push(smo135465);
smo135481v0.addTickables(smo135481v0ar)
fmtsmo13548119.joinVoices([smo135481v0]);
const fmtsmo13780919 = new VF.Formatter();
//
// voices and notes for stave 12 19
const smo137809v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137809v0ar = [];
const smo137793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo137793.setAttribute('id', 'smo137793');
smo137809v0ar.push(smo137793);
smo137809v0.addTickables(smo137809v0ar)
fmtsmo13780919.joinVoices([smo137809v0]);
const fmtsmo14014319 = new VF.Formatter();
//
// voices and notes for stave 13 19
const smo140143v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140143v0ar = [];
const smo140127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140127.setAttribute('id', 'smo140127');
smo140143v0ar.push(smo140127);
smo140143v0.addTickables(smo140143v0ar)
fmtsmo14014319.joinVoices([smo140143v0]);
const fmtsmo14256919 = new VF.Formatter();
//
// voices and notes for stave 14 19
const smo142569v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142569v0ar = [];
const smo142553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142553.setAttribute('id', 'smo142553');
smo142569v0ar.push(smo142553);
smo142569v0.addTickables(smo142569v0ar)
fmtsmo14256919.joinVoices([smo142569v0]);
const fmtsmo14509319 = new VF.Formatter();
//
// voices and notes for stave 15 19
const smo145093v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145093v0ar = [];
const smo145075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo145075.setAttribute('id', 'smo145075');
smo145093v0ar.push(smo145075);
const smo145076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145076.setAttribute('id', 'smo145076');
smo145093v0ar.push(smo145076);
const smo145077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo145077.setAttribute('id', 'smo145077');
smo145093v0ar.push(smo145077);
smo145093v0.addTickables(smo145093v0ar)
fmtsmo14509319.joinVoices([smo145093v0]);
const fmtsmo14755719 = new VF.Formatter();
//
// voices and notes for stave 16 19
const smo147557v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147557v0ar = [];
const smo147538 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147538.setAttribute('id', 'smo147538');
const smo1475380acc = new VF.Accidental('n');
smo147538.addModifier(smo1475380acc, 0);
smo147557v0ar.push(smo147538);
const smo147539 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147539.setAttribute('id', 'smo147539');
smo147557v0ar.push(smo147539);
const smo147540 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147540.setAttribute('id', 'smo147540');
smo147557v0ar.push(smo147540);
const smo147541 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147541.setAttribute('id', 'smo147541');
smo147557v0ar.push(smo147541);
smo147557v0.addTickables(smo147557v0ar)
fmtsmo14755719.joinVoices([smo147557v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
 
// formatting measures in staff group smo149769
fmtsmo10938219.format([smo109382v0,smo111809v0,smo114225v0,smo116599v0,smo118950v0], 101);
const stavesmo109382 = new VF.Stave(1820, 183.2253035909339, 115);
stavesmo109382.setAttribute('id', 'stavesmo109382');
stavesmo109382.setBegBarType(VF.Barline.type.NONE);
stavesmo109382.setContext(context);
stavesmo109382.draw();
smo109382v0.draw(context, stavesmo109382);
const stavesmo111809 = new VF.Stave(1820, 288.2253035909339, 115);
stavesmo111809.setAttribute('id', 'stavesmo111809');
stavesmo111809.setBegBarType(VF.Barline.type.NONE);
stavesmo111809.setContext(context);
stavesmo111809.draw();
smo111809v0.draw(context, stavesmo111809);
const stavesmo114225 = new VF.Stave(1820, 379.2253035909339, 115);
stavesmo114225.setAttribute('id', 'stavesmo114225');
stavesmo114225.setBegBarType(VF.Barline.type.NONE);
stavesmo114225.setContext(context);
stavesmo114225.draw();
smo114225v0.draw(context, stavesmo114225);
const stavesmo116599 = new VF.Stave(1820, 479.2253035909339, 115);
stavesmo116599.setAttribute('id', 'stavesmo116599');
stavesmo116599.setBegBarType(VF.Barline.type.NONE);
stavesmo116599.setContext(context);
stavesmo116599.draw();
smo116599v0.draw(context, stavesmo116599);
const stavesmo118950 = new VF.Stave(1820, 549.2253035909339, 115);
stavesmo118950.setAttribute('id', 'stavesmo118950');
stavesmo118950.setBegBarType(VF.Barline.type.NONE);
stavesmo118950.setContext(context);
stavesmo118950.draw();
smo118950v0.draw(context, stavesmo118950);
// create beam groups and tuplets for format grp smo149771 before formatting
 
// formatting measures in staff group smo149771
fmtsmo12125719.format([smo121257v0,smo123663v0,smo125990v0,smo128340v0], 101);
const stavesmo121257 = new VF.Stave(1820, 630.2253035909339, 115);
stavesmo121257.setAttribute('id', 'stavesmo121257');
stavesmo121257.setBegBarType(VF.Barline.type.NONE);
stavesmo121257.setContext(context);
stavesmo121257.draw();
smo121257v0.draw(context, stavesmo121257);
const stavesmo123663 = new VF.Stave(1820, 700.2253035909339, 115);
stavesmo123663.setAttribute('id', 'stavesmo123663');
stavesmo123663.setBegBarType(VF.Barline.type.NONE);
stavesmo123663.setContext(context);
stavesmo123663.draw();
smo123663v0.draw(context, stavesmo123663);
const stavesmo125990 = new VF.Stave(1820, 761.2253035909339, 115);
stavesmo125990.setAttribute('id', 'stavesmo125990');
stavesmo125990.setBegBarType(VF.Barline.type.NONE);
stavesmo125990.setContext(context);
stavesmo125990.draw();
smo125990v0.draw(context, stavesmo125990);
const stavesmo128340 = new VF.Stave(1820, 831.2253035909339, 115);
stavesmo128340.setAttribute('id', 'stavesmo128340');
stavesmo128340.setBegBarType(VF.Barline.type.NONE);
stavesmo128340.setContext(context);
stavesmo128340.draw();
smo128340v0.draw(context, stavesmo128340);
// create beam groups and tuplets for format grp smo149773 before formatting
 
// formatting measures in staff group smo149773
fmtsmo13076219.format([smo130762v0,smo133135v0,smo135481v0,smo137809v0], 101);
const stavesmo130762 = new VF.Stave(1820, 936.2253035909339, 115);
stavesmo130762.setAttribute('id', 'stavesmo130762');
stavesmo130762.setBegBarType(VF.Barline.type.NONE);
stavesmo130762.setContext(context);
stavesmo130762.draw();
smo130762v0.draw(context, stavesmo130762);
const stavesmo133135 = new VF.Stave(1820, 1023.2253035909339, 115);
stavesmo133135.setAttribute('id', 'stavesmo133135');
stavesmo133135.setBegBarType(VF.Barline.type.NONE);
stavesmo133135.setContext(context);
stavesmo133135.draw();
smo133135v0.draw(context, stavesmo133135);
const stavesmo135481 = new VF.Stave(1820, 1128.225303590934, 115);
stavesmo135481.setAttribute('id', 'stavesmo135481');
stavesmo135481.setBegBarType(VF.Barline.type.NONE);
stavesmo135481.setContext(context);
stavesmo135481.draw();
smo135481v0.draw(context, stavesmo135481);
const stavesmo137809 = new VF.Stave(1820, 1213.225303590934, 115);
stavesmo137809.setAttribute('id', 'stavesmo137809');
stavesmo137809.setBegBarType(VF.Barline.type.NONE);
stavesmo137809.setContext(context);
stavesmo137809.draw();
smo137809v0.draw(context, stavesmo137809);
// create beam groups and tuplets for format grp smo142224 before formatting
 
// formatting measures in staff group smo142224
fmtsmo14014319.format([smo140143v0], 101);
const stavesmo140143 = new VF.Stave(1820, 1290.225303590934, 115);
stavesmo140143.setAttribute('id', 'stavesmo140143');
stavesmo140143.setBegBarType(VF.Barline.type.NONE);
stavesmo140143.setContext(context);
stavesmo140143.draw();
smo140143v0.draw(context, stavesmo140143);
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14256919.format([smo142569v0], 101);
const stavesmo142569 = new VF.Stave(1820, 1373.225303590934, 115);
stavesmo142569.setAttribute('id', 'stavesmo142569');
stavesmo142569.setBegBarType(VF.Barline.type.NONE);
stavesmo142569.setContext(context);
stavesmo142569.draw();
smo142569v0.draw(context, stavesmo142569);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14509319.format([smo145093v0], 101);
const stavesmo145093 = new VF.Stave(1820, 1478.225303590934, 115);
stavesmo145093.setAttribute('id', 'stavesmo145093');
stavesmo145093.setBegBarType(VF.Barline.type.NONE);
stavesmo145093.setContext(context);
stavesmo145093.draw();
smo145093v0.draw(context, stavesmo145093);
// create beam groups and tuplets for format grp smo149763 before formatting
 
// formatting measures in staff group smo149763
fmtsmo14755719.format([smo147557v0], 101);
const stavesmo147557 = new VF.Stave(1820, 1555.225303590934, 115);
stavesmo147557.setAttribute('id', 'stavesmo147557');
stavesmo147557.setBegBarType(VF.Barline.type.NONE);
stavesmo147557.setContext(context);
stavesmo147557.draw();
smo147557v0.draw(context, stavesmo147557);
const fmtsmo10939920 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo109399v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo109399v0ar = [];
const smo109383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo109383.setAttribute('id', 'smo109383');
smo109399v0ar.push(smo109383);
smo109399v0.addTickables(smo109399v0ar)
fmtsmo10939920.joinVoices([smo109399v0]);
const fmtsmo11182620 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo111826v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111826v0ar = [];
const smo111810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111810.setAttribute('id', 'smo111810');
smo111826v0ar.push(smo111810);
smo111826v0.addTickables(smo111826v0ar)
fmtsmo11182620.joinVoices([smo111826v0]);
const fmtsmo11424220 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo114242v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114242v0ar = [];
const smo114226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo114226.setAttribute('id', 'smo114226');
smo114242v0ar.push(smo114226);
smo114242v0.addTickables(smo114242v0ar)
fmtsmo11424220.joinVoices([smo114242v0]);
const fmtsmo11661620 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo116616v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116616v0ar = [];
const smo116600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo116600.setAttribute('id', 'smo116600');
smo116616v0ar.push(smo116600);
smo116616v0.addTickables(smo116616v0ar)
fmtsmo11661620.joinVoices([smo116616v0]);
const fmtsmo11896720 = new VF.Formatter();
//
// voices and notes for stave 4 20
const smo118967v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118967v0ar = [];
const smo118951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo118951.setAttribute('id', 'smo118951');
smo118967v0ar.push(smo118951);
smo118967v0.addTickables(smo118967v0ar)
fmtsmo11896720.joinVoices([smo118967v0]);
const fmtsmo12127420 = new VF.Formatter();
//
// voices and notes for stave 5 20
const smo121274v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121274v0ar = [];
const smo121258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121258.setAttribute('id', 'smo121258');
smo121274v0ar.push(smo121258);
smo121274v0.addTickables(smo121274v0ar)
fmtsmo12127420.joinVoices([smo121274v0]);
const fmtsmo12368020 = new VF.Formatter();
//
// voices and notes for stave 6 20
const smo123680v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123680v0ar = [];
const smo123664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123664.setAttribute('id', 'smo123664');
smo123680v0ar.push(smo123664);
smo123680v0.addTickables(smo123680v0ar)
fmtsmo12368020.joinVoices([smo123680v0]);
const fmtsmo12600720 = new VF.Formatter();
//
// voices and notes for stave 7 20
const smo126007v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126007v0ar = [];
const smo125991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125991.setAttribute('id', 'smo125991');
smo126007v0ar.push(smo125991);
smo126007v0.addTickables(smo126007v0ar)
fmtsmo12600720.joinVoices([smo126007v0]);
const fmtsmo12835720 = new VF.Formatter();
//
// voices and notes for stave 8 20
const smo128357v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128357v0ar = [];
const smo128341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128341.setAttribute('id', 'smo128341');
smo128357v0ar.push(smo128341);
smo128357v0.addTickables(smo128357v0ar)
fmtsmo12835720.joinVoices([smo128357v0]);
const fmtsmo13077920 = new VF.Formatter();
//
// voices and notes for stave 9 20
const smo130779v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130779v0ar = [];
const smo130763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo130763.setAttribute('id', 'smo130763');
smo130779v0ar.push(smo130763);
smo130779v0.addTickables(smo130779v0ar)
fmtsmo13077920.joinVoices([smo130779v0]);
const fmtsmo13315220 = new VF.Formatter();
//
// voices and notes for stave 10 20
const smo133152v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133152v0ar = [];
const smo133136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo133136.setAttribute('id', 'smo133136');
smo133152v0ar.push(smo133136);
smo133152v0.addTickables(smo133152v0ar)
fmtsmo13315220.joinVoices([smo133152v0]);
const fmtsmo13549820 = new VF.Formatter();
//
// voices and notes for stave 11 20
const smo135498v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135498v0ar = [];
const smo135482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo135482.setAttribute('id', 'smo135482');
smo135498v0ar.push(smo135482);
smo135498v0.addTickables(smo135498v0ar)
fmtsmo13549820.joinVoices([smo135498v0]);
const fmtsmo13782620 = new VF.Formatter();
//
// voices and notes for stave 12 20
const smo137826v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137826v0ar = [];
const smo137810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo137810.setAttribute('id', 'smo137810');
smo137826v0ar.push(smo137810);
smo137826v0.addTickables(smo137826v0ar)
fmtsmo13782620.joinVoices([smo137826v0]);
const fmtsmo14016020 = new VF.Formatter();
//
// voices and notes for stave 13 20
const smo140160v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140160v0ar = [];
const smo140144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140144.setAttribute('id', 'smo140144');
smo140160v0ar.push(smo140144);
smo140160v0.addTickables(smo140160v0ar)
fmtsmo14016020.joinVoices([smo140160v0]);
const fmtsmo14258620 = new VF.Formatter();
//
// voices and notes for stave 14 20
const smo142586v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142586v0ar = [];
const smo142570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo142570.setAttribute('id', 'smo142570');
smo142586v0ar.push(smo142570);
smo142586v0.addTickables(smo142586v0ar)
fmtsmo14258620.joinVoices([smo142586v0]);
const fmtsmo14511220 = new VF.Formatter();
//
// voices and notes for stave 15 20
const smo145112v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145112v0ar = [];
const smo145094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo145094.setAttribute('id', 'smo145094');
smo145112v0ar.push(smo145094);
const smo145095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145095.setAttribute('id', 'smo145095');
smo145112v0ar.push(smo145095);
const smo145096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo145096.setAttribute('id', 'smo145096');
smo145112v0ar.push(smo145096);
smo145112v0.addTickables(smo145112v0ar)
fmtsmo14511220.joinVoices([smo145112v0]);
const fmtsmo14757920 = new VF.Formatter();
//
// voices and notes for stave 16 20
const smo147579v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147579v0ar = [];
const smo147558 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147558.setAttribute('id', 'smo147558');
const smo1475580acc = new VF.Accidental('n');
smo147558.addModifier(smo1475580acc, 0);
smo147579v0ar.push(smo147558);
const smo147559 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147559.setAttribute('id', 'smo147559');
smo147579v0ar.push(smo147559);
const smo147560 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo147560.setAttribute('id', 'smo147560');
smo147579v0ar.push(smo147560);
const smo147561 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147561.setAttribute('id', 'smo147561');
smo147579v0ar.push(smo147561);
const smo147562 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147562.setAttribute('id', 'smo147562');
smo147579v0ar.push(smo147562);
const smo147563 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147563.setAttribute('id', 'smo147563');
smo147579v0ar.push(smo147563);
smo147579v0.addTickables(smo147579v0ar)
fmtsmo14757920.joinVoices([smo147579v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
 
// formatting measures in staff group smo149769
fmtsmo10939920.format([smo109399v0,smo111826v0,smo114242v0,smo116616v0,smo118967v0], 166);
const stavesmo109399 = new VF.Stave(1935, 183.2253035909339, 181);
stavesmo109399.setAttribute('id', 'stavesmo109399');
stavesmo109399.setBegBarType(VF.Barline.type.NONE);
stavesmo109399.setEndBarType(2);
stavesmo109399.setContext(context);
stavesmo109399.draw();
smo109399v0.draw(context, stavesmo109399);
const stavesmo111826 = new VF.Stave(1935, 288.2253035909339, 181);
stavesmo111826.setAttribute('id', 'stavesmo111826');
stavesmo111826.setBegBarType(VF.Barline.type.NONE);
stavesmo111826.setEndBarType(2);
stavesmo111826.setContext(context);
stavesmo111826.draw();
smo111826v0.draw(context, stavesmo111826);
const stavesmo114242 = new VF.Stave(1935, 379.2253035909339, 181);
stavesmo114242.setAttribute('id', 'stavesmo114242');
stavesmo114242.setBegBarType(VF.Barline.type.NONE);
stavesmo114242.setEndBarType(2);
stavesmo114242.setContext(context);
stavesmo114242.draw();
smo114242v0.draw(context, stavesmo114242);
const stavesmo116616 = new VF.Stave(1935, 479.2253035909339, 181);
stavesmo116616.setAttribute('id', 'stavesmo116616');
stavesmo116616.setBegBarType(VF.Barline.type.NONE);
stavesmo116616.setEndBarType(2);
stavesmo116616.setContext(context);
stavesmo116616.draw();
smo116616v0.draw(context, stavesmo116616);
const stavesmo118967 = new VF.Stave(1935, 549.2253035909339, 181);
stavesmo118967.setAttribute('id', 'stavesmo118967');
stavesmo118967.setBegBarType(VF.Barline.type.NONE);
stavesmo118967.setEndBarType(2);
stavesmo118967.setContext(context);
stavesmo118967.draw();
smo118967v0.draw(context, stavesmo118967);
// create beam groups and tuplets for format grp smo149771 before formatting
 
// formatting measures in staff group smo149771
fmtsmo12127420.format([smo121274v0,smo123680v0,smo126007v0,smo128357v0], 166);
const stavesmo121274 = new VF.Stave(1935, 630.2253035909339, 181);
stavesmo121274.setAttribute('id', 'stavesmo121274');
stavesmo121274.setBegBarType(VF.Barline.type.NONE);
stavesmo121274.setEndBarType(2);
stavesmo121274.setContext(context);
stavesmo121274.draw();
smo121274v0.draw(context, stavesmo121274);
const stavesmo123680 = new VF.Stave(1935, 700.2253035909339, 181);
stavesmo123680.setAttribute('id', 'stavesmo123680');
stavesmo123680.setBegBarType(VF.Barline.type.NONE);
stavesmo123680.setEndBarType(2);
stavesmo123680.setContext(context);
stavesmo123680.draw();
smo123680v0.draw(context, stavesmo123680);
const stavesmo126007 = new VF.Stave(1935, 761.2253035909339, 181);
stavesmo126007.setAttribute('id', 'stavesmo126007');
stavesmo126007.setBegBarType(VF.Barline.type.NONE);
stavesmo126007.setEndBarType(2);
stavesmo126007.setContext(context);
stavesmo126007.draw();
smo126007v0.draw(context, stavesmo126007);
const stavesmo128357 = new VF.Stave(1935, 831.2253035909339, 181);
stavesmo128357.setAttribute('id', 'stavesmo128357');
stavesmo128357.setBegBarType(VF.Barline.type.NONE);
stavesmo128357.setEndBarType(2);
stavesmo128357.setContext(context);
stavesmo128357.draw();
smo128357v0.draw(context, stavesmo128357);
// create beam groups and tuplets for format grp smo149773 before formatting
 
// formatting measures in staff group smo149773
fmtsmo13077920.format([smo130779v0,smo133152v0,smo135498v0,smo137826v0], 166);
const stavesmo130779 = new VF.Stave(1935, 936.2253035909339, 181);
stavesmo130779.setAttribute('id', 'stavesmo130779');
stavesmo130779.setBegBarType(VF.Barline.type.NONE);
stavesmo130779.setEndBarType(2);
stavesmo130779.setContext(context);
stavesmo130779.draw();
smo130779v0.draw(context, stavesmo130779);
const stavesmo133152 = new VF.Stave(1935, 1023.2253035909339, 181);
stavesmo133152.setAttribute('id', 'stavesmo133152');
stavesmo133152.setBegBarType(VF.Barline.type.NONE);
stavesmo133152.setEndBarType(2);
stavesmo133152.setContext(context);
stavesmo133152.draw();
smo133152v0.draw(context, stavesmo133152);
const stavesmo135498 = new VF.Stave(1935, 1128.225303590934, 181);
stavesmo135498.setAttribute('id', 'stavesmo135498');
stavesmo135498.setBegBarType(VF.Barline.type.NONE);
stavesmo135498.setEndBarType(2);
stavesmo135498.setContext(context);
stavesmo135498.draw();
smo135498v0.draw(context, stavesmo135498);
const stavesmo137826 = new VF.Stave(1935, 1213.225303590934, 181);
stavesmo137826.setAttribute('id', 'stavesmo137826');
stavesmo137826.setBegBarType(VF.Barline.type.NONE);
stavesmo137826.setEndBarType(2);
stavesmo137826.setContext(context);
stavesmo137826.draw();
smo137826v0.draw(context, stavesmo137826);
// create beam groups and tuplets for format grp smo142224 before formatting
 
// formatting measures in staff group smo142224
fmtsmo14016020.format([smo140160v0], 166);
const stavesmo140160 = new VF.Stave(1935, 1290.225303590934, 181);
stavesmo140160.setAttribute('id', 'stavesmo140160');
stavesmo140160.setBegBarType(VF.Barline.type.NONE);
stavesmo140160.setEndBarType(2);
stavesmo140160.setContext(context);
stavesmo140160.draw();
smo140160v0.draw(context, stavesmo140160);
// create beam groups and tuplets for format grp smo144692 before formatting
 
// formatting measures in staff group smo144692
fmtsmo14258620.format([smo142586v0], 166);
const stavesmo142586 = new VF.Stave(1935, 1373.225303590934, 181);
stavesmo142586.setAttribute('id', 'stavesmo142586');
stavesmo142586.setBegBarType(VF.Barline.type.NONE);
stavesmo142586.setEndBarType(2);
stavesmo142586.setContext(context);
stavesmo142586.draw();
smo142586v0.draw(context, stavesmo142586);
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14511220.format([smo145112v0], 166);
const stavesmo145112 = new VF.Stave(1935, 1478.225303590934, 181);
stavesmo145112.setAttribute('id', 'stavesmo145112');
stavesmo145112.setBegBarType(VF.Barline.type.NONE);
stavesmo145112.setEndBarType(2);
stavesmo145112.setContext(context);
stavesmo145112.draw();
smo145112v0.draw(context, stavesmo145112);
// create beam groups and tuplets for format grp smo149763 before formatting
const dirsmo216253 = smo147558.getStemDirection();
smo147558.setStemDirection(dirsmo216253);
smo147559.setStemDirection(dirsmo216253);
const smo216253 = new VF.Beam([smo147558,smo147559]);
 
// formatting measures in staff group smo149763
fmtsmo14757920.format([smo147579v0], 166);
const stavesmo147579 = new VF.Stave(1935, 1555.225303590934, 181);
stavesmo147579.setAttribute('id', 'stavesmo147579');
stavesmo147579.setBegBarType(VF.Barline.type.NONE);
stavesmo147579.setEndBarType(2);
stavesmo147579.setContext(context);
stavesmo147579.draw();
smo147579v0.draw(context, stavesmo147579);
smo216253.setContext(context);
smo216253.draw();
const fmtsmo10942121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo109421v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo109421v0ar = [];
const smo109400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo109400.setAttribute('id', 'smo109400');
smo109400.addModifier(new VF.Dot(), 0);
smo109421v0ar.push(smo109400);
const smo109402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo109402.setAttribute('id', 'smo109402');
smo109421v0ar.push(smo109402);
const smo109403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo109403.setAttribute('id', 'smo109403');
smo109421v0ar.push(smo109403);
const smo109404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo109404.setAttribute('id', 'smo109404');
smo109421v0ar.push(smo109404);
smo109421v0.addTickables(smo109421v0ar)
fmtsmo10942121.joinVoices([smo109421v0]);
const fmtsmo11184821 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo111848v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111848v0ar = [];
const smo111827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo111827.setAttribute('id', 'smo111827');
smo111827.addModifier(new VF.Dot(), 0);
smo111848v0ar.push(smo111827);
const smo111829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111829.setAttribute('id', 'smo111829');
smo111848v0ar.push(smo111829);
const smo111830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111830.setAttribute('id', 'smo111830');
smo111848v0ar.push(smo111830);
const smo111831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo111831.setAttribute('id', 'smo111831');
smo111848v0ar.push(smo111831);
smo111848v0.addTickables(smo111848v0ar)
fmtsmo11184821.joinVoices([smo111848v0]);
const fmtsmo11426421 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo114264v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114264v0ar = [];
const smo114243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo114243.setAttribute('id', 'smo114243');
smo114243.addModifier(new VF.Dot(), 0);
smo114264v0ar.push(smo114243);
const smo114245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo114245.setAttribute('id', 'smo114245');
smo114264v0ar.push(smo114245);
const smo114246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo114246.setAttribute('id', 'smo114246');
smo114264v0ar.push(smo114246);
const smo114247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo114247.setAttribute('id', 'smo114247');
smo114264v0ar.push(smo114247);
smo114264v0.addTickables(smo114264v0ar)
fmtsmo11426421.joinVoices([smo114264v0]);
const fmtsmo11663821 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo116638v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116638v0ar = [];
const smo116617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo116617.setAttribute('id', 'smo116617');
smo116617.addModifier(new VF.Dot(), 0);
smo116638v0ar.push(smo116617);
const smo116619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo116619.setAttribute('id', 'smo116619');
smo116638v0ar.push(smo116619);
const smo116620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo116620.setAttribute('id', 'smo116620');
smo116638v0ar.push(smo116620);
const smo116621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo116621.setAttribute('id', 'smo116621');
smo116638v0ar.push(smo116621);
smo116638v0.addTickables(smo116638v0ar)
fmtsmo11663821.joinVoices([smo116638v0]);
const fmtsmo11898521 = new VF.Formatter();
//
// voices and notes for stave 4 21
const smo118985v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118985v0ar = [];
const smo118968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo118968.setAttribute('id', 'smo118968');
smo118985v0ar.push(smo118968);
smo118985v0.addTickables(smo118985v0ar)
fmtsmo11898521.joinVoices([smo118985v0]);
const fmtsmo12129421 = new VF.Formatter();
//
// voices and notes for stave 5 21
const smo121294v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121294v0ar = [];
const smo121275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121275.setAttribute('id', 'smo121275');
smo121294v0ar.push(smo121275);
const smo121276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121276.setAttribute('id', 'smo121276');
smo121294v0ar.push(smo121276);
const smo121277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo121277.setAttribute('id', 'smo121277');
smo121294v0ar.push(smo121277);
smo121294v0.addTickables(smo121294v0ar)
fmtsmo12129421.joinVoices([smo121294v0]);
const fmtsmo12370021 = new VF.Formatter();
//
// voices and notes for stave 6 21
const smo123700v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123700v0ar = [];
const smo123681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123681.setAttribute('id', 'smo123681');
smo123700v0ar.push(smo123681);
const smo123682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123682.setAttribute('id', 'smo123682');
smo123700v0ar.push(smo123682);
const smo123683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123683.setAttribute('id', 'smo123683');
smo123700v0ar.push(smo123683);
smo123700v0.addTickables(smo123700v0ar)
fmtsmo12370021.joinVoices([smo123700v0]);
const fmtsmo12602721 = new VF.Formatter();
//
// voices and notes for stave 7 21
const smo126027v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126027v0ar = [];
const smo126008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo126008.setAttribute('id', 'smo126008');
smo126027v0ar.push(smo126008);
const smo126009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo126009.setAttribute('id', 'smo126009');
smo126027v0ar.push(smo126009);
const smo126010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo126010.setAttribute('id', 'smo126010');
smo126027v0ar.push(smo126010);
smo126027v0.addTickables(smo126027v0ar)
fmtsmo12602721.joinVoices([smo126027v0]);
const fmtsmo12837721 = new VF.Formatter();
//
// voices and notes for stave 8 21
const smo128377v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128377v0ar = [];
const smo128358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128358.setAttribute('id', 'smo128358');
smo128377v0ar.push(smo128358);
const smo128359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128359.setAttribute('id', 'smo128359');
smo128377v0ar.push(smo128359);
const smo128360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128360.setAttribute('id', 'smo128360');
smo128377v0ar.push(smo128360);
smo128377v0.addTickables(smo128377v0ar)
fmtsmo12837721.joinVoices([smo128377v0]);
const fmtsmo13079721 = new VF.Formatter();
//
// voices and notes for stave 9 21
const smo130797v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130797v0ar = [];
const smo130780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo130780.setAttribute('id', 'smo130780');
smo130797v0ar.push(smo130780);
smo130797v0.addTickables(smo130797v0ar)
fmtsmo13079721.joinVoices([smo130797v0]);
const fmtsmo13317021 = new VF.Formatter();
//
// voices and notes for stave 10 21
const smo133170v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133170v0ar = [];
const smo133153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo133153.setAttribute('id', 'smo133153');
smo133170v0ar.push(smo133153);
smo133170v0.addTickables(smo133170v0ar)
fmtsmo13317021.joinVoices([smo133170v0]);
const fmtsmo13551621 = new VF.Formatter();
//
// voices and notes for stave 11 21
const smo135516v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135516v0ar = [];
const smo135499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo135499.setAttribute('id', 'smo135499');
smo135516v0ar.push(smo135499);
smo135516v0.addTickables(smo135516v0ar)
fmtsmo13551621.joinVoices([smo135516v0]);
const fmtsmo13784421 = new VF.Formatter();
//
// voices and notes for stave 12 21
const smo137844v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137844v0ar = [];
const smo137827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo137827.setAttribute('id', 'smo137827');
smo137844v0ar.push(smo137827);
smo137844v0.addTickables(smo137844v0ar)
fmtsmo13784421.joinVoices([smo137844v0]);
const fmtsmo14018121 = new VF.Formatter();
//
// voices and notes for stave 13 21
const smo140181v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140181v0ar = [];
const smo140161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo140161.setAttribute('id', 'smo140161');
smo140181v0ar.push(smo140161);
const smo140162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo140162.setAttribute('id', 'smo140162');
smo140181v0ar.push(smo140162);
const smo140163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo140163.setAttribute('id', 'smo140163');
smo140181v0ar.push(smo140163);
const smo140164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo140164.setAttribute('id', 'smo140164');
smo140181v0ar.push(smo140164);
smo140181v0.addTickables(smo140181v0ar)
fmtsmo14018121.joinVoices([smo140181v0]);
const fmtsmo14260921 = new VF.Formatter();
//
// voices and notes for stave 14 21
const smo142609v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142609v0ar = [];
const smo142587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo142587.setAttribute('id', 'smo142587');
smo142609v0ar.push(smo142587);
const smo142588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo142588.setAttribute('id', 'smo142588');
smo142609v0ar.push(smo142588);
const smo142589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo142589.setAttribute('id', 'smo142589');
smo142609v0ar.push(smo142589);
const smo142590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo142590.setAttribute('id', 'smo142590');
smo142609v0ar.push(smo142590);
const smo142591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo142591.setAttribute('id', 'smo142591');
smo142609v0ar.push(smo142591);
const smo142592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo142592.setAttribute('id', 'smo142592');
smo142609v0ar.push(smo142592);
smo142609v0.addTickables(smo142609v0ar)
fmtsmo14260921.joinVoices([smo142609v0]);
const fmtsmo14513221 = new VF.Formatter();
//
// voices and notes for stave 15 21
const smo145132v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145132v0ar = [];
const smo145113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo145113.setAttribute('id', 'smo145113');
smo145132v0ar.push(smo145113);
const smo145114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo145114.setAttribute('id', 'smo145114');
smo145132v0ar.push(smo145114);
const smo145115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo145115.setAttribute('id', 'smo145115');
smo145132v0ar.push(smo145115);
smo145132v0.addTickables(smo145132v0ar)
fmtsmo14513221.joinVoices([smo145132v0]);
const fmtsmo14760021 = new VF.Formatter();
//
// voices and notes for stave 16 21
const smo147600v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147600v0ar = [];
const smo147580 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147580.setAttribute('id', 'smo147580');
const smo1475800acc = new VF.Accidental('n');
smo147580.addModifier(smo1475800acc, 0);
smo147600v0ar.push(smo147580);
const smo147581 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147581.setAttribute('id', 'smo147581');
smo147600v0ar.push(smo147581);
const smo147582 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147582.setAttribute('id', 'smo147582');
smo147600v0ar.push(smo147582);
const smo147583 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo147583.setAttribute('id', 'smo147583');
smo147600v0ar.push(smo147583);
smo147600v0.addTickables(smo147600v0ar)
fmtsmo14760021.joinVoices([smo147600v0]);
// create beam groups and tuplets for format grp smo149769 before formatting
 
// formatting measures in staff group smo149769
fmtsmo10942121.format([smo109421v0,smo111848v0,smo114264v0,smo116638v0,smo118985v0], 157);
const stavesmo109421 = new VF.Stave(2116, 183.2253035909339, 180);
stavesmo109421.setAttribute('id', 'stavesmo109421');
stavesmo109421.setBegBarType(4);
stavesmo109421.setSection('B', 0);
stavesmo109421.setContext(context);
stavesmo109421.draw();
smo109421v0.draw(context, stavesmo109421);
const stavesmo111848 = new VF.Stave(2116, 288.2253035909339, 180);
stavesmo111848.setAttribute('id', 'stavesmo111848');
stavesmo111848.setBegBarType(4);
stavesmo111848.setContext(context);
stavesmo111848.draw();
smo111848v0.draw(context, stavesmo111848);
const stavesmo114264 = new VF.Stave(2116, 379.2253035909339, 180);
stavesmo114264.setAttribute('id', 'stavesmo114264');
stavesmo114264.setBegBarType(4);
stavesmo114264.setContext(context);
stavesmo114264.draw();
smo114264v0.draw(context, stavesmo114264);
const stavesmo116638 = new VF.Stave(2116, 479.2253035909339, 180);
stavesmo116638.setAttribute('id', 'stavesmo116638');
stavesmo116638.setBegBarType(4);
stavesmo116638.setContext(context);
stavesmo116638.draw();
smo116638v0.draw(context, stavesmo116638);
const stavesmo118985 = new VF.Stave(2116, 549.2253035909339, 180);
stavesmo118985.setAttribute('id', 'stavesmo118985');
stavesmo118985.setBegBarType(4);
stavesmo118985.setContext(context);
stavesmo118985.draw();
smo118985v0.draw(context, stavesmo118985);
// create beam groups and tuplets for format grp smo149771 before formatting
 
// formatting measures in staff group smo149771
fmtsmo12129421.format([smo121294v0,smo123700v0,smo126027v0,smo128377v0], 157);
const stavesmo121294 = new VF.Stave(2116, 630.2253035909339, 180);
stavesmo121294.setAttribute('id', 'stavesmo121294');
stavesmo121294.setBegBarType(4);
stavesmo121294.setContext(context);
stavesmo121294.draw();
smo121294v0.draw(context, stavesmo121294);
const stavesmo123700 = new VF.Stave(2116, 700.2253035909339, 180);
stavesmo123700.setAttribute('id', 'stavesmo123700');
stavesmo123700.setBegBarType(4);
stavesmo123700.setContext(context);
stavesmo123700.draw();
smo123700v0.draw(context, stavesmo123700);
const stavesmo126027 = new VF.Stave(2116, 761.2253035909339, 180);
stavesmo126027.setAttribute('id', 'stavesmo126027');
stavesmo126027.setBegBarType(4);
stavesmo126027.setContext(context);
stavesmo126027.draw();
smo126027v0.draw(context, stavesmo126027);
const stavesmo128377 = new VF.Stave(2116, 831.2253035909339, 180);
stavesmo128377.setAttribute('id', 'stavesmo128377');
stavesmo128377.setBegBarType(4);
stavesmo128377.setContext(context);
stavesmo128377.draw();
smo128377v0.draw(context, stavesmo128377);
// create beam groups and tuplets for format grp smo149773 before formatting
 
// formatting measures in staff group smo149773
fmtsmo13079721.format([smo130797v0,smo133170v0,smo135516v0,smo137844v0], 157);
const stavesmo130797 = new VF.Stave(2116, 936.2253035909339, 180);
stavesmo130797.setAttribute('id', 'stavesmo130797');
stavesmo130797.setBegBarType(4);
stavesmo130797.setContext(context);
stavesmo130797.draw();
smo130797v0.draw(context, stavesmo130797);
const stavesmo133170 = new VF.Stave(2116, 1023.2253035909339, 180);
stavesmo133170.setAttribute('id', 'stavesmo133170');
stavesmo133170.setBegBarType(4);
stavesmo133170.setContext(context);
stavesmo133170.draw();
smo133170v0.draw(context, stavesmo133170);
const stavesmo135516 = new VF.Stave(2116, 1128.225303590934, 180);
stavesmo135516.setAttribute('id', 'stavesmo135516');
stavesmo135516.setBegBarType(4);
stavesmo135516.setContext(context);
stavesmo135516.draw();
smo135516v0.draw(context, stavesmo135516);
const stavesmo137844 = new VF.Stave(2116, 1213.225303590934, 180);
stavesmo137844.setAttribute('id', 'stavesmo137844');
stavesmo137844.setBegBarType(4);
stavesmo137844.setContext(context);
stavesmo137844.draw();
smo137844v0.draw(context, stavesmo137844);
// create beam groups and tuplets for format grp smo142224 before formatting
 
// formatting measures in staff group smo142224
fmtsmo14018121.format([smo140181v0], 157);
const stavesmo140181 = new VF.Stave(2116, 1290.225303590934, 180);
stavesmo140181.setAttribute('id', 'stavesmo140181');
stavesmo140181.setBegBarType(4);
stavesmo140181.setContext(context);
stavesmo140181.draw();
smo140181v0.draw(context, stavesmo140181);
// create beam groups and tuplets for format grp smo144692 before formatting
const dirsmo216269 = smo142587.getStemDirection();
smo142587.setStemDirection(dirsmo216269);
smo142588.setStemDirection(dirsmo216269);
smo142589.setStemDirection(dirsmo216269);
smo142590.setStemDirection(dirsmo216269);
const smo216269 = new VF.Beam([smo142587,smo142588,smo142589,smo142590]);
 
// formatting measures in staff group smo144692
fmtsmo14260921.format([smo142609v0], 157);
const stavesmo142609 = new VF.Stave(2116, 1373.225303590934, 180);
stavesmo142609.setAttribute('id', 'stavesmo142609');
stavesmo142609.setBegBarType(4);
stavesmo142609.setContext(context);
stavesmo142609.draw();
smo142609v0.draw(context, stavesmo142609);
smo216269.setContext(context);
smo216269.draw();
// create beam groups and tuplets for format grp smo147050 before formatting
 
// formatting measures in staff group smo147050
fmtsmo14513221.format([smo145132v0], 157);
const stavesmo145132 = new VF.Stave(2116, 1478.225303590934, 180);
stavesmo145132.setAttribute('id', 'stavesmo145132');
stavesmo145132.setBegBarType(4);
stavesmo145132.setContext(context);
stavesmo145132.draw();
smo145132v0.draw(context, stavesmo145132);
// create beam groups and tuplets for format grp smo149763 before formatting
 
// formatting measures in staff group smo149763
fmtsmo14760021.format([smo147600v0], 157);
const stavesmo147600 = new VF.Stave(2116, 1555.225303590934, 180);
stavesmo147600.setAttribute('id', 'stavesmo147600');
stavesmo147600.setBegBarType(4);
stavesmo147600.setContext(context);
stavesmo147600.draw();
smo147600v0.draw(context, stavesmo147600);
const rightsmo149763stavesmo10942116 = new VF.StaveConnector(stavesmo109421, stavesmo118985).setType(0);
rightsmo149763stavesmo10942116.setContext(context).draw();
const rightsmo149763stavesmo12129416 = new VF.StaveConnector(stavesmo121294, stavesmo128377).setType(0);
rightsmo149763stavesmo12129416.setContext(context).draw();
const rightsmo149763stavesmo13079716 = new VF.StaveConnector(stavesmo130797, stavesmo137844).setType(0);
rightsmo149763stavesmo13079716.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo224433 = new VF.StaveHairpin({ first_note: smo109332, last_note: smo109332,
       firstNote: smo109332, lastNote: smo109332 });
smo224433.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224433.setContext(context).setPosition(4).draw();
// modifier from 0-15-0-6 to 0-15-0-9
const smo224434 = new VF.Curve(smo109290, smo109293, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo224434.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo224435 = new VF.StaveTie({ first_note: smo109332, last_note: smo109349, 
          firstNote: smo109332, lastNote: smo109349, first_indices: [0], last_indices: [0]});
smo224435.setContext(context).draw();
// modifier from 0-21-0-1 to 0-21-0-2
const smo224436 = new VF.StaveTie({ first_note: smo109402, last_note: smo109403, 
          firstNote: smo109402, lastNote: smo109403, first_indices: [0], last_indices: [0]});
smo224436.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo224437 = new VF.StaveHairpin({ first_note: smo111759, last_note: smo111759,
       firstNote: smo111759, lastNote: smo111759 });
smo224437.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224437.setContext(context).setPosition(4).draw();
// modifier from 1-15-0-6 to 1-15-0-9
const smo224438 = new VF.Curve(smo111717, smo111720, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo224438.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo224439 = new VF.StaveTie({ first_note: smo111759, last_note: smo111776, 
          firstNote: smo111759, lastNote: smo111776, first_indices: [0], last_indices: [0]});
smo224439.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo224440 = new VF.StaveTie({ first_note: smo111829, last_note: smo111830, 
          firstNote: smo111829, lastNote: smo111830, first_indices: [0], last_indices: [0]});
smo224440.setContext(context).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo224441 = new VF.StaveHairpin({ first_note: smo114175, last_note: smo114175,
       firstNote: smo114175, lastNote: smo114175 });
smo224441.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224441.setContext(context).setPosition(4).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo224442 = new VF.StaveTie({ first_note: smo114175, last_note: smo114192, 
          firstNote: smo114175, lastNote: smo114192, first_indices: [0], last_indices: [0]});
smo224442.setContext(context).draw();
// modifier from 2-21-0-1 to 2-21-0-2
const smo224443 = new VF.StaveTie({ first_note: smo114245, last_note: smo114246, 
          firstNote: smo114245, lastNote: smo114246, first_indices: [0], last_indices: [0]});
smo224443.setContext(context).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo224444 = new VF.StaveHairpin({ first_note: smo116549, last_note: smo116549,
       firstNote: smo116549, lastNote: smo116549 });
smo224444.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224444.setContext(context).setPosition(4).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo224445 = new VF.StaveTie({ first_note: smo116549, last_note: smo116566, 
          firstNote: smo116549, lastNote: smo116566, first_indices: [0], last_indices: [0]});
smo224445.setContext(context).draw();
// modifier from 3-21-0-1 to 3-21-0-2
const smo224446 = new VF.StaveTie({ first_note: smo116619, last_note: smo116620, 
          firstNote: smo116619, lastNote: smo116620, first_indices: [0], last_indices: [0]});
smo224446.setContext(context).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo224447 = new VF.StaveHairpin({ first_note: smo118900, last_note: smo118900,
       firstNote: smo118900, lastNote: smo118900 });
smo224447.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224447.setContext(context).setPosition(4).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo224448 = new VF.StaveTie({ first_note: smo118900, last_note: smo118917, 
          firstNote: smo118900, lastNote: smo118917, first_indices: [0], last_indices: [0]});
smo224448.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo224449 = new VF.StaveHairpin({ first_note: smo121207, last_note: smo121207,
       firstNote: smo121207, lastNote: smo121207 });
smo224449.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224449.setContext(context).setPosition(4).draw();
// modifier from 5-14-0-2 to 5-14-0-3
const smo224450 = new VF.StaveTie({ first_note: smo121142, last_note: smo121143, 
          firstNote: smo121142, lastNote: smo121143, first_indices: [0], last_indices: [0]});
smo224450.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo224451 = new VF.StaveTie({ first_note: smo121207, last_note: smo121224, 
          firstNote: smo121207, lastNote: smo121224, first_indices: [0], last_indices: [0]});
smo224451.setContext(context).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo224452 = new VF.StaveHairpin({ first_note: smo123613, last_note: smo123613,
       firstNote: smo123613, lastNote: smo123613 });
smo224452.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224452.setContext(context).setPosition(4).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo224453 = new VF.StaveTie({ first_note: smo123613, last_note: smo123630, 
          firstNote: smo123613, lastNote: smo123630, first_indices: [0], last_indices: [0]});
smo224453.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo224454 = new VF.StaveHairpin({ first_note: smo130712, last_note: smo130712,
       firstNote: smo130712, lastNote: smo130712 });
smo224454.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224454.setContext(context).setPosition(4).draw();
// modifier from 9-14-0-2 to 9-14-0-3
const smo224455 = new VF.StaveTie({ first_note: smo130647, last_note: smo130648, 
          firstNote: smo130647, lastNote: smo130648, first_indices: [0], last_indices: [0]});
smo224455.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo224456 = new VF.StaveTie({ first_note: smo130712, last_note: smo130729, 
          firstNote: smo130712, lastNote: smo130729, first_indices: [0], last_indices: [0]});
smo224456.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo224457 = new VF.StaveHairpin({ first_note: smo133085, last_note: smo133085,
       firstNote: smo133085, lastNote: smo133085 });
smo224457.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224457.setContext(context).setPosition(4).draw();
// modifier from 10-14-0-2 to 10-14-0-3
const smo224458 = new VF.StaveTie({ first_note: smo133020, last_note: smo133021, 
          firstNote: smo133020, lastNote: smo133021, first_indices: [0], last_indices: [0]});
smo224458.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo224459 = new VF.StaveTie({ first_note: smo133085, last_note: smo133102, 
          firstNote: smo133085, lastNote: smo133102, first_indices: [0], last_indices: [0]});
smo224459.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo224460 = new VF.StaveHairpin({ first_note: smo135431, last_note: smo135431,
       firstNote: smo135431, lastNote: smo135431 });
smo224460.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224460.setContext(context).setPosition(4).draw();
// modifier from 11-14-0-2 to 11-14-0-3
const smo224461 = new VF.StaveTie({ first_note: smo135366, last_note: smo135367, 
          firstNote: smo135366, lastNote: smo135367, first_indices: [0], last_indices: [0]});
smo224461.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo224462 = new VF.StaveTie({ first_note: smo135431, last_note: smo135448, 
          firstNote: smo135431, lastNote: smo135448, first_indices: [0], last_indices: [0]});
smo224462.setContext(context).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo224463 = new VF.StaveHairpin({ first_note: smo137759, last_note: smo137759,
       firstNote: smo137759, lastNote: smo137759 });
smo224463.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo224463.setContext(context).setPosition(4).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo224464 = new VF.StaveTie({ first_note: smo137759, last_note: smo137776, 
          firstNote: smo137759, lastNote: smo137776, first_indices: [0], last_indices: [0]});
smo224464.setContext(context).draw();
// modifier from 13-14-0-2 to 13-14-0-3
const smo224465 = new VF.StaveTie({ first_note: smo140028, last_note: smo140029, 
          firstNote: smo140028, lastNote: smo140029, first_indices: [0], last_indices: [0]});
smo224465.setContext(context).draw();
// modifier from 14-21-0-3 to 14-21-0-4
const smo224466 = new VF.StaveTie({ first_note: smo142590, last_note: smo142591, 
          firstNote: smo142590, lastNote: smo142591, first_indices: [0], last_indices: [0]});
smo224466.setContext(context).draw();
}
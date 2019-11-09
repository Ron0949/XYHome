if (typeof spider === 'undefined') { var spider = {}; }
spider.windowTheme = "flat";
spider.gadgetTheme = "flat";
function s_character() {
this._c=0;
this.copy = function(dest) { var k;
dest._c=this._c;
};
}
var _S5="";
var _S15=",";
var _S2="MTrk";
var _S3="Manson Screen Configurator";
var _S9="Octave ";
var _S12="Four_Sliders.mid";
var _S7="C C#D EbE F F#G G#A BbB ";
var _S8="Note ";
var _S27="Data\\Four Sliders.png";
var _S20="Select the Controller Number then click the target slider.";
var _S28="Data\\Screen Quadrants.png";
var _S13="Four_Buttons.mid";
var _S32="Data\\LED Off.png";
var _S18="Select the Controller Number then click the target slider or button on the 'Screen'";
var _S31="Data\\Green LED.png";
var _S1="MThd";
var _S19="Select the Note and Octave then click the target button.";
var _S29="Data\\Screen 1 - Copy 2.png";
var _S14="3B3S.mid";
var _S21="Click to program guitar and export MIDI file to your 'Download' folder";
var _S4="MIDI_File_Template.mid";
var _S26="Data\\Ableton.png";
var _S11="Multi-Function.mid";
var _S6="Slider MIDI Controller Number = ";
var _S16="http:///winterwood.atwebpages.com/Program?";
var _S23="  Select MIDI CC Number ";
var _S10="XY_Screen.mid";
var _S25="Data\\XY Kaoss.png";
var _S17="Manson Guitar Works - Multi-Zone Screen Configurator";
var _S24="audio/midi";
var _S22=" Hold Switch Controller Number ";
var _S30="Data\\Knob turned 4.png";
var a_MDhd=new spider_SysArray();
var a_Link=new spider_SysArray();
var t_MIDI;
var v_ctrlnum=0;
var v_slidernum=0;
var v_notesxpos=0;
var v_octavessliderxpos=0;
var v_octnum=0;
var v_slider4cn=0;
var v_textboxy=0;
var v_buttonx=0;
var v_busyflag=0;
var v_oboxlen=0;
var v_ctrlssliderxpos=0;
var v_slidery=0;
var v_notesypos=0;
var v_slider3cn=0;
var v_notessliderxpos=0;
var v_octavessliderypos=0;
var v_slider2cn=0;
var v_url$="";
var v_ctrlssliderypos=0;
var v_notessliderypos=0;
var v_slider1cn=0;
var v_yoffset=0;
var v_config=0;
var v_notenum=0;
var v_nboxlen=0;
var v_octavesxpos=0;
var v_ctrlsxpos=0;
var v_xgap=0;
var v_octavesypos=0;
var v_ctrlsypos=0;
if("undefined"==typeof Spider)var Spider={};spider.systembase={localFiles:null,getLocalFile:function(a){for(var b=0;b<this.localFiles.length;b++)if(1==spider.systembase.localFilesType){if(this.localFiles[b][google.picker.Document.ID]===a)return this.localFiles[b]}else if(this.localFiles[b].name===a)return this.localFiles[b];return null}};function spider_BankerRound(a){return 0>a?Math.ceil(a-0.5):Math.floor(a+0.5)}function spider_CastByte(a){a&=255;return 127<a?-(256-a):a}
function spider_CastCharacter(a){return a&65535}function spider_CastAscii(a){return a&255}function spider_CastUnicode(a){return a&65535}function spider_CastWord(a){a&=65535;return 32767<a?-(65536-a):a}function spider_CastLong(a){a&=4294967295;return 2147483647<a?-(4294967296-a):a}function spider_CastQuad(a){return 0<=a?Math.floor(a):Math.ceil(a)}function spider_XOr(a,b){return(a||b)&&!(a&&b)}function spider_AssignFixedString(a,b){return b<a.length?a.substring(0,b):a}
function spider_SysArray(){this.structure=null;this.nbDimensions=0;this.type=this.dimensions=null}function spider_SysList(){this.type=this.current=this.last=this.first=null;this.index=0;this.isIndexInvalid=!1;this.field="";this.nbElements=0;this.isNative=!1}function spider_SysMap(){this.map={};this.current=null;this.currentIndex=-1;this.type=this.keys=this.currentKey=null;this.isNative=!1};

if("undefined"===typeof spider)var spider={};
spider.object=function(c){return{map:{},dynamicCounter:1E5,Allocate:function(a){var b={};-1==a?(b.id=this.dynamicCounter,b.resultId=b.id,this.dynamicCounter++):(c&&c(a),b.id=a,b.resultId=b);return this.map[b.id]=b},Get:function(a){return this.map.hasOwnProperty(a)?this.map[a]:null},Remove:function(a){delete this.map[a]},EnumerateAll:function(a){for(var b in this.map)a(b)},CleanAll:function(){for(var a in this.map)c&&c(a)},Is:function(a){return this.map.hasOwnProperty(a)?1:0}}};

if("undefined"===typeof spider)var spider={};function spider_PeekB(a,b){return a.view8[b]}function spider_PeekA(a,b){return a.viewu8[b]}function spider_PeekW(a,b){return a.view.getInt16(b,!0)}function spider_PeekU(a,b){return a.view.getUint16(b,!0)}function spider_PeekC(a,b){return a.view.getUint16(b,!0)}function spider_PeekL(a,b){return a.view.getInt32(b,!0)}function spider_PeekF(a,b){return a.view.getFloat32(b,!0)}function spider_PeekD(a,b){return a.view.getFloat64(b,!0)}var spider_Memory_CharacterReadOffset;
function spider_Memory_ReadUTF8Character(a,b){var c;c=a[b];return 0===(c&128)?(spider_Memory_CharacterReadOffset=1,c):192==(c&224)?(spider_Memory_CharacterReadOffset=2,(c&31)<<6|a[b+1]&63):224==(c&240)?(spider_Memory_CharacterReadOffset=3,(c&15)<<12|(a[b+1]&63)<<6|(a[b+2]&63)<<0):0}
function spider_Memory_ReadCharacter(a,b,c){switch(c){case 24:return spider_Memory_CharacterReadOffset=1,a[b];case 25:return spider_Memory_CharacterReadOffset=2,a[b]<<8|a[b+1];default:return spider_Memory_ReadUTF8Character(a,b)}}
function spider_PeekS(a,b,c,d){"undefined"===typeof d&&(d=2);"undefined"===typeof c&&(c=-1);d&=31;var e,f="";0===d&&(d=25);if(-1<=c)for(;c;){e=spider_Memory_ReadCharacter(a.viewu8,b,d);if(0===e)break;f+=String.fromCharCode(e);b+=spider_Memory_CharacterReadOffset;c--}return f}function spider_PokeB(a,b,c){a.view8[b]=c}function spider_PokeA(a,b,c){a.viewu8[b]=c}function spider_PokeW(a,b,c){a.view.setInt16(b,c,!0)}function spider_PokeU(a,b,c){a.view.setUint16(b,c,!0)}
function spider_PokeC(a,b,c){a.view.setUint16(b,c,!0)}function spider_PokeL(a,b,c){a.view.setInt32(b,c,!0)}function spider_PokeF(a,b,c){a.view.setFloat32(b,c,!0)}function spider_PokeD(a,b,c){a.view.setFloat64(b,c,!0)}function spider_Memory_WriteUTF8Character(a,b,c){return 128>c?(a[b]=c,1):2048>c?(a[b]=192|c>>6,a[b+1]=128|c&63,2):55296>c||57344<=c?(a[b]=224|c>>12,a[b+1]=128|c>>6&63,a[b+2]=128|c&63,3):0}
function spider_Memory_WriteCharacter(a,b,c,d){switch(d){case 24:return a[b]=c,1;case 25:return a[b]=c>>8,a[b+1]=c,2;default:return spider_Memory_WriteUTF8Character(a,b,c)}}function spider_PokeS(a,b,c,d,e){"undefined"===typeof e&&(e=2);"undefined"===typeof d&&(d=-1);var f=c.length;if(-1==d||d>f)d=f;var f=b,g=e&31;0===g&&(g=25);for(var h=0;h<d;h++)b+=spider_Memory_WriteCharacter(a.viewu8,b,c.charCodeAt(h),g);0===(e&256)&&(a.viewu8[b]=0,25==g&&(a.viewu8[b+1]=0));return b-f}
function spider_AllocateMemory(a,b){var c=new ArrayBuffer(a);c.view8=new Int8Array(c);c.viewu8=new Uint8Array(c);c.view=new DataView(c);return c}function spider_ReAllocateMemory(a,b,c){if(a){if(b==a.byteLength)return a;if(b<a.byteLength)return a.slice(0,b);b=spider_AllocateMemory(b,c);b.view8.set(a.view8,0,a.byteLength);return b}return spider_ReAllocateMemory(b,c)}function spider_FreeMemory(a){}
function spider_CompareMemory(a,b,c,d,e){a=new Int8Array(a,b,e);c=new Int8Array(c,d,e);for(d=0;d!=e;d++)if(a[d]!=c[d])return 0;return 1}function spider_MemorySize(a){return a.byteLength}function spider_AllocateStructure(a,b){return new a}function spider_FreeStructure(a){}function spider_ClearStructure(a,b){$.extend(!0,a,new b)}function spider_CopyStructure(a,b,c){$.extend(!0,b,a)};

if("undefined"==typeof Spider)var Spider={};function spider_Asc(a){return""===a?0:a.charCodeAt(0)}function spider_Bin(a,b){"undefined"===typeof b&&(b=13);switch(b){case 1:case 24:a&=255;break;case 3:case 25:a&=65535;break;case 5:return spider_Right(a.toString(2),32)}return a.toString(2)}function spider_Chr(a){return String.fromCharCode(a)}function spider_LCase(a){return a.toLowerCase()}function spider_UCase(a){return a.toUpperCase()}
function spider_CountString(a,b){if(0>=b.length)return a.length+1;for(var c=0,d=0,e=b.length;;)if(d=a.indexOf(b,d),0<=d)c++,d+=e;else break;return c}function spider_FindString(a,b,c,d){"undefined"===typeof c&&(c=1);"undefined"===typeof d&&(d=0);return a&&b&&""!==a&&""!==b?0===d?a.indexOf(b,c-1)+1:a.toUpperCase().indexOf(b.toUpperCase(),c-1)+1:0}function spider_InsertString(a,b,c){1>c?c=1:c>a.length+1&&(c=a.length+1);return a.substr(0,c-1)+b+a.substr(c-1)}
function spider_Space(a){if(0>=a)return"";for(var b=a/2,c=" ";c.length<=b;)c+=c;return c+c.substring(0,a-c.length)}function spider_Str(a){return""+a}function spider_StrD(a,b){var c;c="undefined"===typeof b?a.toString():a.toFixed(b);"Infinity"==c&&(c="+Infinity");return c}function spider_StrF(a,b){return spider_StrD(a,b)}function spider_StrU(a,b){"undefined"===typeof b&&(b=13);switch(b){case 1:case 24:a&=255;break;case 3:case 25:a&=65535}return a.toString(10)}
function spider_Val(a){for(var b=0,c=a.length-1,d=0;d<=c&&(" "==a.charAt(d)||"t"==a.charAt(d));)d++;c=a.charAt(d);"-"==c&&(d++,b=1,c=a.charAt(d));a="%"==c?parseInt(spider_Right(a,a.length-d-1),2):"$"==c?parseInt(spider_Right(a,a.length-d-1),16):parseInt(spider_Right(a,a.length-d),10);isNaN(a)&&(a=0);return b?-a:a}function spider_ValF(a){a=parseFloat(a,10);isNaN(a)&&(a=0);return a}function spider_ValD(a){a=parseFloat(a,10);isNaN(a)&&(a=0);return a}
function spider_Right(a,b){var c=a.length;return a.substring(c-b,c)}function spider_Left(a,b){return a.substring(0,b)}function spider_Mid(a,b,c){"undefined"===typeof c&&(c=a.length);1>b&&(b=1);return a.substring(b-1,b+c-1)}function spider_LTrim(a,b){"undefined"===typeof b&&(b=" ");for(var c=0,d=a.length-1;c<=d&&a.charAt(c)==b;)c++;return a.substr(c)}function spider_RTrim(a,b){"undefined"===typeof b&&(b=" ");for(var c=a.length-1;0<c&&a.charAt(c)==b;)c--;return a.substr(0,c-0+1)}
function spider_Trim(a,b){"undefined"===typeof b&&(b=" ");for(var c=0,d=a.length-1;c<=d&&a.charAt(c)==b;)c++;for(;d>c&&a.charAt(d)==b;)d--;return a.substr(c,d-c+1)}function spider_Len(a){return a.length}function spider_Hex(a,b){"undefined"===typeof b&&(b=13);switch(b){case 1:case 24:a&=255;break;case 3:case 25:a&=65535;break;case 5:a&=4294967295}return a.toString(16).toUpperCase()}
function spider_ReplaceString(a,b,c,d,e,f){"undefined"===typeof d&&(d=0);"undefined"===typeof e&&(e=1);"undefined"===typeof f&&(f=-1);if(a&&b)for(e-=1,1==d&&(b=b.toUpperCase());f;){e=1==d?a.toUpperCase().indexOf(b,e):a.indexOf(b,e);if(-1==e)break;a=a.substring(0,e)+c+a.substring(e+b.length);e+=c.length;f--}return a}function spider_RemoveString(a,b,c,d,e){return spider_ReplaceString(a,b,"",c,d,e)}function spider_ReverseString(a){var b="",c;for(c=a.length-1;0<=c;c--)b+=a.charAt(c);return b}
function spider_RSet(a,b,c){"undefined"===typeof c&&(c=" ");var d=b-a.length;if(a.length>b)return a.substring(0,b);if(0<d){b=c;for(d--;d;)d--,b+=c;return b+a}return a}function spider_LSet(a,b,c){"undefined"===typeof c&&(c=" ");var d=b-a.length;if(a.length>b)return a.substring(0,b);if(0<d){b=c;for(d--;d;)d--,b+=c;return a+b}return a}function spider_StringField(a,b,c){return""===c?a:1<=b&&(a=a.split(c),a.length>=b)?a[b-1]:""};

function spider_Date(a,e,b,d,k,f){if("undefined"===typeof a)return a=new XDate,a.getTime()/1E3-60*a.getTimezoneOffset();a=new XDate(a,e-1,b,d,k,f,!0);return a.getTime()/1E3}function spider_Year(a){return-1==a?0:(new XDate(1E3*a,!0)).getFullYear()}function spider_Month(a){return-1==a?0:(new XDate(1E3*a,!0)).getMonth()+1}function spider_Day(a){return-1==a?0:(new XDate(1E3*a,!0)).getDate()}function spider_DayOfWeek(a){return-1==a?0:(new XDate(1E3*a,!0)).getDay()}
function spider_DayOfYear(a){if(-1==a)return 0;a=new XDate(1E3*a,!0);for(var e=0,b=a.getFullYear(),d=0;d<a.getMonth();d++)e+=XDate.getDaysInMonth(b,d);return e+=a.getDate()}function spider_Hour(a){return-1==a?0:(new XDate(1E3*a,!0)).getHours()}function spider_Minute(a){return-1==a?0:(new XDate(1E3*a,!0)).getMinutes()}function spider_Second(a){return-1==a?0:(new XDate(1E3*a,!0)).getSeconds()}
function spider_AddDate(a,e,b){a=new XDate(1E3*a,!0);switch(e){case 0:a.addYears(b,!0);break;case 1:a.addMonths(b,!0);break;case 2:a.addWeeks(b);break;case 3:a.addDays(b);break;case 4:a.addHours(b);break;case 5:a.addMinutes(b);break;case 6:a.addSeconds(b)}return a.getTime()/1E3}
function spider_FormatDate(a,e){var b=new XDate(1E3*e,!0),d=spider_ReplaceString(a,"%yyyy",""+b.getFullYear()),d=spider_ReplaceString(d,"%yy",spider_Right(""+b.getFullYear(),2)),d=spider_ReplaceString(d,"%mm",spider_RSet(""+(b.getMonth()+1),2,"0")),d=spider_ReplaceString(d,"%dd",spider_RSet(""+b.getDate(),2,"0")),d=spider_ReplaceString(d,"%hh",spider_RSet(""+b.getHours(),2,"0")),d=spider_ReplaceString(d,"%ii",spider_RSet(""+b.getMinutes(),2,"0"));return d=spider_ReplaceString(d,"%ss",spider_RSet(""+
b.getSeconds(),2,"0"))}
function spider_ParseDate(a,e){var b=0,d,k,f=1970,l=1,m=1,n=0,p=0,q=0,g,h=function(a){for(g=0;$.isNumeric(a.charAt(g))&&g<a.length;)g++;return spider_Val(a)};if(a&&e){for(var c=0;c<a.length;)if(d=a.charAt(c),k=e.charAt(b),"%"==d)if(c++,"yyyy"==a.substring(c,c+4)){f=h(e.substring(b,b+4));if(-1==f)return-1;b+=g;c+=4}else if("yy"==a.substring(c,c+2)){f=h(e.substring(b,b+2));if(-1==f)return-1;f=70<=f?f+1900:f+2E3;b+=g;c+=2}else if("mm"==a.substring(c,c+2)){l=h(e.substring(b,b+2));if(-1==l)return-1;b+=
g;c+=2}else if("dd"==a.substring(c,c+2)){m=h(e.substring(b,b+2));if(-1==m)return-1;b+=g;c+=2}else if("hh"==a.substring(c,c+2)){n=h(e.substring(b,b+2));if(-1==n)return-1;b+=g;c+=2}else if("ii"==a.substring(c,c+2)){p=h(e.substring(b,b+2));if(-1==p)return-1;b+=g;c+=2}else if("ss"==a.substring(c,c+2)){q=h(e.substring(b,b+2));if(-1==q)return-1;b+=g;c+=2}else b++,c++;else{if(d!=k)return-1;c++;b++}if(b==e.length)return spider_Date(f,l,m,n,p,q)}return-1};

if("undefined"===typeof spider)var spider={};if("undefined"===typeof document)var document={};if("undefined"===typeof window)var window={};function spider_FinishDirectory(a){-1==a?spider.filesystem.objects.CleanAll():spider.filesystem.objects.Get(a)&&spider.filesystem.objects.Remove(a)}spider.filesystem={objects:new spider.object(spider_FinishDirectory),fs:null,cwd:null};function spider_RequestFileSystem(a,b,c){window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem}
function spider_ExamineDirectory(a,b,c,d){spider.filesystem.objects.Allocate(a)}function spider_GetExtensionPart(a){a=a.split(".");return 1===a.length||""===a[0]&&2===a.length?"":a.pop()};

if("undefined"===typeof spider)var spider={};function spider_InitImageDecoder(){};

spider.nbModules++;require(["filesaver.min","canvas-toBlob.min"],function(){spider.nbLoadedModules++;SpiderMain()});function spider_InitImage(){spider.image.div=document.createElement("div");$(spider.image.div).hide()}function spider_FreeImage(a){var b;if(-1==a)spider.image.objects.CleanAll();else if(b=spider.image.objects.Get(a))spider.image.div.removeChild(b.image),spider.image.objects.Remove(a)}
spider.image={objects:new spider.object(spider_FreeImage),counter:0,div:null,GetCSS:function(a){if(!a)return null;a.spiderCounter||(this.counter++,a.spiderCounter=this.counter);var b="spiderimage_"+a.spiderCounter;if(!a.css){a.css=!0;var c={};c["."+b]={"background-image":"url("+a.toDataURL()+")","background-repeat":"no-repeat",width:""+a.width+"px",height:""+a.height+"px"};$.injectCSS(c)}return b},GetGrayedCSS:function(a){a.spiderCounter||(this.counter++,a.spiderCounter=this.counter);var b="spiderimagegrayed_"+
a.spiderCounter;if(!a.grayedCss){a.grayedCss=!0;var c={},d="."+b,e;e=document.createElement("canvas");var f=e.getContext("2d");e.width=a.width;e.height=a.height;f.drawImage(a,0,0);for(var g=f.getImageData(0,0,e.width,e.height),l=0;l<g.height;l++)for(var k=0;k<g.width;k++){var h=4*l*g.width+4*k,n=(g.data[h]+g.data[h+1]+g.data[h+2])/3;g.data[h]=n;g.data[h+1]=n;g.data[h+2]=n}f.putImageData(g,0,0,0,0,g.width,g.height);e=e.toDataURL();c[d]={"background-image":"url("+e+")","background-repeat":"no-repeat",
width:""+a.width+"px",height:""+a.height+"px"};$.injectCSS(c)}return b}};
function spider_LoadImage(a,b,c){"undefined"===typeof c&&(c=0);var d=spider.image.objects.Allocate(a),e=document.createElement("canvas");d.image=e;spider.image.div.appendChild(e);var f=new Image;$(f).on({load:function(){e.width=f.width;e.height=f.height;e.getContext("2d").drawImage(f,0,0);var a=spider_GetExtensionPart(b).toLowerCase();"jpg"==a||"jpeg"==a?d.originalFormat=1195724874:"png"==a?d.originalFormat=4673104:"bmp"==a&&(d.originalFormat=5262658);spider.event.SendLoading(18,1,b,d.id)},error:function(){spider.event.SendLoading(19,
1,b,d.id)}});c&65536?(a=spider.systembase.getLocalFile(b))?(c=new FileReader,$(c).on({load:function(a){f.src=a.target.result},error:function(){spider.event.SendLoading(19,1,b,d.id)}}),c.readAsDataURL(a)):spider.event.SendLoading(19,1,b,d.id):f.src=b;return d.resultId}
function spider_CopyImage(a,b){var c,d=spider.image.objects.Allocate(b);if(c=spider.image.objects.Get(a)){var e=document.createElement("canvas");e.width=c.image.width;e.height=c.image.height;d.image=e;spider.image.div.appendChild(e);e.getContext("2d").drawImage(c.image,0,0)}return d.resultId}
function spider_CreateImage(a,b,c,d,e){"undefined"===typeof e&&(e=0);a=spider.image.objects.Allocate(a);d=document.createElement("canvas");d.width=b;d.height=c;a.image=d;spider.image.div.appendChild(d);-1!=e&&(d=d.getContext("2d"),d.fillStyle=spider_helper_ColorToHtml(e),d.fillRect(0,0,b,c));return a.resultId}
function spider_GrabImage(a,b,c,d,e,f){b=spider.image.objects.Allocate(b);if(a=spider.image.objects.Get(a)){var g=document.createElement("canvas");g.width=e;g.height=f;b.image=g;spider.image.div.appendChild(g);g.getContext("2d").drawImage(a.image,c,d,e,f,0,0,e,f)}return b.resultId}function spider_ImageOutput(a){return(a=spider.image.objects.Get(a))?(a.image.css=!1,a.image.grayedCss=!1,{image:a,canvas:a.image,context:a.image.getContext("2d"),stopDrawingCallback:null}):0}
function spider_ImageVectorOutput(a,b){"undefined"===typeof b&&(b=1);var c;return(c=spider.image.objects.Get(a))?(c.image.css=!1,c.image.grayedCss=!1,{image:c,canvas:c.image,inputUnit:1,outputUnit:b,stopDrawingCallback:null}):0}function spider_EncodeImage(a,b,c){"undefined"===typeof b&&(b=4673104);"undefined"===typeof c&&(c=7);var d;return(d=spider.image.objects.Get(a))?1195724874==b?d.image.toDataURL("image/jpeg",c/10):d.image.toDataURL("image/png"):""}
function spider_ExportImage(a,b,c){"undefined"===typeof c&&(c=4673104);return(a=spider.image.objects.Get(a))?(a.image.toBlob(function(a){saveAs(a,b)},1195724874==c?"image/jpeg":"image/png"),1):0}function spider_ImageDepth(a){return spider.image.objects.Get(a)?32:0}function spider_ImageFormat(a){var b;return(b=spider.image.objects.Get(a))?b.originalFormat?b.originalFormat:0:0}function spider_ImageWidth(a){var b;return(b=spider.image.objects.Get(a))?b.image.width:0}
function spider_ImageHeight(a){var b;return(b=spider.image.objects.Get(a))?b.image.height:0}
function spider_ResizeImage(a,b,c,d){"undefined"===typeof d&&(d=0);if(a=spider.image.objects.Get(a)){var e=document.createElement("canvas");-65535==b&&(b=a.image.width);-65535==c&&(c=a.image.height);e.width=b;e.height=c;a.image.css=!1;a.image.grayedCss=!1;var f=e.getContext("2d");if(1==d)if(f.webkitImageSmoothingEnabled||f.mozImageSmoothingEnabled||f.imageSmoothingEnabled)f.webkitImageSmoothingEnabled=!1,f.mozImageSmoothingEnabled=!1,f.imageSmoothingEnabled=!1,f.drawImage(a.image,0,0,a.image.width,
a.image.height,0,0,b,c);else{var g=a.image.getContext("2d");d=a.image.width;for(var l=a.image.height,k=g.getImageData(0,0,d,l),g=f.createImageData(b,c),k=k.data,h=g.data,n=d/b,l=l/c,p=0;p<c;p++)for(var q=p*b,r=(p*l|0)*d,m=0;m<b;m++){var s=m*n|0;h[4*(q+m)+0]=k[4*(r+s)+0];h[4*(q+m)+1]=k[4*(r+s)+1];h[4*(q+m)+2]=k[4*(r+s)+2];h[4*(q+m)+3]=k[4*(r+s)+3]}f.putImageData(g,0,0)}else f.drawImage(a.image,0,0,a.image.width,a.image.height,0,0,b,c);spider.image.div.removeChild(a.image);a.image=e;spider.image.div.appendChild(e);
return 1}return 0}function spider_ImageID(a){var b;return(b=spider.image.objects.Get(a))?b.image:null}function spider_IsImage(a){return spider.image.objects.Is(a)};

function spider_Init2DDrawing(){}spider.drawing={output:null,context:null,frontColor:0,backColor:0,mode:0,stopDrawingCallback:null};function spider_helper_ColorToHtml(a){var c=a>>24&255;return 0===c?"rgb("+(a&255)+","+(a>>8&255)+","+(a>>16&255)+")":"rgba("+(a&255)+","+(a>>8&255)+","+(a>>16&255)+","+c/255+")"}
function spider_2ddrawing_getTextHeight(a){a=$("<span>Hg</span>").css("font",a);var c=$('<div style="display: inline-block; width: 1px; height: 0px;"></div>'),f=$("<div></div>");f.append(a,c);$("body").append(f);var b={};try{c.css({verticalAlign:"baseline"}),b.ascent=Math.ceil(c.offset().top-a.offset().top),c.css({verticalAlign:"bottom"}),b.height=Math.ceil(c.offset().top-a.offset().top),b.descent=Math.ceil(b.height-b.ascent)}finally{f.remove()}return b}
function spider_StartDrawing(a){spider.drawing.output=a;spider.drawing.context=a.context;spider.drawing.stopDrawingCallback=a.stopDrawingCallback;spider.drawing.frontColor=0;spider.drawing.backColor=16777215;spider.drawing.mode=0;spider.drawing.context.lineWidth=1;spider.drawing.context.font="12pt arial";return a.context}
function spider_Box(a,c,f,b,d){"undefined"===typeof d&&(d=spider.drawing.frontColor);var e=spider.drawing.context;4==spider.drawing.mode?(e.beginPath(),e.rect(a+0.5,c+0.5,f,b),e.strokeStyle=spider_helper_ColorToHtml(d),e.stroke()):(e.fillStyle=spider_helper_ColorToHtml(d),e.fillRect(a,c,f,b))}function spider_DrawAlphaImage(a,c,f,b){"undefined"===typeof b&&(b=255);var d=spider.drawing.context,e=d.globalAlpha;d.globalAlpha=b/255;d.drawImage(a,c,f);d.globalAlpha=e}
function spider_DrawImage(a,c,f,b,d){var e=spider.drawing.context;"undefined"===typeof b?e.drawImage(a,c,f):e.drawImage(a,0,0,a.width,a.height,c,f,b,d)}function spider_Plot(a,c,f){"undefined"===typeof f&&(f=spider.drawing.frontColor);var b=spider.drawing.context;b.fillStyle=spider_helper_ColorToHtml(f);b.fillRect(a,c,1,1)}function spider_Point(a,c){var f=spider.drawing.context.getImageData(a,c,1,1).data;return f[0]|f[1]<<8|f[2]<<16|f[3]<<24}function spider_OutputDepth(){return 32}
function spider_OutputWidth(){return spider.drawing.context.canvas.width}function spider_OutputHeight(){return spider.drawing.context.canvas.height}function spider_Line(a,c,f,b,d){"undefined"===typeof d&&(d=spider.drawing.frontColor);var e=spider.drawing.context;e.beginPath();e.moveTo(a,c);e.lineTo(a+f-1,c+b-1);e.strokeStyle=spider_helper_ColorToHtml(d);e.stroke()}
function spider_Line(a,c,f,b,d){"undefined"===typeof d&&(d=spider.drawing.frontColor);var e=spider.drawing.context;e.beginPath();e.moveTo(a,c);e.lineTo(a+f-1,c+b-1);e.strokeStyle=spider_helper_ColorToHtml(d);e.stroke()}function spider_LineXY(a,c,f,b,d){"undefined"===typeof d&&(d=spider.drawing.frontColor);var e=spider.drawing.context;e.beginPath();e.moveTo(a,c);e.lineTo(f,b);e.strokeStyle=spider_helper_ColorToHtml(d);e.stroke()}
function spider_DrawText(a,c,f,b,d){"undefined"===typeof b&&(b=spider.drawing.frontColor);"undefined"===typeof d&&(d=spider.drawing.backColor);var e=spider.drawing.context,g=Math.ceil(e.measureText(f).width);if(!(spider.drawing.mode&1)){var h=spider_TextHeight(f);e.fillStyle=spider_helper_ColorToHtml(d);e.fillRect(a,c,g,h)}e.fillStyle=spider_helper_ColorToHtml(b);e.fillText(f,a,c+spider_2ddrawing_getTextHeight(spider.drawing.context.font).ascent);return a+g}
function spider_Circle(a,c,f,b){"undefined"===typeof b&&(b=spider.drawing.frontColor);var d=spider.drawing.context;4==spider.drawing.mode?(d.beginPath(),d.arc(a,c,f-1,0,2*Math.PI,!1),d.strokeStyle=spider_helper_ColorToHtml(b),d.stroke()):(d.beginPath(),d.arc(a,c,f,0,2*Math.PI,!1),d.fillStyle=spider_helper_ColorToHtml(b),d.fill())}
function spider_Ellipse(a,c,f,b,d){function e(a,e,f,c,b){var d=c/2*0.5522848,k=b/2*0.5522848,g=e+c,l=f+b;c=e+c/2;b=f+b/2;a.beginPath();a.moveTo(e,b);a.bezierCurveTo(e,b-k,c-d,f,c,f);a.bezierCurveTo(c+d,f,g,b-k,g,b);a.bezierCurveTo(g,b+k,c+d,l,c,l);a.bezierCurveTo(c-d,l,e,b+k,e,b);a.closePath()}"undefined"===typeof d&&(d=spider.drawing.frontColor);var g=spider.drawing.context;4==spider.drawing.mode?(e(g,a-f,c-b,2*f,2*b),g.strokeStyle=spider_helper_ColorToHtml(d),g.stroke()):(e(g,a-f,c-b,2*f,2*b),g.fillStyle=
spider_helper_ColorToHtml(d),g.fill())}function spider_DrawingFont(a){spider.drawing.context.font=a.name}function spider_DrawingMode(a){spider.drawing.mode=a}function spider_StopDrawing(){spider.drawing.stopDrawingCallback&&spider.drawing.stopDrawingCallback(spider.drawing.output)}
function spider_RoundBox(a,c,f,b,d,e,g){function h(a,b,c,e,f,d){"undefined"===typeof d&&(d=5);a.beginPath();a.moveTo(b+d,c);a.lineTo(b+e-d,c);a.quadraticCurveTo(b+e,c,b+e,c+d);a.lineTo(b+e,c+f-d);a.quadraticCurveTo(b+e,c+f,b+e-d,c+f);a.lineTo(b+d,c+f);a.quadraticCurveTo(b,c+f,b,c+f-d);a.lineTo(b,c+d);a.quadraticCurveTo(b,c,b+d,c);a.closePath()}e=spider.drawing.context;4==spider.drawing.mode?(h(e,a+0.5,c+0.5,f,b,d),e.strokeStyle=spider_helper_ColorToHtml(g),e.stroke()):(h(e,a+0.5,c+0.5,f,b,d),e.fillStyle=
spider_helper_ColorToHtml(g),e.fill())}function spider_RGB(a,c,f){return f<<16|c<<8|a}function spider_RGBA(a,c,f,b){return(b<<24|f<<16|c<<8|a)>>>0}function spider_Red(a){return a&255}function spider_Green(a){return a>>8&255}function spider_Blue(a){return a>>16&255}function spider_Alpha(a){return a>>24&255}function spider_BackColor(a){return spider.drawing.backColor=a}function spider_FrontColor(a){return spider.drawing.frontColor=a}
function spider_TextHeight(a){a=spider_2ddrawing_getTextHeight(spider.drawing.context.font);return a.ascent+a.descent}function spider_TextWidth(a){return Math.ceil(spider.drawing.context.measureText(a).width)};

if("undefined"==typeof Spider)var Spider={};if("undefined"==typeof $)var $={};function spider_InitArray(){}function spider_ArraySize(a,b){"undefined"===typeof b&&(b=1);return a.array?a.dimensions[b-1]:-1}function spider_FreeArray(a){for(var b=a.array.length=0;b<a.nbDimensions;b++)a.dimensions[b]=-1}function spider_CopyArray(a,b){$.extend(!0,b,a)}
function spider_CreateMultiArray(a,b){var c=null;try{b++;var c=Array(b||0),d=b;if(2<arguments.length){var e=Array.prototype.slice.call(arguments,0);for(e.splice(1,1);d--;)c[b-1-d]=spider_CreateMultiArray.apply(this,e)}else for(d=0;d<b;d++)c[d]=8==a.type?"":a.structure?new a.structure:0}catch(f){}return c}
function spider_Dim(a,b,c,d){a.structure=d;a.nbDimensions=c.length;a.dimensions=c;a.type=b;b=Array(a.nbDimensions+1);b[0]=a;for(d=0;d<a.nbDimensions;d++)b[d+1]=c[d];a.array=spider_CreateMultiArray.apply(this,b)}function spider_ReDim(a,b){var c;if(1==a.nbDimensions){a.array.length=b+1;if(b>a.dimensions[0])for(c=a.dimensions[0]+1;c<=b;c++)a.array[c]=8==a.type?"":a.structure?new a.structure:0;a.dimensions[0]=b}else a.dimensions[a.nbDimensions-1]=b;return a.array};

function spider_InitMap(){}function spider_NewMap(a,b){var c=new spider_SysMap;c.type=a;c.isNative=b;return c}function spider_GetMapElement(a,b){return a.map.hasOwnProperty(b)?a.map[b]:0}function spider_CreateMapElement(a,b){return a.map.hasOwnProperty(b)?a.map[b]:(a.current=new a.type,a.currentKey=b,a.map[b]=a.current)}function spider_AddMapElement(a,b){a.current=new a.type;a.currentKey=b;return a.map[b]=a.current}
function spider_ResetMap(a){a.keys=Object.keys(a.map);a.currentIndex=-1;a.currentKey=null}function spider_NextMapElement(a){a.currentIndex<a.keys.length-1?(a.currentIndex++,a.currentKey=a.keys[a.currentIndex],a.current=a.map[a.currentKey]):(a.currentIndex=-1,a.current=null,a.currentKey=null);return a.current}function spider_MapKey(a){return a.currentKey?a.currentKey:""}function spider_MapSize(a){return Object.keys(a.map).length}
function spider_DeleteMapElement(a,b){"undefined"===typeof b?a.currentKey&&delete a.map[a.currentKey]:a.map.hasOwnProperty(b)&&delete a.map[b]}function spider_FindMapElement(a,b){return a.map.hasOwnProperty(b)?(a.current=a.map[b],a.currentKey=b,a.current):0}function spider_CopyMap(a,b){var c=Object.keys(a.map);b.map={};for(var d=0;d<c.length;d++){var e=c[d],f=new a.type;a.map[e].copy(f);b.map[e]=f}b.currentIndex=-1;b.current=null;b.currentKey=null}function spider_ClearMap(a){a.map={}}
function spider_FreeMap(a){spider_ClearMap(a)}function spider_PushMapPosition(a){a.stack||(a.stack=[]);a.stack.push(a.currentIndex)}function spider_PopMapPosition(a){a.stack&&0<a.stack.length&&(a.currentIndex=a.stack.pop(),a.keys=Object.keys(a.map))};

if("undefined"===typeof spider)var spider={};function spider_Event_Init(){}
spider.event={map:{},eventWindow:0,eventObject:0,eventType:0,eventData:0,MakeKey:function(a,d,b,c){return a.toString()+"_"+d.toString()+"_"+b.toString()+"_"+c.toString()},SendGeneric:function(a,d,b,c){a=spider.event.MakeKey(a,d,b,c);if(a=spider.event.map[a])for(var e in a)a[e]()},SendLoading:function(a,d,b,c){a=spider.event.MakeKey(a,-1,-1,-1);if(a=spider.event.map[a])for(var e in a)a[e](d,b,c)},Send:function(a,d,b,c){"undefined"===typeof b&&(b=0);"undefined"===typeof c&&(c=0);this.eventWindow=d;
this.eventObject=b;this.eventType=c;this.SendGeneric(a,d,b,c);this.SendGeneric(a,d,b,-1);this.SendGeneric(a,d,-1,-1);this.SendGeneric(a,-1,-1,-1)}};function spider_BindEvent(a,d,b,c,e){"undefined"===typeof b&&(b=-1);"undefined"===typeof c&&(c=-1);"undefined"===typeof e&&(e=-1);a=spider.event.MakeKey(a,b,c,e);spider.event.map[a]||(spider.event.map[a]={});spider.event.map[a][d]=d}
function spider_UnbindEvent(a,d,b,c,e){"undefined"===typeof b&&(b=-1);"undefined"===typeof c&&(c=-1);"undefined"===typeof e&&(e=-1);a=spider.event.MakeKey(a,b,c,e);if(a=spider.event.map[a])for(var f in a)f==d&&delete a[d]}function spider_PostEvent(a,d,b,c,e){"undefined"===typeof d&&(d=-2);"undefined"===typeof b&&(b=-2);"undefined"===typeof c&&(c=-2);"undefined"===typeof e&&(e=0);spider.event.eventData=e;spider.event.Send(a,d,b,c)}function spider_EventWindow(){return spider.event.eventWindow}
function spider_EventMenu(){return spider.event.eventObject}function spider_EventGadget(){return spider.event.eventObject}function spider_EventTimer(){return spider.event.eventObject}function spider_EventType(){return spider.event.eventType}function spider_EventData(){return spider.event.eventData};

if("undefined"===typeof spider)var spider={};if("undefined"===typeof document)var document={};if("undefined"===typeof window)var window={};spider.nbModules++;require(["filesaver.min"],function(){spider.nbLoadedModules++;SpiderMain()});
function spider_File_UpdateGoogleDriveFile(a,c,b){function d(a,b,c,d){var h=new FileReader;h.readAsBinaryString(c);h.onload=function(l){l=c.type||"application/octet-stream";var m=btoa(h.result);l="\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n"+JSON.stringify(b)+"\r\n---------314159265358979323846\r\nContent-Type: "+l+"\r\nContent-Transfer-Encoding: base64\r\n\r\n"+m+"\r\n---------314159265358979323846--";gapi.client.request({path:"/upload/drive/v2/files/"+a,method:"PUT",
params:{uploadType:"multipart",alt:"json"},headers:{"Content-Type":'multipart/mixed; boundary="-------314159265358979323846"'},body:l}).execute(d)}}gapi.client.drive.files.get({fileId:a}).execute(function(e){d(a,e,c,b)})}
function spider_File_CreateGoogleDriveFile(a,c,b,d){var e=new FileReader;e.readAsBinaryString(c);e.onload=function(d){d=c.type||"application/octet-stream";var g={title:a,mimeType:d},k=btoa(e.result);d="\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n"+JSON.stringify(g)+"\r\n---------314159265358979323846\r\nContent-Type: "+d+"\r\nContent-Transfer-Encoding: base64\r\n\r\n"+k+"\r\n---------314159265358979323846--";gapi.client.request({path:"/upload/drive/v2/files",method:"POST",
params:{uploadType:"multipart"},headers:{"Content-Type":'multipart/mixed; boundary="-------314159265358979323846"'},body:d}).execute(b)}}function spider_CloseFile(a){-1==a?spider.file.objects.CleanAll():spider.file.objects.Get(a)&&spider.file.objects.Remove(a)}spider.file={objects:new spider.object(spider_CloseFile)};
function spider_ReadFile(a,c,b,d){var e=spider.file.objects.Allocate(a);e.size=-1;e.position=0;e.bufferPosition=0;e.progress=-1;e.callback=b;e.filename=c;e.chunkSize=16384;var f=function(a){-1===e.size?(e.buffer=this.response,e.size=e.buffer.byteLength):e.buffer=a.target.result;e.view8=new Int8Array(e.buffer);e.viewu8=new Uint8Array(e.buffer);e.view=new DataView(e.buffer);b(0,c,e.id,e.buffer.byteLength)},g=function(a){a.originalEvent.lengthComputable&&(e.progress=a.originalEvent.loaded/a.originalEvent.total*
100);b(1,c,e.id)},k=function(a){b(2,c,e.id)};a=function(a){gapi.client.request({path:"/drive/v2/files/"+a,method:"GET",callback:function(a,b){var c=gapi.auth.getToken(),d=new XMLHttpRequest;d.open("GET",a.downloadUrl,!0);d.responseType="arraybuffer";d.setRequestHeader("Authorization","Bearer "+c.access_token);$(d).on({load:f,progress:g,error:k});d.send()}})};if(d&131072)return e.googleDriveFileId=c,a(c),e.resultId;if(d&65536){if(a=spider.systembase.getLocalFile(c)){var h=new FileReader;$(h).on({load:f,
progress:g,error:k});e.localFile=a;e.reader=h;e.size=a.size;0===(d&1)&&h.readAsArrayBuffer(e.localFile);return e.resultId}}else return d=new XMLHttpRequest,$(d).on({load:f,progress:g,error:k}),d.open("GET",c,!0),d.responseType="arraybuffer",d.send(),e.resultId;spider.file.objects.Remove(e.resultId);return 0}function spider_OpenFile(a,c,b,d){if(c=spider_ReadFile(a,c,b,d))-1==a&&(a=c),spider.file.objects.Get(a);return c}
function spider_Loc(a){var c;return(c=spider.file.objects.Get(a))?c.bufferPosition+c.position:0}function spider_Lof(a){var c;return(c=spider.file.objects.Get(a))?c.size:0}function spider_ReadData(a,c,b,d){if(a=spider.file.objects.Get(a))c.view8.set(new Int8Array(a.buffer,a.position,d),b),a.position+=d}function spider_ReadByte(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-1)return 0;a.position++;return a.view8[a.position-1]}return 0}
function spider_ReadAsciiCharacter(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-1)return 0;a.position++;return a.viewu8[a.position-1]}return 0}function spider_ReadUnicodeCharacter(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-2)return 0;a.position+=2;return a.view.getUint16(a.position-2)}return 0}function spider_ReadWord(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-2)return 0;a.position+=2;return a.view.getInt16(a.position-2)}return 0}
function spider_ReadLong(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-2)return 0;a.position+=4;return a.view.getInt32(a.position-4)}return 0}function spider_ReadFloat(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-4)return 0;a.position+=4;return a.view.getFloat32(a.position-4)}return 0}function spider_ReadDouble(a){if(a=spider.file.objects.Get(a)){if(a.position>a.size-8)return 0;a.position+=8;return a.view.getFloat64(a.position-8)}return 0}
function spider_File_ReadUTF8Character(a){var c;buffer=a.viewu8;if(a.position>a.size-1)return 0;c=buffer[a.position++];return 0===(c&128)?c:192==(c&224)?a.position>a.size-1?0:(c&31)<<6|buffer[a.position++]&63:224==(c&240)?a.position>a.size-2?0:(c&15)<<12|(buffer[a.position++]&63)<<6|(buffer[a.position++]&63)<<0:0}
function spider_File_ReadCharacter(a,c){switch(c){case 24:if(a.position>a.size-1)return 0;a.position++;return a.viewu8[a.position-1];case 25:if(a.position>a.size-2)return 0;a.position+=2;return a.viewu8[a.position-2]<<8|a.viewu8[a.position-1];default:return spider_File_ReadUTF8Character(a)}}function spider_ReadCharacter(a,c){"undefined"===typeof c&&(c=2);var b;return(b=spider.file.objects.Get(a))?spider_File_ReadCharacter(b,c):0}
function spider_ReadString(a,c,b){"undefined"===typeof c&&(c=2);"undefined"===typeof b&&(b=-1);var d,e="",f=c&31;0===f&&(f=2);if(a=spider.file.objects.Get(a))for(;b;){d=spider_File_ReadCharacter(a,f);if(0===(c&65536)&&(13===d||10===d)){13===d&&10===a.view8[a.position+1]&&a.position++;break}else if(0===d)break;e+=String.fromCharCode(d);b--}return e}
function spider_ReadStringFormat(a){var c=24;if(a=spider.file.objects.Get(a)){var b=a.size-a.position,d,e,f,g;2<=b?(d=a.viewu8[a.position],e=a.viewu8[a.position+1]):3<=b?f=a.viewu8[a.position+2]:4<=b&&(g=a.viewu8[a.position+3]);2<=b&&255==d&&254==e?(c=25,a.position+=2):3<=b&&239==d&&187==e&&191==f?(c=2,a.position+=3):2<=b&&254==d&&255==e?(c=4,a.position+=2):4<=b&&255==d&&254==e&&0===f&&0===g?(c=5,a.position+=4):4<=b&&0===d&&0===e&&254==f&&255==g&&(c=6,a.position+=4)}return c}
function spider_WriteByte(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,1),b.view8[b.position++]=c,b.position>b.size&&(b.size=b.position),1):0}function spider_WriteAsciiCharacter(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,1),b.view8[b.position++]=c,b.position>b.size&&(b.size=b.position),1):0}
function spider_WriteUnicodeCharacter(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,2),b.view.setUint16(b.position,c),b.position+=2,b.position>b.size&&(b.size=b.position),1):0}function spider_WriteWord(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,2),b.view.setInt16(b.position,c),b.position+=2,b.position>b.size&&(b.size=b.position),1):0}
function spider_WriteLong(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,4),b.view.setInt32(b.position,c),b.position+=4,b.position>b.size&&(b.size=b.position),1):0}function spider_WriteFloat(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,4),b.view.setFloat32(b.position,c),b.position+=4,b.position>b.size&&(b.size=b.position),1):0}
function spider_WriteDouble(a,c){var b;return(b=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(b,8),b.view.setFloat64(b.position,c),b.position+=8,b.position>b.size&&(b.size=b.position),1):0}function spider_WriteString(a,c,b){"undefined"===typeof b&&(b=2);if(a=spider.file.objects.Get(a)){for(var d=c.length,e=0;e<d;e++)spider_File_CheckBufferSize(a,4),a.position+=spider_Memory_WriteCharacter(a.viewu8,a.position,c.charCodeAt(e),b);a.position>a.size&&(a.size=a.position);return 1}return 0}
function spider_WriteStringN(a,c,b){return spider_WriteString(a,c+"\n",b)}
function spider_WriteStringFormat(a,c){switch(c){case 25:spider_WriteByte(a,255);spider_WriteByte(a,254);break;case 2:spider_WriteByte(a,239);spider_WriteByte(a,187);spider_WriteByte(a,191);break;case 4:spider_WriteByte(a,254);spider_WriteByte(a,255);break;case 5:spider_WriteByte(a,255);spider_WriteByte(a,254);spider_WriteByte(a,0);spider_WriteByte(a,0);break;case 6:spider_WriteByte(a,0),spider_WriteByte(a,0),spider_WriteByte(a,254),spider_WriteByte(a,255)}}
function spider_WriteCharacter(a,c,b){"undefined"===typeof b&&(b=2);return(a=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(a,4),a.position+=spider_Memory_WriteCharacter(a.viewu8,a.position,c,b),a.position>a.size&&(a.size=a.position),1):0}function spider_FetchData(a,c){var b;if(b=spider.file.objects.Get(a))b.bufferPosition+=b.position,b.position=0,b.reader.readAsArrayBuffer(b.localFile.slice(b.bufferPosition,b.bufferPosition+c))}
function spider_FileProgress(a){var c;return(c=spider.file.objects.Get(a))?c.progress:-1}function spider_FileSeek(a,c,b){if(a=spider.file.objects.Get(a))a.position=1==b?a.position+c:c,a.position>a.size?a.position=a.size:0>a.position&&(a.position=0)}function spider_Eof(a){var c;return(c=spider.file.objects.Get(a))?c.bufferPosition+c.position==c.size:0}
function spider_CreateFile(a,c,b,d){a=spider.file.objects.Allocate(a);a.position=0;a.bufferPosition=0;a.callback=b;a.filename=c;a.chunkSize=16384;a.size=0;a.buffer=new ArrayBuffer(a.chunkSize);a.view8=new Int8Array(a.buffer);a.viewu8=new Uint8Array(a.buffer);a.view=new DataView(a.buffer);d&131072&&(a.googleDriveFileId=c);return a.resultId}
function spider_File_CheckBufferSize(a,c){if(a.buffer.byteLength<a.position+c){var b=new ArrayBuffer(a.position+c+a.chunkSize),d=new Int8Array(b);d.set(a.view8);a.buffer=b;a.view8=d;a.viewu8=new Uint8Array(a.buffer);a.view=new DataView(a.buffer)}}function spider_WriteData(a,c,b,d){return(a=spider.file.objects.Get(a))?(spider_File_CheckBufferSize(a,d),a.view8.set(new Int8Array(c,b,d),a.position),a.position+=d,a.position>a.size&&(a.size=a.position),1):0}
function spider_ExportFile(a,c,b){"undefined"===typeof b&&(b=65536);var d;return(d=spider.file.objects.Get(a))?(a=new Blob([new Int8Array(d.buffer,0,d.size)],{type:c}),b&65536?saveAs(a,d.filename):b&131072&&(d.googleDriveFileId?spider_File_UpdateGoogleDriveFile(d.googleDriveFileId,a,function(a,b){a?d.callback(3,d.filename,d.id,d.buffer.byteLength):d.callback(2,d.filename,d.id)}):spider_File_CreateGoogleDriveFile(d.filename,a,function(a,b){a?d.callback(3,d.filename,d.id,d.buffer.byteLength):d.callback(2,
d.filename,d.id)})),1):0}function spider_IsFile(a){return spider.file.objects.Is(a)};

spider.desktop={mouseX:-1,mouseY:-1};function spider_DesktopWidth(a){return $(window).width()}function spider_DesktopHeight(a){return $(window).height()}function spider_DesktopFrequency(a){return 0}function spider_InitDesktop(){$(document).on({mouseout:function(a){spider.desktop.mouseX=-1;spider.desktop.mouseY=-1},mouseenter:function(a){spider.desktop.mouseX=a.clientX;spider.desktop.mouseY=a.clientY},mousemove:function(a){spider.desktop.mouseX=a.clientX;spider.desktop.mouseY=a.clientY}})}
function spider_DesktopMouseX(){return spider.desktop.mouseX}function spider_DesktopMouseY(){return spider.desktop.mouseY}function spider_DesktopX(a){return 0}function spider_DesktopY(a){return 0}function spider_ExamineDesktops(){return 1}function spider_DesktopDepth(a){return screen.colorDepth}function spider_DesktopName(a){return navigator.userAgent};

(function(){function x(b){var a;if(-1==b)spider.window.a.CleanAll();else if(a=spider.window.a.Get(b))a.id==spider.window.b&&(spider.window.b=-1),null!==a.parentId?s(a.parentId):-1!==a.m&&s(a.m),a.p&&a.p(),a.window.parentNode.removeChild(a.window),spider.window.a.Remove(b)}function y(b){var a="";b&131072&&(a+="ctrl+");b&65536&&(a+="shift+");b&262144&&(a+="alt+");b&524288&&(a+="mod+");switch(b){case 8:a+="backspace";break;case 9:a+="tab";break;case 13:a+="enter";break;case 0:a+="capslock";break;case 27:a+=
"escape";break;case 32:a+="space";break;case 11:a+="pageup";break;case 12:a+="pagedown";break;case 4:a+="end";break;case 1:a+="home";break;case 28:a+="left";break;case 30:a+="up";break;case 29:a+="right";break;case 31:a+="down";break;case 5:a+="ins";break;case 127:a+="del";break;case 43:a+="plus";break;default:a=201<=b&&212>=b?a+("f"+(b-201+1)):a+spider_Chr(b&-983041)}return a}function k(b){t()==b.id&&(Mousetrap.reset(),Mousetrap.bindGlobal(Object.keys(b.e),z))}function z(b,a){var c,e=t();if(-1!=
e&&(c=spider.window.a.Get(e)))return spider.event.Send(2,c.id,c.e[a]),!1}function t(){return spider.window.b}function s(b){if(b=spider.window.a.Get(b))b.c&4096?(spider.window.b=b.id,k(b)):b.element.style.zIndex!=spider.window.k&&(b.q?(b.element.style.zIndex=spider.window.l,spider.window.l++):(b.element.style.zIndex=spider.window.k,spider.window.k++),spider.window.b=b.id,k(b))}function p(b){return b.c&4608?0:$(b.contentFrame).cssValue("marginRight")+$(b.contentFrame).cssValue("marginLeft")+$(b.contentFrame).cssValue("borderRightWidth")+
$(b.contentFrame).cssValue("borderLeftWidth")}function l(b){return b.c&4608?0:$(b.contentFrame).cssValue("marginTop")+$(b.contentFrame).cssValue("marginBottom")+$(b.contentFrame).cssValue("borderTopWidth")+$(b.contentFrame).cssValue("borderBottomWidth")}function u(b,a,c,e,v){if(b=spider.window.a.Get(b))-65535!=a&&(b.element.style.left=a+"px"),-65535!=c&&(b.element.style.top=c+"px"),-65535!=e&&$(b.element).width(e+p(b)),-65535!=v&&$(b.element).height(v+l(b))}function A(b,a){var c,e;if(e=spider.window.a.Get(b))a&
1?(c=spider_DesktopWidth(0)/2-q(b,0)/2,e=spider_DesktopHeight(0)/2-w(b,0)/2,u(b,c,e,-65535,-65535)):a&2&&null!==e.parentId&&(c=B(e.parentId)+(q(e.parentId,0)-q(b,0))/2,e=C(e.parentId)+(w(e.parentId,0)-w(b,0))/2,u(b,c,e,-65535,-65535))}function B(b){var a;return(a=spider.window.a.Get(b))?a.element.getBoundingClientRect().left:0}function C(b){var a;return(a=spider.window.a.Get(b))?a.element.getBoundingClientRect().top:0}function q(b,a){"undefined"===typeof a&&(a=1);var c;return(c=spider.window.a.Get(b))?
c.c&4608?$(c.element).width():1==a?$(c.element).width()-p(c):$(c.element).width()+2:0}function w(b,a){"undefined"===typeof a&&(a=1);var c;return(c=spider.window.a.Get(b))?c.c&4608?$(c.element).height()-$(c.content).cssValue("top"):1==a?$(c.element).height()-l(c):$(c.element).height()-l(c)+$(c.title).height()+9:0}spider.nbModules++;require(["mousetrap.min"],function(){require(["mousetrap-global-bind.min"],function(){spider.nbLoadedModules++;SpiderMain()})});spider.window={a:new spider.object(x),b:-1,
i:{},k:100,l:500,currentWindowId:-1,gadgetList:null};spider.window.o=function(){return{d:null,f:0,stack:{},init:function(b){this.d=b;this.f=0},get:function(){return this.d},set:function(b){this.d=b},push:function(b){this.stack[this.f]=this.d;this.f++;this.d=b},pop:function(){this.f--;this.d=this.stack[this.f]}}};spider.window.gadgetList=new spider.window.o;window.spider_InitWindow=function(){};window.spider_CloseWindow=x;window.spider_DisableWindow=function(b,a){var c;if(c=spider.window.a.Get(b))a?
c.disabled||($(c.window).fadeTo(200,0.6),$(c.window).find("*").prop("disabled",!0),$(c.contentFrame).block({message:null,r:{opacity:0,cursor:"default"}}),c.disabled=1):c.disabled&&($(c.window).fadeTo(200,1),$(c.window).find("*").prop("disabled",!1),$(c.contentFrame).unblock(),c.disabled=0)};window.spider_OpenWindow=function(b,a,c,e,v,f,g,r){"undefined"===typeof g&&(g=16);"undefined"===typeof r&&(r=null);var d=spider.window.a.Allocate(b);d.g=-1;d.h=-1;d.color=-1;d.n=0;d.e=[];d.parentId=r?r.id:null;
d.m=t();b=document.getElementById("spiderbody");r=document.createElement("div");var h=document.createElement("div"),l=document.createElement("div"),k=document.createElement("div");g&256&&(h.style.visibility="hidden");g&4096?(c=a=0,e=spider_DesktopWidth(0),v=spider_DesktopHeight(0),h.style.zIndex=80,h.className="spiderwindow-background",g&=-49,$(window).resize(function(){u(d.id,0,0,spider_DesktopWidth(0),spider_DesktopHeight(0));spider.event.Send(7,d.id,0,0)})):g&512?(h.className="spiderwindow-background sbNoSelect",
g&=-49):(h.className="spiderwindow sbNoSelect",k.innerHTML=f,k.className="spiderwindow-title",l.appendChild(k),g&16&&(f=document.createElement("div"),f.className="spiderwindow-closebutton",$(f).on("click",function(){spider.event.Send(4,d.id,0,0)}),l.appendChild(f)));var m=document.createElement("div");m.className="spiderwindow-content";$(m).on({mouseover:function(a){var b=m.getBoundingClientRect();d.g=a.clientX-b.left|0;d.h=a.clientY-b.top|0},mouseout:function(){d.g=-1;d.h=-1},mousemove:function(a){var b=
m.getBoundingClientRect();d.g=a.clientX-b.left|0;d.h=a.clientY-b.top|0},click:function(){spider.event.Send(14,spider.window.b)},dblclick:function(){spider.event.Send(15,spider.window.b)},mouseup:function(a){3===a.which&&spider.event.Send(13,spider.window.b)}});var p=document.createElement("div");p.className="spiderwindow-menubar";var q=document.createElement("div"),n=document.createElement("div");f=document.createElement("div");d.window=r;d.element=h;d.contentFrame=m;d.content=n;d.menu=p;d.toolBar=
q;d.statusBar=f;d.title=l;d.j=k;d.c=g;s(d.id);r.appendChild(h);h.appendChild(l);h.appendChild(m);n.style.position="absolute";n.style.top="0px";n.style.left="0px";$(n).css("overflow","hidden");$(n).css("width","100%");$(n).css("height","100%");m.appendChild(p);m.appendChild(q);m.appendChild(n);m.appendChild(f);h.style.position="absolute";b.appendChild(r);g&32&&($(h).resizable({handles:"n, e, s, w, ne, se, sw, nw",containment:"body",ghost:!1,resize:function(){spider.event.Send(7,d.id,0,0)}}),$(".ui-icon-gripsmall-diagonal-se").css("background-image",
"url('')"),g&16&&($(h).resizable("option","minWidth",80),$(h).resizable("option","minHeight",40)));g&4608||$(h).draggable({cancel:".spiderwindow-closebutton, .spiderwindow-content",drag:function(){spider.event.Send(6,d.id,0,0)}});$(h).on("mousedown",function(){spider.window.b!=d.id&&(-1!=spider.window.b&&spider.event.Send(16,spider.window.b,0,0),document.activeElement.blur(),spider.event.Send(8,d.id,0,0),s(d.id))});d.AdjustContent=function(){$(n).css("top",$(p).height()+$(q).height())};u(d.id,a,c,
e,v);A(d.id,g);spider.window.gadgetList.init(n);spider.window.currentWindowId=d.id;return d.resultId};window.spider_AddKeyboardShortcut=function(b,a,c){var e;if(e=spider.window.a.Get(b))if(a=y(a))e.e[a]=c,t()==b&&Mousetrap.bindGlobal(a,z)};window.spider_RemoveKeyboardShortcut=function(b,a){var c;if(c=spider.window.a.Get(b))if(-1==a)c.e=[],k(c);else if(a=y(a))delete c.e[a],k(c)};window.spider_AddWindowTimer=function(b,a,c){var e;if(e=spider.window.a.Get(b))spider.window.i[e.id+"_"+a]=setInterval(function(){spider.event.Send(12,
e.id,a,0)},c)};window.spider_RemoveWindowTimer=function(b,a){var c;if(c=spider.window.a.Get(b))c=c.id+"_"+a,spider.window.i[c]&&(clearInterval(spider.window.i[c]),delete spider.window.i[c])};window.spider_HideWindow=function(b,a){var c;if(c=spider.window.a.Get(b))c.element.style.visibility=0===a?"visible":"hidden"};window.spider_GetWindowTitle=function(b){if(b=spider.window.a.Get(b)){if(b.c&4096)return document.title;if(b.j)return b.j.innerHTML}return""};window.spider_SetWindowTitle=function(b,a){var c;
if(c=spider.window.a.Get(b))c.c&4096?document.title=a:c.j&&(c.j.innerHTML=a)};window.spider_GetWindowData=function(b){var a;return(a=spider.window.a.Get(b))?a.n:0};window.spider_SetWindowData=function(b,a){var c;if(c=spider.window.a.Get(b))c.n=a};window.spider_GetActiveWindow=t;window.spider_SetActiveWindow=s;window.spider_GetWindowColor=function(b){var a;return(a=spider.window.a.Get(b))?a.color:-1};window.spider_SetWindowColor=function(b,a){var c;if(c=spider.window.a.Get(b))-1==a?c.color=-1:(c.color=
a,$(c.content).css("background-color",spider_helper_ColorToHtml(a)))};window.spider_StickyWindow=function(b,a){var c;if(c=spider.window.a.Get(b))c.q=a,s(c.id)};window.spider_ResizeWindow=u;window.spider_WindowBounds=function(b,a,c,e,k){var f;(f=spider.window.a.Get(b))&&f.c&32&&(-65535!=a&&$(f.element).resizable("option","minWidth",a+p(f)),-65535!=c&&$(f.element).resizable("option","minHeight",c+l(f)),-65535!=e&&$(f.element).resizable("option","maxWidth",e+p(f)),-65535!=k&&$(f.element).resizable("option",
"maxHeight",k+l(f)))};window.spider_WindowX=B;window.spider_WindowY=C;window.spider_WindowWidth=q;window.spider_WindowHeight=w;window.spider_WindowMouseX=function(b){var a;return(a=spider.window.a.Get(b))?a.g:0};window.spider_WindowMouseY=function(b){var a;return(a=spider.window.a.Get(b))?a.h:0};window.spider_WindowID=function(b){var a;return(a=spider.window.a.Get(b))?a:null};window.spider_IsWindow=function(b){return spider.window.a.Is(b)};window.spider_window_Center=A})();

function spider_InitList(){}function spider_NewList(a,b,c){var d=new spider_SysList;d.type=a;d.field=b;d.isNative=c;return d}
function spider_AddElement(a){var b=new a.type;a.nbElements++;if(a.current){b.previous=a.current;if(b.next=a.current.next)a.current.next.previous=b;a.current.next=b;a.current=b;a.index++}else a.first&&(a.first.previous=b),a.current=b,b.next=a.first,b.previous=null,a.index=0,a.isIndexInvalid=!1;a.current.previous||(a.first=a.current);a.current.next||(a.last=a.current);return b}
function spider_InsertElement(a){var b=new a.type;a.nbElements++;if(a.current){b.next=a.current;if(b.previous=a.current.previous)a.current.previous.next=b;a.current.previous=b;a.current=b}else a.first&&(a.first.previous=b),a.current=b,a.current.next=a.first,a.current.previous=null,a.index=0,a.isIndexInvalid=!1;a.current.previous||(a.first=a.current);a.current.next||(a.last=a.current);return b}
function spider_ListIndex(a){if(a.isIndexInvalid){var b=-1,c=a.current;if(c){for(;c;)b++,c=c.previous;a.index=b;a.isIndexInvalid=!1}return b}return a.index}function spider_LastElement(a){a.current=a.last;return a.current?(a.isIndexInvalid=!1,a.index=a.nbElements-1,a.current):0}
function spider_MergeLists(a,b,c){"undefined"===typeof c&&(c=2);if(a.first){3!=c||b.current&&b.current!=b.first?4!=c||b.current&&b.current!=b.last||(c=2):c=1;if(b.first)switch(c){case 3:a.first.previous=b.current.previous;b.current.previous.next=a.first;b.current.previous=a.last;a.last.next=b.current;b.isIndexInvalid=!0;break;case 4:b.current.next.previous=a.last;a.last.next=b.current.next;a.first.previous=b.current;b.current.next=a.first;break;case 1:a.last.next=b.first;b.first.previous=a.last;b.first=
a.first;b.isIndexInvalid=!0;break;default:a.first.previous=b.last,b.last.next=a.first,b.last=a.last}else b.first=a.first,b.last=a.last;b.nbElements+=a.nbElements;a.current=null;a.first=null;a.last=null;a.nbElements=0;a.isIndexInvalid=!0}}
function spider_MoveElement(a,b,c){function d(a){a.current.previous&&(a.current.previous.next=a.current.next);a.current.next&&(a.current.next.previous=a.current.previous);a.current==a.first&&(a.first=a.current.next);a.current==a.last&&(a.last=a.current.previous)}var e;if(e=a.current)switch(b){case 1:e!=a.first&&(d(a),e.previous=0,e.next=a.first,a.first.previous=e,a.first=e,a.index=0,a.isIndexInvalid=0);break;case 2:e!=a.last&&(d(a),e.previous=a.last,e.next=0,a.last.next=e,a.last=e,a.index=a.nbElements-
1,a.isIndexInvalid=0);break;case 3:c&&e!=c&&(d(a),e.next=c,e.previous=c.previous,c.previous=e,e.previous&&(e.previous.next=e),c==a.first&&(a.first=e),a.isIndexInvalid=1);break;case 4:c&&e!=c&&(d(a),e.previous=c,e.next=c.next,c.next=e,e.next&&(e.next.previous=e),c==a.last&&(a.last=e),a.isIndexInvalid=1)}}function spider_NextElement(a){var b;if(a.current){if(b=a.current.next)a.current=b,a.index++}else b=a.first,a.current=b,a.index=0;return b}
function spider_PushListPosition(a){a.stack||(a.stack=[]);a.stack.push(a.current)}function spider_PopListPosition(a){a.stack&&0<a.stack.length&&(a.isIndexInvalid=!0,a.current=a.stack.pop())}function spider_PreviousElement(a){var b;a.current&&(b=a.current.previous)&&(a.current=b,a.index--);return b}function spider_ResetList(a){a.isIndexInvalid=!0;a.current=null}function spider_ListSize(a){return a.nbElements}function spider_ChangeCurrentElement(a,b){a.isIndexInvalid=!0;a.current=b}
function spider_CopyList(a,b){spider_ClearList(b);var c,d;for(c=a.first;c;)d=spider_AddElement(b),c.copy(d),c=c.next}function spider_ClearList(a){a.current=null;a.first=null;a.last=null;a.nbElements=0;a.isIndexInvalid=!0}
function spider_DeleteElement(a,b){"undefined"===typeof b&&(b=0);if(a.current){a.nbElements--;var c=a.current.previous,d=a.current.next;c||d?c?(d?(c.next=d,d.previous=c,a.current=c):(c.next=null,a.current=c,a.last=c),a.index--):(d.previous=null,a.current=null,a.first=d,b&1?(a.current=d,a.index=0,a.isIndexInvalid=!1):(a.current=null,a.isIndexInvalid=!0)):(a.current=null,a.first=null,a.last=null,a.isIndexInvalid=!0)}}function spider_FreeList(a){a&&spider.ClearList(a)}
function spider_FirstElement(a){a.current=a.first;return a.current?(a.isIndexInvalid=!1,a.index=0,a.current):0}
function spider_SelectElement(a,b){var c,d;d=a.index;a.index=b;if(0>b||b>=a.nbElements)c=null;else if(a.isIndexInvalid)if(b<a.nbElements/2)for(c=a.first;c&&0<b;)c=c.next,b--;else for(c=a.last,b=a.nbElements-1-b;c&&0<b;)c=c.previous,b--;else if(b>d)if(c=a.current,b-d<a.nbElements-b)for(b-=d;c&&0<b;)c=c.next,b--;else for(c=a.last,b=a.nbElements-1-b;c&&0<b;)c=c.previous,b--;else if(d-b<b)for(c=a.current,b=d-b;c&&0<b;)c=c.previous,b--;else for(c=a.first;c&&0<b;)c=c.next,b--;if(a.current=c)return a.isIndexInvalid=
!1,c;a.isIndexInvalid=!0;return null}function spider_SplitList(a,b,c){var d,e=0;spider_ClearList(b);if(a.current){c?c=a.current.next:(c=a.current,a.current.previous?(a.current=a.current.previous,a.index--):(a.current=null,a.isIndexInvalid=1));if(c)for(d=a.last,c.previous&&(c.previous.next=null),a.first==c&&(a.first=null),a.last=c.previous,b.first=c,b.last=d,c.previous=null,d.next=null;c;)e++,c=c.next;a.nbElements-=e;b.nbElements=e}}
function spider_SwapElements(a,b,c){var d,e;b!=c&&(a.isIndexInvalid=1,d=c.next,e=c.previous,b.next==c?(c.next=b,c.previous=b.previous,b.next=d,b.previous=c,c.previous?c.previous.next=c:a.first=c,b.next?b.next.previous=b:a.last=b):b.previous==c?(c.next=b.next,c.previous=b,b.next=c,b.previous=e,c.next?c.next.previous=c:a.last=c,b.previous?b.previous.next=b:a.first=b):(b.next?b.next.previous=c:a.last=c,c.next=b.next,b.previous?b.previous.next=c:a.first=c,c.previous=b.previous,d?d.previous=b:a.last=b,
b.next=d,e?e.next=b:a.first=b,b.previous=e))};

spider.nbModules++;require(["paper-full.min"],function(){spider.nbLoadedModules++;SpiderMain()});spider.vectordrawing={output:null,isPathEmpty:1,sourceColor:0,states:[],path:null};function spider_ResetPath(){spider.vectordrawing.path=new paper.CompoundPath;spider.vectordrawing.isPathEmpty=1}function spider_SaveVectorState(){var a={};a.matrix=spider.vectordrawing.path.matrix.clone();a.sourceColor=spider.vectordrawing.sourceColor;spider.vectordrawing.states.push(a)}
function spider_RestoreVectorState(){var a=spider.vectordrawing.states.pop();spider.vectordrawing.path.matrix=a.matrix;spider.vectordrawing.sourceColor=a.sourceColor}function spider_StartVectorDrawing(a){if(a){spider.vectordrawing.output=a;var b=document.createElement("canvas");b.width=a.canvas.width;b.height=a.canvas.height;b.getContext("2d").drawImage(a.canvas,0,0);paper.clear();paper.setup(a.canvas);paper.settings.applyMatrix=!1;spider_ResetPath();spider_DrawVectorImage(b)}return a}
function spider_StopVectorDrawing(){spider_FillPath(0)}function spider_IsPathEmpty(){return spider.vectordrawing.isPathEmpty}function spider_vectordrawing_ConvertPoint(a,b,c,d){a=new paper.Point(a,b);return 0===c&&2===d?spider.vectordrawing.path.matrix.inverseTransform(a):2===c&&0===d?spider.vectordrawing.path.matrix.transform(a):{x:-1,y:-1}}function spider_ConvertCoordinateX(a,b,c,d){"undefined"===typeof c&&(c=2,d=1);return spider_vectordrawing_ConvertPoint(a,b,c,d).x}
function spider_ConvertCoordinateY(a,b,c,d){"undefined"===typeof c&&(c=2,d=1);return spider_vectordrawing_ConvertPoint(a,b,c,d).y}function spider_MovePathCursor(a,b,c){"undefined"===typeof c&&(c=0);c&1?spider.vectordrawing.path.moveBy(new paper.Point(a,b)):spider.vectordrawing.path.moveTo(new paper.Point(a,b))}
function spider_AddPathEllipse(a,b,c,d,e,g,f){"undefined"===typeof f&&(f=0);a=f&1?new paper.Point(spider_PathCursorX()+a-c,spider_PathCursorY()+b-d):new paper.Point(a-c,b-d);c=new paper.Rectangle(a,new paper.Size(2*c,2*d));c=new paper.Path.Ellipse(c);c.transform(spider.vectordrawing.path.matrix);spider.vectordrawing.path.addChild(c);spider.vectordrawing.isPathEmpty=0}
function spider_AddPathCurve(a,b,c,d,e,g,f){"undefined"===typeof f&&(f=0);f&1?spider.vectordrawing.path.cubicCurveBy(new paper.Point(a,b),new paper.Point(c,d),new paper.Point(e,g)):spider.vectordrawing.path.cubicCurveTo(new paper.Point(a,b),new paper.Point(c,d),new paper.Point(e,g))}
function spider_AddPathArc(a,b,c,d,e,g){"undefined"===typeof g&&(g=0);var f,k,l,h,m;f=spider_PathCursorX();k=spider_PathCursorY();g&1&&(a+=f,b+=k,c+=f,d+=k);g=a-f;l=b-k;c=a-c;d=b-d;h=(Math.atan2(l,g)-Math.atan2(d,c))/2;0===e||f==a&&k==b||0===h?spider_AddPathLine(a,b,0):(m=Math.abs(Math.tan(h)),f=e/m,h=Math.sqrt(g*g+l*l),f>h&&(f=h,e=h*m),k=Math.sqrt(c*c+d*d),f>k&&(f=k,e=k*m),g=a-g*f/h,l=b-l*f/h,c=a-c*f/k,d=b-d*f/k,m=a-g+(a-c),k=b-l+(b-d),h=Math.sqrt(m*m+k*k),f=Math.sqrt(f*f+e*e),a-=m*f/h,b-=k*f/h,
f=Math.atan2(l-b,g-a),c=Math.atan2(d-b,c-a),spider_AddPathLine(g,l,0),spider_AddPathCircle(a,b,e,180/Math.PI*f,180/Math.PI*c,2,!0))}
function spider_AddPathCircle(a,b,c,d,e,g,f){var k,l;"undefined"===typeof d&&(d=0);"undefined"===typeof e&&(e=359.9);"undefined"===typeof g&&(g=0);if(g&4){var h=e;e=d+360;d=h}var h=d*Math.PI/180,m=(e-d)*Math.PI/180;k=a+c*Math.cos(h);l=b+c*Math.sin(h);d=a+c*Math.cos(h+m/2);e=b+c*Math.sin(h+m/2);a+=c*Math.cos(h+m);b+=c*Math.sin(h+m);g&2?spider_AddPathLine(k,l,g):spider_MovePathCursor(k,l,g);g&1?spider.vectordrawing.path.arcBy(d,e,a,b):spider.vectordrawing.path.arcTo(d,e,a,b);f&&spider_MovePathCursor(a,
b)}function spider_AddPathLine(a,b,c){"undefined"===typeof c&&(c=0);c&1?spider.vectordrawing.path.lineBy(new paper.Point(a,b)):spider.vectordrawing.path.lineTo(new paper.Point(a,b));spider.vectordrawing.isPathEmpty=0}
function spider_AddPathBox(a,b,c,d,e){"undefined"===typeof e&&(e=0);e&2?(spider_AddPathLine(a,b,e),spider_AddPathLine(c,0,e|1),spider_AddPathLine(0,d,e|1),spider_AddPathLine(-c,0,e|1),spider_AddPathLine(0,-d,e|1)):(spider_MovePathCursor(a,b,e),spider_AddPathLine(c,0,e|1),spider_AddPathLine(0,d,e|1),spider_AddPathLine(-c,0,e|1),spider_ClosePath())}function spider_vectordrawing_ToPaperColor(a){return new paper.Color((a&255)/255,(a>>8&255)/255,(a>>16&255)/255,(a>>24&255)/255)}
function spider_VectorSourceColor(a){spider.vectordrawing.sourceColor=spider_vectordrawing_ToPaperColor(a)}function spider_VectorSourceLinearGradient(a,b,c,d){spider.vectordrawing.sourceColor={gradient:{stops:[]},origin:new paper.Point(a,b),destination:new paper.Point(c,d)}}function spider_VectorSourceCircularGradient(a,b,c){spider.vectordrawing.sourceColor={gradient:{stops:[],radial:!0},origin:new paper.Point(a,b),destination:new paper.Point(a+c,b)}}
function spider_VectorSourceGradientColor(a,b){spider.vectordrawing.sourceColor.gradient.stops.push([spider_vectordrawing_ToPaperColor(a),b])}function spider_ClosePath(){spider.vectordrawing.path.closePath(!0)}
function spider_VectorDrawing_GenericStrokePath(a,b){"undefined"===typeof b&&(b=0);spider.vectordrawing.path.strokeColor=spider.vectordrawing.sourceColor;spider.vectordrawing.path.strokeWidth=a;spider.vectordrawing.path.strokeCap=b&16?"round":b&32?"square":"butt";spider.vectordrawing.path.strokeJoin=b&64?"round":b&128?"bevel":"miter";paper.view.draw();if(0===(b&8)){var c=spider.vectordrawing.path.matrix;spider_ResetPath();spider.vectordrawing.path.matrix=c}}
function spider_StrokePath(a,b){"undefined"===typeof b&&(b=0);spider.vectordrawing.path.dashArray=null;spider_VectorDrawing_GenericStrokePath(a,b)}function spider_CustomDashPath(a,b,c,d){"undefined"===typeof c&&(c=0);b=b.array.slice(0);for(d=0;d<b.length;d+=2)0===b[d]&&(b[d]=a);spider.vectordrawing.path.dashArray=b;spider_VectorDrawing_GenericStrokePath(a,c)}
function spider_DashPath(a,b,c,d){"undefined"===typeof c&&(c=0);spider.vectordrawing.path.dashArray=[b,b];spider_VectorDrawing_GenericStrokePath(a,c)}function spider_DotPath(a,b,c,d){"undefined"===typeof c&&(c=0);spider.vectordrawing.path.dashArray=[1,b+a];spider_VectorDrawing_GenericStrokePath(a,c|16)}function spider_AddPathSegments(a,b){var c=new paper.Path(a);return spider.vectordrawing.path.addChild(c)}function spider_PathSegments(){return spider.vectordrawing.path.pathData}
function spider_FillPath(a){"undefined"===typeof a&&(a=0);spider.vectordrawing.path.fillColor=spider.vectordrawing.sourceColor;spider.vectordrawing.path.fillRule="evenodd";spider_VectorDrawing_GenericStrokePath(0,a)}
function spider_BeginVectorLayer(a){"undefined"===typeof a&&(a=255);spider.vectordrawing.previousLayer=paper.project.activeLayer;spider.vectordrawing.previousPath=spider.vectordrawing.path;spider.vectordrawing.layer=new paper.Layer;spider.vectordrawing.layer.activate();spider.vectordrawing.layer.opacity=a/255;spider_ResetPath();spider.vectordrawing.path.matrix=spider.vectordrawing.previousPath.matrix}
function spider_EndVectorLayer(){spider.vectordrawing.path=spider.vectordrawing.previousPath;spider.vectordrawing.previousLayer.activate()}function spider_FillVectorOutput(){spider_AddPathBox(0,0,spider_VectorOutputWidth(),spider_VectorOutputHeight());spider.vectordrawing.path.fillColor=spider.vectordrawing.sourceColor;spider.vectordrawing.path.strokeColor=null;spider_VectorDrawing_GenericStrokePath(0)}
function spider_IsInsidePath(a,b,c){return spider.vectordrawing.path.contains(new paper.Point(a,b))?1:0}function spider_IsInsideStroke(a,b,c){return spider.vectordrawing.path.hitTest(new paper.Point(a,b))?1:0}function spider_PathBoundsX(){return spider.vectordrawing.path.bounds.x}function spider_PathBoundsY(){return spider.vectordrawing.path.bounds.y}function spider_PathBoundsWidth(){return spider.vectordrawing.path.bounds.width}
function spider_PathBoundsHeight(){return spider.vectordrawing.path.bounds.height}function spider_PathLength(){return spider.vectordrawing.path.lastChild.length}function spider_PathPointX(a){return spider.vectordrawing.path.lastChild.getPointAt(a).x}function spider_PathPointY(a){return spider.vectordrawing.path.lastChild.getPointAt(a).y}function spider_PathPointAngle(a){return spider.vectordrawing.path.lastChild.getTangentAt(a).angle}
function spider_VectorFont(a,b){"undefined"===typeof b&&(b=-1);var c={};$.extend(c,a);-1!=b&&(c.size=b+"px");spider.vectordrawing.font=c}
function spider_drawing_CreateVectorText(a){var b=spider_PathCursorX(),c=spider_PathCursorY();spider.vectordrawing.font&&(c+=spider_Val(spider.vectordrawing.font.size)/1.2);b=new paper.PointText(new paper.Point(b,c));b.justification="left";b.fillColor=spider.vectordrawing.sourceColor;b.content=a;b.transform(spider.vectordrawing.path.matrix);spider.vectordrawing.font&&(spider.vectordrawing.font.flags&2&&(b.fontWeight="bold"),b.fontFamily=spider.vectordrawing.font.family,b.fontSize=spider.vectordrawing.font.size);
return b}function spider_DrawVectorText(a){spider_drawing_CreateVectorText(a)}function spider_VectorTextWidth(a,b){"undefined"===typeof b&&(b=0);if(b&4)return 0;var c=spider_drawing_CreateVectorText(a),d=c.bounds.width;c.remove();return d}function spider_VectorTextHeight(a,b){"undefined"===typeof b&&(b=0);if(b&4)return 0;var c=spider_drawing_CreateVectorText(a),d=c.bounds.height;b&8&&(d/=1.4);c.remove();return d}function spider_VectorUnit(){return spider.vectordrawing.output.outputUnit}
function spider_DrawVectorImage(a,b,c,d){"undefined"===typeof b&&(b=255);"undefined"===typeof c&&(c=-1);var e=new paper.Raster(a);-1==c&&(c=a.width,d=a.height);e.opacity=b/255;e.size=new paper.Size(c,d);e.position=new paper.Point(spider_PathCursorX()+c/2,spider_PathCursorY()+d/2);e.transform(spider.vectordrawing.path.matrix);spider_FillPath()}function spider_PathCursorX(){return spider.vectordrawing.path.lastChild?spider.vectordrawing.path.lastChild.position.x:0}
function spider_PathCursorY(){return spider.vectordrawing.path.lastChild?spider.vectordrawing.path.lastChild.position.y:0}function spider_FlipCoordinatesX(a,b){spider.vectordrawing.path.scale(-1,1)}function spider_ResetCoordinates(){spider.vectordrawing.path.matrix.reset()}function spider_RotateCoordinates(a,b,c,d){spider.vectordrawing.path.rotate(c,new paper.Point(a,b))}function spider_ScaleCoordinates(a,b,c){spider.vectordrawing.path.scale(a,b)}
function spider_TranslateCoordinates(a,b,c){spider.vectordrawing.path.translate(new paper.Point(a,b))}function spider_SkewCoordinates(a,b,c){spider.vectordrawing.path.skew(a,b)}function spider_VectorOutputWidth(){return spider.vectordrawing.path.view.viewSize.width}function spider_VectorOutputHeight(){return spider.vectordrawing.path.view.viewSize.height}function spider_VectorResolutionX(){return spider.vectordrawing.path.view.resolution}
function spider_VectorResolutionY(){return spider.vectordrawing.path.view.resolution};

var dijit,dojox;
(function(){function E(e){var f;if(-1==e)spider.gadget.objects.CleanAll();else if(f=spider.gadget.objects.Get(e))f.div.parentNode&&f.div.parentNode.removeChild(f.div),f.gadget instanceof dijit._WidgetBase&&f.gadget.destroy(),spider.gadget.objects.Remove(e)}function s(e,f,h,l,n){e.style.position="absolute";e.style.left=f+"px";e.style.top=h+"px";e.style.width=l+"px";e.style.height=n+"px"}function r(e,f){e.isDisabled||spider.event.Send(1,e.windowId,e.id,f)}function w(e,f,h,l,n){e.domNode.style.position="absolute";
e.domNode.style.left=f+"px";e.domNode.style.top=h+"px";e.domNode.style.width=l+"px";e.domNode.style.height=n+"px"}function u(e){var f=$(e).cssValue("paddingLeft")+$(e).cssValue("paddingRight")+$(e).cssValue("borderLeftWidth")+$(e).cssValue("borderRightWidth");e=$(e).cssValue("paddingTop")+$(e).cssValue("paddingBottom")+$(e).cssValue("borderTopWidth")+$(e).cssValue("borderBottomWidth");return{x:f,y:e}}function x(e,f,h){var l=spider.gadget.context;f||(e=$(spider_WindowID(e.windowId).contentFrame),f=
$(e).css("fontSize")+" "+$(e).css("fontFamily"));l.font=f;e=spider_2ddrawing_getTextHeight(l.font);e=e.ascent+e.descent;return{width:Math.ceil(l.measureText(h).width),height:e}}function A(e,f,h){var l;$(e).find(f).each(function(){if(-1<$(this).attr("class").search(h))return l=this,!1});return l}function C(e,f,h,l){l?($(f).css("background-color",""),$(h).css("color","")):(e.backColor&&-1!=e.backColor&&e.SetColor(2,e.backColor),e.frontColor&&-1!=e.frontColor&&e.SetColor(1,e.frontColor));e.gadget.set("disabled",
l?!0:!1)}function B(e,f,h,l,n){switch(l){case 2:e.gadget.get("disabled")||$(f).css("background-color",spider_helper_ColorToHtml(n));e.backColor=n;break;case 1:e.gadget.get("disabled")||$(h).css("color",spider_helper_ColorToHtml(n)),e.frontColor=n}}function F(e){e.gadget instanceof dijit._WidgetBase&&e.gadget.set("_onChangeActive",!1)}function G(e){e.gadget instanceof dijit._WidgetBase&&e.gadget.set("_onChangeActive",!0)}function H(e,f){var h;if(h=spider.gadget.objects.Get(e))F(h),h.SetText&&h.SetText(f),
G(h)}function I(e,f){null===f&&(f=0);var h;if(h=spider.gadget.objects.Get(e))if(h.GadgetHeight)h.GadgetHeight(f);else if(1!=f)return $(h.div).height();return 0}function J(e,f){null===f&&(f=0);var h;if(h=spider.gadget.objects.Get(e))if(h.GadgetWidth)h.GadgetWidth(f);else if(1!=f)return $(h.div).width();return 0}function K(e){var f;return(f=spider.gadget.objects.Get(e))?parseInt($(f.div).css("left"),10):null}function L(e){var f;return(f=spider.gadget.objects.Get(e))?parseInt($(f.div).css("top"),10):
null}spider.nbModules++;require("dijit/dijit dojo/store/Memory dojo/store/Observable dojo/_base/declare dojo/aspect dojo/_base/lang dgrid/OnDemandGrid dgrid/Selection dgrid/Keyboard dgrid/extensions/ColumnResizer dstore/Memory dstore/Trackable cbtree/store/Hierarchy dijit/tree/ObjectStoreModel cbtree/model/ForestStoreModel dijit/focus dijit/registry dijit/form/SimpleTextarea dijit/form/Button dijit/form/ToggleButton dijit/form/RadioButton dijit/form/ComboBox dijit/form/Select dijit/form/CheckBox dijit/form/Textarea dijit/form/SimpleTextarea dijit/form/NumberTextBox dijit/form/HorizontalSlider dijit/form/VerticalSlider dijit/ProgressBar dijit/Tooltip dijit/layout/TabContainer dijit/form/NumberSpinner dijit/form/DateTextBox dijit/Tree dijit/tree/ObjectStoreModel dijit/Calendar dijit/Toolbar dijit/ToolbarSeparator dijit/Menu dijit/MenuItem dijit/MenuSeparator dijit/DropDownMenu dijit/MenuBar dijit/PopupMenuBarItem dijit/PopupMenuItem dijit/layout/ContentPane dijit/layout/BorderContainer dojo/dom-style dojo/data/ItemFileWriteStore dgrid/Grid dgrid/extensions/ColumnReorder dojo/domReady!".split(" "),
function(e,f,h,l,n,m,c,d,b,g,a,k,q,p,v,t,y,r){spider.nbLoadedModules++;dijit=e;spider.StoreMemory=f;spider.StoreObservable=h;spider.DojoBaseDeclare=l;spider.DojoAspect=n;spider.DojoBaseLang=m;spider.DGridOnDemandGrid=c;spider.DGridSelection=d;spider.DGridKeyboard=b;spider.DGridColumnResizer=g;spider.DStoreMemory=a;spider.DStoreTrackable=k;spider.CBTreeStoreHierarchy=q;spider.TreeObjectStoreModel=p;spider.CBTreeModelForestStoreModel=v;spider.DigitFocus=t;spider.DigitRegistry=y;spider.DojoDomStyle=
r;SpiderMain()});spider.gadget={defaultFont:null,objects:new spider.object(E),optionGroupCount:0,lastType:null,register:function(e,f,h,l){this.lastType=f;e.type=f;e.div=h;e.gadget=l;e.windowId=spider.window.currentWindowId;e.userData=0;l.spiderId=e.id;spider.window.gadgetList.get().appendChild(h)}};window.spider_InitGadget=function(){};window.spider_AddGadgetColumn=function(e,f,h,l){var n;(n=spider.gadget.objects.Get(e))&&n.AddColumn&&n.AddColumn(f,h,l)};window.spider_AddGadgetItem=function(e,f,h,
l,n){"undefined"===typeof l&&(l=null);"undefined"===typeof n&&(n=0);var m;(m=spider.gadget.objects.Get(e))&&m.AddItem&&m.AddItem(f,h,l,n)};window.spider_BindGadgetEvent=function(e,f,h){"undefined"===typeof h&&(h=-1);var l;(l=spider.gadget.objects.Get(e))&&spider_BindEvent(1,f,l.windowId,l.id,h)};window.spider_ButtonGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);var d=spider.gadget.objects.Allocate(e),b=new (c&16?dijit.form.ToggleButton:dijit.form.Button)({label:m,showLabel:!0,onClick:function(){r(d,
0)}}),g=document.createElement("div");g.appendChild(b.domNode);c&16?(b.attr("iconClass","dijitCheckBoxIcon"),$(b.focusNode).css("display","table-cell")):$(b.containerNode).css("display","table-cell");c&8&&$(b.containerNode).css("white-space","normal");c&2?($(b.containerNode).css("text-align","left"),$(b.containerNode).css("padding-left","5px")):c&1&&($(b.containerNode).css("text-align","right"),$(b.containerNode).css("padding-right","5px"));d.GetText=function(){return b.get("label")};d.SetText=function(a){b.set("label",
a)};d.GetState=function(){return c&16?b.get("checked")?1:0:0};d.SetState=function(a){c&16&&b.set("checked",a)};d.GetRequiredSize=function(){var a=$(g).css("fontSize")+" "+$(g).css("fontFamily"),a=x(d,a,d.GetText());a.width+=16;a.height+=8;return a};d.Resize=function(a,d,e,p){s(g,a,d,e,p);a=A(g,"span","dijitButtonNode");a=u(a);$(b.titleNode).width(e-a.x);$(b.titleNode).height(p-a.y);0===(c&16)&&($(b.containerNode).width(e-a.x),$(b.containerNode).height(p-a.y))};spider.gadget.register(d,1,g,b);d.Resize(f,
h,l,n);return d.resultId};window.spider_ButtonImageGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);var d=spider.gadget.objects.Allocate(e),b=new (c&16?dijit.form.ToggleButton:dijit.form.Button)({label:"",showLabel:!1,iconClass:spider.image.GetCSS(m),onClick:function(){r(d,0)}}),g=document.createElement("div");g.appendChild(b.domNode);$(b.titleNode).css("display","table-cell");d.GetAttribute=function(a){switch(a){case 1:return null;case 2:return null}return 0};d.SetAttribute=function(a,
c){switch(a){case 1:b.attr("iconClass",spider.image.GetCSS(c))}};d.Resize=function(a,c,d,e){s(g,a,c,d,e);a=A(g,"span","dijitButtonNode");a=u(a);$(b.titleNode).width(d-a.x);$(b.titleNode).height(e-a.y)};spider.gadget.register(d,19,g,b);d.Resize(f,h,l,n);return d.resultId};window.spider_CalendarGadget=function(e,f,h,l,n,m,c){function d(a){return new Date(spider_Year(a),spider_Month(a)-1,spider_Day(a))}function b(a){return spider_Date(a.getFullYear(),a.getMonth()+1,a.getDate(),0,0,0)}"undefined"===typeof m&&
(m=spider_Date());"undefined"===typeof c&&(c=0);var g=spider.gadget.objects.Allocate(e),a=new dijit.Calendar({constraints:{min:new Date(1970,0,0),max:new Date(2035,0,0)},isDisabledDate:function(b){if(a&&!g.isDisabled){var c=a.attr("constraints");return!(b>=c.min&&b<=c.max)}return!0},onChange:function(){r(g,9)}}),k=document.createElement("div");k.appendChild(a.domNode);g.Disable=function(b){g.isDisabled=b;a._populateGrid()};g.GetState=function(){var c=a.get("value");return b(c)};g.SetState=function(b){a.set("value",
d(b))};g.GetAttribute=function(c){switch(c){case 1:return b(a.attr("constraints").min);case 2:return b(a.attr("constraints").max)}return 0};g.SetAttribute=function(b,c){var g=a.attr("constraints");switch(b){case 1:g.min=d(c);a.attr("constraints",g);a._populateGrid();break;case 2:g.max=d(c),a.attr("constraints",g),a._populateGrid()}};g.GetRequiredSize=function(){return{width:180,height:230}};g.Resize=function(b,c,d,g){var e=u(a.domNode);s(k,b,c,d,g);w(a,0,0,d-e.x,g-e.y)};spider.gadget.register(g,2,
k,a);g.Resize(f,h,l,n);g.SetState(m);a._populateGrid();return g.resultId};window.spider_CanvasGadget=function(e,f,h,l,n,m){"undefined"===typeof m&&(m=0);var c=spider.gadget.objects.Allocate(e),d=document.createElement("canvas");c.canvas=d;c.mouseX=0;c.mouseY=0;c.mouseWheelDelta=0;c.buttons=0;c.lastKey=0;c.lastInput=0;c.modifiers=0;m&4&&d.setAttribute("tabindex","0");$(d).on({click:function(){r(c,0)},dblclick:function(){r(c,2)},mouseover:function(b){r(c,65537)},mouseout:function(b){r(c,65538)},mousemove:function(b){var a=
d.getBoundingClientRect();c.mouseX=b.clientX-a.left;c.mouseY=b.clientY-a.top;r(c,65539)},mousedown:function(b){var a;0===b.button?(a=65540,c.buttons|=1):1===b.button?(a=65544,c.buttons|=4):2===b.button&&(a=65542,c.buttons|=2);r(c,a);if(1===b.button)return!1},mouseup:function(b){var a;0===b.button?(a=65541,c.buttons&=-2):1===b.button?(a=65545,c.buttons&=-5):2===b.button&&(r(c,1),2===b.originalEvent.detail&&r(c,3),a=65543,c.buttons&=-3);r(c,a)},focus:function(){r(c,7)},blur:function(){r(c,8)},wheel:function(b){b=
b.originalEvent;c.mouseWheelDelta=0>b.deltaY?1:-1;r(c,65546);return!1},keydown:function(b){c.lastKey=b.keyCode;16==b.keyCode&&(c.modifiers|=1);17==b.keyCode&&(c.modifiers|=4);18==b.keyCode&&(c.modifiers|=2);r(c,65547)},keyup:function(b){c.lastKey=b.keyCode;16==b.keyCode&&(c.modifiers&=-2);17==b.keyCode&&(c.modifiers&=-5);18==b.keyCode&&(c.modifiers&=-3);r(c,65548)},keypress:function(b){c.lastInput=b.which;c.lastInput&&r(c,65549)}});var b=document.createElement("div");b.appendChild(d);m&1&&$(b).addClass("sbCanvasBorder");
c.Disable=function(b){};c.GetAttribute=function(b){switch(b){case 1:return d;case 4:return c.buttons;case 2:return c.mouseX;case 3:return c.mouseY;case 8:return c.mouseWheelDelta;case 5:return c.lastKey;case 9:return c.lastInput;case 6:return c.modifiers}};c.SetAttribute=function(b,a){switch(b){case 7:switch(c.cursor=a,a){case 0:d.style.cursor="default";c.cursor=-1;break;case 3:d.style.cursor="pointer";break;case 1:d.style.cursor="crosshair";break;case 2:d.style.cursor="text";break;case 4:d.style.cursor=
"wait";break;case 5:d.style.cursor="no-drop";break;case 6:d.style.cursor="move";break;case 7:d.style.cursor="w-resize";break;case 6:d.style.cursor="s-resize";break;case 8:d.style.cursor="se-resize";break;case 9:d.style.cursor="sw-resize";break;case 10:d.style.cursor="none"}}};c.Resize=function(c,a,e,f){var p=u(b);if(d.width!=e-p.x||d.height!=f-p.y)if(d.width=e-p.x,d.height=f-p.y,0===(m&16)){var v=d.getContext("2d");v.fillStyle="#FFF";v.fillRect(0,0,d.width,d.height)}s(b,c,a,e-p.x,f-p.y)};spider.gadget.register(c,
33,b,d);c.Resize(f,h,l,n);return c.resultId};window.spider_CanvasOutput=function(e){var f;return(f=spider.gadget.objects.Get(e))?{gadget:f,canvas:f.canvas,context:f.canvas.getContext("2d"),stopDrawingCallback:null}:0};window.spider_CanvasVectorOutput=function(e,f){"undefined"===typeof f&&(f=1);var h;return(h=spider.gadget.objects.Get(e))?{gadget:h,canvas:h.canvas,inputUnit:1,outputUnit:f,stopDrawingCallback:null}:0};window.spider_CheckBoxGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);
var d=spider.gadget.objects.Allocate(e);e="spidercheckbox_"+d.id;var b=new dijit.form.CheckBox({id:e,onClick:function(){r(d,0)}}),g=document.createElement("div"),a=document.createElement("span");a.className="sbVerticalCenter";g.appendChild(a);a.appendChild(b.domNode);var k=put(a,"label",{htmlFor:e});$(k).css("padding-left","5px");$(k).css("display","inline-block");b.label=k;c&1?$(k).css("text-align","right"):c&2&&$(k).css("text-align","center");d.Disable=function(a){$(k).css("color",a?"gray":"");
b.set("disabled",a?!0:!1)};d.GetState=function(){return b.get("checked")?1:0};d.SetState=function(a){-1==a?b.set("value","mixed"):b.set("checked",a)};d.GetText=function(){return k.innerHTML};d.SetText=function(b){k.innerHTML=b;""===b?a.removeChild(k):a.appendChild(k)};d.GetRequiredSize=function(){var a=$(g).css("fontSize")+" "+$(g).css("fontFamily"),a=x(d,a,d.GetText());a.width+=28;a.height+=6;return a};d.Resize=function(c,d,e,f){s(g,c,d,e,f);$(a).width(e);$(a).height(f);$(k).width(e-$(b.domNode).outerWidth(!0)-
5)};spider.gadget.register(d,4,g,b);b.startup();d.SetText(m);d.Resize(f,h,l,n);return d.resultId};window.spider_ClearGadgetItems=function(e){var f;(f=spider.gadget.objects.Get(e))&&f.ClearItems&&f.ClearItems()};window.spider_CloseGadgetList=function(){spider.window.gadgetList.pop()};window.spider_ComboBoxGadget=function(e,f,h,l,n,m){"undefined"===typeof m&&(m=0);var c=spider.gadget.objects.Allocate(e),d=0,b=spider_NewList(function(){return{id:null,text:null}}),g=new spider.StoreMemory,a=new dijit.form.ComboBox({store:g,
onChange:function(){r(c,9)},onFocus:function(){spider.DigitFocus.focus(a.focusNode);r(c,7)},onBlur:function(){r(c,8)}});m&1||$(a.focusNode).attr("readOnly",!0);var k=document.createElement("div");k.appendChild(a.domNode);$(a._buttonNode).css("height","100%");var q=-1;a.watch("item",function(a,b,c){c&&(q=c.id)});c.GetState=function(){return q};c.SetState=function(b){a.set("value",g.get(b).name);q=b};c.GetText=function(){return a.get("value")};c.SetText=function(b){a.set("value",b);q=-1};c.AddItem=
function(a,c,e,k){-1==a&&(a=spider_ListSize(b));0>=a?spider_ResetList(b):spider_SelectElement(b,a-1);a=spider_AddElement(b);a.id=d;a.text=c;a.imageId=e;g.add({name:"",id:d});c=spider_ListIndex(b);do g.put({name:a.text},g.get(c)),c++;while(a=spider_NextElement(b));d++};c.ClearItems=function(){spider_ClearList(b);g=new spider.StoreMemory;a.set("store",g);d=0};c.CountItems=function(){return spider_ListSize(b)};c.SetColor=function(b,d){B(c,a.focusNode.parentNode,a.focusNode,b,d)};c.GetItemData=function(a){var c;
return(c=spider_SelectElement(b,a))?c.data?c.data:0:0};c.SetItemData=function(a,c){var d;if(d=spider_SelectElement(b,a))d.data=c};c.GetItemText=function(a,c){var d;return(d=spider_SelectElement(b,a))?d.text:""};c.SetItemText=function(a,c,d){if(d=spider_SelectElement(b,a))d.text=c,a=g.get(a),a.name=c,g.put(a)};c.SetActive=function(){spider.DigitFocus.focus(a.focusNode)};c.GetRequiredSize=function(){var a=$(k).css("fontSize")+" "+$(k).css("fontFamily"),a=x(c,a,"Hg");a.width=50;a.height+=5;return a};
c.Resize=function(b,c,d,e){s(k,b,c,d,e);b=u(a.domNode);w(a,0,0,d-b.x,e-b.y);"claro"==spider.gadgetTheme?$(a.focusNode).height(e-b.y-2):$(a.focusNode).height(e-b.y)};spider.gadget.register(c,8,k,a);c.Resize(f,h,l,n);return c.resultId};window.spider_ContainerGadget=function(e,f,h,l,n,m){var c=spider.gadget.objects.Allocate(e);"undefined"===typeof m&&(m=0);var d=new dijit.layout.ContentPane({style:"overflow: hidden; padding: 0px;",content:""}),b=document.createElement("div");d.placeAt(b);m&1?$(b).addClass("sbContainerBorder"):
m&4?$(b).addClass("sbContainerBorderSingle"):m&2?$(b).addClass("sbContainerBorderRaised"):m&8&&$(b).addClass("sbContainerBorderDouble");c.GetColor=function(b){return 2==b?c.backColor?c.backColor:-1:-1};c.SetColor=function(d,a){2==d&&($(b).css("background-color",spider_helper_ColorToHtml(a)),c.backColor=a)};c.Resize=function(c,a,e,f){var h=u(b);s(b,c,a,e-h.x,f-h.y);w(d,0,0,e-h.x,f-h.y);d.resize()};spider.DojoAspect.after(d,"resize",function(b,a){r(c,0)});spider.gadget.register(c,11,b,d);spider.window.gadgetList.push(d.domNode);
c.Resize(f,h,l,n);return c.resultId};window.spider_CountGadgetItems=function(e){var f;return(f=spider.gadget.objects.Get(e))&&f.CountItems?f.CountItems():0};window.spider_DateGadget=function(e,f,h,l,n,m,c,d){function b(a){a=spider_ReplaceString(a,"%yyyy","yyyy");a=spider_ReplaceString(a,"%mm","MM");return a=spider_ReplaceString(a,"%dd","dd")}function g(a){return new Date(spider_Year(a),spider_Month(a)-1,spider_Day(a))}function a(a){return spider_Date(a.getFullYear(),a.getMonth()+1,a.getDate(),0,0,
0)}"undefined"===typeof m&&(m="%yyyy/%mm/%dd");"undefined"===typeof c&&(c=spider_Date());"undefined"===typeof d&&(d=0);var k=spider.gadget.objects.Allocate(e),q,p=new dijit.form.DateTextBox({constraints:{min:new Date(1970,0,0),max:new Date(2035,0,0),datePattern:b(m)},onChange:function(){r(k,9)}});$(p._buttonNode).css("height","100%");var v=document.createElement("div");d&2&&(q=new dijit.form.CheckBox({onClick:function(){debug("ok");q.get("checked")?k.SetState(p.get("value")):k.SetState(0)}}),v.appendChild(q.domNode),
$(p.domNode).css("margin-left",5));v.appendChild(p.domNode);k.Disable=function(a){C(k,p.focusNode.parentNode,p.focusNode,a)};k.GetText=function(){return d&2&&!1===q.get("checked")?"":p.get("displayedValue")};k.SetText=function(a){var c=p.get("value");p.attr("constraints").datePattern=b(a);p.set("value",c)};k.GetState=function(){return d&2&&!1===q.get("checked")?0:a(p.get("value"))};k.SetState=function(a){if(d&2){var b=0===a;k.Disable(b);q.set("checked",!b)}0!==(d&2)&&0===a||p.set("value",g(a))};k.GetAttribute=
function(b){switch(b){case 1:return a(p.attr("constraints").min);case 2:return a(p.attr("constraints").max)}return 0};k.SetAttribute=function(a,b){var c=p.attr("constraints");switch(a){case 1:c.min=g(b);p.attr("constraints",c);break;case 2:c.max=g(b),p.attr("constraints",c)}};k.GetColor=function(a){switch(a){case 2:return k.backColor?k.backColor:-1;case 1:return k.frontColor?k.frontColor:-1}return-1};k.SetColor=function(a,b){B(k,p.focusNode.parentNode,p.focusNode,a,b)};k.GetRequiredSize=function(){var a=
$(v).css("fontSize")+" "+$(v).css("fontFamily"),a=x(k,a,"Hg");a.width=60;a.height+=5;return a};k.Resize=function(a,b,c,d){s(v,a,b,c,d);a=u(p._popupStateNode);w(p,0,0,c-a.x,d-a.y);$(p.domNode).height(d-a.y);"claro"==spider.gadgetTheme?$(p.focusNode).height(d-a.y-2):$(p.focusNode).height(d-a.y)};spider.gadget.register(k,2,v,p);k.SetState(c);k.Resize(f,h,l,n);return k.resultId};window.spider_DisableGadget=function(e,f){var h;if(h=spider.gadget.objects.Get(e))h.Disable?h.Disable(f):h.gadget.set("disabled",
f?!0:!1)};window.spider_EditorGadget=function(e,f,h,l,n,m){"undefined"===typeof m&&(m=0);var c=spider.gadget.objects.Allocate(e),d=new dijit.form.SimpleTextarea({style:"overflow: auto; resize: none;",intermediateChanges:!0,onChange:function(){r(c,9)},onFocus:function(){spider.DigitFocus.focus(d.focusNode);r(c,7)},onBlur:function(){r(c,8)}});e=d.domNode;var b=document.createElement("div");b.appendChild(e);c.editor=d;m&2||$(d.focusNode).attr("wrap","off");m&1&&$(d.focusNode).attr("readOnly",!0);c.Disable=
function(b){C(c,d.focusNode,d.focusNode,b)};c.GetText=function(){return d.get("value")};c.SetText=function(b){d.set("value",b)};c.GetAttribute=function(b){switch(b){case 2:return"off"==$(d.focusNode).attr("wrap")?0:1;case 1:return $(d.focusNode).attr("readOnly")?1:0}return 0};c.SetAttribute=function(b,a){switch(b){case 2:$(d.focusNode).attr("wrap",a?"":"off");break;case 1:$(d.focusNode).attr("readOnly",a?!0:!1)}};c.GetColor=function(b){switch(b){case 2:return c.backColor?c.backColor:-1;case 1:return c.frontColor?
c.frontColor:-1}return-1};c.SetColor=function(b,a){B(c,d.focusNode,d.focusNode,b,a)};c.SetActive=function(){spider.DigitFocus.focus(d.focusNode)};c.SetGadgetFont=function(b){$(d.focusNode).css("fontFamily",b.family);$(d.focusNode).css("fontSize",b.size)};c.Resize=function(c,a,e,f){s(b,c,a,e,f);c=u(d.focusNode);w(d,0,0,e-c.x,f-c.y)};spider.gadget.register(c,22,b,d);c.Resize(f,h,l,n);return c.resultId};window.spider_FrameGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);e=spider.gadget.objects.Allocate(e);
var d=document.createElement("fieldset");$(d).css("margin",0);$(d).addClass("sbFrameBorder");var b=document.createElement("div");b.appendChild(d);var g=document.createElement("legend");e.legend=g;e.GetText=function(){return g.innerHTML};e.SetText=function(a){g.innerHTML=a;""===a?d.hasChildNodes()&&d.removeChild(g):d.appendChild(g)};e.GetRequiredSize=function(){var a={width:0,height:0};$.each($(b).children(),function(b,c){a.width+=$(c).outerWidth(!0);a.height+=$(c).outerHeight(!0)});var c=u(d);a.width-=
c.x;a.height-=c.y;return a};e.Resize=function(a,c,e,f){s(b,a,c,e,f);a=u(d);s(d,0,0,e-a.x,f-a.y)};e.SetText(m);spider.gadget.register(e,7,b,d);e.Resize(f,h,l,n);return e.resultId};window.spider_FreeGadget=E;window.spider_GadgetHeight=I;window.spider_GadgetID=function(e){var f;return(f=spider.gadget.objects.Get(e))?f:null};window.spider_GadgetToolTip=function(e,f){var h;if(h=spider.gadget.objects.Get(e))h.tooltip||(h.tooltip=new dijit.Tooltip({connectId:h.div})),h.tooltip.set("label",f)};window.spider_GadgetType=
function(e){if(e=spider.gadget.objects.Get(e))return e.type};window.spider_GadgetWidth=J;window.spider_GadgetX=K;window.spider_GadgetY=L;window.spider_GetActiveGadget=function(){var e=-1,f;f=spider.DigitFocus.curNode;for(var h;!h&&f;)f.hasOwnProperty("spiderId")?h=f:(h=spider.DigitRegistry.byNode(f),f=f.parentElement?f.parentElement:null,h&&spider_FindString(h.id,"_tablist")&&(h=null));(f=h)&&f.hasOwnProperty("spiderId")&&(e=f.spiderId);return e};window.spider_GetGadgetAttribute=function(e,f){var h;
return(h=spider.gadget.objects.Get(e))&&h.GetAttribute?h.GetAttribute(f):0};window.spider_GetGadgetColor=function(e,f){var h;return(h=spider.gadget.objects.Get(e))&&h.GetColor?h.GetColor(f):0};window.spider_GetGadgetData=function(e){var f;return(f=spider.gadget.objects.Get(e))?f.userData:0};window.spider_GetGadgetItemAttribute=function(e,f,h,l){"undefined"===typeof l&&(l=-1);var n;return(n=spider.gadget.objects.Get(e))&&n.GetItemAttribute?n.GetItemAttribute(f,h,l):0};window.spider_GetGadgetItemData=
function(e,f){var h;return(h=spider.gadget.objects.Get(e))&&h.GetItemData?h.GetItemData(f):0};window.spider_GetGadgetItemState=function(e,f){var h;return(h=spider.gadget.objects.Get(e))&&h.GetItemState?h.GetItemState(f):0};window.spider_GetGadgetItemText=function(e,f,h){"undefined"===typeof h&&(h=-1);var l;return(l=spider.gadget.objects.Get(e))&&l.GetItemText?l.GetItemText(f,h):""};window.spider_GetGadgetState=function(e){var f;return(f=spider.gadget.objects.Get(e))&&f.GetState?f.GetState():0};window.spider_GetGadgetText=
function(e){var f;return(f=spider.gadget.objects.Get(e))&&f.GetText?f.GetText():""};window.spider_HideGadget=function(e,f){var h;(h=spider.gadget.objects.Get(e))&&$(h.div).css("display",f?"none":"block")};window.spider_HyperLinkGadget=function(e,f,h,l,n,m,c,d){"undefined"===typeof d&&(d=0);var b=spider.gadget.objects.Allocate(e),g=document.createElement("a");g.innerHTML=m;g.href="";0===(d&1)&&$(g).css("text-decoration","none");$(g).on("click",function(a){a.preventDefault();a.stopPropagation();r(b,
0)});var a=document.createElement("div"),k=document.createElement("span");k.className="sbVerticalCenter";a.appendChild(k);k.appendChild(g);b.GetText=function(){return g.innerHTML};b.SetText=function(a){g.innerHTML=a};b.GetColor=function(a){switch(a){case 2:return b.backColor?b.backColor:-1;case 1:return b.frontColor?b.frontColor:-1}return-1};b.SetColor=function(c,d){switch(c){case 2:$(a).css("background-color",spider_helper_ColorToHtml(d));b.backColor=d;break;case 1:g.style.color=spider_helper_ColorToHtml(d),
b.frontColor=d}};b.GetRequiredSize=function(){var c=$(a).css("fontSize")+" "+$(a).css("fontFamily"),c=x(b,c,b.GetText());c.width+=16;c.height+=8;return c};b.Resize=function(b,c,d,e){s(a,b,c,d,e);$(k).width(d);$(k).height(e)};spider.gadget.register(b,10,a,g);b.SetColor(c);b.Resize(f,h,l,n);return b.resultId};window.spider_ImageGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);var d=spider.gadget.objects.Allocate(e),b=document.createElement("div"),g=document.createElement("canvas");put(b,
g);c&2&&$(b).addClass("sbImageBorder");$(b).on({click:function(){r(d,0)},dblclick:function(){r(d,2)},mouseup:function(a){3===a.which&&1===a.originalEvent.detail&&r(d,1)}});d.GetState=function(){return d.image};d.SetState=function(a){g.width!=a.width&&(g.width=a.width);g.height!=a.height&&(g.height=a.height);g.getContext("2d").drawImage(a,0,0);d.image=a};d.Resize=function(a,c,d,e){var f=u(b);s(b,a,c,d-f.x,e-f.y)};spider.gadget.register(d,9,b,b);d.Resize(f,h,l,n);d.SetState(m);return d.resultId};window.spider_IsGadget=
function(e){var f;return(f=spider.gadget.objects.Get(e))&&f.div.parentNode?1:0};window.spider_ListIconGadget=function(e,f,h,l,n,m,c,d){function b(a,b){for(var c=a;c<=b;c++)p.put({id:c})}function g(){for(var a=0;a<y.length;a++)y[a].field=""+a,y[a].index=a;t.set("columns",y);t.resize()}"undefined"===typeof d&&(d=0);var a=spider.gadget.objects.Allocate(e),k=spider_NewList(function(){return{id:null,text:null}}),q=spider.DojoBaseDeclare([spider.DStoreMemory,spider.DStoreTrackable]),p=new q,v=d,t,y=[],
D="single",z=document.createElement("div");z.spiderId=a.id;e=spider.DojoBaseDeclare([spider.DGridOnDemandGrid,spider.DGridKeyboard,spider.DGridSelection,spider.DGridColumnResizer]);d&2&&(D="extended");t=new e({showHeader:!0,collection:p,selectionMode:D});t.on("dgrid-select",function(b){r(a,9)});z.appendChild(t.domNode);$(z).css("cursor","default");$(z).on({click:function(){r(a,0)},dblclick:function(){r(a,2)},mouseup:function(b){3===b.which&&(2===b.originalEvent.detail?r(a,3):r(a,1))}});a.Disable=
function(b){(a.isDisabled=b)&&!a.previousSelection&&(a.previousSelection=a.GetState());t.set("allowTextSelection",b?!1:!0);t.set("selectionMode",b?"none":D);b||(a.previousSelection&&a.SetState(a.previousSelection),a.previousSelection=null)};a.AddItem=function(c,d,e,f){-1==c&&(c=spider_ListSize(k));0>=c?spider_ResetList(k):spider_SelectElement(k,c-1);c=spider_AddElement(k);c.text=d;v&1&&(c.checkBox=new dijit.form.CheckBox({onClick:function(){r(a,9)}}));e&&(c.image=e);d=spider_ListIndex(k);p.add({id:spider_ListSize(k)-
1});b(d,spider_ListSize(k)-1)};a.RemoveItem=function(c){var d=spider_ListSize(k);if(d>c&&0<=c){var e=a.GetState();e>c&&a.SetState(e-1);spider_SelectElement(k,c);spider_DeleteElement(k);p.remove(d-1);b(c,d-2)}};a.ClearItems=function(){spider_ClearList(k);p=new q;t.set("collection",p)};a.CountItems=function(){return spider_ListSize(k)};a.AddColumn=function(a,b,c){y.splice(a,0,{field:"",index:0,label:b,width:c,sortable:!1,renderCell:function(a,b,c,d){b=spider_SelectElement(k,a.id);a=put("div");0===this.index&&
(b.checkBox&&(c=put("div"),$(c).css("float","left"),$(c).css("padding-right","8px"),put(c,b.checkBox.domNode),a.appendChild(c)),b.image&&(c=put("div"),$(c).css("float","left"),$(c).css("padding-right","8px"),c.className=spider.image.GetCSS(b.image),a.appendChild(c)));b=put("div",spider_StringField(b.text,this.index+1,spider_Chr(10)));$(b).css("white-space","nowrap");a.appendChild(b);return a}});g()};a.RemoveColumn=function(a){y.splice(a,1);g()};a.GetState=function(){var b=-1;if(a.previousSelection)b=
a.previousSelection;else for(var c in t.selection){b=c;break}return+b};a.SetState=function(a){t.clearSelection();t.select(a);t.scrollTo({y:t.rowHeight*a})};a.GetText=function(){var b=a.GetState();return-1!=b?spider_SelectElement(k,b).text:""};a.SetText=function(b){var c;for(spider_ResetList(k);c=spider_NextElement(k);)if(c.text==b){a.SetState(spider_ListIndex(k));break}};a.GetItemAttribute=function(a,b,c){return 1==b?y[c].width:0};a.SetItemAttribute=function(a,b,c,d){1==b&&(y[d].width=c,g())};a.GetItemState=
function(a){var b=0,c=spider_SelectElement(k,a);c.checkBox&&c.checkBox.get("checked")&&(b|=2);t.isSelected(a)&&(b|=1);return b};a.SetItemState=function(a,b){var c=spider_SelectElement(k,a);c.checkBox&&c.checkBox.set("checked",b&2?!0:!1);b&1?t.select(a):t.deselect(a)};a.GetItemData=function(a){var b;return(b=spider_SelectElement(k,a))?b.data?b.data:0:0};a.SetItemData=function(a,b){var c;if(c=spider_SelectElement(k,a))c.data=b};a.GetItemText=function(a,b){var c;return(c=spider_SelectElement(k,a))?-1!=
b?spider_StringField(c.text,b+1,spider_Chr(10)):c.text:""};a.SetItemText=function(a,c,d){var e;if(-1==a)-1==d&&(d=0),y[d].label=c,g();else if(e=spider_SelectElement(k,a)){if(-1!=d){var f=e.text.split(spider_Chr(10));f[d]=c;e.text=f.join(spider_Chr(10))}else e.text=c;b(a,a)}};a.GetColor=function(b){switch(b){case 2:return a.backColor?a.backColor:-1;case 1:return a.frontColor?a.frontColor:-1}return-1};a.SetColor=function(b,c){switch(b){case 2:$(z).find("div").each(function(){if("dgrid-scroller"==$(this).attr("class"))return $(this).css("background-color",
spider_helper_ColorToHtml(c)),!1});a.backColor=c;break;case 1:$(z).find("div").each(function(){if("dgrid-scroller"==$(this).attr("class"))return $(this).css("color",spider_helper_ColorToHtml(c)),!1}),a.frontColor=c}};a.Resize=function(a,b,c,d){s(z,a,b,c,d);a=u(t.domNode);w(t,0,0,c-a.x,d-a.y)};a.AddColumn(0,m,c);spider.gadget.register(a,12,z,t);a.Resize(f,h,l,n);var x=setInterval(function(){$(z).is(":visible")&&(clearInterval(x),t.startup(),t.resize())},10);return a.resultId};window.spider_ListViewGadget=
function(e,f,h,l,n,m){function c(){a=spider_NewList(function(){return{id:null,text:null}});k=new (spider.DojoBaseDeclare([spider.DStoreMemory,spider.DStoreTrackable]));q.set("collection",k)}function d(a,b){for(var c=a;c<=b;c++)k.put({id:c})}"undefined"===typeof m&&(m=0);var b=spider.gadget.objects.Allocate(e),g="single",a,k,q,p=document.createElement("div");$(p).css("cursor","default");p.spiderId=b.id;e=spider.DojoBaseDeclare([spider.DGridOnDemandGrid,spider.DGridKeyboard,spider.DGridSelection]);
m&1?g="extended":m&2&&(g="toggle");q=new e({showHeader:!1,selectionMode:g,keepScrollPosition:!0,columns:[{renderCell:function(b,c,d,e){$(d).css("border","0px");c=spider_SelectElement(a,b.id);c=put("div",c.text);$(c).css("padding","1px");c.id=b.id;return c}}]});q.on("dgrid-select",function(a){r(b,9)});c();p.appendChild(q.domNode);$(p).on({click:function(){r(b,0)},dblclick:function(){r(b,2)},mouseup:function(a){3===a.which&&(2===a.originalEvent.detail?r(b,3):r(b,1))}});b.Disable=function(a){(b.isDisabled=
a)&&!b.previousSelection&&(b.previousSelection=b.GetState());q.set("allowTextSelection",a?!1:!0);q.set("selectionMode",a?"none":g);a||(b.previousSelection&&b.SetState(b.previousSelection),b.previousSelection=null)};b.AddItem=function(b,c,e,f){-1==b&&(b=spider_ListSize(a));0>=b?spider_ResetList(a):spider_SelectElement(a,b-1);spider_AddElement(a).text=c;b=spider_ListIndex(a);k.add({id:spider_ListSize(a)-1});d(b,spider_ListSize(a)-1)};b.RemoveItem=function(c){var e=spider_ListSize(a);if(e>c&&0<=c){var f=
b.GetState();f>c&&b.SetState(f-1);spider_SelectElement(a,c);spider_DeleteElement(a);k.remove(e-1);d(c,e-2)}};b.ClearItems=function(){c()};b.CountItems=function(){return spider_ListSize(a)};b.GetState=function(){var a=-1;if(b.previousSelection)a=b.previousSelection;else for(var c in q.selection){a=c;break}return+a};b.SetState=function(a){q.clearSelection();q.select(a);q.scrollTo({y:q.rowHeight*a})};b.GetText=function(){var c=b.GetState();return-1!=c?spider_SelectElement(a,c).text:""};b.SetText=function(c){var d;
for(spider_ResetList(a);d=spider_NextElement(a);)if(d.text==c){b.SetState(spider_ListIndex(a));break}};b.GetItemState=function(a){return q.isSelected(a)?1:0};b.SetItemState=function(a,b){b?q.select(a):q.deselect(a)};b.GetItemData=function(b){var c;return(c=spider_SelectElement(a,b))?c.data?c.data:0:0};b.SetItemData=function(b,c){var d;if(d=spider_SelectElement(a,b))d.data=c};b.GetItemText=function(b,c){var d;return(d=spider_SelectElement(a,b))?d.text:""};b.SetItemText=function(b,c,e){if(e=spider_SelectElement(a,
b))e.text=c,d(b,b)};b.GetColor=function(a){switch(a){case 2:return b.backColor?b.backColor:-1;case 1:return b.frontColor?b.frontColor:-1}return-1};b.SetColor=function(a,c){switch(a){case 2:$(p).find("div").each(function(){if("dgrid-scroller"==$(this).attr("class"))return $(this).css("background-color",spider_helper_ColorToHtml(c)),!1});b.backColor=c;break;case 1:$(p).css("color",spider_helper_ColorToHtml(c)),b.frontColor=c}};b.Resize=function(a,b,c,d){s(p,a,b,c,d);a=u(q.domNode);w(q,0,0,c-a.x,d-a.y);
$(p).find("div").each(function(){if("dgrid-content ui-widget-content"==$(this).attr("class"))return $(this).css("width","100%"),!1})};spider.gadget.register(b,6,p,q);q.startup();$(p).find("div").each(function(){if("dgrid-scroller"==$(this).attr("class"))return $(this).css("overflow-y","auto"),!1});b.Resize(f,h,l,n);return b.resultId};window.spider_OpenGadgetList=function(e,f){var h,l;if(h=spider.gadget.objects.Get(e)){switch(h.type){case 16:l=h.contentPane.domNode;break;case 11:l=h.gadget.domNode;
break;case 28:if(h=h.getPanelChild(f))l=h.domNode}l&&spider.window.gadgetList.push(l)}};window.spider_OptionGadget=function(e,f,h,l,n,m){var c=spider.gadget.objects.Allocate(e);e="spideroption_"+c.id;5!=spider.gadget.lastType&&spider.gadget.optionGroupCount++;var d=new dijit.form.RadioButton({id:e,name:"spideroptiongroup"+spider.gadget.optionGroupCount,onChange:function(){r(c,0)}}),b=document.createElement("div"),g=document.createElement("span");g.className="sbVerticalCenter";b.appendChild(g);g.appendChild(d.domNode);
var a=put(g,"label",{htmlFor:e,innerHTML:m});$(a).css("padding-left","5px");c.Disable=function(b){$(a).css("color",b?"gray":"");d.set("disabled",b?!0:!1)};c.GetState=function(){return d.get("checked")?1:0};c.SetState=function(a){d.set("checked",a)};c.GetText=function(){return a.innerHTML};c.SetText=function(b){a.innerHTML=b};c.GetRequiredSize=function(){var a=$(b).css("fontSize")+" "+$(b).css("fontFamily"),a=x(c,a,c.GetText());a.width+=28;a.height+=6;return a};c.Resize=function(a,c,d,e){s(b,a,c,d,
e);$(g).width(d);$(g).height(e)};spider.gadget.register(c,5,b,d);c.Resize(f,h,l,n);return c.resultId};window.spider_PanelGadget=function(e,f,h,l,n){function m(a){var b=d.getChildren();return 0<=a&&a<b.length?b[a]:null}var c=spider.gadget.objects.Allocate(e),d=new dijit.layout.TabContainer({doLayout:!0}),b=document.createElement("div");b.appendChild(d.domNode);d.watch("selectedChildWidget",function(a,b,d){r(c,9)});var g=function(){$(b).find("div").each(function(){if("dijitTabListWrapper"==spider_Left($(this).attr("class"),
19))return-2==$(this).cssValue("left")&&($(this).css("left","0px"),$(this).css("top","1px")),!1})};c.getPanelChild=m;c.AddItem=function(a,b,c,e){a=new dijit.layout.ContentPane({title:b,iconClass:c?spider.image.GetCSS(c):null});d.addChild(a);spider.window.gadgetList.set(a.domNode);d.startup();d.resize();g()};c.RemoveItem=function(a){var b=c.CountItems();0<=a&&a<b&&(a=m(a),d.removeChild(a),a.destroy(),d.startup(),d.resize(),g())};c.ClearItems=function(){for(var a=c.CountItems(),b=0;b<a;b++)c.RemoveItem(0)};
c.CountItems=function(){return d.getChildren().length};c.GetState=function(){for(var a=d.getChildren(),b=0;b<a.length;b++)if(a[b].get("selected"))return b;return-1};c.SetState=function(a){var b;(b=m(a))&&d.selectChild(b)};c.GetItemData=function(a){var b;return(b=m(a))&&b.spiderData?b.spiderData:0};c.SetItemData=function(a,b){var c;if(c=m(a))c.spiderData=b};c.GetItemText=function(a,b){var c;return(c=m(a))?c.get("title"):""};c.SetItemText=function(a,b,c){var d;(d=m(a))&&d.set("title",b)};c.SetItemImage=
function(a,b){var c;(c=m(a))&&c.set("iconClass",b?spider.image.GetCSS(b):null)};c.GetAttribute=function(a){var d,e=c.GetState();if(-1!=e&&(d=m(e)))switch(a){case 1:return $(d.domNode).width();case 2:return $(d.domNode).height();case 3:return $(b).height()-$(d.domNode).height()}return 0};c.Resize=function(a,e,f,h){s(b,a,e,f,h);w(d,0,0,f,h);c.disableResize||d.resize();g()};spider.gadget.register(c,28,b,d);c.disableResize=!0;c.Resize(f,h,l,n);c.disableResize=!1;spider.window.gadgetList.push(null);return c.resultId};
window.spider_ProgressBarGadget=function(e,f,h,l,n,m,c,d){function b(){a.maximum=g.maximum-g.minimum}"undefined"===typeof d&&(d=0);var g=spider.gadget.objects.Allocate(e),a=new dijit.ProgressBar;$(a.labelNode).css("visibility","hidden");$(a.internalProgress).css("height","100%");var k=document.createElement("div");k.appendChild(a.domNode);g.minimum=m;g.maximum=c;b();g.GetState=function(){return a.get("value")+g.minimum};g.SetState=function(b){a.set("value",b-g.minimum)};g.GetAttribute=function(a){switch(a){case 1:return g.minimum;
case 2:return g.maximum}return 0};g.SetAttribute=function(a,c){switch(a){case 1:g.minimum=c;b();break;case 2:g.maximum=c,b()}};g.Resize=function(b,c,d,e){s(k,b,c,d,e);b=u(a.domNode);w(a,0,0,d-b.x,e-b.y)};spider.gadget.register(g,14,k,k);g.Resize(f,h,l,n);return g.resultId};window.spider_RemoveGadgetColumn=function(e,f){var h;(h=spider.gadget.objects.Get(e))&&h.RemoveColumn&&h.RemoveColumn(f)};window.spider_RemoveGadgetItem=function(e,f){var h;(h=spider.gadget.objects.Get(e))&&h.RemoveItem&&h.RemoveItem(f)};
window.spider_ResizeGadget=function(e,f,h,l,n){var m;if(m=spider.gadget.objects.Get(e))-65535==f&&(f=K(e)),-65535==h&&(h=L(e)),-65535==l&&(l=J(e)),-65535==n&&(n=I(e)),m.Resize&&m.Resize(f|0,h|0,l|0,n|0)};window.spider_ScrollAreaGadget=function(e,f,h,l,n,m,c,d,b){"undefined"===typeof d&&(d=1);"undefined"===typeof b&&(b=0);var g=spider.gadget.objects.Allocate(e),a=new dijit.layout.ContentPane({style:"overflow: hidden; padding: 0px;"}),k=document.createElement("div");$(k).css("overflow","auto");b&8||
$(k).addClass("sbScrollAreaBorder");a.placeAt(k);w(a,0,0,m,c);g.GetAttribute=function(b){switch(b){case 1:return $(a.domNode).width();case 2:return $(a.domNode).height();case 3:return k.scrollLeft;case 4:return k.scrollTop;case 5:return 1}return 0};g.SetAttribute=function(b,c){switch(b){case 1:$(a.domNode).width(c);break;case 2:$(a.domNode).height(c);break;case 3:k.scrollLeft=c;break;case 4:k.scrollTop=c}};g.GetColor=function(a){return 2==a?g.backColor?g.backColor:-1:-1};g.SetColor=function(a,b){2==
a&&($(k).css("background-color",spider_helper_ColorToHtml(b)),g.backColor=b)};g.Resize=function(a,b,c,d){var e=u(k);s(k,a,b,c-e.x,d-e.y)};spider.gadget.register(g,16,k,k);g.Resize(f,h,l,n);spider.window.gadgetList.push(a.domNode);g.contentPane=a;return g.resultId};window.spider_SetActiveGadget=function(e){var f;(f=spider.gadget.objects.Get(e))&&f.SetActive&&f.SetActive()};window.spider_SetGadgetAttribute=function(e,f,h){var l;(l=spider.gadget.objects.Get(e))&&l.SetAttribute&&l.SetAttribute(f,h)};
window.spider_SetGadgetColor=function(e,f,h){var l;(l=spider.gadget.objects.Get(e))&&l.SetColor&&l.SetColor(f,h)};window.spider_SetGadgetData=function(e,f){var h;if(h=spider.gadget.objects.Get(e))h.userData=f};window.spider_SetGadgetFont=function(e,f){var h;if(h=spider.gadget.objects.Get(e))h.SetGadgetFont?h.SetGadgetFont(f):($(h.div).css("fontFamily",f.family),$(h.div).css("fontSize",f.size))};window.spider_SetGadgetItemAttribute=function(e,f,h,l,n){"undefined"===typeof n&&(n=-1);var m;(m=spider.gadget.objects.Get(e))&&
m.SetItemAttribute&&m.SetItemAttribute(f,h,l,n)};window.spider_SetGadgetItemData=function(e,f,h){var l;(l=spider.gadget.objects.Get(e))&&l.SetItemData&&l.SetItemData(f,h)};window.spider_SetGadgetItemImage=function(e,f,h){var l;(l=spider.gadget.objects.Get(e))&&l.SetItemImage&&l.SetItemImage(f,h)};window.spider_SetGadgetItemState=function(e,f,h){var l;(l=spider.gadget.objects.Get(e))&&l.SetItemState&&l.SetItemState(f,h)};window.spider_SetGadgetItemText=function(e,f,h,l){"undefined"===typeof l&&(l=
-1);var n;(n=spider.gadget.objects.Get(e))&&n.SetItemText&&n.SetItemText(f,h,l)};window.spider_SetGadgetState=function(e,f){var h;if(h=spider.gadget.objects.Get(e))F(h),h.SetState&&h.SetState(f),G(h)};window.spider_SetGadgetText=H;window.spider_SpinGadget=function(e,f,h,l,n,m,c,d){"undefined"===typeof d&&(d=0);var b=spider.gadget.objects.Allocate(e),g=new dijit.form.NumberSpinner({constraints:{min:m,max:c},intermediateChanges:!0,onChange:function(){var a=g.get("value");a>b.oldValue?r(b,4):a<b.oldValue&&
r(b,5);b.oldValue=a;r(b,9)},onFocus:function(){spider.DigitFocus.focus(g.focusNode);r(b,7)},onBlur:function(){r(b,8)}}),a=A(g.upArrowNode,"div","dijitArrowButtonInner"),k=A(g.downArrowNode,"div","dijitArrowButtonInner");"flat"===spider.gadgetTheme&&($(a).css("position","absolute"),$(k).css("position","absolute"));d&1&&$(g.focusNode).attr("disabled",!0);var q=document.createElement("div");q.appendChild(g.domNode);b.Disable=function(a){C(b,g.focusNode.parentNode,g.focusNode,a)};b.GetState=function(){return g.get("value")};
b.SetState=function(a){b.oldValue=a;g.set("value",a)};b.GetAttribute=function(a){switch(a){case 1:return g.attr("constraints").min;case 2:return g.attr("constraints").max}return 0};b.SetAttribute=function(a,b){var c=g.attr("constraints");switch(a){case 1:c.min=b;g.attr("constraints",c);break;case 2:c.max=b,g.attr("constraints",c)}};b.GetColor=function(a){switch(a){case 2:return b.backColor?b.backColor:-1;case 1:return b.frontColor?b.frontColor:-1}return-1};b.SetColor=function(a,c){B(b,g.focusNode.parentNode,
g.focusNode,a,c)};b.SetActive=function(){spider.DigitFocus.focus(g.focusNode)};b.GetRequiredSize=function(){var a=$(q).css("fontSize")+" "+$(q).css("fontFamily"),a=x(b,a,"Hg");a.width=60;a.height+=5;return a};b.Resize=function(b,c,d,e){s(q,b,c,d,e);b=u(g.domNode);w(g,0,0,d-b.x,e-b.y);d=A(q,"div","dijitSpinnerButtonContainer");$(d).height(e-b.y);$(a).css("top",(e-b.y)/4-8);$(k).css("top",(e-b.y)/4-8);"claro"==spider.gadgetTheme?$(g.focusNode).height(e-b.y-2):$(g.focusNode).height(e-b.y)};b.SetState(m);
spider.gadget.register(b,2,q,g);b.Resize(f,h,l,n);return b.resultId};window.spider_SplitterGadget=function(e,f,h,l,n,m,c,d){"undefined"===typeof d&&(d=0);var b,g,a,k,q,p=spider.gadget.objects.Allocate(e),v=function(c){b.Resize(0,0,$(a.domNode).width(),$(a.domNode).height());g.Resize(0,0,$(k.domNode).width(),$(k.domNode).height())};if((b=spider.gadget.objects.Get(m))&&(g=spider.gadget.objects.Get(c))){q=new dijit.layout.BorderContainer({design:"sidebar",gutters:!1,liveSplitters:!0});a=new dijit.layout.ContentPane({region:d&
1?"left":"top",style:"overflow: hidden",content:"",splitter:!0});q.addChild(a);a.domNode.appendChild(b.div);k=new dijit.layout.ContentPane({style:"overflow: hidden",region:"center",content:"",splitter:!0});q.addChild(k);k.domNode.appendChild(g.div);var t=document.createElement("div");q.placeAt(t);p.GetState=function(){return d&1?$(a.domNode).width():$(a.domNode).height()};p.SetState=function(b){d&1?$(a.domNode).width(b):$(a.domNode).height(b);q.resize();v()};p.GetAttribute=function(c){switch(c){case 3:return b.id;
case 4:return g.id;case 1:return a.attr("minSize");case 2:if(p.secondMinimumSize)return p.secondMinimumSize}return 0};p.SetAttribute=function(c,d){var e;switch(c){case 3:if(e=spider.gadget.objects.Get(d))spider_WindowID(b.windowId).content.appendChild(b.div),b=e,a.domNode.appendChild(b.div),v();break;case 4:if(e=spider.gadget.objects.Get(d))spider_WindowID(g.windowId).content.appendChild(g.div),g=e,k.domNode.appendChild(g.div),v();break;case 1:a.attr("minSize",d);break;case 2:p.secondMinimumSize=
d,p.secondMinimumSize&&a.attr("maxSize",$(q.domNode).width()-p.secondMinimumSize-16)}};p.Resize=function(a,b,c,d){s(t,a,b,c,d);w(q,0,0,c,d);q.resize();v()};spider.DojoAspect.after(a,"resize",function(c,d){b.Resize(0,0,$(a.domNode).width(),$(a.domNode).height())});spider.DojoAspect.after(k,"resize",function(a,b){g.Resize(0,0,$(k.domNode).width(),$(k.domNode).height())});spider.gadget.register(p,29,t,q);q.startup();p.Resize(f,h,l,n);d&1?p.SetState(l/2-5):p.SetState(n/2-5)}else p.resultId=0;return p.resultId};
window.spider_StringGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);var d=spider.gadget.objects.Allocate(e),b;b=c&4?new dijit.form.NumberTextBox({constraints:{min:0,places:0}}):new dijit.form.TextBox({type:c&1?"password":"text"});b.intermediateChanges=!0;b.attr("onChange",function(){c&16&&b.set("value",b.get("value").toUpperCase());c&8&&b.set("value",b.get("value").toLowerCase());r(d,9)});b.attr("onFocus",function(){spider.DigitFocus.focus(b.focusNode);r(d,7)});b.attr("onBlur",function(){r(d,
8)});c&2&&b.attr("readOnly",!0);c&32&&$(b.domNode).css("border","0px");var g=document.createElement("div");g.appendChild(b.domNode);d.Disable=function(a){C(d,b.focusNode.parentNode,b.focusNode,a)};d.SetActive=function(){spider.DigitFocus.focus(b.focusNode)};d.GetText=function(){var a=b.get("value");c&4&&(a=isNaN(a)?"":""+a);return a};d.SetText=function(a){b.set("value",a)};d.GetAttribute=function(a){return 1==a?b.get("maxlength"):0};d.SetAttribute=function(a,c){1==a&&(b.set("maxlength",c),b.set("value",
d.GetText().substring(0,c)))};d.GetColor=function(a){switch(a){case 2:return d.backColor?d.backColor:-1;case 1:return d.frontColor?d.frontColor:-1}return-1};d.SetColor=function(a,c){B(d,b.focusNode.parentNode,b.focusNode,a,c)};d.GetRequiredSize=function(){var a=$(g).css("fontSize")+" "+$(g).css("fontFamily"),a=x(d,a,"Hg");a.width=30;a.height+=10;return a};d.Resize=function(a,c,d,e){s(g,a,c,d,e);a=u(b.domNode);w(b,0,0,d-a.x,e-a.y);"claro"==spider.gadgetTheme?$(b.focusNode).height(e-a.y-2):$(b.focusNode).height(e-
a.y)};spider.gadget.register(d,2,g,b);d.Resize(f,h,l,n);H(d.id,m);return d.resultId};window.spider_TextGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);var d=spider.gadget.objects.Allocate(e),b=document.createElement("div"),g=document.createElement("span");b.appendChild(g);g.innerHTML=m;c&8&&(g.className="sbVerticalCenter");c&4&&$(b).addClass("sbTextBorder");c&2?$(b).css("text-align","right"):c&1&&$(b).css("text-align","center");d.GetText=function(){return g.innerHTML};d.SetText=function(a){g.innerHTML=
a};d.GetColor=function(a){switch(a){case 2:return d.backColor?d.backColor:-1;case 1:return d.frontColor?d.frontColor:-1}return-1};d.SetColor=function(a,c){switch(a){case 2:$(b).css("background-color",spider_helper_ColorToHtml(c));d.backColor=c;break;case 1:$(b).css("color",spider_helper_ColorToHtml(c)),d.frontColor=c}};d.GetRequiredSize=function(){var a=$(b).css("fontSize")+" "+$(b).css("fontFamily"),a=x(d,a,d.GetText());a.width+=8;a.height+=6;return a};d.Resize=function(a,c,d,e){var f=u(b);s(b,a,
c,d-f.x,e-f.y);$(g).width(d-f.x);$(g).height(e-f.y)};spider.gadget.register(d,3,b,g);d.Resize(f,h,l,n);return d.resultId};window.spider_TrackBarGadget=function(e,f,h,l,n,m,c,d){"undefined"===typeof d&&(d=0);var b=spider.gadget.objects.Allocate(e),g=new (d&2?dijit.form.VerticalSlider:dijit.form.HorizontalSlider)({minimum:m,maximum:c,showButtons:!1,intermediateChanges:!0,discreteValues:c-m+1,onChange:function(a){r(b,0)}}),a=document.createElement("div");a.appendChild(g.domNode);b.GetState=function(){return g.get("value")|
0};b.SetState=function(a){g.set("value",a)};b.GetAttribute=function(a){switch(a){case 1:return g.get("minimum");case 2:return g.get("maximum")}return 0};b.SetAttribute=function(a,b){switch(a){case 1:g.set("minimum",b);break;case 2:g.set("maximum",b)}};b.GetRequiredSize=function(){var b={width:0,height:0};$.each($(a).children(),function(a,c){b.width+=$(c).outerWidth(!0);b.height+=$(c).outerHeight(!0)});return b};b.Resize=function(b,c,d,e){s(a,b,c,d,e);w(g,0,0,d,e)};spider.gadget.register(b,17,a,g);
b.Resize(f,h,l,n);return b.resultId};window.spider_TreeGadget=function(e,f,h,l,n,m){"undefined"===typeof m&&(m=0);var c=spider.gadget.objects.Allocate(e),d=spider_NewList(function(){return{id:null,text:null}}),b,g=0,a=!1,k,q=document.createElement("div");$(q).addClass("sbTreeBorder");spider.DojoBaseLang.extend(dijit.Tree,{refreshModel:function(){this._itemNodesMap={};this.rootNode.state="UNCHECKED";this.model.root.children=null;this.rootNode&&this.rootNode.destroyRecursive();this._load()}});b=new spider.CBTreeStoreHierarchy;
e=new spider.CBTreeModelForestStoreModel({store:b,query:{type:"root"},rootLabel:""});k=new dijit.Tree({model:e,getIconClass:function(a,b){var c;return(c=a.spiderItem)&&c.image?spider.image.GetCSS(c.image):""},showRoot:!1,onClick:function(a){r(c,0);r(c,9)},onDblClick:function(a){r(c,2)}});$(q).on("mouseup",function(a){3===a.which&&1===a.originalEvent.detail&&r(c,1)});q.appendChild(k.domNode);var p=function(){a||(a=setInterval(function(){clearInterval(a);a=!1;k.refreshModel()},0))};c.AddItem=function(a,
c,e,f){-1==a&&(a=spider_ListSize(d));0>=a?spider_ResetList(d):spider_SelectElement(d,a-1);a=spider_AddElement(d);a.id=g;a.text=c;a.subLevel=f;e&&(a.image=e);e="";var h;spider_ListIndex(d);if(0<f)for(;h=spider_PreviousElement(d);)if(h.subLevel<f){e=h.id;break}b.add({id:g,name:c,type:0===f?"root":"child",parent:[e],spiderItem:a});g++;p()};c.RemoveItem=function(a){spider_ListSize(d)>a&&0<=a&&(a=spider_SelectElement(d,a),spider_DeleteElement(d),b.remove(a.id),k.set("selectedItems",[]),p())};c.ClearItems=
function(){for(var a=spider_ListSize(d),b=0;b<a;b++)c.RemoveItem(0)};c.CountItems=function(){return spider_ListSize(d)};c.GetState=function(){var a=-1,b,c;if(b=k.attr("selectedItem"))for(spider_ResetList(d);c=spider_NextElement(d);)if(c.id==b.id){a=spider_ListIndex(d);break}return a};c.SetState=function(a){var c;(c=spider_SelectElement(d,a))&&k.set("selectedItems",[b.get(c.id)])};c.GetText=function(){var a=c.GetState();return-1!=a?spider_SelectElement(d,a).text:""};c.SetText=function(a){var b;for(spider_ResetList(d);b=
spider_NextElement(d);)if(b.text==a){c.SetState(spider_ListIndex(d));break}};c.GetItemAttribute=function(a,b,c){return 1==b&&(a=spider_SelectElement(d,a))?a.subLevel:0};c.GetItemState=function(a){var c=0;if(a=spider_SelectElement(d,a)){var e=k.get("selectedItem");e&&e.id==a.id&&(c|=1);a=k.getNodesByItem(b.get(a.id));c=a[0].isExpanded?c|2:c|8}return c};c.SetItemState=function(c,e){var f;if(f=spider_SelectElement(d,c))switch(a&&(clearInterval(a),a=!1,k.refreshModel()),e){case 1:k.set("selectedItems",
[b.get(f.id)]);break;case 2:f=k.getNodesByItem(b.get(f.id));k._expandNode(f[0]);break;case 8:f=k.getNodesByItem(b.get(f.id)),k._collapseNode(f[0])}};c.GetItemData=function(a){var b;return(b=spider_SelectElement(d,a))?b.data?b.data:0:0};c.SetItemData=function(a,b){var c;if(c=spider_SelectElement(d,a))c.data=b};c.GetItemText=function(a,b){var c;return(c=spider_SelectElement(d,a))?c.text:""};c.SetItemText=function(a,b,c){if(a=spider_SelectElement(d,a))a.text=b,p()};c.GetColor=function(a){switch(a){case 2:return c.backColor?
c.backColor:-1;case 1:return c.frontColor?c.frontColor:-1}return-1};c.SetColor=function(a,b){switch(a){case 2:$(q).find("div").each(function(){if("dojoDndContainer dijitTree"==$(this).attr("class")||"dijitTree dojoDndContainer"==$(this).attr("class"))return $(this).css("background-color",spider_helper_ColorToHtml(b)),!1});c.backColor=b;break;case 1:$(q).css("color",spider_helper_ColorToHtml(b)),c.frontColor=b}};c.Resize=function(a,b,c,d){var e=u(q);s(q,a,b,c-e.x,d-e.y);w(k,0,0,c-e.x,d-e.y)};spider.gadget.register(c,
27,q,k);c.Resize(f,h,l,n);k.startup();return c.resultId};window.spider_UnbindGadgetEvent=function(e,f,h){"undefined"===typeof h&&(h=-1);var l;(l=spider.gadget.objects.Get(e))&&spider_UnbindEvent(1,f,l.windowId,l.id,h)};window.spider_UseGadgetList=function(e){var f=spider.window.gadgetList.get();spider.window.gadgetList.set(e.content);return f};window.spider_WebGadget=function(e,f,h,l,n,m,c){"undefined"===typeof c&&(c=0);var d=spider.gadget.objects.Allocate(e),b=document.createElement("div");$(b).addClass("sbWebBorder");
var g=document.createElement("iframe");$(g).load(function(){r(d,6)});g.src=m;g.setAttribute("frameborder",0);b.appendChild(g);d.GetText=function(){return g.src};d.SetText=function(a){g.src=a};d.GetItemText=function(a,b){try{switch(a){case 1:return $(g).contents().find("html").html();case 4:var c;var d=g.contentWindow.document;c=d.getSelection?d.getSelection():d.selection?d.selection.createRange().text:void 0;return c;case 2:return $(g).contents().find("title").html()}}catch(e){}return""};d.SetItemText=
function(a,b,c){try{1==a&&(g.src="data:text/html;charset=utf-8,"+encodeURI(b))}catch(d){}};d.Resize=function(a,c,d,e){var f=u(b);s(b,a,c,d-f.x,e-f.y);s(g,0,0,d-f.x,e-f.y)};spider.gadget.register(d,18,b,g);d.Resize(f,h,l,n);return d.resultId};window.spider_gadget_GetRequiredSize=function(e){var f;spider.gadget.context||(spider.gadget.canvas=document.createElement("canvas"),spider.gadget.canvas.width=2E3,spider.gadget.canvas.height=200,spider.gadget.context=spider.gadget.canvas.getContext("2d"));return(f=
spider.gadget.objects.Get(e))&&f.GetRequiredSize?f.GetRequiredSize():{width:0,height:0}}})();

if("undefined"==typeof Spider)var Spider={};function spider_ElapsedMilliseconds(){return(new Date).getTime()}function spider_CountProgramParameters(){var a=location.search.substring(1);return 0<a.length?spider_CountString(a,"&")+1:0}function spider_ProgramParameter(a){var b=location.search.substring(1);return 0<=a&&a<spider_CountProgramParameters()?decodeURI(spider_StringField(b,a+1,"&")):""};

function f_loaded(v_type,v_filename$,v_objectid) {
var v_helptext=0;
var v_ctrlstext=0;
var v_status=0;
var v_index=0;
var v_ctrlsslider=0;
var v_progtext=0;
if (v_status==0) {
spider_OpenWindow(1,50,50,530,611,_S17,513);
spider_ImageGadget(-1,372,466,spider_ImageWidth(v_objectid),spider_ImageHeight(v_objectid),spider_ImageID(3));
spider_ImageGadget(-1,403,160,spider_ImageWidth(v_objectid),spider_ImageHeight(v_objectid),spider_ImageID(2));
spider_ImageGadget(-1,0,0,spider_ImageWidth(v_objectid),spider_ImageHeight(v_objectid),spider_ImageID(0));
spider_ImageGadget(-1,403,160,0,0,spider_ImageID(1));
} else if (v_status==2) {
}
spider_CanvasGadget(3,90,200,45,25,16);
spider_BindGadgetEvent(3,f_buttonhandler,65540);
spider_BindGadgetEvent(3,f_help,65537);
spider_BindGadgetEvent(3,f_help,65538);
spider_CanvasGadget(2,145,200,98,25,16);
spider_BindGadgetEvent(2,f_buttonhandler,65540);
spider_BindGadgetEvent(2,f_help,65537);
spider_BindGadgetEvent(2,f_help,65538);
spider_CanvasGadget(1,255,200,45,25,16);
spider_BindGadgetEvent(1,f_buttonhandler,65540);
spider_BindGadgetEvent(1,f_help,65537);
spider_BindGadgetEvent(1,f_help,65538);
spider_CanvasGadget(6,90,238,45,25,16);
spider_BindGadgetEvent(6,f_buttonhandler,65540);
spider_BindGadgetEvent(6,f_help,65537);
spider_BindGadgetEvent(6,f_help,65538);
spider_CanvasGadget(5,145,238,98,25,16);
spider_BindGadgetEvent(5,f_buttonhandler,65540);
spider_BindGadgetEvent(5,f_help,65537);
spider_BindGadgetEvent(5,f_help,65538);
spider_CanvasGadget(4,255,238,45,25,16);
spider_BindGadgetEvent(4,f_buttonhandler,65540);
spider_BindGadgetEvent(4,f_help,65537);
spider_BindGadgetEvent(4,f_help,65538);
spider_CanvasGadget(11,88,332,45,135,16);
spider_BindGadgetEvent(11,f_buttonhandler,65540);
spider_BindGadgetEvent(11,f_help,65537);
spider_BindGadgetEvent(11,f_help,65538);
spider_CanvasGadget(10,145,332,98,135,16);
spider_BindGadgetEvent(10,f_buttonhandler,65540);
spider_BindGadgetEvent(10,f_help,65537);
spider_BindGadgetEvent(10,f_help,65538);
spider_CanvasGadget(9,255,332,45,135,16);
spider_BindGadgetEvent(9,f_buttonhandler,65540);
spider_BindGadgetEvent(9,f_help,65537);
spider_BindGadgetEvent(9,f_help,65538);
spider_CanvasGadget(21,388,485,65,65,16);
spider_BindGadgetEvent(21,f_exporthandler,65540);
spider_BindGadgetEvent(21,f_help,65537);
spider_BindGadgetEvent(21,f_help,65538);
v_ctrlsslider=spider_TrackBarGadget(17,40,v_slidery,450,10,0,127);
spider_BindGadgetEvent(17,f_ctrlshandler);
spider_HideGadget(17,1);
v_ctrlstext=spider_TextGadget(18,30,110,465,23,_S18,5);
spider_SetGadgetColor(18,2,spider_RGB(46,49,52));
spider_SetGadgetColor(18,1,spider_RGB(180,180,180));
v_helptext=spider_TextGadget(22,170,65,316,25,_S19,4);
spider_SetGadgetColor(22,2,spider_RGB(46,49,52));
spider_SetGadgetColor(22,1,spider_RGB(180,180,180));
spider_HideGadget(22,1);
v_helptext=spider_TextGadget(23,170,65,316,25,_S20,4);
spider_SetGadgetColor(23,2,spider_RGB(46,49,52));
spider_SetGadgetColor(23,1,spider_RGB(180,180,180));
spider_HideGadget(23,1);
v_helptext=spider_TextGadget(24,170,65,316,42,_S21,4);
spider_SetGadgetColor(24,2,spider_RGB(46,49,52));
spider_SetGadgetColor(24,1,spider_RGB(180,180,180));
spider_HideGadget(24,1);
v_progtext=spider_TextGadget(30,85,195,218,277,_S5,5);
spider_SetGadgetColor(30,2,spider_RGB(46,49,52));
spider_HideGadget(30,1);
spider_ComboBoxGadget(42,130,522,225,22);
v_index=0;
for (;127>=v_index;v_index+=1) {
spider_AddGadgetItem(42,-1,_S22+spider_Str(v_index));
}
spider_SetGadgetState(42,0);
spider_SetGadgetColor(42,2,spider_RGB(46,49,52));
spider_SetGadgetColor(42,1,spider_RGB(180,180,180));
spider_BindGadgetEvent(42,f_buttonhandler,9);
spider_BindGadgetEvent(42,f_help,65537);
spider_BindGadgetEvent(42,f_help,65538);
spider_ComboBoxGadget(43,85,163,225,22);
v_index=0;
for (;127>=v_index;v_index+=1) {
spider_AddGadgetItem(43,-1,_S23+spider_Str(v_index));
}
spider_SetGadgetState(43,0);
spider_SetGadgetColor(43,2,spider_RGB(46,49,52));
spider_SetGadgetColor(43,1,spider_RGB(180,180,180));
spider_BindGadgetEvent(43,f_help,65537);
spider_BindGadgetEvent(43,f_help,65538);
f_miditemplate(v_config);
return 0;
}
function f_editmidifile(v_type,v_gadgetnum,v_value) {
var v_ccnoffset=0;
var v_i=0;
var v_holdoffset=0;
var v_noteonoffset=0;
var v_tempo=0;
var v_offset=0;
v_ccnoffset=67;
v_noteonoffset=(v_ccnoffset+40);
v_holdoffset=(v_noteonoffset+40);
v_tempo=5;
a_MDhd.array[57]=v_tempo;
if (v_type==1) {
v_offset=(v_ccnoffset+((v_gadgetnum+-9)*5));
a_MDhd.array[v_offset]=v_value;
} else if (v_type==2) {
v_offset=(v_noteonoffset+((v_gadgetnum+-1)*5));
a_MDhd.array[v_offset]=v_value;
} else if (v_type==3) {
v_offset=v_holdoffset;
a_MDhd.array[v_offset]=v_value;
}
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
spider_WriteByte(0,a_MDhd.array[v_i]);
}
return 0;
}
function f_loadingerror(v_type,v_filename$,v_objectid) {
return 0;
}
function f_miditemplate(v_config) {
var v_i=0;
var v_result=0;
spider_ClearList(t_MIDI);
if (f_generatetemplate(v_config)) {
}
spider_ResetList(t_MIDI);
v_i=0;
spider_ResetList(t_MIDI); while (spider_NextElement(t_MIDI)) {
v_i=(v_i+1);
a_MDhd.array[v_i]=t_MIDI.current._c;
}
v_result=spider_CreateFile(0,_S4,2);
spider_ResetList(t_MIDI);
v_i=1;
for (;spider_ListSize(t_MIDI)>=v_i;v_i+=1) {
spider_NextElement(t_MIDI);
spider_WriteByte(0,t_MIDI.current._c);
}
spider_CloseFile(0);
return 0;
}
function f_ctrlshandler() {
var v_ctrltext=0;
v_ctrltext=spider_TextGadget(18,45,v_textboxy,440,23,_S6+spider_Str(spider_GetGadgetState(17)),5);
spider_SetGadgetColor(18,2,spider_RGB(46,49,52));
spider_SetGadgetColor(18,1,spider_RGB(180,180,180));
v_ctrlnum=spider_GetGadgetState(17);
return 0;
}
function f_exporthandler() {
var v_objectid=0;
var v_i=0;
var v_result=0;
spider_ImageGadget(20,376,475,spider_ImageWidth(v_objectid),spider_ImageHeight(v_objectid),spider_ImageID(3));
spider_AddWindowTimer(1,2,7000);
spider_BindEvent(12,f_knobzeroed);
if (v_config==1) {
v_result=spider_CreateFile(0,_S10,2);
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
spider_WriteByte(0,a_MDhd.array[v_i]);
}
} else if (v_config==2) {
v_result=spider_CreateFile(0,_S11,2);
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
spider_WriteByte(0,a_MDhd.array[v_i]);
}
} else if (v_config==3) {
v_result=spider_CreateFile(0,_S12,2);
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
spider_WriteByte(0,a_MDhd.array[v_i]);
}
} else if (v_config==4) {
v_result=spider_CreateFile(0,_S13,2);
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
spider_WriteByte(0,a_MDhd.array[v_i]);
}
} else if (v_config==5) {
v_result=spider_CreateFile(0,_S14,2);
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
spider_WriteByte(0,a_MDhd.array[v_i]);
}
}
v_url$=_S5;
v_i=1;
for (;spider_ArraySize(a_MDhd)>=v_i;v_i+=1) {
v_url$=v_url$+spider_Str(a_MDhd.array[v_i])+_S15;
}
v_url$=_S16+v_url$;
spider_HideGadget(30,0);
spider_HideGadget(31,0);
spider_WebGadget(90,85,195,218,277,v_url$);
return 0;
}
function f_generatetemplate(v_config) {
var v_m$="";
var v_i=0;
v_m$=_S1;
v_i=1;
for (;spider_Len(v_m$)>=v_i;v_i+=1) {
spider_AddElement(t_MIDI);
t_MIDI.current._c=spider_Asc(spider_Mid(v_m$,v_i,1));
}
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=6;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=1;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=1;
spider_AddElement(t_MIDI);
t_MIDI.current._c=7;
spider_AddElement(t_MIDI);
t_MIDI.current._c=128;
v_m$=_S2;
v_i=1;
for (;spider_Len(v_m$)>=v_i;v_i+=1) {
spider_AddElement(t_MIDI);
t_MIDI.current._c=spider_Asc(spider_Mid(v_m$,v_i,1));
}
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=131;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=255;
spider_AddElement(t_MIDI);
t_MIDI.current._c=3;
spider_AddElement(t_MIDI);
t_MIDI.current._c=26;
v_m$=_S3;
v_i=1;
for (;spider_Len(v_m$)>=v_i;v_i+=1) {
spider_AddElement(t_MIDI);
t_MIDI.current._c=spider_Asc(spider_Mid(v_m$,v_i,1));
}
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=255;
spider_AddElement(t_MIDI);
t_MIDI.current._c=81;
spider_AddElement(t_MIDI);
t_MIDI.current._c=3;
spider_AddElement(t_MIDI);
t_MIDI.current._c=5;
spider_AddElement(t_MIDI);
t_MIDI.current._c=161;
spider_AddElement(t_MIDI);
t_MIDI.current._c=32;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=(v_config|128);
spider_AddElement(t_MIDI);
t_MIDI.current._c=127;
spider_AddElement(t_MIDI);
t_MIDI.current._c=126;
spider_AddElement(t_MIDI);
t_MIDI.current._c=143;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
v_i=1;
for (;8>=v_i;v_i+=1) {
spider_AddElement(t_MIDI);
t_MIDI.current._c=(v_config|176);
spider_AddElement(t_MIDI);
t_MIDI.current._c=v_i;
spider_AddElement(t_MIDI);
t_MIDI.current._c=127;
spider_AddElement(t_MIDI);
t_MIDI.current._c=143;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
}
v_i=1;
for (;8>=v_i;v_i+=1) {
spider_AddElement(t_MIDI);
t_MIDI.current._c=(v_config|144);
spider_AddElement(t_MIDI);
t_MIDI.current._c=v_i;
spider_AddElement(t_MIDI);
t_MIDI.current._c=127;
spider_AddElement(t_MIDI);
t_MIDI.current._c=143;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
}
spider_AddElement(t_MIDI);
t_MIDI.current._c=(v_config|176);
spider_AddElement(t_MIDI);
t_MIDI.current._c=v_i;
spider_AddElement(t_MIDI);
t_MIDI.current._c=127;
spider_AddElement(t_MIDI);
t_MIDI.current._c=143;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
spider_AddElement(t_MIDI);
t_MIDI.current._c=255;
spider_AddElement(t_MIDI);
t_MIDI.current._c=47;
spider_AddElement(t_MIDI);
t_MIDI.current._c=0;
return 0;
}
function f_help() {
return 0;
}
function f_knobzeroed() {
spider_RemoveWindowTimer(1,2);
spider_HideGadget(20,1);
spider_ExportFile(0,_S24,65536);
spider_CloseFile(0);
spider_SetActiveWindow(1);
spider_CloseWindow(89);
spider_FreeGadget(90);
spider_HideGadget(30,1);
spider_HideGadget(31,1);
spider_SetGadgetState(90,4);
return 0;
}
function f_ledoff() {
spider_RemoveWindowTimer(1,1);
spider_ImageGadget(19,403,160,0,0,spider_ImageID(1));
return 0;
}
function f_buttonhandler(v_button) {
var v_result=0;
spider_ImageGadget(-1,403,160,0,0,spider_ImageID(2));
spider_AddWindowTimer(1,1,300);
spider_BindEvent(12,f_ledoff);
if (spider_EventGadget()==42) {
v_result=f_editmidifile(3,spider_EventGadget(),spider_GetGadgetState(42));
} else if (spider_EventGadget()>=9) {
v_result=f_editmidifile(1,spider_EventGadget(),spider_GetGadgetState(43));
} else {
v_result=f_editmidifile(2,spider_EventGadget(),spider_GetGadgetState(43));
}
return 0;
}
function f_configure_screen(v_config) {
spider_BindEvent(18,f_loaded);
spider_BindEvent(19,f_loadingerror);
spider_BindEvent(2,f_loadingerror);
if (v_config==1) {
spider_LoadImage(0,_S25);
} else if (v_config==2) {
spider_LoadImage(0,_S26);
} else if (v_config==3) {
spider_LoadImage(0,_S27);
} else if (v_config==4) {
spider_LoadImage(0,_S28);
} else if (v_config==5) {
spider_LoadImage(0,_S29);
}
spider_LoadImage(3,_S30);
spider_LoadImage(2,_S31);
spider_LoadImage(1,_S32);
return 0;
}
//
SpiderLaunch = function() {
 spider_InitFunctions();
v_config=5
f_configure_screen(v_config);
t_MIDI=spider_NewList(s_character,"_c",true);
spider_Dim(a_MDhd,21,[153],null);
if (f_miditemplate(v_config)) {
}
v_nboxlen=80
v_oboxlen=90
v_xgap=20
v_yoffset=115
v_textboxy=v_yoffset
v_slidery=(v_textboxy+35)
v_notesxpos=38
v_notesypos=v_yoffset
v_octavesxpos=((v_notesxpos+v_nboxlen)+10)
v_octavesypos=v_yoffset
v_ctrlsxpos=((v_octavesxpos+v_oboxlen)+10)
v_ctrlsypos=v_yoffset
v_notessliderxpos=(v_notesxpos+-5)
v_notessliderypos=v_slidery
v_octavessliderxpos=((v_notesxpos+v_nboxlen)+5)
v_octavessliderypos=v_slidery
v_ctrlssliderxpos=v_ctrlsxpos
v_ctrlssliderypos=v_slidery
v_buttonx=106
v_url$=_S5
spider_Dim(a_Link,21,[306],null);

}


function spider_InitFunctions() {
spider_InitImageDecoder();
spider_InitImage();
spider_Init2DDrawing();
spider_InitArray();
spider_InitMap();
spider_Event_Init();
spider_InitDesktop();
spider_InitWindow();
spider_InitList();
spider_InitGadget();
}


spider.nbLoadedModules++

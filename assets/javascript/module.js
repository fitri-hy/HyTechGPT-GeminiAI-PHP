const _0x13f5cb=_0x4808;(function(_0x310421,_0x4b640e){const _0x420e59=_0x4808,_0xcc18be=_0x310421();while(!![]){try{const _0x2575f1=-parseInt(_0x420e59(0x10c))/0x1*(-parseInt(_0x420e59(0xce))/0x2)+parseInt(_0x420e59(0xff))/0x3+-parseInt(_0x420e59(0x120))/0x4*(parseInt(_0x420e59(0x116))/0x5)+-parseInt(_0x420e59(0x132))/0x6*(parseInt(_0x420e59(0x13a))/0x7)+parseInt(_0x420e59(0xc9))/0x8+-parseInt(_0x420e59(0xc6))/0x9+parseInt(_0x420e59(0xec))/0xa;if(_0x2575f1===_0x4b640e)break;else _0xcc18be['push'](_0xcc18be['shift']());}catch(_0x3ddf3c){_0xcc18be['push'](_0xcc18be['shift']());}}}(_0x3350,0x7817c));import{GoogleGenerativeAI}from'@google/generative-ai';import{HarmBlockThreshold,HarmCategory}from'@google/generative-ai';let chat,chatHistory=[],currentSession=_0x13f5cb(0xea);const defaultChatHistory=JSON[_0x13f5cb(0x14c)]({'default':[]}),chatElement=document[_0x13f5cb(0x121)](_0x13f5cb(0x12c)),userInput=document['getElementById'](_0x13f5cb(0xeb)),apiKeyInput=document['getElementById']('apiKeyInput'),sendButton=document[_0x13f5cb(0x121)](_0x13f5cb(0x124)),loadingIndicator=document[_0x13f5cb(0x121)](_0x13f5cb(0xdf)),imageInput=document['getElementById'](_0x13f5cb(0x13e)),uploadImageBtn=document[_0x13f5cb(0x121)](_0x13f5cb(0x126)),removeAttachmentsButton=document[_0x13f5cb(0x121)](_0x13f5cb(0xd6));async function fileToGenerativePart(_0x1df0e4){return new Promise(_0x1ddd04=>{const _0x1abf26=_0x4808,_0x14869c=new FileReader();_0x14869c[_0x1abf26(0x146)]=()=>{const _0x493622=_0x1abf26;_0x1ddd04({'inlineData':{'data':_0x14869c['result'][_0x493622(0x143)](',')[0x1],'mimeType':_0x1df0e4[_0x493622(0xcb)]}});},_0x14869c[_0x1abf26(0xde)](_0x1df0e4);});}async function createGenerativeModel(_0x4b09b6=![]){const _0x22465c=_0x13f5cb,_0x28bd87=new GoogleGenerativeAI(apiKeyInput[_0x22465c(0xf7)]);return await _0x28bd87['getGenerativeModel']({'model':_0x4b09b6?_0x22465c(0x108):_0x22465c(0x110)});}function addCopyButton(_0x21c6ec,_0x4e660c){const _0x12b9ec=_0x13f5cb;let _0x5ab85d=document[_0x12b9ec(0x134)](_0x12b9ec(0x14d));_0x5ab85d['textContent']='📄',_0x5ab85d[_0x12b9ec(0x149)][_0x12b9ec(0x131)](_0x12b9ec(0x119)),_0x5ab85d[_0x12b9ec(0xf5)]=function(){const _0x160c3e=_0x12b9ec;navigator['clipboard'][_0x160c3e(0xd5)](_0x4e660c)[_0x160c3e(0xc4)](()=>{const _0x351595=_0x160c3e;_0x5ab85d[_0x351595(0x105)]='Copied!',setTimeout(()=>_0x5ab85d[_0x351595(0x105)]='📄',0x7d0);})[_0x160c3e(0xd7)](_0xd3baca=>console[_0x160c3e(0x102)](_0x160c3e(0x12f),_0xd3baca));},_0x21c6ec[_0x12b9ec(0x150)](_0x5ab85d);}function addCopyCodeButton(_0x46674f){const _0x3106e8=_0x13f5cb;let _0x4fc2ea=document[_0x3106e8(0x134)](_0x3106e8(0x14d));_0x4fc2ea[_0x3106e8(0x105)]='📄',_0x4fc2ea[_0x3106e8(0x149)][_0x3106e8(0x131)]('copy-msg-btn'),_0x4fc2ea[_0x3106e8(0xcc)]['marginLeft']=_0x3106e8(0x10d),_0x4fc2ea[_0x3106e8(0xf5)]=function(){const _0x361fdb=_0x3106e8;navigator['clipboard'][_0x361fdb(0xd5)](_0x46674f[_0x361fdb(0x118)])[_0x361fdb(0xc4)](()=>{const _0x2b5634=_0x361fdb;_0x4fc2ea[_0x2b5634(0x105)]=_0x2b5634(0xc7),setTimeout(()=>_0x4fc2ea[_0x2b5634(0x105)]='📄',0x7d0);})[_0x361fdb(0xd7)](_0x49403a=>console['error']('Error\x20copying\x20code:',_0x49403a));},_0x46674f['parentNode'][_0x3106e8(0xca)](_0x4fc2ea,_0x46674f['nextSibling']);}const renderCodeBlocks=()=>{const _0x3c81bb=_0x13f5cb;document[_0x3c81bb(0xe4)](_0x3c81bb(0x10a))['forEach'](_0x3ca1f9=>{const _0x53542e=_0x3c81bb;(!_0x3ca1f9['nextSibling']||!_0x3ca1f9[_0x53542e(0x12d)][_0x53542e(0x149)][_0x53542e(0xd0)](_0x53542e(0x119)))&&addCopyCodeButton(_0x3ca1f9);});};function addDeleteButton(_0x252e21,_0x25029){const _0x1bc98f=_0x13f5cb;let _0x3be663=document[_0x1bc98f(0x134)](_0x1bc98f(0x14d));_0x3be663[_0x1bc98f(0x105)]='🧹',_0x3be663[_0x1bc98f(0x149)][_0x1bc98f(0x131)](_0x1bc98f(0x140)),_0x3be663[_0x1bc98f(0xf5)]=function(){chatHistory['splice'](_0x25029,0x1),initializeChat();},_0x252e21['appendChild'](_0x3be663);}function _0x4808(_0x2630b3,_0x4ec921){const _0x335043=_0x3350();return _0x4808=function(_0x4808b5,_0x65c3fa){_0x4808b5=_0x4808b5-0xc4;let _0x2d55f7=_0x335043[_0x4808b5];return _0x2d55f7;},_0x4808(_0x2630b3,_0x4ec921);}async function regenerateLastModelResponse(){const _0x3ca758=_0x13f5cb;if(chatHistory[_0x3ca758(0x151)]>=0x2){const _0x4325e8=chatHistory[_0x3ca758(0x151)]-0x2,_0xe5f6e5=chatHistory[_0x4325e8];chatHistory['splice'](_0x4325e8,0x2),await initializeChat(),userInput[_0x3ca758(0xf7)]=_0xe5f6e5[_0x3ca758(0xe7)];if(_0xe5f6e5[_0x3ca758(0x142)]&&_0xe5f6e5[_0x3ca758(0x111)]&&_0xe5f6e5[_0x3ca758(0x111)][_0x3ca758(0x151)]>0x0){const _0x24061b=new DataTransfer();for(let _0x1818f2 of _0xe5f6e5[_0x3ca758(0x111)]){const _0x48c856=await fetch(_0x1818f2),_0x55eb72=await _0x48c856[_0x3ca758(0x13c)](),_0x23e53c=new File([_0x55eb72],'regenerated_image',{'type':_0x55eb72['type']});_0x24061b['items'][_0x3ca758(0x131)](_0x23e53c);}imageInput['files']=_0x24061b[_0x3ca758(0xfd)],displayImagePreviews(imageInput[_0x3ca758(0xfd)]);}await sendMessageStream();}else console[_0x3ca758(0x102)](_0x3ca758(0xc8));}function createRegenerateButton(_0x1259cd,_0x2ce6c4){const _0x31a981=_0x13f5cb,_0x272240=document[_0x31a981(0x134)](_0x31a981(0x14d));return _0x272240[_0x31a981(0x105)]='🤖',_0x272240[_0x31a981(0x149)][_0x31a981(0x131)]('regenerate-msg-btn'),_0x272240[_0x31a981(0xf5)]=function(){regenerateLastModelResponse();},_0x272240;}function _0x3350(){const _0xbc1963=['stringify','button','height','disabled','appendChild','length','then','toggle','4694013wyIfPF','Copied!','Unable\x20to\x20regenerate:\x20not\x20enough\x20history\x20present.','6319704gLvGfd','insertBefore','type','style','forEach','462558IoJpog','button-group','contains','input','maxOutputTokensValue','highlightAll','flex','writeText','removeAttachments','catch','scrollHeight','img','generateContentStream','addSession','getItem','div','readAsDataURL','loading','stream','result','message-container','currentSession','querySelectorAll','image/jpeg','deleteSession','parts','isArray','image.jpg','default','userInput','8651270pOseuM','charCodeAt','addEventListener','map','from','setItem','src','keys','parse','onclick','change','value','click','typeset','assign','API\x20key\x20is\x20required\x20to\x20initialize\x20the\x20chat.','apiKey','files','getGenerativeModel','884457dDQqSD','HARM_CATEGORY_HARASSMENT','sendMessageStream','error','none','display','textContent','auto','BLOCK_NONE','gemini-pro-vision','generationConfig','pre\x20code','render','1hgTlHg','4px','match','temperature','gemini-pro','images','trim','concat','maxOutputTokens','remove-img-btn','615RZNNFH','imageCounter','innerText','copy-msg-btn','resetGenConfig','image-preview-container','chatSessions','model','innerHTML','.regenerate-msg-btn','7212WzVFEL','getElementById','text','startChat','send','topK','uploadImageBtn','HARM_CATEGORY_SEXUALLY_EXPLICIT','revokeObjectURL','Apakah\x20Anda\x20yakin\x20ingin\x20menghapus\x20sesi\x20\x22','chatHistory','push','chat','nextSibling','Nama\x20sesi\x20baru\x20harus\x20berbeda\x20dengan\x20nama\x20saat\x20ini.','Error\x20copying\x20text:','target','add','5675772stIuYB','Sesi\x20sudah\x20ada.','createElement','Value','scrollTop','hidden','image-preview-wrapper','topP','7dAVyWe','Anda\x20tidak\x20dapat\x20mengganti\x20nama\x20sesi\x20default.','blob','renameSession','imageInput','all','delete-msg-btn','Session\x20','imageAttached','split','\x22?\x20Ini\x20tidak\x20dapat\x20dibatalkan.','splice','onloadend','markdownit','topKValue','classList','manage-container','temperatureValue'];_0x3350=function(){return _0xbc1963;};return _0x3350();}const addChatSession=()=>{const _0x1c02ea=_0x13f5cb,_0x428eae=JSON[_0x1c02ea(0xf4)](localStorage['getItem'](_0x1c02ea(0x12a))||defaultChatHistory);let _0x3a9a70=0x1;Object[_0x1c02ea(0xf3)](_0x428eae)[_0x1c02ea(0xcd)](_0x47901f=>{const _0x317849=_0x1c02ea,_0xd9114f=_0x47901f[_0x317849(0x10e)](/^Session (\d+)$/);if(_0xd9114f){const _0x587bd5=parseInt(_0xd9114f[0x1],0xa);_0x587bd5>=_0x3a9a70&&(_0x3a9a70=_0x587bd5+0x1);}});const _0x480954=_0x1c02ea(0x141)+_0x3a9a70;_0x428eae[_0x480954]=[],localStorage[_0x1c02ea(0xf1)]('chatHistory',JSON[_0x1c02ea(0x14c)](_0x428eae)),currentSession=_0x480954,loadChatSessionsIntoDropdown(),loadChatHistoryFromLocalStorage(),saveCurrentSessionToLocalStorage(),renderChat();},renameChatSession=()=>{const _0x22ecc4=_0x13f5cb;if(currentSession===_0x22ecc4(0xea))alert(_0x22ecc4(0x13b));else{const _0x15f0fb=prompt('Enter\x20new\x20session\x20name:',currentSession);if(_0x15f0fb&&_0x15f0fb!==currentSession){const _0x54202f=JSON[_0x22ecc4(0xf4)](localStorage[_0x22ecc4(0xdc)](_0x22ecc4(0x12a))||defaultChatHistory);if(_0x54202f[_0x15f0fb]){alert(_0x22ecc4(0x133));return;}_0x54202f[_0x15f0fb]=_0x54202f[currentSession],delete _0x54202f[currentSession],localStorage['setItem'](_0x22ecc4(0x12a),JSON['stringify'](_0x54202f)),currentSession=_0x15f0fb,loadChatSessionsIntoDropdown(),saveCurrentSessionToLocalStorage();}else _0x15f0fb&&alert(_0x22ecc4(0x12e));}},deleteChatSession=()=>{const _0x21b305=_0x13f5cb;if(currentSession==='default'){if(confirm('Apakah\x20Anda\x20yakin\x20ingin\x20menghapus\x20sesi\x20default?\x20Ini\x20tidak\x20dapat\x20dibatalkan.')){const _0x53d429=JSON[_0x21b305(0xf4)](localStorage['getItem']('chatHistory')||defaultChatHistory);_0x53d429[_0x21b305(0xea)]=[],localStorage[_0x21b305(0xf1)](_0x21b305(0x12a),JSON[_0x21b305(0x14c)](_0x53d429)),loadChatHistoryFromLocalStorage(),renderChat();}}else{if(confirm(_0x21b305(0x129)+currentSession+_0x21b305(0x144))){const _0x51aa8a=JSON[_0x21b305(0xf4)](localStorage[_0x21b305(0xdc)](_0x21b305(0x12a))||defaultChatHistory);delete _0x51aa8a[currentSession],localStorage['setItem'](_0x21b305(0x12a),JSON[_0x21b305(0x14c)](_0x51aa8a)),currentSession=_0x21b305(0xea),loadChatSessionsIntoDropdown(),loadChatHistoryFromLocalStorage(),saveCurrentSessionToLocalStorage(),renderChat();}}},saveCurrentSessionToLocalStorage=()=>{const _0x190b29=_0x13f5cb;localStorage['setItem'](_0x190b29(0xe3),currentSession);},loadCurrentSessionFromLocalStorage=()=>{const _0x486a96=_0x13f5cb,_0x349b2e=localStorage[_0x486a96(0xdc)](_0x486a96(0xe3));_0x349b2e&&(currentSession=_0x349b2e,loadChatHistoryFromLocalStorage(),loadChatSessionsIntoDropdown());},loadChatSessionsIntoDropdown=()=>{const _0x593fa2=_0x13f5cb,_0x302dd2=JSON[_0x593fa2(0xf4)](localStorage[_0x593fa2(0xdc)](_0x593fa2(0x12a))||defaultChatHistory),_0x599ebe=document[_0x593fa2(0x121)](_0x593fa2(0x11c));_0x599ebe[_0x593fa2(0x11e)]='';for(const _0x2fe358 in _0x302dd2){const _0x45bc70=document['createElement']('option');_0x45bc70[_0x593fa2(0xf7)]=_0x2fe358,_0x45bc70[_0x593fa2(0x122)]=_0x2fe358,_0x599ebe[_0x593fa2(0x150)](_0x45bc70);}_0x599ebe[_0x593fa2(0xf7)]=currentSession;};document['getElementById'](_0x13f5cb(0x11c))['addEventListener'](_0x13f5cb(0xf6),_0x2323f4=>{const _0x48a218=_0x13f5cb;currentSession=_0x2323f4['target'][_0x48a218(0xf7)],saveCurrentSessionToLocalStorage(),loadChatHistoryFromLocalStorage(),renderChat();}),document[_0x13f5cb(0x121)](_0x13f5cb(0xdb))['addEventListener'](_0x13f5cb(0xf8),addChatSession),document[_0x13f5cb(0x121)](_0x13f5cb(0x13d))['addEventListener'](_0x13f5cb(0xf8),renameChatSession),document[_0x13f5cb(0x121)](_0x13f5cb(0xe6))[_0x13f5cb(0xee)]('click',deleteChatSession),document[_0x13f5cb(0xee)]('DOMContentLoaded',()=>{loadGenerationConfigFromLocalStorage(),loadApiKeyFromLocalStorage(),loadCurrentSessionFromLocalStorage();});const saveChatToLocalStorage=async()=>{const _0x10d4ba=_0x13f5cb,_0x4fe604=JSON['parse'](localStorage[_0x10d4ba(0xdc)](_0x10d4ba(0x12a))||defaultChatHistory),_0x44d764=await Promise[_0x10d4ba(0x13f)](chatHistory['map'](async _0x33811e=>{const _0x49380b=_0x10d4ba;if(_0x33811e[_0x49380b(0x142)]&&_0x33811e[_0x49380b(0x111)]&&_0x33811e[_0x49380b(0x111)]['length']>0x0){const _0x55b26b=await Promise[_0x49380b(0x13f)](_0x33811e[_0x49380b(0x111)][_0x49380b(0xef)](async _0x2d83d1=>{const _0xfdbf84=_0x49380b,_0x2b229e=await fetch(_0x2d83d1),_0x317743=await _0x2b229e[_0xfdbf84(0x13c)]();return await blobToBase64(_0x317743);}));return{..._0x33811e,'images':_0x55b26b};}return _0x33811e;}));_0x4fe604[currentSession]=_0x44d764,localStorage[_0x10d4ba(0xf1)]('chatHistory',JSON['stringify'](_0x4fe604));},blobToBase64=_0x295ba2=>{return new Promise(_0x328ddf=>{const _0x1c3a96=_0x4808,_0x1e4e88=new FileReader();_0x1e4e88[_0x1c3a96(0x146)]=()=>{const _0x43cdcb=_0x1c3a96;_0x328ddf(_0x1e4e88[_0x43cdcb(0xe1)]);},_0x1e4e88['readAsDataURL'](_0x295ba2);});},loadChatHistoryFromLocalStorage=()=>{const _0x55a6db=_0x13f5cb,_0x3b3e27=JSON[_0x55a6db(0xf4)](localStorage[_0x55a6db(0xdc)](_0x55a6db(0x12a))||defaultChatHistory);!Array[_0x55a6db(0xe8)](_0x3b3e27[currentSession])&&(_0x3b3e27[currentSession]=[]);const _0x3d558e=_0x3b3e27[currentSession],_0x3441d0=_0x3d558e[_0x55a6db(0xef)](_0x2abf6c=>{const _0xa88546=_0x55a6db;if(_0x2abf6c[_0xa88546(0x142)]&&_0x2abf6c['images']&&_0x2abf6c[_0xa88546(0x111)][_0xa88546(0x151)]>0x0){const _0x1d541f=_0x2abf6c[_0xa88546(0x111)][_0xa88546(0xef)](_0x2b1929=>{const _0x23a42e=_0xa88546,_0x2eafe7=atob(_0x2b1929[_0x23a42e(0x143)](',')[0x1]),_0x124004=new ArrayBuffer(_0x2eafe7[_0x23a42e(0x151)]),_0x50a5d6=new Uint8Array(_0x124004);for(let _0x1f32f0=0x0;_0x1f32f0<_0x2eafe7['length'];_0x1f32f0++){_0x50a5d6[_0x1f32f0]=_0x2eafe7[_0x23a42e(0xed)](_0x1f32f0);}const _0x1616ad=new Blob([_0x50a5d6],{'type':_0x23a42e(0xe5)}),_0x31ef3e=new File([_0x1616ad],_0x23a42e(0xe9),{'type':_0x23a42e(0xe5)});return URL['createObjectURL'](_0x31ef3e);});return{..._0x2abf6c,'images':_0x1d541f};}return _0x2abf6c;});chatHistory=_0x3441d0,renderChat(),initializeChat();},generationConfig={'maxOutputTokens':0x4000,'temperature':0.9,'topP':0.95,'topK':0x1},safetySettings=[{'category':HarmCategory[_0x13f5cb(0x100)],'threshold':HarmBlockThreshold[_0x13f5cb(0x107)]},{'category':HarmCategory['HARM_CATEGORY_HATE_SPEECH'],'threshold':HarmBlockThreshold['BLOCK_NONE']},{'category':HarmCategory[_0x13f5cb(0x127)],'threshold':HarmBlockThreshold[_0x13f5cb(0x107)]},{'category':HarmCategory['HARM_CATEGORY_DANGEROUS_CONTENT'],'threshold':HarmBlockThreshold['BLOCK_NONE']}];function saveGenerationConfigToLocalStorage(){const _0x4a6e98=_0x13f5cb;localStorage[_0x4a6e98(0xf1)](_0x4a6e98(0x109),JSON[_0x4a6e98(0x14c)](generationConfig));}function loadGenerationConfigFromLocalStorage(){const _0x3c9997=_0x13f5cb,_0x2f5e70=JSON[_0x3c9997(0xf4)](localStorage['getItem'](_0x3c9997(0x109)));_0x2f5e70&&(Object[_0x3c9997(0xfa)](generationConfig,_0x2f5e70),updateSliderUI());}function updateSliderUI(){const _0x13dba6=_0x13f5cb;document['getElementById']('maxOutputTokens')[_0x13dba6(0xf7)]=generationConfig[_0x13dba6(0x114)],document['getElementById'](_0x13dba6(0xd2))[_0x13dba6(0x105)]=generationConfig[_0x13dba6(0x114)],document[_0x13dba6(0x121)](_0x13dba6(0x10f))[_0x13dba6(0xf7)]=generationConfig[_0x13dba6(0x10f)],document[_0x13dba6(0x121)](_0x13dba6(0x14b))['textContent']=generationConfig['temperature'],document[_0x13dba6(0x121)]('topP')[_0x13dba6(0xf7)]=generationConfig[_0x13dba6(0x139)],document[_0x13dba6(0x121)]('topPValue')[_0x13dba6(0x105)]=generationConfig[_0x13dba6(0x139)],document[_0x13dba6(0x121)](_0x13dba6(0x125))[_0x13dba6(0xf7)]=generationConfig[_0x13dba6(0x125)],document[_0x13dba6(0x121)](_0x13dba6(0x148))['textContent']=generationConfig[_0x13dba6(0x125)];}function updateGenerationConfig(_0x20da93){const _0x404004=_0x13f5cb,_0x45f67f=_0x20da93[_0x404004(0x130)]['id'],_0x18335c=parseFloat(_0x20da93[_0x404004(0x130)][_0x404004(0xf7)]);generationConfig[_0x45f67f]=_0x18335c,document[_0x404004(0x121)](_0x45f67f+_0x404004(0x135))['textContent']=_0x18335c,saveGenerationConfigToLocalStorage(),initializeChat();}document[_0x13f5cb(0x121)](_0x13f5cb(0x114))[_0x13f5cb(0xee)]('input',updateGenerationConfig),document[_0x13f5cb(0x121)]('temperature')['addEventListener'](_0x13f5cb(0xd1),updateGenerationConfig),document[_0x13f5cb(0x121)](_0x13f5cb(0x139))[_0x13f5cb(0xee)]('input',updateGenerationConfig),document['getElementById']('topK')[_0x13f5cb(0xee)](_0x13f5cb(0xd1),updateGenerationConfig);function resetGenerationConfigToDefault(){const _0x5c394d=_0x13f5cb;generationConfig['maxOutputTokens']=0x4000,generationConfig['temperature']=0.9,generationConfig[_0x5c394d(0x139)]=0.95,generationConfig['topK']=0x1,updateSliderUI(),saveGenerationConfigToLocalStorage();}document[_0x13f5cb(0x121)](_0x13f5cb(0x11a))[_0x13f5cb(0xee)](_0x13f5cb(0xf8),resetGenerationConfigToDefault);async function initializeChat(){const _0x4366ee=_0x13f5cb;if(apiKeyInput[_0x4366ee(0xf7)]){const _0x2dfbe6=new GoogleGenerativeAI(apiKeyInput['value']),_0x53db66=await _0x2dfbe6[_0x4366ee(0xfe)]({'model':_0x4366ee(0x110)});chat=_0x53db66[_0x4366ee(0x123)]({'history':chatHistory,'generationConfig':generationConfig,'safetySettings':safetySettings}),renderChat();}else alert(_0x4366ee(0xfb));}const renderChat=()=>{const _0x28fe6c=_0x13f5cb;chatElement[_0x28fe6c(0x11e)]='',chatHistory[_0x28fe6c(0xcd)](({role:_0x4226c1,parts:_0x2e1cac,imageAttached:_0x574bf2,images:_0x300e1c},_0x4c90d0)=>{const _0x5cccff=_0x28fe6c,_0x1c0246=document['createElement'](_0x5cccff(0xdd));_0x1c0246[_0x5cccff(0x149)]['add'](_0x5cccff(0xe2),_0x4226c1);const _0x3947d7=document[_0x5cccff(0x134)](_0x5cccff(0xdd));_0x3947d7[_0x5cccff(0x149)][_0x5cccff(0x131)]('message',_0x4226c1);const _0x45348a=_0x574bf2?'\x20📸':'',_0x56a8ce=window[_0x5cccff(0x147)]();_0x3947d7[_0x5cccff(0x11e)]=_0x56a8ce[_0x5cccff(0x10b)](_0x2e1cac)+_0x45348a;if(_0x574bf2&&_0x300e1c['length']>0x0){const _0x3182a3=document[_0x5cccff(0x134)](_0x5cccff(0xdd));_0x3182a3[_0x5cccff(0x149)][_0x5cccff(0x131)](_0x5cccff(0x11b)),_0x300e1c['forEach'](_0xbb3864=>{const _0x1a168a=_0x5cccff,_0x2aef84=document[_0x1a168a(0x134)](_0x1a168a(0xd9));_0x2aef84[_0x1a168a(0xf2)]=_0xbb3864,_0x2aef84[_0x1a168a(0x149)][_0x1a168a(0x131)]('image-preview'),_0x3182a3[_0x1a168a(0x150)](_0x2aef84);}),_0x1c0246[_0x5cccff(0x150)](_0x3182a3);}_0x1c0246['appendChild'](_0x3947d7);const _0x46e8e9=document['createElement'](_0x5cccff(0xdd));_0x46e8e9['classList'][_0x5cccff(0x131)](_0x5cccff(0xcf)),addCopyButton(_0x46e8e9,_0x2e1cac),addDeleteButton(_0x46e8e9,_0x4c90d0);if(_0x4226c1===_0x5cccff(0x11d)&&_0x4c90d0===chatHistory['length']-0x1){const _0x5ed737=createRegenerateButton(_0x2e1cac,_0x4c90d0);_0x46e8e9['appendChild'](_0x5ed737);}_0x1c0246[_0x5cccff(0x150)](_0x46e8e9),chatElement[_0x5cccff(0x150)](_0x1c0246);}),renderCodeBlocks(),saveChatToLocalStorage(),MathJax[_0x28fe6c(0xf9)](),hljs[_0x28fe6c(0xd3)](),chatElement[_0x28fe6c(0x136)]=chatElement[_0x28fe6c(0xd8)];},saveApiKeyToLocalStorage=()=>{const _0x4eddf0=_0x13f5cb;localStorage[_0x4eddf0(0xf1)](_0x4eddf0(0xfc),apiKeyInput[_0x4eddf0(0xf7)]),apiKeyInput['value']&&loadChatSessionsIntoDropdown();},loadApiKeyFromLocalStorage=()=>{const _0x2502f3=_0x13f5cb,_0x371fcc=localStorage['getItem'](_0x2502f3(0xfc));_0x371fcc&&(apiKeyInput[_0x2502f3(0xf7)]=_0x371fcc,loadChatSessionsIntoDropdown(),loadChatHistoryFromLocalStorage());},toggleLoading=_0x18b463=>{const _0x405570=_0x13f5cb;loadingIndicator[_0x405570(0xcc)][_0x405570(0x104)]=_0x18b463?_0x405570(0xd4):_0x405570(0x103),sendButton[_0x405570(0x14f)]=_0x18b463;const _0x10dd61=document[_0x405570(0xe4)]('.delete-msg-btn'),_0x86df89=document['querySelectorAll'](_0x405570(0x11f));_0x10dd61['forEach'](_0x285a7d=>{const _0x458626=_0x405570;_0x285a7d[_0x458626(0x14f)]=_0x18b463;}),_0x86df89[_0x405570(0xcd)](_0x2fc911=>{const _0x1293f9=_0x405570;_0x2fc911[_0x1293f9(0x14f)]=_0x18b463;});};apiKeyInput[_0x13f5cb(0xee)](_0x13f5cb(0xf6),saveApiKeyToLocalStorage),apiKeyInput['addEventListener'](_0x13f5cb(0xf6),initializeChat);const displayImagePreviews=_0x52ef44=>{const _0x40c1b8=_0x13f5cb,_0x55b9c1=document[_0x40c1b8(0x121)](_0x40c1b8(0x11b));_0x55b9c1[_0x40c1b8(0x11e)]='',_0x52ef44['length']>0x0?(Array[_0x40c1b8(0xf0)](_0x52ef44)[_0x40c1b8(0xcd)]((_0x3fc496,_0x85b81a)=>{const _0x4fd523=_0x40c1b8,_0x140e3e=document['createElement'](_0x4fd523(0xd9));_0x140e3e['src']=URL['createObjectURL'](_0x3fc496),_0x140e3e['onload']=()=>URL[_0x4fd523(0x128)](_0x140e3e[_0x4fd523(0xf2)]);const _0x4bc51b=document[_0x4fd523(0x134)](_0x4fd523(0x14d));_0x4bc51b['innerHTML']='&#128465;',_0x4bc51b[_0x4fd523(0x149)]['add'](_0x4fd523(0x115)),_0x4bc51b[_0x4fd523(0xee)](_0x4fd523(0xf8),()=>removeImagePreview(_0x85b81a));const _0x4b945e=document[_0x4fd523(0x134)]('div');_0x4b945e[_0x4fd523(0x149)][_0x4fd523(0x131)](_0x4fd523(0x138)),_0x4b945e[_0x4fd523(0x150)](_0x140e3e),_0x4b945e['appendChild'](_0x4bc51b),_0x55b9c1['appendChild'](_0x4b945e);}),_0x55b9c1[_0x40c1b8(0x149)]['remove'](_0x40c1b8(0x137))):_0x55b9c1[_0x40c1b8(0x149)][_0x40c1b8(0x131)](_0x40c1b8(0x137));},removeImagePreview=_0x4fe86e=>{const _0x1bdbab=_0x13f5cb,_0x3422eb=Array['from'](imageInput[_0x1bdbab(0xfd)]);_0x3422eb[_0x1bdbab(0x145)](_0x4fe86e,0x1);const _0x3aba92=new DataTransfer();_0x3422eb['forEach'](_0x2aae03=>_0x3aba92['items'][_0x1bdbab(0x131)](_0x2aae03)),imageInput['files']=_0x3aba92[_0x1bdbab(0xfd)],displayImagePreviews(imageInput[_0x1bdbab(0xfd)]),updateImageCounter();},updateImageCounter=()=>{const _0xc73016=_0x13f5cb,_0x2c1ca7=document[_0xc73016(0x121)](_0xc73016(0x117)),_0x2120f3=imageInput['files']?imageInput['files'][_0xc73016(0x151)]:0x0;_0x2c1ca7[_0xc73016(0x105)]=_0x2120f3,displayImagePreviews(imageInput[_0xc73016(0xfd)]);};imageInput[_0x13f5cb(0xee)](_0x13f5cb(0xf6),updateImageCounter);const removeAttachments=()=>{const _0x14ebe7=_0x13f5cb;imageInput[_0x14ebe7(0xf7)]='',updateImageCounter();};removeAttachmentsButton[_0x13f5cb(0xee)]('click',removeAttachments);const sendMessageStream=async()=>{const _0x557624=_0x13f5cb;if(!apiKeyInput[_0x557624(0xf7)]){alert('You\x20must\x20provide\x20an\x20API\x20key\x20before\x20sending\x20messages.');return;}const _0x1bf57e=userInput[_0x557624(0xf7)][_0x557624(0x112)](),_0x4ab596=imageInput[_0x557624(0xfd)];let _0xb5526c=[{'text':_0x1bf57e}],_0x5ef019=![];if(_0x4ab596&&_0x4ab596[_0x557624(0x151)]>0x0){const _0x5564c9=Array[_0x557624(0xf0)](_0x4ab596)['map'](fileToGenerativePart),_0x1ee515=await Promise[_0x557624(0x13f)](_0x5564c9);_0xb5526c=_0xb5526c[_0x557624(0x113)](_0x1ee515),_0x5ef019=!![];}updateImageCounter();const _0x41415d=await createGenerativeModel(_0x5ef019);chat=await _0x41415d[_0x557624(0x123)]({'history':chatHistory,'generationConfig':generationConfig,'safetySettings':safetySettings});if(_0x1bf57e==='')return;chatHistory['push']({'role':'user','parts':_0x1bf57e,'imageAttached':_0x5ef019,'images':_0x5ef019?Array['from'](_0x4ab596)[_0x557624(0xef)](_0x507e44=>URL['createObjectURL'](_0x507e44)):[]}),renderChat(),userInput[_0x557624(0xf7)]='',imageInput['value']='',updateImageCounter(),adjustTextareaHeight(userInput),toggleLoading(!![]);try{let _0x360dcd;_0x5ef019?_0x360dcd=await _0x41415d[_0x557624(0xda)](_0xb5526c):_0x360dcd=await chat[_0x557624(0x101)](_0xb5526c);let _0x36ed54=chatHistory[_0x557624(0x151)];for await(const _0x218ccd of _0x360dcd[_0x557624(0xe0)]){const _0x5d0fc0=await _0x218ccd['text']();chatHistory[_0x36ed54]?chatHistory[_0x36ed54]={'role':_0x557624(0x11d),'parts':chatHistory[_0x36ed54][_0x557624(0xe7)]+_0x5d0fc0}:(chatHistory['push']({'role':_0x557624(0x11d),'parts':_0x5d0fc0}),_0x36ed54=chatHistory['length']-0x1),renderChat();}toggleLoading(![]);}catch(_0x565579){console['error'](_0x565579),chatHistory[_0x557624(0x12b)]({'role':_0x557624(0x11d),'parts':_0x565579['message']}),toggleLoading(![]),renderChat();}};sendButton[_0x13f5cb(0xee)](_0x13f5cb(0xf8),sendMessageStream),document['querySelector']('button#toggle-manage')[_0x13f5cb(0xee)](_0x13f5cb(0xf8),()=>{const _0xfd7941=_0x13f5cb,_0x330aa4=document['getElementById'](_0xfd7941(0x14a)),_0x568399=document[_0xfd7941(0x121)](_0xfd7941(0x12c));_0x330aa4[_0xfd7941(0x149)][_0xfd7941(0xc5)](_0xfd7941(0x137)),_0x568399['classList'][_0xfd7941(0xc5)](_0xfd7941(0x137));});const adjustTextareaHeight=_0x33ef46=>{const _0x245237=_0x13f5cb;_0x33ef46['value']===''?_0x33ef46[_0x245237(0xcc)]['height']='35px':(_0x33ef46[_0x245237(0xcc)][_0x245237(0x14e)]=_0x245237(0x106),_0x33ef46['style'][_0x245237(0x14e)]=_0x33ef46[_0x245237(0xd8)]+'px');};userInput[_0x13f5cb(0xee)](_0x13f5cb(0xd1),()=>adjustTextareaHeight(userInput));
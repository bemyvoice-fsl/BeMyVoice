 
var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', 'Website/1 basic greetings/1 hello.mp4');
source.setAttribute('type', 'video/mp4');

video.appendChild(source);
video.play();
console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
});

  var dictionary=[
    {
      word:"a",
      translation:"a",
      definition:"the first letter in the alphabet",
      fsl:"a"
    },
    {
      word:"b",
      translation:"b",
      definition:"the second letter in the alphabet",
      fsl:"b"
    },
    {
      word:"c",
      translation:"c",
      definition:"the third letter in the alphabet",
      fsl:"c"
    },
    {
      word:"d",
      translation:"d",
      definition:"the fourth letter in the alphabet",
      fsl:"d"
    },
    {
        word:"e",
        translation:"e",
        definition:"the fifth letter in the alphabet",
        fsl:"e"
    },
    {
        word:"f",
        translation:"f",
        definition:"the sixth letter in the alphabet",
        fsl:"f"
      },
      {
      word:"g",
      translation:"g",
      definition:"the seventh letter in the alphabet",
      fsl:"g"
    },
    {
        word:"h",
        translation:"h",
        definition:"the eighth letter in the alphabet",
        fsl:"h"
      },
      {
        word:"i",
        translation:"i",
        definition:"the ninth letter in the alphabet",
        fsl:"i"
      },
      {
        word:"j",
        translation:"j",
        definition:"the tenth letter in the alphabet",
        fsl:"j"
      },
      {
        word:"k",
        translation:"k",
        definition:"the eleventh letter in the alphabet",
        fsl:"k"
      },
      {
        word:"l",
        translation:"l",
        definition:"the twelfth letter in the alphabet",
        fsl:"l"
      },
      {
        word:"m",
        translation:"m",
        definition:"the thirteenth letter in the alphabet",
        fsl:"m"
      },
      {
        word:"n",
        translation:"n",
        definition:"the fourteenth letter in the alphabet",
        fsl:"n"
      },
      {
        word:"o",
        translation:"o",
        definition:"the fifteenth letter in the alphabet",
        fsl:"o"
      },
      {
        word:"p",
        translation:"p",
        definition:"the sixteenth letter in the alphabet",
        fsl:"p"
      },
      {
        word:"q",
        translation:"q",
        definition:"the seventeenth letter in the alphabet",
        fsl:"q"
      },
      {
        word:"r",
        translation:"r",
        definition:"the eighteenth letter in the alphabet",
        fsl:"r"
      },
      {
        word:"s",
        translation:"s",
        definition:"the nineteenth letter in the alphabet",
        fsl:"s"
      },
      {
        word:"t",
        translation:"t",
        definition:"the twentieth letter in the alphabet",
        fsl:"t"
      },
      {
        word:"u",
        translation:"u",
        definition:"the twenty first letter in the alphabet",
        fsl:"u"
      },
      {
        word:"v",
        translation:"v",
        definition:"the twenty second letter in the alphabet",
        fsl:"v"
      },
      {
        word:"w",
        translation:"w",
        definition:"the twenty third letter in the alphabet",
        fsl:"w"
      },
      {
        word:"x",
        translation:"x",
        definition:"the twenty fourth letter in the alphabet",
        fsl:"x"
      },
      {
        word:"y",
        translation:"y",
        definition:"the twenty fifth letter in the alphabet",
        fsl:"y"
      },
      {
        word:"z",
        translation:"z",
        definition:"the twenty sixth letter in the alphabet",
        fsl:"z"
      },
      {
        word:"Hi/Hello",
        translation:"Hi/Hello",
        definition:"-",
        fsl:"Hi or Hello!"
      },
      {
        word:"Good Morning",
        translation:"Magandang Umaga",
        definition:"-",
        fsl:"Magandang umaga!"
      },
      {
        word:"Good Afternoon",
        translation:"Magandang Hapon",
        definition:"-",
        fsl:"Magandang Hapon!"
      },
      {
        word:"Good Evening",
        translation:"Magandang Gabi",
        definition:"-",
        fsl:"magandang gabi"
      },
      {
        word:"My name is...",
        translation:"Ang aking pangalan ay... / Ang pangalan ko ay...",
        definition:"-",
        fsl:"Ang aking pangalan ay... / Ang pangalan ko ay...!"
      },
      {
        word:"What's your name?",
        translation:"Anong pangalan mo?",
        definition:"-",
        fsl:"Anong pangalan mo?"
      },
      {
        word:"Nice to meet you",
        translation:"Ikinagagalak kitang makilala",
        definition:"-",
        fsl:"Ikinagagalak kitang makilala"
      },
      {
        word:"How are you?",
        translation:"Kumusta/Kumusta ka?",
        definition:"-",
        fsl:"Kumusta/Kumusta ka?"
      },
      {
        word:"I am fine",
        translation:"Ayos lang ako. / Okay lang.",
        definition:"-",
        fsl:"Ayos lang ako. / Okay lang."
      },
      {
        word:"I'm great",
        translation:"Ayos lang ako. / Okay lang.",
        definition:"-",
        fsl:"Ayos lang ako. / Okay lang."
      },
      {
        word:"What are you doing?",
        translation:"Anong ginagawa mo?",
        definition:"-",
        fsl:"Anong ginagawa mo?"
      },
      {
        word:"Nothing much",
        translation:"Wala naman.",
        definition:"-",
        fsl:"Wala naman."
      },
      {
        word:"Where did you come from?",
        translation:"Saan ka nagmula/nanggaling?",
        definition:"-",
        fsl:"Saan ka nagmula/nanggaling?"
      },
      {
        word:"I'm from...",
        translation:"Nagmula/Galing ako sa...",
        definition:"-",
        fsl:"Nagmula/Galing ako sa..."
      },
      {
        word:"Oh, I see",
        translation:"Oh, I see",
        definition:"-",
        fsl:"Ahh"
      },
      {
        word:"Excuse me",
        translation:"Makikiraan po",
        definition:"-",
        fsl:"Makikiraan po"
      },
      {
        word:"I'm sorry",
        translation:"Pasensya/Paumanhin po",
        definition:"-",
        fsl:"Pasensya/Paumanhin po"
      },
      {
        word:"See you later",
        translation:"Kita-kits mamaya! (informal)",
        definition:"-",
        fsl:"Kita-kits mamaya!"
      },
      {
        word:"See you soon",
        translation:"Hanggang sa muli! / Kita-kits! (informal)",
        definition:"-",
        fsl:"Hanggang sa muli! / Kita-kits!!"
      },
      {
        word:"I understand",
        translation:"Naiintindihan ko",
        definition:"-",
        fsl:"Naiintindihan ko"
      },
      {
        word:"I don't understand",
        translation:"Hindi ko naiintindihan",
        definition:"-",
        fsl:"Hindi ko naiintindihan"
      },
      {
        word:"Sorry",
        translation:"Pasensya na",
        definition:"-",
        fsl:"Pasensya na"
      },
      {
        word:"It's fine",
        translation:"Ayos lang / Okay lang (informal)",
        definition:"-",
        fsl:"Ayos lang/Okay lang"
      },
      {
        word:"Okay",
        translation:"Okay",
        definition:"-",
        fsl:"Okay"
      },
      {
        word:"Yes",
        translation:"Oo",
        definition:"-",
        fsl:"Oo"
      },
      {
        word:"No",
        translation:"Hindi",
        definition:"-",
        fsl:"Hindi"
      },
      {
        word:"Thank you",
        translation:"Salamat",
        definition:"-",
        fsl:"Salamat"
      },
      {
        word:"Welcome",
        translation:"Walang anuman",
        definition:"-",
        fsl:"Walang anuman"
      },
      {
        word:"How much?",
        translation:"Gaano?",
        definition:"-",
        fsl:"Gaano?"
      },
      {
        word:"Me/I",
        translation:"Ako",
        definition:"-",
        fsl:"Ako"
      },
      {
        word:"You",
        translation:"Ikaw",
        definition:"-",
        fsl:"Ikaw"
      },
      {
        word:"He/She",
        translation:"Siya",
        definition:"-",
        fsl:"Siya"
      },
      {
        word:"Them",
        translation:"Sila",
        definition:"-",
        fsl:"Sila"
      },
      {
        word:"We",
        translation:"Tayo/Kami",
        definition:"-",
        fsl:"Tayo/Kami"
      },
      {
        word:"Mine",
        translation:"Akin",
        definition:"-",
        fsl:"Akin"
      },
      {
        word:"Our",
        translation:"Atin",
        definition:"-",
        fsl:"Atin"
      },
      {
        word:"Your",
        translation:"Sa iyo/Sa'yo",
        definition:"-",
        fsl:"Sa iyo/Sa'yo"
      },
      {
        word:"His/Her",
        translation:"Kanya",
        definition:"-",
        fsl:"Kanya"
      },
      {
        word:"Their",
        translation:"Kanila",
        definition:"-",
        fsl:"Kanila"
      },
      {
        word:"What",
        translation:"Ano?",
        definition:"-",
        fsl:"Ano?"
      },
      {
        word:"When",
        translation:"Kailan?",
        definition:"-",
        fsl:"Kailan?"
      },
      {
        word:"Who",
        translation:"Sino?",
        definition:"-",
        fsl:"Sino?"
      },
      {
        word:"Why",
        translation:"Bakit?",
        definition:"-",
        fsl:"Bakit?"
      },
      {
        word:"Where",
        translation:"Saan?",
        definition:"-",
        fsl:"Saan?"
      },
      
  ];

function alphabet0(){
document.getElementById("word_text").innerHTML = dictionary[0].word;
document.getElementById("translation").innerHTML = dictionary[0].translation;
document.getElementById("definition").innerHTML = dictionary[0].definition;
document.getElementById("fsl").innerHTML = dictionary[0].fsl;
}

function alphabet1(){
document.getElementById("word_text").innerHTML = dictionary[1].word;
document.getElementById("translation").innerHTML = dictionary[1].translation;
document.getElementById("definition").innerHTML = dictionary[1].definition;
document.getElementById("fsl").innerHTML = dictionary[1].fsl;
}
    
function alphabet2(){
document.getElementById("word_text").innerHTML = dictionary[2].word;
document.getElementById("translation").innerHTML = dictionary[2].translation;
document.getElementById("definition").innerHTML = dictionary[2].definition;
document.getElementById("fsl").innerHTML = dictionary[2].fsl;
}

function alphabet3(){
document.getElementById("word_text").innerHTML = dictionary[3].word;
document.getElementById("translation").innerHTML = dictionary[3].translation;
document.getElementById("definition").innerHTML = dictionary[3].definition;
document.getElementById("fsl").innerHTML = dictionary[3].fsl;
    }

function alphabet4(){
document.getElementById("word_text").innerHTML = dictionary[4].word;
document.getElementById("translation").innerHTML = dictionary[4].translation;
document.getElementById("definition").innerHTML = dictionary[4].definition;
document.getElementById("fsl").innerHTML = dictionary[4].fsl;
}

function alphabet5(){
document.getElementById("word_text").innerHTML = dictionary[5].word;
document.getElementById("translation").innerHTML = dictionary[5].translation;
document.getElementById("definition").innerHTML = dictionary[5].definition;
document.getElementById("fsl").innerHTML = dictionary[5].fsl;
}

function alphabet6(){
document.getElementById("word_text").innerHTML = dictionary[6].word;
document.getElementById("translation").innerHTML = dictionary[6].translation;
document.getElementById("definition").innerHTML = dictionary[6].definition;
document.getElementById("fsl").innerHTML = dictionary[6].fsl;
}

function alphabet7(){
document.getElementById("word_text").innerHTML = dictionary[7].word;
document.getElementById("translation").innerHTML = dictionary[7].translation;
document.getElementById("definition").innerHTML = dictionary[7].definition;
document.getElementById("fsl").innerHTML = dictionary[7].fsl;
}

function alphabet8(){
document.getElementById("word_text").innerHTML = dictionary[8].word;
document.getElementById("translation").innerHTML = dictionary[8].translation;
document.getElementById("definition").innerHTML = dictionary[8].definition;
document.getElementById("fsl").innerHTML = dictionary[8].fsl;
}

function alphabet9(){
document.getElementById("word_text").innerHTML = dictionary[9].word;
document.getElementById("translation").innerHTML = dictionary[9].translation;
document.getElementById("definition").innerHTML = dictionary[9].definition;
document.getElementById("fsl").innerHTML = dictionary[9].fsl;
}

function alphabet10(){
document.getElementById("word_text").innerHTML = dictionary[10].word;
document.getElementById("translation").innerHTML = dictionary[10].translation;
document.getElementById("definition").innerHTML = dictionary[10].definition;
document.getElementById("fsl").innerHTML = dictionary[10].fsl;
}

function alphabet11(){
document.getElementById("word_text").innerHTML = dictionary[11].word;
document.getElementById("translation").innerHTML = dictionary[11].translation;
document.getElementById("definition").innerHTML = dictionary[11].definition;
document.getElementById("fsl").innerHTML = dictionary[11].fsl;
}

function alphabet12(){
document.getElementById("word_text").innerHTML = dictionary[12].word;
document.getElementById("translation").innerHTML = dictionary[12].translation;
document.getElementById("definition").innerHTML = dictionary[12].definition;
document.getElementById("fsl").innerHTML = dictionary[12].fsl;
}

function alphabet13(){
document.getElementById("word_text").innerHTML = dictionary[13].word;
document.getElementById("translation").innerHTML = dictionary[13].translation;
document.getElementById("definition").innerHTML = dictionary[13].definition;
document.getElementById("fsl").innerHTML = dictionary[13].fsl;
}
                                
function alphabet14(){
document.getElementById("word_text").innerHTML = dictionary[14].word;
document.getElementById("translation").innerHTML = dictionary[14].translation;
document.getElementById("definition").innerHTML = dictionary[14].definition;
document.getElementById("fsl").innerHTML = dictionary[14].fsl;
                                  }

function alphabet15(){
document.getElementById("word_text").innerHTML = dictionary[15].word;
document.getElementById("translation").innerHTML = dictionary[15].translation;
document.getElementById("definition").innerHTML = dictionary[15].definition;
document.getElementById("fsl").innerHTML = dictionary[15].fsl;
                                    }

function alphabet16(){
document.getElementById("word_text").innerHTML = dictionary[16].word;
document.getElementById("translation").innerHTML = dictionary[16].translation;
document.getElementById("definition").innerHTML = dictionary[16].definition;
document.getElementById("fsl").innerHTML = dictionary[16].fsl;
                                      }

function alphabet17(){
document.getElementById("word_text").innerHTML = dictionary[17].word;
document.getElementById("translation").innerHTML = dictionary[17].translation;
document.getElementById("definition").innerHTML = dictionary[17].definition;
document.getElementById("fsl").innerHTML = dictionary[17].fsl;
                                        }

function alphabet18(){
document.getElementById("word_text").innerHTML = dictionary[18].word;
document.getElementById("translation").innerHTML = dictionary[18].translation;
document.getElementById("definition").innerHTML = dictionary[18].definition;
document.getElementById("fsl").innerHTML = dictionary[18].fsl;
                                          }
                                          
function alphabet19(){
document.getElementById("word_text").innerHTML = dictionary[19].word;
document.getElementById("translation").innerHTML = dictionary[19].translation;
document.getElementById("definition").innerHTML = dictionary[19].definition;
document.getElementById("fsl").innerHTML = dictionary[19].fsl;
}
                                          
function alphabet20(){
document.getElementById("word_text").innerHTML = dictionary[20].word;
document.getElementById("translation").innerHTML = dictionary[20].translation;
document.getElementById("definition").innerHTML = dictionary[20].definition;
document.getElementById("fsl").innerHTML = dictionary[20].fsl;
}
                                          
function alphabet21(){
document.getElementById("word_text").innerHTML = dictionary[21].word;
document.getElementById("translation").innerHTML = dictionary[21].translation;
document.getElementById("definition").innerHTML = dictionary[21].definition;
document.getElementById("fsl").innerHTML = dictionary[21].fsl;
}
                                          
function alphabet22(){
document.getElementById("word_text").innerHTML = dictionary[22].word;
document.getElementById("translation").innerHTML = dictionary[22].translation;
document.getElementById("definition").innerHTML = dictionary[22].definition;
document.getElementById("fsl").innerHTML = dictionary[22].fsl;
}
                                          
function alphabet23(){
document.getElementById("word_text").innerHTML = dictionary[23].word;
document.getElementById("translation").innerHTML = dictionary[23].translation;
document.getElementById("definition").innerHTML = dictionary[23].definition;
document.getElementById("fsl").innerHTML = dictionary[23].fsl;
}
                                          
function alphabet24(){
document.getElementById("word_text").innerHTML = dictionary[24].word;
document.getElementById("translation").innerHTML = dictionary[24].translation;
document.getElementById("definition").innerHTML = dictionary[24].definition;
document.getElementById("fsl").innerHTML = dictionary[24].fsl;
}
                                                      
function alphabet25(){
document.getElementById("word_text").innerHTML = dictionary[25].word;
document.getElementById("translation").innerHTML = dictionary[25].translation;
document.getElementById("definition").innerHTML = dictionary[25].definition;
document.getElementById("fsl").innerHTML = dictionary[25].fsl;
}
                                          
function greetings1(){
  document.getElementById("word_text").innerHTML = dictionary[26].word;
  document.getElementById("translation").innerHTML = dictionary[26].translation;
  document.getElementById("definition").innerHTML = dictionary[26].definition;
  document.getElementById("fsl").innerHTML = dictionary[26].fsl;
  video.pause();
  
    source.setAttribute('src', 'Website/1 basic greetings/1 hello.mp4');
    source.setAttribute('type', 'video/webm');
  
    video.load();
    video.play();
    console.log({
      src: source.getAttribute('src'),
      type: source.getAttribute('type'),
    });
    }

function greetings2(){
document.getElementById("word_text").innerHTML = dictionary[27].word;
document.getElementById("translation").innerHTML = dictionary[27].translation;
document.getElementById("definition").innerHTML = dictionary[27].definition;
document.getElementById("fsl").innerHTML = dictionary[27].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 magandang umaga.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
  }

function greetings3(){
document.getElementById("word_text").innerHTML = dictionary[28].word;
document.getElementById("translation").innerHTML = dictionary[28].translation;
document.getElementById("definition").innerHTML = dictionary[28].definition;
document.getElementById("fsl").innerHTML = dictionary[28].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 magandang hapon.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function greetings4(){
document.getElementById("word_text").innerHTML = dictionary[29].word;
document.getElementById("translation").innerHTML = dictionary[29].translation;
document.getElementById("definition").innerHTML = dictionary[29].definition;
document.getElementById("fsl").innerHTML = dictionary[29].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 magandang gabi.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction1(){
  document.getElementById("word_text").innerHTML = dictionary[30].word;
  document.getElementById("translation").innerHTML = dictionary[30].translation;
  document.getElementById("definition").innerHTML = dictionary[30].definition;
  document.getElementById("fsl").innerHTML = dictionary[30].fsl;
  video.pause();

  source.setAttribute('src', 'Website/3 introduction/3 my name is.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
  }

 function introduction2(){
document.getElementById("word_text").innerHTML = dictionary[31].word;
document.getElementById("translation").innerHTML = dictionary[31].translation;
document.getElementById("definition").innerHTML = dictionary[31].definition;
document.getElementById("fsl").innerHTML = dictionary[31].fsl;
video.pause();

  source.setAttribute('src', 'Website/3 introduction/3 whats your name.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction3(){
document.getElementById("word_text").innerHTML = dictionary[32].word;
document.getElementById("translation").innerHTML = dictionary[32].translation;
document.getElementById("definition").innerHTML = dictionary[32].definition;
document.getElementById("fsl").innerHTML = dictionary[32].fsl;
video.pause();

  source.setAttribute('src', 'Website/3 introduction/3 nice to meet you.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
      }

function introduction4(){
document.getElementById("word_text").innerHTML = dictionary[33].word;
document.getElementById("translation").innerHTML = dictionary[33].translation;
document.getElementById("definition").innerHTML = dictionary[33].definition;
document.getElementById("fsl").innerHTML = dictionary[33].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 kamusta ka na.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction5(){
document.getElementById("word_text").innerHTML = dictionary[34].word;
document.getElementById("translation").innerHTML = dictionary[34].translation;
document.getElementById("definition").innerHTML = dictionary[34].definition;
document.getElementById("fsl").innerHTML = dictionary[34].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 ako ay mabuti.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction6(){
document.getElementById("word_text").innerHTML = dictionary[35].word;
document.getElementById("translation").innerHTML = dictionary[35].translation;
document.getElementById("definition").innerHTML = dictionary[35].definition;
document.getElementById("fsl").innerHTML = dictionary[35].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 mabuti ako.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction7(){
document.getElementById("word_text").innerHTML = dictionary[36].word;
document.getElementById("translation").innerHTML = dictionary[36].translation;
document.getElementById("definition").innerHTML = dictionary[36].definition;
document.getElementById("fsl").innerHTML = dictionary[36].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 anong ginagawa mo.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction8(){
document.getElementById("word_text").innerHTML = dictionary[37].word;
document.getElementById("translation").innerHTML = dictionary[37].translation;
document.getElementById("definition").innerHTML = dictionary[37].definition;
document.getElementById("fsl").innerHTML = dictionary[37].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 wala lang.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction9(){
document.getElementById("word_text").innerHTML = dictionary[38].word;
document.getElementById("translation").innerHTML = dictionary[38].translation;
document.getElementById("definition").innerHTML = dictionary[38].definition;
document.getElementById("fsl").innerHTML = dictionary[38].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 saan ka nagmula.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction10(){
document.getElementById("word_text").innerHTML = dictionary[39].word;
document.getElementById("translation").innerHTML = dictionary[39].translation;
document.getElementById("definition").innerHTML = dictionary[39].definition;
document.getElementById("fsl").innerHTML = dictionary[39].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 galing ako sa.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction11(){
document.getElementById("word_text").innerHTML = dictionary[40].word;
document.getElementById("translation").innerHTML = dictionary[40].translation;
document.getElementById("definition").innerHTML = dictionary[40].definition;
document.getElementById("fsl").innerHTML = dictionary[40].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 ah ganun.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction12(){
document.getElementById("word_text").innerHTML = dictionary[41].word;
document.getElementById("translation").innerHTML = dictionary[41].translation;
document.getElementById("definition").innerHTML = dictionary[41].definition;
document.getElementById("fsl").innerHTML = dictionary[41].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 paumanhin.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction13(){
document.getElementById("word_text").innerHTML = dictionary[42].word;
document.getElementById("translation").innerHTML = dictionary[42].translation;
document.getElementById("definition").innerHTML = dictionary[42].definition;
document.getElementById("fsl").innerHTML = dictionary[42].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 paumanhin ano yon.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction14(){
document.getElementById("word_text").innerHTML = dictionary[43].word;
document.getElementById("translation").innerHTML = dictionary[43].translation;
document.getElementById("definition").innerHTML = dictionary[43].definition;
document.getElementById("fsl").innerHTML = dictionary[43].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 magkita tayo mamaya.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function introduction15(){
document.getElementById("word_text").innerHTML = dictionary[44].word;
document.getElementById("translation").innerHTML = dictionary[44].translation;
document.getElementById("definition").innerHTML = dictionary[44].definition;
document.getElementById("fsl").innerHTML = dictionary[44].fsl;
video.pause();

  source.setAttribute('src', 'Website/8 karaniwang pagbati/8 hanggang sa muli.mp4');
  source.setAttribute('type', 'video/webm');

  video.load();
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
}

function phrases1(){
  document.getElementById("word_text").innerHTML = dictionary[45].word;
  document.getElementById("translation").innerHTML = dictionary[45].translation;
  document.getElementById("definition").innerHTML = dictionary[45].definition;
  document.getElementById("fsl").innerHTML = dictionary[45].fsl;
  video.pause();
  
    source.setAttribute('src', 'Website/4 beginner words-phrases/4 i understand.mp4');
    source.setAttribute('type', 'video/webm');
  
    video.load();
    video.play();
    console.log({
      src: source.getAttribute('src'),
      type: source.getAttribute('type'),
    });
  }

  function phrases2(){
    document.getElementById("word_text").innerHTML = dictionary[46].word;
    document.getElementById("translation").innerHTML = dictionary[46].translation;
    document.getElementById("definition").innerHTML = dictionary[46].definition;
    document.getElementById("fsl").innerHTML = dictionary[46].fsl;
    video.pause();
    
      source.setAttribute('src', 'Website/4 beginner words-phrases/4 i dont understand.mp4');
      source.setAttribute('type', 'video/webm');
    
      video.load();
      video.play();
      console.log({
        src: source.getAttribute('src'),
        type: source.getAttribute('type'),
      });
    }

    function phrases3(){
      document.getElementById("word_text").innerHTML = dictionary[47].word;
      document.getElementById("translation").innerHTML = dictionary[47].translation;
      document.getElementById("definition").innerHTML = dictionary[47].definition;
      document.getElementById("fsl").innerHTML = dictionary[47].fsl;
      video.pause();
      
        source.setAttribute('src', 'Website/4 beginner words-phrases/4 sorry.mp4');
        source.setAttribute('type', 'video/webm');
      
        video.load();
        video.play();
        console.log({
          src: source.getAttribute('src'),
          type: source.getAttribute('type'),
        });
      }

      function phrases4(){
        document.getElementById("word_text").innerHTML = dictionary[48].word;
        document.getElementById("translation").innerHTML = dictionary[48].translation;
        document.getElementById("definition").innerHTML = dictionary[48].definition;
        document.getElementById("fsl").innerHTML = dictionary[48].fsl;
        video.pause();
        
          source.setAttribute('src', 'Website/4 beginner words-phrases/4 fine.mp4');
          source.setAttribute('type', 'video/webm');
        
          video.load();
          video.play();
          console.log({
            src: source.getAttribute('src'),
            type: source.getAttribute('type'),
          });
        }

        function phrases5(){
          document.getElementById("word_text").innerHTML = dictionary[49].word;
          document.getElementById("translation").innerHTML = dictionary[49].translation;
          document.getElementById("definition").innerHTML = dictionary[49].definition;
          document.getElementById("fsl").innerHTML = dictionary[49].fsl;
          video.pause();
          
            source.setAttribute('src', 'Website/4 beginner words-phrases/4 okay.mp4');
            source.setAttribute('type', 'video/webm');
          
            video.load();
            video.play();
            console.log({
              src: source.getAttribute('src'),
              type: source.getAttribute('type'),
            });
          }

          function phrases6(){
            document.getElementById("word_text").innerHTML = dictionary[50].word;
            document.getElementById("translation").innerHTML = dictionary[50].translation;
            document.getElementById("definition").innerHTML = dictionary[50].definition;
            document.getElementById("fsl").innerHTML = dictionary[50].fsl;
            video.pause();
            
              source.setAttribute('src', 'Website/4 beginner words-phrases/4 yes.mp4');
              source.setAttribute('type', 'video/webm');
            
              video.load();
              video.play();
              console.log({
                src: source.getAttribute('src'),
                type: source.getAttribute('type'),
              });
            }

            function phrases7(){
              document.getElementById("word_text").innerHTML = dictionary[51].word;
              document.getElementById("translation").innerHTML = dictionary[51].translation;
              document.getElementById("definition").innerHTML = dictionary[51].definition;
              document.getElementById("fsl").innerHTML = dictionary[51].fsl;
              video.pause();
              
                source.setAttribute('src', 'Website/4 beginner words-phrases/4 no.mp4');
                source.setAttribute('type', 'video/webm');
              
                video.load();
                video.play();
                console.log({
                  src: source.getAttribute('src'),
                  type: source.getAttribute('type'),
                });
              }

              function phrases8(){
                document.getElementById("word_text").innerHTML = dictionary[52].word;
                document.getElementById("translation").innerHTML = dictionary[52].translation;
                document.getElementById("definition").innerHTML = dictionary[52].definition;
                document.getElementById("fsl").innerHTML = dictionary[52].fsl;
                video.pause();
                
                  source.setAttribute('src', 'Website/4 beginner words-phrases/4 thank you.mp4');
                  source.setAttribute('type', 'video/webm');
                
                  video.load();
                  video.play();
                  console.log({
                    src: source.getAttribute('src'),
                    type: source.getAttribute('type'),
                  });
                }

                function phrases9(){
                  document.getElementById("word_text").innerHTML = dictionary[53].word;
                  document.getElementById("translation").innerHTML = dictionary[53].translation;
                  document.getElementById("definition").innerHTML = dictionary[53].definition;
                  document.getElementById("fsl").innerHTML = dictionary[53].fsl;
                  video.pause();
                  
                    source.setAttribute('src', 'Website/4 beginner words-phrases/4 welcome.mp4');
                    source.setAttribute('type', 'video/webm');
                  
                    video.load();
                    video.play();
                    console.log({
                      src: source.getAttribute('src'),
                      type: source.getAttribute('type'),
                    });
                  }

                  function phrases10(){
                    document.getElementById("word_text").innerHTML = dictionary[54].word;
                    document.getElementById("translation").innerHTML = dictionary[54].translation;
                    document.getElementById("definition").innerHTML = dictionary[54].definition;
                    document.getElementById("fsl").innerHTML = dictionary[54].fsl;
                    video.pause();
                    
                      source.setAttribute('src', 'Website/4 beginner words-phrases/4 how much.mp4');
                      source.setAttribute('type', 'video/webm');
                    
                      video.load();
                      video.play();
                      console.log({
                        src: source.getAttribute('src'),
                        type: source.getAttribute('type'),
                      });
                    }

function pronoun1(){
document.getElementById("word_text").innerHTML = dictionary[55].word;
document.getElementById("translation").innerHTML = dictionary[55].translation;
document.getElementById("definition").innerHTML = dictionary[55].definition;
document.getElementById("fsl").innerHTML = dictionary[55].fsl;
video.pause();
                      
source.setAttribute('src', 'Website/5 pronouns/5 me.mp4');
source.setAttribute('type', 'video/webm');

video.load();
video.play();
console.log({
src: source.getAttribute('src'),
type: source.getAttribute('type'),
});
}

function pronoun2(){
  document.getElementById("word_text").innerHTML = dictionary[56].word;
  document.getElementById("translation").innerHTML = dictionary[56].translation;
  document.getElementById("definition").innerHTML = dictionary[56].definition;
  document.getElementById("fsl").innerHTML = dictionary[56].fsl;
  video.pause();
                        
  source.setAttribute('src', 'Website/5 pronouns/5 you.mp4');
  source.setAttribute('type', 'video/webm');
  
  video.load();
  video.play();
  console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
  });
  }

  function pronoun3(){
    document.getElementById("word_text").innerHTML = dictionary[57].word;
    document.getElementById("translation").innerHTML = dictionary[57].translation;
    document.getElementById("definition").innerHTML = dictionary[57].definition;
    document.getElementById("fsl").innerHTML = dictionary[57].fsl;
    video.pause();
                          
    source.setAttribute('src', 'Website/5 pronouns/5 he she.mp4');
    source.setAttribute('type', 'video/webm');
    
    video.load();
    video.play();
    console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
    });
    }

    function pronoun4(){
      document.getElementById("word_text").innerHTML = dictionary[58].word;
      document.getElementById("translation").innerHTML = dictionary[58].translation;
      document.getElementById("definition").innerHTML = dictionary[58].definition;
      document.getElementById("fsl").innerHTML = dictionary[58].fsl;
      video.pause();
                            
      source.setAttribute('src', 'Website/5 pronouns/5 them.mp4');
      source.setAttribute('type', 'video/webm');
      
      video.load();
      video.play();
      console.log({
      src: source.getAttribute('src'),
      type: source.getAttribute('type'),
      });
      }

      function pronoun5(){
        document.getElementById("word_text").innerHTML = dictionary[59].word;
        document.getElementById("translation").innerHTML = dictionary[59].translation;
        document.getElementById("definition").innerHTML = dictionary[59].definition;
        document.getElementById("fsl").innerHTML = dictionary[59].fsl;
        video.pause();
                              
        source.setAttribute('src', 'Website/5 pronouns/5 we.mp4');
        source.setAttribute('type', 'video/webm');
        
        video.load();
        video.play();
        console.log({
        src: source.getAttribute('src'),
        type: source.getAttribute('type'),
        });
        }
        
function pospronoun1(){
document.getElementById("word_text").innerHTML = dictionary[60].word;
document.getElementById("translation").innerHTML = dictionary[60].translation;
document.getElementById("definition").innerHTML = dictionary[60].definition;
document.getElementById("fsl").innerHTML = dictionary[60].fsl;
video.pause();
                                
source.setAttribute('src', 'Website/6 possessive pronouns/6 mine.mp4');
source.setAttribute('type', 'video/webm');
          
video.load();
video.play();
console.log({
src: source.getAttribute('src'),
type: source.getAttribute('type'),
});
}

function pospronoun2(){
  document.getElementById("word_text").innerHTML = dictionary[61].word;
  document.getElementById("translation").innerHTML = dictionary[61].translation;
  document.getElementById("definition").innerHTML = dictionary[61].definition;
  document.getElementById("fsl").innerHTML = dictionary[61].fsl;
  video.pause();
                                  
  source.setAttribute('src', 'Website/6 possessive pronouns/6 our.mp4');
  source.setAttribute('type', 'video/webm');
            
  video.load();
  video.play();
  console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
  });
  }

  function pospronoun3(){
    document.getElementById("word_text").innerHTML = dictionary[62].word;
    document.getElementById("translation").innerHTML = dictionary[62].translation;
    document.getElementById("definition").innerHTML = dictionary[62].definition;
    document.getElementById("fsl").innerHTML = dictionary[62].fsl;
    video.pause();
                                    
    source.setAttribute('src', 'Website/6 possessive pronouns/6 your.mp4');
    source.setAttribute('type', 'video/webm');
              
    video.load();
    video.play();
    console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
    });
    }

    function pospronoun4(){
      document.getElementById("word_text").innerHTML = dictionary[63].word;
      document.getElementById("translation").innerHTML = dictionary[63].translation;
      document.getElementById("definition").innerHTML = dictionary[63].definition;
      document.getElementById("fsl").innerHTML = dictionary[63].fsl;
      video.pause();
                                      
      source.setAttribute('src', 'Website/6 possessive pronouns/6 his her.mp4');
      source.setAttribute('type', 'video/webm');
                
      video.load();
      video.play();
      console.log({
      src: source.getAttribute('src'),
      type: source.getAttribute('type'),
      });
      }

      function pospronoun5(){
        document.getElementById("word_text").innerHTML = dictionary[64].word;
        document.getElementById("translation").innerHTML = dictionary[64].translation;
        document.getElementById("definition").innerHTML = dictionary[64].definition;
        document.getElementById("fsl").innerHTML = dictionary[64].fsl;
        video.pause();
                                        
        source.setAttribute('src', 'Website/6 possessive pronouns/6 their.mp4');
        source.setAttribute('type', 'video/webm');
                  
        video.load();
        video.play();
        console.log({
        src: source.getAttribute('src'),
        type: source.getAttribute('type'),
        });
        }

function wh1(){
document.getElementById("word_text").innerHTML = dictionary[65].word;
document.getElementById("translation").innerHTML = dictionary[65].translation;
document.getElementById("definition").innerHTML = dictionary[65].definition;
document.getElementById("fsl").innerHTML = dictionary[65].fsl;
video.pause();
                                          
source.setAttribute('src', 'Website/7 whs/7 what.mp4');
source.setAttribute('type', 'video/webm');
                    
video.load();
video.play();
console.log({
src: source.getAttribute('src'),
type: source.getAttribute('type'),
});
}

function wh2(){
  document.getElementById("word_text").innerHTML = dictionary[66].word;
  document.getElementById("translation").innerHTML = dictionary[66].translation;
  document.getElementById("definition").innerHTML = dictionary[66].definition;
  document.getElementById("fsl").innerHTML = dictionary[66].fsl;
  video.pause();
                                            
  source.setAttribute('src', 'Website/7 whs/7 when.mp4');
  source.setAttribute('type', 'video/webm');
                      
  video.load();
  video.play();
  console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
  });
  }

  function wh3(){
    document.getElementById("word_text").innerHTML = dictionary[67].word;
    document.getElementById("translation").innerHTML = dictionary[67].translation;
    document.getElementById("definition").innerHTML = dictionary[67].definition;
    document.getElementById("fsl").innerHTML = dictionary[67].fsl;
    video.pause();
                                              
    source.setAttribute('src', 'Website/7 whs/7 who.mp4');
    source.setAttribute('type', 'video/webm');
                        
    video.load();
    video.play();
    console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
    });
    }

    function wh4(){
      document.getElementById("word_text").innerHTML = dictionary[68].word;
      document.getElementById("translation").innerHTML = dictionary[68].translation;
      document.getElementById("definition").innerHTML = dictionary[68].definition;
      document.getElementById("fsl").innerHTML = dictionary[68].fsl;
      video.pause();
                                                
      source.setAttribute('src', 'Website/7 whs/7 why.mp4');
      source.setAttribute('type', 'video/webm');
                          
      video.load();
      video.play();
      console.log({
      src: source.getAttribute('src'),
      type: source.getAttribute('type'),
      });
      }

      function wh5(){
        document.getElementById("word_text").innerHTML = dictionary[69].word;
        document.getElementById("translation").innerHTML = dictionary[69].translation;
        document.getElementById("definition").innerHTML = dictionary[69].definition;
        document.getElementById("fsl").innerHTML = dictionary[69].fsl;
        video.pause();
                                                  
        source.setAttribute('src', 'Website/7 whs/7 where.mp4');
        source.setAttribute('type', 'video/webm');
                            
        video.load();
        video.play();
        console.log({
        src: source.getAttribute('src'),
        type: source.getAttribute('type'),
        });
        }
  
/*hamburger menu*/
function hide(){
  var x = document.getElementById("lists");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*count*/
/*
var liList1 = document.getElementById("alphabet").getElementsByTagName("li");
   var largo1 = liList1.length;
   document.getElementById("count1").innerHTML=largo1;


 var liList2 = document.getElementById("greetings").getElementsByTagName("li");
 var largo2 = liList2.length; 
   document.getElementById("count2").innerHTML=largo2;

var liList3 = document.getElementById("introd").getElementsByTagName("li");
   var largo3 = liList3.length;
   document.getElementById("count3").innerHTML=largo3;

var liList4 = document.getElementById("phrases").getElementsByTagName("li");
var largo4 = liList4.length;
document.getElementById("count4").innerHTML=largo4;

var liList5 = document.getElementById("pronouns").getElementsByTagName("li");
   var largo5 = liList5.length;
   document.getElementById("count5").innerHTML=largo5;

   var liList6 = document.getElementById("pospronouns").getElementsByTagName("li");
   var largo6 = liList6.length;
   document.getElementById("count6").innerHTML=largo6;

   var liList7 = document.getElementById("wh").getElementsByTagName("li");
   var largo7 = liList7.length;
   document.getElementById("count7").innerHTML=largo7;

   var liList8 = document.getElementById("colors").getElementsByTagName("li");
   var largo8 = liList8.length;
   document.getElementById("count8").innerHTML=largo8;*/

/*search function*/
$(function(){

  $('input[type="text"]').keyup(function(){

      var searchText = $(this).val();

      $('ul:not("#nav") > li').each(function(){

          var currentLiText = $(this).text(),
              showCurrentLi = currentLiText.indexOf(searchText) !== -1;

          $(this).toggle(showCurrentLi);

      });     
  });

});
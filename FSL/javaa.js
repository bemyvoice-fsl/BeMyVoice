 
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
  }

 function introduction2(){
document.getElementById("word_text").innerHTML = dictionary[31].word;
document.getElementById("translation").innerHTML = dictionary[31].translation;
document.getElementById("definition").innerHTML = dictionary[31].definition;
document.getElementById("fsl").innerHTML = dictionary[31].fsl;
}

function introduction3(){
document.getElementById("word_text").innerHTML = dictionary[32].word;
document.getElementById("translation").innerHTML = dictionary[32].translation;
document.getElementById("definition").innerHTML = dictionary[32].definition;
document.getElementById("fsl").innerHTML = dictionary[32].fsl;
      }

function introduction4(){
document.getElementById("word_text").innerHTML = dictionary[33].word;
document.getElementById("translation").innerHTML = dictionary[33].translation;
document.getElementById("definition").innerHTML = dictionary[33].definition;
document.getElementById("fsl").innerHTML = dictionary[33].fsl;
}

function introduction5(){
document.getElementById("word_text").innerHTML = dictionary[34].word;
document.getElementById("translation").innerHTML = dictionary[34].translation;
document.getElementById("definition").innerHTML = dictionary[34].definition;
document.getElementById("fsl").innerHTML = dictionary[34].fsl;
}

function introduction6(){
document.getElementById("word_text").innerHTML = dictionary[35].word;
document.getElementById("translation").innerHTML = dictionary[35].translation;
document.getElementById("definition").innerHTML = dictionary[35].definition;
document.getElementById("fsl").innerHTML = dictionary[35].fsl;
}

function introduction7(){
document.getElementById("word_text").innerHTML = dictionary[36].word;
document.getElementById("translation").innerHTML = dictionary[36].translation;
document.getElementById("definition").innerHTML = dictionary[36].definition;
document.getElementById("fsl").innerHTML = dictionary[36].fsl;
}

function introduction8(){
document.getElementById("word_text").innerHTML = dictionary[37].word;
document.getElementById("translation").innerHTML = dictionary[37].translation;
document.getElementById("definition").innerHTML = dictionary[37].definition;
document.getElementById("fsl").innerHTML = dictionary[37].fsl;
}

function introduction9(){
document.getElementById("word_text").innerHTML = dictionary[38].word;
document.getElementById("translation").innerHTML = dictionary[38].translation;
document.getElementById("definition").innerHTML = dictionary[38].definition;
document.getElementById("fsl").innerHTML = dictionary[38].fsl;
}

function introduction10(){
document.getElementById("word_text").innerHTML = dictionary[39].word;
document.getElementById("translation").innerHTML = dictionary[39].translation;
document.getElementById("definition").innerHTML = dictionary[39].definition;
document.getElementById("fsl").innerHTML = dictionary[39].fsl;
}

function introduction11(){
document.getElementById("word_text").innerHTML = dictionary[40].word;
document.getElementById("translation").innerHTML = dictionary[40].translation;
document.getElementById("definition").innerHTML = dictionary[40].definition;
document.getElementById("fsl").innerHTML = dictionary[40].fsl;
}

function introduction12(){
document.getElementById("word_text").innerHTML = dictionary[41].word;
document.getElementById("translation").innerHTML = dictionary[41].translation;
document.getElementById("definition").innerHTML = dictionary[41].definition;
document.getElementById("fsl").innerHTML = dictionary[41].fsl;
}

function introduction13(){
document.getElementById("word_text").innerHTML = dictionary[42].word;
document.getElementById("translation").innerHTML = dictionary[42].translation;
document.getElementById("definition").innerHTML = dictionary[42].definition;
document.getElementById("fsl").innerHTML = dictionary[42].fsl;
}

function introduction14(){
document.getElementById("word_text").innerHTML = dictionary[43].word;
document.getElementById("translation").innerHTML = dictionary[43].translation;
document.getElementById("definition").innerHTML = dictionary[43].definition;
document.getElementById("fsl").innerHTML = dictionary[43].fsl;
}

function introduction15(){
document.getElementById("word_text").innerHTML = dictionary[44].word;
document.getElementById("translation").innerHTML = dictionary[44].translation;
document.getElementById("definition").innerHTML = dictionary[44].definition;
document.getElementById("fsl").innerHTML = dictionary[44].fsl;
}

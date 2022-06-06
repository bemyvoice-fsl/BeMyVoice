<script type="text/javascript">
  var dictionary=[
    {
      word:"a",
      translation:"a",
      definition:"the first letter in the alphabet",
      fsl:"atdog"
    },
    {
      word:"b",
      translation:"b",
      definition:"the second letter in the alphabet",
      fsl:"atdog"
    },
    {
      word:"c",
      translation:"c",
      definition:"the third letter in the alphabet",
      fsl:"atdog"
    },
  ];


  init=function(){
    for(var i=0;i<dictionary.length; i++){
    document.getElementById('word_list').innerHTML+= "<li onlick='show(" + i + ")'>"+ dictionary[i].word+"</li>";
    }
  }

  //call function
  init();

  show=function(i){
    document.getElementById('word_text').innerHTML=dictionary[i].word;
    document.getElementById('translation').innerHTML=dictionary[i].translation;
    document.getElementById('definition').innerHTML=dictionary[i].definition;
    document.getElementById('fsl').innerHTML=dictionary[i].fsl;

    var list="";
/*
    for(var j=0; j<dictionary[i].rel.length; j++){
      list+="<li>"+ dictionary[i].rel[j]+"</li>";
      document.getElementById('fsl').innerHTML=list;
    }*/
  }

  show(0);

  search=function(){
    query=document.getElementById('search').value;

    if(query==""){
      return;
    }

    found=-1;

    for(var i=0; i<dictionary.length; i++){
        if(query == dictionary[i].word){
          found =i;
          break;
        } else{
          document.getElementById('word_text').innerHTML="word not found";
          document.getElementById('definition').innerHTML="The word you entered is not found in our dictionary";
          document.getElementById('translation').innerHTML="No translation";
          document.getElementById('fsl').innerHTML="No FSL";
        }  
    }

    if(found>=0){
      show(found);
    }
  }

</script>
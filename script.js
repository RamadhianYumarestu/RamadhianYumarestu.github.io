
let pilihan = ""
let flag=false
let countA= 0
let countB= 0

//kode blokir
let blok1 = false
let blok2 = false
let blok3 = false
let blok4 = false
let blok5 = false
let blok6 = false
let blok7 = false
let blok8 = false
let blok9 = false
let blok10 = false
let blok11 = false
let blok12 = false
let blok13 = false
let blok13A= false
let blok14 = false
let blok15 = false
let blok16 = false
let blok17 = false
let blok18 = false
let blok19 = false
let blok20 = false
let blok21 = false
let blok22 = false
let blok23 = false
let blok24 = false
let blok25 = false
let blok26 = false
let blok27 = false
let blok28 = false
let blok29 = false
let blok30 = false
let blok31 = false
let blok32 = false
let blok33 = false
let blok34 = false
let blok35 = false
let blok36 = false
let blok37 = false
let blok38 = false
let blok39 = false
let blok40 = false
let blok41 = false
let blok42 = false
let blok43 = false
let blok44 = false
let blok45 = false
let blok46 = false
let blok47 = false
let blok48 = false
let blok49 = false
let blok50 = false
let blok51 = false
let blok52 = false

let player1=true
let player2=false

function kliktombol(x) {
    if(!flag){
         alert("Tentukan terlebih dahulu huruf yang akan ditempatkan pada kotak")
    }

    else if (flag) {
        document.getElementById("tombol"+x+"D").style.transform=
        "perspective(600px) rotateY(-180deg)";
    
        document.getElementById("tombol"+x+"B").style.transform=
        "perspective(600px) rotateY(0deg)";

        document.getElementById("tombol"+x+"B").innerHTML=
        pilihan

        document.getElementById("tombol"+x+"B").disabled=
        "disabled"



        // kotak 1
        if(player1===true) {
            if ( blok1 ===false &&
                document.getElementById("tombol1B").innerHTML==="S" &&
                document.getElementById("tombol2B").innerHTML==="O" &&
                document.getElementById("tombol3B").innerHTML==="S" 
                ) 
                {   countA++
                    console.log(countA)
                    document.getElementById("player1").innerHTML=
                    `SCORE PLAYER 1 : ${countA}`
                    document.getElementById("tombol1B").style.color="#0000ff"
                    document.getElementById("tombol2B").style.color="#0000ff"
                    document.getElementById("tombol3B").style.color="#0000ff"
                    blok1=true
                }
            //kotak 1
            else if ( blok2 ===false &&
                    document.getElementById("tombol1B").innerHTML==="S" &&
                    document.getElementById("tombol6B").innerHTML==="O" &&
                    document.getElementById("tombol11B").innerHTML==="S" 
                    ) 
                    {   countA++
                        console.log(countA)
                        document.getElementById("player1").innerHTML=
                        `SCORE PLAYER 1 : ${countA}`
                        document.getElementById("tombol1B").style.color="#0000ff"
                        document.getElementById("tombol6B").style.color="#0000ff"
                        document.getElementById("tombol11B").style.color="#0000ff"
                        blok2=true
                    }
            //kotak 1
            else if ( blok3 ===false &&
                        document.getElementById("tombol1B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol1B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok3=true
                        }     
            //kotak 2
            else if ( blok4 ===false &&
                        document.getElementById("tombol2B").innerHTML==="S" &&
                        document.getElementById("tombol3B").innerHTML==="O" &&
                        document.getElementById("tombol4B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol2B").style.color="#0000ff"
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol4B").style.color="#0000ff"
                            blok4=true
                        }      
            //kotak 2
            else if ( blok5 ===false &&
                        document.getElementById("tombol2B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol12B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol2B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            blok5=true
                        }  
            //kotak 2
            else if ( blok6 ===false &&
                        document.getElementById("tombol2B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol14B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol2B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            blok6=true
                        }  
            //kotak 3
            else if ( blok7 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol4B").innerHTML==="O" &&
                        document.getElementById("tombol5B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol4B").style.color="#0000ff"
                            document.getElementById("tombol5B").style.color="#0000ff"
                            blok7=true
                        }  
            //kotak 3
            else if ( blok8 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol15B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            blok8=true
                        }    
            //kotak 3
            else if ( blok9 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok9=true
                        }   
            //kotak 3
            else if ( blok10 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol11B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol11B").style.color="#0000ff"
                            blok10=true
                        }   
            //kotak 4
            else if ( blok11 ===false &&
                        document.getElementById("tombol4B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol14B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol4B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            blok11=true
                        }  
            //kotak 4
            else if ( blok12 ===false &&
                        document.getElementById("tombol4B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol12B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol4B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            blok12=true
                        }  
        
            //kotak 5
            else if ( blok13A ===false &&
                        document.getElementById("tombol5B").innerHTML==="S" &&
                        document.getElementById("tombol10B").innerHTML==="O" &&
                        document.getElementById("tombol15B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol5B").style.color="#0000ff"
                            document.getElementById("tombol10B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            blok13A=true
                        }  
        //kotak 5
            else if ( blok14 ===false &&
                        document.getElementById("tombol5B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol5B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok14=true
                        }  
            //kotak 6
            else if ( blok15 ===false &&
                        document.getElementById("tombol6B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol8B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol6B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            blok15=true
                        }  
            //kotak 6
            else if ( blok16 ===false &&
                        document.getElementById("tombol6B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol6").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok16=true
                        } 
            //kotak 6
            else if ( blok17 ===false &&
                        document.getElementById("tombol6B").innerHTML==="S" &&
                        document.getElementById("tombol11B").innerHTML==="O" &&
                        document.getElementById("tombol16B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol6B").style.color="#0000ff"
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol16B").style.color="#0000ff"
                            blok17=true
                        } 
            //kotak 7
            else if ( blok18 ===false &&
                        document.getElementById("tombol7B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol9B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            blok18=true
                        } 
            //kotak 7
            else if ( blok19 ===false &&
                        document.getElementById("tombol7B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol19B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            blok19=true
                        } 
            //kotak 7
            else if ( blok20 ===false &&
                        document.getElementById("tombol7B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol17B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            blok20=true
                        } 
            //kotak 8
            else if ( blok21 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol10B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol10B").style.color="#0000ff"
                            blok21=true
                        } 
            //kotak 8
            else if ( blok22 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol20B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            blok22=true
                        } 
            //kotak 8
            else if ( blok23 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            blok23=true
                        } 
            //kotak 8
            else if ( blok24 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol16B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol16B").style.color="#0000ff"
                            blok24=true
                        } 
            //kotak 9
            else if ( blok25 ===false &&
                        document.getElementById("tombol9B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol19B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            blok25=true
                        } 
            //kotak 9
            else if ( blok26 ===false &&
                        document.getElementById("tombol9B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol17B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            blok26=true
                        } 
            //kotak 10
            else if ( blok27 ===false &&
                        document.getElementById("tombol10B").innerHTML==="S" &&
                        document.getElementById("tombol15B").innerHTML==="O" &&
                        document.getElementById("tombol20B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol10B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            blok27=true
                        }                
            //kotak 10
            else if ( blok28 ===false &&
                        document.getElementById("tombol10B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol10B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            blok28=true
                        }    
            //kotak 11
            else if ( blok29 === false &&
                        document.getElementById("tombol11B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok29=true
                        } 
        //kotak 11
            else if ( blok30 === false &&
                        document.getElementById("tombol11B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok30=true
                        } 
            //kotak 11
            else if ( blok31 === false &&
                        document.getElementById("tombol11B").innerHTML==="S" &&
                        document.getElementById("tombol16B").innerHTML==="O" &&
                        document.getElementById("tombol21B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol16B").style.color="#0000ff"
                            document.getElementById("tombol21B").style.color="#0000ff"
                            blok31=true
                        } 
            //kotak 12
            else if ( blok32 === false &&
                        document.getElementById("tombol12B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol14B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            blok32=true
                        } 
            //kotak 12
            else if ( blok33 === false &&
                        document.getElementById("tombol12B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol24B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            blok33=true
                        } 

            //kotak 12
            else if ( blok34 === false &&
                        document.getElementById("tombol12B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol22B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol22B").style.color="#0000ff"
                            blok34=true
                        } 

            //kotak 13
            else if ( blok35 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol15B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            blok35=true
                        } 
            //kotak 13
            else if ( blok36 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol25B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol25B").style.color="#0000ff"
                            blok36=true
                        } 
            //kotak 13
            else if ( blok37 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok37=true
                        } 
            //kotak 13
            else if ( blok38 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol21B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol21B").style.color="#0000ff"
                            blok38=true
                        } 
            //kotak 14
            else if ( blok39 === false &&
                        document.getElementById("tombol14B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol24B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            blok39=true
                        } 
            //kotak 14
            else if ( blok40 === false &&
                        document.getElementById("tombol14B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol22B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol22B").style.color="#0000ff"
                            blok40=true
                        } 
            //kotak 15
            else if ( blok41 === false &&
                        document.getElementById("tombol15B").innerHTML==="S" &&
                        document.getElementById("tombol20B").innerHTML==="O" &&
                        document.getElementById("tombol25B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol15B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            document.getElementById("tombol25B").style.color="#0000ff"
                            blok41=true
                        } 
            //kotak 15
            else if ( blok42 === false &&
                        document.getElementById("tombol15B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol15B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok42=true
                        } 
            //kotak 16
            else if ( blok43 === false &&
                        document.getElementById("tombol16B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol16B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            blok43=true
                        } 
            //kotak 17
            else if ( blok44 === false &&
                        document.getElementById("tombol17B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol19B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            blok44=true
                        } 
            //kotak 18
            else if ( blok45 === false &&
                        document.getElementById("tombol18B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol20B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            blok45=true
                        } 
            //kotak 21
            else if ( blok46 === false &&
                        document.getElementById("tombol21B").innerHTML==="S" &&
                        document.getElementById("tombol22B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol21B").style.color="#0000ff"
                            document.getElementById("tombol22B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok46=true
                        } 
            
            //kotak 22
            else if ( blok47 === false &&
                        document.getElementById("tombol22B").innerHTML==="S" &&
                        document.getElementById("tombol23B").innerHTML==="O" &&
                        document.getElementById("tombol24B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol22B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            blok47=true
                        }
            //kotak 23
            else if ( blok48 === false &&
                        document.getElementById("tombol23B").innerHTML==="S" &&
                        document.getElementById("tombol24B").innerHTML==="O" &&
                        document.getElementById("tombol25B").innerHTML==="S" 
                        ) 
                        {   countA++
                            console.log(countA)
                            document.getElementById("player1").innerHTML=
                            `SCORE PLAYER 1 : ${countA}`
                            document.getElementById("tombol23B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            document.getElementById("tombol25B").style.color="#0000ff"
                            blok48=true
                        } 

            else{
                player1=false
                player2=true
                document.getElementById("giliran").innerHTML="Giliran Player 2"
            }
        }


        //player2 turn
        else if(player2===true) {
            if ( blok1 ===false &&
                document.getElementById("tombol1B").innerHTML==="S" &&
                document.getElementById("tombol2B").innerHTML==="O" &&
                document.getElementById("tombol3B").innerHTML==="S" 
                ) 
                {   countB++
                    console.log(countB)
                    document.getElementById("player2").innerHTML=
                    `SCORE PLAYER 2 : ${countB}`
                    document.getElementById("tombol1B").style.color="#0000ff"
                    document.getElementById("tombol2B").style.color="#0000ff"
                    document.getElementById("tombol3B").style.color="#0000ff"
                    blok1=true
                }
            //kotak 1
            else if ( blok2 ===false &&
                    document.getElementById("tombol1B").innerHTML==="S" &&
                    document.getElementById("tombol6B").innerHTML==="O" &&
                    document.getElementById("tombol11B").innerHTML==="S" 
                    ) 
                    {   countB++
                        console.log(countB)
                        document.getElementById("player2").innerHTML=
                        `SCORE PLAYER 2 : ${countB}`
                        document.getElementById("tombol1B").style.color="#0000ff"
                        document.getElementById("tombol6B").style.color="#0000ff"
                        document.getElementById("tombol11B").style.color="#0000ff"
                        blok2=true
                    }
            //kotak 1
            else if ( blok3 ===false &&
                        document.getElementById("tombol1B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countB)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol1B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok3=true
                        }     
            //kotak 2
            else if ( blok4 ===false &&
                        document.getElementById("tombol2B").innerHTML==="S" &&
                        document.getElementById("tombol3B").innerHTML==="O" &&
                        document.getElementById("tombol4B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol2B").style.color="#0000ff"
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol4B").style.color="#0000ff"
                            blok4=true
                        }      
            //kotak 2
            else if ( blok5 ===false &&
                        document.getElementById("tombol2B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol12B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countB)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol2B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            blok5=true
                        }  
            //kotak 2
            else if ( blok6 ===false &&
                        document.getElementById("tombol2B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol14B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol2B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            blok6=true
                        }  
            //kotak 3
            else if ( blok7 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol4B").innerHTML==="O" &&
                        document.getElementById("tombol5B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol4B").style.color="#0000ff"
                            document.getElementById("tombol5B").style.color="#0000ff"
                            blok7=true
                        }  
            //kotak 3
            else if ( blok8 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol15B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            blok8=true
                        }    
            //kotak 3
            else if ( blok9 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok9=true
                        }   
            //kotak 3
            else if ( blok10 ===false &&
                        document.getElementById("tombol3B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol11B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol3B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol11B").style.color="#0000ff"
                            blok10=true
                        }   
            //kotak 4
            else if ( blok11 ===false &&
                        document.getElementById("tombol4B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol14B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol4B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            blok11=true
                        }  
            //kotak 4
            else if ( blok12 ===false &&
                        document.getElementById("tombol4B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol12B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol4B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            blok12=true
                        }  
        
            //kotak 5
            else if ( blok13A ===false &&
                        document.getElementById("tombol5B").innerHTML==="S" &&
                        document.getElementById("tombol10B").innerHTML==="O" &&
                        document.getElementById("tombol15B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol5B").style.color="#0000ff"
                            document.getElementById("tombol10B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            blok13A=true
                        }  
        //kotak 5
            else if ( blok14 ===false &&
                        document.getElementById("tombol5B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol5B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok14=true
                        }  
            //kotak 6
            else if ( blok15 ===false &&
                        document.getElementById("tombol6B").innerHTML==="S" &&
                        document.getElementById("tombol7B").innerHTML==="O" &&
                        document.getElementById("tombol8B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol6B").style.color="#0000ff"
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            blok15=true
                        }  
            //kotak 6
            else if ( blok16 ===false &&
                        document.getElementById("tombol6B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol6").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok16=true
                        } 
            //kotak 6
            else if ( blok17 ===false &&
                        document.getElementById("tombol6B").innerHTML==="S" &&
                        document.getElementById("tombol11B").innerHTML==="O" &&
                        document.getElementById("tombol16B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol6B").style.color="#0000ff"
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol16B").style.color="#0000ff"
                            blok17=true
                        } 
            //kotak 7
            else if ( blok18 ===false &&
                        document.getElementById("tombol7B").innerHTML==="S" &&
                        document.getElementById("tombol8B").innerHTML==="O" &&
                        document.getElementById("tombol9B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            blok18=true
                        } 
            //kotak 7
            else if ( blok19 ===false &&
                        document.getElementById("tombol7B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol19B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            blok19=true
                        } 
            //kotak 7
            else if ( blok20 ===false &&
                        document.getElementById("tombol7B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol17B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol7B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            blok20=true
                        } 
            //kotak 8
            else if ( blok21 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol9B").innerHTML==="O" &&
                        document.getElementById("tombol10B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol10B").style.color="#0000ff"
                            blok21=true
                        } 
            //kotak 8
            else if ( blok22 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol20B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER  : ${countB}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            blok22=true
                        } 
            //kotak 8
            else if ( blok23 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            blok23=true
                        } 
            //kotak 8
            else if ( blok24 ===false &&
                        document.getElementById("tombol8B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol16B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol8B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol16B").style.color="#0000ff"
                            blok24=true
                        } 
            //kotak 9
            else if ( blok25 ===false &&
                        document.getElementById("tombol9B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol19B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            blok25=true
                        } 
            //kotak 9
            else if ( blok26 ===false &&
                        document.getElementById("tombol9B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol17B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol9B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            blok26=true
                        } 
            //kotak 10
            else if ( blok27 ===false &&
                        document.getElementById("tombol10B").innerHTML==="S" &&
                        document.getElementById("tombol15B").innerHTML==="O" &&
                        document.getElementById("tombol20B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol10B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            blok27=true
                        }                
            //kotak 10
            else if ( blok28 ===false &&
                        document.getElementById("tombol10B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol10B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            blok28=true
                        }    
            //kotak 11
            else if ( blok29 === false &&
                        document.getElementById("tombol11B").innerHTML==="S" &&
                        document.getElementById("tombol12B").innerHTML==="O" &&
                        document.getElementById("tombol13B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            blok29=true
                        } 
        //kotak 11
            else if ( blok30 === false &&
                        document.getElementById("tombol11B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok30=true
                        } 
            //kotak 11
            else if ( blok31 === false &&
                        document.getElementById("tombol11B").innerHTML==="S" &&
                        document.getElementById("tombol16B").innerHTML==="O" &&
                        document.getElementById("tombol21B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol11B").style.color="#0000ff"
                            document.getElementById("tombol16B").style.color="#0000ff"
                            document.getElementById("tombol21B").style.color="#0000ff"
                            blok31=true
                        } 
            //kotak 12
            else if ( blok32 === false &&
                        document.getElementById("tombol12B").innerHTML==="S" &&
                        document.getElementById("tombol13B").innerHTML==="O" &&
                        document.getElementById("tombol14B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            blok32=true
                        } 
            //kotak 12
            else if ( blok33 === false &&
                        document.getElementById("tombol12B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol24B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            blok33=true
                        } 

            //kotak 12
            else if ( blok34 === false &&
                        document.getElementById("tombol12B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol22B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol12B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol22B").style.color="#0000ff"
                            blok34=true
                        } 

            //kotak 13
            else if ( blok35 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol14B").innerHTML==="O" &&
                        document.getElementById("tombol15B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol15B").style.color="#0000ff"
                            blok35=true
                        } 
            //kotak 13
            else if ( blok36 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol25B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol25B").style.color="#0000ff"
                            blok36=true
                        } 
            //kotak 13
            else if ( blok37 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok37=true
                        } 
            //kotak 13
            else if ( blok38 === false &&
                        document.getElementById("tombol13B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol21B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol13B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol21B").style.color="#0000ff"
                            blok38=true
                        } 
            //kotak 14
            else if ( blok39 === false &&
                        document.getElementById("tombol14B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol24B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            blok39=true
                        } 
            //kotak 14
            else if ( blok40 === false &&
                        document.getElementById("tombol14B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol22B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol14B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol22B").style.color="#0000ff"
                            blok40=true
                        } 
            //kotak 15
            else if ( blok41 === false &&
                        document.getElementById("tombol15B").innerHTML==="S" &&
                        document.getElementById("tombol20B").innerHTML==="O" &&
                        document.getElementById("tombol25B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol15B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            document.getElementById("tombol25B").style.color="#0000ff"
                            blok41=true
                        } 
            //kotak 15
            else if ( blok42 === false &&
                        document.getElementById("tombol15B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol15B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok42=true
                        } 
            //kotak 16
            else if ( blok43 === false &&
                        document.getElementById("tombol16B").innerHTML==="S" &&
                        document.getElementById("tombol17B").innerHTML==="O" &&
                        document.getElementById("tombol18B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol16B").style.color="#0000ff"
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            blok43=true
                        } 
            //kotak 17
            else if ( blok44 === false &&
                        document.getElementById("tombol17B").innerHTML==="S" &&
                        document.getElementById("tombol18B").innerHTML==="O" &&
                        document.getElementById("tombol19B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol17B").style.color="#0000ff"
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            blok44=true
                        } 
            //kotak 18
            else if ( blok45 === false &&
                        document.getElementById("tombol18B").innerHTML==="S" &&
                        document.getElementById("tombol19B").innerHTML==="O" &&
                        document.getElementById("tombol20B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol18B").style.color="#0000ff"
                            document.getElementById("tombol19B").style.color="#0000ff"
                            document.getElementById("tombol20B").style.color="#0000ff"
                            blok45=true
                        } 
            //kotak 21
            else if ( blok46 === false &&
                        document.getElementById("tombol21B").innerHTML==="S" &&
                        document.getElementById("tombol22B").innerHTML==="O" &&
                        document.getElementById("tombol23B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol21B").style.color="#0000ff"
                            document.getElementById("tombol22B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            blok46=true
                        } 
            
            //kotak 22
            else if ( blok47 === false &&
                        document.getElementById("tombol22B").innerHTML==="S" &&
                        document.getElementById("tombol23B").innerHTML==="O" &&
                        document.getElementById("tombol24B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol22B").style.color="#0000ff"
                            document.getElementById("tombol23B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            blok47=true
                        }
            //kotak 23
            else if ( blok48 === false &&
                        document.getElementById("tombol23B").innerHTML==="S" &&
                        document.getElementById("tombol24B").innerHTML==="O" &&
                        document.getElementById("tombol25B").innerHTML==="S" 
                        ) 
                        {   countB++
                            console.log(countA)
                            document.getElementById("player2").innerHTML=
                            `SCORE PLAYER 2 : ${countB}`
                            document.getElementById("tombol23B").style.color="#0000ff"
                            document.getElementById("tombol24B").style.color="#0000ff"
                            document.getElementById("tombol25B").style.color="#0000ff"
                            blok48=true
                        } 

            else{
                player1=true
                player2=false
                document.getElementById("giliran").innerHTML="Giliran Player 1"
            }
        }








    }

}

function tentukan(y) {
    if(y===1){
        document.getElementById("pilih").innerHTML=
        "Pilih salah satu untuk ditempatkan di kotak : S"
        pilihan="S"
        flag=true
    }
    if(y===2){
        document.getElementById("pilih").innerHTML=
        "Pilih salah satu untuk ditempatkan di kotak : O"
        pilihan="O"
        flag=true
    }
}
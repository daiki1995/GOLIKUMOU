import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';


let hair=[<p> </p>];

function App(){
    
    const[count,setCount]=useState(1);
    const[ale,setAle]=useState("");

    return(
        <div>
            <Head/>
            <Mid/>
        </div>
    )


    function Head(){
        return(
            <p>ゴルベーザ男爵の髪の毛が生える画面</p>
        )
    }

    
    
    
    
    

    function Mid(){
        
        
        function Hair(){
            
            //console.log(hair)

            function Click(){
                setCount(count+1);
                //setHairNum(hair);
                //console.log(i)
                
                hair.push(
                    "毛 "
                );
                
                console.log(count);
                switch(count/10){
                    case 1:
                        console.log("1回目" + count%10);
                        setAle(" 頑張って")
                        break;
                    
                    case 2:
                        console.log("2回目");
                        setAle(" 負けないで！")
                        break;

                    case 3:
                        console.log("3回目");
                        setAle(" まだまだいけるよ！")
                        break;

                    case 4:
                        console.log("4回目");
                        setAle("君ならできる！")
                        break;
                    
                    case 5:
                        console.log("5回目");
                        setAle("もう、ふっさふさだよ！")
                        break;

                    case 6:
                        console.log("5回目");
                        setAle("燃えるぜ！毛魂！！")
                        break;
    
                    case 7:
                        console.log("5回目");
                        setAle(" 頑張って")
                        break;

                    case 8:
                        console.log("5回目");
                        setAle("見せろ！アフロ！")
                        break;
                    
                    case 9:
                        console.log("5回目");
                        setAle("もはや、アフロ")
                        break;
                        
                    case 10:
                        console.log("5回目");
                        setAle("もさもさ天国！！！")
                        break;

                    case 11:
                        console.log("5回目");
                        setCount(0);
                        break;

                    

                    default:
                        //console.log(count);
                }
                
                
            }
            
            return(
                <div>
                    <div className="row">
                        <button　onClick={()=>Click()}>毛が生える</button>
                        <p>{ale}</p>
                    </div>

                    <div>{hair}</div>
                        
                </div>
                
            )
    
        }

        

        return(
            <Hair/>
        )
    }

    function　Test(){
        const [count, setCount] = useState(0)
        let d
        d=count
        
        function Clickme(){
            setCount(count+1)
        }
        
        return (
            <>
                <p>You clicked {count} times</p>
                    <button onClick={() =>Clickme()}>
                    Click me
                    </button>
            </>
        )

    }
  } 




export default App;
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Defi from './Defi';

export default function Day(){
    const {day} = useParams();
    const wordList=dummy.cu.filter(cur => cur.day === Number(day));
   return (
       <>
      <h2>Day {day}일차</h2>
        <table>
        <tbody>
          {wordList.map(cur=>(
            <Defi cur={cur} key={cur.id} />
))}
       </tbody>
       </table>
      </>
   );

}

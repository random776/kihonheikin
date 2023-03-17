import { useState } from 'react'
import { MathComponent } from "mathjax-react";

function App() {
type Variable1 = { id: number; var1: number; var2: number };
type Variable2 = { id: number; var1: number; var2: number; var3: number };
const [bunbo, setBunbo] = useState<Variable1[]>([]);
const [bunshi, setBunshi] = useState<Variable2[]>([]);
const [nextId, setNextId] = useState(1);
const [nextBunbo, setNextBunbo] = useState(1);
const [nextBunshi, setNextBunshi] = useState(1);
const [nextJuritsu, setNextJuritsu] = useState(1);
const [result1, setResult1] = useState(0);
const [result2, setResult2] = useState(0);
console.log(result1);
console.log(result2);
  const setNewResult = () => {
    setBunbo([...bunbo, { id: nextId, var1: nextBunbo, var2: nextJuritsu}
    ]);
    setResult1(result1 + nextBunbo * nextJuritsu);
    setBunshi([...bunshi, { id: nextId, var1: nextBunshi, var2: nextJuritsu, var3: nextBunbo}
    ]);
    setResult2(result2 + nextBunshi * nextJuritsu * nextBunbo);
    setNextId(nextId + 1);
    setNextBunbo(nextBunbo);
    setNextBunshi(nextBunshi);
  }
  const bunboContent = bunbo.map((item) => String.raw`(${item.var1}\times ${item.var2})`).join("+")
  const bunshiContent = bunshi.map((item) => String.raw`(${item.var1}\times ${item.var2} \times ${item.var3})`).join("+")
  return (
    <>
    <p>
      単位数：
      <input 
      type="text"
      key={"入力0"}
      onChange={(e) => {
        setNextBunbo(parseFloat(e.target.value));
      }} />
      評点：
      <input 
      type="text"
      key={"入力1"}
      onChange={(e) => {
        setNextBunshi(parseFloat(e.target.value));
      }} />

      重率：
      <input 
      type="text"
      key={"入力2"}
      onChange={(e) => {
        setNextJuritsu(parseFloat(e.target.value));
      }} />
      <button type='button' key={"ボタン"} onClick={setNewResult}>追加</button>
    </p>
    <p>計算式：（デフォルトではNaNと表示されます）</p>
    <MathComponent tex={String.raw`\bar{x} = \frac{${bunshiContent}}{${bunboContent}}=${result2/result1}`}></MathComponent>
    <p>
      基本平均点は、{result2/result1}です。
    </p>
    </>
  );
}

export default App

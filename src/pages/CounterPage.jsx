import React, { useEffect, useRef, useState, useCallback } from 'react'
import NewComponent from '../components/NewComponent'
import Counter from '../components/Counter'

export default function CounterPage() {
    const [mainCount, setMainCount] = useState(0);
    const renderCount = useRef(1);
  
    const changeMainCounter = useCallback(()=>{
     return (counter) =>{
      setMainCount(counter)
     }
    }, [])

   
    useEffect(() => {
      console.log("useEffect executed (component mounted)")
      
      return () => {
        console.log("useEffect cleanup (component unmounted)")
      }
    }, [])
  
    useEffect(() => {
      renderCount.current++;
      console.log("message")
    },[mainCount])
  
    return (
      <>
        
        {/* <NewComponent message={<Message />}>
          Hello Maryna
          <Message />
          </NewComponent> */}
  
          <h1>Main Count {mainCount}</h1>
          <h3>Render Count {renderCount.current}</h3>
          <Counter mainCounter = {changeMainCounter} title = {'Counter'}/>
      </>
    )
}

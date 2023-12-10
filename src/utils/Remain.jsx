import React, { useState, useEffect } from 'react'

function Remain({ duration }) {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000)
  }, [time]);

  const getFormattedTime = (total_seconds) => {
    let s = 0;
    let h = 0;
    let m = 0;
    if (total_seconds > 0) {
      let total_minutes = parseInt(Math.floor(total_seconds / 60))
      let total_hours = parseInt(Math.floor(total_minutes / 60))

      s = parseInt(total_seconds % 60);
      m = parseInt(total_minutes % 60);
      h = parseInt(total_hours % 24);
      return `${h} : ${m} : ${s}`
    }
    else{
      return `${h} : ${m} : ${s}`

    }

  }
  return (
    <div>
      {getFormattedTime(time)}
    </div>
  )
}

export default Remain
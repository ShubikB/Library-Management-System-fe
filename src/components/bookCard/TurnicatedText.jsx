import React, { useState } from "react"

function TurnicatedText({ text, maxLength }) {
  const [viewTurnicate, setViewTurnicate] = useState(false)

  const handleViewTurnicate = () => {
    setViewTurnicate(true)
  }

  const truncatedText =
    text && text.length > maxLength && !viewTurnicate ? text.slice(0, maxLength) + "..." : text

  return (
    <p>
      {truncatedText}
      {text && text.length > maxLength && !viewTurnicate && (
        <span>
          <button onClick={handleViewTurnicate} className=' text-gray-500 hover:link'>
            Read more
          </button>
        </span>
      )}
    </p>
  )
}

export default TurnicatedText

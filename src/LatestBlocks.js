import { Alchemy, Network } from 'alchemy-sdk'
import { useEffect, useState } from 'react'

const LatestBlocks = () => {
  const [latestBlocks, setLatestBlocks] = useState()

  return (
    <div className="top-section box" >
      <h1 className="title">Latest Blocks</h1>
    </div>
  )
}

export default LatestBlocks

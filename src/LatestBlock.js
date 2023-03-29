import { Alchemy, Network } from 'alchemy-sdk'
import { useEffect, useState } from 'react'
import settings from './settings'
const alchemy = new Alchemy(settings)

const LatestBlock = (props) => {
  const [lastBlock, setLastBlock] = useState()

  useEffect(() => {
    async function getLastBlock() {
      setLastBlock(await alchemy.core.getBlock(props.blockNumber))
    }
    getLastBlock()
    console.log('last block ', lastBlock)
  })

  return (
    <section class="hero is-primary is-fullwidth" className="top-section">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Latest Block</h1>
          <h2 class="subtitle">{props.blockNumber}</h2>
        </div>
      </div>
    </section>
  )
}

export default LatestBlock

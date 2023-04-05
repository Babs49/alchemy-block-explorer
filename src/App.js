import { Alchemy, Network } from 'alchemy-sdk'
import { useEffect, useState } from 'react'
import LatestTransactions from './LatestTransactions'
import LatestBlock from './LatestBlock'
import LatestBlocks from './LatestBlocks'
import './App.css'
import 'bulma/css/bulma.css'
import settings from './settings'

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings)

function App() {
  const [lastBlockNumber, setLastBlockNumber] = useState()
  const [lastBlock, setLastBlock] = useState()
  const [lastBlocks, setLastBlocks] = useState()

  async function getLastBlock() {
    setLastBlock(await alchemy.core.getBlock(lastBlockNumber))
  }

  async function getLastBlockNumber() {
    setLastBlockNumber(await alchemy.core.getBlockNumber())
  }

  useEffect(() => {
    if (!lastBlock || !lastBlockNumber) {
      getLastBlockNumber()
      getLastBlock()
    }
    setTimeout(() => {
      getLastBlockNumber()
      getLastBlock()
    }, 12000)

    console.log('block number App.js ', lastBlockNumber)
    console.log('block  App.js ', lastBlock)
  })

  return (
    <div>
      <img
        src="logo-black.png"
        alt="EthExplorer"
        style={{
          width: '10%',
          height: '50%',
          marginLeft: '2em',
          marginTop: '2em',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
      <LatestBlock block={lastBlock} />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <LatestBlocks blocks={lastBlocks} />
            </div>
            <div className="column">
              <LatestTransactions />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default App

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

  useEffect(() => {
    async function getLastBlockNumber() {
      setLastBlockNumber(await alchemy.core.getBlockNumber())
    }
    getLastBlockNumber()
  })

  return (
    <div>
      <img
        src="logo-black.png"
        alt="EthExplorer"
        style={{ width: '10%', height: '50%' }}
      />
      <LatestBlock blockNumber={lastBlockNumber} />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <LatestBlocks />
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

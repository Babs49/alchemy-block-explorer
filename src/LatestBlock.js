import { Alchemy, Network } from 'alchemy-sdk'
import { useEffect, useState } from 'react'
import settings from './settings'
const alchemy = new Alchemy(settings)

const LatestBlock = (props) => {
  
  const transactionsCount = props.block?.transactions.length;
  
  

  return (
    <section className="hero is-primary is-fullwidth top-section">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Latest Block</h1>
          <h2 className="subtitle">{props.block?.number}</h2>

          <div className="columns">
            <div className="column">
              <p className="bd-notification is-info">Fee recipient</p>
              <div className="columns is-mobile">
                <div className="column">
                  <p className="bd-notification is-info">{props.block?.miner}</p>
                </div>
                <div className="column">
                  <p className="bd-notification is-info">Second nested column</p>
                </div>
              </div>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Transactions</p>
              <div className="columns is-mobile">
                <div className="column">
                  <p className="bd-notification is-danger">{transactionsCount}</p>
                </div>
                <div className="column">
                  <p className="bd-notification is-danger">Auto</p>
                </div>
                <div className="column">
                  <p className="bd-notification is-danger">Auto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestBlock

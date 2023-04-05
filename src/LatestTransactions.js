const LatestTransactions = () => {
  //const [latestTransactions, setlatestTransactions] = useState()

  return (
    <div className="top-section box">
      <h1 className="title">Latest Transactions</h1>
      <div className="columns">
        <div className="column">
          <p className="bd-notification is-info">First column</p>
          <div className="columns is-mobile">
            <div className="column">
              <p className="bd-notification is-info">First nested column</p>
            </div>
            <div className="column">
              <p className="bd-notification is-info">Second nested column</p>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="bd-notification is-danger">Second column</p>
          <div className="columns is-mobile">
            <div className="column is-half">
              <p className="bd-notification is-danger">50%</p>
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
  )
}

export default LatestTransactions

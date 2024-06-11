import './ResultComponent.css'

const ResultComponent = ({ personValueBill, personValueTip, handleClean }) => {
  return (
    <div className='result-container'>
      <div className="result-controll">
        <div className="results">
          <div className="title-controll">
            <p className="title">Tip Amount</p>
            <p className="subtitle">/ person</p>
          </div>
          {personValueBill > 0 && personValueBill !== Infinity ?
            <span className='result' id="tip-amount">${personValueBill.toFixed(2)}</span> :
            <span className='result' id="tip-amount">$ 0</span>}
        </div>
        <div className="results">
          <div className="title-controll">
            <p className="title">Total</p>
            <p className="subtitle">/ person</p>
          </div>
          {personValueTip > 0 && personValueTip !== Infinity ?
            <span className='result' id="tip-amount">${personValueTip.toFixed(2)}</span> :
            <span className='result' id="tip-amount">$ 0</span>}
        </div>
        <button onClick={() => handleClean()} id="reset-btn">Reset</button>
      </div>
    </div>
  )
}

export default ResultComponent
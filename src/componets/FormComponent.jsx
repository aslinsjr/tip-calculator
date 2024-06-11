import './FormComponent.css'

const FormComponent = ({handleChanges, handleClick}) => {
  return (
    <div className='form-container'>
      <label htmlFor="bill" name="bill">Bill
        <div className="input-controll">
          <img src="./icon-dollar.svg" alt="Dollar Icon" />
          <input type="text" name="bill" id="bill" onKeyUp={(e) => handleChanges(e)}></input>
        </div>
      </label>
      <div id="select-tip">
        <p>Select Tip %</p>
        <div className="button-controll">
          <button onClick={(e) => handleClick(e)} className="tip-btn" id="5">5%</button>
          <button onClick={(e) => handleClick(e)} className="tip-btn" id="10">10%</button>
          <button onClick={(e) => handleClick(e)} className="tip-btn" id="15">15%</button>
          <button onClick={(e) => handleClick(e)} className="tip-btn" id="25">25%</button>
          <button onClick={(e) => handleClick(e)} className="tip-btn" id="50">50%</button>
          <input onKeyUp={(e) => handleChanges(e)} className="tip-btn" type="text" id="custom-tip" placeholder="Custom"></input>
        </div>
      </div>
      <label htmlFor="people" name="people">Number of People
        <div className="input-controll">
          <img src="./icon-person.svg" alt="Person Icon" />
          <input type="text" name="people" id="people" onKeyUp={(e) => handleChanges(e)}></input>
        </div>
      </label>
        
      </div>

  )
}

export default FormComponent
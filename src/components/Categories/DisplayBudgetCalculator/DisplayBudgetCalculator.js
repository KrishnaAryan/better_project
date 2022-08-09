import React , {useState,useRef} from "react";
import { Modal } from "../assets/Modal";
// import { NavLink } from "react-router-dom";
import './DisplayBudgetCalculator.css'
import CurrencyFormat from 'react-currency-format';
// import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const DisplayBudgetCalculator = ({ showInfo, onClose }) => {

  const [form, submitForm] = useState({
    length: '',
    breadth: '',
    floor: '',
    parking: '',
    budgetPackage: '',
  })

  const plotArea = useRef('')
  const paSetback = useRef('')
  const sbua = useRef('')

  const [pa, setPa] = useState('')
  const [sb, setSb] = useState('')
  const [bua, setBua] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({...form,[e.target.name] : e.target.value})
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (form.length && form.breadth && form.floor && form.parking !== ''){
      showBtn();
    } else {
      alert('Please enter All Fields.')
    }
    plotArea.current = (form.length * form.breadth)
    setPa(plotArea.current)
    paSetback.current = ((form.length * form.breadth) - ((20*(form.length * form.breadth)/100)))
    setSb(paSetback.current)
    if(form.floor === 'Ground'){
      sbua.current = (paSetback.current * 1)
      setBua(sbua.current)
    } else if (form.floor === 'Ground + 1') {
      sbua.current = (paSetback.current * 2)
      setBua(sbua.current)
    } else if (form.floor === 'Ground + 2') {
      sbua.current = (paSetback.current * 3)
      setBua(sbua.current)
    } else if (form.floor === 'Ground + 3') {
      sbua.current = (paSetback.current * 4)
      setBua(sbua.current)
    } else if (form.floor === 'Ground + 4') {
      sbua.current = (paSetback.current * 5)
      setBua(sbua.current)
    }
  }

  const showBtn = () => {
    document.getElementById('budget-container-wrap').classList.replace('budget-container-wrap-hide','budget-container-wrap')
    document.getElementById('budget-container').classList.replace('budget-container-hide','budget-container')
    document.getElementById('quote-btn').classList.replace('quote-btn-none', 'quote-btn')
    document.getElementById('budget-result').classList.replace('budget-result-none', 'budget-result')
  }

  return (
    <Modal open={showInfo} onClose={onClose} title="BUDGET CALCULATOR">
      <div className="budget-container-wrap-hide" id="budget-container-wrap">
      <Helmet>
          <meta
          name="description"
          content="Try our budget calculator to know the home construction cost, including construction materials cost & cost of construction by providing basic details."
          />
          <title>House Construction Cost Calculator in Bangalore</title>
          <meta
            name="Keywords"
            content="Cost of Construction, house construction cost, home construction cost, Construction Materials Cost"
          />
      </Helmet>
        <div className="budget-container-hide" id="budget-container">
          <form className="budget-form" onSubmit={submitForm}>
            <div className="budget-input-wrap">
              <div className="input-wrap">
                <label for="length" className="budget-label">Length (in feet)</label>
                <input className="length" id="length" type="number" name="length" onChange={handleSubmit} required></input>
              </div>
              <div className="input-wrap">
                <label for="breadth" className="budget-label">Breadth (in feet)</label>
                <input className="breadth" id="breadth" type="number" name="breadth" onChange={handleSubmit} required></input>
              </div>
            </div>
            <div className="budget-input-wrap">
              <div className="input-wrap">
                <label for="floors-select" className="budget-label">No. of floors</label>
                <select className="floors-select" name="floor" onChange={handleSubmit}>
                  <option className="floors-option"></option>
                  <option className="floors-option">Ground</option>
                  <option className="floors-option">Ground + 1</option>
                  <option className="floors-option">Ground + 2</option>
                  <option className="floors-option">Ground + 3</option>
                  <option className="floors-option">Ground + 4</option>
                </select>
              </div>
              <div className="input-wrap">
                <label for="parking-select" className="budget-label">No. of Car Parking</label>
                <select className="parking-select" name="parking" onChange={handleSubmit}>
                  <option className="parking-option"></option>
                  <option className="parking-option">0</option>
                  <option className="parking-option">1</option>
                  <option className="parking-option">2</option>
                  <option className="parking-option">3</option>
                </select>
              </div>
            </div>
            <div name="button" type="submit" className="input-wrap-b">
              <button className="budget-btn" name="button" type="submit" onClick={handleClick}>Submit</button>
            </div>
          </form>
          <div className="budget-result-none" id="budget-result">
            <div className="estimate">
                <h1 className="budget-header"> Estimated Cost of Budget Construction : </h1>
                <div className="price-container">
                  <h5 className="budget-price">Total Plot Area = {pa} sqft.</h5>
                  <h5 className="budget-price">Total Plot Area After Setback(Setback considered 20%) = {sb} sqft.</h5>
                  <h5 className="budget-price">Super Built-up Area = {bua} sqft.</h5>
                  <h5 className="budget-price">Package = Budget (Rs.1550/sqft. + Rs.50/sqft.)</h5>
                  <CurrencyFormat value={1600 * bua} displayType={'text'} thousandSeparator={true} thousandSpacing={'2s'} prefix={'₹'} renderText={value => <h5 className="budget-price-final">Cost of Construction : {value}</h5>} />
                  <h6 className="budget-price-gst">*All prices are inclusive of GST.</h6>
                </div>
            </div> 
            <div className="estimate">
                <h1 className="budget-header"> Estimated Cost of Standard Construction : </h1>
                <div className="price-container">
                  <h5 className="budget-price">Total Plot Area = {pa} sqft.</h5>
                  <h5 className="budget-price">Total Plot Area After Setback(Setback considered 20%) = {sb} sqft.</h5>
                  <h5 className="budget-price">Super Built-up Area = {bua} sqft.</h5>
                  <h5 className="budget-price">Package = Standard (Rs.1725/sqft. + Rs.50/sqft.)</h5>
                  <CurrencyFormat value={1775 * bua} displayType={'text'} thousandSeparator={true} thousandSpacing={'2s'} prefix={'₹'} renderText={value => <h5 className="budget-price-final">Cost of Construction : {value}</h5>} />
                  <h6 className="budget-price-gst">*All prices are inclusive of GST.</h6>
                </div>
            </div>
          </div>
          <div className='quote-wrap'>
            <button className='quote-btn-none' id="quote-btn">Get Quote</button>
          </div>
        </div>
      </div>  
    </Modal>
  );
};

export default DisplayBudgetCalculator;

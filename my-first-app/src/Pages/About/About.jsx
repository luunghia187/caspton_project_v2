import React, { useState } from 'react';
import './Aboute.css';

const InsuranceClaimForm = () => {
  const [contractNumber, setContractNumber] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [accidentDate, setAccidentDate] = useState('');
  const [premiumAmount, setPremiumAmount] = useState('');
  const [monthsSinceInsurance, setMonthsSinceInsurance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi yêu cầu bồi thường bảo hiểm
    console.log('Đã gửi yêu cầu bồi thường');
    // Reset trường dữ liệu
    setContractNumber('');
    setCustomerAge('');
    setAccidentDate('');
    setPremiumAmount('');
    setMonthsSinceInsurance('');
  };

  return (
    <div className="insurance-claim-form">
      <h2>Yêu cầu bồi thường bảo hiểm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Số hợp đồng bảo hiểm:</label>
          <input
            type="text"
            placeholder="ID hợp đồng"
            value={contractNumber}
            onChange={(e) => setContractNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tuổi khách hàng:</label>
          <input
            type="text"
            placeholder="Nhập tuổi của bạn"
            value={customerAge}
            onChange={(e) => setCustomerAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Ngày xảy ra tai nạn:</label>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            value={accidentDate}
            onChange={(e) => setAccidentDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mức miễn thường có khấu trừ:</label>
          <input
            type="text"
            placeholder="Mức miễn thường"
            value={premiumAmount}
            onChange={(e) => setPremiumAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Số tháng kể từ ngày đóng bảo hiểm:</label>
          <input
            type="text"
            placeholder="Tính từ ngày kích hoạt hợp đồng"
            value={monthsSinceInsurance}
            onChange={(e) => setMonthsSinceInsurance(e.target.value)}
          />
        </div>
        <button type="submit">Gửi yêu cầu</button>
      </form>
    </div>
  );
};

export default InsuranceClaimForm;
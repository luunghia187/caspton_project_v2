import React from 'react';

import './Home.css';

const InsuranceProducts = () => {

  const insuranceProducts = [
    {
      id: 1,
      name: 'Bảo hiểm trách nhiệm dân sự bắt buộc',
      description: 'Loại hình bảo hiểm vật chất xe ô tô bắt buộc, áp dụng cho mọi chủ xe cơ giới khi tham gia giao thông trên lãnh thổ Việt Nam. Bảo hiểm trách nhiệm bắt buộc được thực hiện để bảo vệ quyền lợi của người bị thiệt hại (bên thứ ba - nạn nhân va chạm) đối với thiệt hại do chủ xe cơ giới gây ra.',
      coverage: ' Thiệt hại về tính mạng, tay chân của người ngồi trong xe do xe cơ giới gây ra. Thiệt hại ngoài hợp đồng về tính mạng và tài sản của bên thứ ba do xe cơ giới gây ra.',
      policyTerm: '1 năm',
      premium: 2000000,
      deductible: 1000000,
      imageUrl: 'https://media.vneconomy.vn/images/upload/2022/09/21/8d6d581b-c2fb-4b72-a5b3-b62a517e39a0.jpeg',
    },
    {
      id: 2,
      name: 'Bảo hiểm tai nạn đối với lái, phụ xe và người ngồi trên xe',
      description: 'Là hình thức bảo hiểm tự nguyện dành cho lái xe và người ngồi trên xe nếu họ bị tử vong hoặc thân thể do tai nạn giao thông.  ',
      coverage: 'Thương tích cá nhân do tai nạn trong xe, lên hoặc xuống xe khi đang lái xe. Tổn hại thân thể do tai nạn liên quan trực tiếp đến việc sử dụng phương tiện.   ',
      policyTerm: '6 tháng',
      premium: 1500000,
      deductible: 500000,
      imageUrl: 'https://lh3.googleusercontent.com/u/0/docs/ADP-6oHgGkEQ3p_MQ-cLcNpoQ0OJVLTGywMYLYtS59f9JfU5tDHsz_qh7bqVXMhgeOMUzn8BCd54DUgc0d3gv8eVqz2XIzNjtwkmYkmWRRIIJgj6t-1HfrzfTXVsC9cXbiL0TVsoboIpFu80OXKu_QPdmZVpaMBVy1S2_1oXmFH8asnLMaGGNPx0-UkGi42sXEihA97HoLj50LFNw3BNX-eWYPsEyJy7hqKBjnXxcP1q2tFjPG7yUXdw55E4PrTsWUQfAI8fNPDgTbDBpTuyLKy72MwW7TiQCQqAxGnBbPbe__vGE80v187VMW9aDnfntTExI4q6-VKHn1rxGCRotZmuz2vMG6SzAXQsieCJwVFRJRW9uWWSPjHTduhbIR_CwE2rmFIkVTwqssADO2SeTmLSkromMdrli6131l4TUqVS3TIHi_nKxk0dxs2233oM9ahLlrk3JU6p5ln-rkxWE6pWxFO9AeNPBE0n7cfFZGsrygwvXExa29tq5sBL8ce-HDahaROPa25pk29Q57ps6AvHP6s8jVDU06ii78hERiLzBCFH6vXzkK8_huIG9Rd-vYkh5iYIlbTvgWv4jzXwTlu8UlxmcRkWTKW2RogW9_Wi_iZWYKGxl8psqmk52fGJm8pi8nSVzxiNwkDXHutrizsAJnSYCUHetnu9k4QYonO0mo2LY-MwLdvWigJFuXdhdQ8PievQV1RFws8ciLqSGS7AqF1S3ZQqcmjV-F4vl-n7hHrkWOtaYgSrM1BglpCAQGlaUevKWx56Cxqf8HIcHkdFkMehbuwUjt35V7kZ1nddFKBuSwQuxRE9JJNl45_aRY8edp6FIHBWKzNLX8e5RyuVl0JHQElkewn6mq-b-3lLRppkqDgcnlnaKgL3Ji-cmItJbDLEWfdf7GV1ViyrFfQH0LCLh-RPRT_mT4Zan015Ynx4RymOaHiT1UxraS33lK_G9fCUxir-Y5UTF4NP_QD9rir1wf8DdhI',
    },
    {
      id: 3,
      name: 'Bảo hiểm vật chất xe ô tô ',
      description: 'Bảo vệ thân vỏ và máy móc, thiết bị, phụ tùng của xe. Do đó, trong trường hợp xảy ra tai nạn giao thông, bảo hiểm sẽ chi trả các chi phí sửa chữa hư hỏng như trầy xước, móp méo, cháy, nổ, trộm cắp, v.v..  ',
      coverage: 'Khi xe bị va chạm ngoài ý muốn làm cho xe bị trầy xước, hư hỏng trong quá trình vận chuyển. Bị tai nạn do thiên tai: bão, động đất, lũ lụt, sạt lở đất, sóng thần... Hoặc chẳng may bị hỏa hoạn, cháy nổ, cướp giật..',
      policyTerm: '1 năm',
      premium: 2500000,
      deductible: 800000,
      imageUrl: 'https://lh3.googleusercontent.com/u/0/docs/ADP-6oGTbykOo9oJ6aqQMYPkRyMUAZnLvh1GTNTbudWT9tDL9tcTJ4IJVF0gIf5lZ3uAZZU8lJMmwd5KwXDGd8pB7EHxX51LextjB4-G-lCRWG1fWxuqoUHvhddNtpfh1Bi69bkeYykgcWj3tmEjflMK5u5gYNWRPeeUvC-m-3tGsa3F6NOirWyXUt5JDdNx6QvdUsb1UynJS6KXzn26r93dVx-Hyk3ApynFO4ApXPmiQyMUt3hntVf5LTOXAyvuBMnO0XppkeLE_v6sSYZrye1qFJxD01wdrSTrD7bWzkKWJysvtQIt3-RcfwRzrnfB7siYFhY4A5P2hDdQh_oWDpy8dXkUJNX-qglDlZMPWedwoWuXAt0MOBUT_gurEkHVKt_CNb5K7wsRQdH3oED6GDy0-uyySexBjfLF67s1soSkzOgJOqWdClfwnYSo0VzhZO9ao9fC-nL3dL5jmO35nQNh4UJkYeZhByS-CWUrv-SDGMyOlTBHcVBdcTDfE7yh8pu2rULP0PI0amLfvnD_QwwC5IndARJGkSc7mP5k3hQzapAl_USWbioCT8fTyXEvR5Mlmq033HO3OV5Z9wJYYMglMKw848tV-sxdW5cK5AuTDv1F4JNOM_kHePyj2c1WHrZz0e-Y_1EQh4HZs2QiZx_7_u7_0KBC8Sv3cvQr3rRZA1WEaxGkrOrqhrze8QDk3L9IMOaOp1K5EJO5qMSUk86T60KFEUzdRLJVSoHYbQ1zdKPZ2UEO8Aw-__sooJ7ZMQy4iy8lkoSlytzALA65DKqitcAn5-i7YBB1oSbDWPxbD8izr5puKZmd92XmePK44al9BBnx5E6W-oShnxZP88XIOwbN7okTlnlF6B2xV_505_iHIz6uFHqB-dOZxfBZAVS1e492jkuiA4lYdXAuNz6JEs_DuaUjm54K9lNADdT-iPINZD9pNeGOb4Hf9LWXHmiGLD6Yoo8E294AtKuH8P5UKV9YKrdx6Bw',
    },
    {
      id: 4,
      name: 'Bảo hiểm trách nhiệm dân sự tình nguyện',
      description: 'Bảo hiểm thể hiện trách nhiệm tăng thêm ngoài bảo hiểm bắt buộc của Nhà nước. Đối với bảo hiểm này, công ty bảo hiểm sẽ hoàn trả số tiền chênh lệch so với số tiền mà chủ xe đã bồi thường dựa trên mức độ tổn hại của vụ tai nạn và số tiền mà chủ xe đã tham gia vào bảo hiểm.',
      coverage: 'Phạm vi của ứng dụng và trợ cấp bảo hiểm sẽ phụ thuộc vào đơn vị của chủ xe mua bảo hiểm.',
      policyTerm: '1 năm',
      premium: 1800000,
      deductible: 900000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTzOepd8bwNBHGNkX2Lqa8_lsUw9-49ROIA&usqp=CAU',
    },
    {
      id: 5,
      name: 'Bảo hiểm trách nhiệm dân sự hàng hóa',
      description: 'Đền bù những thiệt hại về hàng hóa gây ra trong quá trình vận chuyển. Đối với loại bảo hiểm này, các công ty bảo hiểm có trách nhiệm bù đắp chi phí phục hồi tổn thất một cách hợp lý của lô hàng theo luật dân sự.',
      coverage: 'Thiệt hại về hàng hóa gây ra trong quá trình vận chuyển',
      policyTerm: '2 năm',
      premium: 3000000,
      deductible: 1200000,
      imageUrl: 'https://bshc.com.vn/wp-content/uploads/2020/08/BH-hang-hoa.jpg',
    },
    {
      id: 6,
      name: 'Bảo hiểm xe hơi hai chiều',
      description: 'Đây là một cách gọi khác của loại bảo hiểm chịu trách nhiệm với bất kỳ khoản thanh toán chi phí tổn hại nào xảy ra. Hai loại bảo hiểm ô tô này bao gồm hai loại: Bảo hiểm trách nhiệm dân sự và bảo hiểm vật chất xe ô tô.',
      coverage: 'Trong trường hợp chủ sở hữu gặp phải các tình huống không mong muốn như: va chạm, trộm cắp, thiên tai, chẳng hạn như lũ lụt, bão, lửa... Đặc biệt là khi vụ tai nạn liên quan đến chủ xe và các bên thứ ba.',
      policyTerm: '6 tháng',
      premium: 1200000,
      deductible: 600000,
      imageUrl: 'https://lh3.googleusercontent.com/u/0/docs/ADP-6oFW61-RNAi5tYpNmMDNf4BIxtwvF24fxX4eJnBOw9uPKhu1fHDs9b83ZBVp9RC861YacHxVB3ySkji6Vv-Qq7d7C51hC_e8Ktm4-OTzlK49je63nBky_VSSoCS2MImSBodwzQ_nK-q9uVIDNE_8W2Kuovkfvx8jzyMH07nRRy2qQNWdZHdnadat3SVltNbPEM01cffAlXfUk78DjSECgg_0YmJEyqHcMBHg4ouFs2xPxcMAvWcz4VZ0vTQKMVjlGOTzfdBhAw2xEfMxy50TqgYNdbzsgbhPlqJCQqwmENofE6wB3P9N2NzQbDjLXPQDF4KgGAnEuX_UwzT4hxNxqsyH2gAKDc-s1xatUjn3X1oPtQwjCSOJ0dnMR-Bal6PACm6nXukJksZnkRIfKwbLPmTiOaSU2iPW-OD1bfJKUQh8B1NeiNYeOPNbL2pZqqvG3GfjF1oftc2Os_Bi-NMASafSiWgAmon1eOe_AeVtBMXB3RoqTn7vqfL48rsBHy9QI2ppJ7vcikt9K4Qk5IT56IUAFV_hf_FoDPzQV60cvbjTsh6NFuTpLJp4Qapd93W0mtfWost2FFUxu1eGJkr5kLiKK_5uo0ul1UJB1uzP93s7ZJQ-nVsgJbWFRXdG0IOj5cGxVC-_Y5stv0M-c7yKlXMQtmhWkY7rK9Adv9B0LMiok0ZtNjVCkPIgf7fUXsXsr5hgbtnhaPeOnwK8RxMTePUuS7jZCLehh-IfuxeIuQfjAJiqLpHiotSliuv1uj10Z2dqurAPJukaWgfv7wDAe7Hygq-QY0nN5kEIiaKywMVUUnel8BrnKfvEjtgKgu-jh5D5TQTvSMSscwsQ3A8l9zIKdENIu8Tgs7q0tGR0l-t2moNNf4_H10vTjaAjZzvxvMcM7Aketqkb3TZCtBjKQdZWxWRy6aNf3M0_nuqV9xVUdA3b1LgkicE9l3XIUV6aKGiqT5HhaMAn4Y-pRQR8NjCWPrMf4t0',
    },
  ];

  return (
    <div className="insurance-products">
    <div className="product-list">
      {insuranceProducts.map((product) => (
        <div key={product.id} className="product">
          <div className="product-image" style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-info">
            <p><strong>Phạm vi bồi thường:</strong> {product.coverage}</p>
            <p><strong>Thời hạn bảo hiểm:</strong> {product.policyTerm}</p>
            <p><strong>Số tiền phải đóng:</strong> {product.premium} VND</p>
            <p><strong>Mức miến thường:</strong> {product.deductible} VND</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default InsuranceProducts;
import React, { useState } from 'react';
import './faq.css';

const faqData = [
  {
    question: 'What is Lovely Bands?',
    answer: 'Lovely Bands is an e-commerce website that sells high-quality wristbands.'
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place an order by selecting a product, adding it to your cart, and proceeding to checkout.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit cards, PayPal, and other online payment systems.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to many countries. Please check our shipping policy for more details.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via email to track your order.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div 
          className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
          key={index} 
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-question">
            {item.question}
          </div>
          <div className="faq-answer">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;

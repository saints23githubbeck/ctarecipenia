import { useState } from "react";

const SettingsAdmin = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <div className="stepHeader">
        <h5 style={{
            background: step === 1 ? "#ffffff" : null,
            borderRadius: step === 1 ? "5px 5px 0px 0px" : null,
            color: step === 1 ? "#000000" : null,
          }} onClick={() => setStep(1)}> Settings </h5>
        <h5 style={{
            background: step === 2 ? "#ffffff" : null,
            color: step === 2 ? "#000000" : null,
            borderRadius: step === 2 ? "5px 5px 0px 0px" : null, 
          }} onClick={() => setStep(2)}>  SEO </h5>
        <h5 style={{
            background: step === 3 ? "#ffffff" : null,
            color: step === 3 ? "#000000" : null,
            borderRadius: step === 3 ? "5px 5px 0px 0px" : null, 
          }} onClick={() => setStep(3)}> Contact Information </h5>
        <h5 style={{
            background: step === 4 ? "#ffffff" : null,
            color: step === 4 ? "#000000" : null,
            borderRadius: step === 4 ? "5px 5px 0px 0px" : null, 
          }} onClick={() => setStep(4)}> Social Media </h5>
        <h5 style={{
            background: step === 5 ? "#ffffff" : null,
            color: step === 5 ? "#000000" : null,
            borderRadius: step === 5 ? "5px 5px 0px 0px" : null, 
          }} onClick={() => setStep(5)}> Api Keys </h5>
      </div>
      <div className="stepBody">
        {step === 1 && (
          <div>kamsmeojfjksfjfdjkjjs</div>
        )}
        {step === 2 && (
          <div>step2</div>
        )}
        {step === 3 && (
          <div>step3</div>
        )}
        {step === 4 && (
          <div>step4</div>
        )}
        {step === 5 && (
          <div>step5</div>
        )}
      </div>
      
    </div>
  )
}

export default SettingsAdmin
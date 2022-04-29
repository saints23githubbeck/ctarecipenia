import { useState } from "react";
import Api from "../../components/admin/Api";
import Contact from "../../components/admin/Contact";
import Seo from "../../components/admin/Seo";
import Setting from "../../components/admin/Setting";
import Socialmedia from "../../components/admin/Socialmedia";
import * as FiIcons from "react-icons/fi";

const SettingsAdmin = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <div className="stepHeader">
        <h5
          style={{
            background: step === 1 ? "#ffffff" : null,
            borderRadius: step === 1 ? "5px 5px 0px 0px" : "5px 0px 0px 0px",
            color: step === 1 ? "#000000" : null,
          }}
          onClick={() => setStep(1)}
        >
          <FiIcons.FiSettings /> <p
            style={{
              color: step === 1 ? "#000000" : null,
            }}>Settings</p>
        </h5>
        <h5
          style={{
            background: step === 2 ? "#ffffff" : null,
            color: step === 2 ? "#000000" : null,
            borderRadius: step === 2 ? "5px 5px 0px 0px" : null,
          }}
          onClick={() => setStep(2)}
        >
          {" "}
          <FiIcons.FiSearch />
          <p
            style={{
              color: step === 2 ? "#000000" : null,
            }}>SEO</p>
        </h5>
        <h5
          style={{
            background: step === 3 ? "#ffffff" : null,
            color: step === 3 ? "#000000" : null,
            borderRadius: step === 3 ? "5px 5px 0px 0px" : null,
          }}
          onClick={() => setStep(3)}
        >
          {" "}
          <FiIcons.FiMail />
          <p
            style={{
              color: step === 3 ? "#000000" : null,
            }}>Contact Information</p>
        </h5>
        <h5
          style={{
            background: step === 4 ? "#ffffff" : null,
            color: step === 4 ? "#000000" : null,
            borderRadius: step === 4 ? "5px 5px 0px 0px" : null,
          }}
          onClick={() => setStep(4)}
        >
          {" "}
          <FiIcons.FiShare />
          <p
            style={{
              color: step === 4 ? "#000000" : null,
            }}
          >
            Social Media
          </p>
        </h5>
        <h5
          style={{
            background: step === 5 ? "#ffffff" : null,
            color: step === 5 ? "#000000" : null,
            borderRadius: step === 5 ? "5px 5px 0px 0px" : "0px 5px 0px 0px",
          }}
          onClick={() => setStep(5)}
        >
          {" "}
          <FiIcons.FiKey />
          <p
            style={{
              color: step === 5 ? "#000000" : null,
            }}>Api Keys</p>
        </h5>
      </div>
      <div className="stepBody">
        {step === 1 && <Setting />}
        {step === 2 && <Seo />}
        {step === 3 && <Contact />}
        {step === 4 && <Socialmedia />}
        {step === 5 && <Api />}
      </div>
    </div>
  );
};

export default SettingsAdmin;

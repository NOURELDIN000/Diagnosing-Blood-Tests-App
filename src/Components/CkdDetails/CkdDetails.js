import './CkdDetails.css';

import React from 'react'

const CkdDetails = () => {
  return (
    <div className="container ckd-details">
    <h1>Chronic Kidney Disease (CKD)</h1>
    <p>Chronic Kidney Disease (CKD) is a medical condition characterized by a gradual loss of kidney function over time. It involves damage to the kidneys, which affects their ability to filter waste and excess fluids from the blood. This progressive condition can lead to a buildup of waste products in the body, causing a variety of health problems.</p>

    <h2>Key Aspects of CKD:</h2>

    <h3>Stages of CKD:</h3>
    <ul>
      <li><strong>Stage 1:</strong> Kidney damage with normal or increased GFR (90 mL/min or higher).</li>
      <li><strong>Stage 2:</strong> Mild reduction in GFR (60-89 mL/min).</li>
      <li><strong>Stage 3:</strong> Moderate reduction in GFR (30-59 mL/min).</li>
      <li><strong>Stage 4:</strong> Severe reduction in GFR (15-29 mL/min).</li>
      <li><strong>Stage 5:</strong> Kidney failure (GFR less than 15 mL/min) or end-stage renal disease (ESRD), requiring dialysis or a kidney transplant.</li>
    </ul>

    <h3>Causes:</h3>
    <ul>
      <li>Diabetes (Diabetic Nephropathy)</li>
      <li>Hypertension (High Blood Pressure)</li>
      <li>Glomerulonephritis (inflammation of the kidney's filtering units)</li>
      <li>Polycystic Kidney Disease (a genetic disorder causing cysts in the kidneys)</li>
      <li>Prolonged obstruction of the urinary tract (from conditions such as enlarged prostate, kidney stones, or certain cancers)</li>
      <li>Recurrent kidney infections</li>
    </ul>

    <h3>Symptoms:</h3>
    <p>Early stages of CKD often have no symptoms. As the disease progresses, symptoms may include:</p>
    <ul>
      <li>Fatigue and weakness</li>
      <li>Swelling in the legs, ankles, or feet (edema)</li>
      <li>Shortness of breath</li>
      <li>Nausea and vomiting</li>
      <li>Persistent itching</li>
      <li>High blood pressure that is difficult to control</li>
      <li>Changes in urine output (frequency and amount)</li>
      <li>Muscle cramps, especially at night</li>
    </ul>

    <h3>Diagnosis:</h3>
    <p>Diagnosis of CKD involves:</p>
    <ul>
      <li>Blood tests to measure GFR and check for elevated levels of waste products like creatinine and urea.</li>
      <li>Urine tests to detect protein or blood in the urine.</li>
      <li>Imaging tests (ultrasound, CT scan) to visualize kidney structure and identify abnormalities.</li>
      <li>Kidney biopsy in some cases to determine the specific type of kidney disease.</li>
    </ul>

    <h3>Management and Treatment:</h3>
    <p>Management of CKD focuses on slowing the progression of the disease and managing symptoms:</p>
    <ul>
      <li>Controlling blood sugar levels in diabetic patients.</li>
      <li>Managing blood pressure with medications such as ACE inhibitors or ARBs.</li>
      <li>Dietary modifications, including reducing salt and protein intake.</li>
      <li>Medications to control symptoms such as anemia, high cholesterol, and bone health issues.</li>
      <li>Dialysis or kidney transplant for advanced stages of CKD (Stage 5).</li>
    </ul>

    <h3>Prevention:</h3>
    <p>Preventative measures include:</p>
    <ul>
      <li>Maintaining a healthy blood pressure and blood sugar levels.</li>
      <li>Regular check-ups, especially for those with risk factors.</li>
      <li>Avoiding smoking and excessive use of medications that can harm the kidneys, such as nonsteroidal anti-inflammatory drugs (NSAIDs).</li>
      <li>Staying hydrated and maintaining a healthy diet.</li>
    </ul>

    <p>CKD is a serious and potentially life-threatening condition if not managed properly. Early detection and treatment are crucial in preventing the progression to end-stage renal disease.</p>
  </div>
  )
}

export default CkdDetails

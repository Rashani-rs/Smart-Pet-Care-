// DiagnosisTest.js

import React from "react";
import "./DiagnosisTest.css";
import skinAllergyImage from "../images/skin diseses.jpeg";
import liverDiseaseImage from "../images/liver.jpeg";
import lymphomaImage from "../images/Lyphoma.jpeg";
import kidneyDiseaseImage from "../images/kidney.jpeg";
import arthritisImage from "../images/arthitics.jpeg";
import heartDiseaseImage from "../images/heart.jpeg";
import oralInfectionImage from "../images/inflections.jpeg";
import hypothyroidismImage from "../images/Hypothy.jpeg";

const DiagnosisTest = () => {
  return (
    <div className="diagnosis-container">
      <div className="diagnosis-box">
        <img src={skinAllergyImage} alt="Skin Allergy" />
        <h1>Skin Allergy</h1>
        <p>
          Pets can experience skin allergies, causing itching, redness, and
          irritation. Common allergens include pollen, certain foods, and flea
          saliva.Skin diseases in pets can vary widely and may include
          conditions such as dermatitis, hot spots, fungal infections, and
          mange. Symptoms often include itching, redness, inflammation, hair
          loss, and skin lesions. Common causes of skin diseases include
          allergies, parasites, infections, hormonal imbalances, and
          environmental factors. Treatment typically involves identifying the
          underlying cause and addressing it with medications, topical
          treatments, dietary changes, and environmental management.
        </p>
      </div>
      <div className="diagnosis-box">
        <img src={liverDiseaseImage} alt="Liver Disease" />
        <h1>Liver Diseases</h1>
        <p>
          Liver disease in pets can manifest in various ways, such as jaundice,
          weight loss, vomiting, and increased thirst. Early detection is
          crucial for effective treatment.Liver disease in pets can be caused by
          various factors, including infections, toxins, medications, genetics,
          and metabolic disorders. Symptoms may include jaundice (yellowing of
          the skin and eyes), vomiting, diarrhea, lethargy, weight loss, and
          increased thirst. Diagnosis usually involves blood tests, imaging
          studies, and sometimes liver biopsies. Treatment depends on the
          underlying cause but may include medications, dietary changes,
          supportive care, and sometimes surgery.
        </p>
      </div>
      {/* Add similar JSX elements for other disease symptoms */}
      <div className="diagnosis-box">
        <img src={lymphomaImage} alt="Lymphoma" />
        <h1>Lymphoma</h1>
        <p>
          Lymphoma, also known as lymphosarcoma, is a type of cancer that
          affects the lymphatic system in pets. It can occur in various parts of
          the body, including lymph nodes, spleen, liver, bone marrow, and
          gastrointestinal tract. Symptoms may include swollen lymph nodes,
          lethargy, weight loss, loss of appetite, vomiting, diarrhea, and
          difficulty breathing. Diagnosis typically involves biopsies, blood
          tests, imaging studies, and sometimes bone marrow aspirates. Treatment
          options may include chemotherapy, radiation therapy, surgery, and
          supportive care.
        </p>
      </div>
      <div className="diagnosis-box">
        <img src={kidneyDiseaseImage} alt="KidneyDisease" />
        <h1>Kidney Disease</h1>
        <p>
          Kidney disease, also known as renal disease or kidney failure, is a
          common condition in pets, especially in older animals. It can be acute
          or chronic and may result from various factors, including infections,
          toxins, medications, genetic predisposition, and underlying health
          conditions. Symptoms may include increased thirst, increased
          urination, decreased appetite, weight loss, vomiting, diarrhea,
          lethargy, and changes in urine output or quality. Diagnosis involves
          blood tests, urine tests, imaging studies, and sometimes kidney
          biopsies. Treatment aims to manage symptoms, slow disease progression,
          and support kidney function through medications, dietary changes,
          fluid therapy, and other supportive measures.
        </p>
      </div>
      <div className="diagnosis-box">
        <img src={arthritisImage} alt="Arthritis" />
        <h1>Arthritis</h1>
        <p>
          Arthritis, or degenerative joint disease, is a common condition in
          pets, particularly in older animals and those with genetic
          predispositions or previous joint injuries. It involves inflammation
          and degeneration of joint tissues, leading to pain, stiffness,
          swelling, and reduced mobility. Symptoms may include limping,
          difficulty rising or climbing stairs, reluctance to exercise,
          lameness, and behavioral changes. Diagnosis typically involves
          physical examinations, X-rays, and sometimes joint fluid analysis.
          Treatment focuses on managing pain and inflammation with medications,
          weight management, physical therapy, dietary supplements, and
          lifestyle modifications.
        </p>
      </div>
      <div className="diagnosis-box">
        <img src={heartDiseaseImage} alt="HeartDisease" />
        <h1>Heart Disease</h1>
        <p>
          Heart disease in pets can affect the heart's structure or function and
          may include conditions such as congestive heart failure,
          cardiomyopathy, valvular disease, and heartworm disease. Symptoms may
          vary depending on the specific type and severity of the condition but
          can include coughing, difficulty breathing, exercise intolerance,
          lethargy, weakness, fainting, and fluid retention (e.g., in the
          abdomen or limbs). Diagnosis typically involves physical examinations,
          chest X-rays, electrocardiograms (ECG/EKG), echocardiograms
          (ultrasound), and blood tests. Treatment aims to manage symptoms, slow
          disease progression, and improve quality of life through medications,
          dietary changes, exercise restrictions, and sometimes surgical
          interventions.
        </p>
      </div>
      <div className="diagnosis-box">
        <img src={oralInfectionImage} alt="OralInfection" />
        <h1>Oral Inflections</h1>
        <p>
          Oral infections, such as periodontal disease, gingivitis, and tooth
          abscesses, are common in pets and can lead to pain, discomfort, and
          systemic health issues if left untreated. Symptoms may include bad
          breath, swollen or bleeding gums, loose teeth, difficulty eating,
          drooling, pawing at the mouth, and reluctance to play or chew.
          Diagnosis typically involves dental examinations, dental X-rays, and
          sometimes bacterial cultures. Treatment may include professional
          dental cleanings, tooth extractions, antibiotics, pain medications,
          and home dental care (e.g., tooth brushing, dental diets, dental
          chews).
        </p>
      </div>
      <div className="diagnosis-box">
        <img src={hypothyroidismImage} alt="Hypothyroidism" />
        <h1>Hypothyroidism</h1>
        <p>
          Hypothyroidism is a condition in pets where the thyroid gland does not
          produce enough thyroid hormone, leading to metabolic imbalances and
          various symptoms. Common signs may include weight gain, lethargy, hair
          loss, dry or flaky skin, cold intolerance, muscle weakness, slow heart
          rate, and behavioral changes. Diagnosis involves blood tests to
          measure thyroid hormone levels and may also include thyroid function
          tests and imaging studies. Treatment typically involves lifelong
          thyroid hormone replacement therapy with medications, along with
          regular monitoring and adjustments to dosage as needed.
        </p>
      </div>
    </div>
  );
};

export default DiagnosisTest;

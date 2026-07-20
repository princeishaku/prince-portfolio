import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "House Price Prediction",
    category: "Regression",
    description:
      "Predict house prices using machine learning with a FastAPI web application.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "FastAPI",
      "Pandas",
      "NumPy",
    ],
    image: "/projects/house-price-prediction.png",
    github:
      "https://github.com/princeishaku/house-price-prediction",
    demo:
      "https://house-price-prediction-w2u0.onrender.com",
  },

  {
    id: 2,
    title: "Customer Churn Prediction",
    category: "Classification",
    description:
      "Predict customer churn to help businesses improve customer retention.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-Learn",
      "Pandas",
    ],
    image: "/projects/customer-churn-prediction.png",
    github:
      "https://github.com/princeishaku/customer-churn-prediction",
    demo:
      "https://customer-churn-prediction-y22l.onrender.com",
  },

  {
    id: 3,
    title: "Customer Segmentation",
    category: "Clustering",
    description:
      "Segment customers into meaningful groups using K-Means clustering.",
    technologies: [
      "Python",
      "K-Means",
      "FastAPI",
      "Scikit-Learn",
    ],
    image: "/projects/customer-segmentation.png",
    github:
      "https://github.com/princeishaku/customer-segmentation",
    demo:
      "https://customer-segmentation-u3ay.onrender.com",
  },

  {
    id: 4,
    title: "Credit Card Fraud Detection",
    category: "Fraud Detection",
    description:
      "Detect fraudulent credit card transactions using machine learning.",
    technologies: [
      "Python",
      "Random Forest",
      "FastAPI",
      "Scikit-Learn",
    ],
    image:
      "/projects/credit-card-fraud-detection.png",
    github:
      "https://github.com/princeishaku/credit-card-fraud-detection",
    demo:
      "https://credit-card-fraud-detection-pprz.onrender.com",
  },

  {
    id: 5,
    title: "Loan Approval Prediction",
    category: "Classification",
    description:
      "Predict loan approval decisions based on applicant information.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-Learn",
      "Pandas",
    ],
    image:
      "/projects/loan-approval-prediction.png",
    github:
      "https://github.com/princeishaku/loan-approval-prediction",
    demo:
      "https://loan-approval-prediction-5ni3.onrender.com",
  },
];
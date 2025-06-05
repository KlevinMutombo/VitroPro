import React from "react";
import ReactDOM from "react-dom/client";

function ConfirmationPage() {
  return <h1>Confirm!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<ConfirmationPage />);

export default ConfirmationPage;
import React from "react";
import ReactDOM from "react-dom/client";

function BookingPage() {
  return <h1>Book!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<BookingPage />);

export default BookingPage;
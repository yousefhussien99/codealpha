export default function Normal({ normalColor, handleColor }) {
  return (
    <div className="d-flex align-items-center mt-4">
      <h5 className="me-2 me-md-4 text-start">Select Color:</h5>
      <input
        type="color"
        name="normal-color"
        value={normalColor}
        onChange={handleColor}
      />
    </div>
  );
}

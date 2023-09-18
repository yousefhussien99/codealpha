export default function LinearGradient({
  grad,
  handleGradient,
  handleDirection,
  direction,
}) {
  return (
    <>
      <div className="d-flex align-items-center mt-3 justify-content-between">
        <h6 className="me-2 me-md-4 text-start">Select Color 1:</h6>
        <input
          type="color"
          name="color1"
          value={grad.c1}
          onChange={handleGradient}
        />
      </div>

      <div className="d-flex align-items-center mt-2 justify-content-between">
        <h6 className="me-2 me-md-4 text-start">Select Color 2:</h6>
        <input
          type="color"
          name="color2"
          value={grad.c2}
          onChange={handleGradient}
        />
      </div>
      <div className="d-flex align-items-center mt-2 justify-content-between direction">
        <h6 className="me-2 me-md-4 text-start">Direction:</h6>
        <div className="">
          <input
            className="me-2"
            type="radio"
            id="left"
            name="direction"
            value="left"
            checked={direction == "left"}
            onChange={handleDirection}
          />
          <label htmlFor="left">←</label>
        </div>
        <div className="">
          <input
            className="me-2"
            type="radio"
            id="right"
            name="direction"
            value="right"
            checked={direction == "right"}
            onChange={handleDirection}
          />
          <label htmlFor="right">→</label>
        </div>
        <div className="">
          <input
            className="me-2"
            type="radio"
            id="top"
            name="direction"
            value="top"
            checked={direction == "top"}
            onChange={handleDirection}
          />
          <label htmlFor="top">↑</label>
        </div>
        <div className="">
          <input
            className="me-2"
            type="radio"
            id="bottom"
            name="direction"
            value="bottom"
            checked={direction == "bottom"}
            onChange={handleDirection}
          />
          <label htmlFor="bottom">↓</label>
        </div>
      </div>
    </>
  );
}

export default function RadialGradient({
    grad,
    handleGradient,
    handleRadialDirection,
    dirRadial,
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
          <div>
            <input
              className="me-2"
              type="radio"
              id="circle"
              name="radDirection"
              value="circle"
              checked={dirRadial== "circle"}
              onChange={handleRadialDirection}
            />
            <label htmlFor="circle">Circle</label>
          </div>
          <div>
            <input
              className="me-2"
              type="radio"
              id="ellipse"
              name="radDirection"
              value="ellipse"
              checked={dirRadial == "ellipse"}
              onChange={handleRadialDirection}
            />
            <label htmlFor="ellipse">Ellipse</label>
          </div>
        </div>
      </>
    );
  }
  
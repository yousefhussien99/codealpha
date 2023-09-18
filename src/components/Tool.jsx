import Normal from "./Normal";
import LinearGradient from "./LinearGradient";
import RadialGradient from "./RadialGradient";

export default function Tool({
  type,
  normalColor,
  handleType,
  handleColor,
  grad,
  handleGradient,
  direction,
  handleDirection,
  dirRadial,
  handleRadialDirection,
}) {
  return (
    <>
      <div className="tool-container">
        <div className="shadower">
          <div className="content text-center">
            <div className="intro">
              <h1>Background Generator</h1>
              <p>Generate a your fav colors as backgrounds in a simple way!</p>
            </div>

            <div className="tool">
              {/*type change*/}
              <h5 className="text-start">Select background type:</h5>
              <div className="d-flex type-radios justify-content-evenly">
                <div className="m-md-2">
                  <input
                    className="me-md-3"
                    type="radio"
                    id="normal"
                    name="type"
                    value="normal"
                    checked={type == "normal"}
                    onChange={handleType}
                  />
                  <label htmlFor="normal">Normal</label>
                </div>
                <div className="m-md-2">
                  <input
                    className="me-md-3"
                    type="radio"
                    id="lgradient"
                    name="type"
                    value="lgradient"
                    checked={type == "lgradient"}
                    onChange={handleType}
                  />
                  <label htmlFor="lgradient">Linear Gradient</label>
                </div>
                <div className="m-md-2">
                  <input
                    className="me-md-3"
                    type="radio"
                    id="rgradient"
                    name="type"
                    value="rgradient"
                    checked={type == "rgradient"}
                    onChange={handleType}
                  />
                  <label htmlFor="rgradient">Radial Gradient</label>
                </div>
              </div>

              {/*Normal mode*/}
              {type == "normal" && (
                <Normal normalColor={normalColor} handleColor={handleColor} />
              )}

              {/*Linear Gradient mode*/}
              {type == "lgradient" && (
                <LinearGradient
                  direction={direction}
                  grad={grad}
                  handleDirection={handleDirection}
                  handleGradient={handleGradient}
                />
              )}

              {/*Radial Gradient mode*/}
              {type == "rgradient" && (
                <RadialGradient
                  dirRadial={dirRadial}
                  grad={grad}
                  handleRadialDirection={handleRadialDirection}
                  handleGradient={handleGradient}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

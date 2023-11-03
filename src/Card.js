import React from 'react';

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex align-items-center justify-content-start">
          <div className="card" style={{ width: '18rem', backgroundColor: 'blue' }}>
            <div className="card-body" style={{ color: 'white' }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-4 d-flex align-items-center justify-content-center">
          <div className="card" style={{ width: '18rem', backgroundColor: 'red' }}>
            <div className="card-body" style={{ color: 'white' }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-4 d-flex align-items-center justify-content-end">
          <div className="card" style={{ width: '18rem', backgroundColor: 'green' }}>
            <div className="card-body" style={{ color: 'white' }}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
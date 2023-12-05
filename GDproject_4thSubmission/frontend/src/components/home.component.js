// home.component.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.component.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to Recipe World</h2>

      {/* Buttons */}
      <div className="text-center mb-4">
        <Link to="/recipe" className="btn btn-primary mr-2">
          Search for Recipe
        </Link>
        <Link to="/upload" className="btn btn-success">
          Upload Recipe
        </Link>
      </div>

      {/* Boxes */}
      <div className="row">
        {/* Box 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2020/06/02161229/tinyavocadotoast.webp"
              className="card-img-top"
              alt="Food 1"
            />
            <div className="card-body">
              <div>
                <p>
                  Neet cooking classes? Explore a variety of recipes and
                  cooking tips.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://www.nospoonnecessary.com/wp-content/uploads/2018/07/poke-bowl-toppings-1.jpg.webp"
              className="card-img-top"
              alt="Food 2"
            />
            <div className="card-body">
              <div>
                <p>
                  See the latest uploads from our community and get inspired for
                  your next meal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-with-fruit-600x600.jpg"
              className="card-img-top"
              alt="Food 3"
            />
            <div className="card-body">
              <div>
                <p>
                  Share your recipes and cooking experiences with the world.
                  Let's create together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SettingSidebar from "../Components/SettingSidebar";
import admin from "../../assets/json/admin.json";
import Loader from "../Components/Loader";

const AdminView = () => {
  const { id } = useParams();
  const [profiledata, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = (id) => {
    const profiledata = admin.find((item) => item.userid === id);
    setData(profiledata);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-3">
          <SettingSidebar />
        </div>
        <div className="col-lg-9">
          {loading ? <Loader /> : (
            <div className="card py-5">
               <div className="row justify-content-center">
              <div className="col-lg-2">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                  className="img-fluid"
                  alt="profile"
                />

                <div className="my-4 text-center">
                  <h5>{profiledata.name}</h5>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-3">
                    <p>Email</p>
                  </div>
                  <div className="col-lg-9">
                    <h6>{profiledata.email}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <p>User Id</p>
                  </div>
                  <div className="col-lg-9">
                    <h6>{profiledata.userid}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <p>User Type</p>
                  </div>
                  <div className="col-lg-9">
                    <h6>{profiledata.type}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <p>UUID</p>
                  </div>
                  <div className="col-lg-9">
                    <h6>{profiledata.uuid}</h6>
                  </div>
                </div>
                <div className="border-hr"></div>
                <div className="row">
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Mobile Number</p>
                    <h6>{profiledata.phone}</h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Date of Birth</p>
                    <h6>{profiledata.address.zipcode}</h6>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Address</p>
                    <h6>
                      {profiledata.address.street} {profiledata.address.city}
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">State</p>
                    <h6>-</h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Country</p>
                    <h6>-</h6>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminView;
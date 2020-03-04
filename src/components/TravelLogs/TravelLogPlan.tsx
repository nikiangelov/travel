import React, { ReactElement } from 'react';

type Place = {
  id: number;
  title: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  location: string;
  imageUrl: string;
};
type TravelLogProps = {
  places: Place[];
};

function TravelLogPlan({ places }: TravelLogProps): ReactElement {
  return (
    <div className="px-2">
      {places.map(place => (
        <div
          key={`plan_place${place.id}`}
          className="travellog_plan_step step_filled"
        >
          <div className="travellog_plan_step_el">
            <em></em>
          </div>
          <div>
            <div className="card travellog-card white-card-elevated elevation-4 border-0 border-radius-lg">
              <div className="row no-gutters">
                <div className="col-md-3 p-3">
                  <div
                    className="card-image inset-shadow bg-cover-img rounded"
                    style={{
                      backgroundImage: `url('${place.imageUrl}')`,
                    }}
                  />
                </div>
                <div className="col-md-9 py-3 px-3 pl-md-1">
                  <h5>{place.title}</h5>
                  <p className="small">{place.location}</p>
                  <p className="mb-0">
                    <small className="text-muted">
                      {`Координати: ${place.coordinates.lat}, ${place.coordinates.lng}`}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelLogPlan;

import React, { ReactElement } from 'react';

function TravelLogHorizontalListItem({}): ReactElement {
  return (
    <div className="user-review-card white-card-elevated mt-4 p-4">
      <div className="row">
        <div className="col-3">
          <div
            className="movie-card-pic no-overlay bg-cover-img mt-n5 user-review-movie-poster"
            data-poster-path="/bm6zKJjKYKrIy3dcnOLk0kF85cl.jpg"
            style={{
              backgroundImage:
                'url("/images/travellogs/nikiangelov/ustina.JPG")',
            }}
          ></div>
        </div>
        <div className="col-9">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <a
                href="#"
                className="navbar-user-avatar rounded-circle bg-cover-img mr-2 user-review-avatar"
                style={{
                  backgroundImage:
                    'url("https://nikiangelov.com/imgs/profile256.jpg");',
                }}
              ></a>
              <span className="h5 mb-0 mr-2">
                <span className="user-review-fullname">Николай</span>{' '}
                <span className="font-weight-normal text-muted">написа </span>
                {/* <b className="user-review-rating">пътепис</b> */}
              </span>
            </div>
            <a href="#" className="btn btn-sm btn-outline-primary">
              Прочети
            </a>
          </div>
          <div className="d-flex bg-light py-2 px-3 rounded-lg align-items-start">
            <div className="flex-fill user-review-comment">
              <h6>Съботна разходка край Пловдив</h6>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                temporibus similique neque aliquid voluptatum doloremque
                repellat quae, labore nesciunt voluptatibus! Quod at fugiat
                autem dolor commodi eius...
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2 text-muted">
            <small>
              Дестинации:{' '}
              <a href="#" className="user-review-movie-name title">
                Перущица
              </a>
              {', '}
              <a href="#" className="user-review-movie-name title">
                Устина
              </a>
            </small>
            <small className="user-review-date">13 Декември 2019г. </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelLogHorizontalListItem;

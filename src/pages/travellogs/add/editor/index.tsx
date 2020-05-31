import * as React from 'react';
import AnimatedLayout from '../../../../components/Layout/AnimatedLayout';
import withApollo from '../../../../apollo/with-apollo';
import Editor from '../../../../components/Editor';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/bg';
import { motion } from 'framer-motion';
import { slideUpVariants } from '../../../../constants/animations';
import { useRouter } from 'next/router';
import { useTravellogQuery } from '../../../../graphql/queries/travellog.graphql';
import useI18n from '../../../../hooks/useI18n';
import { useEditTravellogMutation } from '../../../../graphql/mutations/travellog.graphql';

const EditorPage: React.FunctionComponent = () => {
  const router = useRouter();
  const i18n = useI18n();
  const [successMessage, setSuccessMessage] = React.useState(false);
  let travellogID = router.query.id || '';
  if (!travellogID) {
    router.push('/');
  }
  if (Array.isArray(travellogID)) {
    travellogID = travellogID[0];
  }
  const { data: travellogData, loading } = useTravellogQuery({
    variables: {
      id: travellogID,
    },
  });
  const [
    editTravellogMutation,
    { loading: isSaving },
  ] = useEditTravellogMutation();

  if (loading || !travellogData || !travellogData.travellog) {
    // todo: make it stylish
    return (
      <AnimatedLayout>
        <h2>Loading...</h2>
      </AnimatedLayout>
    );
  }

  const collectData = () => {
    const titleEl = document.getElementById('travellog-editable-title');
    const descriptionEl = document.getElementById(
      'travellog-editable-description',
    );
    const editorEl = document.querySelector('.ql-editor');
    return {
      title: titleEl?.innerText,
      description: descriptionEl?.innerText,
      editorContent: editorEl?.innerHTML,
    };
  };
  const saveTravellog = async () => {
    if (
      !travellogData ||
      !travellogData.travellog ||
      !travellogData.travellog._id
    )
      return;
    const editedData = collectData();
    await editTravellogMutation({
      variables: {
        id: travellogData.travellog._id,
        travellog: {
          title: editedData.title,
          short_description: editedData.description,
          html_content: editedData.editorContent,
        },
      },
    }).then(() => {
      setSuccessMessage(true);
    });
    console.log({ editedData });
  };

  const {
    title,
    short_description,
    html_content,
    author,
    created_at,
    updated_at,
    price,
    category,
    duration,
    is_draft,
    season,
  } = travellogData.travellog;

  if (successMessage) {
    return <SuccessMessageAlert />;
  }

  return (
    <AnimatedLayout>
      <main className="main-layout-container">
        <div className="row justify-content-between">
          <div className="col-lg-9 pr-5">
            {/* Title */}
            <section className="mb-5">
              <div className="">
                <div className="d-flex justify-content-between">
                  <h1
                    className="mb-3"
                    id="travellog-editable-title"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    data-placeholder="Въведете заглавие тук..."
                  >
                    {!!title && title}
                  </h1>
                </div>
                <p
                  className="text-muted mb-3"
                  contentEditable={true}
                  id="travellog-editable-description"
                  suppressContentEditableWarning={true}
                  data-placeholder="Добави кратко описание на пътеписа тук..."
                >
                  {!!short_description && short_description}
                </p>
              </div>
            </section>
            {/* Main content */}
            <div style={{ zIndex: 1100, position: 'relative' }}>
              <Editor initialValue={html_content} />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="white-card-elevated py-3 px-4 elevation-2 mb-4">
              <button
                className="btn btn-success w-100 mb-3"
                onClick={saveTravellog}
                disabled={!!isSaving}
              >
                {!!isSaving && (
                  <span
                    className="spinner-grow spinner-grow-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {!!is_draft ? 'Запази като чернова' : 'Запази'}
              </button>
              <button className="btn btn-light w-100">
                Публикувай в сайта
              </button>
              <hr />
              <p className="small text-muted m-0">
                Статус:
                {!!is_draft && (
                  <span className="text-warning ml-1">Чернова</span>
                )}
                {!is_draft && (
                  <span className="text-info ml-1">Публикувано</span>
                )}
              </p>
              <hr />
              {!!created_at && (
                <p className="small text-muted m-0 mb-1">
                  Добавено на:{' '}
                  {moment(parseInt(created_at)).format('DD MMM YYYYг.')}
                </p>
              )}
              {!!updated_at && (
                <p className="small text-muted m-0 mb-1">
                  Последна редакция:{' '}
                  {moment(parseInt(updated_at)).format('DD MMM YYYYг.')}
                </p>
              )}
            </div>
            {/* Author and meta info */}
            <div className="white-card-elevated py-3 px-4 elevation-2 mb-4">
              <div className="d-flex justify-content-between">
                <h5 className="mb-3">Автор</h5>
              </div>
              <div className="d-flex mb-3">
                <div className="mr-3">
                  <Link href="/profile">
                    <a>
                      <img
                        src="/images/avatars/profile256.jpg"
                        alt=""
                        className="rounded-circle"
                        width="50px"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex-fill border border-top-0 border-left-0 border-right-0">
                  {!!author?.firstName && !!author.lastName && (
                    <h6 className="mb-1">
                      <Link href="/profile">
                        <a className="text-dark">{`${author.firstName} ${author.lastName}`}</a>
                      </Link>
                    </h6>
                  )}
                  <p className="small p-0 mb-2 text-muted">
                    18 държави &middot; 5 пътеписа
                  </p>
                </div>
              </div>
            </div>
            {/* Meta info */}
            <div className="white-card-elevated py-3 px-4 mb-4 elevation-2">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Данни за пътешествието</h5>
              </div>
              {!!price && (
                <>
                  <div>
                    <h6 className="mb-1">
                      Цена:{' '}
                      <small className="text-muted">(приблизително)</small>
                    </h6>
                    <p className="text-muted font-weight-normal mb-0">
                      {i18n.t(`travellogs.price.${price}`)}
                    </p>
                  </div>
                  <hr />
                </>
              )}
              {!!duration && (
                <>
                  <div>
                    <h6 className="mb-1">Времетраене:</h6>
                    <p className="text-muted font-weight-normal">
                      {i18n.t(`travellogs.time.${duration}`)}
                    </p>
                  </div>
                  <hr />
                </>
              )}
              {!!season && (
                <>
                  <div>
                    <h6 className="mb-2">Подходящо за сезон:</h6>
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mr-2"
                      >
                        {i18n.t(`travellogs.seasons.${season}`)}
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              )}
              {!!category && (
                <>
                  <div>
                    <h6 className="mb-2">Категория:</h6>
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary mr-2"
                      >
                        {i18n.t(`travellogs.categories.${category}`)}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Guides */}
            <div className="white-card-elevated py-3 px-4 mb-4 elevation-2 sticky-top">
              <div className="d-flex justify-content-between">
                <h5 className="mb-4">Включени обекти</h5>
              </div>
              <div className="aside-attraction-list"></div>
              <div className="d-flex justify-content-center">
                <button className="btn flex-fill text-dark btn-light mt-2 ">
                  <i className="fas fa-map-marker-alt mr-2" />
                  Виж върху картата
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
};

function SuccessMessageAlert() {
  return (
    <AnimatedLayout>
      <motion.div variants={slideUpVariants}>
        <div className="row">
          <div className="col-md-6 mx-auto mb-5 mt-3">
            <div className="white-card-elevated py-5 px-5 elevation-5 text-center">
              <img
                src={require('../../../../assets/illustrations/write.svg')}
                className="card-illustration mb-4"
                alt="Write illustration"
              />
              <h3 className="text-primary mb-2">Страхотно!</h3>
              <h2 className="mb-5">Твоят пътепис беше запазен успешно!</h2>
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-success w-100">
                    Разгледай го в сайта
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-light w-100">
                    Виж всички пътеписи
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedLayout>
  );
}
export default withApollo(EditorPage, {
  protectedRoute: true,
});

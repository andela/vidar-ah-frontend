import React, { useEffect, useState } from 'react';
import {
  Container,
  Col,
  Table
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from '../../components/banner/Index';
import ContentHeader from '../../components/contentHeader/Index';
import './reportPage.scss';
import Footer from '../../components/footer/Index';
import { getReports } from '../../redux/actions/reports';
import Loader from '../../components/loader/Index';

const ReportsPage = (props) => {
  const { history, reports } = props;
  const [loading, setLoading] = useState(false);

  const makeRequest = async () => {
    setLoading(true);
    await props.getReports();
    setLoading(false);
  };

  useEffect(() => {
    makeRequest();
  }, {});

  const renderComponent = () => {
    if (loading) return <Loader />;
    return (
      <>
        <Banner history={history} showButton={false} />
        <Container>
          <Col className="trending">
            <ContentHeader textHeader="Article reports" />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Article</th>
                  <th>Report type</th>
                  <th>Message</th>
                  <th>Reported by</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {reports.map(report => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>
                      <Link to={`/articles/${report.article.slug}`}>
                        {report.article.title}
                      </Link>
                    </td>
                    <td>{report.type}</td>
                    <td>{report.message}</td>
                    <td>{report.user.name}</td>
                    <td>{report.user.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Container>
        <Footer />
      </>
    );
  };

  return (
    <div className="reports-container">
      {renderComponent()}
    </div>
  );
};
const mapStateToProps = state => ({
  reports: state.reportsReducer.reports
});

ReportsPage.propTypes = {
  history: PropTypes.object.isRequired,
  reports: PropTypes.array.isRequired,
  getReports: PropTypes.func.isRequired,
};

export default connect(() => mapStateToProps, { getReports })(ReportsPage);

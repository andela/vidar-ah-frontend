import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import {
  Alert, Row, Col, Card
} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import ReactQuill from 'react-quill';
import Button from '../button/Index';
import timeStamp from '../../utils/timeStamp';
import { deleteComment, editComment } from '../../redux/actions/comments';
import { getArticleRequest } from '../../redux/actions/articles';


const ViewComment = (props) => {
  const {
    comment, time, id, slug, userId, user
  } = props;

  const date = timeStamp(time);
  const [commentView, setCommentView] = useState({
    commentBody: ''
  });

  const [errors, setErrors] = useState([]);

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }


  const onEdit = async (value) => {
    const response = await props.editComment(slug, value, id);

    if (response.status !== 205) {
      setCommentView({ commentBody: '' });
      return setErrors(['An error occured. Please try again later']);
    }

    if (response.status === 205) {
      props.getArticleRequest(props.slug);
      setCommentView({ commentBody: '' });
    }
  };

  const onDelete = async () => {
    const response = await props.deleteComment(slug, id);

    if (response.status !== 205) {
      return setErrors(['An error occured. Please try again later']);
    }

    if (response.status === 205) {
      props.getArticleRequest(slug);
    }
  };

  const UpdateComment = () => {
    const [comments, setComments] = useState({
      updatedComment: ''
    });

    return (
      <div>
        <Row><Col md={{ span: 12 }}>{renderErrors(errors)}</Col></Row>
        <ReactQuill theme="snow" defaultValue={commentView.commentBody} onChange={(value) => { setComments({ updatedComment: value }); }} />
        <Button text="Update" onClick={() => { onEdit(comments.updatedComment); }} className="yellow-button-comment" />
      </div>
    );
  };


  return (
    commentView.commentBody ? (
      <div className="card-outline-comment">
        {' '}
        <UpdateComment />
      </div>
    ) : (

      <Card className="card-outline-comment">
        <Card.Body>
          <Card.Text>
            {ReactHtmlParser(comment)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <small className="text-muted">{date}</small>
            </Col>
            {
                user.id === userId ? (
                  <>
                    <Col xs lg="3">
                      <Button text="Edit" onClick={() => { setCommentView({ commentBody: comment }); }} className="yellow-button-comment" />
                    </Col>
                    <Col xs lg="3">
                      <Button text="Delete" onClick={() => { onDelete(slug, id); }} className="yellow-button-comment" />
                    </Col>
                  </>
                ) : null
              }

          </Row>
        </Card.Footer>
      </Card>
    )
  );
};

ViewComment.propTypes = {
  comment: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  getArticleRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.authReducer.currentUser
});

export default connect(() => mapStateToProps, {
  editComment,
  deleteComment,
  getArticleRequest
})(ViewComment);

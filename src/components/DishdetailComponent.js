import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Media } from "reactstrap";


class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    renderComments(comments){
      if(comments != null){
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </div>
            )
        });
        return (
          <div>
            <h4>Comments</h4>
            <Media className = "list-unstyled" list>
              {comment}
            </Media>
          </div>
        );
      }
      else {
        return (
            <div></div>
        );
      }
    }

    renderDish(dish) {
      if (dish != null){
        return (
          <div  className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        );
      }
      else {
        return (
            <div></div>
        );
      }
    }

    render(){
        return (
          <div>
             {this.renderDish(this.props.dish)}
          </div>
        );
    }
}

export default DishDetail;